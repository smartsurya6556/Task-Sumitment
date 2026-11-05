// Day 7 - Control Statements (for, while, continue & break)
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;

public class ControlStatements {

    // =========================================================================
    // Q1. Skip Multiples of 3
    // Print numbers from 1 to 30, but skip all numbers divisible by 3.
    // Uses: for and continue
    // =========================================================================
    public static void skipMultiplesOfThree() {
        System.out.println("\n------------------------------------------------------------");
        System.out.println("  Task 1: Numbers 1 to 30 (Skipping Multiples of 3)");
        System.out.println("  [Control Concept: for loop + continue statement]");
        System.out.println("------------------------------------------------------------");

        System.out.print("Output: ");
        int skippedCount = 0;

        for (int i = 1; i <= 30; i++) {
            // If number is divisible by 3, skip this iteration immediately
            if (i % 3 == 0) {
                skippedCount++;
                continue; // Skips printing and jumps to next iteration (i++)
            }
            System.out.print(i + " ");
        }

        System.out.println();
        System.out.println("Total Multiples of 3 Skipped: " + skippedCount);
        System.out.println("------------------------------------------------------------");
    }

    // =========================================================================
    // Q2. Login Attempt System
    // A user has three login attempts. If password is correct, display
    // "Login Successful" and stop the loop. Otherwise, display "Invalid Password."
    // Uses: while and break
    // =========================================================================
    public static void loginAttemptSystem(Scanner sc) {
        System.out.println("\n------------------------------------------------------------");
        System.out.println("  Task 2: Login Attempt System (Max 3 Attempts)");
        System.out.println("  [Control Concept: while loop + break statement]");
        System.out.println("------------------------------------------------------------");

        final String correctPassword = "jeyam55";
        int attempts = 0;
        final int maxAttempts = 3;
        boolean isSuccess = false;

        System.out.println("Default Master Password: \"" + correctPassword + "\"");

        while (attempts < maxAttempts) {
            attempts++;
            System.out.print("\nAttempt (" + attempts + "/" + maxAttempts + ") - Enter Password: ");
            String enteredPassword = sc.nextLine().trim();

            if (enteredPassword.equals(correctPassword)) {
                System.out.println(">>> Login Successful! Loop Terminated. <<<");
                isSuccess = true;
                break; // Password matched: break out of while loop immediately
            } else {
                System.out.println("--- Invalid Password. ---");
                int remaining = maxAttempts - attempts;
                if (remaining > 0) {
                    System.out.println("Attempts remaining: " + remaining);
                }
            }
        }

        if (!isSuccess) {
            System.out.println("\n[!] Maximum 3 attempts exceeded. Account Locked for Security!");
        }
        System.out.println("------------------------------------------------------------");
    }

    // =========================================================================
    // Main Method: Interactive Console Menu
    // =========================================================================
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean running = true;

        System.out.println("============================================================");
        System.out.println("   Core Java - Day 7: Control Statements & Flow Control      ");
        System.out.println("============================================================");

        while (running) {
            System.out.println("\nSelect an operation:");
            System.out.println("  1. Run Q1: Skip Multiples of 3 (for & continue)");
            System.out.println("  2. Run Q2: Login Attempt System (while & break)");
            System.out.println("  3. Run Both Tasks Sequentially");
            System.out.println("  4. Exit Program");
            System.out.print("Enter your choice (1-4): ");

            String input = sc.nextLine().trim();

            switch (input) {
                case "1":
                    skipMultiplesOfThree();
                    break;
                case "2":
                    loginAttemptSystem(sc);
                    break;
                case "3":
                    skipMultiplesOfThree();
                    loginAttemptSystem(sc);
                    break;
                case "4":
                    System.out.println("\nThank you for practicing Core Java Day 7. Goodbye!");
                    running = false;
                    break;
                default:
                    System.out.println("Invalid selection! Please enter 1, 2, 3, or 4.");
            }
        }

        sc.close();
    }
}
