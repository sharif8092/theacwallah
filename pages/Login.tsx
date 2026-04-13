import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../store/slices/authSlice';
import { RootState, AppDispatch } from '../store/store';
import { ICONS, COMPANY_NAME } from '../constants';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, error, token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center bg-slate-50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Logo & Header */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img src="/logo.png" alt={COMPANY_NAME} className="w-12 h-12 object-contain rounded-xl shadow-lg" />
              <span className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{COMPANY_NAME}</span>
            </Link>
            <h1 className="text-3xl font-black text-slate-900 mb-2">Welcome Back!</h1>
            <p className="text-slate-500 font-medium">Log in to manage your bookings and service inquiries.</p>
          </div>

          {/* Login Form Card */}
          <div className="bg-white/70 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold flex items-center gap-3 animate-fade-in-up">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                    <ICONS.X className="w-4 h-4" />
                  </div>
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Username or Email</label>
                <div className="relative group">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-slate-100/50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-900 group-hover:bg-white"
                    placeholder="Enter your username"
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                    {/* User Icon Placeholder */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3 ml-1">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Password</label>
                  <a href="#" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Forgot?</a>
                </div>
                <div className="relative group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-100/50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-900 group-hover:bg-white"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-3 group"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 font-bold text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:underline">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
