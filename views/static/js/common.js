define(["jquery", "template", "cookie"], function($, template){
	$(function(){
		//�ж��û��Ƿ��¼�ˣ����û�е�¼���͸������ص���¼ҳ

		//�ж��û��Ƿ��¼�����ݣ������ͨ�����̨���������ʺ�̨�û��Ƿ��¼����������Ͻ����жϵ�¼�ķ�ʽ����ǰ��Ŀ��û���ṩ�ӿڣ����Բ�����ô��

		//���Ǿ�ʹ��PHPSESSID����Ϊ�ж��û��Ƿ��¼�����ݼ���
		//�����cookie��PHPSESSID����ô��֤���û��Ѿ���¼��
		//�����cookieû��PHPSESSID����ô��֤���û�û�е�¼��

		//������ڵ�¼ҳ��ִ�����������
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href = "/dashboard/login";
			}


			//1. ��cookie�л�ȡ�û��洢�õ��û���Ϣ
			var userinfo = JSON.parse($.cookie("userinfo"));
			// console.log(userinfo);
			//2. ʹ��ģ�����潫������Ⱦ���û���Ϣ��ģ����ȥ
			var html = template("profile_tpl", userinfo);
			$("#profile").html(html);
		}
    //�˳���¼����
		$('#logout_btn').click(function () {
      $.ajax({
        url:'/api/logout',
        type:'post',
        success:function (data) {
            //console.log(data);
          if(data.code==200){
             location.href='/dashboard/login'
          }
        }
      })
		})
	})
})