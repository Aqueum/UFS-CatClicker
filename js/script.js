/**
 * Created by martin on 23/06/2017.
 */
var catclicks = 0;
var $clicks = $('#clicks');
$('#cat').click(function() {
    //the element has been clicked... do stuff here
    catclicks++;
    $clicks.text('clicked ' + catclicks + ' times')
});