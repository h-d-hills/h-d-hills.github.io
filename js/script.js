let isVisible = false;
let isClicked = false;

$('#slide-down').click(function(){
    document.getElementById('contact').style.paddingTop='4em';
    document.getElementById('slide-down').innerHTML='<h2>additional statistics</h2>';
    isClicked = true;
    if(isVisible){
        $('#hidden-content').slideUp()
        isVisible = false;
    }else{
        $('#hidden-content').slideDown();
        isVisible = true;
    }
});