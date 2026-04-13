import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, setPage } from '../store/slices/blogSlice';
import { RootState, AppDispatch } from '../store/store';
import { ICONS, COMPANY_NAME } from '../constants';

const Blog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, isLoading, error, page, hasMore } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
              Latest Insights
           </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            The Expert <br/>
            <span className="text-blue-600 italic">Corner</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-xl">
             Professional tips, maintenance guides, and the latest trends in AC technology straight from {COMPANY_NAME}.
          </p>
        </div>

        {/* Featured Post (if exists) */}
        {posts.length > 0 && page === 1 && (
          <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
             <Link to={`/blog/${posts[0].slug}`} className="group relative block aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                    src={posts[0].featured_media_url || 'https://images.unsplash.com/photo-1554913409-7707afcb2d9d?q=80&w=2000&auto=format&fit=crop'} 
                    alt={posts[0].title.rendered}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                   <div className="max-w-2xl">
                      <span className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Featured Story</span>
                      <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 group-hover:text-blue-400 transition-colors" dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }} />
                      <p className="text-slate-300 font-medium mb-6 line-clamp-2 md:line-clamp-none max-w-xl" dangerouslySetInnerHTML={{ __html: posts[0].excerpt.rendered }} />
                      <div className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-widest">
                         <span>Read Article</span>
                         <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                         </div>
                      </div>
                   </div>
                </div>
             </Link>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {posts.map((post, index) => (
            // Skip the first one in the grid if we displayed it as featured
            (index === 0 && page === 1) ? null : (
              <article key={post.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full animate-fade-in-up" style={{ animationDelay: `${(index % 3) * 0.1}s` }}>
                <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.featured_media_url || 'https://images.unsplash.com/photo-1590486803833-ffc6f98fb553?q=80&w=1000&auto=format&fit=crop'} 
                    alt={post.title.rendered} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-lg">Technical</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <p className="text-slate-500 font-medium text-sm mb-8 line-clamp-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <div className="mt-auto">
                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-widest group/link">
                       Read More
                       <div className="w-6 h-6 border border-slate-200 rounded-full flex items-center justify-center group-hover/link:bg-slate-900 group-hover/link:text-white transition-all">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                       </div>
                    </Link>
                  </div>
                </div>
              </article>
            )
          ))}
        </div>

        {/* Loading / Error States */}
        {isLoading && (
            <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
            </div>
        )}

        {error && (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-red-50 mb-20 shadow-xl shadow-red-50">
               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                  <ICONS.X className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-black text-slate-900 mb-2">Oops! Couldn't load posts</h3>
               <p className="text-slate-500 font-medium mb-8 max-w-md mx-auto">{error}</p>
               <button onClick={() => dispatch(fetchPosts(page))} className="bg-slate-900 text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
                  Try Again
               </button>
            </div>
        )}

        {/* Pagination Trigger */}
        {hasMore && !isLoading && !error && posts.length > 0 && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="px-12 py-5 bg-white border-2 border-slate-100 rounded-full font-black text-slate-900 uppercase tracking-widest text-xs hover:border-blue-600 hover:text-blue-600 transition-all shadow-xl shadow-slate-200/50 active:scale-95"
            >
              Explore More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
