import fetch from 'node-fetch';

export default async (req, res) => {
  const { prompt } = req.body;

  // Zeroscope (Hugging Face - sem API key)
  const zeroscopeResponse = await fetch(
    "https://api-inference.huggingface.co/models/cerspense/zeroscope_v2_576w",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  const videoBuffer = await zeroscopeResponse.buffer();
  res.setHeader('Content-Type', 'video/mp4');
  res.send(videoBuffer);
});
