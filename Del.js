$(document).ready(function(){
    $("#img-design").click(function(){
        $("#img-design").hide();
        $(".des").show();
    });
    $(".des").click(function(){
        $(".des").slideDown().hide();
        $("#img-design").show();
    });
});

$(document).ready(function(){
    $("#img-dev").click(function(){
        $("#img-dev").hide();
        $(".dev").show();
    });
    $(".dev").click(function(){
        $(".dev").slideDown().hide();
        $("#img-dev").show();
    });
});

$(document).ready(function(){
    $("#img-prod").click(function(){
        $("#img-prod").hide();
        $(".pm").show();
    });
    $(".pm").click(function(){
        $(".pm").slideDown().hide();
        $("#img-prod").show();
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
    $("work3").mouseover(function(){
        $("port3").show();
    }).mouseOut(function(){
        $("port3").hide();
    });
});

$(document).ready(function(){
    $("work4").mouseover(function(){
        $("port4").show();
    }).mouseOut(function(){
        $("port4").hide();
    });
});

$(document).ready(function(){
    $("work5").mouseover(function(){
        $("port5").show();
    }).mouseOut(function(){
        $("port5").hide();
    });
});

$(document).ready(function(){
    $("work6").mouseover(function(){
        $("port6").show();
    }).mouseOut(function(){
        $("port6").hide();
    });
});

$(document).ready(function(){
    $("work7").mouseover(function(){
        $("port7").show();
    }).mouseOut(function(){
        $("port7").hide();
    });
});

$(document).ready(function(){
    $("work8").mouseover(function(){
        $("port8").show();
    }).mouseOut(function(){
        $("port8").hide();
    });
});

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let name =$("input#MERGE1").val();
        let email=$("input#MERGE0").val();
        let message=$("textarea#comment").val();
        if($("input#MERGE1").val() && $("input#MERGE0").val()){
            alert(name + ", we have received your message. Thank you for reaching out to us");
        }
        else {
            alert("Please enter your name and email");
        }
    });
});


