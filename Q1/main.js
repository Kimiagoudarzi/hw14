const pink1 = "#FFC0CB";
const purple1 = "#D6A2E8";

// click

$(".list-group li").css({"background-color": pink1})
.click(function(){
    $(this).css({"background-color": purple1});
});


// HOVER

// $(".list-group li").css({"background-color": pink1})
// $(".list-group li").hover(function(){
//     $(this).css("background-color", purple1);
//     }, function(){
//         $(".list-group li").css({"background-color": pink1});
// });