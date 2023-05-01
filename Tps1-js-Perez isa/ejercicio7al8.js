//ejercicio7 
let n1=parseInt(prompt("Ingrese el primer numero"))
let n2=parseInt(prompt("Ingrese el segundo numero"))
let n3=parseInt(prompt("Ingrese el tercer numero"))
document.write("los 3 numeros son "+n1+"\n"+n2+"\n"+n3)
document.write("<br>")
if(n1==n2 & n2==n3 & n1==n3){
    document.write("Los tres numeros son iguales")
}
else{
    if(n1>=n2){
      if(n1>=n3){
        document.write(n1+" Es el mayor de los 3 ")
      }
    }else{
        if(n2>=n3){
            document.write(n2+" Es el mayor de los 3 ")
            
        }
        else{
        document.write(n3+" Es el mayor de los 3 ")

        }
    }

}
document.write("<br>")
//ejercicio8
 let numero =parseInt(prompt("Ingrese un numero"))

 if(numero%2==0){
    document.write("El numero "+numero+" es divisible en 2 ")
 }
 else{
    document.write("El numero "+ numero+ " no es divisible en 2 ")
 }
 