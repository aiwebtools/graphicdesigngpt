
import React, { useEffect, useRef } from 'react';

const ThreeDElement = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particleCount = 100;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      color: string;
      speed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        radius: Math.random() * 2 + 1,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.5})`,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    // Animation
    let animationFrameId: number;

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        const particle = particles[i];

        // Move particle
        particle.z -= particle.speed;

        // Reset particle if it goes out of the canvas
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Project 3D position to 2D
        const screenX = (particle.x - canvas.width / 2) * (1000 / particle.z) + canvas.width / 2;
        const screenY = (particle.y - canvas.height / 2) * (1000 / particle.z) + canvas.height / 2;
        const screenRadius = particle.radius * (1000 / particle.z);

        // Draw particle
        if (
          screenX > 0 &&
          screenX < canvas.width &&
          screenY > 0 &&
          screenY < canvas.height
        ) {
          context.beginPath();
          context.arc(screenX, screenY, screenRadius, 0, Math.PI * 2);
          context.fillStyle = particle.color;
          context.fill();
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ThreeDElement;
