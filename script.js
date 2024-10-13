// Get a reference to the #add-employees-btn element
//~Added in get element by id and referenced the button id in the HTML~

const addEmployeesBtn = document.querySelector('#add-employees-btn');



const handleEmployeeData = function() {//renamed the function from trackEmployeeData to handleEmployeeData
    const employees = collectEmployees();
  //Check to see if at least one employee was added before returning the array
  if (employeesArray.length === 0) {
    console.log("No employees were added.");
    return;  //Exit if no  employees were added
} 

  
  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

displayEmployees(employees);

};

// Collect employee data- Need an array for first name, last name, and salary!

const collectEmployees = function () {
  let addingEmployees = true; //control variable for the loop
  let employeesArray =[];//Moved inside the function to reset the array on each call
  // TODO: Get user input to create and return an array of employee objects- first name, last name, and salary
  while (addingEmployees) {
    //Collect employee details using prompt
    let firstName = prompt("Enter the employee's first name:");
    let lastName = prompt("Enter the employee's last name:");
    let salary = prompt("Enter the employee's salary:");
   
    //Convert salary to a number
    salary = isNaN(Number(salary)) ? 0 : Number(salary);
    
    //Create an object for the employee
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    
    //Add the employee object to the array generated above
    employeesArray.push(employee);

    //Ask the user if they want to add another employee
    addingEmployees = confirm("Add another employee? (OK for yes or Cancel for no)");
  } 
  
  return employeesArray; //Return the array of employee objects
  
};


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary//IS THIS CORRECT?!
  const AverageSalary = getAverageSalary(employeesArray);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${AverageSalary.toFixed(2)}`);
  
};
  
const getAverageSalary = function (employeesArray) {
  let total = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary;
  }
  return total / employeesArray.length;
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
  };

  
 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
  ====================
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {   //Accept employeesArray as a parameter
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () { //Where is the employee data?
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);//Display average salarey

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);