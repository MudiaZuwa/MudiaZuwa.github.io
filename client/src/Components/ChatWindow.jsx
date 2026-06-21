import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const userIdRef = useRef(uuidv4());
  const userId = userIdRef.current;
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = { role: "user", content: query };
    const assistantMessage = { role: "assistant", content: "" };

    setMessages((msgs) => [...msgs, userMessage, assistantMessage]);

    const assistantIndex = messages.length + 1;

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, userId }),
      });

      if (!response.body) throw new Error("No response body from server");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;

        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          chunk.split("\n").forEach((line) => {
            const cleaned = line.trim();
            if (!cleaned) return;

            const jsonLine = cleaned.startsWith("data:")
              ? cleaned.replace(/^data:\s*/, "")
              : cleaned;

            try {
              const tokenObj = JSON.parse(jsonLine);
              if (tokenObj.done) return;
              if (!tokenObj.token) return;

              setMessages((msgs) => {
                const updated = [...msgs];
                const prevContent = updated[assistantIndex]?.content || "";
                updated[assistantIndex] = {
                  role: "assistant",
                  content: prevContent + tokenObj.token,
                };
                return updated;
              });
            } catch {}
          });
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((msgs) => {
        const updated = [...msgs];
        updated[assistantIndex] = {
          role: "assistant",
          content: "Sorry, something went wrong.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-brand-frontend text-oil-black w-14 h-14 flex items-center justify-center rounded-full z-40 cursor-pointer"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            aria-label="Open chat"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full h-[70vh] sm:w-[380px] sm:h-[480px] bg-tungsten border-t border-border/40 md:border md:rounded-lg flex flex-col overflow-hidden z-50"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
              <h3 className="text-white font-medium text-sm">Ask Mudia AI</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="text-subtle/70 hover:text-brand-frontend transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div
              ref={chatBodyRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-frontend/20 flex items-center justify-center text-brand-frontend font-bold">
                  M
                </div>
                <div className="bg-overlay text-white text-sm px-3 py-2 rounded-lg max-w-[75%]">
                  Hey there, I'm Mudia's portfolio assistant. How can I help
                  you?
                </div>
              </div>

              {messages.map((msg, index) =>
                msg.role === "user" ? (
                  <motion.div
                    key={index}
                    className="flex justify-end"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-brand-frontend text-oil-black text-sm px-3 py-2 rounded-lg max-w-[75%]">
                      {msg.content}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-frontend/20 flex items-center justify-center text-brand-frontend font-bold">
                      M
                    </div>
                    <div className="bg-overlay text-white text-sm px-3 py-2 rounded-lg max-w-[75%] whitespace-pre-wrap">
                      {msg.content ||
                        (loading && index === messages.length - 1 ? "..." : "")}
                    </div>
                  </motion.div>
                ),
              )}
            </div>

            <form
              className="p-3 border-t border-border/40 flex items-center gap-2"
              onSubmit={sendMessage}
            >
              <input
                type="text"
                placeholder="Type a message"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-subtle/50"
              />
              <button
                className="bg-brand-frontend text-oil-black px-3 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                type="submit"
                disabled={loading}
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWindow;
