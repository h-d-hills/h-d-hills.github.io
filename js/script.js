let isVisible = false

$('#slide-down').click(function(){
    if(isVisible){
        $('#hidden-content').slideUp()
        isVisible = false;
    }else{
        $('#hidden-content').slideDown();
        isVisible = true;
    }
});