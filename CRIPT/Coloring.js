document.getElementById("num1").style.color = "red";
document.getElementsByTagName('p')[1].style.color = 'green';

const coul = prompt('entrez une couleur (red,blue,green)')
switch (coul){
    case 'red':
    document.body.style.backgroundColor = "red";
    break;
    case 'green':
    document.body.style.backgroundColor = "green";
    break;
    case 'blue':
    document.body.style.backgroundColor = "blue "
    break;

    default:
    document.body.style.backgroundColor = "white"
}





let listeP = document.getElementsByTagName('p');
for (i=0; i<listeP.length; i++){
    listeP[i].style.backgroundColor = 'blue';
    listeP[i].style.color = 'white';
}