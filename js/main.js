$(document).ready(function() {
    $("#main").load("home.html");

/* This gets the page ready before it begins its instruction (function).'#main' is the assigned selector.
So, when the page loads, it gets the page 'home.html' and loads it into a div with the id of 'main' */
})
$(function () {  
    $("#home").click(function () {  
        $("#main").load("home.html"); 
       });  
});

    $(function () {  
    $("#about").click(function () {  
        $("#main").load("about.html");  
    });  
});

    $(function () {  
    $("#ival").click(function () {  
        $("#main").load("/blog/identity-values.html");  
    });  
});

$(function () {  
    $("#lplan").click(function () {  
        $("#main").load("/blog/learning-plan.html");  
    });  
});

$(function () {  
    $("#ei").click(function () {  
        $("#main").load("/blog/emotional-intelligence.html");  
    });  
});

$(function () {  
    $("#np").click(function () {  
        $("#main").load("/blog/neuroplasticity.html");  
    });  
});

$(function () {  
    $("#ps").click(function () {  
        $("#main").load("/blog/problem-solving.html");  
    });  
});

$(function () {  
    $("#fr").click(function () {  
        $("#main").load("/blog/foundations-reflection.html");  
    });  
});


$(function () {  
    $("#ghub").click(function () {  
        $("#main").load("/blog/git-github.html");  
    });  
});

$(function () {  
    $("#hcss").click(function () {  
        $("#main").load("/blog/html-css.html");  
    });  
});

$(function () {  
    $("#js").click(function () {  
        $("#main").load("/blog/javascript-dom.html");  
    });  
});

$(function () {  
    $("#s1").click(function () {  
        $("#main").load("/blog/sprint-1.html");  
    });  
});

$(function () {  
    $("#s2").click(function () {  
        $("#main").load("/blog/sprint-2.html");  
    });  
});

$(function () {  
    $("#s3").click(function () {  
        $("#main").load("/blog/sprint-3.html");  
    });  
});

$(function () {  
    $("#s4").click(function () {  
        $("#main").load("/blog/sprint-4.html");  
    });  
});

$(function () {  
    $("#s5").click(function () {  
        $("#main").load("/blog/sprint-5.html");  
    });  
});


/* These selectors are waiting for a click instruction (function) from an href with its unique id (#).
When the  href is clicked, it gets the page 'page.html' and loads it into a div with the id of 'main' */



