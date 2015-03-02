var $form = $('.form');
var $list = $('.list')
var $input = $('.input');
var $li = $('<li>');


$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>').html($input.val());
    var $inputDl = $('<button class="close">X</button>');
    
    $inputDl.on('click', function () {
        $li.remove('li');
    });
    
    $list.on('click', 'li', function () {
        $(this).addClass('complete');
    });
    
    $li.append($inputDl);
    $list.prepend($li);
    $input.val('');
    
});