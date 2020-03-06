<?php 
  function react_on_wp_enqueue_style() {
    //All styles should be in /react-wp/src/scss. Style.css in WP dir should be blank -- this enqueing is only to declare the theme
    wp_enqueue_style( 'style', 'style.css', false ); 
  }
  add_action('wp_enqueue_scripts', 'react_on_wp_enqueue_style');

  //color picker
  function enqueue_color_picker($hook_suffix) {       
      wp_enqueue_style( 'wp-color-picker' ); 
      wp_enqueue_script( 'custom-script-handle', get_template_directory_uri() . '/color-picker.js', array( 'wp-color-picker' ), null, true );
  }
  add_action('admin_enqueue_scripts', 'enqueue_color_picker');

?>