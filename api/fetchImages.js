
// api/fetchImages.js
export default async function handler(req, res) {
    try {
        // Extract the category from the query parameter
        const category = req.query.category || 'India';

        // Define search queries related to India
        const queries = {
            'India ancient heritage': 'India ancient heritage',
            'India rivers': 'India rivers',
            'India waterfalls': 'India waterfalls',
            'India mountains': 'India mountains',
            'India lakes': 'India lakes',
            'India seas': 'India seas',
            'India beaches': 'India beaches',
            'India forests': 'India forests',
            'India wildlife': 'India wildlife',
            'India temples': 'India temples',
            'India architecture': 'India architecture',
            'India culture': 'India culture',
            'India festivals': 'India festivals'
        };

        // Use the query defined in the queries object, default to 'India'
        const query = queries[category] || 'India';

        // Generate a random page number between 1 and 10
        const randomPage = Math.floor(Math.random() * 10) + 1;

        // Fetch images from Unsplash using the search query
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30&page=${randomPage}&order_by=latest`);

        // Check if response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure the results exist in the response
        if (!data.results) {
            return res.status(500).json({ error: 'No images found' });
        }

        // Transform the data to include only necessary fields
        const transformedData = data.results.map(image => ({
            id: image.id,
            url: image.urls.regular, // Regular size URL for optimal quality and performance
            author: image.user.name || "Unknown Author",
            slug: image.slug || null,
            publishedAt: image.created_at || null,
        }));

        // Send the transformed data as the response
        res.status(200).json(transformedData);
    } catch (error) {
        console.error('Error fetching images:', error); // Log the error for debugging
        res.status(500).json({ error: 'Failed to fetch images' });
    }
}
