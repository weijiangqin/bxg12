/**
 * Created by Administrator on 2017/9/12.
 */
define(['jquery', 'template', 'bootstrap'], function ($, template) {
  //�教师列表加载�����
  $.ajax({
    url: '/api/teacher',
    success: function (data) {
      if (data.code == 200) {
        //console.log(data);
        var html = template('teacher-list-tpl', data);
        $('#teacher_list_tbody').html(html);
      }
    }
  });
  //  教师信息查看
  $('#teacher_list_tbody').on('click', '.teacher-info', function () {
    //alert(2);
    var id = $(this).parent().data('id');
    $.ajax({
      url: '/api/teacher/view',
      data: {
        tc_id: id
      },
      success: function (data) {
        if (data.code == 200) {
          var html = template('teacher-info-tpl', data.result);
          $('#teacherModal > .modal-dialog').html(html);
          $('#teacherModal').modal('show');
        }
      }
    })

  })

//�教师信息注销与启用按钮��
  $('#teacher_list_tbody').on('click', '.btn-status', function () {
    //alert(2);
    var id = $(this).parent().data('id');
    var status = $(this).data('status');
    var that = $(this);
    $.ajax({
      url: '/api/teacher/handle',
      data: {
        tc_id: id,
        tc_status: status
      },
      success: function (data) {
        if (data.code == 200) {
          //console.log(data);
          //console.log(that);

          if (data.result.tc_status == 0) {
            //tc_status==0  已启用
            //按钮应该是注销按钮
            that.removeClass('btn-success').addClass('btn-warning').text('注 销');
          }
          else {
            //tc_status==1  已注销
            //按钮应该是启用按钮� ��
            that.removeClass('btn-warning').addClass('btn-success').text('启 用');
          }
          //这里面的status是该a标签的自定义行内样式
          that.data("status", data.result.tc_status);
        }
      }

    })
  })


})