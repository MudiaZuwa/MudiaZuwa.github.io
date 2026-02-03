import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const messages = [
    "Powering up workstation...",
    "Initializing render pipeline...",
    "Warming up GPU fans...",
    "Loading assets...",
    "Almost ready...",
  ];
  const [displayMessage, setDisplayMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayMessage((prev) => {
        const index = messages.indexOf(prev);
        return messages[(index + 1) % messages.length];
      });
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <Html
      fullscreen
      as="div"
      className="
    flex flex-col items-center justify-center
    bg-[rgba(10,15,30,0.85)]
    backdrop-blur-md text-center
    text-gray-200
    -translate-y-10 sm:-translate-y-16
  "
    >
      <div
        className="
          absolute rounded-full
          bg-[radial-gradient(circle,#3B82F6,transparent_70%)]
          blur-md animate-pulse-glow
        "
        style={{
          width: `${progress * 1.8 + 100}px`,
          height: `${progress * 1.8 + 100}px`,
        }}
      ></div>

      <div className="loader-ring"></div>

      {/* Text */}
      <p className="font-inter font-bold text-gray-200 text-lg mt-8">
        {displayMessage}
      </p>

      <p className="font-mono text-blue-400 mt-2 text-sm tracking-widest">
        {progress.toFixed(0)}%
      </p>

      <style>{`
        .loader-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 6px solid rgba(59,130,246,0.2);
          border-top-color: #3B82F6;
          animation: spin 1s linear infinite, pulseGlow 2s ease-in-out infinite;
          box-shadow: 0 0 20px rgba(59,130,246,0.4);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(59,130,246,0.4); }
          50% { box-shadow: 0 0 30px rgba(59,130,246,0.9); }
        }
      `}</style>
    </Html>
  );
};

export default CanvasLoader;
