<?php
/**
 * Administration page helper functions.
 *
 * @package aws-analytics
 */

namespace Altis\Accelerate\Admin;

use Altis;

/**
 * Setup admin functionality, eg: menus.
 *
 * @return void
 */
function setup() : void {
	add_action( 'admin_menu', __NAMESPACE__ . '\\register_admin_menu' );
}

/**
 * Add a wrapper for admin notices on custom admin pages.
 *
 * @return void
 */
function add_notices_wrapper() : void {
	// High priority so the opening div is before any notices.
	add_action( 'admin_notices', __NAMESPACE__ . '\\add_notices_wrapper_open', 0 );
	// Low priority so the closing div is after any notices.
	add_action( 'admin_notices', __NAMESPACE__ . '\\add_notices_wrapper_close', 999999 );
}

/**
 * Adds an opening div to wrap around notices in the Accelerate Dashboard.
 *
 * @return void
 */
function add_notices_wrapper_open() : void {
	echo '<div id="Altis_Dashboard__notices">';
}

/**
 * Adds a closing div to wrap around notices in the Accelerate Dashboard.
 *
 * @return void
 */
function add_notices_wrapper_close() {
	echo '</div>';
}

/**
 * Display Accelerate React apps.
 *
 * @return void
 */
function render_page() : void {
	require_once ABSPATH . 'wp-admin/admin-header.php';

	echo '<div id="altis-analytics-root">';

	if ( Altis\get_environment_type() === 'local' ) {
		echo "<p>Ensure you're running the Webpack server. You may also need to open the script URL directly to accept the SSL certificate.</p>";
	}

	echo '</div>';
	require_once ABSPATH . 'wp-admin/admin-footer.php';
}

/**
 * Register Accelerate root admin menu page.
 *
 * @return void
 */
function register_admin_menu() : void {
	add_menu_page(
		$page_title = __( 'Altis Accelerate', 'altis' ),
		$menu_title = __( 'Accelerate', 'altis' ),
		$capability = current_user_can( 'edit_posts' ),
		$menu_slug = 'accelerate',
		$callback = 'Altis\\Analytics\\Dashboard\\load_dashboard',
		$icon_url = plugins_url( '../assets/altis-logo.png', __DIR__ ),
		$position = 3
	);

	add_submenu_page(
		$parent_slug = 'accelerate',
		$page_title = __( 'Content Explorer', 'altis' ),
		$menu_title = __( 'Content Explorer', 'altis' ),
		$capability = current_user_can( 'edit_posts' ),
		$menu_slug = 'accelerate',
		$callback = 'Altis\\Analytics\\Dashboard\\load_dashboard',
		$position = 0,
	);

	add_submenu_page(
		$parent_slug = 'accelerate',
		$page_title = __( 'Global blocks', 'altis' ),
		$menu_title = __( 'Global blocks', 'altis' ),
		$capability = current_user_can( 'edit_posts' ),
		$menu_slug = 'edit.php?post_type=wp_block',
		$callback = '',
	);
}
