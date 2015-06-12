

$(document).ready( function() {

    var namespace = 'document';
    $(namespace).on('click', '.injax-open', function () {
        $(this).closest('.injax-item').find('.injax-view').hide();
        $(this).closest('.injax-item').find('.injax-open').hide();
        $(this).closest('.injax-item').find('.injax-edit').show();
        $(this).closest('.injax-item').find('.injax-close').show();
        $(this).closest('.injax-item').find('.injax-save').show();
    });

});