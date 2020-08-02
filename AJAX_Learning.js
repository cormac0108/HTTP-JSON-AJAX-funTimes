
// enter these in the console
fetch('https://jsonplaceholder.typicode.com/users')
//we get a promise? 
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(response));
// .json() method for AJAX? 
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
//now to get the data we do another .then ()
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => console.log(data));
// and look at that!  we receive our users.  ajax request using fetch API 
// we get a response which was promise. 