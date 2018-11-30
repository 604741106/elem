function addNewTab(id,name,url){
    var title = $(".layui-tab-title").children("li");
    var flag = true;
    for(i = 0;i<title.length;i++){
        if(title.eq(i).attr("id")==id){
            flag = false;
        }
        title.eq(i).attr("class","");
    }if(flag){
        $(".layui-tab-title").append("<li class='layui-this' id='title"+id+"'>"+name+"</li>");
        $(".layui-tab-content.layui-show").attr("class","layui-tab-content");
        $(".layui-tab-content").append("<div class='layui-tab-item layui-show' id='content'+"+id+"><iframe src='"+url+"'></iframe></div>");
    }else{
        $(".layui-tab-title").children(".layui-this").attr("class","");
        $("#title"+id).attr("class","layui-this");
        $("#content"+id).children("iframe").attr("scr",url);
    }
}

$(document).ready(function () {
    $.ajax({
        url: "/menu/menuList",
        //context: document.body,
        success: function(data){
            var menuList = data;
            var parentMenu = new Array();
            var childMenu  = new Array();
            for(i = 0;i<menuList.length;i++){
                if(menuList[i].parentId == 0){
                    parentMenu.push(menuList[i]);
                }else{
                    childMenu.push(menuList[i]);
                }
            }
            addParentM(parentMenu);
            addChildM(childMenu);
        }
    });
});

function addParentM(parentMenu){
    for(i = 0;i<parentMenu.length;i++){
        var name = parentMenu[i].name;
        var id = parentMenu[i].id;
        $(".layui-nav.layui-nav-tree").append(
            "<li class='layui-nav-item' id='"+id+"'>"+
            "<a href='javascript:;'>"+name+"<span class='layui-nav-more'></span></a>"+
            "<dl class='layui-nav-child'>"+
            "</dl>"+
            "</li>");
    }

}

function addChildM(childMenu){
    for(i = 0;i<childMenu.length;i++){
        var name = childMenu[i].name;
        var id = childMenu[i].id;
        var parentId = childMenu[i].parentId;
        $("#"+parentId).children("dl").append(
            "<dd id='"+id+"'"+
            "<a href='javascript:;'> "+name+"</a>"+
            "</dd>"
        )



    }
}