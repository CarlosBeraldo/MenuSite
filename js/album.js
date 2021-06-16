var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var legendaText = document.getElementById("legenda");
function carregarModal(imagem){
modal.style.display = "block";
modalImg.src = imagem.src;
legendaText.innerHTML = imagem.alt;
}
var span = document.getElementsByClassName("fechar")[0];
span.onclick = function() {
modal.style.display = "none";}
     
window.onclick = function(event) {
if (event.target == modal) {
        modal.style.display = "none";
    }
}
function desativar(){
    modal.style.display = "none";
}
         