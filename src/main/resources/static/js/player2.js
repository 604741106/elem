$(document).ready(function(){
    $.ajax({
        url: "/mp4/list2",
        context: document.body,
        success: function (data) {
            for(var key in data){
                var path = data[key].slice(data[key].indexOf("\cache")+6);
                $("body").append("<div> <a href='/player/"+path.replace(/\\/g,"/") +"'>"+ key+"</a></div>");
            }


        }
    });
});
