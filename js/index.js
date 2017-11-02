window.onload = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;

    window.addEventListener('onresize', function(){
        $(".banner").css({"width": width, "height": height});
    })

    $("li.i1").fadeIn().siblings().fadeOut();
    var timer = null, num = 1;
    timer = setInterval(function(){
        num++;
        if(num > 5){
            num = 1;
        }
        $("li.i" + num).fadeIn().siblings().fadeOut();
    },3000)

    $(".login-box .login").click(function(){
        var name = $(".login-box .name").val();
        var pass = $(".login-box .pass").val();

        console.log("111111", name, pass);
        var data = {name: name, pass: pass};
        console.log("222222", data);

        $.ajax({
            url: 'http://localhost:8080/main/finduser' ,  
            type: 'POST',  
            data: data,
            success: function (returndata) {  
                console.log(returndata);  
            },  
            error: function (returndata) {
                console.log("11111111",returndata);  
            } 
       });
    })

  };
 