const app = new Vue({
el: '#app',
data: {
    // Texto
    titulo: 'Facturación de productos',
    // Array
    //frutas: 
    //['Peras', 'Manzanas','Bananas'],
    // Objeto
    //golosina: 
    //[
    //    {nombre:'Caramelos', cantidad:5, precio:10.00},
    //    {nombre:'Chicles', cantidad:4, precio:15.00},
    //    {nombre:'Turron', cantidad:8, precio:24.00}           
    //],
    
    golosina: [{nombre:'Caramelos', cantidad:5, precio:10.00}],
    
    nuevaGolosina: ''   
},
methods:{
    
    guardarJson(){
        localStorage.setItem('factura', JSON.stringify(this.golosina));
    },

    agregarProducto () {
            this.golosina.push({
            nombre: this.nuevaGolosina, cantidad: 0, precio: 25.25
        }),
        this.nuevaGolosina = '',
        this.guardarJson();
        //localStorage.setItem('factura', JSON.stringify(this.golosina));
    },

    eliminarProducto (index) {
        console.log(index),
        this.golosina.splice(index, 1),
        this.guardarJson();
        //localStorage.setItem('factura', JSON.stringify(this.golosina));
    }
},

created: function(){
    let datosDB = JSON.parse(localStorage.getItem('factura'));
    if(datosDB === null){
        this.golosina = [];
    }else{
        this.golosina = datosDB;
    }
    }
})