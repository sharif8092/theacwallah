import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openBooking } from '../store/slices/bookingSlice.ts';
import FloatingActions from '../components/FloatingActions.tsx';
import Contact from '../components/Contact.tsx';
import Reviews from '../components/Reviews.tsx';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants.tsx';
import * as ICONS from 'lucide-react';

const serviceData: Record<string, { title: string; description: string; features: string[]; icon: string }> = {
  'ac-repair': {
    title: 'Expert AC Repair',
    description: 'Get your air conditioner working perfectly with our expert repair services. We handle all brands and models, ensuring quick cooling and efficient performance.',
    features: ['Gas Refilling', 'PCB Repair', 'Cleaning & Servicing', 'Capacitor Replacement', 'Leakage Fix'],
    icon: 'Snowflake'
  },
  'washer-repair': {
    title: 'Washing Machine Repair',
    description: 'Specialized repair for top-load, front-load, and semi-automatic washing machines. We use genuine parts to ensure your machine lasts longer.',
    features: ['Drum Fix', 'Motor Repair', 'Timer Replacement', 'Inlet Valve Fix', 'Noise Reduction'],
    icon: 'WashingMachine'
  },
  'fridge-repair': {
    title: 'Refrigerator Repair',
    description: 'Fast and reliable fridge repair services. We fix cooling issues, gas leaks, and compressor problems for all major brands.',
    features: ['Compressor Repair', 'Gas Charging', 'Thermostat Replacement', 'Defrost Timer Fix', 'Door Seal Replacement'],
    icon: 'Refrigerator'
  },
  'amc-contracts': {
    title: 'Annual Maintenance Contracts',
    description: 'Ensure your appliances stay in top shape year-round with our AMC services. Regular maintenance saves money and prevents unexpected breakdowns.',
    features: ['Bi-Annual Service', 'Priority Support', 'No Service Charges', 'Extended Life', 'Genuine Spare Parts'],
    icon: 'ShieldCheck'
  },
  'ac-rental': {
    title: 'AC Rental Service',
    description: 'Looking for a temporary cooling solution? Rent high-quality window or split ACs at the most affordable rates in Delhi NCR.',
    features: ['Fast Installation', 'Monthly Plans', 'Free Maintenance', 'Low Security Deposit', 'Premium Brands'],
    icon: 'Wind'
  }
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const dispatch = useDispatch();

  const data = serviceId ? serviceData[serviceId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
          <Link to="/" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition shadow-xl">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Link to="/" className="text-blue-400 font-bold flex items-center gap-2 mb-6 hover:text-blue-300 transition">
              <ICONS.ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => dispatch(openBooking(data.title))}
                className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition shadow-xl flex items-center gap-3"
              >
                <ICONS.Calendar className="w-5 h-5" /> Book This Service
              </button>
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition backdrop-blur-md flex items-center gap-3"
              >
                <ICONS.Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8">What's Included</h2>
              <ul className="space-y-4">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                      <ICONS.Check className="w-4 h-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
               <h3 className="text-2xl font-black text-slate-900 mb-4">Why Book This Service with Us?</h3>
               <p className="text-slate-600 mb-8 font-medium italic">
                 "Professional and authorized {data.title.toLowerCase()} delivered to your doorstep. We guarantee 100% satisfaction with our trained technicians."
               </p>
               <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=user${i + 20}`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Join 500+ happy clients</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <Contact />
      
      <FloatingActions onOpenBooking={() => dispatch(openBooking(data.title))} />
    </div>
  );
};

export default ServiceDetail;
