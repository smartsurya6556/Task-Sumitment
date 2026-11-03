// Day 6 - Array Operations (Largest, Smallest, Even/Odd, Sign Counts & Average)
// package Tasks; // Uncomment if running inside IDE package 'Tasks'
import java.util.Scanner;
import java.util.Arrays;

public class ArrayOperations {

    // 1. Find the largest number in an array
    public static int findLargest(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    // 2. Find the smallest number in an array
    public static int findSmallest(int[] arr) {
        int min = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    // 3. Count how many even and odd numbers are present
    public static void countEvenOdd(int[] arr) {
        int evenCount = 0;
        int oddCount = 0;
        for (int num : arr) {
            if (num % 2 == 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
        System.out.println("  • Even Numbers Count : " + evenCount);
        System.out.println("  • Odd Numbers Count  : " + oddCount);
    }

    // 4. Count positive numbers, negative numbers and zeros
    public static void countPosNegZero(int[] arr) {
        int positiveCount = 0;
        int negativeCount = 0;
        int zeroCount = 0;

        for (int num : arr) {
            if (num > 0) {
                positiveCount++;
            } else if (num < 0) {
                negativeCount++;
            } else {
                zeroCount++;
            }
        }
        System.out.println("  • Positive Numbers Count : " + positiveCount);
        System.out.println("  • Negative Numbers Count : " + negativeCount);
        System.out.println("  • Zeroes Count           : " + zeroCount);
    }

    // 5. Calculate the average of all elements in an array
    public static double calculateAverage(int[] arr) {
        long sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return (double) sum / arr.length;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("============================================================");
        System.out.println("        Day 6: 5 Core Array Operations in Java");
        System.out.println("============================================================");

        // Default demo array
        int[] arr = { 25, -12, 0, 48, 7, -3, 90, 14, 0, -8 };

        boolean running = true;
        while (running) {
            System.out.println("\nCurrent Array: " + Arrays.toString(arr));
            System.out.println("\nSelect an Array Operation:");
            System.out.println("  1. Find Largest Number in Array");
            System.out.println("  2. Find Smallest Number in Array");
            System.out.println("  3. Count Even and Odd Numbers");
            System.out.println("  4. Count Positive, Negative & Zeros");
            System.out.println("  5. Calculate Average of Elements");
            System.out.println("  6. Run All 5 Operations on Array");
            System.out.println("  7. Enter New Custom Array Elements");
            System.out.println("  8. Exit Program");
            System.out.print("Enter choice (1-8): ");

            if (!sc.hasNextInt()) {
                System.out.println("Invalid input! Exiting.");
                break;
            }

            int choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.println("\n[Result] Largest Number in Array: " + findLargest(arr));
                    break;
                case 2:
                    System.out.println("\n[Result] Smallest Number in Array: " + findSmallest(arr));
                    break;
                case 3:
                    System.out.println("\n[Result] Even and Odd Analysis:");
                    countEvenOdd(arr);
                    break;
                case 4:
                    System.out.println("\n[Result] Positive, Negative & Zero Counts:");
                    countPosNegZero(arr);
                    break;
                case 5:
                    System.out.printf("\n[Result] Average of All Elements: %.2f\n", calculateAverage(arr));
                    break;
                case 6:
                    System.out.println("\n============================================================");
                    System.out.println(">>> COMPLETE ARRAY OPERATIONS REPORT <<<");
                    System.out.println("Array: " + Arrays.toString(arr));
                    System.out.println("------------------------------------------------------------");
                    System.out.println("1. Largest Number  : " + findLargest(arr));
                    System.out.println("2. Smallest Number : " + findSmallest(arr));
                    System.out.println("\n3. Even & Odd Distribution:");
                    countEvenOdd(arr);
                    System.out.println("\n4. Sign Distribution:");
                    countPosNegZero(arr);
                    System.out.printf("\n5. Array Average   : %.2f\n", calculateAverage(arr));
                    System.out.println("============================================================");
                    break;
                case 7:
                    System.out.print("\nEnter array size: ");
                    int size = sc.nextInt();
                    if (size <= 0) {
                        System.out.println("Invalid size! Size must be positive.");
                        break;
                    }
                    arr = new int[size];
                    System.out.println("Enter " + size + " integer elements:");
                    for (int i = 0; i < size; i++) {
                        System.out.print("  Element [" + i + "]: ");
                        arr[i] = sc.nextInt();
                    }
                    System.out.println("Custom array saved successfully: " + Arrays.toString(arr));
                    break;
                case 8:
                    System.out.println("Exiting loop. Day 6 Array Operations terminated.");
                    running = false;
                    break;
                default:
                    System.out.println("Invalid choice. Please choose 1 to 8.");
            }
            System.out.println("\n------------------------------------------------------------");
        }

        sc.close();
    }
}
