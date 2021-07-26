const inputVal = document.getElementById("input");


const generate = document.getElementById("generate");
const tableDiv = document.getElementById("table");

generate.addEventListener("click", function () {
    const input = parseInt(inputVal.value, 10);
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


    for (let i = 1; i <= 10; i++) {
        let trt = document.createElement("tr");
        tbody.appendChild(trt);

        let tdo = document.createElement("td");
        tdo.textContent = input;
        trt.appendChild(tdo);

        let tdtw = document.createElement("td");
        tdtw.textContent = "x";
        trt.appendChild(tdtw);

        let tdth = document.createElement("td");
        tdth.textContent = i;
        trt.appendChild(tdth);

        let tdfo = document.createElement("td");
        tdfo.textContent = "=";
        trt.appendChild(tdfo);

        let tdfi = document.createElement("td");
        tdfi.textContent = input * i;
        trt.appendChild(tdfi);
    }

});