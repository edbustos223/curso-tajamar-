
//VARIABLE GLOBAL  se puede acceder a ella desde cualquier parte del codigo
//VARIABLE LOCAL variables que estan dentro de una funcion 
// y solo se puede acceder a ellas desde su propia funcion o funcion anidada


(function () {
    var variableGlobal = `esta es una var global`;
    //alert(variableGlobal)

    var miFuncion = function () {
        var variableLocal = `LOCAL`;
        // alert(variableLocal)

        var FuncionLocal = function () {
            // var variableLocal = `esta es var local, dentro de funcionLocal`
            alert(variableLocal)
        }
        FuncionLocal();

    }
    miFuncion();

}())