// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the container where blog posts will be displayed
    const postsContainer = document.getElementById('posts-container');
    
    // Retrieve posts from localStorage or initialize an empty array if none exist
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // If there are no posts, display a message and exit
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>'; // Message for empty posts
        return; // Stop further execution
    }

    // Iterate over each post and create a card to display it
    posts.forEach(post => {
        const postCard = document.createElement('div'); // Create a div for the post card
        postCard.classList.add('post-card'); // Add a class for styling

        // Set the HTML content of the post card
        postCard.innerHTML = `
            <h2>${post.title}</h2> <!-- Blog post title -->
            <p>${post.content}</p> <!-- Blog post content -->
            <p><strong>Author:</strong> ${post.username}</p> <!-- Blog post author -->
        `;

        // Append the post card to the posts container
        postsContainer.appendChild(postCard);
    });

    // Add a click event listener to the "Back" button
    document.getElementById('back-btn').addEventListener('click', () => {
        // Redirect to the index page when the button is clicked
        window.location.href = './index.html';
    });

    // Get the "Toggle Theme" button
    const themeToggle = document.getElementById('theme-toggle');
    
    // Add a click event listener to toggle between light and dark modes
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // Toggle the dark-mode class on the body
    });
});
