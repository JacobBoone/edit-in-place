$(document).on('ready', function() {
  
 ("<textarea </textarea>");

// want to Click to hide, edit content and replace previous text
// Hide old, create new, show new
	

	$("textarea").text("Hover 232over this text to enable edit in place demo. Click to edit.")




	$('.editable').click(function()	{
		$(this).hide()
		$(this).show("textarea")
		// $('.edittextarea').append('.editable')
		



		// $(this).toggle('<form>')//insert another identifier or target of a text editor
		



		// $(this).append("<input class='newtext', style='text'></input>")
		console.log('Oh My Glob!');

	});
});


// what to replace the other stuf with

// <textarea id="inplace-text" class="edit-textarea" row="2">Hover over this text to enable edit in place demo. Click to edit.</textarea>