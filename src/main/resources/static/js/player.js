$(document).ready(function(){
    $.ajax({
        url: "/mp4/list",
        context: document.body,
        success: function (data) {
            for(var key in data){
                var path = data[key].slice(data[key].indexOf("\github")+7);
                $("body").append("<div> <a href='/player/"+path.replace(/\\/g,"/") +"'>"+ key+"</a></div>");
            }


        }
    });
});
