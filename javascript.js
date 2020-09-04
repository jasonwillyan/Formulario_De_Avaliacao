//scroll para o inicio e fim da página

$(document).ready(function(){

    var btntop = $('#top');
    var btnbase = $('#base');
    
    var scroll = '';
    
    $('.btnNavegacao').click(function() {
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

});