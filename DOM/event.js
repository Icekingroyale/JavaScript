// const changecolor = () => {
// const boxstyle = document.querySelector('.box1')

// if(boxstyle === 'red'){
//     boxstyle.style.backgroundColor = 'blue'
//     } else {
//         boxstyle.style.backgroundColor = 'red'
//     }

// }

const randcolor = () => {
    const boxstyle = document.querySelector('.box1');
    const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Grey", "Turquoise"];
    // if (boxstyle.style.backgroundColor === 'white') {
      boxstyle.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length - 0 + 1))]
    // } else {
    //   boxstyle.style.backgroundColor = 'green';
    // }
  }

function changeH1() {
  document.getElementById("demo").style.color = "red";
}

function changeH1Back() {
  document.getElementById("demo").style.color = "black";
}


// const changebox2 = () => {
//   document.querySelector('.box2').style.backgroundColor = 'pink'
// }
// document.getElementsByTagName('button')[1].onclick = changebox2

// setting the event and calling the function at the same time
document.getElementsByTagName('button')[1].onclick = () => {
  document.querySelector('.box2').style.backgroundColor = 'pink'
}


// Math.floor(Math.random() * (max - min + 1 ) + min) 
console.log(Math.random())

console.log(Math.floor(Math.random() * (10 - 0 + 1))) // generates random number

console.log(Math.floor(Math.random() * (15 - 10 + 1)) + 10) // generates random between 10 and 15


// change to random colors when you mouseover the h2 heading
const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Grey", "Turquoise"];
function changewagwan() {
  let rc = Math.floor(Math.random() * (colors.length - 0 + 1) + 0);
  document.getElementById('h2').style.color = colors[rc];
}



// handling form in DOM
const db = [{username: 'johndoe', password: 'john1234'},
               {username: 'miketyson', password: 'mike1234'},
               {username: 'stevegerald', password: 'steve1234'},
               {username: 'georgemichael', password: 'george1234'}
];

function handleSubmit(xyz) {
  xyz.preventDefault()  //prevent default submissions
  const username = document.getElementById('username')
  const password = document.getElementById('password')

  if (!username.value && !password.value) {
    username.style.border = '1px solid red'
    password.style.border = '1px solid red'
  }
}


document.getElementById('form').onsubmit = (e) => {
  handleSubmit(e)
}