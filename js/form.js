$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/ostapukrainian@ukr.net",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val()
            },
            dataType: "json"
        })
        .done(function(){
          $('form').html('<h1>Thank you!</h1>');  
        });
    });
});