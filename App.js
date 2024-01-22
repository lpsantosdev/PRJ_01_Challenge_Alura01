//Desafios
//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Welcome to our site.");

//Declare uma variável chamada nome e atribua a ela o valor "Lua".
let varName = "Lua";

//Crie uma variável chamada idade e atribua a ela o valor 25.
let varAge = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let varSalesNumber = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let varAvailableBalance = 1000;

//Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert("Error! Please, fill all fields");

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let varErrorMessage = "Error! Please, fill all fields";
alert(varErrorMessage);

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
let varUserName = prompt("Type your name:");

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
let varUserAge = prompt("Type your age:");

//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if(varUserAge >= 18) {
    alert("You can take your drive license!");
}