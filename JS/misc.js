$("#user").on('kyepress',function(e){
    //e.preventDefault();
    var user = $(this).val();
    var dataString = 'user=' + user + '&pass=' + pass;

        $.ajax({
            type: 'POST',
            url: 'checkpass.php',
            data: dataString,
            cache: false,
            succes: function(available){
                var msg = null;
                if(available == "false") {
                    // msg = "<font color='red'>Wrong Password</font>";
                    $('#usererr').html('<span class="alert alert-danger">username not available</span>');
                }
                else{
                    // msg = "<font color='green'>Correct Password</font>";
                    $('#usererr').html('<span class="alert alert-danger">username available</span>');

                }
                }
            }
        )
    })
