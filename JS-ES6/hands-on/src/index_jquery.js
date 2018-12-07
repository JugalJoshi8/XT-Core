$(function() {
    console.log('JQuery is ready!');
    console.log($('header').html());
    $('#newHearder').html($('header').html());
    $('.mypara').click(function() {
        $(this).addClass('bgcolor').html('welcome');
    })

    $('.add').click(function() {
        $('span').html(parseInt($('#no1').val()) + parseInt($('#no2').val()));
    })
})