const btn = document.querySelector("#btn");
const title = document.querySelector("#container>h2");
const orderInfo = document.querySelector("#orderInfo");
const cancel = document.querySelector("#cancel");

btn.addEventListener(
  "click",
  () => {
    let newp = document.createElement("p");
    let textNode = document.createTextNode(title.innerText);
    newp.appendChild(textNode); //부모 노드와 자식 노드 연결하기
    orderInfo.appendChild(newp);
    newp.style.fontSize = "0.8em";
    newp.style.color = "blue";
  },
  { once: true }
);

cancel.addEventListener("click", () => {
  orderInfo.innerHTML = "";
  cancel.classList.remove("active");
});
