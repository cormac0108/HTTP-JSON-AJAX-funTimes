
//things to remember
JSON.parse()   //to parse your json


//Using AJAX - promises - async etc.

Constructor () {
    super()
    this.state = {
        robots: [],
        searchfield: ''
    }
}

componentDidMount () {
    fetch('url')
        .then(respone => response.json())
        .then(users => {this.ListeningStateChangedEvent({robots: users})});

}

//an ajax request to the api using fetch . using json to communicate with servers. send json 
// data. 

//fetch api 
fetch(url)
    .then(resp => resp.json())
    .then(console.log)

//Async Await?
async function fetchUsers () {
    const resp = await fetch('url')
    const data = await resp.json();
    console.log(data);
}

//object spread operator 
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const array = [ 1, 3 , 3, 4, 5] ;
function sum (a, b, c, d, e) {
    return a + b + c + d + e;

}

const {tiger, ...rest} = animals;
sum(1,2,3,4,5)

function objectSpread (p1,p2,p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}


const {tiger,lion, ...rest} = animals;
objectSpread(tiger, lion, rest);