const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");

function deleteTask(t) {
  console.log(t);
  t.parentNode.remove();
}

function addList() {
  if (inputTask.value === "") {
    inputTask.setAttribute("placeholder", "내용을 입력하세요");
    return;
    // 함수가 특정연산을 마치고 값을 반환해준다음 종료됨
  }

  // 이렇게 addList 에 대한 수행과 어떻게 보면 관련이 없는 아래코드들을 계속 addList 함수 내에서 진행하는 이유는 li요소가 생성 후 li요소 내에서 체크되고,
  // 삭제되는 함수가 안에 들어있기 떄문, 즉 li(=todolist)가 생성 될때마다 li에 이 기능을 지닌 함수도 li별로 추가되는것
  // 리액트로 보면 리액트도 컴포넌트화되어서 해당 컴포넌트에 함수를 포함해서 진행하기 떄문에 이와 같은 개념이라고 이해해보자!!

  const addList = document.createElement("li");
  const checkBtn = document.createElement("input");
  checkBtn.setAttribute("type", "checkbox");
  checkBtn.addEventListener("click", function () {
    // 익명함수화
    checkBtn.checked
      ? (checkBtn.parentNode.style.textDecoration = "line-through")
      : checkBtn.parentNode.setAttribute("style", "text-decoration: none;");
    // (checkBtn.parentNode.style = "text-decoration:line-throught");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "삭제";
  // 삭제방법 1
  // deleteBtn.addEventListener("click", function (e) {
  //   console.log(e, e.target);
  //   e.target.parentNode.remove();
  // });

  // 삭제방법 2
  deleteBtn.setAttribute("onclick", "deleteTask(this)");

  addList.append(inputTask.value, deleteBtn);
  addList.prepend(checkBtn);
  todoList.append(addList);

  inputTask.value = "";
}

addBtn.addEventListener("click", addList);
//  addList 함수화
