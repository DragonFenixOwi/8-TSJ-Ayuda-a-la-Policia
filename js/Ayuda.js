/*
    -----------------------------------------------------------
        Autor: Osvaldo Aquino
        nickname: owi
        Problema de Documentación DNI Javascript 
            - Se tiene varios DNI de gente pero no se sabe su letra, 
            solo tenemos los dígitos.
            - La documentación que se usa en la policia desde hace años, 
            para saber la letra.
            - Esta es una lista de letras, en un orden concreto. El orden no puede variar.
            - Documentación El otro dato que emplea la policia es:
                #Hay un calculo matemático:
                    - Son 23 letras y hay que sacar el ‘resto’ 
                    de la división sobre el número del DNI.
    -----------------------------------------------------------
*/

/*
    ------------------------
        Variables Globales
    ------------------------
*/

// letra invariable de referencia para saber la letra de un número DNI
const Letra_DNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
                    "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K",
                    "E", "T",];

//variable recibida por la función "resto"
var resto_dni=0;



/*
    ----------------
        Funciones
    ----------------
*/




function imprimir_letra_numero(valor_porsicion_letra, valor_dni)
    {
        /*
            - valor_posicion_letra = resultado enviado de la función "resto", que indica la letra del DNI
            - valor_dni = numero que se introduce por teclado. 
            Es enviada de la función principal "encontrar_letra_dni" a la fución "resto" 
            y por ultimo "resto", envia el valor a esta función para imprimirla.
            - 
        */
        // Impresión del resultado final en navegador 
        document.write(` la letra que corresponde al DNI de número
        "${valor_dni}" es : "${Letra_DNI [valor_porsicion_letra]}" <br> <br>
        Entonces el DNI es: "${valor_dni} - ${Letra_DNI [valor_porsicion_letra]}"`);
        
        // Impresión del resultado final en consola
        console.log(` la letra que corresponde al DNI de número
        "${valor_dni}" es : "${Letra_DNI [valor_porsicion_letra]}" \n \n
        Entonces el DNI es: "${valor_dni} - ${Letra_DNI [valor_porsicion_letra]}"`);

    }






/* Función "resto" : permite hallar el resto de la devisión entre 
        -el dato introducido por teclado "numero_dni" 
        -  y 23 (cantidad de letras en "letra_DNI") 
            "numero_dni" % 23
*/
function resto (resto_dni)
    {
        /* Operación para hallar el resto. 
                - resultad_resto = se guarda el resultado final de la operación
                -resto_dni = numero que se introduce por teclado. Es enviada de la función "encontrar_letra_dni"
                -letra_DNI.length = tamaño del array "Letra_DNI" le restamos -1 para que nos de "23"
        */
        var resultado_resto = resto_dni % (Letra_DNI.length-1);
        
        // llamada a la función, para imprimir el numero y letra.
        imprimir_letra_numero(resultado_resto, resto_dni);
        
    };



/*
    -----------------------------------
        Main - Desarrollo principal
    -----------------------------------
*/

function encontrar_letra_dni ()
    {
        // Se guarda en la variable "numero_dni", el numero introducido  
            var numero_dni = prompt('Introduce tu numero de DNI por favor: ');
        // llamamos a la función "resto", para obtener el residuo del número introducido
            resto(numero_dni);
        
    }




console.log(Letra_DNI[4]);
encontrar_letra_dni();
