$(document).ready(function () {
    // $.ajax({
    //     url: "/elme/list",
    //     //context: document.body,
    //     success: function(data){
    //         if(data){
    //
    //         }
    //     }
    // });
    var websocket = null;
    //判断当前浏览器是否支持WebSocket
    var baseUrl = $("document").context.domain;
    if ('WebSocket' in window) {
        websocket = new WebSocket("ws://"+baseUrl+"/websocket");
    }
    else {
        alert('当前浏览器 Not support websocket')
    }

    //连接发生错误的回调方法
    websocket.onerror = function () {
        setMessageInnerHTML("WebSocket连接发生错误");
    };

    //连接成功建立的回调方法
    websocket.onopen = function () {
        setMessageInnerHTML("服务器连接成功");
    };

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
        closeWebSocket();
    };

    //关闭WebSocket连接
    function closeWebSocket() {
        websocket.close();
    }

    //接收到消息的回调方法
    websocket.onmessage = function (event) {
        if (event.data.length < 5) {
            $("#sessionId").val(event.data);
        }
        setMessageInnerHTML(event.data);
    };


    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML) {
        var headMessageJQ = $("#headMessage");
        var divDom = headMessageJQ.find("div");
        if (divDom.length >= 10) {
            headMessageJQ.find("div:first").remove();
        }
        headMessageJQ.append("<div>" + innerHTML + "</div>");

    }


    layui.use('table', function () {
        // var laydate = layui.laydate;
        var table = layui.table;
        // var form = layui.form;

        var tableIns = table.render({
            elem: '#userinfoTable'
            , height: 315
            , width: 830
            , url: '/elme/list' //数据接口
            , page: true //开启分页
            , cols: [[ //表头
                {field: 'qq', title: 'qq', width: 180, templet: '#titleTpl'}
                , {field: 'elemeKey', title: 'elemeKey', width: 300}
                , {field: 'openid', width: 320, title: 'openid'}
            ]]
        });


        // $("#saveRecord").click(function () {
        //     var data = $("#userInfo").serialize();
        //
        //     $.ajax({
        //         url: "/elme/save",
        //         data :data,
        //         context: document.body,
        //         success: function (data) {
        //             if (data) {
        //                 layer.msg("保存成功");
        //                 tableIns.reload();
        //             }
        //         }
        //     });
        // })

    });


    $("#getButtton").click(function () {
        $("#headMessage").empty();


        var data = $("#getBest").serialize();
        if (! $("#sessionId").val()) {
            layer.msg("服务器连接未成功");
        }
        $.ajax({
            url: "/elme/getbest",
            data: data,
            context: document.body,
            success: function (data) {
                if (data) {
                    layer.msg(data);
                }
            }
        });
    })
});
