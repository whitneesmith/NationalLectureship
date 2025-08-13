export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Contact Information</h3>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                (800) 609-6211
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                cocnl@gmail.com
              </p>
              <div className="flex items-start">
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
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Event Details</h3>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center">
                <span className="mr-2">📅</span>
                March 8-12, 2026
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Atlanta, Georgia
              </p>
              <p className="flex items-center">
                <span className="mr-2">🏨</span>
                Courtland Grand Hotel
              </p>
              <p className="flex items-center">
                <span className="mr-2">🎉</span>
                80th Annual Lectureship
              </p>
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Important Dates</h3>
            <div className="space-y-2 text-slate-300">
              <p>Early Bird Ends: Dec 31, 2025</p>
              <p>Regular Registration: Jan 1 - Feb 28</p>
              <p>Late Registration: March 1+</p>
              <p>Mail Deadline: February 7, 2026</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-4 text-slate-200 mb-4">
            <div className="flex items-center">
              <span className="mr-2">📅</span>
              <span className="font-semibold">March 8-12, 2026</span>
            </div>
            <div className="flex items-center">
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
  );
}
