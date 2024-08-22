const title = document.querySelector("#title");
const author = document.querySelector("#author");
const bookList = document.querySelector("#bookList");
const save = document.querySelector("#save");

save.addEventListener("click", (e) => {
  e.preventDefault(); //서버에 보내지 않기 위함

  const item = document.createElement("li");

  //innerHTML 값을 설정하면 요소의 기존 내용(content)을 새 내용으로 쉽게 변경할 수 있습니다.
  item.innerHTML = `
    ${title.value} - ${author.value}
    <button class="delButton">삭제</button>
    `;
  bookList.appendChild(item);

  // 입력 필드를 초기화합니다.
  title.value = "";
  author.value = "";

  // 모든 삭제 버튼에 클릭 이벤트 리스너를 추가합니다.
  const delButtons = document.querySelectorAll(".delButton");

  delButtons.forEach((delButton) => {
    delButton.addEventListener("click", function () {
      this.parentNode.remove();
    });
  });
});
