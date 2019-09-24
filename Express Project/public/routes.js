

//Jquery toDo below


//default to right answer
let qOne = () =>{alert('correct! Dogs are superior!');}  
let qTwo = () =>{alert("correct! It's all of the above <3!");}  

$(".incorrect").on("click", function(){
    $(".correct").prop( "checked", true );
    $(".incorrect").prop( "checked", false);
    qOne()   
});

$(".incorrect2").on("click", function(){
    $(".correct2").prop( "checked", true );
    $(".incorrect2").prop( "checked", false);
    qTwo();
});

$(".incorrect3").on("click", function(){
    $(".correct3").prop( "checked", true );
    $(".incorrect3").prop( "checked", false);
    alert("Human are you crazy! It's 2 borks per day max!");
});
//when right answer is clicked
$(".correct").on("click", function(){
    qOne();
});

$(".correct2").on("click", function(){
    qTwo();
});

$(".correct3").on("click", function(){
    alert("Thats right... 'strictly' 2 borks per day ;)");
});






//Line Through
$(".jToDo").on("click", "li", function(){
    $(this).toggleClass("completed");
});


