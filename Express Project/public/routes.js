//Incomplete node ToDo

$(".list").on("click", "span",function(event){
	//fade out element and parent element
	$(this).parent().fadeOut(500, function(){
		//the "this" here refers to the parent as well because .parent is called before the function
		$(this).parent().remove();
	});
	//stop the even in parent element(s) triggering
	event.stopPropagation();
});

$("#list1").on("click", "li", function(){
    $(this).toggleClass("completed");
});


//Jquery toDo below

//Line Through
$("#jToDo").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete toDo

$("#jToDo").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		//the "this" here refers to the parent as well because .parent is called before the function
		$(this).remove();
	});
	event.stopPropagation();
})

//Adding toDo (seperate from node.express)

$(".jInput").keypress(function(event){
	if(event.which === 13){
		let text = $(this).val();
		$(this).val("");
		$("#ul1").append("<li><span> X </span>" + text +"</li>")
	}
});

