const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();  // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Example Route
app.post('/generate_post', (req, res) => {
    const topic = req.body.topic;
    const apiKey = process.env.DEEPSEEK_API_KEY;  // Retrieve API key from environment variable
    
    // Call your DeepSeek V3 function here to generate content
    const generatedContent = {
        title: `Generated Blog Post on ${topic}`,
        content: `This is a generated blog post about ${topic}.`
    };
    res.json(generatedContent);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
