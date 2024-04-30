const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
  
// create blog post object when the user clicks on the submit button
    const blogPost = {
      username: usernameInput.value.trim(),
      title: titleInput.value.trim(),
      content: contentInput.value.trim(),
    };
    
// stores the input into local storage
    localStorage.setItem('blogPost', JSON.stringify(blogPost));

    window.location="blog.html";
  });