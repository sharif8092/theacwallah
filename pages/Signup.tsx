import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import api from '../utils/api';
import { AppDispatch } from '../store/store';
import { ICONS, COMPANY_NAME } from '../constants';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await api.signup({
        email: formData.email,
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        password: formData.password,
      });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Username or email might already exist.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center bg-slate-50 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center p-2 group-hover:rotate-6 transition-transform">
                    <img src="/logo.png" alt={COMPANY_NAME} className="w-full h-full object-contain" />
                </div>
              <span className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{COMPANY_NAME}</span>
            </Link>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Join the Experts</h1>
            <p className="text-slate-500 font-medium">Create an account for faster booking and exclusive offers.</p>
          </div>

          {/* Signup Card */}
          <div className="bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-white/50">
            {success ? (
              <div className="text-center py-10 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <ICONS.Check className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-4">Account Created!</h2>
                <p className="text-slate-500 font-bold mb-8">Redirecting you to the login page...</p>
                <div className="w-12 h-12 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin mx-auto" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-bold flex items-center gap-3 animate-fade-in-up">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                      <ICONS.X className="w-4 h-4" />
                    </div>
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">First Name</label>
                    <input
                      name="first_name"
                      type="text"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full bg-slate-100/50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-900"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Last Name</label>
                    <input
                      name="last_name"
                      type="text"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full bg-slate-100/50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-900"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Username</label>
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full bg-slate-100/50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-900"
                    placeholder="johndoe123"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-100/50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-900"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-1">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-slate-100/50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-900"
                    placeholder="Minimum 8 characters"
                    minLength={8}
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      'Create My Account'
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 font-bold text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:underline">Log In Here</Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                By creating an account, you agree to our <br/>
                <span className="text-slate-900">Terms of Service</span> and <span className="text-slate-900">Privacy Policy</span>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
