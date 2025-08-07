import fetch from 'node-fetch';

export default async (req, res) => {
  const { prompt } = req.body;

  // Mistral 7B (Hugging Face)
  const response = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  const output = await response.json();
  res.json({ response: output[0].generated_text });
});
