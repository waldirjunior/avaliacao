$(function () {
    if($('.ui.card.produto').length){
        $.each($('.ui.card.produto'), function(){
            let valorBase = jQuery(this).find(".precoBase").text();
            valorBasex = valorBase.replace(/[^a-z0-9]/gi,'').replace(/\s/g,''); 
            if(valorBasex.length){
                let valorDesconto = jQuery(this).find(".preco").text();
                valorDesconto = parseInt(valorDesconto.match(/\d/g).join(''));
                valorBase = parseInt(valorBase.match(/\d/g).join(''));
                let nValor = ((valorDesconto * 100) / valorBase) - 100;
                jQuery(this).find(".porcentagem-view span").text(nValor.toFixed() + '% Off');
            }else{
                jQuery(this).find(".porcentagem-view").remove();
            }
        });
    }

});