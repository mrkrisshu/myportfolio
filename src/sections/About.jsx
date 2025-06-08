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
          {/* Your professional photo */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
            <div className="relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-75"></div>
              <picture>
                <source srcSet="assets/krishna-photo.webp" type="image/webp" />
                <source srcSet="assets/krishna-photo.jpg" type="image/jpeg" />
                <img
                  src="assets/krishna-photo.jpg"
                  alt="Krishna Bantola - Full Stack Developer"
                  className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </picture>
            </div>
          </div>

          {/* Background decoration (optional - you can remove if you want just your photo) */}
          <img
            src="assets/coding-pov.png"
            alt="Coding workspace background"
            className="absolute scale-[1.25] opacity-20 -right-[3rem] -top-[1rem] md:scale-[2] md:left-50 md:inset-y-10 lg:scale-[1.75]"
          />
          
          <header className="z-10 max-w-[65%] md:max-w-[70%]">
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
              I'm based in Mars, and open to remote work worldwide
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

        {/* Optional Grid 6 - Additional photo or content */}
        {/* Uncomment if you want a dedicated photo section
        <div className="grid-default-color grid-6 flex items-center justify-center p-6">
          <div className="relative w-full h-full">
            <img
              src="assets/krishna-working.jpg"
              alt="Krishna Bantola working on a project"
              className="rounded-2xl w-full h-full object-cover shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default About;
