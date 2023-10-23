import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function generateCharacterInformation(name: string, onSmallScreen: boolean) {

  try {
    console.log('onSmallScreen', onSmallScreen)
    const userContent = onSmallScreen
      ? `Please generate a sentence of information about character ${name}. Please make it a maximum of 50 words.`
      : `Please generate a paragraph of information about character ${name}. Please make it a maximum of 300 words.`;
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an creative and helpful AI assistance capable of generating interesting character information for Rick and Morty Characters."
        },
        {
          role: "user",
          content: userContent,
        },
      ],
    });
    const data = await response.json();
    console.log(data);
    const characterInfo = data?.choices[0].message.content;
    return characterInfo as string;
  } catch (error) {
    console.log(error);
    throw error;
  }
}