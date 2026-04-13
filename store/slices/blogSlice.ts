import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '../../utils/api';

interface Post {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media_url?: string;
}

interface BlogState {
  posts: Post[];
  currentPost: Post | null;
  isLoading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
}

const initialState: BlogState = {
  posts: [],
  currentPost: null,
  isLoading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const fetchPosts = createAsyncThunk(
  'blog/fetchPosts',
  async (page: number, { rejectWithValue }) => {
    try {
      const posts = await api.getPosts(page);
      return posts;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch posts');
    }
  }
);

export const fetchPostBySlug = createAsyncThunk(
  'blog/fetchPostBySlug',
  async (slug: string, { rejectWithValue }) => {
    try {
      const post = await api.getPostBySlug(slug);
      return post;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch post');
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetBlog: (state) => {
      state.posts = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Posts
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.isLoading = false;
        if (state.page === 1) {
            state.posts = action.payload;
        } else {
            state.posts = [...state.posts, ...action.payload];
        }
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchPosts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch Single Post
      .addCase(fetchPostBySlug.pending, (state) => {
        state.isLoading = true;
        state.currentPost = null;
      })
      .addCase(fetchPostBySlug.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.currentPost = action.payload;
      })
      .addCase(fetchPostBySlug.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetBlog } = blogSlice.actions;
export default blogSlice.reducer;
