// Day 4 - OOPs Concepts & Interactive Menu Loop
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;

// ============================================================================
// TASK 1: Constructor Overloading (Student Management System)
// ============================================================================
class StudentRecord {
    String name;
    int age;

    // Constructor with name only
    StudentRecord(String name) {
        this.name = name;
        this.age = 0; // default unknown age
    }

    // Overloaded Constructor with name and age
    StudentRecord(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void display() {
        System.out.println("  Name: " + name + (age > 0 ? " | Age: " + age : " | Age: Not Provided"));
    }
}

// ============================================================================
// TASK 2: Method Overloading & Overriding (Calculator & Employee Bonus)
// ============================================================================
class Calculator {
    // Overloaded method: adds two integers
    int add(int a, int b) {
        return a + b;
    }

    // Overloaded method: adds two doubles
    double add(double a, double b) {
        return a + b;
    }
}

class BaseEmployee {
    String name;
    double salary;

    BaseEmployee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    // Base bonus method (to be overridden)
    double calculateBonus() {
        return salary * 0.05; // 5% default bonus
    }
}

class DeveloperEmployee extends BaseEmployee {
    DeveloperEmployee(String name, double salary) {
        super(name, salary);
    }

    @Override
    double calculateBonus() {
        return salary * 0.12; // 12% bonus for developers
    }
}

class ManagerEmployee extends BaseEmployee {
    ManagerEmployee(String name, double salary) {
        super(name, salary);
    }

    @Override
    double calculateBonus() {
        return salary * 0.20; // 20% bonus for managers
    }
}

// ============================================================================
// TASK 3: Encapsulation (Banking Application)
// ============================================================================
class BankAccount {
    private String accountHolder;
    private double balance;

    BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0;
        }
    }

    // Getters and Setters
    public String getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    // Deposit method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("  Successfully deposited: ₹" + amount + " | Current Balance: ₹" + balance);
        } else {
            System.out.println("  Invalid deposit amount.");
        }
    }

    // Guarded withdrawal method
    public boolean withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("  Invalid withdrawal amount.");
            return false;
        }
        if (amount <= balance) {
            balance -= amount;
            System.out.println("  Successfully withdrawn: ₹" + amount + " | Remaining Balance: ₹" + balance);
            return true;
        } else {
            System.out.println("  Transaction Failed: Insufficient balance! (Requested: ₹" + amount + ", Available: ₹" + balance + ")");
            return false;
        }
    }
}

// ============================================================================
// TASK 4: Inheritance & Responsibilities (Developer & Manager)
// ============================================================================
class StaffMember {
    int id;
    String name;

    StaffMember(int id, String name) {
        this.id = id;
        this.name = name;
    }

    void displayResponsibilities() {
        System.out.println("  ID: " + id + " | Name: " + name + " | Role: General Staff Duties");
    }
}

class SoftwareDeveloper extends StaffMember {
    SoftwareDeveloper(int id, String name) {
        super(id, name);
    }

    @Override
    void displayResponsibilities() {
        System.out.println("  ID: " + id + " | Developer: " + name);
        System.out.println("  Responsibilities: Writes scalable code, conducts unit tests, reviews PRs, and fixes bugs.");
    }
}

class TeamManager extends StaffMember {
    TeamManager(int id, String name) {
        super(id, name);
    }

    @Override
    void displayResponsibilities() {
        System.out.println("  ID: " + id + " | Manager: " + name);
        System.out.println("  Responsibilities: Leads sprint planning, coordinates client requirements, and oversees team deliverables.");
    }
}

// ============================================================================
// TASK 5: Abstraction & Runtime Polymorphism (Payment Processing)
// ============================================================================
abstract class Payment {
    double amount;

    Payment(double amount) {
        this.amount = amount;
    }

    // Abstract method to be implemented by child classes
    abstract void processPayment();
}

class UPIPayment extends Payment {
    String upiId;

    UPIPayment(double amount, String upiId) {
        super(amount);
        this.upiId = upiId;
    }

    @Override
    void processPayment() {
        System.out.println("  [UPI Gateway] Connecting to VPA: " + upiId + "...");
        System.out.println("  [SUCCESS] UPI payment of ₹" + amount + " verified and approved instantly.");
    }
}

class CreditCardPayment extends Payment {
    String cardNumber;

    CreditCardPayment(double amount, String cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    @Override
    void processPayment() {
        String maskedCard = "XXXX-XXXX-XXXX-" + (cardNumber.length() >= 4 ? cardNumber.substring(cardNumber.length() - 4) : "1234");
        System.out.println("  [Card Gateway] Authorizing card " + maskedCard + "...");
        System.out.println("  [SUCCESS] Credit card transaction of ₹" + amount + " authorized via 3D Secure OTP.");
    }
}

// ============================================================================
// MAIN DRIVER: Interactive while loop with Scanner
// ============================================================================
public class OOPsAssignment {

    static void runTask1(Scanner sc) {
        System.out.println("\n--- Task 1: Constructor Overloading ---");
        System.out.print("Enter Student 1 Name (Name Only): ");
        String name1 = sc.nextLine();
        StudentRecord s1 = new StudentRecord(name1);

        System.out.print("Enter Student 2 Name: ");
        String name2 = sc.nextLine();
        System.out.print("Enter Student 2 Age: ");
        int age2 = sc.nextInt();
        sc.nextLine(); // consume newline
        StudentRecord s2 = new StudentRecord(name2, age2);

        System.out.println("\nCreated Student Objects:");
        s1.display();
        s2.display();
    }

    static void runTask2(Scanner sc) {
        System.out.println("\n--- Task 2: Method Overloading & Overriding ---");
        Calculator calc = new Calculator();
        System.out.println("1. Method Overloading (Calculator Addition):");
        System.out.println("   calc.add(15, 25)           = " + calc.add(15, 25));
        System.out.println("   calc.add(12.75, 8.50)      = " + calc.add(12.75, 8.50));

        System.out.println("\n2. Method Overriding (Employee Bonus Calculation):");
        BaseEmployee emp = new BaseEmployee("General Staff", 40000);
        BaseEmployee dev = new DeveloperEmployee("Surya (Developer)", 70000);
        BaseEmployee mgr = new ManagerEmployee("Anand (Manager)", 95000);

        System.out.println("   " + emp.name + " Bonus (5%):  ₹" + emp.calculateBonus());
        System.out.println("   " + dev.name + " Bonus (12%): ₹" + dev.calculateBonus());
        System.out.println("   " + mgr.name + " Bonus (20%): ₹" + mgr.calculateBonus());
    }

    static void runTask3(Scanner sc) {
        System.out.println("\n--- Task 3: Encapsulation (Banking Application) ---");
        System.out.print("Enter Account Holder Name: ");
        String holder = sc.nextLine();
        System.out.print("Enter Initial Deposit: ₹");
        double initial = sc.nextDouble();
        BankAccount account = new BankAccount(holder, initial);

        System.out.print("Enter Amount to Withdraw: ₹");
        double withdrawAmt = sc.nextDouble();
        sc.nextLine(); // consume newline

        account.withdraw(withdrawAmt);
        System.out.println("  Final Verified Balance (via getter): ₹" + account.getBalance());
    }

    static void runTask4(Scanner sc) {
        System.out.println("\n--- Task 4: Inheritance & Method Overriding ---");
        SoftwareDeveloper dev = new SoftwareDeveloper(101, "Karthik");
        TeamManager mgr = new TeamManager(201, "Praveen");

        System.out.println("Developer Role:");
        dev.displayResponsibilities();
        System.out.println("\nManager Role:");
        mgr.displayResponsibilities();
    }

    static void runTask5(Scanner sc) {
        System.out.println("\n--- Task 5: Abstraction & Runtime Polymorphism ---");
        System.out.print("Enter Payment Amount: ₹");
        double amt = sc.nextDouble();
        sc.nextLine(); // consume newline

        // Runtime Polymorphism via base class reference
        Payment p1 = new UPIPayment(amt, "surya@oksbi");
        Payment p2 = new CreditCardPayment(amt, "4111222233338899");

        System.out.println("\n1. Executing UPI Payment:");
        p1.processPayment();

        System.out.println("\n2. Executing Credit Card Payment:");
        p2.processPayment();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("============================================================");
        System.out.println("     Day 4: Core OOPs & Loop-Based Interactive Console");
        System.out.println("============================================================");

        boolean running = true;
        while (running) {
            System.out.println("\nSelect an OOPs Task to Run:");
            System.out.println("  1. Constructor Overloading (Student Management)");
            System.out.println("  2. Method Overloading & Overriding (Calculator & Bonus)");
            System.out.println("  3. Encapsulation (Bank Account Withdrawal Guard)");
            System.out.println("  4. Inheritance & Responsibilities (Developer & Manager)");
            System.out.println("  5. Abstraction & Polymorphism (Payment Processing)");
            System.out.println("  6. Run All 5 Tasks Sequentially");
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
                    runTask1(sc);
                    break;
                case 2:
                    runTask2(sc);
                    break;
                case 3:
                    runTask3(sc);
                    break;
                case 4:
                    runTask4(sc);
                    break;
                case 5:
                    runTask5(sc);
                    break;
                case 6:
                    System.out.println("\n>>> RUNNING ALL 5 TASKS <<<");
                    StudentRecord s1 = new StudentRecord("Surya");
                    StudentRecord s2 = new StudentRecord("Karthik", 22);
                    System.out.println("\n[Task 1]");
                    s1.display();
                    s2.display();

                    Calculator calc = new Calculator();
                    System.out.println("\n[Task 2]");
                    System.out.println("  Overload int: " + calc.add(10, 20) + " | Overload double: " + calc.add(5.5, 4.5));
                    BaseEmployee devEmp = new DeveloperEmployee("Surya", 60000);
                    BaseEmployee mgrEmp = new ManagerEmployee("Anand", 90000);
                    System.out.println("  Override Dev Bonus: ₹" + devEmp.calculateBonus() + " | Mgr Bonus: ₹" + mgrEmp.calculateBonus());

                    System.out.println("\n[Task 3]");
                    BankAccount acc = new BankAccount("Surya", 10000);
                    acc.withdraw(3500);

                    System.out.println("\n[Task 4]");
                    StaffMember devStaff = new SoftwareDeveloper(101, "Surya");
                    devStaff.displayResponsibilities();

                    System.out.println("\n[Task 5]");
                    Payment pay = new UPIPayment(2500, "user@upi");
                    pay.processPayment();
                    break;
                case 7:
                    System.out.println("Exiting loop. Program terminated successfully.");
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice. Please choose 1 to 7.");
            }
            System.out.println("\n------------------------------------------------------------");
        }

        sc.close();
    }
}
