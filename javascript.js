//scroll para o inicio e fim da página

$(document).ready(function(){

    var btntop = $('#top');
    var btnbase = $('#base');
    var scroll = '';
    localStorage.clear();
    
    $('.btnNavegacao').click(function(){
        var btnId = $(this).attr('id');
        console.log(btnId);
    
        if(btnId == "cima"){
            scroll = btntop;
        }else if(btnId == "baixo"){
            scroll = btnbase;
        }
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scroll).offset().top
        }, 2000);

    });
    
    $('#irAA').click(function(){
        localStorage.setItem("nomecompleto", $('#idnomecompleto').val());
        localStorage.setItem("email", $('#idemail').val());
        localStorage.setItem("conteudo", $('#idnomeconteudo').val());
        localStorage.setItem("url", $('#idurl').val());
    });

    $('.classbtt').click(function(){
        var resposta = $(this).parent().children('span').text(); 
		var inputId = "#resposta" + $(this).attr("name");
		$(inputId).val(resposta);
    });
	
	$('#finalizar').click(function(){
        var respostas = $(".resposta");
		var contemNao = false;
		for(var i =0; i < respostas.length; i++) {
			if(respostas[i].value == "Não") {
				contemNao = true;
				break;
			}
		}
		if(contemNao) {
			localStorage.setItem("resultado", " Reprovado");
		} else {
			localStorage.setItem("resultado", " Aprovado");
		}
    });
	
	includeHTML();

});

function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute("w3-include-html");
		if (file) {
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("w3-include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			/* Exit the function: */
			return;
		}
	}
}