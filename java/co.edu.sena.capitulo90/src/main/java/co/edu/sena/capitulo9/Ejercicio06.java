package co.edu.sena.capitulo9;

import java.util.Scanner;

public class Ejercicio06 {

	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		double base = 0;
		double altura = 0;
		System.out.print("Base: ");
		base = teclado.nextFloat();
		System.out.print("Altura: ");
		altura = teclado.nextFloat();
		double area = base * altura;
		System.out.println("el area es:" + area);
		rectangulo(base, altura);
	}

	public static double rectangulo(double base, double altura) {
		return base * altura;
	}
}