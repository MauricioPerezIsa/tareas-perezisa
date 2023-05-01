// ejercicio 9

// let cadena=prompt("Ingrese una frase")


//ejercicio 10 Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero=parseInt(prompt("Ingrese un numero"))

if(numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0){
    document.write("El numero es divisible por alguno de los siguintes numeros 2,3,5,7")
}
else{
    document.write("El numero es no divisible por alguno de los siguintes numeros 2,3,5,7")

}
document.write("<br>")

//ejercicio 11

let num=parseInt(prompt("Ingrese un numero"))
if(num%2==0 || num%3==0 || num%5==0 || num%7==0){

    if(num%2==0){
    document.write("El numero es divisible po 2")
    }
    if(num%3==0){
    document.write("El numero es divisible po 3")
    }
    if(num%5==0){
        document.write("El numero es divisible po 5")
    }
    if(num%7==0){
        document.write("El numero es divisible po 7")

    }
}
else{
    document.write("El numero es no divisible por alguno de los siguintes numeros 2,3,5,7")

}