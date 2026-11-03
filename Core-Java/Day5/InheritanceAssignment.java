// Day 5 - Inheritance Types & super() Constructor Execution
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;

// ============================================================================
// SCENARIO 1: Basic Inheritance (Employee -> Developer, Tester)
// [IMPORTANT: INHERITANCE TYPE: SINGLE / BASIC INHERITANCE]
// ============================================================================
class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    void displayEmployee() {
        System.out.println("  Name: " + name + " | Salary: ₹" + salary);
    }
}

class Developer extends Employee {
    String programmingLanguage;

    Developer(String name, double salary, String programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }

    void displayDeveloper() {
        displayEmployee();
        System.out.println("  Role: Developer | Language: " + programmingLanguage);
    }
}

class Tester extends Employee {
    String testingTool;

    Tester(String name, double salary, String testingTool) {
        super(name, salary);
        this.testingTool = testingTool;
    }

    void displayTester() {
        displayEmployee();
        System.out.println("  Role: QA Tester | Testing Tool: " + testingTool);
    }
}

// ============================================================================
// SCENARIO 2: Method Reusability in Inheritance (Vehicle -> Car, Bike)
// [IMPORTANT: INHERITANCE TYPE: METHOD REUSABILITY IN INHERITANCE]
// ============================================================================
class Vehicle {
    String brand;

    Vehicle(String brand) {
        this.brand = brand;
    }

    void start() {
        System.out.println("  [" + brand + "] Ignition ON: Engine started successfully.");
    }

    void stop() {
        System.out.println("  [" + brand + "] Brakes engaged: Vehicle stopped safely.");
    }
}

class Car extends Vehicle {
    int numberOfDoors;

    Car(String brand, int numberOfDoors) {
        super(brand);
        this.numberOfDoors = numberOfDoors;
    }

    void displayType() {
        System.out.println("  Vehicle Type: Four-Wheeler Passenger Car (" + numberOfDoors + " Doors)");
    }
}

class Bike extends Vehicle {
    boolean hasGear;

    Bike(String brand, boolean hasGear) {
        super(brand);
        this.hasGear = hasGear;
    }

    void displayType() {
        System.out.println("  Vehicle Type: Two-Wheeler Motorcycle (" + (hasGear ? "Geared" : "Automatic") + ")");
    }
}

// ============================================================================
// SCENARIO 3: Multilevel Inheritance (BankAccount -> Savings -> PremiumSavings)
// [IMPORTANT: INHERITANCE TYPE: MULTILEVEL INHERITANCE]
// ============================================================================
class BankAccount {
    String accountNumber;
    double balance;

    BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    void displayBaseAccount() {
        System.out.println("  Level 1 (BankAccount) -> Account No: " + accountNumber + " | Balance: ₹" + balance);
    }
}

class SavingsAccount extends BankAccount {
    double interestRate;

    SavingsAccount(String accountNumber, double balance, double interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    void displaySavingsAccount() {
        displayBaseAccount();
        System.out.println("  Level 2 (SavingsAccount) -> Annual Interest Rate: " + interestRate + "%");
    }
}

class PremiumSavingsAccount extends SavingsAccount {
    double cashBackReward;

    PremiumSavingsAccount(String accountNumber, double balance, double interestRate, double cashBackReward) {
        super(accountNumber, balance, interestRate);
        this.cashBackReward = cashBackReward;
    }

    void displayPremiumAccount() {
        displaySavingsAccount();
        System.out.println("  Level 3 (PremiumSavingsAccount) -> CashBack Tier: " + cashBackReward + "% with Personal Concierge");
    }
}

// ============================================================================
// SCENARIO 4: Hierarchical Inheritance (Product -> Electronics, Clothing, Books)
// [IMPORTANT: INHERITANCE TYPE: HIERARCHICAL INHERITANCE]
// ============================================================================
class Product {
    int productId;
    double price;

    Product(int productId, double price) {
        this.productId = productId;
        this.price = price;
    }

    void displayProductBase() {
        System.out.print("  Product ID: #" + productId + " | Price: ₹" + price);
    }
}

class Electronics extends Product {
    int warrantyMonths;

    Electronics(int productId, double price, int warrantyMonths) {
        super(productId, price);
        this.warrantyMonths = warrantyMonths;
    }

    void displayDetails() {
        displayProductBase();
        System.out.println(" | Category: Electronics | Warranty: " + warrantyMonths + " Months");
    }
}

class Clothing extends Product {
    String size;

    Clothing(int productId, double price, String size) {
        super(productId, price);
        this.size = size;
    }

    void displayDetails() {
        displayProductBase();
        System.out.println(" | Category: Clothing Apparels | Size: " + size);
    }
}

class Books extends Product {
    String author;

    Books(int productId, double price, String author) {
        super(productId, price);
        this.author = author;
    }

    void displayDetails() {
        displayProductBase();
        System.out.println(" | Category: Educational Books | Author: " + author);
    }
}

// ============================================================================
// SCENARIO 5: Constructor Execution with super() (Person -> Student)
// [IMPORTANT: INHERITANCE TYPE: CONSTRUCTOR CHAINING VIA SUPER()]
// ============================================================================
class Person {
    String name;
    int age;

    // Parameterized constructor in Parent class
    Person(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("  [Parent Constructor] Person initialized: Name=" + name + ", Age=" + age);
    }
}

class UniversityStudent extends Person {
    int rollNumber;

    // Subclass constructor invoking parent constructor using super()
    UniversityStudent(String name, int age, int rollNumber) {
        super(name, age); // Must be the very first statement
        this.rollNumber = rollNumber;
        System.out.println("  [Subclass Constructor] UniversityStudent initialized: RollNo=" + rollNumber);
    }

    void displayStudentDetails() {
        System.out.println("  --- Complete Student Profile ---");
        System.out.println("  Roll Number : " + rollNumber);
        System.out.println("  Student Name: " + name);
        System.out.println("  Age         : " + age + " years old");
    }
}

// ============================================================================
// MAIN DRIVER: Interactive while(true) loop with Scanner
// ============================================================================
public class InheritanceAssignment {

    static void runScenario1() {
        System.out.println("\n------------------------------------------------------------");
        System.out.println(">>> SCENARIO 1: EMPLOYEE SPECIALIZATION");
        System.out.println("[IMPORTANT: INHERITANCE TYPE: SINGLE / BASIC INHERITANCE]");
        System.out.println("------------------------------------------------------------");
        Developer dev = new Developer("Surya", 75000, "Java & Spring Boot");
        Tester tester = new Tester("Praveen", 55000, "Selenium & JUnit");

        System.out.println("Developer Details:");
        dev.displayDeveloper();

        System.out.println("\nTester Details:");
        tester.displayTester();
    }

    static void runScenario2() {
        System.out.println("\n------------------------------------------------------------");
        System.out.println(">>> SCENARIO 2: VEHICLE RENTAL FLEET");
        System.out.println("[IMPORTANT: INHERITANCE TYPE: METHOD REUSABILITY IN INHERITANCE]");
        System.out.println("------------------------------------------------------------");
        Car car = new Car("Hyundai Verna", 4);
        Bike bike = new Bike("Yamaha R15", true);

        System.out.println("Car Execution (Reusing Vehicle methods):");
        car.displayType();
        car.start();
        car.stop();

        System.out.println("\nBike Execution (Reusing Vehicle methods):");
        bike.displayType();
        bike.start();
        bike.stop();
    }

    static void runScenario3() {
        System.out.println("\n------------------------------------------------------------");
        System.out.println(">>> SCENARIO 3: MULTILEVEL BANK ACCOUNT HIERARCHY");
        System.out.println("[IMPORTANT: INHERITANCE TYPE: MULTILEVEL INHERITANCE]");
        System.out.println("------------------------------------------------------------");
        PremiumSavingsAccount account = new PremiumSavingsAccount("SB-IND-99482", 125000.0, 6.5, 2.0);
        account.displayPremiumAccount();
    }

    static void runScenario4() {
        System.out.println("\n------------------------------------------------------------");
        System.out.println(">>> SCENARIO 4: E-COMMERCE PRODUCT CATALOG");
        System.out.println("[IMPORTANT: INHERITANCE TYPE: HIERARCHICAL INHERITANCE]");
        System.out.println("------------------------------------------------------------");
        Electronics laptop = new Electronics(101, 65000.0, 24);
        Clothing shirt = new Clothing(202, 1499.0, "L");
        Books javaBook = new Books(303, 799.0, "James Gosling");

        laptop.displayDetails();
        shirt.displayDetails();
        javaBook.displayDetails();
    }

    static void runScenario5(Scanner sc) {
        System.out.println("\n------------------------------------------------------------");
        System.out.println(">>> SCENARIO 5: CONSTRUCTOR EXECUTION VIA SUPER()");
        System.out.println("[IMPORTANT: INHERITANCE TYPE: CONSTRUCTOR CHAINING VIA SUPER()]");
        System.out.println("------------------------------------------------------------");
        System.out.print("Enter Student Name: ");
        String name = sc.nextLine();
        System.out.print("Enter Student Age: ");
        int age = sc.nextInt();
        System.out.print("Enter Roll Number: ");
        int roll = sc.nextInt();
        sc.nextLine(); // consume newline

        System.out.println("\nInstantiating UniversityStudent (Watching super() execution):");
        UniversityStudent student = new UniversityStudent(name, age, roll);
        System.out.println();
        student.displayStudentDetails();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("============================================================");
        System.out.println("     Day 5: 5 Inheritance Types & super() Execution");
        System.out.println("============================================================");

        boolean running = true;
        while (running) {
            System.out.println("\nSelect an Inheritance Scenario to Run:");
            System.out.println("  1. Basic Inheritance (Employee -> Developer, Tester)");
            System.out.println("  2. Method Reusability (Vehicle -> Car, Bike)");
            System.out.println("  3. Multilevel Inheritance (BankAccount -> Savings -> Premium)");
            System.out.println("  4. Hierarchical Inheritance (Product -> Electronics, Clothing, Books)");
            System.out.println("  5. Constructor Chaining with super() (Person -> Student)");
            System.out.println("  6. Run All 5 Inheritance Scenarios");
            System.out.println("  7. Exit Program");
            System.out.print("Enter choice (1-7): ");

            if (!sc.hasNextInt()) {
                System.out.println("Invalid input! Exiting loop.");
                break;
            }

            int choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    runScenario1();
                    break;
                case 2:
                    runScenario2();
                    break;
                case 3:
                    runScenario3();
                    break;
                case 4:
                    runScenario4();
                    break;
                case 5:
                    runScenario5(sc);
                    break;
                case 6:
                    runScenario1();
                    runScenario2();
                    runScenario3();
                    runScenario4();
                    System.out.println("\n------------------------------------------------------------");
                    System.out.println(">>> SCENARIO 5: CONSTRUCTOR EXECUTION VIA SUPER()");
                    System.out.println("[IMPORTANT: INHERITANCE TYPE: CONSTRUCTOR CHAINING VIA SUPER()]");
                    System.out.println("------------------------------------------------------------");
                    UniversityStudent demoStudent = new UniversityStudent("Surya Kumar", 21, 505);
                    System.out.println();
                    demoStudent.displayStudentDetails();
                    break;
                case 7:
                    System.out.println("Exiting loop. Day 5 Inheritance program terminated.");
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice. Please choose 1 to 7.");
            }
            System.out.println("\n============================================================");
        }

        sc.close();
    }
}
