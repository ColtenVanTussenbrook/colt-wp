<?php

//enqueue styles/scripts
require 'enqueue-scripts.php';

//get all custom endpoints
require 'API/endpoints.php';

//theme specific settings
require 'react-admin-settings.php';

//set up menu for custom theme
function register_menu() {
	  register_nav_menu('header-menu',__( 'Header Menu' ));
  }
add_action( 'init', 'register_menu' );

//custom logo upload
function react_wp_custom_logo() {
  $defaults = array(
    'height'      => 150,
    'width'       => 150,
    'flex-height' => false,
    'flex-width'  => false,
    'header-text' => array( 'site-title', 'site-description' ),
  );
  add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'react_wp_custom_logo');

//disable gutenberg
add_filter('use_block_editor_for_post', '__return_false', 10);

?>

