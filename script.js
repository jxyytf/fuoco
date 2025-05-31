// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    // Hide the music player when the mobile menu is opened, if it's visible
    const musicPlayer = document.querySelector('.music-player');
    musicPlayer.classList.add('hidden');
    mobileMenu.classList.toggle('hidden');
});

// Music playback functionality for release play buttons
let currentPlayingAudio = null; // To keep track of the currently playing audio
const musicPlayer = document.querySelector('.music-player'); // Get the music player element

document.querySelectorAll('.play-button').forEach(button => {
    button.addEventListener('click', (e) => {
 e.preventDefault();

 // Show the music player
 const musicPlayer = document.querySelector('.music-player');
        musicPlayer.classList.remove('hidden');

 const audioId = button.getAttribute('data-audio-id');
 const currentAudio = document.getElementById(audioId);

 // Pause all other audio elements
 document.querySelectorAll('audio').forEach(audio => {
 if (audio !== currentAudio && !audio.paused) {
 audio.pause();
 }
 });

        // Update the music player display (you'll need to add logic here to get the correct track details)
        // For now, let's just make the player visible
        musicPlayer.classList.remove('hidden');

 // Play or pause the clicked audio
 if (currentAudio.paused) {
            // Pause the previously playing audio if any
            if (currentPlayingAudio && currentPlayingAudio !== currentAudio) {
                currentPlayingAudio.pause();
            }
 currentAudio.play();
            currentPlayingAudio = currentAudio; // Update currently playing audio
 } else {
 currentAudio.pause();
            currentPlayingAudio = null; // No audio is playing
            // Decide whether to hide the player when paused. For now, let's keep it visible.
            // musicPlayer.classList.add('hidden'); // Uncomment to hide on pause
        }
    });
});

// Function to format time (seconds to mm:ss)
 const formatTime = (seconds) => {
 const minutes = Math.floor(seconds / 60);
 const remainingSeconds = Math.floor(seconds % 60);
 const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
 return `${minutes}:${formattedSeconds}`;
 };

// Update music player timestamp and progress bar
document.querySelectorAll('audio').forEach(audio => {
    const progressBar = musicPlayer.querySelector('.progress');
 const currentTimeSpan = musicPlayer.querySelector('.current-time');
 const durationSpan = musicPlayer.querySelector('.total-duration');

    audio.addEventListener('timeupdate', () => {
 const {
 currentTime,
 duration
 } = audio;

 currentTimeSpan.textContent = formatTime(currentTime);
 const progressPercent = (currentTime / duration) * 100;
 progressBar.style.width = `${progressPercent}%`;
    });

    audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        if (!isNaN(duration)) {
            durationSpan.textContent = formatTime(duration);
        }
    });

    // Optional: Add an event listener for the 'play' event to update the play/pause button in the persistent player
    audio.addEventListener('play', () => {
        // Update play button in persistent player to show pause icon
        const playPauseBtn = musicPlayer.querySelector('#play-btn');
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });

    // Optional: Add an event listener for the 'pause' event to update the play/pause button in the persistent player
    audio.addEventListener('pause', () => {
        // Update play button in persistent player to show play icon
        const playPauseBtn = musicPlayer.querySelector('#play-btn');
        if (playPauseBtn) {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});


/*
 // Existing music player functionality (can be integrated later if needed)

 // Music player functionality
 const musicPlayer = document.querySelector('.music-player');
    const playBtn = document.getElementById('play-btn');
 const progressBar = musicPlayer.querySelector('.progress'); // Make sure to select from musicPlayer
    let isPlaying = false;
    let progress = 0;
    let progressInterval;

 // Show music player when play button is clicked on any release
 document.querySelectorAll('.fa-play-circle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
 musicPlayer.classList.remove('hidden');

            // Reset progress
            progress = 0;
            progressBar.style.width = '0%';

            // Start progress simulation
            if (progressInterval) clearInterval(progressInterval);
 progressInterval = setInterval(() => {
 if (progress < 100) {
                    progress += 0.5;
 progressBar.style.width = `${progress}%`;
                } else {
 clearInterval(progressInterval);
                }
            }, 1000);
        });
    });

 // Play/pause functionality
 playBtn.addEventListener('click', () => {
 isPlaying = !isPlaying;

        if (isPlaying) {
 playBtn.innerHTML = '<i class="fas fa-pause"></i>';

            // Start progress simulation if not already running
            if (!progressInterval) {
 progress = 0;
 progressBar.style.width = '0%';
                // Start progress simulation
                if (progressInterval) clearInterval(progressInterval);
            }
        } else {
 playBtn.innerHTML = '<i class="fas fa-play"></i>';
 clearInterval(progressInterval);
                progressInterval = null;
            }
        });
*/

 }
 });
});


// Existing music player functionality (can be integrated later if needed)

/*
    // Music player functionality
    const musicPlayer = document.querySelector('.music-player');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.querySelector('.progress');
    let isPlaying = false;
    let progress = 0;
    let progressInterval;

    // Show music player when play button is clicked on any release
    document.querySelectorAll('.fa-play-circle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            musicPlayer.classList.remove('hidden');

            // Reset progress
            progress = 0;
            progressBar.style.width = '0%';

            // Start progress simulation
            if (progressInterval) clearInterval(progressInterval);
            progressInterval = setInterval(() => {
                if (progress < 100) {
                    progress += 0.5;
                    progressBar.style.width = `${progress}%`;
                } else {
                    clearInterval(progressInterval);
                }
            }, 1000);
        });
    });

    // Play/pause functionality
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';

            // Start progress simulation if not already running
            if (!progressInterval) {
                progress = 0;
                progressBar.style.width = '0%';
                // Start progress simulation
                if (progressInterval) clearInterval(progressInterval);
            }
        } else {
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                clearInterval(progressInterval);
                progressInterval = null;
            }
        });
*/

        // Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});