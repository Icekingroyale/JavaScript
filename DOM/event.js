// const changecolor = () => {
// const boxstyle = document.querySelector('.box1')
// boxstyle.style.backgroundColor = 'red'
// if(boxstyle === 'red'){
//     boxstyle.style.backgroundColor = 'blue'
//     } else {
//         boxstyle.style.backgroundColor = 'red'
//     } 
    
// }

const changecolor = () => {
    const boxstyle = document.querySelector('.box1');
    if (boxstyle.style.backgroundColor === 'red') {
      boxstyle.style.backgroundColor = 'blue';
    } else {
      boxstyle.style.backgroundColor = 'red';
    } 
  }