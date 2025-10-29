import React, { useState, useRef, useEffect } from "react";
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
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query, userId }),
        }
      );

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
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="
    fixed bottom-6 right-6 
    bg-primary 
    text-white 
    w-14 h-14 
    flex items-center justify-center
    rounded-full shadow-lg 
    hover:opacity-90 transition-all z-40
    cursor-pointer
  "
        >
          <span
            className="material-symbols-outlined text-2xl 
    cursor-pointer"
          >
            chat
          </span>
        </div>
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
          <div
            ref={chatBodyRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {/* Default Bot Greeting */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                M
              </div>
              <div className="bg-white/10 text-white text-sm px-3 py-2 rounded-lg max-w-[75%]">
                Hey there 👋 — I'm Mudia's portfolio assistant! How can I help
                you?
              </div>
            </div>

            {/* Render Chat Messages */}
            {messages.map((msg, index) =>
              msg.role === "user" ? (
                <div key={index} className="flex justify-end">
                  <div className="bg-primary text-white text-sm px-3 py-2 rounded-lg max-w-[75%]">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    M
                  </div>
                  <div className="bg-white/10 text-white text-sm px-3 py-2 rounded-lg max-w-[75%] whitespace-pre-wrap">
                    {msg.content ||
                      (loading && index === messages.length - 1 ? "..." : "")}
                  </div>
                </div>
              )
            )}
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
              className="bg-primary px-3 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
              type="submit"
              disabled={loading}
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
