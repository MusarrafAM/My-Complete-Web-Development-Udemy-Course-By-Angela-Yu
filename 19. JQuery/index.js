// selecting elements
$("h1")

// Manipulating Styles

// $("h1").css("color", "blue")



$("h1").addClass("red-big-title bg")
$("h1").removeClass("bg")


// Maniputating text
$("h1").text("Welcome")

// Manipulating text

$("a").attr("href", "https://www.youtube.com");

// Adding Event Listeners

$("h1").click(function () { 
    $("h1").css("color", "green")
});


// adding all buttons events
$("button").click(function () { 
    $("h1").css("color", "purple");

});

$(document).keypress(function (e) { 
    $("h1").text(e.key)
});

// $(document).on("keypress", function (e) { 
//     $("h1").text(e.key)
// });

$("h1").mouseover(function () { 
    $("h1").css("color", "grey")
});

$("h1").mouseleave(function () { 
    $("h1").css("color", "red")
});



// Animations Using jQuery
// $("button").on("click", function (){
//     $("h1").toggle();
// })


// $("button").on("click", function (){
//     $("h1").fadeToggle();
// })


// slideUp slideDown slideToggle
// $("button").on("click", function (){
//     $("h1").slideToggle();   
// })


// Custom Animations
// $("button").on("click", function () { 
//     $("h1").animate({ opacity: 0.5 })
//     $("h1").animate({ marginLeft: 100 })
//  })



// Chaining Animations
$("button").on("click", function () { 
    $("h1").slideUp().slideDown().animate({ marginLeft : 100, opacity:0.5 })
 })

