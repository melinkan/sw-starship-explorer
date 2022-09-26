import ReactParticles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export const Particles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    particles: {
      number: {
        value: 500,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 8,
        },
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 3,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },

    retina_detect: true,
  };

  return (
    <ReactParticles
      style={{
        backgroundColor: "#000",
      }}
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};
