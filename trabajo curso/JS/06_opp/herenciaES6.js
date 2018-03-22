

class Persona{
    constructor(nombre,fecha,altura){
        this.nombre = nombre
        this.fechanacim = fecha
        this.altura = altura

    }
    _calcularAños(){
        return ``
    }
    
    saludar(){
        
        console.log(`hola soy ${this.nombre}
        y tengo ${this._calcularAños()} años`)
    }
}

persona1 = new Persona(`pepe`, new Date(1994,3,3),1.60)

persona1.saludar()
   super.saludar()
    console.log(`soy del equipo ${this.equipo}`)




class alumno extends Persona{
    constructor(nombre,fecha,altura,aula,equipo){
        super(nombre,fecha,altura)
    this.aula = aula
    this.equipo = equipo
    }
    saludar(){
        super.saludar(`soy del equipo ${this.equipo}`)
        console.log(``)
    }
}

let alumno1 = new alumno1(`juan`, new Date(1994,3,3)`t22`)
alumno1.saludar()