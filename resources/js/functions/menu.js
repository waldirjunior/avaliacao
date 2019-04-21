document.addEventListener("touchstart", function () {
}, false);

$(function () {
    $('#wsnavtoggle').click(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
    $('.overlapblackbg').click(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
    $('.wsmenu-list > li').has('.wsmenu-submenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $('.wsmenu-list > li').has('.wsshoptabing').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $('.wsmenu-list > li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $('.wsmenu-click, .wsmenu-list > li > a').click(function () {
        $(this).toggleClass('ws-activearrow').parent().siblings().children().toggleClass('ws-activearrow');
        $(".wsmenu-submenu, .megamenu").not($(this).siblings('.wsmenu-submenu, .megamenu')).slideUp('slow');
        $(this).siblings('.wsmenu-submenu').slideToggle('slow');
        $(this).siblings('.megamenu').slideToggle('slow');

    });
    $('.wsmenu').swipeleft(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });

    let opcaoMenu = () => {
        if($('.wsmenu-list').length){
            $.each($('.wsmenu-list > li'), function(index, elem) {
                if(index == 5)
                    $('<li class="mais-opcoes"><a href="#" class="item" title="#">MAIS CATEGORIAS</a></li>').insertAfter(this);
                if(index > 5) 
                    $(this).addClass('menu-opc hideme');
            });
        }
    }
    opcaoMenu();

    $('.mais-opcoes').click(function(){
        $('.menu-opc').toggleClass('hideme');
    });

});