/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/
google.load("jquery", "1.3.1");
google.setOnLoadCallback(function()
{
	// Detect browser resize and re-calculate
	$(window).bind("resize", calculateContent);
	
	// Calculate the content on load
	calculateContent();
});

/**
* Function that calculates on how the content should behave.
**/
function calculateContent( e ) {
	// Show all items in case they were hidden
	$("#content img").show();
	
	// Since we know the width each image takes (100px + 40px + 40px + 2px + 2px = 184px)
	// We can calculate how many rows are showed
	var imageWidth = 184;
	var contentAreaWidth = $("#content").width();
	var itemsPerRow = Math.floor(contentAreaWidth / imageWidth);
	
	// Retrieve the total number of images
	var totalNrOfItems = $("#content img").length;
	
	// Calculate how many full rows can be showed
	var fullRows = Math.floor(totalNrOfItems / itemsPerRow);
	
	// Calculate how many images fell off
	var itemsToHide = totalNrOfItems - fullRows * itemsPerRow;
	
	// Hide the images by counting backward (from the last item)
	for(var i = totalNrOfItems; i > totalNrOfItems - itemsToHide; i--) {
		// The "eq()" is zero-based, we'll need to substract one
		var remover = i - 1;
		$("#content img:eq("+remover+")").hide();
	}
	
	// Set debug information
	debug(itemsPerRow, itemsToHide);
}


/**
* Show debug information
**/
function debug(nritems, hidden) {
	$("#debug").html(
		"<p>Items per row: <strong>"+ nritems +"</strong>. Hidden images: <strong>"+ hidden +"</strong>.</p>"
	);
}