

const input = document.querySelector('input') // this grabs the input
const form = document.querySelector('form')//you need this so that you can add an event listener to listen for the submit 
const button = document.querySelector('button')//here we add an event listener for the click
const list = document.querySelector('.list')


//------------------------
//input.value equals what ever is typed into the text box
//--------------------

function addItem(evt){
	evt.preventDefault()//prevents the infor mation disappearing when you refresh the page
	let listItem = document.createElement('li')
	let theNewInput = input.value
	listItem.innerText = theNewInput
	list.appendChild(listItem)
	form.reset()//
}

form.addEventListener('submit',addItem)