import React, { useState, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const userIdRef = useRef(uuidv4());
  const userId = userIdRef.current;

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setMessages([...messages, { role: "user", content: query }]);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/chat`,
        { query, userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const answer = response.data.answer || "No response.";
      setMessages((msgs) => [...msgs, { role: "assistant", content: answer }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setQuery("");
      setLoading(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed bottom-6 right-6 
            bg-primary 
            text-white p-4 rounded-full shadow-lg 
            hover:opacity-90 transition-all z-40
          "
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
        </button>
      )}

      {isOpen && (
        <div
          className="
            fixed bottom-0 right-0 
            md:bottom-6 md:right-6 
            w-full h-[70vh] 
            sm:w-[380px] sm:h-[480px]
            bg-[#0f1729]/95 backdrop-blur-md 
            border-t border-white/10 md:border md:rounded-2xl 
            shadow-lg flex flex-col overflow-hidden z-50
            animate-fadeIn
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <h3 className="text-white font-semibold text-sm">Ask Mudia AI</h3>
            <span
              onClick={() => setIsOpen(false)}
              className="material-symbols-outlined text-[#92a4c9] text-lg cursor-pointer hover:text-primary transition"
            >
              close
            </span>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Bot Message */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                M
              </div>
              <div className="bg-white/10 text-white text-sm px-3 py-2 rounded-lg max-w-[75%]">
                Hey there 👋 — I'm Mudia's portfolio assistant! How can I help
                you?
              </div>
            </div>

            {/* User Message */}
            {/* <div className="flex justify-end">
              <div className="bg-primary text-white text-sm px-3 py-2 rounded-lg max-w-[75%]">
                Tell me about your latest project.
              </div>
            </div> */}
          </div>

          {/* Chat Input */}
          <form
            className="p-3 border-t border-white/10 bg-white/5 flex items-center gap-2"
            onSubmit={sendMessage}
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder-[#92a4c9]"
            />
            <button
              className="bg-primary px-3 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWindow;
