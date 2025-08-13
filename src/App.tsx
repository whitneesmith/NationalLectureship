import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with scroll effect */}
      <header className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'backdrop-blur-md bg-slate-900/95' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-12 h-12 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center mr-4 shadow-lg transform hover:scale-110 transition-transform duration-200">
                <span className="text-slate-900 text-xl font-bold">✝</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Churches of Christ</h1>
                <p className="text-slate-200 text-sm">National Lectureship • Est. 1945</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Registration', id: 'registration' },
                { name: 'Hotel', id: 'hotel' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 px-3 py-2 rounded-md hover:bg-slate-700/30"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-slate-700 py-4 space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Registration', id: 'registration' },
                { name: 'Hotel', id: 'hotel' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/30 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with parallax effect */}
      <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-black/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block bg-slate-700/50 backdrop-blur-sm text-slate-200 px-4 py-2 rounded-full text-sm font-medium mb-4 hover:bg-slate-600/50 transition-colors duration-200">
              March 8-12, 2026 • Atlanta, Georgia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
            80th Annual <span className="text-slate-300">"Historical"</span><br />
            <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
              National Lectureship
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Join us for five transformative days of worship, fellowship, and spiritual growth as we celebrate 
            eight decades of God's faithfulness in the Churches of Christ community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <button 
              onClick={() => scrollToSection('registration')}
              className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg hover:shadow-xl"
            >
              Register Now
            </button>
            <button 
              onClick={() => scrollToSection('hotel')}
              className="border-2 border-slate-300 text-slate-200 hover:bg-slate-300 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 text-lg hover:shadow-lg"
            >
              Hotel Information
            </button>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center mr-4 hover:scale-110 transition-transform duration-200">
                    <span className="text-white text-xl">📖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Foundation</h3>
                </div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6 pl-4 border-l-4 border-slate-400 hover:border-slate-500 transition-colors duration-200">
                  "Stand firm therefore, having belted your waist with truth, and having put on the
                  breastplate of righteousness, and having strapped on your feet the preparation of
                  the gospel of peace; in addition to all, taking up the shield of faith with which you
                  will be able to extinguish all the flaming arrows of the evil one."
                </blockquote>
                <cite className="block text-slate-800 font-semibold text-lg">
                  — Ephesians 6:14-16 NASB
                </cite>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <img 
                  src="https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&h=350"
                  alt="Atlanta skyline at night with light trails and towering skyscrapers"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:from-black/30 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Celebration of Faith & Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join us for five days of fellowship, worship, and spiritual growth as we celebrate eight decades of God's faithfulness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎤', title: 'Inspiring Speakers', desc: 'Renowned ministers and teachers sharing God\'s word with passion and wisdom' },
              { icon: '🎵', title: 'Uplifting Worship', desc: 'Beautiful congregational singing and worship that lifts the spirit' },
              { icon: '🤝', title: 'Warm Fellowship', desc: 'Connect with brothers and sisters in Christ from across the nation' },
              { icon: '📚', title: 'Biblical Learning', desc: 'Deep study sessions and workshops to strengthen your faith journey' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors duration-200">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-200">Registration Information</h2>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              All attendees must register to comply with insurance regulations. Choose the option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Individual Registration */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
                <span className="mr-3">👤</span>
                Individual Registration
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Early Bird (Until Dec 31, 2025)', price: '$190' },
                  { label: 'Regular (Jan 1 - Feb 28, 2026)', price: '$210' },
                  { label: 'Late (March 1+)', price: '$245' },
                  { label: 'On-Site Registration', price: '$260' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700/50 hover:border-slate-600/50 transition-colors duration-200">
                    <span className="text-slate-100">{item.label}</span>
                    <span className="text-slate-300 font-bold hover:text-white transition-colors duration-200">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Georgia Residents */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center">
                <span className="mr-3">🍑</span>
                Georgia Residents
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Early Bird Local (Until Dec 31)', price: '$175' },
                  { label: 'Regular Local (Jan 1+)', price: '$195' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700/50 hover:border-slate-600/50 transition-colors duration-200">
                    <span className="text-slate-100">{item.label}</span>
                    <span className="text-slate-300 font-bold hover:text-white transition-colors duration-200">{item.price}</span>
                  </div>
                ))}
                <div className="bg-slate-100/20 rounded-lg p-4 mt-4 hover:bg-slate-100/25 transition-colors duration-200">
                  <p className="text-slate-200 text-sm">
                    <strong>Note:</strong> Name, address, and phone number must be verified for Georgia residents to receive discounted registration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-lg">
              Start Registration
            </button>
          </div>
        </div>
      </section>

      {/* Hotel Section */}
      <section id="hotel" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotel Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay at the beautiful Courtland Grand Hotel in downtown Atlanta with special lectureship rates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="mr-3">🏨</span>
                  Courtland Grand Hotel
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start hover:bg-slate-50 p-2 rounded transition-colors duration-200">
                    <span className="text-slate-600 mr-3 mt-1">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">165 Courtland Street NE</p>
                      <p className="text-gray-600">Atlanta, GA 30303</p>
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-slate-50 p-2 rounded transition-colors duration-200">
                    <span className="text-slate-600 mr-3">📞</span>
                    <p className="text-gray-900">(404) 659-6500</p>
                  </div>
                  <div className="flex items-center hover:bg-slate-50 p-2 rounded transition-colors duration-200">
                    <span className="text-slate-600 mr-3">💰</span>
                    <p className="text-gray-900"><strong>$159/night</strong> (Single or Double Occupancy)</p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-lg p-4 text-center hover:bg-slate-800 transition-colors duration-200 cursor-pointer">
                  <p className="font-semibold mb-2">Make Reservations:</p>
                  <p className="text-slate-200 text-lg font-bold">(888) 310-7807</p>
                  <p className="text-sm text-slate-200 mt-2">
                    Mention "Churches of Christ National Lectureship" for group rate
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="group">
                <img 
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&h=400"
                  alt="Elegant hotel lobby with modern furnishings"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="hover:bg-slate-800/50 p-4 rounded-lg transition-colors duration-200">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Contact Information</h3>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-2">📞</span>
                  (800) 609-6211
                </p>
                <p className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-2">✉️</span>
                  cocnl@gmail.com
                </p>
                <div className="flex items-start hover:text-white transition-colors duration-200">
                  <span className="mr-2 mt-1">📍</span>
                  <div>
                    <p>Churches of Christ National Lectureship</p>
                    <p>The UPS Store</p>
                    <p>289 Jonesboro Road, Box #199</p>
                    <p>McDonough, GA 30253</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="hover:bg-slate-800/50 p-4 rounded-lg transition-colors duration-200">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Event Details</h3>
              <div className="space-y-2 text-slate-300">
                <p className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-2">📅</span>
                  March 8-12, 2026
                </p>
                <p className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-2">📍</span>
                  Atlanta, Georgia
                </p>
                <p className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-2">🏨</span>
                  Courtland Grand Hotel
                </p>
                <p className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-2">🎉</span>
                  80th Annual Lectureship
                </p>
              </div>
            </div>

            {/* Important Dates */}
            <div className="hover:bg-slate-800/50 p-4 rounded-lg transition-colors duration-200">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Important Dates</h3>
              <div className="space-y-2 text-slate-300">
                <p className="hover:text-white transition-colors duration-200">Early Bird Ends: Dec 31, 2025</p>
                <p className="hover:text-white transition-colors duration-200">Regular Registration: Jan 1 - Feb 28</p>
                <p className="hover:text-white transition-colors duration-200">Late Registration: March 1+</p>
                <p className="hover:text-white transition-colors duration-200">Mail Deadline: February 7, 2026</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <div className="flex items-center justify-center space-x-4 text-slate-200 mb-4">
              <div className="flex items-center hover:text-white transition-colors duration-200">
                <span className="mr-2">📅</span>
                <span className="font-semibold">March 8-12, 2026</span>
              </div>
              <div className="flex items-center hover:text-white transition-colors duration-200">
                <span className="mr-2">📍</span>
                <span className="font-semibold">Atlanta, GA</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 Churches of Christ National Lectureship. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
