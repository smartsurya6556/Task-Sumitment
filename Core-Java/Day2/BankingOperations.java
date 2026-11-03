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
}
