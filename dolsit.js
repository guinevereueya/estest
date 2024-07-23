function resizeHandler() {
    // Your resize logic here
}

// Attach the resize handler
$(window).on('resize', resizeHandler);

// Later, detach the resize handler
$(window).off('resize', resizeHandler);
