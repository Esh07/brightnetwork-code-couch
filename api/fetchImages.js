// api/fetchImages.js
export default async function handler(req, res) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=20&page=2`);
        const data = await response.json();

        console.log(data);

        // Transform data to include only the necessary fields
        const transformedData = data.map(image => ({
            id: image.id,
            url: image.urls.regular, // Use the regular size URL for optimal quality and performance
            author: image.user.name || "Unknown Author",
            location: image.location?.name || "Unknown Location",
            publishedAt: image.created_at || null,
        }));

        res.status(200).json(transformedData);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ error: 'Failed to fetch images' });
    }
}
