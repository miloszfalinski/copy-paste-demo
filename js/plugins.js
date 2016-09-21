// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

var clipboard1 = new Clipboard('.code-1 .code-button-copy, .code-1 .code-try-again-copy');

clipboard1.on('success', function(e) {
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);

    // Clear selection and show success message
    e.clearSelection();
    $('.code-1').addClass('copy-success');
});

clipboard1.on('error', function(e) {
    // console.error('Action:', e.action);
    // console.error('Trigger:', e.trigger);

    // Show fallback instructions to copy code manually
    $('.code-1').addClass('copy-help');
    // Show ability to start the copy procedure again
    window.setTimeout(function() {
        $('.code-1').addClass('copy-after');
    }, 2000)
});

// Remove state when trying to copy again
$('.code-button-copy, .code-try-again-copy').on('click', function() {
    $(this).parents('.code').removeClass('copy-success copy-help copy-after');
});