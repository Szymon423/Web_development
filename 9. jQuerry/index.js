$("button").html("<em>white</em>");

$("h1").addClass("big-title");

// alert($("h1").hasClass("big-title"));

// alert($("h1").attr("class"));

// obsługa kliknięcia 
$("button").click(function () {
    $("h1").slideUp().slideDown();
    
});

$("h1").on("mouseover", function (event) {
    $("h1").text("hello");
    
});
