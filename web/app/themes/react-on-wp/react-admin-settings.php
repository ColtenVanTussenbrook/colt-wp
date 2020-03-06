<?php 

//options page specific to React on WP
function register_react_wp_settings() {
  add_menu_page('React On WP Settings', 'React On WP Settings', 'manage_options', 'settings-react-wp', 'react_wp_api_options_page');
}
add_action('admin_menu', 'register_react_wp_settings');

function react_wp_api_settings_init(  ) {
  register_setting( 'settings-react-wp', 'react_wp_api_settings' );
  add_settings_section(
      'react_wp_api_section',
      __( 'Design Options', 'wordpress' ),
      'react_wp_api_settings_section_callback',
      'settings-react-wp'
  );

  add_settings_field(
      'primary_color_field',
      __( 'Primary Color', 'wordpress' ),
      'primary_color_field_render',
      'settings-react-wp',
      'react_wp_api_section'
  );

  add_settings_field(
    'secondary_color_field',
    __( 'Secondary Color', 'wordpress' ),
    'secondary_color_field_render',
    'settings-react-wp',
    'react_wp_api_section'
);
}
add_action('admin_init', 'react_wp_api_settings_init');

function react_wp_api_settings_section_callback(  ) {
  echo __( 'Sitewide colors, fonts, text size, etc.', 'wordpress' );
}

function primary_color_field_render(  ) {
  $options = get_option( 'react_wp_api_settings' );
  ?>
  
  <input class='color-field' data-default-color="#000000" name='react_wp_api_settings[primary_color_field]' value='<?php echo $options['primary_color_field']; ?>'>
  <?php
}

function secondary_color_field_render(  ) {
  $options = get_option( 'react_wp_api_settings' );
  ?>
  
  <input class='color-field' data-default-color="#ffffff" name='react_wp_api_settings[secondary_color_field]' value='<?php echo $options['secondary_color_field']; ?>'>
  <?php
}

function react_wp_api_options_page(  ) {
  ?>
  <form action='options.php' method='post'>

      <h2>React Settings API Admin Page</h2>

      <?php
      settings_fields( 'settings-react-wp' );
      do_settings_sections( 'settings-react-wp' );
      submit_button();
      ?>

  </form>
  <?php
}
?>