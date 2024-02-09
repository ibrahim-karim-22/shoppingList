let adds = document.querySelector('.addBtn'); //using event listener instead of onclick
adds.addEventListener('click', getItem);
//we have ul element but we need to create some <li> elements via DOM.
//global variable that points to the node containing the <ul> element that will hold
//our list items
const shoppingList = document.getElementById('shoppingList');



let listArr = []; // setting an empty array to store shopping list

function getItem(event) {
    event.preventDefault(); //prevent reloading when event is trigered. Great to use with online forms for example.
    //document.getElementById('myform').textContent = 'Add button clicked';// console log if button is clicked
    //create local variable and assign it to dom node containing the input we added .value property 
    //because we dont want entire object only data stored inside value property on this object.
     //display error in the dom as well 
     const displayError = document.querySelector('.dispErr');
     if (displayError) {
        displayError.textContent = '';
     }
    try {
    const item = document.getElementById('item').value;
    if (!item.trim()) {
        throw new Error("The input cannot be empty.");
    }
    console.log(item);// should console whatever inputed into form.
    //if item and doesnt equal to array will push and sort
    if (item && !listArr.includes(item)) {
        listArr.push(item);
        listArr.sort();
    }
    console.log(listArr);
    document.getElementById('myForm').reset(); //resets form for new input after enter
    removeList();
    makeList();
    } catch (error) {
    console.error(error);
   
    //ensure to handle the scenario where the selceted element might not exist in the DOM.
    if (displayError) {
        //set the error message as text content of the displayError element
        displayError.textContent = error.message;
    }
    
    }
}
//make sure to remove error message from div when add button is pressed again with text.
  /*  document.querySelector('.addBtn').addEventListener('click', resetDiv)

    function resetDiv(event) {
        event.preventDefault();
        //CLEAR PREVIOUS ERRO MESSAGE 
        const displayError = document.querySelector('.dispErr');
        if (displayError) {
            displayError.textContent = '';
            //can add more things for div to do
        }
    }*/

/*function to be called at the end of getList() function which will iterate throught hte loop and 
and create the DOM elements after a new item gets pushed into the list array and the array is re-sorted.*/
function makeList() {
   // shoppingList.innerHTML = ''; //clears the existing iems. or use a new method called removeList()
    for (let i = 0; i < listArr.length; i++) { // adds mew items.
        const listItem = document.createElement('li');
        listItem.textContent = listArr[i]; // set text content to the item
        /*event listener inside loop before appending to shopping list node 
        listner call the removeItem function*/
        listItem.addEventListener('click', removeItem);
        shoppingList.appendChild(listItem);//Append the new created and assigned listItem to the shoppingList node as a child element
    }
}

/*use shoppingList.innerHTML = ''; or use removeList() by placing it inside getItem() just before
the call to makeList()*/
function removeList() {
    while (shoppingList.firstChild) {
        shoppingList.removeChild(shoppingList.firstChild);
    }
}
//event refers to the click event that invokes this function
function removeItem(event) {
    /*extract the value that is stored in the textContent property 
    of the currentTarget (meaning the thing that was clicked on) of the event*/
    try {
        const item = event.currentTarget.textContent;
    //use indexOf to find the index item you want to remove 
        let index = listArr.indexOf(item);
        if (index === -1) {
        throw new Error ('Item not found in the list ')
    }
    //first parameter is the starting index of changes (where you found your item)
    //second parameter is number of the elements to remove from that index forward in this case we want to remove just one item.
        listArr.splice(index, 1);
    //use removeList() to clear the existing list from the UI, followed by makeList() 
    //to regenerate the list with the item removed
        removeList();
        makeList();
    } catch (error) {
        console.error(error);

        
    } 
}





