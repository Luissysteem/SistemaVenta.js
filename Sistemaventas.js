class productos {

    static contadorProductos = 0;

    constructor(nombre,precio){
        this._idproducto = ++productos.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }

    producto(){
        return `idproducto:${this._idproducto} nombre:${this._nombre} precio: $${this._precio}`
    }
    
    get idproducto (){
        return this._idproducto
    }

    get nombre (){
        return this._nombre
    }

    get precio (){
        return this._precio
    }

    ToStrign(){
        return this.producto();
    }
}

class orden{

    static contadorOrdenes = 0;
    static get MAX_PRODUCTORS (){
        return 5;
    }

    constructor(){
        this._idorden = ++orden.contadorOrdenes
        this._productos = [];
        this._contadorProductos = 0;
    }

    get orden(){
        return this._idorden;
    }

    agregarProductos(producto){
        if(this._productos.length < orden.MAX_PRODUCTORS){
            this._productos.push(producto);
        }
        else
        {
            console.log('no se pueden agregar mas productos')
        }
    }

    calcularTotal(){
        let totalvalor = 0;
        for (let producto of this._productos) {
            console.log(producto.precio)
            totalvalor += producto.precio
        }

        return totalvalor
    }

    mostrarOrden(){
        let totalproducto = '';
        for(let producto of this._productos){
        totalproducto +=  '\n'+ producto.ToStrign() + ' ';
        }

        console.log (`orden:${this.orden} total: $${this.calcularTotal()} productos: ${totalproducto}`)
    }
}

let producto1 = new productos('harina',300);
let producto2 = new productos('queso',200);

let orden1 = new orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.mostrarOrden()