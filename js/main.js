var $form = $('form');
var $input = $('#to-do-item');
var $list = $('.list');


$form.on('submit', function (e) {
    e.preventDefault();
    
    var $li = $('<li>').html
    var inputValue = $input.val();
    var $input = $('<button class="close">X</button>');