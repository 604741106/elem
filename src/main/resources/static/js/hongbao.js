
$("#test").click(function(){

    getMv(hongbaoId);

});



var hongbaoId = "72EDF70040451FC48BA645FB5CA6FBFC";

var data = {
        device_id: "",
        group_sn: "29fdfd672db9fc57",
        hardware_id: "",
        method: "",
        phone: "18888888888",
        platform: "4",
        sign: "06c9163122064df724f87f2ff567c2d4",
        track_id: "",
        unionid: "fuck",
        weixin_avatar: "http://thirdqq.qlogo.cn/qqapp/101204453/" + hongbaoId + "/40",
        weixin_username: "6666"

    }
;

function getMv(page) {
    $.ajax({
        headers: {
            origin: "https://h5.ele.me",
            referer: "https://h5.ele.me/hongbao/",
            "user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36 Core/1.47.277.400 QQBrowser/9.4.7658.400}"
        },
        url: "https://h5.ele.me/restapi/marketing/promotion/weixin/" + page,
        type: "post",
        data:data,
        context: document.body,
        success: function (data) {
            console.log(data)
        }
    });
}

//http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4
//http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4&z
//http://www.viidii.info/?http://www______rmdown______com/link______php?hash=173c54fdf8c27825b3b529a0999ff603860ded5d7a4
//http://www.viidii.info/?http://www______rmdown______com/link______php?hash='173c54fdf8c27825b3b529a0999ff603860ded5d7a4'
