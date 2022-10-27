// Pegar o elemento pelo Id
var modal = document.getElementById("myModal");

// Pegar o botão que irá abrir o modal
var btn = document.getElementById("myBtn");
        
// Pegar o elemento <span> que irá fechar o modal
var button = document.getElementsByClassName("fechar")[0];
        
// Quando o usuário clicar no botão, abrir o modal 
btn.onclick = function() {
    modal.style.display = "block";
}
        
// Quando o usuário clicar no elemento span (x), feche o modal
button.onclick = function() {
    modal.style.display = "none";
}
        
// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
    if (event.target == modal) {
         modal.style.display = "none";
    }
}