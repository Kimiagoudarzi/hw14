$(document).ready(function(){
    $("#btn-1").click(function(e){
        e.preventDefault();
        let value = $(".inputValue").val();
        $("ul").append(`<li class="item-1 w-50 text-dark bg-danger bg-opacity-50 fs-6 list-group-item mx-auto my-2 ">${value}</li>`);
    });

    $(".item-1").click(function(e){
        $(e.currentTarget).remove();
    })
});


