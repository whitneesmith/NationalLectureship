import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 backdrop-blur-sm rounded-3xl p-8 mb-6 border-2 border-white shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-slate-200/30 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-slate-200/30 to-transparent rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded"></div>
                <div className="mx-4 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">✝</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text">
                Churches of Christ 80th Annual "Historical" National Lectureship
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-semibold">
                In Cooperation and Supported by the Greater Atlanta, Georgia, Area Churches of Christ
              </p>
              
              <div className="flex items-center justify-center mt-6">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Theme Section */}
          <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 backdrop-blur-sm rounded-3xl p-8 mb-8 border-2 border-slate-600 shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/10 to-transparent rounded-full -translate-x-20 translate-y-20"></div>
            
            <div className="text-center relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded"></div>
                <div className="mx-4 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <span className="text-white text-2xl">✝</span>
                </div>
                <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded"></div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                "One Lord… One Faith… One Baptism"
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-bold">
                2026 Lectureship Theme
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-500 shadow-xl transform hover:scale-105 transition-all duration-300">
            <p className="text-xl md:text-2xl text-white font-bold drop-shadow-lg">
              March 8-12, 2026
            </p>
            <p className="text-lg md:text-xl text-slate-200 font-semibold drop-shadow">
              Wyndham Courtland Grand Hotel • Atlanta, Georgia
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register-form">
              <button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
                Register Today
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-white/90 hover:bg-white text-slate-700 font-bold py-4 px-8 rounded-lg shadow-lg border-2 border-slate-300 hover:border-slate-400 transition-all duration-200">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Foundation</h3>
                </div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6 pl-4 border-l-4 border-slate-400">
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
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/134643/pexels-photo-134643.jpeg?auto=compress&cs=tinysrgb&h=350"
                  alt="Atlanta skyline at night with light trails and towering skyscrapers"
                  className="w-full h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Celebration of Faith & Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join us for five days of fellowship, worship, and spiritual growth as we celebrate eight decades of God's faithfulness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">When</h3>
              <p className="text-gray-600">March 8-12, 2026</p>
              <p className="text-sm text-gray-500">Five days of fellowship</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Where</h3>
              <p className="text-gray-600">Wyndham Courtland Grand Hotel</p>
              <p className="text-sm text-gray-500">165 Courtland Street NE, Atlanta, GA 30303</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Theme</h3>
              <p className="text-gray-600 font-bold text-lg">"One Lord… One Faith… One Baptism"</p>
              <p className="text-sm text-gray-500">80th Annual Historical Celebration</p>
              <p className="text-xs text-gray-400 mt-2">Ephesians 4:5-6</p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Early Bird Special</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Individual Registration</span>
                  <span className="text-slate-600 font-bold">$190</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Georgia Residents</span>
                  <span className="text-slate-600 font-bold">$175</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Group 5 People</span>
                  <span className="text-slate-600 font-bold">$925</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Group 10 People</span>
                  <span className="text-slate-600 font-bold">$1,800</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">*Valid until December 31, 2025</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">Regular Rates</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Individual Registration</span>
                  <span className="text-slate-600 font-bold">$210</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Georgia Residents</span>
                  <span className="text-slate-600 font-bold">$195</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Group 5 People</span>
                  <span className="text-slate-600 font-bold">$975</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Group 10 People</span>
                  <span className="text-slate-600 font-bold">$1,925</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">*Starting January 1, 2026</p>
            </div>
          </div>

          {/* Special Events */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎵</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sunday Songfest</h4>
              <p className="text-gray-600 text-sm mb-2">March 8, 2026 • 4:30-6:00 PM</p>
              <p className="text-green-600 font-bold text-xl">FREE</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👩</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Women's Division Luncheon</h4>
              <p className="text-gray-600 text-sm mb-2">March 11, 2026 • 12:00 PM</p>
              <p className="text-slate-600 font-bold text-xl">$60</p>
              <p className="text-xs text-gray-500 mt-1">(On-Site Purchase Only)</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🍽️</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">John O. Williams Memorial Banquet</h4>
              <p className="text-gray-600 text-sm mb-2">March 12, 2026 • 6:00 PM</p>
              <p className="text-slate-600 font-bold text-xl">$75</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotel Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay at the beautiful Courtland Grand Hotel in downtown Atlanta with special lectureship rates.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-3">🏨</span>
                Courtland Grand Hotel
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-slate-600 mr-3 mt-1">📍</span>
                  <div>
                    <p className="font-semibold text-gray-900">165 Courtland Street NE</p>
                    <p className="text-gray-600">Atlanta, GA 30303</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-3">📞</span>
                  <p className="text-gray-900">(404) 659-6500</p>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-3">💰</span>
                  <p className="text-gray-900"><strong>$159/night</strong> (Single or Double Occupancy)</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Reservation Details:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Check-in: 4:00 PM, March 8, 2026</li>
                  <li>• Check-out: 11:00 AM, March 12, 2026</li>
                  <li>• One night room and tax charged at reservation</li>
                  <li>• No refunds granted</li>
                </ul>
              </div>

              <div className="bg-slate-900 text-white rounded-lg p-4 text-center">
                <p className="font-semibold mb-2">Make Reservations:</p>
                <p className="text-slate-200 text-lg font-bold">(888) 310-7807</p>
                <p className="text-sm text-slate-200 mt-2">
                  Mention "Churches of Christ National Lectureship" for group rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
