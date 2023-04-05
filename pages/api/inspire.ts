// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //send prompt to server
  const prompt = req.query.prompt;

  if(!prompt) {
    return res.status(400).json({error: "Prompt missing"})
  }

  if(prompt.length > 100) {
    return res.status(400).json({error: "Prompt over 100 characters"})
  }

  //instructions for how chatGPT should answer
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create an inspiring motivational quote based on the following topic. \n
    Topic:${prompt}\n
    Motivational quote:`,
    max_tokens: 500, 
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0
  });

  //send response to front-end 
  const quote = completion.data.choices[0].text;

  res.status(200).json({ quote })
}
