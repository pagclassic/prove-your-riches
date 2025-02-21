
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800, // Changed from 'area' to 'value_area'
            },
          },
          color: {
            value: "#F4B942",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: true, // Changed property location
            anim: {
              enable: true,
            },
          },
          size: {
            value: 3,
            random: true, // Changed property location
            anim: {
              enable: true,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out", // Changed from 'outModes' to 'out_mode'
            bounce: false,
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.3,
              },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
