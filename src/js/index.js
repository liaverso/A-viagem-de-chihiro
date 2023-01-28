
//OBJETIVO 1: Quando o usuário clicar no botão "Veja o trailer", devemos abrir a modal com o video do trailer.
// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js
const botaoTrailer = document.querySelector(".botao");

// passo 2 - dar um jeito de identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    modal.classList.toggle("aberto");
    video.setAttribute("src", linkDoVideo);
})

// passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");
console.log("mostra o objeto da modal", modal);

//OBJETIVO 2: Quando o usuário clicar no x, devemos fechar o modal.
// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de identificar quando o usuário clicar no x
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal
    modal.classList.toggle("aberto");
    video.setAttribute("src", "");
})

const video = document.getElementById("video");
const linkDoVideo = video.src