
    var page = $("#page").val();
    getMv(page);

    $("#upPage").click(function(){
        $("#page").val( $("#page").val()/1-1);
        var page = $("#page").val();
        getMv(page);
    });
    $("#downPage").click(function(){
        $("#page").val( $("#page").val()/1+1);
        var page = $("#page").val();
        getMv(page);
    });

    function getMv(page){
        $("#index").html("");
        $.ajax({
            url: "/mv/page?page="+page,
            context: document.body,
            success: function(data){
                for(i=0;i<data.length;i++){
                    var imgs = data[i].img.split(",");
                    $("#index").append(
                        "<div id="+data[i].id+">" +
                        "<div class='name'><h4>"+data[i].id+":"+data[i].name+"</h4></div>" +
                        "<div></div>" +
                        "<a target='_blank' class='down' href=http://www.viidii.info/?http://www______rmdown______com/link______php?hash="+data[i].url.replace(/'/g,"")+"&z>点击下载</a>" +
                        "</div>"+
                        "</br>"
                    );
                    $("#index").children("a").attr("href",'www.rmdown.com/link.php?hash=?hash='+data[i].url.replace(/'/g,"/").replace(/'/g,"/")+'&z');
                    for(f=0;f<imgs.length;f++){
                        $("#"+data[i].id).children(".down").before(
                            "<img src='"+imgs[f]+"' class='img'>") ;
                    }
                }
            }
        });
    }

    //http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4
    //http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4&z
    //http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4
    //http://www.viidii.info/?http://www______rmdown______com/link______php?hash='173c54fdf8c27825b3b529a0999ff603860ded5d7a4'
