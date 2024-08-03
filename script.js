let employeelist = []
let employeeId = 1


let nm = document.getElementById('name')
let prof = document.getElementById('profession')
let ag = document.getElementById('age')
let message = document.getElementById('message')
let employee = document.getElementById('ans')
employee.innerHTML = `You have 0 Employess.`



function adduser(){

    if( !nm.value || !prof.value || !ag.value){
        message.className = 'error'
        message.innerHTML = `Error : Please Make sure All the fields are filled before adding in an employee !`
        return;
    }

    const newEmployee = {
        id : employeeId++,
        name : nm.value.trim(),
        profession : prof.value.trim(),
        age : ag.value.trim()
    }

    employeelist.push(newEmployee);
    displayform();


    message.className = 'success'
    message.innerHTML = `Success : Employee Added!`
}

function deleteEmployee(id){
    employeelist=employeelist.filter(emp => emp.id !== id);
    displayform();
}

function displayform(){
    employee.innerHTML = '';

    employeelist.forEach(emp =>{
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `<span>${emp.id}. &nbsp &nbsp Name: ${emp.name} &nbsp &nbsp Profession: ${emp.profession} &nbsp &nbsp Age: ${emp.age}</span> &nbsp &nbsp
        <button class="delete-button" onclick="deleteEmployee(${emp.id})">Delete User</button>`;
    employee.appendChild(employeeDiv);
    });
}