


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

function loadCSS(file) {
    var link = document.createElement("link");
    link.href = chrome.extension.getURL(file + '.css');
    link.id = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  
  function unloadCSS(file) {
    var cssNode = document.getElementById(file);
    cssNode && cssNode.parentNode.removeChild(cssNode);
  }

  loadCSS('injected stylesheet');
  unloadCSS('injected stylesheet');