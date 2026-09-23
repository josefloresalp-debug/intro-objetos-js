// ejemplo de objeto con metodos

//datos de un producto
const producto = {
    id : "p-07",
    nombre : "Agua de pepino",
    precio : 15,
    categoria : "Bebida",
    Disponible :true,

    //metodos

    resumen(){
        return nombre + this.nombre + " - $" + this.precio +"(" + this.categoria +")";
    },
    estaDisponible(){
        return this.disponible;
    }

};
//Paso 1 mostrando el objeto
console.log("---Objeto completo---")
console.log(producto);