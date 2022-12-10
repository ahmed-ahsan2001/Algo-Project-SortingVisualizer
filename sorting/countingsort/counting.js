var container = document.getElementById("array");
function generatearray() {
  for (var i = 0; i < 50; i++) {
    var value = Math.ceil(Math.random() * 40);
    var array_ele = document.createElement("div");
    array_ele.classList.add("block");
    array_ele.style.height = `${value * 13}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}
var count_container = document.getElementById("count");
function generate_freq() {
  for (var i = 0; i < 50; i++) {
    var array_ele2 = document.createElement("div");
    array_ele2.classList.add("block2");
    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 30}px)`;
    var array_ele_idx = document.createElement("label");
    array_ele_idx.classList.add("block_id2");
    array_ele_idx.innerText = i + 1;
    var array_ele_label2 = document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = 0;
    array_ele2.appendChild(array_ele_label2);
    array_ele2.appendChild(array_ele_idx);
    count_container.appendChild(array_ele2);
  }
}
async function CountingSort(delay = 150) {
  var start = window.performance.now();
  var blocks = document.querySelectorAll(".block");
  for (var i = 0; i < blocks.length; i += 1) {
    blocks[i].style.backgroundColor = "#FF4949";
    var value = Number(blocks[i].childNodes[0].innerHTML);
    var freq_array = document.getElementsByClassName("block_id3");
    freq_array[value - 1].innerText++;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[i].style.backgroundColor = "#6b5b95";
  }
  var idx = 0;
  for (var i = 0; i < blocks.length; i += 1) {
    var freq = document.getElementsByClassName("block_id3");
    var temp = Number(freq[i].innerText);
    var freq_block = document.getElementsByClassName("block2");
    freq_block[i].style.backgroundColor = "#FF4949";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2 * delay)
    );
    if (temp == 0) {
      freq_block[i].style.backgroundColor = "darkgray";
      continue;
    }
    var block_label = document.getElementsByClassName("block_id");
    for (var j = 0; j < temp; j++) {
      blocks[idx].style.height = `${(i + 1) * 13}px`;
      block_label[idx].innerText = i + 1;
      idx++;
    }
    freq_block[i].style.backgroundColor = "darkgray";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 2 * delay)
    );
  }
  var end = window.performance.now();
  var time = end - start;
  window.prompt("Time complexity of this algorithm is " + " " + time + "ms");
}
generatearray();
generate_freq();
CountingSort();
