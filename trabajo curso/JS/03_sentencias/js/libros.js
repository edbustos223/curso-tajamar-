
{
    let libro = {
        titulo: ``,
        autor: ``,
        editorial: ``,
        fecha: 2000,
        generos: [],
    }

    let libro1 = Object.create(libro)
    let libro2 = Object.create(libro)

    libro1.autor = `j rr tokien`
    libro1.titulo = `El Señor de los Anillos`
    libro1.editorial = `minotauro`
    //libro1.fecha  = 1954
    //libro1.generos =[`fantasia`] 

    

    libro2.autor = `j rr tokien`
    libro2.titulo = `El Señor de los Anillos`
    libro2.editorial = `minotauro`
    //libro2.fecha  = 1954
    //libro2.generos =[`fantasia`] 

    console.log(libro1)
    console.log(libro2)
    
}

{
    let libro1 = {
        titulo: `rr tokien`,
        autor: `el señor de los aniullos`,
        editorial: `minotauro`,
        fecha: 1954,
        generos: [`fantasia`],
    }
    

    let libro2 = {
        titulo: `neuronant2`,
        autor:`willian gibson2` ,
        editorial: `minotauro2`,
        primera_edicion: {
            editorial : `acme`,
            fecha: 1990},
        fecha: 19542,
        generos: [`fantasia2`, `amor`]
    
    }
    

    libro1.personales = []
   
    /* console.log(libro1)
    console.log(`El autor es ${libro2.autor}`)
    console.log(typeof libro2.autor)
    console.log( libro2.fecha)
    console.log(typeof libro2.fecha)

    console.log( typeof libro2.generos[0])
    console.log(  libro2.generos[0])

    console.log( libro2.primera_edicion.editorial) }*/
    


for (const key in libro1) {
    console.log(`La clave ${key} vale`, libro1[key])
 libro1[key];
        
    }
}

