// import "./styles.css";

// get button
const buttonAdd = document.querySelector("#btnAdd");
// get input for expense amount
const input = document.querySelector("#input");
// get input descr element
const inputDesc = document.querySelector("#inpDesc");
// get the output element
const output = document.querySelector("#output");
const expenseTable = document.querySelector("#expenseTable");

//init value of expense to zero
let totalExpense = 0;

// set the output element to total expense
output.textContent = totalExpense;

// set the inputDesc to total expense
inputDesc.textContent = totalExpense;

// all expenses in one place
const allExpense = [];

// on button click add input amount to totalExpense
function addToTotalExpense() {
  // object
  const expenseItem = {};

  // read value from input amount
  const textAmount = input.value;
  const textDesc = inputDesc.value;

  // convert text to number
  const inputAmount = parseInt(textAmount, 10);

  // put all of the above in object
  expenseItem.desc = textDesc;
  expenseItem.amount = inputAmount;
  expenseItem.moment = new Date();

  // put the object into the array
  allExpense.push(expenseItem);

  // add that value to total expense
  totalExpense = inputAmount + totalExpense;

  const someText = `Total : ${totalExpense}`;
  output.textContent = someText;
  // TEMPLATING
  // table over here
  // const data1 = allExpense[0];
  // const data2 = allExpense[1];

  // const data1Text = `expense : ${data1.amount} :: description: ${data1.desc}`;
  // const data2Text = `expense:${data2.amount}:: description:${data2.desc}`;

  // const tableText = ` <div>${data1Text}</div>
  //                     <div>${data2Text}</div> `;

  // MAP
  //logic for showing the array in the form of a table
  listOfArray(allExpense);
 
}

// listen to a click event
buttonAdd.addEventListener("click", addToTotalExpense, false);

//controller function
//for Date
function getDateString(momento) {
  return momento.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
//for delete button
function removeItem(dateValue) {

  const filteredArray = [];
  for (let i = 0; i < allExpense.length; i++) {
   
 if (allExpense[i].moment.valueOf() !== dateValue) {
        filteredArray.push(allExpense[i]);
       
      }
 listOfArray(filteredArray);
  }
  
}
//view
function listOfArray(arrName){
    const allExpenseHTML = arrName.map((expenseItem) => tableListItem(expenseItem),
    );
    const joinedAllExpenseHTML = allExpenseHTML.join("");
    expenseTable.innerHTML = joinedAllExpenseHTML;
  
}
function tableListItem({ desc, amount, moment }) {
  return `<li class="list-group-item d-flex justify-content-between">
<div class="d-flex flex-column">
${desc}
  <small class="text-muted"> ${getDateString(moment)}</small>
</div>
<div>
  <span class="px-5">
  ${amount}
  </span>
  <button type="button" class="btn btn-outline-danger btn-sm" onclick='removeItem(${moment.valueOf()})'>-</button>
</div>
</li>`;
}

