// script.js
document.getElementById('imLuckyBtn').addEventListener('click', generateRandomPost);

async function generateRandomPost() {
    const topics = ['Fitness Tips', 'Weight Loss Strategies', 'Healthy Eating', 'Exercise Routines', 'Mental Wellness'];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    const response = await fetch('https://api.deepseek.com/v3/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_DEEPSEEK_API_KEY'
        },
        body: JSON.stringify({ topic: randomTopic })
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('post').innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
    } else {
        alert('Failed to generate post.');
    }
}
