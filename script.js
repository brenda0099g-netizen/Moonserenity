const horarios = [
"10:00",
"11:00",
"12:00",
"1:00",
"2:00",
"3:00",
"4:00",
"5:00",
"6:00"
];

const contenedor =
document.getElementById("horarios");

horarios.forEach(hora=>{

const boton =
document.createElement("button");

boton.innerText=hora;

contenedor.appendChild(boton);

});
