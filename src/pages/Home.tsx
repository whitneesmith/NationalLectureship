import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Heart } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-block bg-slate-700/50 backdrop-blur-sm text-slate-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                March 8-12, 2026 • Atlanta, Georgia
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              80th Annual <span className="text-slate-300">"Historical"</span><br />
              <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
                National Lectureship
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Join us for five transformative days of worship, fellowship, and spiritual growth as we celebrate 
              eight decades of God's faithfulness in the Churches of Christ community.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                to="/register"
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
              >
                Register Now
              </Link>
              <Link 
                to="/hotel"
                className="border-2 border-slate-300 text-slate-200 hover:bg-slate-300 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 text-lg"
              >
                Hotel Information
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Event Highlights</h2>
            <p className="text-center text-gray-600 mb-12">Join us for five days of fellowship, worship, and spiritual growth</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-slate-200">
              <p className="text-slate-800 font-semibold text-lg flex items-center">
                <Calendar className="mr-2" size={20} />
                March 8-12, 2026
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-slate-200">
              <p className="text-slate-800 font-semibold text-lg flex items-center">
                <MapPin className="mr-2" size={20} />
                Atlanta, Georgia
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-lg border border-slate-200">
              <p className="text-slate-800 font-semibold text-lg flex items-center">
                <Users className="mr-2" size={20} />
                Courtland Grand Hotel
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Calendar, title: "5 Days", desc: "March 8-12, 2026" },
              { icon: Users, title: "Premium Venue", desc: "Courtland Grand Hotel" },
              { icon: Heart, title: "Inspiring Speakers", desc: "Renowned Bible scholars" },
              { icon: Users, title: "Fellowship", desc: "Connect with believers nationwide" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-slate-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
