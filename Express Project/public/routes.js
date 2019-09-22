

//Jquery toDo below


//default to right answer
$(".incorrect").on("click", function(){
    $(".correct").prop( "checked", true );
    $(".incorrect").prop( "checked", false);
    alert("correct! Dogs are superior!");
});

$(".incorrect2").on("click", function(){
    $(".correct2").prop( "checked", true );
    $(".incorrect2").prop( "checked", false);
    alert("correct! It's all of the above <3!");
});

$(".incorrect3").on("click", function(){
    $(".correct3").prop( "checked", true );
    $(".incorrect3").prop( "checked", false);
    alert("Thats right... 'strictly' 2 borks per day");
});

//Line Through
$(".jToDo").on("click", "li", function(){
    $(this).toggleClass("completed");
});


