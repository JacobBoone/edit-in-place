$(document).on('ready', function() {
  
var edittextarea = ("<textarea id='inplace-text'>Hover over this text to enable edit in place demo. Click to edit.</textarea>");

// want to Click to hide, edit content and replace previous text
// Hide old, create new, show new
	$('.editable').click(function()	{
		$(this).hide()
		$('.edittextarea').append('.editable')
		



		// $(this).toggle('<form>')//insert another identifier or target of a text editor
		



		// $(this).append("<input class='newtext', style='text'></input>")
		console.log('Oh My Glob!');

	});
});


// what to replace the other stuf with

// <textarea id="inplace-text" class="edit-textarea" row="2">Hover over this text to enable edit in place demo. Click to edit.</textarea>