import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://grow-my-therapy-q812j10ha-aarnavanands-projects.vercel.app//sitemap.xml',
    };
}
