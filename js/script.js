$(function () {
    
    $(document).ready(function() {
        $('select').niceSelect();
      });

    //Модальное окно
    $('#base').click(function(e){
        e.preventDefault();
        $('.plan__modal_base').css('display', 'block'); 
    });

    $('.close_mod').click(function () {
        $('.plan__modal_base').css('display', 'none');
    });

    $(document).mouseup(function (e) {
        var container = $(".plan__modal_base");
        if (container.has(e.target).length === 0){   
            container.hide();
        }
    });

    $('#optimal').click(function(e){
        e.preventDefault();
        $('.plan__modal_optimal').css('display', 'block');
    });

    $('.close_mod').click(function () {
        $('.plan__modal_optimal').css('display', 'none');
    });

    $(document).mouseup(function (e) {
        var container = $(".plan__modal_optimal");
        if (container.has(e.target).length === 0){    
            container.hide();
        }
    });

    $('#inclusive').click(function(e){
        e.preventDefault();
        $('.plan__modal_inclusive').css('display', 'block');  
    });

    $('.close_mod').click(function () {
        $('.plan__modal_inclusive').css('display', 'none');    
    });

    $(document).mouseup(function (e) {
        var container = $(".plan__modal_inclusive");
        if (container.has(e.target).length === 0){ 
            container.hide();
        }
    });

});