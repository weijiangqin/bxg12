define(["jquery", "template", "cookie"], function($, template){
	$(function(){
		//判断用户是否登录了，如果没有登录，就给他跳回到登录页

		//判断用户是否登录的依据，最好是通过向后台发送请求，问后台用户是否登录，这才是最严谨的判断登录的方式，当前项目中没有提供接口，所以不能这么做

		//我们就使用PHPSESSID来作为判断用户是否登录的依据即可
		//如果在cookie有PHPSESSID，那么就证明用户已经登录了
		//如果在cookie没有PHPSESSID，那么就证明用户没有登录了

		//如果不在登录页才执行下面的内容
		if(location.pathname != "/dashboard/login"){
			if(!$.cookie("PHPSESSID")){
				location.href = "/dashboard/login";
			}


			//1. 从cookie中获取用户存储好的用户信息
			var userinfo = JSON.parse($.cookie("userinfo"));
			// console.log(userinfo);
			//2. 使用模板引擎将对象渲染到用户信息的模板中去
			var html = template("profile_tpl", userinfo);
			$("#profile").html(html);
		}
    //退出登录功能
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
    //侧边栏课程管理切换
    $(".navs>ul>li>ul").parent().click(function () {
    //alert(1);
      $(this).children('ul').stop().slideToggle();
    })
  //让当前链接菜单高亮
$('.navs a').each(function (index,ele) {
  //console.log(ele);ele为dom元素
  //console.log($(ele).attr('href'));
  //console.log(location.pathname);
  if($(ele).attr('href') == location.pathname ){
    $(ele).addClass('active');
  }
})
	})
})