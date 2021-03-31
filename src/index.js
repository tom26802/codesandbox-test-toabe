import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグとliタグを生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  div.innerText = inputText;

  // ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    console.log(addTarget.innerText);
    deleteFromImcompleteList(completeButton.parentNode.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //　押されたボタンの親タグを削除
    deleteFromImcompleteList(deleteButton.parentNode.parentNode);
  });
  // liタグの下にdivタグを入れる
  li.appendChild(div);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("imcomplete-list").appendChild(li);
};

const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
