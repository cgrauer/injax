$(document).ready( function() {

    var namespace = 'body';

    $(namespace).on('click', '.injax-button-edit', function () {
        $(this).closest('.injax-item').find('.injax-area-view, .injax-button-edit').hide();
        $(this).closest('.injax-item').find('.injax-area-edit, .injax-button-view, .injax-button-save').show();
    });

    $(namespace).on('click', '.injax-button-view, .injax-button-save, .injax-button-delete', function () {
        $(this).closest('.injax-item').find('.injax-area-view, .injax-button-edit').show();
        $(this).closest('.injax-item').find('.injax-area-edit, .injax-button-view, .injax-button-save').hide();
    });

});