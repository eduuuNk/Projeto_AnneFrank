//login
let form = document.getElementById("entrar");
let login = document.getElementById("login");
let senha = document.getElementById("senha");
    form.addEvenListener("click", function(){
        let formData = new FormData();
        formData.append('login', `${login.value}`);
        formData.append('senha',`${senha.value}`);
        fetch("seuSITEaqui/usuario.php",
        {
            body: formData,
            method: "post",
            mode: 'cors',
            cache: 'default'
        }) .then(Response => {Response.json()
           .then(data => {
               if(data.dados.erros){
                   alert("Usuário e/ou senha inválidos");
               }else{
                   alert(data.dados.nome);
               }
           })
        });
    });

//Funções do Menu
function MenuShow() {
	let menuMobile = document.querrySelector('.mobile-menu');
	if (menuMobile.classList.contains('open')) {
		menuMobile.classList.remove('open');
		document.querrySelector('.icon').src = "imagens/menu_white_36dp.svg";
	}else{
		menuMobile.classList.add('open');
		document.querrySelector('.icon').src = "imagens/close_white_36dp.svg";	
	}
}
//Livros
window.onload = function(){

	var url="https://profrodolfo.com.br/biblioteca/livro.php";
	fetch(url)
	.then (resposta => {
		return resposta.json();
	})
	.then( function (json){
		var d = document.querySelector('.acervo');
		var texto = '';
		for(i = 0; i < json.lenght ; i++){
			texto+= "<br>" +json[i].titulo;
		}
		d.innerHTML += texto;
	})
	.catch();
}


