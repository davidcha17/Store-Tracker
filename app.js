// Selectors 
const trackerInput = document.querySelector('.tracker-input')
const trackerButton = document.querySelector('.tracker-button')
const trackerList = document.querySelector('.tracker-list')
const filterOption = document.querySelector('.filter-tracker')


// Event Listeners
trackerButton.addEventListener('click', addTrackerItem)
trackerList.addEventListener('click', deleteItem)
filterOption.addEventListener('input', changeFilter)
 
// Functions

function addTrackerItem (e) {
    e.preventDefault()
    console.log("hello, i've been clicked")
    // creating a div to hold the li
    const trackerDiv = document.createElement("div")
    trackerDiv.classList.add('tracker')

    // creating an li 
    const newItem = document.createElement("li")
    
    newItem.innerText = trackerInput.value
    newItem.classList.add("tracker-item")
    if(trackerInput === null) {
        alert("Can't add nothing to the list")
    } else {
        trackerDiv.appendChild(newItem)
        
        // complete button
        const completedButton = document.createElement('button')
        completedButton.innerHTML = `<i class="fas fa-check"></i>`
        completedButton.classList.add('complete-btn')
        trackerDiv.appendChild(completedButton)
        
        // delete button
        const deleteButton = document.createElement('button') 
        deleteButton.innerHTML = `<i class="fas fa-trash"></i>`
        deleteButton.classList.add('delete-btn')
        trackerDiv.appendChild(deleteButton)
        
        // append it to the list 
        trackerList.appendChild(trackerDiv)
        
        // after appenind, clear the input value
        trackerInput.value = ""
    }
}

function deleteItem(e) {
    const item = e.target
    // delete functionality with an if statement
    if(item.classList[0] === "delete-btn") {
        console.log("delete")
        const deleteItem = item.parentElement
        // adding delete animation 
        deleteItem.classList.add("fall")
        deleteItem.addEventListener('transitionend', function() {
            deleteItem.remove()
        })
        
    }

    // we can also add the check btn here because were technically deleting the item still
    if(item.classList[0] === "complete-btn") {
        console.log("bought!")
        const boughtItem = item.parentElement
        boughtItem.classList.toggle('bought')
    }
}

function changeFilter(e) {
    const trackerLists = trackerList.childNodes
    // console.log(trackerLists)
    // were able to iterate throught the childNodes through a forEach loop because it's a node list
    trackerLists.forEach(function(tracker) {
        // adding a function that allows us to access the individual tracker
        // console.log(tracker)
        switch(e.target.value) {
            case "all":
                    tracker.style.display = 'flex';
                    // console.log(trackerLists, tracker, "all items")
                    break;
            case "bought":
                    if(tracker.classList.contains('bought')) {
                    // if the list contains a class name of bought, show only those items
                    tracker.style.display = 'flex'
                    // console.log(trackerLists, tracker, "bought items")
                } else {
                    tracker.style.display = "none"
                }
                break;
            case "not-bought":
                if(!tracker.classList.contains('bought')) {
                    tracker.style.display = 'flex'
                } else {
                    tracker.style.display = "none"
                }
                break;
        }
    })
}
// proving to be the most difficult because we were getting undefined when were trying to access the class
// of tracker which is the item
// when we click on the button we get an empty text maybe it's because of the ul not being together
// When you separate the ul on index.html you create an empty space which is why we were able to get the case
// statements working

function saveTracker() {
    
}