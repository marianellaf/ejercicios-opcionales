//ejercicios opcionales

//#1SUMA
function esSuma(a, b){
	var resultado = a + b;
	return resultado;
}

//#2PROMEDIO
function esPromedio(a,b,c){
	var suma = a + b + c;
	var promedio = suma/3;
	return promedio;
}

//#3AREA
function esArea(base, altura){
	var area = (base*altura)/2;
	return area;
}

//#4SUELDO
function esSueldo(horas, pago, semanal){
	var suma = horas * pago;
	var semanal = suma*7;
	return semanal;
}

//#5PAR O IMPAR
function par(num){
	 	if (num % 2 ===0){
	 		alert("es par");
	 	}else{
	 		alert(	"es impar");
	 	}
}

//#6MENOR QUE
function menor(pri,seg,ter){
	var numero = Math.min(pri,seg,ter);
	return numero;
}


//#7MAYUSCULA MINUSCULA O AMBAS
function iguales(tex) {
	var resultado = "";
	if (tex == tex.toUpperCase()){ //comprueba si son mayusculas
		resultado += "solo esta con mayusculas";
	}else if (tex == tex.toLowerCase()){ //comprueba sin son minusculas
		resultado += "solo esta con minusculas";
	}else{ 
		resultado += "tiene mayusculas y minusculas";
	}
	return resultado;
}

//#8 MULTIPLO
function multiplos(num){
	var multiple = num;
	var total = "";
	for (var i = 1; i <= 10; i++){//recorre los numeros
		var valor = multiple * i;
		total += " " + valor.toString();//cadena mas espacio
	}
	return total;
}
//#9 palindrome
function palindrome (cad){
	var inicio=0;
	var final= cad.length-1; 
	var contador= 0;
	while(final>=0){
		if(cad.charAt(inicio) != cad.charAt(final)){
			contador++;
		}
		inicio++;
		final--;
		if(contador>0){
			return cad + " " + "no es un palindrome";
		}
	}
	return cad + " " + "sí es un palindrome";
}
document.write(palindrome("omo") + "<br>");
document.write(palindrome("mono") + "<br>");


//#10 Cantidad de digitos
function cantidadDigitos(num){
	var digitos = 0;
	while(num > 0){
		num = Math.floor(num/10);
		digitos++;
	}
	console.log("su num tiene "+ digitos + " digitos.")
	return digitos;
}

//#11 "numero primo"
function numerosprimos(num){
if (num == 1 || num == 2){
	return num + " " + "es un número primo";
}else{
	for (var i=2; i<num; i++){
		if(num%i==0){
			return num + " " + "no es un número primo";
		}else{
			return num + " " + "es un número primo";
		}
	}
}
}
document.write(numeros_primos(4) + "<br>");
document.write(numeros_primos(71) + "<br>");
document.write(numeros_primos(7) + "<br>");


//#12 "cuadrado de la suma de dos numeros"
function cuadradosuma(num1,num2){
	var calculo= (num1 + num2)*(num1 + num2);
	return calculo + "<br>";
}
document.write(cuadradosuma(3,6));

//#13 "pinturas"
function pagoPintura (m2, metrosPintados) {  
	var valor = m2 * metrosPintados;
	return valor;
}

//#14 Llamada Telefónica 
function llamadaTelefonica (minutoHablado, costoMinuto) {
	var valor = minutoHablado * costoMinuto;
	return valor;
}

//#15  Conversión de edad 
function diasVividos(){
	var nombre = prompt("Cuál es tú nombre?");
	var edad = parseInt(prompt("ingresa tu edad"));
	var resultado = edad*365;
	alert(" Hola " + nombre + " Tú has vivido " + resultado + " días ");
}
//16 Hamburguesas "El náufrago satisfecho"
function descuentoHamburguesa (){
	var simple = 20.00;
	var doble = 25.00;
	var triple = 28.00;
	var categoria = parseInt(prompt("Ingrese tipo de su hambuguesa (simple, doble o triple)"));
	var cantidad = parseInt(prompt("Ingrese la cantidad de hambuguesa"));
	var total = categoria * cantidad;
	var pago = prompt("Su pago es con tarjeta de crédito?");
	if (pago == si)
		alert("Su cargo es del 5%, el precio final es de $"+ (categoria*cantidad)*0.95);
	else (pago == no)
		alert("No tiene cargo en su compra, y el precio final es de $ " + total );
}


