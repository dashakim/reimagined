import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface UnsplashImage {
  description: string;
  alt_description: string;
  urls: {
    full: string;
    small: string;
  };
}

interface UnsplashApiResponse {
  results: UnsplashImage[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { word } = req.query as { word?: string };

  if (!word) {
    res.status(400).json({ message: 'No keyword provided' });
    return;
  }

  try {
    const unsplashResponse = await axios.get<UnsplashApiResponse>(`https://api.unsplash.com/search/photos`, {
      params: {
        query: word,
        client_id: process.env.ACCESS_KEY,
        per_page: 10,
      },
    });

    const simplifiedResults = unsplashResponse.data.results.map((image) => ({
      title: image.alt_description || 'No title',
      description: image.description || 'No description',
      smallImageUrl: image.urls.small,
      fullImageUrl: image.urls.full,
    }));

    res.status(200).json(simplifiedResults);
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    res.status(500).json({ message: 'Error fetching images from Unsplash' });
  }
}
