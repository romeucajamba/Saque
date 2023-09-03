const nomeUser: string = "";
const conta: number = 30000



function menu(saque: boolean, conta_especial: boolean, valor) {
    if (saque == true && valor == conta && conta_especial == false) {

        const userName = prompt("Digite o seu nome de usuário: ", nomeUser);
        const cash = prompt("Digite o valor a tirar: ", valor)
        console.log("Seu nome é: ", userName, "E o valora ser tirado é: ", cash)

    } else if (saque == true && valor == conta && conta_especial == false) {

        console.log("Lamentamos, a sua operação não pode ser efetuada, o valor na conta é inferior!")

    } else if (saque == true && valor == conta && conta_especial == true) {

        const userName = prompt("Digite o seu nome de usuário: ", nomeUser);
        const cash = prompt("Digite o valor a tirar: ", valor)
        console.log("Seu nome é: ", userName, "E o valora ser tirado é: ", cash)
    }
}

console.log(menu)
