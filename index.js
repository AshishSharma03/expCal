var mainContainer = document.getElementsByClassName('MainContainer')[0]
var listItemdiv = document.getElementsByClassName('list')[0];

let income = 0;
let expense = 0;


function AddIncome(){
    // console.log("working..")
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let incbutton = document.createElement("button");
    let incomeDiv = document.createElement('div')
    incomeDiv.className = "incomeDiv";
    input1.placeholder = "Income source";
    input2.placeholder = "Amount";
    
    incomeDiv.appendChild(input1);
    incomeDiv.appendChild(input2);
    incomeDiv.appendChild(incbutton);
    mainContainer.appendChild(incomeDiv)
    incbutton.innerText= "Add";
    incbutton.style.padding = "5px";
    
    incbutton.addEventListener("click",()=>{
        inp1 = input1.value;
        inp2 = input2.value;
        income += Number(inp2);
        console.log(income)
        alert("you have added "+inp2+" for "+inp1);
    });
         
}


function AddExpense(){
    let input1 = document.createElement("input")
    let input2 = document.createElement("input")
    let Exbutton = document.createElement("button")
    let ExDiv = document.createElement("div")
    ExDiv.className = "ExpenseDiv";
    input1.placeholder = "Expense source";
    input2.placeholder = "Amount";
    Exbutton.innerText = "Add";
    Exbutton.innerText= "Add";
    Exbutton.style.padding = "5px";
    
    ExDiv.appendChild(input1);
    ExDiv.appendChild(input2);
    ExDiv.appendChild(Exbutton);
    mainContainer.appendChild(ExDiv)
    Exbutton.addEventListener("click",()=>{
        inp3 = input1.value;
        inp4 = input2.value;
        expense += Number(inp4);
        console.log(income)
        alert("you have added "+inp4 +" for "+ inp3);
    });
    

}
  
function DisplayItems(){
        
    // mainContainer.style.display =
    let displayIcome = document.createElement("div")
    displayIcome.innerHTML = 'total Income ='+ income;
    listItemdiv.appendChild(displayIcome)
    let displayExpense = document.createElement("div")
    displayExpense.innerHTML = 'total Expense ='+ expense;
    listItemdiv.appendChild(displayExpense)
    let saving = document.createElement('h3');
    saving.innerText = "Total Saving = "+(income - expense)
    listItemdiv.appendChild(saving);
    let resetDiv = document.createElement('Div');
    let resetBtn = document.createElement('button');
    resetBtn.innerText= "Reset"
    resetBtn.className ="btn";
    resetDiv.appendChild(resetBtn);
    listItemdiv.appendChild(resetDiv);
    resetBtn.addEventListener('click',function(){
        location.reload();
    })

}
