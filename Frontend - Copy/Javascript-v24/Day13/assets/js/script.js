

                      
                      javascript

                                
            // Task 1 - push()

            let numbers = [10, 20, 30, 40, 50];

            numbers.push(60);
            numbers.push(70);
            numbers.push(80);

            console.log(numbers);


            // Task 2 - pop()

            let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Pineapple"];

            let removedFruit1 = fruits.pop();
            let removedFruit2 = fruits.pop();

            console.log("Removed:", removedFruit1);
            console.log("Removed:", removedFruit2);

            console.log("Final Array:", fruits);


            // Task 3 - shift() and unshift()

            let cities = ["Chennai", "Mumbai", "Delhi", "Bangalore", "Hyderabad"];

            let removedCity = cities.shift();

            console.log("Removed City:", removedCity);

            cities.unshift("Coimbatore");

            console.log(cities);


            // Task 4 - forEach()

            let students = ["Arun", "Bala", "Kumar", "Surya", "Ravi"];

            students.forEach(function (student, index) {
                console.log((index + 1) + ". " + student);
            });


            // Task 5 - map()

            let numbers2 = [10, 20, 30, 40, 50];

            let doubledNumbers = numbers2.map(function (number) {
                return number * 2;
            });

            console.log(doubledNumbers);
