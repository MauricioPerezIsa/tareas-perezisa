class Rectagulos{
 alto
 ancho
 constructor(ancho ,alto){
    this.alto=alto
    this.ancho=ancho
 }
modificar({alto,ancho}){
    if(alto){
        this.alto=alto
    }else{
        this.ancho=ancho
    }
}
perimetro(){
    return(this.alto*2)+(this.ancho*2)
}
area(){
    return(this.alto*this.ancho)
}
mostrar(){
    console.log(`El Ancho es ${this.ancho},y el Alto es${this.alto},su perimetro es${this.perimetro()}, su area es${this.area()}`)
 }
}
const rectagulo1=new Rectagulos(50,125)

class Productos{
codigo
nombre
precio
constructor(codigo,nombre,precio){
    this.codigo=codigo
    this.precio=precio
    this.nombre=nombre
}
imprime(){
  console.log(`El Nombre del producto es ${this.nombre}, el cual tiene el codigo de producto ${this.codigo}, con un valor de ${this.precio}$`)
}
}
const producto1= new Productos('U1','Oreos',200)
const producto2= new Productos('U2','Pepitos',250)
const producto3= new Productos('U3','Merengadas',150)

const galletas=[producto1,producto2,producto3]

for(let i=0; i <galletas.length; i++ ){
    galletas[i].imprime()
}