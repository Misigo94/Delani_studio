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
        $("p").slideUp().hide();
        $("dev").show();
    });
    $("img-dev").click(function(){
        $("p").slideDown().hide();
        $("dev").show();
    });
});

$(document).ready(function(){
    $("img-prod").click(function(){
        $("p").slideUp().hide();
        $("product").show();
    });
    $("img-prod").click(function(){
        $("p").slideDown().hide();
        $("dev").show();
    });   
});

//Jquery for mouseover
$(document).ready(function(){
    $("work1").mouseover(function(){
        $("port1").show();
    }).mouseOut(function(){
        $("port1").hide();
    });
});

$(document).ready(function(){
    $("work3").click(function(){
        $("port3").show();
    }).mouseOut(function(){
        $("port3").hide();
    });
});

$(document).ready(function(){
    $("work4").click(function(){
        $("port4").show();
    }).mouseOut(function(){
        $("port4").hide();
    });
});

$(document).ready(function(){
    $("work5").click(function(){
        $("port5").show();
    }).mouseOut(function(){
        $("port5").hide();
    });
});

$(document).ready(function(){
    $("work6").click(function(){
        $("port6").show();
    }).mouseOut(function(){
        $("port6").hide();
    });
});

$(document).ready(function(){
    $("work7").click(function(){
        $("port7").show();
    }).mouseOut(function(){
        $("port7").hide();
    });
});

$(document).ready(function(){
    $("work8").click(function(){
        $("port8").show();
    }).mouseOut(function(){
        $("port").hide();
    });
});


