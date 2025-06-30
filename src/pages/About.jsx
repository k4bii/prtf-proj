import React from "react";

function About() {
  return (  
    <div 
      className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center px-4 sm:px-10"
      style={{ backgroundImage: "url('/space-bg.jpeg')" }}
    >
      {/* mobile version */}
      <div className="flex flex-col items-center text-center pt-20 sm:hidden">
        <h1 className="text-5xl font-vcr-osd-mono font-bold text-white">about me</h1>
        <p 
          className="mt-10 font-vcr-osd-mono text-white text-base leading-relaxed px-4 bg-black bg-opacity-50 rounded-lg shadow-lg"
        >
          hello! my name's jakobi, you can call me kobi for short, i'm a current college student 
          majoring in computer science at northern illinois university with an emphasis in 
          software development. my interests lie in full stack development, data science and ui/ux design. i'm a
          skilled worker who enjoys devoting their time to furthering their skills and profiency
          in their techniques. collaboration is where i thrive as getting feedback from a different 
          set of eyes is always helpful and gets a project to completion. i hope to work with
          a group of other like-minded individuals and create something worthwhile! <br />
          <br />
          check out my resume below!
        </p>

        {/* res button for mobile */}
        <a 
          href="/McFadden_Resume_SU25.pdf" // updated
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-5 py-3 text-base font-vcr-osd-mono font-bold text-white bg-babyBlue rounded-md shadow-lg hover:bg-gray-500 transition duration-300"
        >
          may or may not be resume...
        </a>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex flex-col items-center text-center pt-20">
        <h1 className="text-8xl font-vcr-osd-mono font-bold text-white">about me</h1>
        <p 
          className="mt-20 font-vcr-osd-mono text-white relative inline-block px-4 py-2 text-lg
          before:absolute before:inset-0 before:rounded-md before:shadow-baby-blue-glow before:animate-pulse"
        >
          hello! my name's jakobi, you can call me kobi for short, i'm a current college student 
          majoring in computer science at northern illinois university with an emphasis in 
          software development. my interests lie in full stack development, data science and ui/ux design. i'm a
          skilled worker who enjoys devoting their time to furthering their skills and profiency
          in their techniques. collaboration is where i thrive as getting feedback from a different 
          set of eyes is always helpful and gets a project to completion. i hope to work with
          a group of other like-minded individuals and create something worthwhile!  <br />
          <br />
          check out my resume below!
        </p>

        {/* res button for desktop */}
        <a 
          href="/McFadden_Resume_SU25.pdf" // updated
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-6 py-3 text-lg font-vcr-osd-mono font-bold text-white bg-babyBlue rounded-md shadow-lg hover:bg-gray-500 transition duration-300"
        >
          may or may not be resume...
        </a>
      </div>
    </div>
  );
}

export default About;
