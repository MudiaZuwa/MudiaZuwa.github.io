const LLM_URL = process.env.LLAMA_API_URL;
const API_KEY = process.env.API_KEY;

export const generateAnswer = async (context, query, userId, onToken) => {
  const prompt = `
You are Mudia Zuwa's AI portfolio assistant.
Use the context below to answer accurately and concisely.
If unsure, say you don't know.
Context:
${context}

User: ${query}
`;

  const response = await fetch(`${LLM_URL}/chat/user-${userId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: prompt, system_instructions: "" }),
  });

  if (!response.body) throw new Error("No response body from LLM server");

  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    done = readerDone;

    if (value) {
      const chunk = decoder.decode(value, { stream: true });

      chunk.split("\n").forEach((line) => {
        if (line.trim()) {
          try {
            const tokenObj = JSON.parse(line);
            if (onToken) onToken(tokenObj.token);
          } catch {}
        }
      });
    }
  }
};
