import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();
  const messages = [
    "Powering up workstation",
    "Initializing render pipeline",
    "Warming up GPU fans",
    "Loading assets",
    "Almost ready",
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
      className="flex flex-col items-center justify-center bg-oil-black/95 text-center text-subtle"
    >
      <div className="loader-ring" />

      <p className="font-medium text-subtle text-sm mt-8">{displayMessage}</p>
      <p className="font-mono text-brand-frontend mt-2 text-xs tracking-widest">
        {progress.toFixed(0)}%
      </p>

      <style>{`
        .loader-ring {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid rgba(232, 230, 227, 0.15);
          border-top-color: #61dafb;
          animation: spin 0.9s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
};

export default CanvasLoader;
