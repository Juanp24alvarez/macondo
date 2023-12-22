//valor definido
var saldo = 2500000



//caso1
alert("BIENVENIDO A UNA NUEVA AVENTURA, HOY INICIAREMOS UN CAMINO HACÍA MACONDO")
alert('El día del vieje es el Viernes en la noche, pero antes de eso debes de ir al trabajo')
alert("Hoy te van a pagar y deberas preparar todo para tu vuelo a Macondo con escala en Medellin ")
alert('Recibes pago de nómina por $2,500,000.00')
alert("Hildebrando llegaste al aeropuerto el Dorado")
alert("¿Quieres comprar algo de comer antes de tu vuelo?")
 let player = prompt ('Escribe 0 para NO, 1 para SÍ')
 if ( player == 0){
    alert('Debes de comprar algo de comer en Medellín')
 } else if (player == 1){
    alert ('1. Si compra una almojábana con gaseosa son $15,000 - 2. Si compra un subway con gaseosa $23,000')
}
let player1 = prompt ('¿Qué opción deseas? 1 o 2')
if (player1 == 1){
    alert ('Te caerá mal, porque lleva mucho en el stand')
    alert ('Te queda un saldo de ' + (2500000 - 15000))
} else if  (player1 == 2){
    alert('Estará llenito y bien hasta que llegues a tu destino final')
    alert ('Te queda un saldo de ' + (2500000 - 23000))
}




//caso 2
alert("Es hora de ir a abordar Hildebrando")
alert("Bienvenido a Latam, la mejor aerolinea")
alert("En la sala de espera de Latam, debes registrar tu maleta de mano")
alert("Al revisar tu maleta, te dicen que no cumple con el tamaño maximo de la aerolínea para maletas de mano, el cual es 55 cm (alto) x 40cm (largo) x 20 cm (ancho),")
alert("Hildebrando tienes una maleta de 60 cm(alto) x 40 cm (largo)x 20x(ancho) cm que excede las medidas maximas")
alert("Para poder abordar deberas sacar ropa para disminuir el tamaño") 

//medidas aeropuerto
let Aero1 = 55
let Aero2 = 40
let Aero3 = 20
// medidas hida
let hid1 = 60
let hid2 = 40
let hid3 = 20

let operacion = Math.min((Aero1/hid1),(Aero2/hid2),(Aero3/hid3));

let maleta1 = hid1* operacion
let maleta2 = hid2* operacion
let maleta3 = hid3* operacion
 
alert(`Estas son las dimensiones que quedaron despues de reducir proporcionalmente el tamaño  ${Math.round(maleta1)} cm(alto) x ${Math.round(maleta2)} cm(largo) x ${Math.round(maleta3)} cm(ancho) `) 




//caso 3
alert("Hildebrando despues de lograr registrar tu maleta, te diriges hacia medellin, llegaras a las 2am")
alert("Deberas llegar a las 3am a Macondo, pero en el aeropuerto no hay wifi")
alert("Necesitas asegurar tu reserva en el hotel para el siguiente día, caminando por el aeropuerto encuentra wifi, la red se llama  ElPassEs: 01110010_01101001_01110111_01101001, pero la contraseña está cifrada en números binarios, además cobran 50.000 la hora.")
alert("Debras transformar la contraseña")

let contra1 = "01110010_01101001_01110111_01101001"
let wifi1 = contra1.split("_")
alert(`Lograste transfor la contraseña, es ${String.fromCharCode(parseInt(wifi1[0],2))}${String.fromCharCode(parseInt(wifi1[1],2))}${String.fromCharCode(parseInt(wifi1[2],2))}${String.fromCharCode(parseInt(wifi1[3],2))}`)




//caso 4
alert("Hilde, haz llegado a tu destino ")
alert("Estas feliz, pero te das cuenta que todos hablan diferente, solo hablan con la la vocal i  así que todo lo que dirás debe ser con la vocal i“")
let frase = ("Taxi me puede llevar al hotel mariposas amarillas")
alert(`Debes decir esto ${frase.replaceAll("a","i").replaceAll("e","i").replaceAll("o","i").replaceAll("u","i")}`)
 


 
// caso 5
alert("Cuando llegas al hotel, el taxi te pide  300.000 pesos, empiezas a negociar con él")
alert("Le dices que si le ganas en piedra, papel o tijera  no pagaras nada \nSi hay empate, no pasa nada \nsi el taxista gana, pagas \nsolo será una ronda")



let cosos = ["piedra", "papel", "tijera"]
var taxista = Math.floor( Math.random() * 3); //2
let hilde = prompt("ingresa una opcion piedra, papel y tijera") //1



if (cosos[taxista] == cosos[0] && hilde.toLowerCase() == "tijera" ){
    alert("llorelo, pague ps")
    saldo -= 300000
    alert(`tu saldo es ${saldo}`)
}

else if(cosos[taxista] == cosos[1] && hilde.toLowerCase() == "piedra"){
    alert("llorelo, pague ps")
    saldo -= 300000
    alert(`tu saldo es ${saldo}`)
}

else if(cosos[taxista] == cosos[2] && hilde.toLowerCase() == "papel"){
    alert("llorelo, pague ps")
    saldo -= 300000
    alert(`tu saldo es ${saldo}`)
}

else if(cosos[taxista] == cosos[0] && hilde.toLowerCase() == "papel"){
    alert("uy pa ganaste, no pagas nada")
}

else if(cosos[taxista] == cosos[1] && hilde.toLowerCase() == "tijera"){
    alert("uy pa ganaste, no pagas nada")
}

else if(cosos[taxista] == cosos[2] && hilde.toLowerCase() == "piedra"){
    alert("uy pa ganaste, no pagas nada")
}




//caso 6
alert("Hildebrando llegaste al hotel")
alert("Notas que para las actividades dentro del hotel llevan un patrón de vestimenta para cada cosa")
alert("La idea es quedarse 4 días")



let color = prompt("Elige un color de tu vestimenta \n1- amarillo: ir a la piscina \n2- verde: caminatas y agüita para el camino \n3- rojo: actividades en la playa \n4- azul: actividades dentro del hotel")


//piscina
if (color == "1"){
    alert("Elegiste ir a la piscina")
    let piscina = prompt("El agua huele raro \n¿Quieres meterte a la piscina?")

    if(piscina.toLowerCase() == "no"){
        alert("No te metiste, te salvaste mano ")
    }

    else if(piscina.toLocaleLowerCase() == "si"){
        alert("Te metiste y con el tiempo empiezas a sentirte ahogado, demasiado cloro, valiste monda :c")
        alert("terminan las vacaciones :(")
    }
}





//caminata
else if(color == "2"){
    alert("Elegiste caminatas, y agüita para el camino")
    let caminata = prompt("¿Quieres hacer toda la caminata?")

    if(caminata.toLowerCase() == "si"){
        alert("Iras a una hermosa cascada y te tomaras fotos")
    }

    else if(caminata.toLocaleLowerCase() == "no"){
        alert("llegarás a cierto punto, te devolverás solo, te dara la noche y te perderas")
    }
}




//playa
else if (color == "3"){
    alert("Elegiste actividades en la playa")
    let playa = prompt("Debes elegir entre \n1- jugar voleibol, \n2- nadar en el mar \n3- tomar cocteles")

    if (playa == "1"){
        alert("Jugaste y la pasaste genial :)")
    }

    else if (playa == "2"){
        alert("Nadaste en el mar y montaste moto")
    }

    else if (playa == "3"){
        alert("Tomas cocteles mientras descansas, de pronto sientes un fuerte dolor de cabeza y empiezas a perder la visión, chirrinchi adulterado, te tienes que devolver de emergencia :(")
        alert("terminan las vacaciones :(")
    }
}



//hotel
else if (color == "4"){
    alert("Elegiste actividades dentro del hotel ")
    let hotel = prompt("Debes elegir entre \n1-jugar bingo \n2-ir a bailar \n3-ir al casino")

    if(hotel == "1"){
        alert("Jugaste bingo, ganaste y aumentaste tu dinero, ganaste 1000000 :c")
        saldo += 1000000
        alert(`Tu saldo ahora es ${saldo}`)
    }

    else if (hotel == "2"){
        alert("Vas a bailar y la pasas muy bien")
    }

    else if (hotel == "3"){
        alert("Vas al casino y apuestas, solo quedaste con el pasaje de regreso :(")
        alert("Terminan las  vacaciones :(")
    }

}

alert(`Quedaste con ${saldo}`)
