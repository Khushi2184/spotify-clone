const searchInput = document.getElementById('search');
const songInfo = document.querySelector('.song-info p');

document.querySelector('.player-controls').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const action = e.target.textContent;
        songInfo.textContent = `Now Playing: ${action}...`;
    }
});

searchInput.addEventListener('input', (e) => {
    console.log(`Searching for: ${e.target.value}`);
});
