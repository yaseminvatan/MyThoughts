document.getElementById('blog-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorMessage = document.getElementById('error-message');

    if (!username || !title || !content) {
        errorMessage.textContent = 'All fields are required!';
        return;
    }

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ username, title, content });
    localStorage.setItem('posts', JSON.stringify(posts));

    errorMessage.textContent = '';
    window.location.href = './blog.html';
});
