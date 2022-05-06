<?php
/**
 * Altis Accelerate analytics data filter.
 *
 * @package altis/accelerate
 */

namespace Altis\Analytics\Dashboard;

/**
 * Filter container object.
 */
class Filter {
	/**
	 * A URL path to filter on.
	 *
	 * @var string
	 */
	public $path;

	/**
	 * Search term.
	 *
	 * @var string
	 */
	public $search;

	/**
	 * Post type.
	 *
	 * @var string
	 */
	public $type;

	/**
	 * User / author ID.
	 *
	 * @var int
	 */
	public $user;

	/**
	 * Current page.
	 *
	 * @var int
	 */
	public $page = 1;
}
