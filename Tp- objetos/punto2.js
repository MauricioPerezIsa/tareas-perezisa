const cuenta = {
Saldo: 0,
titular:"Alex",
ingresar: function(Cantidad){
    this.Saldo=this.Saldo+ Cantidad
},
extraer: function(Cantidad_a_extraer){
    if(this.Saldo<Cantidad_a_extraer){
        console.log("No se puede extrar esa cantidad")
    }else{
     this.Saldo=this.Saldo - Cantidad_a_extraer
    }
},
informe: function(){
console.log(`Titular: ${this.titular}, Saldo: ${this.Saldo}€`)
}

}