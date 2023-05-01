let nombre =prompt("Ingrese su Nombre")
document.write("Hola "+nombre)
//ejercicio5

let numero1=parseInt(prompt("Inngrese el primer numero"))
let numero2=parseInt(prompt("Inngrese el segundo numero"))
let resultado = numero1+numero2
document.write("<br>")
document.write("El resultado de sumar "+numero1+" + "+numero2 +" es "+resultado)
//ejercicio6
let num1=parseInt(prompt("Inngrese el primer numero"))
let num2=parseInt(prompt("Inngrese el segundo numero"))
document.write("<br>")
if(num1>=num2){
    if(num1==num2){ 
        document.write("Ambos numeros son iguales")
    }
    else{ 

        document.write("El "+num1+" es el numero mas grande ")
    }
}
else{
    document.write("El "+num2+" es el numero mas grande ")
}

