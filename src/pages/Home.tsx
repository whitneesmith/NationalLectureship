import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block bg-slate-700/50 backdrop-blur-sm text-slate-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              March 8-12, 2026 • Atlanta, Georgia
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            80th Annual <span className="text-slate-300">"Historical"</span><br />
            <span className="bg-gradient-to-r from-slate-200 to-white bg-clip-text text-transparent">
              National Lectureship
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us for five transformative days of worship, fellowship, and spiritual growth as we celebrate 
            eight decades of God's faithfulness in the Churches of Christ community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/register-form"
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
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                "One Lord… One Faith… One Baptism"
              </h2>
              <p className="text-xl md:text-2xl text-slate-200 font-bold">
                2026 Lectureship Theme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join us for five days of fellowship, worship, and spiritual growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">When</h3>
              <p className="text-gray-600">March 8-12, 2026</p>
              <p className="text-sm text-gray-500">Five days of fellowship</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Where</h3>
              <p className="text-gray-600">Courtland Grand Hotel</p>
              <p className="text-sm text-gray-500">Atlanta, Georgia</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Theme</h3>
              <p className="text-gray-600 font-bold">"One Lord… One Faith… One Baptism"</p>
              <p className="text-sm text-gray-500">80th Annual Celebration</p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
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

            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
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
        </div>
      </section>
    </div>
  );
}

export default Home;
