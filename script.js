$(document).ready( readyNow );
let counter = 0;
function readyNow() {
    console.log('JQ sourced');
    $('#generateButton').on('click', generateButtonClick)
    $(document).on('click', '.swapButton', swapButtonClick )
    $(document).on('click', '.deleteButton', deleteButtonClick )
}//end doc ready

console.log('JS sourced');
function generateButtonClick() {
    counter ++
    console.log('button clicked');
    $('body').append(`<div class=""><p>Button has been clicked ${counter} times</p>
    <button class="swapButton">Swap</button><button class="deleteButton">Delete</button></div>`);
    console.log(counter);  
} // end generate button function

function swapButtonClick() {
    console.log('swap clicked');
    $(this).parent().toggleClass("swapDiv");
}

function deleteButtonClick() {
    console.log('delete clicked');
    $(this).parent().remove();
}