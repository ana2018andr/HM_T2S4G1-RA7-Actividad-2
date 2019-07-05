package co.edu.sena.capitulo9;

import java.util.Scanner;

public class Ejercicio10 {

	public static void main(String[] args) {
		Scanner teclado = new Scanner(System.in);
		int i = 0;
		int j = 0;
		int[][] matriza = new int[2][2];
		int[][] matrizb = new int[2][2];
		int[][] matrizc = new int[2][2];
		System.out.println("Arreglo A: ");
		for (i = 0; i < 2; i++) {
			for (j = 0; j < 2; j++) {
				System.out.println("Numero " + (i + 1));
				matriza[i][j] = teclado.nextInt();
			}
		}
		System.out.println("");
		System.out.println("Arreglo B: ");
		for (i = 0; i < 2; i++) {
			for (j = 0; j < 2; j++) {
				System.out.println("Numero " + (i + 1));
				matrizb[i][j] = teclado.nextInt();
			}
		}
		for (i = 0; i <= 1; i++) {
			for (j = 0; j <= 1; j++)
				matrizc[i][j] = matriza[i][j] * matrizb[i][j];
		}
		System.out.println("");
		System.out.println("Areglo C: ");
		System.out.println("==========: ");
		System.out.println("Numero (0 , 0) : " + matrizc[0][0]);
		System.out.println("Numero (0 , 1) : " + matrizc[0][1]);
		System.out.println("Numero (1 , 0) : " + matrizc[1][0]);
		System.out.println("Numero (1 , 1) : " + matrizc[1][1]);
		matriz(matriza, matrizb, matrizc);
	}

	private static int[][] matriz(int[][] matriza, int[][] matrizb, int[][] matrizc) {
		return matrizc;

	}
}
