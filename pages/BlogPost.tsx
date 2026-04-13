import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostBySlug } from '../store/slices/blogSlice';
import { RootState, AppDispatch } from '../store/store';
import { ICONS, COMPANY_NAME } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { currentPost, isLoading, error } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    if (slug) {
      dispatch(fetchPostBySlug(slug));
    }
    window.scrollTo(0, 0);
  }, [dispatch, slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-16 h-16 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !currentPost) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-slate-50 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-red-50">
             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                <ICONS.X className="w-6 h-6" />
             </div>
             <h2 className="text-2xl font-black text-slate-900 mb-4">Post Not Found</h2>
             <p className="text-slate-500 font-medium mb-8">The article you're looking for might have been moved or deleted.</p>
             <Link to="/blog" className="px-8 py-3 bg-blue-600 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all">Back to Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img 
          src={currentPost.featured_media_url || 'https://images.unsplash.com/photo-1590486803833-ffc6f98fb553?q=80&w=2000&auto=format&fit=crop'} 
          alt={currentPost.title.rendered} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8 md:p-24">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[10px] font-black uppercase tracking-widest mb-8 group">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:-translate-x-2 transition-transform">
                   <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </div>
                Back to insights
              </Link>
              <div className="flex items-center gap-4 text-white/70 text-[10px] font-black uppercase tracking-widest mb-6">
                <span>{new Date(currentPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span className="w-1 h-1 bg-white/30 rounded-full" />
                <span>By Experts Hub</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none" dangerouslySetInnerHTML={{ __html: currentPost.title.rendered }} />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 max-w-4xl lg:pr-12">
            <div 
              className="prose prose-slate prose-xl max-w-none 
                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-950
                prose-p:text-slate-600 prose-p:font-medium prose-p:leading-relaxed
                prose-strong:text-slate-900 prose-strong:font-black
                prose-img:rounded-[2rem] prose-img:shadow-2xl
                prose-a:text-blue-600 prose-a:font-black prose-a:no-underline hover:prose-a:underline
              "
              dangerouslySetInnerHTML={{ __html: currentPost.content.rendered }}
            />
            
            {/* Share & Footer */}
            <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
               <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share this</span>
                  <div className="flex gap-2">
                     <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all">
                        <ICONS.Phone className="w-4 h-4" /> {/* Swap with social icons if needed */}
                     </button>
                     <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-green-500 hover:text-white transition-all">
                        <ICONS.WhatsApp className="w-5 h-5" />
                     </button>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl overflow-hidden">
                     <img src="/logo.png" className="w-full h-full object-contain p-2" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-slate-950 uppercase tracking-widest mb-1">{COMPANY_NAME} Official</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Authorized Service Hub</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-12">
             <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-black text-slate-950 mb-4 tracking-tight leading-tight">Need expert help right now?</h4>
                <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed">Book a certified technician in under 60 seconds. Same-day service guaranteed.</p>
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
                   Book Service
                </button>
             </div>

             <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Popular Articles</h4>
                <div className="space-y-8">
                   {/* This could be populated from a 'popularPosts' slice or selector */}
                   <p className="text-xs font-bold text-slate-400 italic">Explore more in the blog section.</p>
                </div>
             </div>
          </aside>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
