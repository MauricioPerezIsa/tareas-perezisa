class Persona{
    nombre
    edad
    dni
    sexo
    peso
    altura
    año_naci
     constructor(nombre, edad, sexo,peso, altura, año_naci){
        this.nombre=nombre
        this.edad=edad
        this.GenerarDNI()
        this.sexo=sexo
        this.altura=altura
        this.peso=peso
        this.año_naci=año_naci
     }
     mostrarGeneracion(){
        if(this.año_naci>=1930 && this.año_naci<=1948){
           console.log("Silent generation " +  " Rasgo: caracteristico Austeridad ")   
        }else if(this.año_naci>=1949 && this.año_naci<=1968){
            console.log("baby boom" +  " Rasgo: caracteristico Ambision ")
        }else if(this.año_naci>=1969 && this.año_naci<=1980){
            console.log("generacion X" +  " Rasgo: caracteristico Obsecion por el exito ")

        }else if(this.año_naci>=1981 && this.año_naci<=1993){
            console.log("Generacion Y" +  " Rasgo: caracteristico frustracion ")
        }else if(this.año_naci>=1994 && this.año_naci<=2010){
            console.log("Generacion Z" +  " Rasgo: caracteristico Irreverencia ")
        }else{
            console.log("Fuera de rango lo sentimos")
        }
     }
     esMayor(){
        if(this.edad>=18){
            console.log("es mayor")
        }else{
            console.log("no es mayor")
        }
     }
     GenerarDNI(){
    const numero = Math.floor(Math.random() * 100000000)
    this.dni= parseInt(("00000000" + numero).slice(-8))
     }
     mostrardatos(){
        console.log(`El nombre de la persona es: ${this.nombre}
         de edad: ${this.edad} y
         sexo ${this.sexo}
         cuyo dni es: ${this.dni} y tiene una altura 
          de: ${this.altura},
           y peso: ${this.peso}`)
     }
}