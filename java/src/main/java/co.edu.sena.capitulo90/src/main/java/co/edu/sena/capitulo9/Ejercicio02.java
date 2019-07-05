package co.edu.sena.capitulo9;

import java.util.Scanner;

public class Ejercicio02 {

	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int n1;
		int n2;
		int n3;
		System.out.print("nota 1: ");
		n1 = teclado.nextInt();
		System.out.print("nota 2: ");
		n2 = teclado.nextInt();
		System.out.print("nota 3: ");
		n3 = teclado.nextInt();
		mayor(n1, n2, n3);
	}

	private static void mayor(int n1, int n2, int n3) {
		int promedio = (n1 + n2 + n3) / 2;
		System.out.println("promedio" + promedio);

	}
}
