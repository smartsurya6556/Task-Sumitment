// Day 3 - Default Constructor & Student Registration
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
        System.out.println("=================================================\n");

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

        System.out.println("\n-------------------------------------------------");
        System.out.println("--- Registered Student Details ---");
        System.out.println("-------------------------------------------------");
        registeredStudent.displayDetails();
        System.out.println("=================================================");

        sc.close();
    }
}
