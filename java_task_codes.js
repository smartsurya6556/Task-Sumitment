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
}`
};
