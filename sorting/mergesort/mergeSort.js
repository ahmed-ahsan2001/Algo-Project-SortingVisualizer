const list = [],
  visited = [],
  tempArr = [];
for (let i = 0; i < 50; i++) {
  tempArr.push(0);
  visited.push(0);
}
function arrayDisplay() {
  var ItemBox = document.getElementById("listItem");
  for (var i = 0; i < 50; i++) {
    list.push(Number(Math.ceil(Math.random() * 150)));
  }
  for (var i = 0; i < 50; i++) {
    var currItem = list[i],
      element = document.createElement("div");
    element.classList.add("box");
    element.style.height = `${currItem * 2}px`;
    element.style.transform = `translate(${i * 30}px)`;
    var eleUsingLabel = document.createElement("label");
    eleUsingLabel.classList.add("box_nm");
    eleUsingLabel.textContent = currItem;
    eleUsingLabel.setAttribute("style", "font-weight: bold;");
    element.appendChild(eleUsingLabel);
    ItemBox.appendChild(element);
  }
}
const MakeBox = async (left, right) => {
  var box = document.querySelectorAll(".box");
  var DisplayResult = document.getElementById("writeHere");
  DisplayResult.textContent = "";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 300)
  );
  document.getElementById("listItem").innerHTML = "";
  var ItemBox = document.getElementById("listItem");
  for (var i = 0; i < 50; i++) {
    var currItem = list[i],
      element = document.createElement("div");
    element.classList.add("box");
    element.style.height = `${currItem * 2}px`;
    element.style.transform = `translate(${i * 30}px)`;
    var eleUsingLabel = document.createElement("label");
    eleUsingLabel.classList.add("box_nm");
    eleUsingLabel.textContent = currItem;
    eleUsingLabel.setAttribute("style", "font-weight: bold;");
    element.appendChild(eleUsingLabel);
    ItemBox.appendChild(element);
  }
  let bars = document.querySelectorAll(".box");
  for (let i = left; i <= right; i++) {
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
};
function Merge(left, right) {
  var start = window.performance.now();
  let mid = parseInt((left + right) / 2);
  let left1 = left,
    left2 = mid + 1;
  let right1 = mid,
    right2 = right;
  let i = left;
  while (left1 <= right1 && left2 <= right2) {
    if (list[left1] <= list[left2]) {
      tempArr[i] = list[left1];
      i = i + 1;
      left1 = left1 + 1;
    } else if (list[left1] > list[left2]) {
      tempArr[i] = list[left2];
      i = i + 1;
      left2 = left2 + 1;
    }
  }
  while (left1 <= right1) {
    tempArr[i] = list[left1];
    i = i + 1;
    left1 = left1 + 1;
  }
  while (left2 <= right2) {
    tempArr[i] = list[left2];
    i = i + 1;
    left2 = left2 + 1;
  }
  i = left;
  while (i <= right) {
    list[i] = tempArr[i];
    i++;
  }
  var end = window.performance.now();
  var time = end - start;
  document.write("Time complexity of this algorithm is " + " " + time + "ms");
}
function Createtimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const Msort = async (left, right) => {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    await Msort(left, mid);
    await Msort(mid + 1, right);
    await Merge(left, right);
    await MakeBox(left, right);
    await Createtimeout(200);
  }
};
const MergeSort = async () => {
  await Msort(0, 49);
  document.getElementById("writeHere").innerHTML =
    "MergeSort applied Successfully.";
};
