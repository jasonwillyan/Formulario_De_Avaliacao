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
        alert($(this).parent().children('span').text());
        //Atribuir respotas ao input do id="respostab[i]"
    });

});