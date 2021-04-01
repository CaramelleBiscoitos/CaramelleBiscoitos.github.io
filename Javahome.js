//BOTÃO DO MENU MOBILE
$(function() {
    $(".botaomenu").click(function(e) {
        $("nav ul.menumobile").toggle(); 
    });

    $(window).resize(function(e) {
        var largura = $(window).width();
        if(largura >= 701) {
            $("nav ul.menumobile").hide(); 
        } 
    });
});
