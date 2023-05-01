//ejercicio 1
let edad= parseInt(prompt("Ingrese su edad"))
if(edad>18){
    document.write("Usted puede conducir")
}
else{
    document.write("usted no puede conducir")
}

document.write("<br>")
//ejercicio 2
let nota= parseInt(prompt("Ingrese la nota"))

if(nota == 0||1 ||2 ||3 ||4 ||5 ||6 ||7 ||8 ||9 ||10 ){
if(nota<3){
    alert("muy deficiente")
}
else{
    if(nota<=4){
        alert("Isuficiente")
        }else{
            if(nota<=6){
                alert("suficiente")
            }else{
                if(nota==7){
                    alert("bien")
                }else{
                    if(nota<10){
                        alert("muy bien")
                    }else{
                        if(nota==10){
                            alert("execelente")
                        }

                    }

                }

            }

        }
    
}
}
//ejercicio 11
let nombre1 = prompt("Nombre 1:")
    let edad1 = Number(prompt("Edad 1:"))

    let nombre2 = prompt("Nombre 2:")
    let edad2 = Number(prompt("Edad 2:"))

    let nombre3 = prompt("Nombre 3:")
    let edad3 = Number(prompt("Edad 3:"))

    let maximo = Math.max(edad1, edad2, edad3)

    if (maximo == edad1) {
        document.write("El mayor es: " + nombre1)
    }
    if (maximo == edad2) {
        document.write("El mayor es: " + nombre2)
    }
    if (maximo == edad3) {
        document.write("El mayor es: " + nombre3)
    }
    //ejercicio 12
    document.write("<br>")    
    const numerito = Math.random()*(99-1)+1
    document.write(numerito)
// ejercicio 13
let cadena =prompt("Ingrese una cadena")
document.write("<br>")
document.write(cadena.toUpperCase())