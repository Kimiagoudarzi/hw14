$(document).ready(function(){
    $("#btn-1").click(function(){
      $("#div-1").text($("form").serialize());
    });
});

