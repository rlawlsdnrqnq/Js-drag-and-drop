const picture = document.querySelector(".picture");
const empties = document.querySelectorAll(".empty");

picture.addEventListener("dragstart", dragStart);
picture.addEventListener("dragend", dragEnd);

empties.forEac((empty) => {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", drop);
});

//drag function
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
  picture.classList.add("hold");
}
function dragEnd(e) {
  picture.classList.remove("hold");
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
  draggable.classList.remove("hide");
}
