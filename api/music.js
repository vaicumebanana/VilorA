import fetch from 'node-fetch';

export default async (req, res) => {
  const { text } = req.body;

  // Bark TTS (Hugging Face)
  const response = await fetch(
    "https://api-inference.huggingface.co/models/suno/bark",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: text }),
    }
  );

  const audioBuffer = await response.buffer();
  res.setHeader('Content-Type', 'audio/wav');
  res.send(audioBuffer);
});
