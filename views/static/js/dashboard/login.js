/**
 * Created by Administrator on 2017/9/11.
 */
define(['jquery','cookie'],function ($) {
  $(function () {
    $('form').submit(function () {
      var username = $('#tc_name').val();
      var pass = $('#tc_pass').val();
      if (username == '') {
        alert('�������û���');
        return false;
      }
      if (pass == '') {
        alert('����������');
        return false;
      }

//           2.Ҫ�����ݷ��͸���̨���ú�̨������֤
//           2.1���ݽӿڵ�ַ http://studyit.com/api/login
//           2.2����ķ�ʽ��ʲô  post
//           2.3����Ĳ�����ʲô tc_name tc_pass
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