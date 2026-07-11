const form = document.getElementById("serviceForm");
const table = document.getElementById("historyTable");

form.addEventListener("submit", function(e){

e.preventDefault();

const owner=document.getElementById("owner").value;
const car=document.getElementById("car").value;
const plate=document.getElementById("plate").value;
const date=document.getElementById("date").value;
const service=document.getElementById("service").value;

const row=document.createElement("tr");

row.innerHTML=`
<td>${owner}</td>
<td>${car}</td>
<td>${plate}</td>
<td>${date}</td>
<td>${service}</td>
`;

table.appendChild(row);

form.reset();

alert("Service booked successfully!");

});