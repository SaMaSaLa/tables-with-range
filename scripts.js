const inputVal = document.getElementById("ipt-by");
const inputVal2 = document.getElementById("ipt-to");
const inputVal3 = document.getElementById("ipt-frm");

const generate = document.getElementById("generate");
const tableDiv = document.getElementById("table");

generate.addEventListener("click", function () {
  const input = parseInt(inputVal.value, 10);
  const input3 = parseInt(inputVal2.value, 10);
  let input2 = parseInt(inputVal3.value, 10);

  tableDiv.innerHTML = "";

  /*
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>101</td>
        </tr>
        ...
      </tbody>
    </table>  

*/

  const table = document.createElement("table");

  table.classList.add("table");

  tableDiv.appendChild(table);

  const thead = document.createElement("thead");

  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  table.appendChild(tbody);

  for (let i = input2; i <= input3; i++) {
    let trt = document.createElement("tr");
    tbody.appendChild(trt);

    let tdo = document.createElement("td");
    tdo.textContent = input;
    trt.appendChild(tdo);

    let tdtw = document.createElement("td");
    tdtw.textContent = "x";
    trt.appendChild(tdtw);

    let tdth = document.createElement("td");
    tdth.textContent = input2;
    trt.appendChild(tdth);

    let tdfo = document.createElement("td");
    tdfo.textContent = "=";
    trt.appendChild(tdfo);

    let tdfi = document.createElement("td");
    tdfi.textContent = input * input2;
    trt.appendChild(tdfi);

    input2++;
  }
});
