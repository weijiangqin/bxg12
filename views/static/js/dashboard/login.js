/**
 * Created by Administrator on 2017/9/11.
 */
define(['jquery','cookie'],function ($) {
  $(function () {
    $('form').submit(function () {
      var username = $('#tc_name').val();
      var pass = $('#tc_pass').val();
      if (username == '') {
        alert('请输入用户名');
        return false;
      }
      if (pass == '') {
        alert('请输入密码');
        return false;
      }

//           2.要将数据发送给后台，让后台进行验证
//           2.1数据接口地址 http://studyit.com/api/login
//           2.2请求的方式是什么  post
//           2.3请求的参数是什么 tc_name tc_pass
      $.ajax({
        url: 'http://studyit.com/api/login',
        type: 'post',
        data: {
          tc_name: username,
          tc_pass: pass
        },
        success: function (data) {
          console.log(data);
          if (data.code == 200) {
            $.cookie('userinfo', JSON.stringify(data.result), {expires: 365, path: '/'})
            window.location.href = '/';
          }
        }
      })
      return false;
    })
  })

})