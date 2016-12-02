$(document).ready(function() {
	$(".fancy").fancybox({
		padding: 0
	});

	$(".input--phone").mask("+7 (999) 999-99-99");

	$("form").ajaxForm({
		url: "mail.php",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger("reset");
			$.fancybox("#success", {padding: 0});
		}
	});

});