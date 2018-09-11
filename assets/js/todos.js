// Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
	// using call back function to avoid the immediate remove
	$(this).parent().fadeOut(500, function(){
		// this here is li = span.parent()
		$(this).remove();
	});
	// to avoid the propagation to its parent element
	// the even bubbling is going from specific to general
	event.stopPropagation();
});

// control input text to check if "enter has been hit"
$("input[type='text']").keypress(function(event){
	// event key code 13 is enter
	if(event.which === 13){
		// grab input 
		var todoText = $(this).val();
		// remove the input 
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});