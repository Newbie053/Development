//DOM Manipulation

 
// const title = document.getElementById('main-heading');
// console.log(title.textContent);

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);
// for(let item of listItem){
//     console.log(item.textContent);
// }

// const listItem2 = document.getElementsByTagName('li');
// console.log(listItem2);
// for(let item of listItem2){
//     console.log(item.textContent);
// }


// const container = document.querySelector('div');
// console.log(container);
// const container2 = document.querySelectorAll('div');
// console.log(container2)


// const  title = document.querySelector('#main-heading');
// title.style.color= 'red';

// title.style.padding = '20px';
// title.style.border = '2px ssolid black';
// title.style.background = 'yellow';
// console.log(title);



// styling element

// const listItem = document.querySelectorAll('.list-items');
// for (i =0;i<listItem.length;i++){
// listItem[i].style.color='aqua';
// listItem[i].style.fontSize = '20px';
// }
// for(i of listItem){
//     i.style.padding = '20px';
// }

//creating element

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.innerText='DC';
// ul.append(li);
// li.setAttribute('id','main-heading');
// li.removeAttribute('id');
// li.remove();

// const firstListItem = document.querySelector('.list-items');
// console.log(firstListItem.innerText);

//Parent Node Traversal


let ul = document.querySelector('ul');
console.log(ul);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

// let ul = document.querySelector('ul');
// console.log(ul);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);


//Child Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[3].style.backgroundColor = 'blue'
// console.log(ul.children);


//Event Listeners

const button2 = document.querySelector('.btn-2');
function alerBtn(){
    alert('This is cool');
}
button2.addEventListener("click",alerBtn);

const box3 = document.querySelector('.box-3');

box3.addEventListener("mouseover", function() {
    box3.style.backgroundColor = "blue"; // color changes when mouse enters
});

box3.addEventListener("mouseout", function() {
    box3.style.backgroundColor = "#f0f0f0"; // revert when mouse leaves
});



//Event Propagation

//Event Delegation


// document.querySelector('#football').addEventListener("click",
//     function(e){
//         console.log('football is clicked!');
//         const target =e.target;
//         if(target.matches('li')){
//             target.style.backgroundColor = 'yellow';
//         }
//     }
// )
// document.querySelector('#basketball').addEventListener("click",
//     function(e){
//         console.log('basketball is clicked!');
//                 const target =e.target;
//         if(target.matches('li')){
//             target.style.backgroundColor = 'yellow';
//         }
//     }
// )
// document.querySelector('#boxing').addEventListener("click",
//     function(e){
//         console.log('boxing is clicked!');
//                 const target =e.target;
//         if(target.matches('li')){
//             target.style.backgroundColor = 'yellow';
//         }
//     }
// )
// document.querySelector('#tennis').addEventListener("click",
//     function(e){
//         console.log('tennis is clicked!');
//                 const target =e.target;
//         if(target.matches('li')){
//             target.style.backgroundColor = 'yellow';
//         }
//     }
// )
// document.querySelector('#golf').addEventListener("click",
//     function(e){
//         console.log('golf is clicked!');
//                 const target =e.target;
//         if(target.matches('li')){
//             target.style.backgroundColor = 'yellow';
//         }
//     }
// )



document.querySelector('#sports').addEventListener("click",
    function(e){
        console.log(e.target.id+ ' is clicked!');
        const target =e.target;
        if(target.matches('li')){
            target.style.backgroundColor = 'yellow';
        }
    }
);

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id','rugby');
sports.appendChild(newSport);







