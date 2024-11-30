// logic.js

/**
 * Save posts array to localStorage.
 * @param {Array} posts - Array of blog posts.
 */
function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

/**
 * Retrieve posts array from localStorage.
 * @returns {Array} Array of blog posts.
 */
function getPosts() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

/**
 * Toggle light/dark mode on the page.
 */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

/**
 * Validate blog post form fields.
 * @param {String} username - The username input value.
 * @param {String} title - The blog title input value.
 * @param {String} content - The blog content input value.
 * @returns {Boolean} True if all fields are valid, otherwise false.
 */
function validateForm(username, title, content) {
    return username.trim() !== '' && title.trim() !== '' && content.trim() !== '';
}

export { savePosts, getPosts, toggleTheme, validateForm };
