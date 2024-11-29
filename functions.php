function enqueue_custom_cursor_script() {
    wp_enqueue_script(
        'custom-cursor',
        get_stylesheet_directory_uri() . '/js/custom-cursor.js',
        array('jquery'),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'enqueue_custom_cursor_script');