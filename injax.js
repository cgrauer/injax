$(document).ready( function() {
    alert("HOLLEBasdasdOLLE")
    var namespace = 'body';
    $(namespace).find('.injax-edit .injax-save .injax-close');
    $(namespace).on('click', '.injax-open', function () {
        alert("GUllideckel");
        $(this).closest('.injax-item').find('.injax-view').hide();
        $(this).closest('.injax-item').find('.injax-open').hide();
        $(this).closest('.injax-item').find('.injax-edit').show();
        $(this).closest('.injax-item').find('.injax-close').show();
        $(this).closest('.injax-item').find('.injax-save').show();
    });

});