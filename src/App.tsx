function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Churches of Christ National Lectureship</h1>
          <p className="text-slate-300">March 8-12, 2026 • Atlanta, Georgia</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">80th Annual "Historical" National Lectureship</h2>
          <p className="text-xl mb-8 text-slate-200">
            Join us for five transformative days of worship, fellowship, and spiritual growth
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto">
              Register Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors w-full sm:w-auto">
              Hotel Info
            </button>
          </div>
        </div>
      </section>

      {/* Registration Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Registration Pricing</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Registration */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold mb-6 text-gray-900">Individual Registration</h4>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span>Early Bird (Until Dec 31, 2025)</span>
                  <span className="font-bold text-blue-600">$190</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Regular (Jan 1 - Feb 28, 2026)</span>
                  <span className="font-bold text-blue-600">$210</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Late (March 1+)</span>
                  <span className="font-bold text-blue-600">$245</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>On-Site Registration</span>
                  <span className="font-bold text-blue-600">$260</span>
                </div>
              </div>
            </div>

            {/* Georgia Residents */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-2xl font-bold mb-6 text-gray-900">Georgia Residents</h4>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span>Early Bird Local (Until Dec 31)</span>
                  <span className="font-bold text-green-600">$175</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Regular Local (Jan 1+)</span>
                  <span className="font-bold text-green-600">$195</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Note:</strong> Address verification required for Georgia resident discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Hotel Information</h3>
          
          <div className="bg-slate-50 rounded-lg p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">Courtland Grand Hotel</h4>
                <div className="space-y-3 text-gray-700">
                  <p><strong>Address:</strong> 165 Courtland Street NE, Atlanta, GA 30303</p>
                  <p><strong>Phone:</strong> (404) 659-6500</p>
                  <p><strong>Rate:</strong> $159/night (Single or Double Occupancy)</p>
                </div>
                
                <div className="mt-6 p-4 bg-slate-900 text-white rounded-lg text-center">
                  <p className="font-bold mb-2">Make Reservations:</p>
                  <p className="text-xl font-bold">(888) 310-7807</p>
                  <p className="text-sm mt-2">Mention "Churches of Christ National Lectureship"</p>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&h=300"
                  alt="Hotel lobby"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Contact Information</h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-bold mb-4">Phone</h4>
              <p className="text-slate-300">(800) 609-6211</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Email</h4>
              <p className="text-slate-300">cocnl@gmail.com</p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Address</h4>
              <p className="text-slate-300">
                289 Jonesboro Road, Box #199<br />
                McDonough, GA 30253
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>&copy; 2026 Churches of Christ National Lectureship. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
