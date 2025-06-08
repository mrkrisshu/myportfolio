import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();

  // Card positions for better organization
  const CARD_POSITIONS = [
    { rotate: "75deg", top: "30%", left: "20%", text: "GRASP" },
    { rotate: "-30deg", top: "60%", left: "45%", text: "SOLID" },
    { rotate: "90deg", bottom: "30%", left: "70%", text: "Design Patterns" },
    { rotate: "-45deg", top: "55%", left: "0%", text: "Design Principles" },
    { rotate: "20deg", top: "10%", left: "38%", text: "SRP" },
    { rotate: "30deg", top: "70%", left: "70%", image: "assets/logos/csharp-pink.png" },
    { rotate: "-45deg", top: "70%", left: "25%", image: "assets/logos/dotnet-pink.png" },
    { rotate: "-45deg", top: "5%", left: "10%", image: "assets/logos/blazor-pink.png" },
  ];

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1 - Introduction with your photo */}
        <article className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          {/* Your professional photo - Enhanced version */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 group">
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-md opacity-70 group-hover:opacity-100 animate-pulse"></div>
              
              {/* Photo container */}
              <div className="relative rounded-full overflow-hidden bg-gray-900 p-0.5">
                <img
                  src="assets/krishna-photo.jpg"
                  alt="Krishna Bantola - Full Stack Developer"
                  className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover object-top scale-105 rounded-full filter brightness-105 contrast-105 hover:scale-110 transition-transform duration-300"
                  style={{
                    objectPosition: '50% 25%', // Perfect for your photo
                  }}
                />
              </div>
              
              {/* Online status */}
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 shadow-lg"></div>
            </div>
          </div>

          {/* Background decoration - made more subtle */}
          <img
            src="assets/coding-pov.png"
            alt="Coding workspace background"
            className="absolute scale-[1.25] opacity-10 -right-[3rem] -top-[1rem] md:scale-[2] md:left-50 md:inset-y-10 lg:scale-[1.75]"
          />
          
          <header className="z-10 max-w-[60%] md:max-w-[65%]">
            <h3 className="headtext">Hi, I'm Krishna Bantola</h3>
            <p className="subtext">
              Over the last 4 years, I developed my frontend and backend dev
              skills to deliver dynamic web applications.
            </p>
          </header>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </article>

        {/* Grid 2 - Code is Craft with Cards */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            {CARD_POSITIONS.map((card, index) => (
              <Card
                key={index}
                style={card}
                text={card.text}
                image={card.image}
                containerRef={grid2Container}
              />
            ))}
          </div>
        </div>

        {/* Grid 3 - Time Zone with Globe */}
        <article className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <h3 className="headtext">Time Zone</h3>
            <p className="subtext">
              I'm based in Nepal, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]" aria-label="Interactive globe">
            <Globe />
          </figure>
        </article>

        {/* Grid 4 - CTA */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <h3 className="text-center headtext">
              Do you want to start a project together?
            </h3>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <article className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <h3 className="headtext">Tech Stack</h3>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <figure className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125" aria-label="Technology frameworks showcase">
            <Frameworks />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default About;
