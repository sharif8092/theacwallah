
import React from 'react';

const reviews = [
  {
    name: "Rahul Sharma",
    area: "Rohini",
    rating: 5,
    text: "Excellent service! My AC wasn't cooling properly in the peak heat of June. Technician arrived in 90 minutes. Professional hub.",
    date: "2 weeks ago"
  },
  {
    name: "Priya Gupta",
    area: "Noida",
    rating: 5,
    text: "Best washing machine repair service in Delhi. They fixed my machine which other shops said couldn't be repaired. Genuine parts used.",
    date: "1 month ago"
  },
  {
    name: "Amit Verma",
    area: "Dwarka",
    rating: 5,
    text: "Reasonable rates for AC AMC. I have 4 ACs at my office and they maintain them perfectly. No issues since last 2 years.",
    date: "3 weeks ago"
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold uppercase text-[10px] tracking-widest mb-3">Customer Stories</h2>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            Trusted by Families
          </h2>
          <div className="flex items-center justify-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map(s => (
              <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-slate-900 font-bold ml-2">4.9/5 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(s => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic text-sm md:text-base flex-1">"{rev.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/100?u=user${i + 5}`} 
                    alt={rev.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">{rev.area}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
