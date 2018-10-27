

$(document).ready(

function(){

    //$('body').css('filter', 'blur(2px)');

    $('body').append('<div id="brow-priv-mask"></div>');

    /*https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events*/
    $('#brow-priv-mask').css('pointer-events', 'none'); //works! nice!


    //$('#brow-priv-mask').css('background-image', 'url(./img/charcoal.jpg)');

    $('#brow-priv-mask').css('z-index', '10000');

    $('#brow-priv-mask').css('width', '100vw');
    $('#brow-priv-mask').css('height', '100vh');

    //$('#brow-priv-mask').css('filter', 'blur(1px)');

    //$('#brow-priv-mask').css('background-color', 'transparent');
    $('#brow-priv-mask').css('background-color', 'rgba(0, 0, 0, 0.80)');
    //$('#brow-priv-mask').css('background-color', 'rgb(0, 0, 0)');

    //$('#brow-priv-mask').css('opacity', '0.80');

    $('#brow-priv-mask').css('position', 'fixed');
    $('#brow-priv-mask').css('top', '0');
    //$('#brow-priv-mask').css('filter', 'blur(2px)');
    //$('#




    /*


    $('#brow-priv-mask').css('z-index', '1500');
    $('#brow-priv-mask-cursor').css('height', '100px');
    $('#brow-priv-mask-cursor').css('width', '100px');
    $('#brow-priv-mask-cursor').css('background-color', 'transparent');
    //$('#brow-priv-mask').css('opacity', '0');
    $('#brow-priv-mask-cursor').css('position', 'absolute');
    //$('#brow-priv-mask-cursor').css('top', '300px');
    $('#brow-priv-mask-cursor').css('filter', 'blur(-2px)');



    $(document).on('mousemove', function(event){
        console.log(event.clientY);

        $('#brow-priv-mask-cursor').css('top', event.clientY + 'px');

        $('#brow-priv-mask-cursor').css('left', event.clientX + 'px');

    });


    */


/*
    $('#brow-priv-mask').on('click', function(event){
        console.log(event.clientY);



    });
    */


}

);
