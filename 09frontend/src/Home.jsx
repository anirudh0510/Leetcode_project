import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#2DD327" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 2, opacity_min: 0, sync: false },
      },
      size: {
        value: 3,
        random: false,
        anim: { enable: false, speed: 20, size_min: 0, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#2DD327",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: false,
  };

  return (
    <div className="relative w-full h-screen bg-black">
      {/* Particle Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />

      {/* Your content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-green-400">
          Welcome to Home Page
        </h1>
      </div>
    </div>
  );
}

export default Home;
