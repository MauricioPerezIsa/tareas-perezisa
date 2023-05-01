// Crear objeto auto
const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    estaEncendido: false,
  
    // Método para encender el auto
    encender: function() {
      if (!this.estaEncendido) {
        this.estaEncendido = true;
        console.log("El auto se ha encendido");
      } else {
        console.log("El auto ya está encendido");
      }
    },
  
    // Método para apagar el auto
    apagar: function() {
      if (this.estaEncendido) {
        this.estaEncendido = false;
        console.log("El auto se ha apagado");
      } else {
        console.log("El auto ya está apagado");
      }
    }
  };
  
  // Prueba de los métodos
  auto.encender(); // El auto se ha encendido
  auto.apagar(); // El auto se ha apagado
  auto.apagar(); // El auto ya está apagado
  auto.encender(); // El auto se ha encendido
  