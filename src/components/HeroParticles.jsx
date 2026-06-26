import React, { useCallback } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 1, minHeight: '350px' }}>
        <Particles
          id="tsparticles"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#c084fc", "#22d3ee"],
            },
            links: {
              color: "#c084fc",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      </div>
    </ParticlesProvider>
  );
}
