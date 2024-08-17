const backendURL = 'https://hmstr-iw7i5ijjw-opiran-clubs-projects.vercel.app/api/generate-keys';

async function generateKeys() {
    try {
        const response = awaitfetch(backendURL);
        const keys = await response.json();
        const output = document.getElementById('keysOutput');
        output.value = keys.join('\n');
    } catch (error) {
        console.error('Error generating keys:', error);
    }
}

document.getElementById('generateKeys').addEventListener('click', generateKeys);
