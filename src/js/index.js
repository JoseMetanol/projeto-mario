const trailerButton = document.querySelector(".button-trailer");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".close-modal");
const video = document.getElementById("video");
const videoLink = video.src; 

function alternateModal(){
  modal.classList.toggle("open");
}

trailerButton.addEventListener("click", () => {
  alternateModal();
 video.setAttribute("src", videoLink);
});

closeModalButton.addEventListener("click", () => {
  alternateModal();
  video.setAttribute("src", "");
});