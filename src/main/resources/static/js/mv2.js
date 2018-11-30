var page = $("#page").val();
getMv(page);

$("#upPage").click(function () {
    $("#page").val($("#page").val() / 1 - 1);
    var page = $("#page").val();

    getMv(page);
});
$("#downPage").click(function () {
    $("#page").val($("#page").val() / 1 + 1);
    var page = $("#page").val();
    getMv(page);
});


$("#upTitle").click(function () {
    var selectDiv = $(".layui-tab-title").find(".layui-this");
    var nextDiv = selectDiv.prev();
    if (nextDiv.length > 0) {
        nextDiv.click();
    } else {
        upPage.click();
    }


});
$("#downTitle").click(function () {
    var selectDiv = $(".layui-tab-title").find(".layui-this");
    var nextDiv = selectDiv.next();
    if (nextDiv.length > 0) {
        nextDiv.click();
    } else {
        downPage.click();
    }


    if (getNumToLast() == 5) {
        addContext();
        var liDiv = $(".layui-tab-title").find("li");

        for (var i = 1; i < 15; i++) {
            liDiv.eq(i).remove();
        }
        nextDiv.click();
    }
});


function getNumToLast() {
    var selectDiv = $(".layui-tab-title").find(".layui-this");

    for (var i = 1; i < 100; i++) {
        var nextDiv = selectDiv.next();
        if (nextDiv.length > 0) {
            selectDiv = nextDiv;
        } else {
            return i;
        }
    }
}

function getMv(page) {
    $(".layui-tab-title").html("");
    $(".layui-tab-content").html("");
    $.ajax({
        url: "/movie/list?pageNum=" + page + "&pageSize=" + 15,
        context: document.body,
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                if (data[i].imgUrl) {
                    var imgs = data[i].imgUrl.split(",");


                    //$("#index").append(

                    //$("#index").children("a").attr("href",'www.rmdown.com/link.php?hash=?hash='+data[i].url.replace(/'/g,"/").replace(/'/g,"/")+'&z');

                    $(".layui-tab-title").append("<li id=title" + data[i].id + ">" + data[i].id + "</li>");
                    $(".layui-tab-content").append("<div class='layui-tab-item' id='content" + data[i].id + "'>" +
                        "<div id=" + data[i].id + ">" +
                        "<div class='name'><h4>" + data[i].id + ":" + data[i].tittle + "</h4></div>" +
                        "<div></div>" +
                        "<a target='_blank' class='down' href=" + data[i].btUrl.replace(/'/g, "") + ">点击下载</a>" +
                        "</div>" +
                        "</br>" +
                        "</div>");
                    for (f = 0; f < imgs.length; f++) {
                        $("#" + data[i].id).children(".down").before(
                            "<img src='" + imgs[f] + "' class='img'>");
                    }
                }
                $("#title" + data[0].id).attr("class", "layui-this");
                $("#content" + data[0].id).attr("class", "layui-tab-item layui-show");
            }
        }
    });
}


function addContext() {
    $("#page").val($("#page").val() / 1 + 1);
    var page = $("#page").val();


    $.ajax({
        url: "/mv/page?page=" + page,
        context: document.body,
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                if (data[i].imgUrl) {
                    var imgs = data[i].imgUrl.split(",");
                    //$("#index").append(
                    //$("#index").children("a").attr("href",'www.rmdown.com/link.php?hash=?hash='+data[i].url.replace(/'/g,"/").replace(/'/g,"/")+'&z');
                    $(".layui-tab-title").append("<li id=title" + data[i].id + ">" + data[i].id + "</li>");
                    $(".layui-tab-content").append("<div class='layui-tab-item' id='content" + data[i].id + "'>" +
                        "<div id=" + data[i].id + ">" +
                        "<div class='name'><h4>" + data[i].id + ":" + data[i].tittle + "</h4></div>" +
                        "<div></div>" +
                        "<a target='_blank' class='down' href=" + data[i].btUrl.replace(/'/g, "") + ">点击下载</a>" +
                        "</div>" +
                        "</br>" +
                        "</div>");
                    for (f = 0; f < imgs.length; f++) {
                        $("#" + data[i].id).children(".down").before(
                            "<img src='" + imgs[f] + "' class='img'>");
                    }
                }
                $("#title" + data[0].id).attr("class", "layui-this");
                $("#content" + data[0].id).attr("class", "layui-tab-item layui-show");
            }
        }
    });
}

layui.use('element', function () {
    var element = layui.element;

    //一些事件监听
    element.on('tab', function (data) {
        $("html,body").animate({scrollTop: 0}, 500);
    });
});

//http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4
//http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4&z
//http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4
//http://www.viidii.info/?http://www______rmdown______com/link______php?hash='173c54fdf8c27825b3b529a0999ff603860ded5d7a4'
