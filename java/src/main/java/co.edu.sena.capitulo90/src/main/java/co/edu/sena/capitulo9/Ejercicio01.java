package co.edu.sena.capitulo9;

import java.util.Scanner;

public class Ejercicio01 {

	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		double lado;
		System.out.print("lado: ");
		lado = teclado.nextFloat();
		cuadrado(lado);

	}

	private static void cuadrado(double lado) {
		double area;
		double perimetro;
		area = lado * lado;
		perimetro = lado * 4;
		System.out.println("Area: " + area);
		System.out.println("Perimetro" + perimetro);

	}

}
