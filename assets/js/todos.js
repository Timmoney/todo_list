// Check off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
	// using call back function to avoid the immediate remove
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// to avoid the propagation to its parent element
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab input 
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});