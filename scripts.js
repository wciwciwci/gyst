//Login
function showPassword() {

    var key_attr = $('#key').attr('type');

    if(key_attr != 'text') {

        $('.checkbox').addClass('show');
        $('#key').attr('type', 'text');

    } else {

        $('.checkbox').removeClass('show');
        $('#key').attr('type', 'password');

    }

}
//fixed navigation bar
$('.navbar').affix({
    offset:{
        top: $('#header').outerHeight(),
        bottom: $('#header').outerHeight() - 200
    }
});

$('#sidemenu').affix({
    offset:{
        top: $('#header').outerHeight(),
        bottom: $('footer').outerHeight() + 50
    }
});
