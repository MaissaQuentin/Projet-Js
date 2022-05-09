 function addText(){
if(txt_to_add.value!=='')
{
 document.getElementById('txt_to_add')
 document.querySelector('#mylist p').innerText += txt_to_add.value+'\n'

 txt_to_add.focus();
 }
 else{
     alert('veuillez entrez un message');
 }
 txt_to_add.focus();
}

const myArray = ['Une ligne','autre chose'];

function updateArray(){
    for(let i=0; i< myArray.length; i++){
        document.getElementById('txt_to_add')
        document.querySelector('#myArray p').innerText += txt_to_add.value+'\n'
    }
    
}

