/* 
 * Jquery Toggle Button Extension
 *
 * @author Oliver Green <green2go@gmail.com>
 * @category JQuery
 * @license Creative Commons Attribution-ShareAlike 3.0 Unported License. 
 * (http://creativecommons.org/licenses/by-sa/3.0/)
 * Date: $Date: 2011-02-27 09:24:24 +0000 (Sun, 27 Feb 2011) $
 * 
 */

jQuery.fn.toggleButton = function(options) {
    
    var rootSelector = $(this).find('.toggleBtn button');
    
    /* Ability to override button holder class */
    if(options && options.buttonSelector) {
        rootSelector = $(this).find(options.buttonSelector);
    }
    
    var unselectButton = function(button){
	
	/* Remove 'toggled' CSS class */
	button.removeClass('toggled');

	/* Un-check the coresponding checkbox */
	button.parent().find("input[type=checkbox], input[type=radio]").each(function(){
	    $(this).removeAttr("checked");
	});
	    
    }
	    
    var selectButton = function(button) {
	
	/* Add 'toggled' CSS class */
	button.addClass('toggled');

	/* Check the coresponding checkbox */
	button.parent().find("input[type=checkbox], input[type=radio]").each(function(){
	    
            
            $(this).attr("checked","checked");
	});
	
    }
    
    var uncheckAll = function() {
        rootSelector.find("input[type=option]").each(function(){
            $(this).removeAttr("checked");
        });
    }
    
    var updateButtonFromCheckbox = function(checkbox) {
	
	var button = checkbox.parent().find("button");
	
	if(checkbox.attr("checked") == "checked"){

	    selectButton(button);

	} else {

	    unselectButton(button);

	}
	
    }
    

    /* Find each instance of button class */
    $(rootSelector).each(function(){
                        
	var button = $(this);

	/* Hide the checkbox */
	button.parent().find("input[type=checkbox], input[type=radio]").each(function(){
	    $(this).addClass("hidden");
	    $(this).attr("tabindex","-1");
	});

	/* Hide the label */
	button.parent().find("label").each(function(){
	    $(this).addClass("hidden");
	});

	/* Show our button */
	button.css("display","block");                        

	/* Attach checkbox handler & whether checkbox is checked */
	button.parent().find('input[type=checkbox], input[type=radio]').each(function(){

	    var checkbox = $(this);

	    /* Set the initial button state */
	    updateButtonFromCheckbox(checkbox);

	    /* Attach handler */
	    $(this).change(function(){

		updateButtonFromCheckbox(checkbox);

	    });

	});

	/* Attach button click handler */
	button.click(function(){
	    
	    if(options && options.selectionMode == "single") {
		
		/* Deselect all other buttons */
		$(rootSelector).each(function(){
		    if($(this) !== button) {

			unselectButton($(this));

		    }
		});
	    }

	    if(!$(this).hasClass('toggled')) {

		selectButton($(this));

	    } else {

		unselectButton($(this));

	    }
	    
	    
	    
	});
                        
    });
    
    return $(this);

};