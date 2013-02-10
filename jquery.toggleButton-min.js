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

jQuery.fn.toggleButton=function(c){var d=$(this).find(".toggleBtn button");if(c&&c.buttonSelector){d=$(this).find(c.buttonSelector)}var b=function(g){g.removeClass("toggled");g.parent().find("input[type=checkbox], input[type=radio]").each(function(){$(this).removeAttr("checked")})};var f=function(g){g.addClass("toggled");g.parent().find("input[type=checkbox], input[type=radio]").each(function(){$(this).attr("checked","checked")})};var a=function(){d.find("input[type=option]").each(function(){$(this).removeAttr("checked")})};var e=function(h){var g=h.parent().find("button");if(h.attr("checked")=="checked"){f(g)}else{b(g)}};$(d).each(function(){var g=$(this);g.parent().find("input[type=checkbox], input[type=radio]").each(function(){$(this).addClass("hidden");$(this).attr("tabindex","-1")});g.parent().find("label").each(function(){$(this).addClass("hidden")});g.css("display","block");g.parent().find("input[type=checkbox], input[type=radio]").each(function(){var h=$(this);e(h);$(this).change(function(){e(h)})});g.click(function(){if(c&&c.selectionMode=="single"){$(d).each(function(){if($(this)!==g){b($(this))}})}if(!$(this).hasClass("toggled")){f($(this))}else{b($(this))}})});return $(this)};