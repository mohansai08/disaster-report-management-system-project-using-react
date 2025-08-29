import React from "react";

export default function DisasterWatch() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fc] text-[#222] font-sans">
      {/* Header */}
      <header className="bg-[#0052cc] text-white p-6 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold tracking-wide">DisasterWatch</h1>
        <nav className="space-x-6">
          <a href="#how-it-works" className="hover:text-yellow-400 font-semibold">
            How It Works
          </a>
          <a href="#features" className="hover:text-yellow-400 font-semibold">
            Features
          </a>
          <a href="#report" className="hover:text-yellow-400 font-semibold">
            Report Incident
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center border-b border-gray-300 pb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0052cc] mb-4 leading-tight">
            Empower Communities. Report Disasters. Save Lives.
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
            Join our crowdsourced platform to instantly report and track disaster incidents,
            helping emergency responders act faster and save more lives.
          </p>
          <a
            href="#report"
            className="inline-block bg-[#ff5722] text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-[#e64a19] hover:shadow-xl transform hover:-translate-y-1 transition"
          >
            Report an Incident
          </a>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-[#0052cc] mb-10">How It Works</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: "📱", title: "Report Easily", desc: "Use our platform to quickly submit incident reports with location and details." },
              { icon: "🌐", title: "Crowd Verified", desc: "Community members verify incidents to ensure accuracy and relevance." },
              { icon: "🚑", title: "Swift Response", desc: "Authorities get notified instantly to provide timely assistance." },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md max-w-xs flex-1 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="text-4xl mb-4 text-[#ff5722]">{step.icon}</div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-20 flex flex-wrap justify-center gap-8">
          {[
            { icon: "🗺️", title: "Real-time Mapping", desc: "View live disaster reports on interactive maps to stay informed." },
            { icon: "🔒", title: "Secure & Private", desc: "Your data and location are safe with our encrypted platform." },
            { icon: "🤝", title: "Community Driven", desc: "Empower neighbors to contribute and support each other in times of need." },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#0052cc] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:bg-[#003d99] transition w-80"
            >
              <div className="text-5xl mb-4 text-[#ffcc80]">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Report Section */}
        <section
          id="report"
          className="mt-20 bg-[#ff5722] text-white text-center p-12 rounded-2xl shadow-xl"
        >
          <h3 className="text-3xl font-extrabold mb-4 tracking-wide">Report an Incident Now</h3>
          <p className="text-lg max-w-xl mx-auto mb-6">
            If you witness a disaster or public emergency, don’t hesitate to report it here. Your
            information can make a difference!
          </p>
          <button
            onClick={() => alert("Redirecting to report form (not implemented)")}
            className="bg-white text-[#ff5722] px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-[#ffe6dc] hover:text-[#d84315] transition"
          >
            Report Incident
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#222] text-gray-400 text-center py-4 text-sm mt-auto">
        &copy; 2025 DisasterWatch. All rights reserved.
      </footer>
    </div>
  );
}