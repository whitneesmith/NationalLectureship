const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-black to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-200">Contact Information</h3>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                (800) 609-6211
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                cocnl@gmail.com
              </p>
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>
                  289 Jonesboro Road, Box #199<br />
                  McDonough, GA 30253
                </span>
              </p>
            </div>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-200">Event Details</h3>
            <div className="space-y-2 text-slate-300">
              <p>March 8-12, 2026</p>
              <p>Courtland Grand Hotel</p>
              <p>Atlanta, Georgia</p>
              <p className="font-semibold text-slate-200">"One Lord… One Faith… One Baptism"</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-200">Quick Links</h3>
            <div className="space-y-2 text-slate-300">
              <p>Registration Information</p>
              <p>Hotel Reservations</p>
              <p>Vendor Information</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2026 Churches of Christ National Lectureship. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            80th Annual "Historical" National Lectureship
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
