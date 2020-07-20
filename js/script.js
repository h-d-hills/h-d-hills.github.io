let isVisible = false;
let isClicked = false;

$('#slide-down').click(function(){
    isClicked = true;
    if(isVisible){
        $('#hidden-content').slideUp()
        isVisible = false;
    }else{
        $('#hidden-content').slideDown();
        isVisible = true;
    }
    if(isClicked){
        document.getElementById('slide-down').innerHTML='<h2>additional statistics</h2>';
    }
});