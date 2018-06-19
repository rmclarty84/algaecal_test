function update_jquery() {
  wp_deregister_script('jquery');
  wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.jsc', false, '3.2.1');
  wp_enqueue_script('jquery');
}

add_action('wp_enqueue_scripts', 'update_jquery');
