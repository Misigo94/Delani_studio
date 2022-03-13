$(document).ready(function(){
    $("#img-design").click(function(){
        $("p").slideUp(1000).hide();
        $("design").show();
    });
    $("img-design").click(function(){
        $("img-design").slideDown().hide();
        $("design").show();
    });
});

$(document).ready(function(){
    $("img-dev").click(function(){
        $("p").slideDown().hide();
        $("dev").show();
    });
    $("img-dev").click(function(){
        $("")
    })
});
    
