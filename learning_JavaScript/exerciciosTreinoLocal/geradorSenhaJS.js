// Gerador de senha JS

function newPassword(palavraChave1, palavraChave2, numeroChave3) {

    palavraChave1 = palavraChave1.charAt(0).toUpperCase()
    palavraChave2 = palavraChave2.substring(0,3)
    numeroChave3  = numeroChave3 * Math.random()

    let novaSenha = palavraChave1 + palavraChave2 + numeroChave3

    return novaSenha.replace(".", "")

}

console.log(newPassword("gustavo", "summoners", "777"))