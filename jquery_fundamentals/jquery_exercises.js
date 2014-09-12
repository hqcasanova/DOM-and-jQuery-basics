// SOLUTIONS GO BELOW EACH EXERCISE

// EXERCISE: Change Background

// Change the background color of '#target' by script. 
// Hint: you can use .css
/* $(function () {
 $('#target').css('background-color', 'red');
}); */

// EXERCISE: Change Parent

// Change the text in the span, a child of "#target"
// Hint: you can use .text
/* $(function () {
  $('#target span').text('span(CHANGED!)');
}); */


// EXERCISE: Create Clone

// Create a clone of the span in "#target" and position it under the origin.
// Hint: you can use .clone and .insertAfter
/* $(function () {
  $('#target span').clone().insertAfter('#target');
}); */

// EXERCISE: Use Filter

// Change background color of the second ".target"
// Hint: you can use .eq and .css
/* $(function () {
  $('.target').eq(1).css('background-color', 'red');
}); */

// EXERCISE: Disable Buttons

// Disable the button
// Hint: you will have to select the button and can use .attr
/* $(function () {
  $('.target button').attr('disabled', true);
}); */

// EXERCISE: Uncheck CheckBoxes

// Uncheck all checkboxes using jQuery
// Hint: you will have to select the input and can use .removeAttr
/* $(function () {
  $('.target input').removeAttr('checked');
}); */


// EXERCISE: Change Parent

// Move "#child" from "#parent1" to "#parent2"
// Hint: you can use .appendTo
/* $(function () {
  $('#child').appendTo('#parent2');
}); */

// EXERCISE: Select A Option in A Select Box

// Select the second option in the selectbox by script
// Hint: you will have to select the option and can use .eq and .attr
/* $(function() {
  $('#target option').eq(1).attr('selected', true);
}); */

// EXERCISE: Change Size

// Make "#target" double size
// Hint: you can use .css, .width and .height
/* $(function () {
  var $target = $('#target');
  $target.css({
    width: 2 * $target.width(),
    height: 2 * $target.height()
  })
}); */

// EXERCISE: Empty Elements
// Hint: you can use .empty
// Remove all children and text of "#target"
/* $(function () {
  $('#target').empty();
}); */

// EXERCISE: Delay
// Show Alert with 1 second delay (Use "setTimeout")
// Hint: you can use .setTimeout and alert
/* setTimeout(function () {alert('ALERT!')}, 1000); */

// EXERCISE: Count

// Show the number of children in an alert
// Hint: you can use .children, .length and alert or you could use .find, .size and alert. the alert should show 5
// FROM THE API: The .size() method is functionally equivalent to the .length property; however, the .length property 
// is preferred because it does not have the overhead of a function call.
/* $(function () {
  alert($('#target .child').length);
}); */

// EXERCISE: Animate

// Make "#target" double size with animation
// Hint: you can use .animate, .width, and .height
/* $(function () {
  var $target = $('#target');
  $target.animate({
     width: 2 * $target.width(),
     height: 2 * $target.height()
  }, 3000)
}); */

// EXERCISE: Alternate Color

// Make the list-box alternating. (Make odd options a different color)
// Hint: you can select the option and use .filter and .css
/* $(function () {
  $('#target option').filter(':even').css('background-color', 'red');
}); */

// EXERCISE: All But One
// Remove all children of "#target" but h2
// Hint: you can use .children, .not and .remove
/* $(function () {
  $('#target').children().not('h2').remove();
}); */

// EXERCISE: Without Children
// Remove all 'div' which has no child elements.
// Hint: you can use .not and .remove. Look closely at what options you can pass .not
/* $(function () {
  $('.target').not(':has(*)').remove();
}); */

