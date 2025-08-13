import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Registration Information
          </h1>
          <p className="text-xl text-slate-100 max-w-3xl mx-auto">
            All attendees must register to comply with insurance regulations. 
            Register early to save and secure your spot at this historic 80th Annual gathering.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-gray-100 border-l-4 border-slate-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <span className="text-slate-600 text-2xl mr-4 mt-1">⚠️</span>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Important Registration Requirement</h3>
              <p className="text-slate-700">
                All persons who attend and are affiliated with the 2026 Churches of Christ 80th Annual "Historical" National Lectureship 
                <strong> MUST BE REGISTERED</strong> with the Lectureship to comply with insurance regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Individual Registration */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-3">👤</span>
                Individual Registration
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-gray-900">Early Bird Registration</span>
                    <p className="text-sm text-gray-600">Until December 31, 2025</p>
                  </div>
                  <span className="text-slate-600 font-bold text-xl">$190</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-gray-900">Regular Registration</span>
                    <p className="text-sm text-gray-600">January 1 - February 28, 2026</p>
                  </div>
                  <span className="text-slate-600 font-bold text-xl">$210</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-gray-900">Late Individual Registration</span>
                    <p className="text-sm text-gray-600">March 1-8, 2026</p>
                  </div>
                  <span className="text-slate-600 font-bold text-xl">$245</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-gray-900">On-Site Individual Registration</span>
                    <p className="text-sm text-gray-600">For all attendees</p>
                  </div>
                  <span className="text-slate-600 font-bold text-xl">$260</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div>
                    <span className="font-semibold text-gray-900">Day-to-Day Individual Registration</span>
                    <p className="text-sm text-gray-600">No amenities provided</p>
                  </div>
                  <span className="text-slate-600 font-bold text-xl">$75</span>
                </div>
              </div>
            </div>

            {/* Georgia Residents */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="mr-3">🍑</span>
                Georgia Residents (Special Rate)
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-gray-900">Early Bird Local Registration</span>
                    <p className="text-sm text-gray-600">Until December 31, 2025</p>
                  </div>
                  <span className="text-slate-600 font-bold text-xl">$175</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                  <div>
                    <span className="font-semibold text-gray-900">Regular Local Registration</span>
                    <p className="text-sm text-gray-600">Beginning January 1, 2026</p>
                  </div>
                  <span className="text-slate-600 font-bold text-xl">$195</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mt-6">
                <p className="text-slate-800 text-sm">
                  <strong>Verification Required:</strong> Name, address, and phone number must be verified 
                  for Georgia residents to receive the discounted registration rate.
                </p>
              </div>
            </div>
          </div>

          {/* Group Rates */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-50 rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="mr-3">👥</span>
              Group Registration Rates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">5 People Groups</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Early Bird (Until Dec 31)</span>
                    <span className="text-slate-600 font-bold">$925</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Regular (Jan 1+)</span>
                    <span className="text-slate-600 font-bold">$975</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">10 People Groups</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Early Bird (Until Dec 31)</span>
                    <span className="text-slate-600 font-bold">$1,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Regular (Jan 1+)</span>
                    <span className="text-slate-600 font-bold">$1,925</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Events */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="mr-3">🎉</span>
              Special Events (Additional Tickets)
            </h3>
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
                <p className="text-xs text-gray-500 mt-1">Single ticket without full registration</p>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">💳</span>
              Payment & Registration Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-200 mb-4">Mail-In Registration</h4>
                <p className="text-slate-100 mb-4">
                  Make checks or money orders payable to:
                </p>
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <p className="font-semibold">Churches of Christ National Lectureship</p>
                  <p>289 Jonesboro Road, STE #199</p>
                  <p>McDonough, GA 30253</p>
                </div>
                <p className="text-slate-200 font-semibold">
                  Deadline: February 7, 2026
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-slate-200 mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-slate-300 mr-3">📞</span>
                    <span>(800) 609-6211</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-slate-300 mr-3">✉️</span>
                    <span>cocnl1945@gmail.com</span>
                  </div>
                </div>
                <div className="bg-gray-100/20 rounded-lg p-4 mt-4">
                  <p className="text-slate-200 text-sm">
                    <strong>NSF Check Fee:</strong> $40.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Online Registration CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Register Online?</h3>
              <p className="text-slate-100 mb-6">
                Use our convenient online registration form with multiple payment options including Credit Card, PayPal, and Zelle.
              </p>
              <a 
                href="/register-form" 
                className="inline-block bg-white text-slate-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Start Online Registration
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;