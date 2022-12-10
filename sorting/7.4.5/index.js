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
  if (l < r) {
    var pivot_idx = await lometo_partition(l, r);
    await QuickSort(l, pivot_idx - 1);
    await QuickSort(pivot_idx + 1, r);
  }
}
generatearray();
generate_idx();
QuickSort(0, 49);

const container = document.querySelector(".data-container");

function generatebars(num = 100) {
  for (let i = 0; i < num; i += 1) {
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis
    bar.style.transform = `translateX(${i * 30}px)`;

    // To create element "label"
    const barLabel = document.createElement("label");

    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id");

    // Assign value to "label"
    barLabel.innerHTML = value;

    // Append "Label" to "div"
    bar.appendChild(barLabel);

    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

// Asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");

  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key
    var key = parseInt(bars[i].childNodes[0].innerHTML);

    // To store the ith bar height to height
    var height = bars[i].style.height;

    // For selecting section having id "ele"
    var barval = document.getElementById("ele");

    // For dynamically Updating the selected element
    barval.innerHTML = `<h3>Element Selected is :${key}</h3>`;

    //Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // For placing selected element at its correct position
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";

      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      // Assign j-1 to j
      j = j - 1;

      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      // Provide lightgreen color to the sorted part
      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  barval.innerHTML = "<h3>Sorted!!!</h3>";

  // To enable the button
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  // To enable the button
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
}

generatebars();

function generate() {
  window.location.reload();
}

// Function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  // To disable the button "Insertion Sort"
  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
