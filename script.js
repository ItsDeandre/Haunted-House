// When button 1 and 3 is clicked, "Wrong!" should fade in //
$(".Door-1").click(function() {
    $(".wrong-1").fadeIn();
});
$(".Door-3").click(function() {
    $(".wrong-2").fadeIn();
});
// When button 2 is clicked all buttons and imgs should fade out //
$(".Door-2").click(function() {
    $(".buttons").fadeOut();
});
$(".Door-2").click(function() {
    $(".doors").fadeOut();
});
$(".Door-2").click(function() {
    $(".wrong-2").fadeOut();
    $(".wrong-1").fadeOut();
});
//Page 2//
$(".Door-2").click(function() {
    $(".hallway").fadeIn();
    $(".buttons2").fadeIn();
    $(".choice").fadeIn();
});
$(".left").hover(function() {
    $("body").css("background-color", "red");
    $(".dont").toggle();
});
$(".right").hover(function() {
    $("body").css("background-color", "lime");
    $(".choice").fadeOut();
    $(".do").toggle();
});
//IF PLAYER PICKS RIGHT//
$(".right").click(function() {
    $(".ending1").fadeIn();
    $(".hallway").fadeOut();
    $(".buttons2").fadeOut();
});
//IF PLAYER PICKS LEFT//
$(".left").click(function() {
    $(".ending2").fadeIn();
    $(".hallway").fadeOut();
    $(".buttons2").fadeOut();
});
$(".text2").hover(function() {
    $(".secret").fadeIn ();
});