const open = document.querySelector("#open"); // ID 선택자로 수정
const modalbox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  modalbox.classList.toggle("active"); // addEventListener -> classList.toggle
});

close.onclick = function () {
  modalbox.classList.remove("active");
};
