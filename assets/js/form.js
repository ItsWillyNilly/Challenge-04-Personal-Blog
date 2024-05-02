const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');


submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  let blogs = JSON.parse(localStorage.getItem('blogPost')) || []; 
  // create blog post object when the user clicks on the submit button
    blogPost = {
      username: usernameInput.value.trim(),
      title: titleInput.value.trim(),
      content: contentInput.value.trim(),
    };
    
    blogs.push(blogPost);
// stores the input into local storage

    localStorage.setItem('blogPost', JSON.stringify(blogs));

    window.location="blog.html";
  });