const stringifiedArray = localStorage.getItem('blogPost');

// Parse the stringified array into an actual array
const myArray = JSON.parse(stringifiedArray);
// create a div with the class of card that takes local storage data as the argument
function createCard(data, i) {

  let blogPost = `<div id="cards${i}" class="card">
       <h2>${data.title}</h2>
       <hr> 
       <p>${data.content}</p>
       <h6>Posted By: ${data.username}</h6>
  </div>`

  console.log

  const element = document.createElement('div');
  element.innerHTML = blogPost;

  document.body.appendChild(element.firstChild);
}

for (let i=0; i < myArray.length; i++){
  createCard(myArray[i], i);
}