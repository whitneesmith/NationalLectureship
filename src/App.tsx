function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Churches of Christ National Lectureship 2026</h1>
        </div>
      </header>
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            80th Annual National Lectureship
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            March 8-12, 2026 • Atlanta, Georgia
          </p>
          <div className="bg-slate-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Registration Information</h3>
            <p className="text-gray-700">
              Early Bird Registration: $190 (Until Dec 31, 2025)
            </p>
            <p className="text-gray-700">
              Regular Registration: $210 (Jan 1 - Feb 28, 2026)
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2026 Churches of Christ National Lectureship</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
