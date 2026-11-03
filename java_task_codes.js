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
}`
};
