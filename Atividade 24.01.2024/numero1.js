//exercicio 1
console.log("EXERCICIO 1 ");

    let nomeUsuario = "Ludmila";
    let idadeUsuario = 31;
    console.log("Olá, meu nome é", nomeUsuario, "e eu  tenho", idadeUsuario, "anos");


// para fazer o exemplo acima usando entrada de texte podemos usar o comando prompt 
//usar o pronp primeiro você precisa usar o comando require
        // const leia = require('prompt-sync')()
        // let nomeUsuario = leia ("Digite Seu Nome: ");
        // let idadeUsuario =  leia ("Digite Sua Idade: ");

        // console.log("Olá, meu nome é", nomeUsuario, "e eu tenho", idadeUsuario, "anos");

//exercicio 2
console.log("EXERCICIO 2 ");

    const operMatemtica = require('prompt-sync')()

    let numero1 = parseInt(operMatemtica("Digite um numero: ")) 
    let numero2 = parseInt(operMatemtica("Digite outro numero: "))

    soma = (numero1 + numero2) //parseinte() converte numero1 e 2 na soma de string para numero
    subtracao = (numero1 - numero2)
    divisao = (numero1 / numero2)
    multiplicacao = (numero1 * numero2)

   // console.log('A soma dos dois valores é: $ {numero1 + numero2}')// esse comando exclui a utilizaçãodda variavel soma no passode cima
    console.log("A soma dos dois valores é: ", soma)

    console.log("A soma dos dois valore é:", soma)
    console.log("A subtracao dos dois valore é:", subtracao)
    console.log("A divisao  dos dois valore é:", divisao)
    console.log("A multiplicacao dos dois valore é:", multiplicacao)


//numero 3
console.log("EXERCICIO 3 ");

    const mIdade = require('prompt-sync')()

    let idadeAluno = mIdade("Digite sua idade: ")


    if (idadeAluno >= 18) {
        console.log("Aluno é maior de idade!!")
    } else {console.log("Aluno não é maior de idade")}


//numero 4
console.log("EXERCICIO 4 ");

    const mediaArit = require('prompt-sync')()

    let valor1 = parseInt(mediaArit("Digite primeiro valor: "))
    let valor2 = parseInt(mediaArit("Digite segundo valor: "))

    media = (valor1 + valor2) /2

    console.log("A Média aritimética dos valores digitados é: ", media)


//numero 5
console.log("EXERCICIO 5 ");

    const aumentSal = require('prompt-sync')()

    let nomeFuncionario = aumentSal("Digite o nome: ")
    let salario = parseInt(aumentSal("Digite o salário atual: "))

    aumento = (salario * 0.1)
    reajuste = (salario + aumento)

    console.log("O novo salário de", nomeFuncionario, "é", reajuste)

//numero 6
console.log("EXERCICIO 6 ");

    const doisValores = require('prompt-sync')()

    let A = parseInt(doisValores("Digite valor A: "))
    let B = parseInt(doisValores("Digite valor B: "))

    if (A = B) { 
                (A + B) 
                console.log("O valor é",(A + B))
        } else if (A != B) {
        (A * B) 
        // o bloco abaixo é necessário?
        C = (A * B)
    } else (console.log("O valor de C é", C,".")) // esse else não está funcionando


    //numero 7
    console.log("EXERCICIO 7 ");

    const compraParcel = require('prompt-sync')()

    let valorAvista = parseInt(compraParcel("Digite valor à vista: "));
    let quantParcelas = parseInt(compraParcel("Digite quantidade de parcelas: "));

    avista = valorAvista
    parcela = quantParcelas

    if (quantParcelas == 3) {
        dezPorCem = valorAvista + (valorAvista * 0.1);
        console.log("Valor da parcela é 3x de", dezPorCem / 3);
    } else if (quantParcelas == 5){
        cincoPorCem = valorAvista + (valorAvista * 0.2);
        console.log("Valor da parcela é 5x de", cincoPorCem / 5);
    } else {
            console.log("Valor a pagar", valorAvista);
        }


//numero 8
console.log("EXERCICIO 8 ");

    const notaMedia = require('prompt-sync')()

    let nomeAluno = notaMedia("Digite Nome Aluno: ")
    let nota1 = parseInt(notaMedia("Digite Primeira Nota: "))
    let nota2 = parseInt(notaMedia("Digite Segunda Nota: "))
    let nota3 = parseInt(notaMedia("Digite Terceira Nota: "))

    media = (nota1 + nota2 + nota3) /3


    if (media >= 8){
    console.log("O aluno", nomeAluno, "está aprovado com média", media)
    }
    else (console.log("O aluno", nomeAluno, "etá reprovado com média", media))

//numero 9 
console.log("EXERCICIO 9 ");

    const leia = require('prompt-sync')()

    let real1 = parseInt(leia("Digite primeiro valor: "))
    let real2 = parseInt(leia("Digite segundo valor: "))
    let codUsuario = parseInt(leia("Digite 1, 2 ou 3 para seleção de usuario: "))
        //codigo 1 - adiciona os dois numeros
        //codigo 2 - multiplica os dois numeros
        //codigo 3 - divide o primeiro pelo segundo

    if (codUsuario == 1) { 
                console.log((real1 + real2),)
        } else if (codUsuario == 2) {console.log(real1 * real2)

    }else (console.log((real1 / real2)))



























// let x = 8
// let y = 12


//Numero 1
// let nome = prompt("DIGITE SEU NOME:");
// let idade = prompt("DIGITE SUA IDADE:");

// console.log("Olá, meu nome é", nome, "e eu  tenho", idade, "anos");


// let x = 8
// let y = 12







