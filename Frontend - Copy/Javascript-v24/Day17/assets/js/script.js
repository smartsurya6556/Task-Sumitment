

let students = [];
let employees = [];
let products = [];


function addStudent() {

    let name = document.getElementById("studentName").value;
    let age = document.getElementById("studentAge").value;
    let city = document.getElementById("studentCity").value;

    let student = {
        name: name,
        age: age,
        city: city
    };

    students.push(student);

    showStudents();

    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentCity").value = "";
}


function showStudents() {

    let studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach(function(student) {

        studentList.innerHTML += `
            <div class="student">
                <p>Name: ${student.name}</p>
                <p>Age: ${student.age}</p>
                <p>City: ${student.city}</p>
            </div>
        `;
    });
}


function addEmployee() {

    let name = document.getElementById("employeeName").value;
    let department = document.getElementById("department").value;
    let salary = document.getElementById("salary").value;

    let employee = {
        name: name,
        department: department,
        salary: salary
    };

    employees.push(employee);

    showEmployees();

    document.getElementById("employeeName").value = "";
    document.getElementById("department").value = "";
    document.getElementById("salary").value = "";
}


function showEmployees() {

    let employeeList = document.getElementById("employeeList");

    employeeList.innerHTML = "";

    employees.forEach(function(employee) {

        employeeList.innerHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
            </tr>
        `;
    });
}


function addProduct() {

    let name = document.getElementById("productName").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;

    let product = {
        name: name,
        price: price,
        category: category
    };

    products.push(product);

    showProducts();

    document.getElementById("productName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("category").value = "";
}


function showProducts() {

    let productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(function(product) {

        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Category: ${product.category}</p>
            </div>
        `;
    });
}