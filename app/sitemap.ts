import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more URLs here as they are created
    ];
}
