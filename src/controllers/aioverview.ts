import { GoogleGenerativeAI } from '@google/generative-ai';
import type { Request, Response } from 'express';

export const generateOverview = async (req: Request, res: Response): Promise<void> => {
    try {
        // We expect the frontend to send an array of cards data
        const { cardsData } = req.body;

        if (!cardsData) {
            res.status(400).json({ error: "cardsData is required in the request body" });
            return;
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            res.status(500).json({ error: "Gemini API key is not configured in the environment" });
            return;
        }

        // Initialize Gemini with the API key
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Based on the following user cards data (which includes YouTube and Twitter content), generate a comprehensive AI overview summarizing their main interests, activities, and key topics. Keep it engaging, insightful, and concise:
        
        ${JSON.stringify(cardsData, null, 2)}`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        res.status(200).json({ overview: responseText });
    } catch (error) {
        console.error("Error generating AI overview:", error);
        res.status(500).json({ error: "Failed to generate AI overview" });
    }
};
