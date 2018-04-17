
var dialog = {
    // 错误弹出层
    error: function(message) {
        layer.open({
            content:message,
            icon:2,
            title : '错误提示',
        });
    },

    //成功弹出层
    success : function(message,url) {
        layer.open({
            content : message,
            icon : 1,
            yes : function(){
                location.href=url;
            },
        });
    },

    // 确认弹出层
    confirm : function(message, url) {
        layer.open({
            content : message,
            icon:3,
            btn : ['是','否'],
            yes : function(){
                location.href=url;
            },
        });
    },

    //无需跳转到指定页面的确认弹出层
    toconfirm : function(message) {
        layer.open({
            content : message,
            icon:3,
            btn : ['确定'],
        });
    },
}

layui.use('form', function () {
    var form = layui.form;
    //监听提交
    form.on('submit(formDemo)', function (data) {
        params = data.field;
        
        submit($, params);
        return false;
        //layer.msg(JSON.stringify(data.field['username']));
        /* var username = JSON.stringify(data.field['userename']);
         var password = JSON.stringify(data.field['password']);
         var url = "/admin/check";
         var data = {'username':username,'password':password};*/
    });
});

function submit($, params) {
    var username = params['username'];
    var password = params['password'];
    // url 填写相应的控制器方法
    var url = "/admin.php?c=login&a=check";
    var data = { 'username': username, 'password': password };
    //这个是测试的
    //dialog.error('cuowu');
    dialog.success('ok','/');
    //执行异步请求 $.post
    /*$.post(url, data, function (result) {
        if (result.status == 0) {
            return dialog.error(result.message);
        }
        if (result.status == 1) {
            return dialog.success(result.message, '/admin.php?c=index');
        }

    }, 'JSON');
    */
}