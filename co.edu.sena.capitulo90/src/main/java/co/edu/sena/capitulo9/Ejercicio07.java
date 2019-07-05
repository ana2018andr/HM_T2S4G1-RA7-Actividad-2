package co.edu.sena.capitulo9;

import java.util.Scanner;

public class Ejercicio07 {

			public static void main(String[] args) {
				Scanner teclado = new Scanner(System.in);
				char p;
				char d;
				int m;
				int ds = 0;
				String x = "";
				System.out.print("ingrse monto:  ");
				m = teclado.next().charAt(0);
				System.out.print("ingrse plazo recargo:  ");
				p = teclado.next().charAt(0);
				System.out.print("ingrse contado decuento:  ");
				d = teclado.next().charAt(0);
				ingrese(m);
				switch (p) {
				case 'G':
					switch (d) {
					case 'C':
						ds = (m * 15) / 100;
						x = "15% de descuento";
						break;
					}

				}
				switch (p) {
				case 'G':
					switch (d) {
					case 'P':
						ds = (m * 10) / 100;
						x = "10% de descuento";
						break;
					}

				}
				switch (p) {
				case 'A':
					switch (d) {
					case 'c':
						ds = (p * 20) / 100;
						x = "20% de descuento";
						break;
					}

				}
				switch (p) {
				case 'A':
					switch (d) {
					case 'P':
						ds = (m * 5) / 100;
						x = "5% de descuento";
						break;
					}

				}
				System.out.println("plazos recargo: " + x);
				System.out.println(" contado descuento :" + ds);
			}

			private static void ingrese(int m) {
				return;
			}
		
	}

