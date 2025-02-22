// script.js
document.getElementById('imLuckyBtn').addEventListener('click', generateRandomPost);
const apiKey = process.env.DEEPSEEK_API_KEY;
async function generateRandomPost() {
    const topics = ['Fitness Tips', 'Weight Loss Strategies', 'Healthy Eating', 'Exercise Routines', 'Mental Wellness'];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    console.log(`Selected Topic: ${randomTopic}`);

    try {
        const response = await fetch('https://api.deepseek.com/v3/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({ topic: randomTopic })
        });

        if (response.ok) {
            const data = await response.json();
            document.getElementById('post').innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            alert('Failed to generate post. See console for details.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. See console for details.');
    }
}
