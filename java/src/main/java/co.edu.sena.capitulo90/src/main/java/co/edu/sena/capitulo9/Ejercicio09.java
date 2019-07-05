package co.edu.sena.capitulo9;

import java.util.Scanner;

public class Ejercicio09 {

			public static void main(String[] args) {
				Scanner teclado = new Scanner(System.in);
				String nombre;
				String nombre1 = "";
				System.out.println("Ingrese un nombre");
				nombre = teclado.nextLine();
				for (int i = nombre.length() - 1; i >= 0; i--) {
					nombre = nombre1 + nombre;
				}
				if (nombre != (nombre1)) {
					System.out.println("La palabra es palindroma");
				} else {
					System.out.println("La palabra no es polindromo ");
					palindromo(nombre);
				}
			}

			private static String palindromo(String nombre) {
				return nombre;
			}
}
