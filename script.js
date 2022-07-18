let form = document.querySelector("#form")
let nome = document.querySelector('#input-nome')
let snome = document.querySelector('#input-snome')
let email = document.querySelector ('#input-email')
let observacoes = document.querySelector ('#Observaçoes')


function validandoCampos(){
	let nomeValue = nome.value.trim()
	let snomeValue = snome.value.trim()
	let emailValue = email.value.trim()
	let observacoesValue = observacoes.value.trim()

	if (nomeValue == ""){
		validarError(nome, "Precisa preencher o campo Nome")
	} else if(nomeValue.length < 3) {
		validarError(nome, "Nome precisa ter mais de 3 carateres")
	} else {
		validarSucesso(nome)
	}

	if (snomeValue == ""){
		validarError(snome, "Precisa preencher o campo Sobrenome")
	} else if(snomeValue.length < 3) {
		validarError(snome, "Sobrenome precisa ter mais de 3 carateres")
	} else {
		validarSucesso(snome)
	}

	if (emailValue == "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1) {
		validarError(email, "Campo email está errado")
	} else {
		validarSucesso(email)
	}

	if (observacoesValue == ""){
		validarError(observacoes, "Precisa preencher o campo observações")
	} else if(observacoesValue.length <=10) {
		validarError(observacoes, "Campo observações é obrigatorio e precisa ter mais de 10 carateres")
	} else {
		validarSucesso(observacoes)
	}
}

function validarError (input, message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small')
	small.innerText = message
	formControl.className = 'form-control error'
	input.value = " " 
}

function validarSucesso (input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control sucesso'
}

// // function formulario(){
// // 	if (validandoCampos() != 0 ) {
// // 		input.value = ""		
		
// // 	} 

// // }
    





form.addEventListener("submit",(e) => {
	e.preventDefault() 
})


// form.addEventListener('submit',validandoCampos) 
document.querySelector('#btn-submit').addEventListener('click',validandoCampos)




