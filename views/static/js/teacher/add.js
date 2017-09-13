define(["jquery", "template", "utils", 'form'], function ($, template, utils) {

  //根据是否有id值来判断是编辑讲师还是添加讲师
  //console.log(utils.getQueryObj());
  var id = utils.getQueryObj().id;
  //console.log(id);

  if (id) {
//  编辑讲师
//    title:编辑讲师
//    btnText：保存
//    url："/api/teacher/update"
    $.ajax({
      url: '/api/teacher/edit',
      data: {
        tc_id: id
      },
      success: function (data) {
        if (data.code == 200) {
          data.result.title = '编辑讲师';
          data.result.btnText = '保存';
          data.result.url = '/api/teacher/update';
          var html = template('teacher-add-edit-tpl', data.result);
          $('.body,.teacher').html(html);
          $('#save-btn').click(function () {

            console.log($('form').serialize());
            $.ajax({
              url: '/api/teacher/update',
              type: 'post',
              data: $('form').serialize(),
              success: function (data) {
                if (data.code == 200) {
                  window.location.href = '/teacher/list';
                }
              }
            })

            return false;
          })
        }
      }
    })
  }
  else {
//  添加讲师
//    title:添加讲师
//    btnText：添加
//    url："/api/teacher/add"
    var obj={
      title:'添加讲师',
      btnText:'添加',
      url:'/api/teacher/add'
    };
    var html = template('teacher-add-edit-tpl', obj);
    $('.body,.teacher').html(html);
    $('#save-btn').click(function () {
      $.ajax({
        url:"/api/teacher/add",
        type:'post',
        data:$("form").serialize(),
        success:function (data) {
            if(data.code == 200){
              window.location.href='/teacher/list';
            }
        }
      })
      return false;
    })
  }
})






