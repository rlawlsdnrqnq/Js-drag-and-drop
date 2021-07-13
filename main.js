const picture = document.querySelector(".picture");
const emptys = document.querySelectorAll(".empty");

picture.addEventListener("dragstart", dragStart);
emptys.forEach((empty) => {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", drop);
});
//drag cursor

//drag function

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("invisible");
  }, 0);
}
function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}
function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}
function dragLeave(e) {
  e.target.classList.remove("drag-over");
}
function drop(e) {
  e.target.classList.remove("drag-over");
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  e.target.append(draggable);
  draggable.classList.remove("invisible");
}
