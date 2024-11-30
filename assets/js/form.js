import { savePosts, getPosts, validateForm } from "./logic.js";

// Add an event listener to handle form submission
document.getElementById('blog-form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (e.g., page reload)
    event.preventDefault();
    
    // Retrieve and trim the values from the form fields
    const username = document.getElementById('username').value.trim(); // Get the username
    const title = document.getElementById('title').value.trim(); // Get the blog title
    const content = document.getElementById('content').value.trim(); // Get the blog content
    const errorMessage = document.getElementById('error-message'); // Get the error message element

    // Check if any of the fields are empty
    if (!validateForm(username, title, content)) {
        errorMessage.textContent = 'All fields are required!';
        return;
    }

    // Retrieve existing posts from localStorage or initialize an empty array
    const posts = getPosts();
    
    // Add the new blog post to the posts array
    posts.push({ username, title, content });
    
    // Save the updated posts array back to localStorage
    savePosts(posts);

    // Clear any existing error message
    errorMessage.textContent = '';
    
    // Redirect to the blog posts page
    window.location.href = './blog.html';
});
