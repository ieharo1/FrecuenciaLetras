/*
 * FrecuenciaLetras.java
   INGRESA UNA SECUENCIA DE CADENA DE CARACTERES, HASTA LA PALABRA "FIN" ESCRITO EN DIFERENTES FORMAS.
   SI LA CADENA ES DIFERENTE DE "FIN", CALCULA Y DESPLIEGA EL NUMERO DE CONSONANTES, VOCALES, DIGITOS DECIMALES
   , ESPACIOS EN BLANCO U OTROS.
 */
package frecuencialetras;

import java.util.Scanner;

/**
 *
 * @author Scrappy Doo Coco
 */
public class FrecuenciaLetras {

   public static void main(String[] args) {
        // TODO code application logic here
        CFrecuenciaLetras fq = new CFrecuenciaLetras();
        fq.procesar();
    }
}

class CFrecuenciaLetras {
    // Atributos:
    private String cad;
    private final String alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private final int [] frq = new int [alf.length()];
    private int cuenta;
    private final Scanner sc = new Scanner(System.in);
    // Metodos:
    public void procesar() {
        while (true)  {
            System.out.print("Ingresar una cadena (salir --> fin): ");
            cad = sc.nextLine();
            if (cad.equalsIgnoreCase("fin")) break;
            // Encerar frecuencia;
            int i, pos;
            for (i = 0; i < alf.length(); i ++) frq[i] = 0;
            cuenta = 0;
            // Analizar cad:
            for (i = 0; i < cad.length(); i ++) {
                pos = alf.indexOf(cad.toUpperCase().charAt(i));
                if (pos >= 0) { // Es una letra
                   frq[pos] ++;
                   cuenta ++;
                }
            }
            // Desplegar la frecuencia:
            if (cuenta > 0) System.out.println("LETRA FRECUENCIA");
            for (i = 0; i < alf.length(); i ++)
                if (frq[i] > 0)
                  System.out.println(alf.charAt(i) + "    " + frq[i] + "/" + cuenta);
        }
    }
}
