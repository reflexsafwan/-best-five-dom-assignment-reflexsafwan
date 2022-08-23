
function getInputFeildNUmber(id){
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);
    return inputFieldValue;
}
function disableClickedBtn(id){
    const clickedBtn = document.getElementById(id);
    clickedBtn.style.backgroundColor = 'gray';
    clickedBtn.style.color = 'black';
}