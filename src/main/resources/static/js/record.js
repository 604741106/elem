

$(document).ready(function () {
    //$.ajax({
    //    url: "/record/save",
    //    //context: document.body,
    //    success: function(data){
    //
    //    }
    //});


    //$.ajax({
    //    url: "/record/typelist",
    //    context: document.body,
    //    success: function(data){
    //        $.each(data,function(){
    //            $("#type").append("<option value="+this.name+">"+this.name+"</option>");
    //        });
    //    }
    //});


    layui.use('table', function() {
        var laydate = layui.laydate;
        var table = layui.table;
        var form = layui.form;

        laydate.render({
            elem: '#date'
           ,type: 'datetime'//指定元素
            ,value: new Date()
        });


        var tableIns = table.render({
            elem: '#record'
            , height: 315
            , url: '/record/list' //数据接口
            , page: true //开启分页
            , cols: [[ //表头
                 {field: 'time', title: '时间',width:200,templet: '#titleTpl'}
                , {field: 'type', title: '类型',width:200}
                , {field: 'other', title: '备注'}
            ]]
        });

        form.render()
        form.render('select');

        $("#saveRecord").click(function(){
            var type = $("#type").val();
            var option = $("#other").val();
            var date = $("#date").val();
            $.ajax({
                url: "/record/save",
                data:{type:type,other:option,date:date},
                type:"post",
                context: document.body,
                scriptCharset: 'Utf-8',
                success: function(data){
                    if(data){
                        layer.msg("保存成功");
                        tableIns.reload();
                    }
                }
            });
        });
    });




});



function fmt(longTime){
    var date = new Date(longTime);
    if(date.getSeconds()<10){
        var seconds = "0"+date.getSeconds();
    }else{
        var seconds = date.getSeconds();
    }
    if(date.getMinutes()<10){
        var minutes = "0"+date.getMinutes();
    }else{
        var minutes = date.getMinutes();
    }
    if(date.getHours()<10){
        var hours =  "0"+date.getHours();
    }else{
        var hours = date.getHours();
    }
    if(date.getDate()<10){
        var day = "0"+date.getDate();
    }else{
        var day =date.getDate();
    }
    if(date.getMonth()+1<10){
        var month = "0"+(date.getMonth()+1);
    }else{
        var month = (date.getMonth()+1);
    }


    var string = date.getFullYear()+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;

    return string;
}