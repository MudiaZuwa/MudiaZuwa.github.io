import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateAnswer = async (context, query, userId, onToken) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are Mudia Zuwa's AI portfolio assistant.
Use the context below to answer accurately and concisely.
If unsure, say you don't know.
Important rules:
1. Do not use bold, italics, asterisks (**), underscores (_), backticks (\`), or any other text formatting in your replies.
2. Always write in plain text only
Context:
${context}

User: ${query}
`;

  const stream = await model.generateContentStream(prompt);
  for await (const chunk of stream.stream) {
    const token = chunk.text();
    if (token && onToken) onToken(token);
  }
};
