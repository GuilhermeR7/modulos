var somar = require("./modulos/somar");
var media = require("./modulos/media");
var subtrair = require("./modulos/subtrair");
var multiplicar = require("./modulos/multiplicar");
var dividir = require("./modulos/dividir");
var mensagem = require("./modulos/mensagem");
var nome = "Guilherme";

console.log("A soma de x e y é: " + somar(20,90));
console.log("A média de x e y é: " + media(20,90));
console.log("A subtração de x e y é: " + subtrair(20,90));
console.log("A multiplicação de x e y é: " + multiplicar(20,90));
console.log("A divisão de x e y é: " + dividir(20,90));
console.log(mensagem(nome));