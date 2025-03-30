// Netflix Clone - Core Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Movie data for different categories
    const movieData = {
        trending: [
            {
                title: "Stranger Things",
                image: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg",
                id: "tt4574334"
            },
            {
                title: "The Witcher",
                image: "https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg",
                id: "tt5180504"
            },
            {
                title: "Money Heist",
                image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
                id: "tt6468322"
            }
        ],
        popular: [
            {
                title: "Breaking Bad",
                image: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg",
                id: "tt0903747"
            },
            {
                title: "The Queen's Gambit",
                image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
                id: "tt10048342"
            }
        ]
    };

    // Initialize movie carousels
    function initCarousels() {
        // For each category, render movie cards
        for (const [category, movies] of Object.entries(movieData)) {
            const container = document.querySelector(`.${category}-movies`);
            if (container) {
                movies.forEach(movie => {
                    const movieCard = document.createElement('div');
                    movieCard.className = 'movie-card cursor-pointer';
                    movieCard.innerHTML = `
                        <img src="${movie.image}" alt="${movie.title}" class="rounded w-full h-auto hover:scale-105 transition-transform">
                    `;
                    movieCard.addEventListener('click', () => {
                        window.location.href = `movie-details.html?id=${movie.id}`;
                    });
                    container.appendChild(movieCard);
                });
            }
        }
    }

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                window.location.href = `search.html?q=${encodeURIComponent(this.value.trim())}`;
            }
        });
    }

    // Login form handling
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (email && password) {
                // Simple validation - in real app would call API
                localStorage.setItem('netflix-clone-auth', 'true');
                window.location.href = 'index.html';
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Check authentication status
    function checkAuth() {
        const isAuthenticated = localStorage.getItem('netflix-clone-auth');
        const signInBtn = document.querySelector('.signin-btn');
        
        if (signInBtn) {
            if (isAuthenticated) {
                signInBtn.textContent = 'My Account';
                signInBtn.href = '#';
            } else {
                signInBtn.textContent = 'Sign In';
                signInBtn.href = 'login.html';
            }
        }
    }

    // Initialize all functionality
    initCarousels();
    checkAuth();
});