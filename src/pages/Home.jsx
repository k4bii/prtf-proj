import React from "react";

function Home() {
  return (
    <div 
      className="min-h-screen bg-no-repeat bg-cover bg-center px-4 sm:px-10"
      style={{ backgroundImage: "url('/space-bg.jpeg')" }}
    >
      {/* Mobile Layout (Hidden on Desktop) */}
      <div className="flex flex-col items-center text-center h-screen justify-center sm:hidden">
        <h2 className="text-2xl font-vcr-osd-mono text-white">hey!</h2>
        <h2 className="text-2xl font-vcr-osd-mono text-white">my name is</h2>
        <h1 className="text-3xl font-vcr-osd-mono font-bold text-white">jakobi mcfadden.</h1>
        <br />
        <h3 className="text-lg font-vcr-osd-mono text-white">welcome to my portfolio site!</h3>
        <h3 className="text-lg font-vcr-osd-mono text-white">you've landed.</h3>
        <h3 className="text-lg font-vcr-osd-mono text-white">take a look around!</h3>

        {/* Image Below Text on Mobile */}
        <img src="/falling-kirby.gif" className="max-w-xs mt-6" />
      </div>

      {/* Desktop Layout (Original Code, Hidden on Mobile) */}
      <div className="hidden sm:flex items-center justify-between h-screen">
        <div className="text-left mb-80">
          <h2 className="text-4xl font-vcr-osd-mono text-white"> hey! </h2>
          <h2 className="text-4xl font-vcr-osd-mono text-white"> my name is </h2>
          <h1 className="text-5xl font-vcr-osd-mono font-bold text-white "> jakobi mcfadden. </h1>
          <br />
          <h3 className="text-4xl font-vcr-osd-mono text-white"> welcome to my portfolio site!</h3>
          <h3 className="text-4xl font-vcr-osd-mono text-white"> you've landed.</h3>
          <h3 className="text-4xl font-vcr-osd-mono text-white"> take a look around!</h3>
        </div>
        <div>
          <img src="/falling-kirby.gif" className="w-87 h-auto mb-50" />
        </div>
      </div>
    </div>
  );
}

export default Home;
