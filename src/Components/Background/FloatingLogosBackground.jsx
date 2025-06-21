import React, { useEffect, useState } from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiVite } from "react-icons/si";

const icons = [
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiReact, name: "React" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: SiCss3, name: "CSS3" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiVite, name: "Vite" }
];

const random = (min, max) => Math.random() * (max - min) + min;

const FloatingIcons = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Initialize positions with random start coordinates and animation delay
    const initialPositions = Array(15)
      .fill()
      .map(() => ({
        logo: icons[Math.floor(Math.random() * logos.length)],
        x: random(0, 100), // % horizontal
        y: random(0, 100), // % vertical
        size: random(30, 60), // px
        delay: random(0, 10), // sec animation delay
        duration: random(15, 30) // sec animation duration
      }));
    setPositions(initialPositions);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {positions.map(({ Icon, name, x, y, size, delay, duration, offsetX, offsetY }, i) => (
        <div
          key={name}
          title={name}
          className="absolute text-red-600 opacity-70"
          style={{
            top: `${y}%`,
            left: `${x}%`,
            fontSize: size,
            animation: `drift ${duration}s ease-in-out infinite alternate`,
            animationDelay: `${delay}s`,
            "--x": `${offsetX}px`,
            "--y": `${offsetY}px`,
            filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.3))"
          }}
        >
          <Icon />
        </div>
      ))}

      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(var(--x), var(--y)) scale(1.05) rotate(10deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;