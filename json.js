$(document).ready(function(){
    $.getJSON("data.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#addresses").append(
                    value.title + "<br>" + 
                    value.address + "<br>" 
                );
            });
        }); 
    });
});
