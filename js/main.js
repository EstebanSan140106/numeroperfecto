//ingrese un numero por teclado y verifique si es perfecto o no sabiendo que un numero perfecto es la suma de sus divisores excluyendo el propio numero
var a = prompt("Ingrese un nuemro:");
var cont = 0;
for (i = 1; i <= a - 1; i++) {
    if (a%i== 0) {
        cont = cont + i;
    }
}
if (cont==a){

    document.write("El numero "+ a + " es perfecto" + "<br>");
} else {
    document.write("El numero " + a + " no es perfecto")
}