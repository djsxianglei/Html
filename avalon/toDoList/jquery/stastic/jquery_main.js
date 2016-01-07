/**
 * Created by Administrator on 2016/1/6.
 */
(function(){
    var $todoForm = $('#todoForm');
    var $todoInput = $('#todoInput');
    var $todoList = $("#todoList");
    var $todoCount = $('#todoCount');
    function count(){
        var len = $todoList.children().length;
        $todoCount.html(len > 0 ? '一共有'+len+'个list':'');
    };
    $todoForm.submit(function(e){
        e.preventDefault();
        var input_value = $todoInput.val();
        $todoList.append('<li>'+input_value+'&nbsp;<a href="#" class="todoDelete">x</a></li>');
        $todoInput.val('');
        count();
    });
    $todoList.on('click','.todoDelete',function(){
        $(this).parent().remove();
        count();
    });
})();