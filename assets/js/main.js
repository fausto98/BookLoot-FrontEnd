$(document).ready(function () {
	$("#sidebar").mCustomScrollbar({
		theme: "minimal"
	});
	
	$('#sidebarCollapse').on('click' , function () {
		$('#sidebar, #content').toggleClass('active');
	$ ('.collapse.in').toggleClass('in');
	$('a[aria-expande="true"]').attr('aria-expanded','false')
	});

});