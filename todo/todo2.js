const input = document.querySelector(".input-task");
const btn = document.querySelector(".input-btn");
const list = document.querySelector(".todo-list");

function addList() {
  if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.append(input.value);
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  // input이 클릭이 적용된다고 해서 js로도 적용된것은 아님
  checkbox.addEventListener("click", function () {
    checkbox.checked
      ? (span.style.textDecoration = "line-through")
      : (span.style.textDecoration = "none");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  deleteBtn.addEventListener("click", function () {
    // Q : 추가된 li가 여러개일때 어떻게 deleteBtn의 부모요소인 li를 스스로 찾아서 삭제하는지?
    // A : 사실 JS  에서의 함수는 호출이 가능한 객체이다보니 버튼이 클릭 될 때 addList()라는 함수가 33번째 줄의 이벤트 리스너에 의해서 계속 생성이 되는 구조
    // 즉, 함수를 하나만 생성해서 계속 돌려 쓰는 것이 아니라, 이벤트 리스너에 의해 새롭게 객체로 만들어 버리는 구조
    // 예를 들어 addList()를 실행하면 li,deleteBtn등이  생성되는데, 이떄 이 함수가 객체(li,deleteBtn등 정보 포함된 객체)로 메모리에 저장되어있기때문에 li의 정보도 알고있어서 하단코드도 작동되는것..
    console.log(li);
    li.remove();
    // deleteBtn.parentNode.remove();
  });

  li.append(checkbox, span, deleteBtn);
  list.append(li);
  input.value = "";
}
btn.addEventListener("click", addList);
