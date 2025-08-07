import fetch from 'node-fetch';

export default async (req, res) => {
  const { prompt } = req.body;

  // Stable Diffusion via Replicate (sem API key)
  const response = await fetch(
    "https://api.replicate.com/v1/predictions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${process.env.REPLICATE_API_TOKEN || 'public'}`,
      },
      body: JSON.stringify({
        version: "stability-ai/sdxl",
        input: { prompt },
      }),
    }
  );

  const data = await response.json();
  res.json({ imageUrl: data.output[0] });
});
