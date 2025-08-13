import React from 'react';

const Vendors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Vendor Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            Join us as a vendor and share your products and services with attendees from across the nation. 
            Limited spaces available on a first-come, first-served basis.
          </p>
        </div>
      </section>

      {/* Important Requirements */}
      <section className="py-8 bg-gray-100 border-l-4 border-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <span className="text-slate-600 text-2xl mr-4 mt-1">⚠️</span>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Vendor Requirements</h3>
              <ul className="text-slate-700 space-y-1">
                <li>• All vendors <strong>MUST REGISTER</strong> with the Churches of Christ National Lectureship in addition to their vendor table cost</li>
                <li>• Exhibit space will be allocated on a first-come basis</li>
                <li>• Vendor table cost <strong>MUST BE</strong> paid in advance</li>
                <li>• The Lectureship assumes no liability for product damages or losses</li>
                <li>• The Lectureship reserves the right to refuse exhibit space to anyone whose products are deemed unsuitable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Table Pricing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vendor Table Pricing</h2>
            <p className="text-xl text-gray-600">Choose the number of tables that best fits your needs (3 table maximum)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Single Table */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">1️⃣</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Single Table</h3>
                <p className="text-gray-600 mb-6">Perfect for smaller displays</p>
                <div className="text-4xl font-bold text-slate-600 mb-6">$250</div>
                <ul className="text-left text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    One 6-foot table
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Prime location
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Access to all attendees
                  </li>
                </ul>
              </div>
            </div>

            {/* Two Tables */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-300 hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-slate-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">POPULAR</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">2️⃣</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Two Tables</h3>
                <p className="text-gray-600 mb-6">Great for medium displays</p>
                <div className="text-4xl font-bold text-slate-600 mb-6">$350</div>
                <ul className="text-left text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Two 6-foot tables
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    More display space
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Better value per table
                  </li>
                </ul>
              </div>
            </div>

            {/* Three Tables */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">3️⃣</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Three Tables</h3>
                <p className="text-gray-600 mb-6">Maximum allowed (LIMIT)</p>
                <div className="text-4xl font-bold text-slate-600 mb-6">$450</div>
                <ul className="text-left text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Three 6-foot tables
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Maximum display space
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Best value overall
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Souvenir Book Advertising */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Souvenir Book Advertising</h2>
            <p className="text-xl text-gray-600">Advertise in our commemorative souvenir book and reach all attendees</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Full Page Color */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Full Page - Color</h3>
              <div className="text-3xl font-bold text-slate-600 mb-4">$225</div>
              <p className="text-gray-600 mb-4">Camera ready digital ad required</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-slate-800 text-sm font-semibold">Maximum Impact</p>
                <p className="text-slate-700 text-sm">Full page in vibrant color</p>
              </div>
            </div>

            {/* Full Page B&W */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Full Page - B&W</h3>
              <div className="text-3xl font-bold text-slate-600 mb-4">$180</div>
              <p className="text-gray-600 mb-4">Camera ready digital ad required</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 text-sm font-semibold">Classic Appeal</p>
                <p className="text-gray-700 text-sm">Full page black & white</p>
              </div>
            </div>

            {/* Half Page Color */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Half Page - Color</h3>
              <div className="text-3xl font-bold text-slate-600 mb-4">$175</div>
              <p className="text-gray-600 mb-4">Camera ready digital ad required</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-slate-800 text-sm font-semibold">Great Value</p>
                <p className="text-slate-700 text-sm">Half page in color</p>
              </div>
            </div>

            {/* Half Page B&W */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Half Page - B&W</h3>
              <div className="text-3xl font-bold text-slate-600 mb-4">$125</div>
              <p className="text-gray-600 mb-4">Camera ready digital ad required</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 text-sm font-semibold">Affordable</p>
                <p className="text-gray-700 text-sm">Half page black & white</p>
              </div>
            </div>

            {/* Quarter Page */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Quarter Page - B&W</h3>
              <div className="text-3xl font-bold text-slate-600 mb-4">$80</div>
              <p className="text-gray-600 mb-4">Black & white only</p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-800 text-sm font-semibold">Budget Friendly</p>
                <p className="text-green-700 text-sm">Quarter page option</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start">
              <span className="text-red-500 text-xl mr-3 mt-1">📅</span>
              <div>
                <h4 className="text-lg font-bold text-red-800 mb-2">Important Deadline</h4>
                <p className="text-red-700">
                  All ads <strong>MUST BE RECEIVED NO LATER THAN FEBRUARY 1, 2026.</strong> 
                  The Churches of Christ "Historical" Annual National Lectureship reserves the right to refuse any ads 
                  for publication which are deemed to be unsuitable. Email ads to: <strong>cocnl1945@gmail.com</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vendor Application Information</h2>
            <p className="text-xl text-slate-100">Ready to join us? Here's what we need from you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-200 mb-6">Required Information</h3>
              <ul className="space-y-3 text-slate-100">
                <li className="flex items-start">
                  <span className="text-slate-300 mr-3 mt-1">•</span>
                  Vendor name and contact information
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-3 mt-1">•</span>
                  Detailed product description
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-3 mt-1">•</span>
                  Type of products/services provided
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-3 mt-1">•</span>
                  Credit card registration information
                </li>
                <li className="flex items-start">
                  <span className="text-slate-300 mr-3 mt-1">•</span>
                  Individual registration (required)
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-200 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-slate-300 mr-3">📞</span>
                  <span className="text-slate-100">(800) 609-6211</span>
                </div>
                <div className="flex items-center">
                  <span className="text-slate-300 mr-3">✉️</span>
                  <span className="text-slate-100">cocnl1945@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-300 mr-3 mt-1">📍</span>
                  <div className="text-slate-100">
                    <p>Churches of Christ National Lectureship</p>
                    <p>289 Jonesboro Road, STE #199</p>
                    <p>McDonough, GA 30253</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Reserve Your Vendor Table?</h3>
              <p className="text-slate-100 mb-6">
                Contact us directly using the information below to reserve your vendor table space. 
                Remember, exhibit space is allocated on a first-come basis, so don't wait!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-3">Call Us</h4>
                  <p className="text-2xl font-bold text-slate-200">(800) 609-6211</p>
                  <p className="text-slate-300 text-sm mt-2">Speak directly with our team</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-3">Email Us</h4>
                  <p className="text-2xl font-bold text-slate-200">cocnl1945@gmail.com</p>
                  <p className="text-slate-300 text-sm mt-2">For fastest response</p>
                </div>
              </div>
              <div className="mt-6 bg-amber-100/20 border border-amber-300/30 rounded-lg p-4">
                <p className="text-amber-100 font-semibold text-sm">
                  📋 Please include: Vendor name, product description, number of tables needed, and contact information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vendors;