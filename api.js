$(document).ready(function(){
    var url =
    "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=twMlkk7F4uxftmTLvriMBvlcoxzfxhgx" 
    $.getJSON(url, function(data) {
    var html = "";
    $.each(data, function(){
        data.results.forEach(result => {
            html += "<h1 id= newsHeader>" + result.title+ "</h2>";
            html += "<h2 id = newsTitle>" + result.abstract+ "</h2>";
        });
    });
    $("#newsList").html(html);
    });
    });