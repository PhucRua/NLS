import { GoogleGenAI } from "@google/genai";

export const generateCompetencyIntegration = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key chưa được cấu hình trong biến môi trường (.env)");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        // Increased to handle full file processing
        maxOutputTokens: 66536 
      }
    });

    if (response.text) {
      return response.text;
    } else {
      throw new Error("Không nhận được phản hồi từ Gemini.");
    }
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw new Error(`Lỗi khi gọi Gemini API: ${error.message || error}`);
  }
};