let adds = document.querySelector('.addBtn'); //using event listener instead of onclick
adds.addEventListener('click', getItem);
function getItem(event) {
    event.preventDefault(); //prevent reloading when event is trigered. Great to use with online forms for example.
    //document.getElementById('myform').textContent = 'Add button clicked';// console log if button is clicked
    //create local variable and assign it to dom node containing the input we added .value property 
    //because we dont want entire object only data stored inside value property on this object.
    const item = document.getElementById('item').value;
    console.log(item);// should console whatever inputed into form.
}