


function mobile(){
    $('nav').hide();
    $('.btnNav').click(function(){
        $('nav').show();
    });

    $('.btnClose').click(function(){
        $('nav').hide();
    });


}//mobile


function pc(){

    $('nav').show();

}//pc

function common(){

}//common


function resp(){
    let winWid = $(window).width();
if(winWid < 1200){
    mobile();
}else{
    pc();
}
}

resp();
$(window).resize(resp);

common();