##  SECTION A - How to Use Macys-base                                      
------
macys-base.scss gives you the following libraries and components by default:

-normalize
-global mcom settings variables
-Foundation 6 Sass utilities
-additional global overrides and browser resets
-grid
-typography
-accessibility
-visibility classes
-button
-float class support
-vanilla flex-box support

****PLease note:  During the F4/F6 transition process (@core/style-guide@v2.x), please be sure to include the appropirate macys-base file: ****


	@import macys-base.scss;  



##  SECTION B - List of SCSS files to @import and its corresponding mixins to @include                                
------

Below are part of macys-base:

#### Normalize [ part of macys-base ] 
@import '~@core/vendor/scss/foundation-6.4.4-rc1/_vendor/normalize-scss/sass/normalize';
@import '~@core/vendor/scss/foundation-6.4.4-rc1/_vendor/sassy-lists/stylesheets/helpers/missing-dependencies';
@import '~@core/vendor/scss/foundation-6.4.4-rc1/_vendor/sassy-lists/stylesheets/helpers/true';
@import '~@core/vendor/scss/foundation-6.4.4-rc1/_vendor/sassy-lists/stylesheets/functions/purge';
@import '~@core/vendor/scss/foundation-6.4.4-rc1/_vendor/sassy-lists/stylesheets/functions/remove';
@import '~@core/vendor/scss/foundation-6.4.4-rc1/_vendor/sassy-lists/stylesheets/functions/replace';
@import '~@core/vendor/scss/foundation-6.4.4-rc1/_vendor/sassy-lists/stylesheets/functions/to-list';


#### Global mcom settings and style overrides [ part of macys-base ] 
@import "~@core/style-guide/src/scss/settings/settings-mcom";


#### Sass utilities [ part of macys-base ] 
@import '~@core/style-guide/src/scss/util/util';


#### Global style overrides & resets (includes normalize) [ part of macys-base ] 
@import "~@core/style-guide/src/scss/components/global";  // *always required for use with Foundation
@include foundation-global-styles;  // includes -zf-normalize


#### Grid F4 Legacy grid [ part of macys-base-ph1 ] 
@import "~@core/style-guide/src/scss/grid/grid"; // for legacy F4 grids
@include macys-grid( $xy-grid: false ); // for legacy F4 grids


#### Grid F6 xy-grid [ part of macys-base ] 
@import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/xy-grid/xy-grid';     // for F6 xy-grid
@include macys-grid( $xy-grid: true ); // for F6 xy-grids


#### Typography [ part of macys-base ] 
@import '~@core/style-guide/src/scss/components/typography';
@include macys-typography;


#### Accessibility [ part of macys-base ] 
@import '~@core/style-guide/src/scss/components/accessibility';
@include macys-accessibility;


#### Visibility [ part of macys-base ] 
@import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/visibility';
@include foundation-visibility-classes;


#### Button [ part of macys-base ] 
@import '~@core/style-guide/src/scss/components/button';
@include macys-button;


#### Float Class Support [ part of macys-base ] 
@import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/float';
@include foundation-float-classes;


#### Vanilla Flex-box Support [ part of macys-base ] 
// for horizontal & vertical alignment, includes vannilla flexbox helpers
@import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/flex';   
// global flex class enabled for button-group, card, media-object, menu, title_bar, top_bar, & input_group
@include foundation-flex-classes; 


## a-la-carte
Anything below are a-la-carte.  Please add them to your project's main SCSS file as needed.
** Order in SCSS matters.  Please add them after the above SCSS imports or after importing macys-base.


#### Forms
@import '~@core/style-guide/src/scss/forms/forms';
@include macys-forms;


#### Button-Group
@import '~@core/style-guide/src/scss/components/_button-group';
@include macys-button-group;


#### Split-Buttons
@import "~core/style-guide/src/scss/components/_split-buttons.scss";  
@include macys-split-button;

#### Notification
please install @component/notification from Polaris at https://code.devops.fds.com/polaris/component/notification


#### Loader
please install @component/loader from Polaris at https://code.devops.fds.com/polaris/component/accordion


#### Switch/Toggle
@import '~@core/style-guide/src/scss/components/switch'
@include macys-switch;

#### Accordion
please install @component/accordion from Polaris at https://code.devops.fds.com/polaris/component/accordion


#### Drawer
please install @component/drawer from Polaris at https://code.devops.fds.com/polaris/component/drawer


#### Modal-Overlay
please install @component/modal-overlay from Polaris at https://code.devops.fds.com/polaris/component/modal-overlay


#### Tabs
please install @component/tabs from Polaris at https://code.devops.fds.com/polaris/component/tabs

#### Tooltips
@import '~@core/style-guide/src/scss/components/_tooltips.scss'
@include macys-tooltip;

#### Carousel
please install @component/carousel from Polaris at https://code.devops.fds.com/polaris/component/carousel


#### Pagination
please install @component/pagination from Polaris at https://code.devops.fds.com/polaris/component/pagination


#### Slideshow
please install @component/slideshow from Polaris at https://code.devops.fds.com/polaris/component/slideshow

#### Table
@import '~@core/style-guide/src/scss/components/_table.scss'
@include macys-table;

#### Thumbnail
@import '~@core/style-guide/src/scss/components/_thumbnail.scss';
@include macys-thumbnail;

#### Cards
COMING SOON


#### Tiles
COMING SOON


#### Progress Bar
COMING SOON


#### Date Picker
COMING SOON


#### Motion-UI
please install @component/motion-ui from Polaris at https://code.devops.fds.com/polaris/component/motion-ui




#### Potential Foundation Library components (Currently not used by CSG, will need to explore with Design team)
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/badge';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/breadcrumbs';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/callout';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/card';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/close-button';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/drilldown';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/dropdown-menu';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/dropdown';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/responsive-embed';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/label';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/media-object';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/menu';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/menu-icon';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/off-canvas';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/orbit';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/pagination';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/progress-bar';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/reveal';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/slider';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/sticky';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/table';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/tabs';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/title-bar';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/top-bar';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/thumbnail';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/components/tooltip';
// @import '~@core/vendor/scss/foundation-6.4.4-rc1/scss/prototype/prototype';


// @include foundation-badge;
// @include foundation-breadcrumbs;
// @include foundation-callout;
// @include foundation-card;
// @include foundation-close-button;
// @include foundation-menu;
// @include foundation-menu-icon;
// @include foundation-drilldown-menu;
// @include foundation-dropdown;
// @include foundation-dropdown-menu;
// @include foundation-responsive-embed;
// @include foundation-label;
// @include foundation-media-object;
// @include foundation-off-canvas;
// @include foundation-orbit;
// @include foundation-pagination;
// @include foundation-progress-bar;
// @include foundation-slider;
// @include foundation-sticky;
// @include foundation-reveal;

// @include foundation-table;
// @include foundation-tabs;
// @include foundation-thumbnail;
// @include foundation-title-bar;
// @include foundation-tooltip;
// @include foundation-top-bar;

