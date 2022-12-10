var container = document.getElementById("array");
function generatearray() {
  for (var i = 0; i < 50; i++) {
    var value = Math.ceil(Math.random() * 150);

    var array_ele = document.createElement("div");

    array_ele.classList.add("block");

    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

var count_container = document.getElementById("count");
function generate_idx() {
  for (var i = 0; i < 50; i++) {
    var array_ele2 = document.createElement("div");

    array_ele2.classList.add("block2");

    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 30}px)`;

    var array_ele_label2 = document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = i;

    array_ele2.appendChild(array_ele_label2);
    count_container.appendChild(array_ele2);
  }
}

async function lometo_partition(l, r, delay = 300) {
  var blocks = document.querySelectorAll(".block");

  var pivot = Number(blocks[r].childNodes[0].innerHTML);
  var i = l - 1;
  blocks[r].style.backgroundColor = "red";
  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;

  for (var j = l; j <= r - 1; j++) {
    blocks[j].style.backgroundColor = "yellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var value = Number(blocks[j].childNodes[0].innerHTML);

    if (value < pivot) {
      i++;
      var temp1 = blocks[i].style.height;
      var temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[j].style.height;
      blocks[j].style.height = temp1;
      blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
      blocks[j].childNodes[0].innerText = temp2;
      blocks[i].style.backgroundColor = "orange";
      if (i != j) blocks[j].style.backgroundColor = "pink";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    } else blocks[j].style.backgroundColor = "pink";
  }
  i++;
  var temp1 = blocks[i].style.height;
  var temp2 = blocks[i].childNodes[0].innerText;
  blocks[i].style.height = blocks[r].style.height;
  blocks[r].style.height = temp1;
  blocks[i].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
  blocks[r].childNodes[0].innerText = temp2;
  blocks[r].style.backgroundColor = "pink";
  blocks[i].style.backgroundColor = "green";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 4)
  );
  document.getElementsByClassName("range")[0].innerText = "";
  for (var k = 0; k < 50; k++) blocks[k].style.backgroundColor = "#6b5b95";
  return i;
}

async function QuickSort(l, r, delay = 100) {
  var start = window.performance.now();
  if (l < r) {
    var pivot_idx = await lometo_partition(l, r);
    await QuickSort(l, pivot_idx - 1);
    await QuickSort(pivot_idx + 1, r);
  }
  var end = window.performance.now();
  var time = end - start;
  window.prompt("Time complexity of this algorithm is " + " " + time + "ms");
}
generatearray();
generate_idx();

QuickSort(0, 49);
