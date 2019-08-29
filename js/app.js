const storeName = 'Filly H';
document.title = `${storeName} Grocery Store`;

// console.log('what is in document:', document.all[23]);

// console.log('what is in document:', document.all);

// console.log(document.getElementsByTagName('p'));

let h1Header = document.getElementById('mainIntro');
console.log(h1Header);

h1Header.innerHTML='Welcome';

const getAllNavListClasses = document.querySelectorAll('.nav_list_item');

console.log(getAllNavListClasses);

const getIconCredit = document.querySelector('#iconsCredit');
console.log(getIconCredit);

// const example = document.querySelector('.nav_list_item');
// console.log(example);

// const example = document.getElementsByClassName('nav_list_item');
// console.log(example);

const imageExample = document.querySelector('img[alt="cherry icon"]');

console.log(imageExample);

const magicButton = document.getElementById('magic');
// console.log(magicButton);

// magicButton.addEventListener('click', () => {
//     magicButton.className = 'myPoint'
//     console.log(magicButton);
// })

magicButton.addEventListener('mouseover', () => {
    magicButton.className = 'myPoint'
    console.log(magicButton);
})


// magicButton.addEventListener('mouseleave', () =>{
//     magicButton.className = '';
// })

magicButton.addEventListener('mouseleave', () =>{
    magicButton.classList.remove("myPoint");
})

document.addEventListener('keydown', () =>{
    console.log(event.keyCode);
})