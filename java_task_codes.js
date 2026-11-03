// DevTask HUB — Core Java Task Code Repository
// Embedded dataset for 100% offline & local file:/// compatibility

window.JAVA_TASK_CODES = {
  1: `// Day 1 - Variable Types

// 1. Student Registration (Instance Variables)
class Student {
    String name;
    int rollNo;

    void register(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    void display() {
        System.out.println("Roll No: " + rollNo + ", Name: " + name);
    }
}

// 2. Employee Counter (Static Variable)
class Employee {
    static int count = 0;
    int id;
    String name;

    void register(int id, String name) {
        this.id = id;
        this.name = name;
        count++;
    }

    void display() {
        System.out.println("ID: " + id + ", Name: " + name);
    }
}

// 3. Electricity Bill (Local Variables)
class ElectricityBill {
    void calculateBill(int units) {
        double bill;

        if (units <= 100) {
            bill = units * 2;
        } else if (units <= 200) {
            bill = (100 * 2) + ((units - 100) * 3);
        } else {
            bill = (100 * 2) + (100 * 3) + ((units - 200) * 5);
        }

        System.out.println("Units: " + units + " | Bill: Rs. " + bill);
    }
}

public class VariableTypesAssignment {
    public static void main(String[] args) {
        // Task 1: Student Registration
        System.out.println("--- Student Registration ---");
        Student s1 = new Student();
        Student s2 = new Student();
        Student s3 = new Student();

        s1.register("Surya", 101);
        s2.register("Karthik", 102);
        s3.register("Praveen", 103);

        s1.display();
        s2.display();
        s3.display();

        // Task 2: Employee Counter
        System.out.println("\\n--- Employee Counter ---");
        Employee e1 = new Employee();
        Employee e2 = new Employee();
        Employee e3 = new Employee();

        e1.register(101, "Anand");
        e2.register(102, "Divya");
        e3.register(103, "Vimal");

        e1.display();
        e2.display();
        e3.display();
        System.out.println("Total Employees Created: " + Employee.count);

        // Task 3: Electricity Bill
        System.out.println("\\n--- Electricity Bill Calculation ---");
        ElectricityBill eb = new ElectricityBill();
        eb.calculateBill(80);
        eb.calculateBill(150);
        eb.calculateBill(250);
    }
}`,
  2: `// Day 2 - Banking Operations
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.*;

public class BankingOperations {
	
	private double balance = 0;
	private String Pin = "5542";
	
	public void setBalance(double amount) {
		balance = amount;
	}

	public double deposit(double amount) {
		balance = balance + amount;
		return balance;
	}

	public void withraw(Scanner sc, double amount) {
		while (true) {
			if (amount <= balance && amount > 0) {
				balance = balance - amount;
				System.out.println("Remaining Balance :" + balance);
				break;
			} else {
				System.out.println("Insufficient Balance !");
				System.out.println("Please Enter The Sufficient Balance :");
				amount = sc.nextDouble();
			}
		}
	}

	public void checkBalance(Scanner sc, String enterpin) {
		while (true) {
			if (!enterpin.equals(Pin) || enterpin.length() != 4) {
				System.out.println("Invalid PIN ");
				System.out.println("Enter The Carect PIN");
				enterpin = sc.nextLine();
			} else {
				System.out.println("Current Balance :" + balance);
				break;
			}
		}
	}

	public void displayTransationSummary(double initialamount, double depositamount, double withrawamount) {
		System.out.println("           ----   Account TransationSummary  ----");
		System.out.println("                                                   ");
		System.out.println("     Initial Balance :" + " ₹ " + initialamount);
		System.out.println("     Deposited :" + " ₹ " + depositamount);
		System.out.println("     Withdrawn :" + " ₹ " + withrawamount);
		System.out.println("     Final Balance :" + " ₹ " + balance);
		System.out.println("                                                   ");
		System.out.println("- - - - - - - - - - - - - - - - - - - -");
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BankingOperations ac = new BankingOperations();
		
		System.out.println("Enter The initail Amount :");
		double initialamount = sc.nextDouble();
		ac.setBalance(initialamount);
		
		System.out.println("Enter The deposit Amount :");
		double depositamount = sc.nextDouble();
		ac.deposit(depositamount);
		
		System.out.println("Enter The Withraw Amount :");
		double withrawamount = sc.nextDouble();
		
		System.out.println("Enter The PIN :");
		int pin = sc.nextInt();
		String enterpin = String.valueOf(pin);
		
		ac.withraw(sc, withrawamount);
		ac.checkBalance(sc, enterpin);
		ac.displayTransationSummary(initialamount, depositamount, withrawamount);
		
		sc.close();
	}
}`,
  3: `// Day 3 - Default Constructor & Student Registration
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;

// Requirement 1 & 2: Class Student with variables and no explicitly declared constructor
class Student {
    int studentId;
    String studentName;
    String course;

    // Default Constructor is automatically provided by the Java compiler.
    // Default values assigned by JVM:
    // int -> 0
    // String (Reference types) -> null

    // Requirement 3: Method to display student information
    void displayDetails() {
        System.out.println("Student ID   : " + studentId);
        System.out.println("Student Name : " + studentName);
        System.out.println("Course       : " + course);
    }
}

public class StudentRegistration {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Requirement 4 & Task: Create an object and call displayDetails() to observe default values
        System.out.println("=================================================");
        System.out.println("1. Observing Default Values (No Explicit Constructor)");
        System.out.println("=================================================");
        Student defaultStudent = new Student();
        defaultStudent.displayDetails();
        System.out.println("-------------------------------------------------");
        System.out.println("Task Answer: Uninitialized variables default to:");
        System.out.println("  • int studentId     = 0");
        System.out.println("  • String studentName = null");
        System.out.println("  • String course     = null");
        System.out.println("=================================================\\n");

        // Advanced Feature: Taking User Input using Scanner
        System.out.println("=================================================");
        System.out.println("2. Student Registration via Scanner Input");
        System.out.println("=================================================");
        Student registeredStudent = new Student();

        System.out.print("Enter Student ID: ");
        registeredStudent.studentId = sc.nextInt();
        sc.nextLine(); // Consume newline left-over

        System.out.print("Enter Student Name: ");
        registeredStudent.studentName = sc.nextLine();

        System.out.print("Enter Course: ");
        registeredStudent.course = sc.nextLine();

        System.out.println("\\n-------------------------------------------------");
        System.out.println("--- Registered Student Details ---");
        System.out.println("-------------------------------------------------");
        registeredStudent.displayDetails();
        System.out.println("=================================================");

        sc.close();
    }
}`,
  4: `// Day 4 - OOPs Concepts & Interactive Menu Loop
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;

// TASK 1: Constructor Overloading
class StudentRecord {
    String name;
    int age;

    StudentRecord(String name) {
        this.name = name;
        this.age = 0;
    }

    StudentRecord(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("  Name: " + name + (age > 0 ? " | Age: " + age : " | Age: Not Provided"));
    }
}

// TASK 2: Method Overloading & Overriding
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

class BaseEmployee {
    String name;
    double salary;
    BaseEmployee(String name, double salary) { this.name = name; this.salary = salary; }
    double calculateBonus() { return salary * 0.05; }
}

class DeveloperEmployee extends BaseEmployee {
    DeveloperEmployee(String name, double salary) { super(name, salary); }
    @Override double calculateBonus() { return salary * 0.12; }
}

class ManagerEmployee extends BaseEmployee {
    ManagerEmployee(String name, double salary) { super(name, salary); }
    @Override double calculateBonus() { return salary * 0.20; }
}

// TASK 3: Encapsulation
class BankAccount {
    private String accountHolder;
    private double balance;

    BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        this.balance = Math.max(0, initialBalance);
    }

    public String getAccountHolder() { return accountHolder; }
    public double getBalance() { return balance; }

    public boolean withdraw(double amount) {
        if (amount <= balance && amount > 0) {
            balance -= amount;
            System.out.println("  Successfully withdrawn: ₹" + amount + " | Remaining Balance: ₹" + balance);
            return true;
        } else {
            System.out.println("  Transaction Failed: Insufficient balance!");
            return false;
        }
    }
}

// TASK 4: Inheritance & Overriding
class StaffMember {
    int id;
    String name;
    StaffMember(int id, String name) { this.id = id; this.name = name; }
    void displayResponsibilities() { System.out.println("  Role: General Staff Duties"); }
}

class SoftwareDeveloper extends StaffMember {
    SoftwareDeveloper(int id, String name) { super(id, name); }
    @Override void displayResponsibilities() {
        System.out.println("  Developer: " + name + " | Writes scalable code, reviews PRs, and fixes bugs.");
    }
}

class TeamManager extends StaffMember {
    TeamManager(int id, String name) { super(id, name); }
    @Override void displayResponsibilities() {
        System.out.println("  Manager: " + name + " | Leads sprint planning and oversees deliverables.");
    }
}

// TASK 5: Abstraction & Runtime Polymorphism
abstract class Payment {
    double amount;
    Payment(double amount) { this.amount = amount; }
    abstract void processPayment();
}

class UPIPayment extends Payment {
    String upiId;
    UPIPayment(double amount, String upiId) { super(amount); this.upiId = upiId; }
    @Override void processPayment() {
        System.out.println("  [UPI Gateway] Payment of ₹" + amount + " via " + upiId + " approved instantly.");
    }
}

class CreditCardPayment extends Payment {
    String cardNumber;
    CreditCardPayment(double amount, String cardNumber) { super(amount); this.cardNumber = cardNumber; }
    @Override void processPayment() {
        System.out.println("  [Card Gateway] Payment of ₹" + amount + " authorized via 3D Secure OTP.");
    }
}

public class OOPsAssignment {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Day 4: Core OOPs & Loop-Based Interactive Console");
        // Interactive menu loop with while(true)
        sc.close();
    }
}`,
  5: `// Day 5 - Inheritance Types & super() Constructor Execution
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;

// SCENARIO 1: Basic Inheritance (Employee -> Developer, Tester)
// [IMPORTANT: INHERITANCE TYPE: SINGLE / BASIC INHERITANCE]
class Employee {
    String name;
    double salary;
    Employee(String name, double salary) { this.name = name; this.salary = salary; }
    void displayEmployee() { System.out.println("  Name: " + name + " | Salary: ₹" + salary); }
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

// SCENARIO 2: Method Reusability in Inheritance (Vehicle -> Car, Bike)
// [IMPORTANT: INHERITANCE TYPE: METHOD REUSABILITY IN INHERITANCE]
class Vehicle {
    String brand;
    Vehicle(String brand) { this.brand = brand; }
    void start() { System.out.println("  [" + brand + "] Ignition ON: Engine started successfully."); }
    void stop() { System.out.println("  [" + brand + "] Brakes engaged: Vehicle stopped safely."); }
}

class Car extends Vehicle {
    int numberOfDoors;
    Car(String brand, int numberOfDoors) { super(brand); this.numberOfDoors = numberOfDoors; }
    void displayType() { System.out.println("  Vehicle Type: Four-Wheeler Passenger Car (" + numberOfDoors + " Doors)"); }
}

class Bike extends Vehicle {
    boolean hasGear;
    Bike(String brand, boolean hasGear) { super(brand); this.hasGear = hasGear; }
    void displayType() { System.out.println("  Vehicle Type: Two-Wheeler Motorcycle (" + (hasGear ? "Geared" : "Automatic") + ")"); }
}

// SCENARIO 3: Multilevel Inheritance (BankAccount -> Savings -> PremiumSavings)
// [IMPORTANT: INHERITANCE TYPE: MULTILEVEL INHERITANCE]
class BankAccount {
    String accountNumber;
    double balance;
    BankAccount(String accountNumber, double balance) { this.accountNumber = accountNumber; this.balance = balance; }
    void displayBaseAccount() { System.out.println("  Level 1 (BankAccount) -> Account No: " + accountNumber + " | Balance: ₹" + balance); }
}

class SavingsAccount extends BankAccount {
    double interestRate;
    SavingsAccount(String accountNumber, double balance, double interestRate) { super(accountNumber, balance); this.interestRate = interestRate; }
    void displaySavingsAccount() { displayBaseAccount(); System.out.println("  Level 2 (SavingsAccount) -> Annual Interest Rate: " + interestRate + "%"); }
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

// SCENARIO 4: Hierarchical Inheritance (Product -> Electronics, Clothing, Books)
// [IMPORTANT: INHERITANCE TYPE: HIERARCHICAL INHERITANCE]
class Product {
    int productId;
    double price;
    Product(int productId, double price) { this.productId = productId; this.price = price; }
    void displayProductBase() { System.out.print("  Product ID: #" + productId + " | Price: ₹" + price); }
}

class Electronics extends Product {
    int warrantyMonths;
    Electronics(int productId, double price, int warrantyMonths) { super(productId, price); this.warrantyMonths = warrantyMonths; }
    void displayDetails() { displayProductBase(); System.out.println(" | Category: Electronics | Warranty: " + warrantyMonths + " Months"); }
}

class Clothing extends Product {
    String size;
    Clothing(int productId, double price, String size) { super(productId, price); this.size = size; }
    void displayDetails() { displayProductBase(); System.out.println(" | Category: Clothing Apparels | Size: " + size); }
}

class Books extends Product {
    String author;
    Books(int productId, double price, String author) { super(productId, price); this.author = author; }
    void displayDetails() { displayProductBase(); System.out.println(" | Category: Educational Books | Author: " + author); }
}

// SCENARIO 5: Constructor Execution with super() (Person -> Student)
// [IMPORTANT: INHERITANCE TYPE: CONSTRUCTOR CHAINING VIA SUPER()]
class Person {
    String name;
    int age;
    Person(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("  [Parent Constructor] Person initialized: Name=" + name + ", Age=" + age);
    }
}

class UniversityStudent extends Person {
    int rollNumber;
    UniversityStudent(String name, int age, int rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
        System.out.println("  [Subclass Constructor] UniversityStudent initialized: RollNo=" + rollNumber);
    }
    void displayStudentDetails() {
        System.out.println("  Roll Number : " + rollNumber + " | Name: " + name + " | Age: " + age + " years old");
    }
}

public class InheritanceAssignment {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Day 5: 5 Inheritance Types & super() Execution");
        // Interactive menu loop with while(true)
        sc.close();
    }
}`,
  6: `// Day 6 - Array Operations (Largest, Smallest, Even/Odd, Sign Counts & Average)
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;
import java.util.Arrays;

public class ArrayOperations {

    // 1. Find the largest number in an array
    public static int findLargest(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }

    // 2. Find the smallest number in an array
    public static int findSmallest(int[] arr) {
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
        }
        return min;
    }

    // 3. Count how many even and odd numbers are present
    public static void countEvenOdd(int[] arr) {
        int evenCount = 0, oddCount = 0;
        for (int num : arr) {
            if (num % 2 == 0) evenCount++;
            else oddCount++;
        }
        System.out.println("  • Even Numbers Count : " + evenCount);
        System.out.println("  • Odd Numbers Count  : " + oddCount);
    }

    // 4. Count positive numbers, negative numbers and zeros
    public static void countPosNegZero(int[] arr) {
        int pos = 0, neg = 0, zero = 0;
        for (int num : arr) {
            if (num > 0) pos++;
            else if (num < 0) neg++;
            else zero++;
        }
        System.out.println("  • Positive Numbers Count : " + pos);
        System.out.println("  • Negative Numbers Count : " + neg);
        System.out.println("  • Zeroes Count           : " + zero);
    }

    // 5. Calculate the average of all elements in an array
    public static double calculateAverage(int[] arr) {
        long sum = 0;
        for (int num : arr) sum += num;
        return (double) sum / arr.length;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Day 6: 5 Core Array Operations in Java");
        // Interactive menu loop with while(true)
        sc.close();
    }
}`
};
