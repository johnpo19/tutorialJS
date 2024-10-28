// fetch("https://jsonplaceholder.typicode.com/comments")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/comments?postId=5") //se puede especificar que buscar con query
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let url = "https://jsonplaceholder.typicode.com"; //mas dinamico


//GET: pedir info
// let query = "posts/1";
// fetch(`${url}/${query}`)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// let requestBody = {
//   title: "JOHN",
//   body: "HOLA",
//   userId: 1,
// };

//POST: enviar info
// fetch(`${url}/posts`, {
//   method: 'POST',
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(requestBody),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//PUT: EDITAR INFO
// let posteoAModificar = 5

// let requestBody2 = {
//   id: 3,
//   title: "JOHN",
//   body: "HOLA",
//   userId: 5,
// };


// fetch(`${url}/posts/${posteoAModificar}`, {
//   method: 'PUT',
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(requestBody2),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));






//PATCH: EDITAR INFO (SOLO UN ATRIBUTO)


// let modificacion = {
//   title: 'este titulo ha sido modificado'
// }
// let post = 10

// fetch(`${url}/posts/${post}`, {
//   method: 'PATCH',
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(modificacion),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));





//DELETE: BORRAR UN ITEM
let elementoAEliminar = 7

fetch(`${url}/posts/${elementoAEliminar}`, {
  method: 'DELETE',
});
