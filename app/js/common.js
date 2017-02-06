$(document).ready(function() {
 	
 	$("#delivery").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: $(this).serialize()
		}).done(function() {
			alert("Ваше сообщение отправленно!");
			$("#delivery").trigger("reset");
			$("#delivery").find("input[type='submit']").hide();
		}); 
		return false; 
	});

	$(".means__item").not(":first").hide();
	$(".means__view").click(function() {
		$(".means__view").removeClass("active").eq($(this).index()).addClass("active");
		$(".means__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");  
});

    