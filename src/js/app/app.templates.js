angular.module('app.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/app.footer.html',
    ""
  );


  $templateCache.put('app/app.header.html',
    "<div class=\"appbar__content\">\n" +
    "	<md-toolbar>\n" +
    "		<div layout=\"row\" flex>\n" +
    "			<div layout=\"row\" layout-align=\"start center\" flex>\n" +
    "				<md-button aria-label=\"Open sidebar\" noink class=\"appbar__hamburger\" ng-click=\"appctrl.openSideBar('left')\" ng-show=\"appctrl.page.projectId && !appctrl.page.videoId\">\n" +
    "					<icon class=\"ic-menu\"></icon>\n" +
    "				</md-button>\n" +
    "				<gd-video-back-button class=\"appbar__hamburger gd-button\" ng-show=\"appctrl.page.videoId && appctrl.page.projectId\" project-id=\"{{ appctrl.page.projectId }}\"></gd-video-back-button>\n" +
    "				<h1 class=\"appbar__page-title\">\n" +
    "					<span ng-if=\"appctrl.page.projectId && appctrl.page.collectionId\">\n" +
    "						<a ng-href=\"/project/{{ appctrl.page.projectId }}\">{{ appctrl.page.title }}</a>\n" +
    "					</span>\n" +
    "					<span ng-if=\"!(appctrl.page.projectId && appctrl.page.collectionId)\">{{ appctrl.page.title }}</span>\n" +
    "				</h1>\n" +
    "				<span class=\"appbar__page-title-info\" ng-if=\"appctrl.page.titleInfo\">{{ appctrl.page.titleInfo }}</span>\n" +
    "			</div>\n" +
    "			<div class=\"appbar__toolbar toolbar fade\" layout=\"row\" layout-align=\"start center\" ng-show=\"appctrl.user\">\n" +
    "				<gd-button class=\"toolbar__item\" ng-show=\"appctrl.page.projectId\" ng-click=\"appctrl.showSearch()\">\n" +
    "					<icon class=\"ic-search\"></icon>\n" +
    "					<md-tooltip md-delay=\"100\">Add videos</md-tooltip>\n" +
    "				</gd-button>\n" +
    "				<gd-online-collaborators class=\"toolbar__item\" ng-show=\"appctrl.page.projectId\" project-id=\"appctrl.page.projectId\"></gd-online-collaborators>\n" +
    "				<gd-button class=\"toolbar__item\" ng-click=\"appctrl.showAddCollaboratorsDialog($event)\" class=\"toolbar__item\" ng-show=\"appctrl.page.projectId && appctrl.page.project.current_user_info.is_admin\">\n" +
    "					<icon class=\"ic-person-add\"></icon>\n" +
    "					<md-tooltip md-delay=\"100\">Invite a collaborator</md-tooltip>\n" +
    "				</gd-button>\n" +
    "				<gd-button data-onboarding-target=\"project-comments-button\" ng-click=\"appctrl.openSideBar('projectCommentsSidebar')\" class=\"toolbar__item\" ng-show=\"appctrl.page.projectId\">\n" +
    "					<icon class=\"ic-comment\"></icon>\n" +
    "					<md-tooltip md-delay=\"100\">Project updates</md-tooltip>\n" +
    "				</gd-button>\n" +
    "				<gd-button ng-click=\"appctrl.openSideBar('tagSidebar')\" class=\"toolbar__item\" ng-show=\"appctrl.page.projectId\">\n" +
    "					<icon class=\"ic-label\"></icon>\n" +
    "					<md-tooltip md-delay=\"100\">Organise tags</md-tooltip>\n" +
    "				</gd-button>\n" +
    "				<!-- <gd-button ng-if=\"!appctrl.page.projectId\" ng-click=\"appctrl.user.showSettings($event)\" class=\"toolbar__item\">\n" +
    "					<md-tooltip>Settings</md-tooltip>\n" +
    "					<icon class=\"ic-settings\"></icon>\n" +
    "				</gd-button> -->\n" +
    "				<gd-button ng-if=\"!appctrl.page.projectId\" ng-click=\"appctrl.user.signOut()\" class=\"toolbar__item\">\n" +
    "					<md-tooltip>Sign out</md-tooltip>\n" +
    "					<icon class=\"ic-account-box\"></icon>\n" +
    "				</gd-button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</md-toolbar>\n" +
    "</div>\n"
  );


  $templateCache.put('app/app.sidebar.html',
    "<md-content layout=\"column\" layout-fill>\n" +
    "	<md-list class=\"ic-ul\" layout-fill>\n" +
    "		<md-item class=\"app-sidebar__item logo\">\n" +
    "			<md-item-content layout=\"column\">\n" +
    "				<span class=\"side-bar-logo\"></span>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"app-sidebar__item\">\n" +
    "			<md-item-content layout=\"column\">\n" +
    "				<a class=\"app-sidebar__item-button\" href=\"/my-projects\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-home\"></icon>\n" +
    "					<span class=\"app-sidebar__item-label\">My projects</span>\n" +
    "				</a>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"app-sidebar__item\">\n" +
    "			<md-list class=\"ic-ul\" layout-fill>\n" +
    "				<md-item>\n" +
    "					<md-item-content layout=\"column\">\n" +
    "						<a href=\"/project/{{ appctrl.page.projectId }}\" class=\"app-sidebar__item-button\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'library'}\" layout=\"row\" layout-align=\"start center\">\n" +
    "							<icon class=\"ic-movie\"></icon>\n" +
    "							<span class=\"app-sidebar__item-label\">All videos</span>\n" +
    "						</a>\n" +
    "					</md-item-content>\n" +
    "				</md-item>\n" +
    "				<md-item>\n" +
    "					<md-item-content layout=\"column\">\n" +
    "						<a href=\"/project/{{ appctrl.page.projectId }}?section=favorites\" class=\"app-sidebar__item-button\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'favorites'}\" layout=\"row\" layout-align=\"start center\">\n" +
    "							<icon class=\"ic-star\"></icon>\n" +
    "							<span class=\"app-sidebar__item-label\">Favorites</span>\n" +
    "						</a>\n" +
    "					</md-item-content>\n" +
    "				</md-item>\n" +
    "				<md-item>\n" +
    "					<md-item-content layout=\"column\">\n" +
    "						<a href=\"/project/{{ appctrl.page.projectId }}?section=unwatched\" class=\"app-sidebar__item-button\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'unwatched'}\" layout=\"row\" layout-align=\"start center\">\n" +
    "							<icon class=\"ic-visibility\"></icon>\n" +
    "							<span class=\"app-sidebar__item-label\">Unwatched</span>\n" +
    "						</a>\n" +
    "					</md-item-content>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"app-sidebar__item app-sidebar__item--collections\">\n" +
    "			<md-item-content layout=\"column\" layout-align=\"start start\">\n" +
    "				<div class=\"app-sidebar__item-header\">\n" +
    "					Collections\n" +
    "				</div>\n" +
    "				<md-list class=\"ic-ul app-sidebar__item-list\">\n" +
    "					<md-item class=\"app-sidebar__item\" layout=\"row\" layout-align=\"start center\" ng-repeat=\"collection in appctrl.collections track by collection.id\">\n" +
    "						<md-item-content class=\"app-sidebar__item-button\" layout=\"row\" layout-align=\"start center\">\n" +
    "							<a href=\"/project/{{ appctrl.page.projectId }}/collection/{{ collection.id }}\" class=\"app-sidebar__item-button\" layout=\"row\" layout-align=\"start center\">\n" +
    "								<icon class=\"ic-folder\"></icon>\n" +
    "								<span class=\"app-sidebar__item-label\">{{ collection.name }}</span>\n" +
    "							</a>\n" +
    "						</md-item-content>\n" +
    "					</md-item>\n" +
    "					<md-item class=\"app-sidebar__item\">\n" +
    "						<gd-button class=\"app-sidebar__item-button\" layout=\"row\" layout-align=\"start center\" ng-click=\"appctrl.showAddCollectionDialog($event)\">\n" +
    "							<div layout=\"row\" layout-align=\"start center\">\n" +
    "								<icon class=\"ic-add\"></icon>\n" +
    "								<span class=\"app-sidebar__item-label\">New Collection</span>\n" +
    "							</div>\n" +
    "						</gd-button>\n" +
    "					</md-item>\n" +
    "				</md-list>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"app-sidebar__item\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'archived'}\">\n" +
    "			<md-item-content layout=\"column\">\n" +
    "				<a href=\"/project/{{ appctrl.page.projectId }}?section=archived\" class=\"app-sidebar__item-button\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'archived'}\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-archive\"></icon>\n" +
    "					<span class=\"app-sidebar__item-label\">Archived</span>\n" +
    "				</a>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"app-sidebar__item\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'archived'}\">\n" +
    "			<md-item-content layout=\"column\" layout-align=\"start start\">\n" +
    "				<div class=\"app-sidebar__item-header\">\n" +
    "					Get Help\n" +
    "				</div>\n" +
    "				<a href=\"mailto:montage@meedan.com?subject=Montage Support\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"app-sidebar__item-button\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'library'}\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-mail\"></icon>\n" +
    "					<span class=\"app-sidebar__item-label\">montage@meedan.com</span>\n" +
    "				</a>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"app-sidebar__item\">\n" +
    "			<md-item-content layout=\"column\">\n" +
    "				<gd-button aria-label=\"Sign out\" class=\"app-sidebar__item-button\" ng-click=\"appctrl.user.showSettings($event)\" ng-class=\"{'app-sidebar__item--active': appctrl.page.section === 'unwatched'}\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<div layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-settings\"></icon>\n" +
    "						<span class=\"app-sidebar__item-label\">Settings</span>\n" +
    "					</div>\n" +
    "				</gd-button>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"app-sidebar__item\">\n" +
    "			<md-item-content layout=\"column\">\n" +
    "				<a class=\"app-sidebar__item-button\" href=\"https://meedan.com/en/montage/montage_tos.html\" target=\"_blank\" rel=\"noopener noreferrer\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<span class=\"app-sidebar__item-label\">Terms of Service</span>\n" +
    "				</a>\n" +
    "				<a class=\"app-sidebar__item-button\" href=\"https://meedan.com/en/montage/montage_privacy.html\" target=\"_blank\" rel=\"noopener noreferrer\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<span class=\"app-sidebar__item-label\">Privacy Policy</span>\n" +
    "				</a>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "	</md-list>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/buttons/gd-add-to-collection-button/gd-add-to-collection-button.html',
    "<div class=\"gd-add-to-collection-button\" layout=\"row\" layout-align=\"center center\">\n" +
    "	<icon ng-if=\"project.id === video.project_id\" class=\"fade ic-check-circle\" title=\"In your project '{{ ::project.name }}'\"></icon>\n" +
    "	<gd-button ng-if=\"project.id !== video.project_id\" class=\"gd-button--icon gd-button--toggle fade\" async=\"ctrl.addToCollection()\">\n" +
    "		<icon class=\"ic-add\"></icon>\n" +
    "	</gd-button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/buttons/gd-archive-video-button/gd-archive-video-button.html',
    "<gd-button class=\"gd-button--icon gd-button--toggle gd-archive-video-button\" ng-class=\"{'is-toggled-on': video.archived_at, 'is-busy': ctrl.isBusy}\" async=\"ctrl.toggleArchived()\">\n" +
    "	<icon class=\"ic-archive fade\"></icon>\n" +
    "</gd-button>\n"
  );


  $templateCache.put('components/buttons/gd-button/gd-button.html',
    "<div class=\"gd-button\" layout=\"row\" layout-align=\"center center\" flex>\n" +
    "	<button type=\"button\" ng-click=\"ctrl.click($event)\" layout=\"row\" layout-align=\"center\" flex>\n" +
    "		<span class=\"gd-button__content\" ng-transclude flex></span>\n" +
    "		<holo-spinner></holo-spinner>\n" +
    "	</button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/buttons/gd-favourite-video-button/gd-favourite-video-button.html',
    "<gd-button class=\"gd-button--icon gd-button--toggle gd-favourite-video-button\" async=\"ctrl.toggleFavourite()\">\n" +
    "	<icon class=\"fade\"></icon>\n" +
    "</gd-button>\n"
  );


  $templateCache.put('components/buttons/gd-select-video-button/gd-select-video-button.html',
    "<gd-button class=\"gd-select-video-button gd-button--icon\" ng-class=\"{'selected': selected}\" ng-click=\"ctrl.toggleSelect()\">\n" +
    "	<icon class=\"ic-check-box-outline-blank\"></icon>\n" +
    "</gd-button>\n"
  );


  $templateCache.put('components/gd-autocomplete/gd-autocomplete.html',
    "<div class=\"gd-autocomplete\">\n" +
    "	<div class=\"gd-autocomplete__input\" ng-transclude></div>\n" +
    "	<md-content class=\"gd-autocomplete__dropdown md-whiteframe-z1\" ng-show=\"showDropdown\">\n" +
    "		<md-list>\n" +
    "			<md-item ng-repeat=\"result in results\">\n" +
    "				<md-item-content>\n" +
    "					<gd-button class=\"gd-autocomplete__item\" ng-click=\"select(result)\" ng-class=\"{'hover': $index==currentIndex}\">\n" +
    "						<span flex layout=\"row\" layout-align=\"start center\">{{ result[displayProperty] }}</span>\n" +
    "					</gd-button>\n" +
    "				</md-item-content>\n" +
    "			</md-item>\n" +
    "		</md-list>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-collection-selector/gd-collection-selector.html',
    "<section ng-show=\"ctrl.isBusy\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "	<holo-spinner></holo-spinner>\n" +
    "</section>\n" +
    "<md-content class=\"bottom-sheet__list-wrapper\" layout-fill>\n" +
    "	<md-list class=\"bottom-sheet__list\" layout=\"column\" layout-align=\"start start\" ng-show=\"project\">\n" +
    "		<md-item ng-click=\"ctrl.setCollection('library')\" ng-class=\"{'bottom-sheet__list-item--active': ngModel === 'library'}\" class=\"bottom-sheet__list-item\">\n" +
    "			<md-item-content layout=\"row\" layout-align=\"start center\">\n" +
    "				<icon class=\"ic-movie\"></icon> Library\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item ng-class=\"{'bottom-sheet__list-item--active': ngModel.id === collection.id}\" class=\"bottom-sheet__list-item\" ng-repeat=\"collection in ctrl.collections track by collection.id\" ng-click=\"ctrl.setCollection(collection)\">\n" +
    "			<md-item-content>{{ collection.name }}</md-item-content>\n" +
    "		</md-item>\n" +
    "		<md-item class=\"bottom-sheet__list-item bottom-sheet__list-item--faded\">\n" +
    "			<md-item-content>\n" +
    "				<gd-button ng-click=\"ctrl.showAddCollection()\" ng-hide=\"ctrl.addingCollection\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-add\"></icon>\n" +
    "						<span>New collection</span>\n" +
    "					</span>\n" +
    "				</gd-button>\n" +
    "				<md-input-container flex ng-show=\"ctrl.addingCollection\">\n" +
    "					<label>Collection name</label>\n" +
    "					<input ng-model=\"ctrl.newCollection.name\">\n" +
    "				</md-input-container>\n" +
    "			</md-item-content>\n" +
    "		</md-item>\n" +
    "	</md-list>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/gd-datepicker/gd-datepicker.html',
    "<div class=\"gd-datepicker md-whiteframe-z1\">\n" +
    "	<div class=\"gd-datepicker__days\">\n" +
    "		<div class=\"md-primary gd-datepicker__month-name\" layout=\"row\" layout-align=\"center center\">\n" +
    "			<md-button ng-click=\"datepickerCtrl.gotoMonth(-1)\" aria-label=\"Previous month\" layout=\"row\" layout-align=\"center center\">\n" +
    "				<icon class=\"ic-keyboard-arrow-left\"></icon>\n" +
    "			</md-button>\n" +
    "			<div flex layout=\"row\" layout-align=\"center\">\n" +
    "				<md-select ng-model=\"datepicker.selectedMonth\">\n" +
    "					<md-option ng-repeat=\"month in datepicker.months track by $index\" value=\"{{ $index }}\">{{ month }}</md-option>\n" +
    "				</md-select>\n" +
    "			</div>\n" +
    "			<div flex layout=\"row\" layout-align=\"center\">\n" +
    "				<md-select ng-model=\"datepicker.selectedYear\">\n" +
    "					<md-option ng-repeat=\"year in datepicker.years track by $index\" value=\"{{ year }}\">{{ year }}</md-option>\n" +
    "				</md-select>\n" +
    "			</div>\n" +
    "			<md-button ng-click=\"datepickerCtrl.gotoMonth(1)\" aria-label=\"Next month\" layout=\"row\" layout-align=\"center center\">\n" +
    "				<icon class=\"ic-keyboard-arrow-right\"></icon>\n" +
    "			</md-button>\n" +
    "		</div>\n" +
    "		<md-content>\n" +
    "			<md-item class=\"gd-datepicker__week\">\n" +
    "				<md-list class=\"gd-datepicker__week-days\">\n" +
    "					<md-item class=\"gd-datepicker__week-number\">W</md-item><!--\n" +
    "				 --><md-item class=\"gd-datepicker__week-day\" ng-repeat=\"day in datepicker.weekdays track by $index\">{{ ::day }}</md-item>\n" +
    "				</md-list>\n" +
    "			</md-item>\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "	<div class=\"gd-datepicker__calendar\">\n" +
    "		<div class=\"gd-datepicker__content\">\n" +
    "			<md-list class=\"gd-datepicker__months\">\n" +
    "				<md-item class=\"gd-datepicker__month\">\n" +
    "					<md-list class=\"gd-datepicker__weeks\">\n" +
    "						<md-item class=\"gd-datepicker__week\" ng-repeat=\"week in datepicker.currentMonth.weeks track by $index\">\n" +
    "							<md-list class=\"gd-datepicker__week-days\">\n" +
    "								<md-item class=\"gd-datepicker__week-number\">{{ week.week }}</md-item><!--\n" +
    "							 --><md-item data-date=\"{{ day.date }}\" class=\"gd-datepicker__week-day\" ng-repeat=\"day in week.days track by $index\" ng-class=\"{'gd-datepicker__week-day--faded': day.isFaded, 'selected': day.isSelected, 'gd-datepicker__week-day--highlighted': day.isHighlighted, 'gd-datepicker__week-day--disabled': day.isDisabled}\">\n" +
    "									<md-item-content class=\"gd-datepicker__week-day__content\">{{ day.dayNumber }}</md-item-content>\n" +
    "								</md-item>\n" +
    "							</md-list>\n" +
    "						</md-item>\n" +
    "					</md-list>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-floating-element/gd-floating-element.template.html',
    "<div ng-transclude></div>\n"
  );


  $templateCache.put('components/gd-floating-menu/gd-floating-menu-button.html',
    "<gd-button type=\"button\" ng-click=\"show()\">\n" +
    "	<span ng-transclude></span>\n" +
    "</gd-button>\n"
  );


  $templateCache.put('components/gd-floating-menu/gd-floating-menu-group.html',
    "<div class=\"gd-floating-menu-group__icon\">\n" +
    "	<icon class=\"{{ icon }}\" ng-if=\"icon\"></icon>\n" +
    "</div>\n" +
    "<div class=\"gd-floating-menu-group__label\">\n" +
    "	{{ title }}\n" +
    "</div>\n" +
    "<span flex></span>\n" +
    "<div class=\"gd-floating-menu-group__content gd-menu-width-3 md-whiteframe-z1\" ng-transclude></div>\n" +
    "<div class=\"gd-floating-menu-group__arrow\">\n" +
    "	<icon class=\"ic-arrow-drop-down ic-rotate-270\"></icon>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('components/gd-floating-menu/gd-floating-menu-item.html',
    "<div ng-if=\"icon\" class=\"gd-floating-menu-item__icon\" layout=\"row\" layout-align=\"center center\">\n" +
    "	<icon class=\"{{ icon }}\"></icon>\n" +
    "</div>\n" +
    "<div class=\"gd-floating-menu-item__label\" layout=\"row\" layout-align=\"start center\" ng-transclude flex></div>\n"
  );


  $templateCache.put('components/gd-floating-menu/gd-floating-menu.html',
    "<div ng-include=\"ctrl.getMenuTemplate()\"></div>\n"
  );


  $templateCache.put('components/gd-hotkeys/gd-hotkeys.html',
    "<div class=\"gd-hotkeys-container fade\" ng-class=\"{in: helpVisible}\" style=\"display: none;\">\n" +
    "	<div class=\"gd-hotkeys\">\n" +
    "		<h4 class=\"gd-hotkeys-title\">{{ title }}</h4>\n" +
    "		<div layout=\"row\" layout-wrap>\n" +
    "			<div flex=\"50\" layout=\"row\" layout-align=\"center center\" ng-repeat=\"hotkey in hotkeys | filter:{ description: '!$$undefined$$' } track by $index\">\n" +
    "				<div class=\"gd-hotkeys-keys\" flex>\n" +
    "					<span class=\"gd-hotkeys-key\" ng-if=\"hotkey.combo.length <= 2\">{{ hotkey.combo.join(\" or \") }}</span>\n" +
    "					<span class=\"gd-hotkeys-key\" ng-if=\"hotkey.combo.length > 2\">{{ hotkey.combo[0] }}&hellip;{{ hotkey.combo[hotkey.combo.length-1]}}</span>\n" +
    "				</div>\n" +
    "				<div class=\"gd-hotkeys-text\" flex>{{ hotkey.description }}</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<gd-button class=\"gd-hotkeys-close\" ng-click=\"toggleCheatSheet()\">\n" +
    "			<icon class=\"ic-close\"></icon>\n" +
    "		</gd-button>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-inline-edit/gd-inline-edit.html',
    "<span class=\"inline-edit\" layout=\"column\">\n" +
    "	<form ng-submit=\"save()\" ng-show=\"editMode === true\" flex layout=\"row\" layout-align=\"start center\">\n" +
    "		<md-input ng-model=\"fakeModel\" type=\"text\" flex></md-input>\n" +
    "	</form>\n" +
    "	<span ng-click=\"editMode = true\" ng-show=\"editMode === false\" flex layout=\"row\" layout-align=\"start center\">\n" +
    "		<span class=\"inline-edit__content\" ng-transclude></span>\n" +
    "		<icon class=\"ic-edit\"></icon>\n" +
    "	</span>\n" +
    "</span>\n"
  );


  $templateCache.put('components/gd-onboarding/gd-onboarding-popover.html',
    "<div ng-show=\"enabled\" class=\"gd-onboarding-popover fade\" layout=\"row\" layout-align=\"center center\">\n" +
    "	<div class=\"gd-onboarding-container md-whiteframe-z1\">\n" +
    "		<div class=\"gd-onboarding__title\">{{ currentStep.title }}</div>\n" +
    "		<div class=\"gd-onboarding__text\">{{ currentStep.text }}</div>\n" +
    "		<div class=\"gd-onboarding__actions\" layout=\"row\" layout-align=\"end center\">\n" +
    "			<div class=\"gd-onboarding__steps\" layout=\"row\" layout-align=\"start center\" flex>\n" +
    "				<div ng-repeat=\"step in ngModel.steps\" class=\"gd-onboarding__step\" ng-class=\"{'gd-onboarding__step--active': currentIndex === $index}\" ng-click=\"onboardingCtrl.goto($index)\"></div>\n" +
    "			</div>\n" +
    "			<md-button ng-show=\"!isAtStart\" class=\"gd-onboarding__action-button\" type=\"button\" aria-label=\"Previous\" ng-click=\"onboardingCtrl.previous()\">Previous</md-button>\n" +
    "			<md-button ng-show=\"!isAtEnd\" class=\"gd-onboarding__action-button\" type=\"button\" aria-label=\"Next\" ng-click=\"onboardingCtrl.next()\">Next</md-button>\n" +
    "			<md-button ng-show=\"isAtEnd\" class=\"gd-onboarding__action-button\" type=\"button\" aria-label=\"Finish\" ng-click=\"onboardingCtrl.close(true)\">Finish</md-button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<gd-backdrop callback=\"onboardingCtrl.close()\"></gd-backdrop>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-online-collaborators/gd-online-collaborators.html',
    "<div class=\"gd-online-collaborators__wrapper\" layout=\"row\" layout-align=\"start center\">\n" +
    "	<div class=\"gd-online-collaborators__user\" ng-repeat=\"collaborator in collaborators track by collaborator.id\">\n" +
    "		<img ng-src=\"{{ ::collaborator.profile_img_url }}?sz=30\" class=\"gd-online-collaborators__avatar\" alt=\"{{ ::collaborator.first_name }} {{ ::collaborator.last_name }}\" ng-if=\"collaborator.profile_img_url\">\n" +
    "		<img ng-src=\"{{ ::defaultProfileImgUrl }}\" class=\"gd-online-collaborators__avatar\" alt=\"{{ ::collaborator.first_name }} {{ ::collaborator.last_name }}\" ng-if=\"!collaborator.profile_img_url\">\n" +
    "		<md-tooltip md-delay=\"100\">{{ ::collaborator.first_name }} {{ ::collaborator.last_name }}</md-tooltip>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-popup/gd-popup-button.template.html',
    "<span ng-click=\"open()\" ng-transclude></span>\n"
  );


  $templateCache.put('components/gd-popup/gd-popup-content.template.html',
    "<span ng-transclude></span>\n"
  );


  $templateCache.put('components/gd-popup/gd-popup-element.template.html',
    "<div ng-transclude></div>\n"
  );


  $templateCache.put('components/gd-progress/gd-progress.html',
    "<div class=\"gd-progress\">\n" +
    "	<div class=\"indeterminate\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-project-comments-sidebar/gd-project-comment-menu.html',
    "<gd-floating-menu-item icon=\"ic-edit\" ng-click=\"menuData.editComment()\">Edit</gd-floating-menu-item>\n" +
    "<gd-floating-menu-item icon=\"ic-delete\" ng-click=\"menuData.deleteComment()\">Remove</gd-floating-menu-item>\n"
  );


  $templateCache.put('components/gd-project-comments-sidebar/gd-project-comment-thread.html',
    "<md-card class=\"gd-project-comment__thread\" layout=\"column\" ng-click=\"threadCtrl.expand()\" ng-class=\"{'gd-project-comment__thread--expanded': threadCtrl.expanded}\">\n" +
    "	<gd-project-comment comment=\"thread\"></gd-project-comment>\n" +
    "	<div class=\"gd-project-comment__replies\" ng-if=\"thread.replies.length\">\n" +
    "		<div class=\"gd-project-comment__comment\">\n" +
    "			<ng-pluralize count=\"thread.replies.length\" when=\"{'one': '1 comment', 'other': '{} comments'}\"></ng-pluralize>\n" +
    "		</div>\n" +
    "		<md-list>\n" +
    "			<md-item ng-repeat=\"reply in thread.replies | limitTo:maxRepliesToShow track by reply.id\">\n" +
    "				<gd-project-comment comment=\"reply\"></gd-project-comment>\n" +
    "			</md-item>\n" +
    "		</md-list>\n" +
    "	</div>\n" +
    "	<md-content ng-show=\"threadCtrl.expanded\" class=\"gd-project-comment__form\" layout=\"column\">\n" +
    "		<form ng-submit=\"threadCtrl.addComment()\">\n" +
    "			<div class=\"gd-pc-sidebar__user\" layout=\"row\" layout-align=\"start center\">\n" +
    "				<img ng-src=\"{{ ::user.profile_img_url }}?sz=40\" class=\"gd-project-comment__user-avatar\" alt=\"{{ ::user.first_name }} {{ ::user.last_name }}\" ng-if=\"user.profile_img_url\">\n" +
    "				<img ng-src=\"{{ ::user.defaultProfileImgUrl }}\" class=\"gd-project-comment__user-avatar\" alt=\"{{ ::user.first_name }} {{ ::user.last_name }}\" ng-if=\"!user.profile_img_url\">\n" +
    "				<div class=\"gd-pc-sidebar__add-update\" flex>\n" +
    "					<input ng-model=\"threadCtrl.newComment.text\" type=\"text\" class=\"gd-pc-sidebar__add-reply-input\" placeholder=\"Reply\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div ng-class=\"{'gd-pc-sidebar__actions--visible': threadCtrl.newComment.text !== ''}\" class=\"gd-pc-sidebar__actions\" layout=\"row\" layout-align=\"end start\">\n" +
    "				<md-button ng-click=\"threadCtrl.resetComment()\" class=\"md-primary gd-pc-sidebar__action--cancel\" type=\"button\">Cancel</md-button>\n" +
    "				<md-button class=\"md-accent gd-pc-sidebar__actions--submit\" type=\"submit\">Submit</md-button>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</md-content>\n" +
    "</md-card>\n" +
    "<gd-backdrop ng-if=\"threadCtrl.expanded === true\" callback=\"threadCtrl.collapse()\"></gd-backdrop>\n"
  );


  $templateCache.put('components/gd-project-comments-sidebar/gd-project-comment.html',
    "<div class=\"gd-project-comment__comment\" layout=\"row\" layout-align=\"start start\">\n" +
    "	<img ng-src=\"{{ ::comment.user.profile_img_url }}?sz=40\" class=\"gd-project-comment__user-avatar\" alt=\"{{ ::comment.user.first_name }} {{ ::comment.user.last_name }}\" ng-if=\"comment.user.profile_img_url\">\n" +
    "	<img ng-src=\"{{ ::defaultProfileImgUrl }}\" class=\"gd-project-comment__user-avatar\" alt=\"{{ ::comment.user.first_name }} {{ ::comment.user.last_name }}\" ng-if=\"!comment.user.profile_img_url\">\n" +
    "	<div class=\"md-tile-content gd-project-comment__thread-content\" flex>\n" +
    "		<div class=\"gd-project-comment__thread-header\" layout=\"row\" layout-align=\"start center\">\n" +
    "			<div class=\"gd-project-comment__thread-title\" flex>{{ ::comment.user.first_name }} {{ ::comment.user.last_name }}</div>\n" +
    "			<span class=\"gd-project-comment__time\">{{ ::comment.created | amCalendar}}</span>\n" +
    "		</div>\n" +
    "		<div ng-if=\"!ctrl.editing\" class=\"gd-project-comment__thread-text\">{{ ::comment.text }}</div>\n" +
    "		<div ng-if=\"ctrl.editing\" class=\"gd-project-comment__thread-text\">\n" +
    "			<form ng-submit=\"ctrl.save()\">\n" +
    "				<input ng-model=\"ctrl.newComment.text\" type=\"text\" class=\"gd-pc-sidebar__add-reply-input\" placeholder=\"Update your comment\" flex>\n" +
    "				<div class=\"gd-pc-sidebar__actions gd-pc-sidebar__actions--visible\" layout=\"row\" layout-align=\"end start\">\n" +
    "					<md-button ng-click=\"ctrl.cancelEdit()\" class=\"md-primary gd-pc-sidebar__action--cancel\" type=\"button\">Cancel</md-button>\n" +
    "					<md-button class=\"md-accent gd-pc-sidebar__actions--submit\" type=\"submit\">Submit</md-button>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<gd-floating-menu-button align-to=\"right\" menu-template-url=\"components/gd-project-comments-sidebar/gd-project-comment-menu.html\" menu-data=\"menuData\" menu-z-index=\"2001\" ng-if=\"user.id === comment.user.id\">\n" +
    "		<icon class=\"ic-more-vert\"></icon>\n" +
    "	</gd-floating-menu-button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-project-comments-sidebar/gd-project-comments-sidebar.html',
    "<md-sidenav class=\"app-sidebar md-sidenav-right gd-pc-sidebar md-whiteframe-z2\" md-is-open=\"pcSidebarCtrl.isOpen\" md-component-id=\"projectCommentsSidebar\">\n" +
    "	<div layout=\"column\" layout-fill lazy-show=\"pcSidebarCtrl.openedOnce\">\n" +
    "		<md-toolbar class=\"gd-pc-sidebar__header\">\n" +
    "			<md-toolbar class=\"gd-pc-sidebar__header--inner\">\n" +
    "				<form ng-submit=\"pcSidebarCtrl.addComment()\">\n" +
    "					<div class=\"gd-pc-sidebar__user\" layout=\"row\" layout-align=\"start center\">\n" +
    "						<img class=\"gd-pc-sidebar__user-avatar\" ng-src=\"{{ ::user.profile_img_url }}?sz=40\" ng-if=\"user.profile_img_url\">\n" +
    "						<img class=\"gd-pc-sidebar__user-avatar\" ng-src=\"{{ ::defaultProfileImgUrl }}\" ng-if=\"!user.profile_img_url\">\n" +
    "						<div class=\"gd-pc-sidebar__add-update\" flex>\n" +
    "							<input ng-model=\"pcSidebarCtrl.newComment.text\" type=\"text\" class=\"gd-pc-sidebar__add-update-input\" placeholder=\"Share what's new\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div ng-class=\"{'gd-pc-sidebar__actions--visible': pcSidebarCtrl.newComment.text !== ''}\" class=\"gd-pc-sidebar__actions\" layout=\"row\" layout-align=\"end start\">\n" +
    "						<md-button ng-click=\"pcSidebarCtrl.resetComment()\" class=\"gd-pc-sidebar__action--cancel\" type=\"button\">Cancel</md-button>\n" +
    "						<md-button class=\"md-accent gd-pc-sidebar__actions--submit\" type=\"submit\">Submit</md-button>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</md-toolbar>\n" +
    "		</md-toolbar>\n" +
    "		<md-content flex class=\"gd-pc-sidebar__threads\" layout=\"column\">\n" +
    "			<md-list class=\"gd-pc-sidebar__thread-list\">\n" +
    "				<md-item ng-repeat=\"thread in pcSidebarCtrl.threads | orderBy:'-created' track by thread.id\">\n" +
    "					<gd-project-comment-thread thread=\"thread\" project-id=\"projectId\"></gd-project-comment-thread>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "			<div ng-if=\"!pcSidebarCtrl.threads.length\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "				<h2 class=\"projects__create-prompt__title\">No comments added yet</h2>\n" +
    "				<p class=\"projects__create-prompt__content\">You can use the box above to add your first comment!</p>\n" +
    "			</div>\n" +
    "		</md-content>\n" +
    "		<section ng-show=\"pcSidebarCtrl.isBusy\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "			<holo-spinner class=\"holo-spinner--layer\"></holo-spinner>\n" +
    "		</section>\n" +
    "	</div>\n" +
    "</md-sidenav>\n"
  );


  $templateCache.put('components/gd-project-selector/gd-project-selector.html',
    "<md-content class=\"bottom-sheet__list-wrapper\" layout-fill>\n" +
    "	<md-list class=\"bottom-sheet__list\" layout=\"column\" layout-align=\"start start\">\n" +
    "		<md-item ng-class=\"{'bottom-sheet__list-item--active': ngModel.id === project.id}\" ng-click=\"ctrl.setProject(project)\" class=\"bottom-sheet__list-item\" ng-repeat=\"project in ctrl.projects track by project.id\">\n" +
    "			<md-item-content>{{ project.name }}</md-item-content>\n" +
    "		</md-item>\n" +
    "	</md-list>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/gd-selected-videos-bottom-sheet/bottom-sheet.html',
    "<div class=\"gd-bottom-sheet slide ng-hide\" ng-show=\"ctrl.videos.length\">\n" +
    "	<md-content class=\"gd-bottom-sheet__content\">\n" +
    "		<md-toolbar class=\"gd-bottom-sheet__toolbar\">\n" +
    "			<div class=\"gd-bottom-sheet__toolbar-content\" layout=\"row\" layout-align=\"start center\">\n" +
    "				<gd-button ng-if=\"ctrl.actions.addTo\" ng-click=\"ctrl.selectedTab = 'video-adder'\" ng-class=\"{active: ctrl.selectedTab === 'video-adder'}\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-add-box\"></icon>\n" +
    "						<span flex>Add to</span>\n" +
    "					</span>\n" +
    "				</gd-button>\n" +
    "				<gd-button ng-if=\"ctrl.actions.batchTag\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-label\"></icon>\n" +
    "						<span flex>Batch tag</span>\n" +
    "					</span>\n" +
    "				</gd-button>\n" +
    "				<gd-button ng-if=\"ctrl.actions.markAsDuplicate\" ng-click=\"ctrl.selectedTab = 'markAsDuplicate'\" ng-class=\"{active: ctrl.selectedTab === 'markAsDuplicate'}\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-control-point-duplicate\"></icon>\n" +
    "						<span flex>Mark as duplicate</span>\n" +
    "					</span>\n" +
    "				</gd-button>\n" +
    "				<gd-button ng-if=\"ctrl.actions.archive\" ng-click=\"ctrl.selectedTab = 'archive'\" ng-class=\"{active: ctrl.selectedTab === 'archive'}\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-archive\"></icon>\n" +
    "						<span flex>Archive</span>\n" +
    "					</span>\n" +
    "				</gd-button>\n" +
    "				<gd-button ng-if=\"ctrl.actions.removeFromCollection\" ng-click=\"ctrl.selectedTab = 'removeFromCollection'\" ng-class=\"{active: ctrl.selectedTab === 'removeFromCollection'}\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-delete\"></icon>\n" +
    "						<span flex>Remove from collection</span>\n" +
    "					</span>\n" +
    "				</gd-button>\n" +
    "				<gd-button ng-if=\"ctrl.actions.exportTo\" ng-click=\"ctrl.selectedTab = 'video-exporter'\" ng-class=\"{active: ctrl.selectedTab === 'video-exporter'}\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-save\"></icon>\n" +
    "						<span flex>Export to</span>\n" +
    "					</span>\n" +
    "				</gd-button>\n" +
    "				<span flex></span>\n" +
    "				<span class=\"gd-bottom-sheet__info\">\n" +
    "					<ng-pluralize count=\"ctrl.videos.length\" when=\"{'one': '1 video selected', 'other': '{} videos selected'}\"></ng-pluralize>\n" +
    "				</span>\n" +
    "				<gd-button class=\"bottom-sheet__close-tab-button\" ng-show=\"ctrl.selectedTab !== null\" ng-click=\"ctrl.selectedTab = null\">\n" +
    "					<icon class=\"ic-close\"></icon>\n" +
    "				</gd-button>\n" +
    "			</div>\n" +
    "		</md-toolbar>\n" +
    "\n" +
    "		<gd-video-adder ng-if=\"ctrl.actions.addTo\" reset-when=\"ctrl.videos.length === 0\" is-visible=\"ctrl.selectedTab === 'video-adder'\" selected-project=\"ctrl.selectedProject\" selected-collection=\"ctrl.selectedCollection\" videos=\"ctrl.videos\"></gd-video-adder>\n" +
    "\n" +
    "		<gd-video-exporter ng-if=\"ctrl.actions.exportTo\" reset-when=\"ctrl.videos.length === 0\" is-visible=\"ctrl.selectedTab === 'video-exporter'\" videos=\"ctrl.videos\"></gd-video-exporter>\n" +
    "\n" +
    "		<div ng-if=\"ctrl.actions.archive\" class=\"bottom-sheet__panel--archive slide-bottom-sheet-panel ng-hide\" ng-show=\"ctrl.selectedTab === 'archive'\" layout=\"row\" layout-align=\"start start\">\n" +
    "			<div class=\"bottom-sheet__panel-section\" layout=\"row\" flex=\"40\">\n" +
    "				<div class=\"bottom-sheet__panel__big-content\" layout-fill layout-align=\"vertical\" layout-align=\"center center\">\n" +
    "					<div class=\"bottom-sheet__panel-hero\">\n" +
    "						Are you sure?\n" +
    "					</div>\n" +
    "					<div class=\"bottom-sheet__panel-info\">\n" +
    "						This will archive the\n" +
    "						<ng-pluralize count=\"ctrl.videos.length\" when=\"{'one': '1 selected video', 'other': '{} selected videos'}\"></ng-pluralize>.\n" +
    "					</div>\n" +
    "					<div class=\"bottom-sheet__panel-actions\" layout=\"row\" layout-align=\"start center\">\n" +
    "						<md-button ng-click=\"ctrl.archiveVideos(ctrl.videos)\" aria-label=\"OK\" md-no-ink class=\"md-accent\">OK</md-button>\n" +
    "						<md-button ng-click=\"ctrl.selectedTab = null\" aria-label=\"Cancel\" md-no-ink class=\"md-primary\">Cancel</md-button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"ctrl.actions.markAsDuplicate\" class=\"bottom-sheet__panel--mark-as-duplicate slide-bottom-sheet-panel ng-hide\" ng-show=\"ctrl.selectedTab === 'markAsDuplicate'\" layout=\"row\" layout-align=\"start start\">\n" +
    "			<div class=\"bottom-sheet__panel-section\" layout=\"row\" flex=\"40\">\n" +
    "				<div class=\"bottom-sheet__panel__big-content\" layout-fill layout-align=\"vertical\" layout-align=\"center center\">\n" +
    "					<div class=\"bottom-sheet__panel-hero\">\n" +
    "						Are you sure?\n" +
    "					</div>\n" +
    "					<div class=\"bottom-sheet__panel-info\">\n" +
    "						This will mark\n" +
    "						<ng-pluralize count=\"ctrl.videos.length\" when=\"{'one': '1 selected video', 'other': '{} selected videos'}\"></ng-pluralize>\n" +
    "						as duplicates.\n" +
    "					</div>\n" +
    "					<div class=\"bottom-sheet__panel-actions\" layout=\"row\" layout-align=\"start center\">\n" +
    "						<md-button ng-click=\"ctrl.markVideosAsDuplicate(ctrl.videos)\" aria-label=\"OK\" md-no-ink class=\"md-accent\">OK</md-button>\n" +
    "						<md-button ng-click=\"ctrl.selectedTab = null\" aria-label=\"Cancel\" md-no-ink class=\"md-primary\">Cancel</md-button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div ng-if=\"ctrl.actions.removeFromCollection\" class=\"bottom-sheet__panel--remove-from-collection slide-bottom-sheet-panel ng-hide\" ng-show=\"ctrl.selectedTab === 'removeFromCollection'\" layout=\"row\" layout-align=\"start start\">\n" +
    "			<div class=\"bottom-sheet__panel-section\" layout=\"row\" flex=\"40\">\n" +
    "				<div class=\"bottom-sheet__panel__big-content\" layout-fill layout-align=\"vertical\" layout-align=\"center center\">\n" +
    "					<div class=\"bottom-sheet__panel-hero\">\n" +
    "						Are you sure?\n" +
    "					</div>\n" +
    "					<div class=\"bottom-sheet__panel-info\">\n" +
    "						This will remove\n" +
    "						<ng-pluralize count=\"ctrl.videos.length\" when=\"{'one': '1 selected video', 'other': '{} selected videos'}\"></ng-pluralize>\n" +
    "						from the collection.\n" +
    "					</div>\n" +
    "					<div class=\"bottom-sheet__panel-actions\" layout=\"row\" layout-align=\"start center\">\n" +
    "						<md-button ng-click=\"ctrl.removeFromCollection(ctrl.videos)\" aria-label=\"OK\" md-no-ink class=\"md-accent\">OK</md-button>\n" +
    "						<md-button ng-click=\"ctrl.selectedTab = null\" aria-label=\"Cancel\" md-no-ink class=\"md-primary\">Cancel</md-button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-tag-autocomplete/gd-tag-autocomplete-popup.html',
    "<md-content layout-fill>\n" +
    "	<div class=\"gd-tag-autocomplete__suggestions-popup\">\n" +
    "		<md-progress-linear mode=\"indeterminate\" ng-show=\"loading\"></md-progress-linear>\n" +
    "		<div class=\"gd-tag-autocomplete__suggestions--create\" ng-show=\"query\">\n" +
    "			<div class=\"gd-tag-autocomplete-tag\" ng-click=\"freeTextClicked(query)\" ng-class=\"{ 'is-highlighted': highlightedSection == 'create' }\">\n" +
    "				<span>{{ query }}</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"gd-tag-autocomplete__suggestions--project\">\n" +
    "			<div class=\"gd-tag-autocomplete__suggestions-project-title\">\n" +
    "				From this project\n" +
    "			</div>\n" +
    "			<div ng-hide=\"tags.length\" class=\"gd-tag-autocomplete__no-tags\">\n" +
    "				No matching project tags\n" +
    "			</div>\n" +
    "			<ul ng-show=\"tags.length\" class=\"gd-tag-autocomplete__tag-list\">\n" +
    "				<li\n" +
    "					ng-repeat=\"tag in tags | filter:{ name: query } | orderBy:'name' track by tag.id\"\n" +
    "					class=\"gd-tag-autocomplete-tag\"\n" +
    "					ng-class=\"{ 'is-highlighted': highlightedSection == 'project' && highlightedIndex == $index }\"\n" +
    "					ng-click=\"tagClicked(tag)\"\n" +
    "				>{{ tag.name }}</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/gd-tag-autocomplete/gd-tag-autocomplete.html',
    "<div class=\"gd-video-timeline__comment-label\" ng-click=\"showPopup()\" ng-if=\"!video.archived_at\">\n" +
    "	<div layout=\"row\" layout-align=\"center center\">\n" +
    "		<icon class=\"ic-label\"></icon>\n" +
    "		<span flex>Add tag</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"gd-tag-autocomplete__input-wrapper\" ng-show=\"popup\" layout=\"row\" layout-align=\"start center\">\n" +
    "	<icon class=\"ic-label\"></icon>\n" +
    "	<input class=\"gd-tag-autocomplete__input\" ng-model=\"query\" flex>\n" +
    "	<button class=\"gd-tag-autocomplete__close-btn\" ng-click=\"hidePopup()\"><icon class=\"ic-close\"></icon></button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-tag-list/gd-tag-item.html',
    "<div class=\"tag-list__tag\" draggable draggable-data=\"{{ ::ngModel.id }}\" droppable droppable-data=\"{{ ::ngModel.id }}\" on-drop=\"tagItemCtrl.onDrop\">\n" +
    "	<div ng-controller=\"tagController\" ng-include=\"tagTemplate\"></div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-tag-list/gd-tag-list.html',
    "<md-list class=\"tag-list\">\n" +
    "	<gd-tag-item flat=\"{{ ::flat }}\" tag-controller=\"::tagController\" ng-model=\"::tag\" ng-repeat=\"tag in ngModel | filter:{name: nameFilter} track by tag.id\" tag-template=\"{{ ::tagTemplate }}\"></gd-tag-item>\n" +
    "</md-list>\n"
  );


  $templateCache.put('components/gd-tag-sidebar/gd-tag-sidebar.html',
    "<md-sidenav class=\"app-sidebar md-sidenav-right tag-sidebar md-whiteframe-z2\" md-is-open=\"tagSidebarCtrl.isOpen\" md-component-id=\"tagSidebar\">\n" +
    "	<md-content layout=\"column\" layout-fill lazy-show=\"tagSidebarCtrl.isOpen\">\n" +
    "		<div class=\"tag-sidebar__autocomplete\">\n" +
    "			<form ng-submit=\"tagSidebarCtrl.addTag(newTag)\">\n" +
    "				<gd-autocomplete results=\"autoCompleteTags\" ng-model=\"newTag\" display-property=\"name\" on-select=\"tagSidebarCtrl.addTag(newTag)\">\n" +
    "					<div layout=\"row\">\n" +
    "						<div class=\"tag-sidebar__autocomplete-icon\" layout=\"row\" layout-align=\"center center\">\n" +
    "							<icon class=\"ic-label\"></icon>\n" +
    "						</div>\n" +
    "						<input class=\"tag-sidebar__autocomplete-input\" flex type=\"text\" ng-model=\"newTag.name\" ng-model-options=\"{ debounce: 500 }\">\n" +
    "						<div class=\"tag-sidebar__close-icon\" layout=\"row\" layout-align=\"center center\">\n" +
    "							<md-button md-no-ink class=\"fade\" ng-show=\"newTag.name !== ''\" ng-click=\"tagSidebarCtrl.reset()\" type=\"button\">\n" +
    "								<icon class=\"ic-close\"></icon>\n" +
    "							</md-button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</gd-autocomplete>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "		<md-content class=\"tag-sidebar__tag-list\" droppable droppable-data=\"0\" on-drop=\"tagSidebarCtrl.moveTag\" flex layout=\"column\">\n" +
    "			<gd-tag-list tag-controller=\"tagController\" ng-model=\"tags\" tag-template=\"{{ tagTemplateUrl }}\"></gd-tag-list>\n" +
    "			<div ng-if=\"!tags.length\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "				<div class=\"tag-sidebar__tag-placeholder\" layout=\"column\">\n" +
    "					<div class=\"tag-sidebar__tag-placeholder-tag\"></div>\n" +
    "					<div class=\"tag-sidebar__tag-placeholder-tag--short\"></div>\n" +
    "					<div class=\"tag-sidebar__tag-placeholder-tag--dragging\"></div>\n" +
    "				</div>\n" +
    "				<h2 class=\"projects__create-prompt__title\">Manage your tags here</h2>\n" +
    "				<p class=\"projects__create-prompt__content\">Add tags here or dive into a video and start tagging. Come back any time to organise your tags.</p>\n" +
    "			</div>\n" +
    "		</md-content>\n" +
    "		<section ng-show=\"tagSidebarCtrl.isBusy\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "			<holo-spinner class=\"holo-spinner--layer\"></holo-spinner>\n" +
    "		</section>\n" +
    "	</md-content>\n" +
    "</md-sidenav>\n"
  );


  $templateCache.put('components/gd-tag-sidebar/tag-dropdown.html',
    "<gd-floating-menu-item icon=\"ic-edit\" ng-click=\"menuData.editTag($event)\">Edit</gd-floating-menu-item>\n" +
    "<gd-floating-menu-item icon=\"ic-delete\" ng-click=\"menuData.removeTag($event)\">Remove</gd-floating-menu-item>\n"
  );


  $templateCache.put('components/gd-tag-sidebar/tag-template.html',
    "<md-item>\n" +
    "	<md-item-content class=\"tag-sidebar__tag\" layout=\"column\" layout-align=\"start center\" ng-class=\"{selected: ngModel.selected}\">\n" +
    "		<div class=\"tag-sidebar__tag-info\" layout=\"row\" layout-align=\"start center\" ng-click=\"tagClicked($event, ngModel)\">\n" +
    "			<div class=\"tag-sidebar__tag-expand-button\">\n" +
    "				<gd-button ng-if=\"ngModel.subTags.length\">\n" +
    "					<icon class=\"ic-arrow-drop-down\"></icon>\n" +
    "				</gd-button>\n" +
    "			</div>\n" +
    "			<div flex class=\"tag-sidebar__tag-name\">{{ ngModel.name }}</div>\n" +
    "			<div class=\"tag-sidebar__tag-usage-count\">{{ ::ngModel.video_tag_instance_count }}</div>\n" +
    "		</div>\n" +
    "		<md-content flex class=\"tag-sidebar__tag-content scale-tag md-whiteframe-z2\" ng-show=\"ngModel.selected\">\n" +
    "			<div class=\"ng-hide\" layout=\"row\" ng-show=\"editMode === true\">\n" +
    "				<span class=\"tag-sidebar__tag-image\" layout=\"column\">\n" +
    "					<image-uploader image=\"ngModel.image_url\" is-busy=\"ctrl.imageUploaderBusy\" ng-model=\"ngModel.image_url\" type=\"tag\" layout-fill></image-uploader>\n" +
    "				</span>\n" +
    "				<form flex class=\"tag-sidebar__tag-form\" layout=\"column\" ng-submit=\"saveTag(ngModel)\">\n" +
    "					<md-input-container layout=\"column\">\n" +
    "						<label for=\"tagName\">Name</label>\n" +
    "						<input id=\"tagName\" type=\"text\" ng-model=\"ngModel.name\" required>\n" +
    "					</md-input-container>\n" +
    "					<md-input-container layout=\"column\">\n" +
    "						<label for=\"tagDescription\">Description</label>\n" +
    "						<input id=\"tagDescription\" multiline type=\"text\" ng-model=\"ngModel.description\">\n" +
    "					</md-input-container>\n" +
    "					<div layout=\"column\" flex></div>\n" +
    "					<div layout=\"row\" layout-align=\"end center\">\n" +
    "						<md-button class=\"md-primary\" aria-label=\"Cancel\" ng-disabled=\"ctrl.imageUploaderBusy == true\" type=\"button\" ng-click=\"cancelEdit()\">Cancel</md-button>\n" +
    "						<md-button class=\"md-accent\" aria-label=\"Save\" ng-disabled=\"ctrl.imageUploaderBusy == true\" type=\"submit\">Save</md-button>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div layout=\"row\" layout-align=\"start start\" ng-show=\"!editMode\">\n" +
    "				<div class=\"tag-sidebar__tag-image\" layout=\"row\" layout-align=\"center center\" style=\"background-image: url('{{ ngModel.image_url }}=h176');\">\n" +
    "					<span ng-if=\"!ngModel.image_url\">No image</span>\n" +
    "				</div>\n" +
    "				<div class=\"tag-sidebar__tag-details\" flex layout=\"column\" layout-fill>\n" +
    "					<div class=\"tag-sidebar__tag-name\" layout=\"row\">\n" +
    "						<span flex>{{ ngModel.name }}</span>\n" +
    "						<gd-floating-menu-button menu-template-url=\"components/gd-tag-sidebar/tag-dropdown.html\" menu-data=\"menuData\" align-to=\"right\">\n" +
    "							<icon class=\"ic-more-vert\"></icon>\n" +
    "						</gd-floating-menu-button>\n" +
    "					</div>\n" +
    "					<div class=\"tag-sidebar__tag-usage-count\">{{ ::ngModel.video_tag_instance_count }} in this project</div>\n" +
    "					<div class=\"tag-sidebar__tag-description\" flex>{{ ngModel.description }}</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</md-content>\n" +
    "		<gd-backdrop ng-if=\"ngModel.selected === true\" callback=\"ngModel.selected=false\"></gd-backdrop>\n" +
    "	</md-item-content>\n" +
    "</md-item>\n"
  );


  $templateCache.put('components/gd-timed-comment/gd-timed-comment-button.html',
    "<gd-button\n" +
    "	ng-mouseenter=\"ctrl.showPreview($event)\"\n" +
    "	ng-mouseleave=\"ctrl.hidePreview($event)\"\n" +
    "	layout-fill>\n" +
    "	<img ng-src=\"{{ ::thread.user.profile_img_url }}?sz=30\" ng-if=\"::thread.user.profile_img_url\">\n" +
    "	<img ng-src=\"{{ ::defaultProfileImgUrl }}\" ng-if=\"::!thread.user.profile_img_url\">\n" +
    "</gd-button>\n"
  );


  $templateCache.put('components/gd-timed-comment/gd-timed-comment-create.html',
    "<div class=\"gd-timed-comment__user\">\n" +
    "	<img class=\"gd-timed-comment__user-avatar\" ng-src=\"{{ ::thread.user.profile_img_url }}?sz=25\" ng-if=\"::thread.user.profile_img_url\">\n" +
    "	<img class=\"gd-timed-comment__user-avatar\" ng-src=\"{{ ::defaultProfileImgUrl }}\" ng-if=\"::!thread.user.profile_img_url\">\n" +
    "</div>\n" +
    "<form ng-submit=\"save()\">\n" +
    "	<holo-spinner ng-show=\"saving\"></holo-spinner>\n" +
    "	<input ng-model=\"thread.text\" placeholder=\"Enter your comment\" ng-readonly=\"saving\" class=\"gd-timed-comment__input\">\n" +
    "	<div class=\"gd-timed-comment-popup__actions\" layout=\"horizontal\" layout-align=\"end center\">\n" +
    "		<md-button type=\"button\" ng-click=\"cancel()\" ng-disabled=\"saving\" aria-label=\"Cancel\">Cancel</md-button>\n" +
    "		<md-button type=\"submit\" md-primary ng-disabled=\"saving\" aria-label=\"Post Comment\">Comment</md-button>\n" +
    "	</div>\n" +
    "</form>\n"
  );


  $templateCache.put('components/gd-timed-comment/gd-timed-comment-menu.html',
    "<gd-floating-menu-item icon=\"ic-edit\" ng-click=\"menuData.editReply()\">Edit</gd-floating-menu-item>\n" +
    "<gd-floating-menu-item icon=\"ic-delete\" ng-click=\"menuData.deleteReply()\" ng-if=\"menuData.showDelete\">Remove</gd-floating-menu-item>\n"
  );


  $templateCache.put('components/gd-timed-comment/gd-timed-comment-popup.html',
    "<div class=\"gd-timed-comment-popup__header\" layout=\"horizontal\" layout-align=\"start center\">\n" +
    "	<span flex>{{ ::thread.start_seconds | duration }}</span>\n" +
    "	<gd-button\n" +
    "		ng-if=\"user.id === thread.user.id && state.mode != 'CREATE' && state.mode != 'READONLY' && state.mode != 'PREVIEW'\"\n" +
    "		async=\"deleteThread()\">\n" +
    "		<icon class=\"ic-delete\"></icon>\n" +
    "	</gd-button>\n" +
    "</div>\n" +
    "<md-content ng-if=\"state.mode != 'CREATE'\">\n" +
    "	<gd-timed-comment comment=\"thread\" mode=\"state.mode\" thread=\"thread\"></gd-timed-comment>\n" +
    "	<div>\n" +
    "		<ol class=\"gd-timed-comment-popup__replies\">\n" +
    "			<li ng-repeat=\"reply in thread.replies track by reply.id\">\n" +
    "				<gd-timed-comment mode=\"state.mode\" comment=\"reply\" thread=\"thread\"></gd-timed-comment>\n" +
    "			</li>\n" +
    "		</ol>\n" +
    "	</div>\n" +
    "</md-content>\n" +
    "\n" +
    "<div class=\"gd-timed-comment-popup__add-comment\" ng-if=\"state.mode == 'REPLY'\">\n" +
    "	<div class=\"gd-timed-comment__user\">\n" +
    "	<div class=\"gd-timed-comment__user-name\">{{ ::comment.user.first_name }} {{ ::comment.user.last_name }}</div>\n" +
    "		<time class=\"gd-timed-comment__user-comment-time\" datetime=\"FIXME\">{{ ::comment.created }}</time>\n" +
    "	</div>\n" +
    "	<img class=\"gd-timed-comment__user-avatar\" ng-src=\"{{ ::user.profile_img_url }}?sz=25\" ng-if=\"::user.profile_img_url\">\n" +
    "	<img class=\"gd-timed-comment__user-avatar\" ng-src=\"{{ ::defaultProfileImgUrl }}\" ng-if=\"::!user.profile_img_url\">\n" +
    "	<form ng-submit=\"addComment(state.newComment)\">\n" +
    "		<holo-spinner ng-show=\"submitting\"></holo-spinner>\n" +
    "		<input ng-model=\"state.newComment\" placeholder=\"Reply\" ng-readonly=\"submitting\" class=\"gd-timed-comment__input\">\n" +
    "		<div class=\"gd-timed-comment-popup__actions\" layout=\"horizontal\" layout-align=\"end center\">\n" +
    "			<md-button type=\"button\" ng-click=\"cancel()\" ng-disabled=\"submitting || deleting\" aria-label=\"Cancel\">Cancel</md-button>\n" +
    "			<md-button type=\"submit\" md-primary ng-disabled=\"submitting || deleting\" aria-label=\"Add Reply\">Reply</md-button>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"state.mode == 'CREATE'\">\n" +
    "	<gd-timed-comment-create thread=\"thread\" state=\"state\"></gd-timed-comment-create>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-timed-comment/gd-timed-comment.html',
    "<gd-floating-menu-button\n" +
    "	align-to=\"right\"\n" +
    "	menu-template-url=\"components/gd-timed-comment/gd-timed-comment-menu.html\"\n" +
    "	menu-data=\"menuData\"\n" +
    "	menu-z-index=\"2001\"\n" +
    "	ng-if=\"user.id === comment.user.id && !editing && mode != 'READONLY'\"\n" +
    ">\n" +
    "	<icon class=\"ic-more-vert\"></icon>\n" +
    "</gd-floating-menu-button>\n" +
    "<div class=\"gd-timed-comment__user\">\n" +
    "	<div class=\"gd-timed-comment__user-name\">{{ ::comment.user.first_name }} {{ ::comment.user.last_name }}</div>\n" +
    "	<time class=\"gd-timed-comment__user-comment-time\" datetime=\"{{ ::comment.created }}\">{{ ::comment.c_pretty_created_date }}</time>\n" +
    "	<img class=\"gd-timed-comment__user-avatar\" ng-src=\"{{ ::comment.user.profile_img_url }}?sz=25\" ng-if=\"::comment.user.profile_img_url\">\n" +
    "	<img class=\"gd-timed-comment__user-avatar\" ng-src=\"{{ ::defaultProfileImgUrl }}\" ng-if=\"::!comment.user.profile_img_url\">\n" +
    "</div>\n" +
    "<div>\n" +
    "	<div ng-if=\"!editing\" class=\"gd-timed-comment__comment\">\n" +
    "		{{ comment.text }}\n" +
    "	</div>\n" +
    "	<div ng-if=\"editing\">\n" +
    "		<form ng-submit=\"timedCommentCtrl.save()\">\n" +
    "			<textarea ng-model=\"data.editingText\" class=\"gd-multiline-field\"></textarea>\n" +
    "			<div class=\"gd-timed-comment__actions\" layout=\"horizontal\" layout-align=\"end center\">\n" +
    "				<md-button type=\"button\" ng-click=\"timedCommentCtrl.cancelEditing()\" ng-disabled=\"saving\" aria-label=\"Cancel Editing\">Cancel</md-button>\n" +
    "				<md-button type=\"submit\" md-primary ng-disabled=\"saving\" aria-label=\"Save Changes\">Save</md-button>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"gd-timed-comment__overlay\" ng-if=\"saving\" layout=\"horizontal\" layout-align=\"center center\">\n" +
    "	<holo-spinner></holo-spinner><span>Saving comment</span>\n" +
    "</div>\n" +
    "<div class=\"gd-timed-comment__overlay\" ng-if=\"deleting\" layout=\"horizontal\" layout-align=\"center center\">\n" +
    "	<holo-spinner></holo-spinner><span>Deleting comment</span>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-video-adder/gd-video-adder.html',
    "<md-content class=\"bottom-sheet__panel--add-to slide-bottom-sheet-panel ng-hide\" ng-show=\"isVisible\" layout=\"row\" layout-align=\"start start\" flex>\n" +
    "	<div class=\"bottom-sheet__panel-section\" flex=\"30\">\n" +
    "		<gd-project-selector ng-model=\"ctrl.selectedProject\"></gd-project-selector>\n" +
    "	</div>\n" +
    "	<div class=\"bottom-sheet__panel-section\" flex=\"30\">\n" +
    "		<gd-collection-selector ng-model=\"ctrl.selectedCollection\" project=\"project\"></gd-collection-selector>\n" +
    "	</div>\n" +
    "	<div class=\"bottom-sheet__panel-section\" layout=\"row\" flex=\"40\">\n" +
    "		<md-content class=\"bottom-sheet__panel__big-content\" layout-fill layout-align=\"vertical\" layout-align=\"center center\">\n" +
    "			<div class=\"bottom-sheet__panel-hero\">\n" +
    "				<ng-pluralize count=\"videos.length\" when=\"{'one': '1 video selected', 'other': '{} videos selected'}\"></ng-pluralize>\n" +
    "			</div>\n" +
    "			<div class=\"bottom-sheet__panel-info\">\n" +
    "				<div ng-show=\"!ctrl.selectedProject\">Select a project to start</div>\n" +
    "				<div ng-show=\"ctrl.selectedProject && !ctrl.selectedCollection\">Now select a collection</div>\n" +
    "				<div ng-show=\"ctrl.selectedProject && ctrl.selectedCollection\">\n" +
    "					This will add\n" +
    "					<ng-pluralize count=\"videos.length\" when=\"{'one': 'this 1 video', 'other': 'these {} videos'}\"></ng-pluralize>\n" +
    "					to the\n" +
    "					<span ng-if=\"ctrl.selectedCollection === 'library'\">project '{{ ctrl.selectedProject.name }}'</span>\n" +
    "					<span ng-if=\"ctrl.selectedCollection !== 'library'\">collection '{{ ctrl.selectedCollection.name }}'</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bottom-sheet__panel-actions fade ng-hide\" ng-show=\"ctrl.selectedProject && ctrl.selectedCollection\" layout=\"row\" layout-align=\"start center\">\n" +
    "				<md-button ng-click=\"ctrl.addVideos(videos)\" aria-label=\"OK\" md-no-ink class=\"md-accent\">OK</md-button>\n" +
    "				<md-button ng-click=\"ctrl.reset()\" aria-label=\"Cancel\" md-no-ink class=\"md-primary\">Cancel</md-button>\n" +
    "			</div>\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "	<md-content class=\"bottom-sheet__panel-results ng-hide slide\" ng-show=\"ctrl.addingVideos || ctrl.results.length\">\n" +
    "		<section ng-show=\"ctrl.addingVideos\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "			<holo-spinner></holo-spinner>\n" +
    "		</section>\n" +
    "		<div class=\"bottom-sheet__close-button\">\n" +
    "			<gd-button ng-click=\"ctrl.results = []\">\n" +
    "				<icon class=\"ic-close\"></icon>\n" +
    "			</gd-button>\n" +
    "		</div>\n" +
    "		<md-list>\n" +
    "			<md-item ng-repeat=\"result in ctrl.results\" ng-class=\"{'success': result.success}\">\n" +
    "				<md-item-content>\n" +
    "					<div class=\"md-tile-left\" layout=\"column\" layout-align=\"center center\">\n" +
    "						<icon ng-class=\"{'ic-check': result.success, 'ic-clear': !results.success}\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"md-tile-content\">\n" +
    "						<h3>{{ result.video.name }}</h3>\n" +
    "						<p ng-if=\"result.video.channel_name\">by {{ result.video.channel_name }}</p>\n" +
    "						<h4 ng-if=\"!result.success\">{{ result.msg }}</h4>\n" +
    "					</div>\n" +
    "				</md-item-content>\n" +
    "			</md-item>\n" +
    "		</md-list>\n" +
    "	</md-content>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/gd-video-controls/gd-video-controls.html',
    "<gd-button ng-click=\"ctrl.skipTime(-5)\" ng-disabled=\"!player.$ytPlayerApi\" ng-show=\"player.state.isPlaying\">\n" +
    "	<md-tooltip>\n" +
    "		Jump backward 5 seconds\n" +
    "	</md-tooltip>\n" +
    "	<icon class=\"ic-fast-rewind\"></icon>\n" +
    "</gd-button>\n" +
    "<gd-button ng-click=\"ctrl.skipTime(-1)\" ng-disabled=\"!player.$ytPlayerApi\" ng-show=\"player.state.isPlaying\">\n" +
    "	<md-tooltip>\n" +
    "		Jump backward 1 second\n" +
    "	</md-tooltip>\n" +
    "	<icon class=\"ic-skip-previous\"></icon>\n" +
    "</gd-button>\n" +
    "<gd-button ng-click=\"ctrl.skipFrames(-1)\" ng-disabled=\"!player.$ytPlayerApi\" ng-hide=\"player.state.isPlaying\">\n" +
    "	<md-tooltip>\n" +
    "		Jump backward 1 frame\n" +
    "	</md-tooltip>\n" +
    "	<icon class=\"ic-skip-previous\"></icon>\n" +
    "</gd-button>\n" +
    "<gd-button ng-click=\"ctrl.togglePlay()\">\n" +
    "	<icon class=\"ic-play-arrow\" ng-hide=\"player.state.isPlaying\"></icon>\n" +
    "	<icon class=\"ic-pause\" ng-show=\"player.state.isPlaying\"></icon>\n" +
    "</gd-button>\n" +
    "<gd-button ng-click=\"ctrl.skipFrames(1)\" ng-disabled=\"!player.$ytPlayerApi\" ng-hide=\"player.state.isPlaying\">\n" +
    "	<md-tooltip>\n" +
    "		Jump forward 1 frame\n" +
    "	</md-tooltip>\n" +
    "	<icon class=\"ic-skip-next\"></icon>\n" +
    "</gd-button>\n" +
    "<gd-button ng-click=\"ctrl.skipTime(1)\" ng-disabled=\"!player.$ytPlayerApi\" ng-show=\"player.state.isPlaying\">\n" +
    "	<md-tooltip>\n" +
    "		Jump forward 1 second\n" +
    "	</md-tooltip>\n" +
    "	<icon class=\"ic-skip-next\"></icon>\n" +
    "</gd-button>\n" +
    "<gd-button ng-click=\"ctrl.skipTime(5)\" ng-disabled=\"!player.$ytPlayerApi\" ng-show=\"player.state.isPlaying\">\n" +
    "	<md-tooltip>\n" +
    "		Jump forward 5 seconds\n" +
    "	</md-tooltip>\n" +
    "	<icon class=\"ic-fast-forward\"></icon>\n" +
    "</gd-button>\n"
  );


  $templateCache.put('components/gd-video-details-map/gd-video-details-map.html',
    "<div class=\"gd-video-details-map__wrapper\" ng-if=\"video.project_id || hasLocation()\">\n" +
    "	<ui-gmap-google-map\n" +
    "		center=\"ctrl.map.center\"\n" +
    "		control=\"ctrl.map\"\n" +
    "		draggable=\"true\"\n" +
    "		options=\"ctrl.mapOptions\"\n" +
    "		zoom=\"ctrl.map.zoom\">\n" +
    "\n" +
    "		<ui-gmap-search-box\n" +
    "			ng-if=\"!video.archived_at && video.project_id\"\n" +
    "			template='ctrl.searchbox.template'\n" +
    "			parentdiv=\"'gd-video-details-map-searchbox'\"\n" +
    "			options='ctrl.searchbox.options'\n" +
    "			events='ctrl.searchbox.events'>\n" +
    "		</ui-gmap-search-box>\n" +
    "\n" +
    "		<!--<ui-gmap-marker\n" +
    "			idKey=\"video-location-marker\"\n" +
    "			options=\"ctrl.marker.options\"\n" +
    "			coords=\"ctrl.marker.coords\">\n" +
    "		</ui-gmap-marker>-->\n" +
    "\n" +
    "		<ui-gmap-markers\n" +
    "			models=\"ctrl.markers\"\n" +
    "			doCluster=\"true\"\n" +
    "			idKey=\"'id'\"\n" +
    "			coords=\"'coords'\"\n" +
    "			clusterOptions=\"ctrl.markerClusterer.options\"\n" +
    "			doRebuildAll=\"true\"\n" +
    "		></ui-gmap-markers>\n" +
    "\n" +
    "	</ui-gmap-google-map>\n" +
    "\n" +
    "	<div class=\"gd-video-details-map__top-controls\" layout=\"row\">\n" +
    "		<div\n" +
    "			ng-if=\"!video.archived_at && video.project_id\"\n" +
    "			class=\"gd-video-details-map__search\"\n" +
    "			id=\"gd-video-details-map-searchbox\"\n" +
    "			flex\n" +
    "			layout=\"row\"\n" +
    "			layout-align=\"start center\">\n" +
    "\n" +
    "			<icon class=\"ic-search\"></icon>\n" +
    "\n" +
    "		</div>\n" +
    "		<div flex ng-if=\"!!video.archived_at || !video.project_id\"></div>\n" +
    "		<gd-button ng-click=\"ctrl.collapseMap($event)\">\n" +
    "			<icon class=\"ic-unfold-less\"></icon>\n" +
    "		</gd-button>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-if=\"!video.archived_at && video.project_id\" class=\"gd-video-details-map__location-picker-indicator\">\n" +
    "		<icon class=\"ic-location-searching\" ng-show=\"ctrl.editMode\" class=\"ic-texture\"></icon>\n" +
    "	</div>\n" +
    "	<div\n" +
    "		class=\"gd-video-details-map__bottom-left-controls\"\n" +
    "		layout=\"row\"\n" +
    "		ng-if=\"!video.archived_at && video.project_id\">\n" +
    "		<div class=\"gd-video-details-map__hover-wrapper\"\n" +
    "			ng-mouseenter=\"ctrl.showImpreciseLocationButton = true\"\n" +
    "			ng-mouseleave=\"ctrl.showImpreciseLocationButton = false\">\n" +
    "			<md-button\n" +
    "				aria-label=\"Imprecise location\"\n" +
    "				ng-show=\"ctrl.editMode && ctrl.showImpreciseLocationButton\"\n" +
    "				ng-click=\"ctrl.setImpreciseLocation()\"\n" +
    "				class=\"gd-map-button md-fab gd-video-details-map__set-imprecise-location\"\n" +
    "				layout=\"row\" layout-align=\"center center\">\n" +
    "\n" +
    "				<icon class=\"ic-gps-not-fixed\"></icon>\n" +
    "				<md-tooltip>Imprecise Location</md-tooltip>\n" +
    "\n" +
    "			</md-button>\n" +
    "			<md-button\n" +
    "				aria-label=\"Precise location\"\n" +
    "				ng-show=\"ctrl.editMode\"\n" +
    "				ng-click=\"ctrl.setLocation()\"\n" +
    "				class=\"md-primary gd-map-button md-fab gd-video-details-map__set-location\"\n" +
    "				layout=\"row\" layout-align=\"center center\">\n" +
    "\n" +
    "				<icon class=\"ic-gps-fixed\"></icon>\n" +
    "				<md-tooltip>Precise Location</md-tooltip>\n" +
    "			</md-button>\n" +
    "		</div>\n" +
    "		<md-button\n" +
    "			aria-label=\"Restore YouTube Location Data\"\n" +
    "			ng-show=\"ctrl.editMode && video.location_overridden && ytVideoData.recordingDetails.location.latitude\"\n" +
    "			ng-click=\"ctrl.revertLocation()\"\n" +
    "			class=\"gd-map-button md-fab gd-video-details-map__revert\"\n" +
    "			layout=\"row\" layout-align=\"center center\">\n" +
    "\n" +
    "			<icon class=\"ic-settings-backup-restore\"></icon>\n" +
    "			<md-tooltip>Restore YouTube Location Data</md-tooltip>\n" +
    "\n" +
    "		</md-button>\n" +
    "		<md-button\n" +
    "			ng-if=\"video.latitude\"\n" +
    "			aria-label=\"Remove location data\"\n" +
    "			ng-show=\"ctrl.editMode && video.latitude\"\n" +
    "			ng-click=\"ctrl.removeLocation()\"\n" +
    "			class=\"gd-map-button md-fab gd-video-details-map__undo\"\n" +
    "			layout=\"row\" layout-align=\"center center\">\n" +
    "			<icon class=\"ic-delete\"></icon>\n" +
    "			<md-tooltip>Remove location data</md-tooltip>\n" +
    "		</md-button>\n" +
    "	</div>\n" +
    "	<span flex></span>\n" +
    "	<div class=\"gd-video-details-map__bottom-right-controls\" layout=\"row\">\n" +
    "		<md-button aria-label=\"{{ ctrl.currentMapType.title }}\" class=\"gd-map-button gd-video-details-map__map-type\" ng-click=\"ctrl.onMapTypeClicked()\">{{ ctrl.currentMapType.title }}</md-button>\n" +
    "		<div class=\"gd-video-details-map__map-zoom-controls\" layout=\"row\">\n" +
    "			<md-button\n" +
    "				aria-label=\"Zoom out\"\n" +
    "				class=\"gd-map-button gd-video-details-map__map-zoom gd-video-details-map__map-zoom--out\"\n" +
    "				ng-click=\"ctrl.onZoomOutClicked()\"\n" +
    "				layout=\"row\" layout-align=\"center center\">\n" +
    "\n" +
    "				<icon class=\"ic-remove\"></icon>\n" +
    "\n" +
    "			</md-button>\n" +
    "			<md-button\n" +
    "				aria-label=\"Zoom in\"\n" +
    "				ng-click=\"ctrl.onZoomInClicked()\"\n" +
    "				class=\"gd-map-button gd-video-details-map__map-zoom gd-video-details-map__map-zoom--in\"\n" +
    "				layout=\"row\" layout-align=\"center center\">\n" +
    "\n" +
    "				<icon class=\"ic-add\"></icon>\n" +
    "\n" +
    "			</md-button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div\n" +
    "	class=\"gd-video-details-map__expand-trigger\"\n" +
    "	ng-click=\"ctrl.expandMap($event)\"\n" +
    "	ng-hide=\"expanded\">\n" +
    "\n" +
    "	<button\n" +
    "		ng-hide=\"ctrl.editMode\"\n" +
    "		ng-if=\"!video.archived_at && video.project_id && !hasLocation()\"\n" +
    "		class=\"video-theater__location-prompt\"\n" +
    "		layout=\"row\" layout-align=\"center center\"\n" +
    "		ng-click=\"ctrl.expandMap($event)\">\n" +
    "		<icon class=\"ic-location-on\"></icon><span>Set Location</span>\n" +
    "	</button>\n" +
    "	<div\n" +
    "		class=\"video-theater__location-prompt\"\n" +
    "		ng-if=\"!!video.archived_at && !hasLocation()\"\n" +
    "		layout=\"row\" layout-align=\"center center\">\n" +
    "		No location is set\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"gd-video-details-map__marker_anchor\" ng-hide=\"expanded\">\n" +
    "	<md-tooltip md-direction=\"bottom\" ng-if=\"video.location_overridden\">Edited by a Montage user</md-tooltip>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-video-details-map/gd-video-details-searchbox.html',
    "<input class=\"gd-video-details-map__search-input\" type=\"text\" placeholder=\"Search map\">\n"
  );


  $templateCache.put('components/gd-video-details-panel/gd-video-details-panel.html',
    "<div class=\"video-theater__channel-details\" layout=\"row\" layout-align=\"start center\">\n" +
    "	<span class=\"video-theater__channel-name\" flex>{{ ::gdVideoData.channel_name }}</span>\n" +
    "	<div ng-if=\"::gdVideoData.project_id\" class=\"video-theater__quick-actions\" layout=\"row\">\n" +
    "		<gd-favourite-video-button ng-if=\"!gdVideoData.archived_at\" video=\"gdVideoData\"></gd-favourite-video-button>\n" +
    "		<gd-archive-video-button video=\"gdVideoData\"></gd-archive-video-button>\n" +
    "	</div>\n" +
    "	<gd-floating-menu-button ng-if=\"::gdVideoData.project_id\" menu-template-url=\"pages/video/video-dropdown.html\" menu-data=\"videoDetailsPanelCtrl.menuData\" align-to=\"right\">\n" +
    "		<icon class=\"ic-more-vert\"></icon>\n" +
    "	</gd-floating-menu-button>\n" +
    "</div>\n" +
    "<div class=\"video-theater__video-meta\">\n" +
    "	<div class=\"video-theater__view-count\">\n" +
    "		<icon class=\"ic-remove-red-eye\"></icon>\n" +
    "		<span class=\"video-theater__metric\">{{ ::ytVideoData.statistics.viewCount | number }}</span> views\n" +
    "	</div>\n" +
    "	<div class=\"video-theater__uploaded-date\">\n" +
    "		<icon class=\"ic-file-upload\"></icon>\n" +
    "		Published <span class=\"video-theater__metric\">{{ ::gdVideoData.publish_date | date:'dd MMMM yyyy':'UTC' }}</span>\n" +
    "	</div>\n" +
    "	<div class=\"video-theater__recorded-date\">\n" +
    "		<icon class=\"ic-camera-alt\"></icon>\n" +
    "\n" +
    "		<span ng-if=\"displayDate && gdVideoData.archived_at\" class=\"video-theater__metric\">\n" +
    "			<span>Recorded {{ displayDate | date:'dd MMMM yyyy':'UTC' }}\n" +
    "			<md-tooltip ng-if=\"gdVideoData.recorded_date_overridden\">Overridden by a Montage user</md-tooltip></span>\n" +
    "		</span>\n" +
    "\n" +
    "		<span ng-if=\"displayDate && !gdVideoData.archived_at\" class=\"video-theater__metric\">\n" +
    "			<span>Recorded {{ displayDate | date:'dd MMMM yyyy':'UTC' }}\n" +
    "			<md-tooltip ng-if=\"gdVideoData.recorded_date_overridden\">Overridden by a Montage user</md-tooltip></span>\n" +
    "\n" +
    "			<gd-popup align-to=\"top center\" align-edge=\"top center\" position=\"outside\" gap-y=\"10\">\n" +
    "				<gd-popup-button>\n" +
    "					<md-button class=\"md-primary video-theater__recorded-date__change\">Change</md-button>\n" +
    "				</gd-popup-button>\n" +
    "				<gd-popup-content>\n" +
    "					<gd-datepicker on-date-select=\"_popupInstance.close()\" ng-model=\"data.datepickerDate\"></gd-datepicker>\n" +
    "				</gd-popup-content>\n" +
    "			</gd-popup>\n" +
    "			<md-button class=\"video-theater__recorded-date__revert\" ng-if=\"gdVideoData.recorded_date_overridden\" ng-click=\"videoDetailsPanelCtrl.revertDate()\">Revert</md-button>\n" +
    "		</span>\n" +
    "		<span ng-if=\"!displayDate && !gdVideoData.archived_at\" class=\"video-theater__metric video-theater__metric--overrideable\">\n" +
    "			<gd-popup align-to=\"top center\" align-edge=\"top center\" position=\"outside\" gap-y=\"10\">\n" +
    "				<gd-popup-button>\n" +
    "					<gd-button>Set a recorded Date</gd-button>\n" +
    "				</gd-popup-button>\n" +
    "				<gd-popup-content>\n" +
    "					<gd-datepicker on-date-select=\"_popupInstance.close()\" ng-model=\"data.datepickerDate\"></gd-datepicker>\n" +
    "				</gd-popup-content>\n" +
    "			</gd-popup>\n" +
    "		</span>\n" +
    "		<span ng-if=\"!displayDate && gdVideoData.archived_at\" class=\"video-theater__metric\">\n" +
    "			No recorded date set\n" +
    "		</span>\n" +
    "	</div>\n" +
    "	<div class=\"video-theater__has-duplicates\" ng-if=\"gdVideoData.duplicate_count > 0\">\n" +
    "		<icon class=\"ic-texture\"></icon>\n" +
    "		<span class=\"video-theater__highlighted-metric\" ng-class=\"{'video-theater__link': !gdVideoData.archived_at}\" ng-click=\"!gdVideoData.archived_at ? videoDetailsPanelCtrl.manageDuplicates($event) : angular.noop()\">\n" +
    "			Video has duplicates\n" +
    "		</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<md-content flex class=\"video-theater__notes\">{{ ::ytVideoData.snippet.description }}</md-content>\n" +
    "<div class=\"video-theater__spacer\"></div>\n" +
    "<div class=\"video-theater__map\">\n" +
    "	<gd-video-details-map\n" +
    "		expanded=\"videoDetailsPanelCtrl.mapExpanded\"\n" +
    "		video=\"gdVideoData\"\n" +
    "		yt-video-data=\"ytVideoData\"\n" +
    "	></gd-video-details-map>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-video-exporter/gd-video-exporter.html',
    "<md-content class=\"bottom-sheet__panel--add-to slide-bottom-sheet-panel ng-hide\" ng-show=\"isVisible\" layout=\"row\" layout-align=\"start start\">\n" +
    "	<div class=\"bottom-sheet__panel-section\" flex=\"30\">\n" +
    "		<md-content class=\"bottom-sheet__list-wrapper\" layout-fill>\n" +
    "			<md-list class=\"bottom-sheet__list\" layout=\"column\" layout-align=\"start start\">\n" +
    "				<md-item ng-class=\"{'bottom-sheet__list-item--active': ctrl.exportType.key === type.key}\" ng-click=\"ctrl.exportType = type\" class=\"bottom-sheet__list-item\" ng-repeat=\"type in ctrl.exportTypes track by type.key\">\n" +
    "					<md-item-content>{{ type.label }}</md-item-content>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "	<div class=\"bottom-sheet__panel-section\" flex=\"30\">\n" +
    "\n" +
    "		<md-content class=\"bottom-sheet__list-wrapper\" layout-fill ng-show=\"ctrl.exportType\">\n" +
    "			<md-list class=\"bottom-sheet__list\" layout=\"column\" layout-align=\"start start\">\n" +
    "				<md-item class=\"bottom-sheet__list-item bottom-sheet__list-item--faded\">\n" +
    "					<span layout=\"row\" layout-align=\"start center\">\n" +
    "						<icon class=\"ic-info\"></icon>\n" +
    "						<span>Enter a name for your export</span>\n" +
    "					</span>\n" +
    "					<md-item-content>\n" +
    "						<md-input-container flex>\n" +
    "							<label>Export name</label>\n" +
    "							<input ng-model=\"ctrl.exportName\">\n" +
    "						</md-input-container>\n" +
    "					</md-item-content>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "		</md-content>\n" +
    "\n" +
    "	</div>\n" +
    "	<div class=\"bottom-sheet__panel-section\" layout=\"row\" flex=\"40\">\n" +
    "		<md-content class=\"bottom-sheet__panel__big-content\" layout-fill layout-align=\"vertical\" layout-align=\"center center\">\n" +
    "			<div class=\"bottom-sheet__panel-hero\">\n" +
    "				<ng-pluralize count=\"videos.length\" when=\"{'one': '1 video selected', 'other': '{} videos selected'}\"></ng-pluralize>\n" +
    "			</div>\n" +
    "			<div class=\"bottom-sheet__panel-info\">\n" +
    "				<div ng-show=\"!ctrl.exportType\">Select a an export type to start</div>\n" +
    "				<div ng-show=\"ctrl.exportType && !ctrl.exportName\">Now add a name for your export. <span ng-if=\"ctrl.exportType.key == 'csv'\">This will be used as the filename for your CSV export</span> <span ng-if=\"ctrl.exportType.key == 'kml'\">This will be used as the title for your Google Earth document. <br />Note: videos without location data will be omitted</span><span ng-if=\"ctrl.exportType.key == 'yt'\">This will be used as the title of your YouTube playlist</span></div>\n" +
    "				<div ng-show=\"ctrl.exportType && ctrl.exportName\">\n" +
    "					Export\n" +
    "					<ng-pluralize count=\"videos.length\" when=\"{'one': 'this 1 video', 'other': 'these {} videos'}\"></ng-pluralize>\n" +
    "					to {{ ctrl.exportType.label }} format.\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"bottom-sheet__panel-actions fade ng-hide\" ng-show=\"ctrl.exportType && ctrl.exportName\" layout=\"row\" layout-align=\"start center\">\n" +
    "				<md-button ng-show=\"ctrl.exportType.key == 'yt'\" ng-click=\"ctrl.exportToYouTube(videos)\" aria-label=\"OK\" md-no-ink class=\"md-accent\">Export</md-button>\n" +
    "				<form id=\"export-form\" name=\"export-form\">\n" +
    "					<input type=\"hidden\" name=\"format\" ng-value=\"ctrl.exportType.key\">\n" +
    "					<input type=\"hidden\" name=\"name\" ng-value=\"ctrl.exportName\">\n" +
    "					<input type=\"hidden\" name=\"clean_name\" ng-value=\"ctrl.exportName\">\n" +
    "					<input type=\"hidden\" name=\"vids\" ng-value=\"ctrl.exportVideoIds\">\n" +
    "					<md-button ng-hide=\"ctrl.exportType.key == 'yt'\" aria-label=\"Export\" md-no-ink class=\"md-accent md-button md-default-theme\" ng-click=\"ctrl.requestExport()\">Export</md-button>\n" +
    "				</form>\n" +
    "				<md-button ng-click=\"ctrl.reset()\" aria-label=\"Cancel\" md-no-ink class=\"md-primary\">Cancel</md-button>\n" +
    "			</div>\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "	<md-content class=\"bottom-sheet__panel-results ng-hide slide\" ng-show=\"ctrl.ytExportProg || ctrl.ytPlaylistUrl\" layout=\"column\">\n" +
    "		<div class=\"bottom-sheet__close-button\">\n" +
    "			<gd-button>\n" +
    "				<icon class=\"ic-close\" ng-click=\"ctrl.reset()\"></icon>\n" +
    "			</gd-button>\n" +
    "		</div>\n" +
    "		<md-list class=\"md-padding\">\n" +
    "			<md-item ng-show=\"ctrl.ytPlaylistUrl\">\n" +
    "				<md-item-content>\n" +
    "					<div class=\"md-tile-content\">\n" +
    "						<h3>YouTube playlist created</h3>\n" +
    "						<p><a href=\"{{ ctrl.ytPlaylistUrl }}\" target=\"_blank\">{{ ctrl.ytPlaylistUrl }}</a></p>\n" +
    "					</div>\n" +
    "				</md-item-content>\n" +
    "			</md-item>\n" +
    "			<md-divider ng-show=\"ctrl.ytPlaylistUrl\"></md-divider>\n" +
    "			<md-progress-linear md-mode=\"determinate\" ng-value=\"ctrl.ytExportProg\" ng-show=\"ctrl.ytPlaylistUrl && ctrl.ytExportProg\"></md-progress-linear>\n" +
    "			<md-item ng-repeat=\"result in ctrl.ytVideoResults\" ng-class=\"{'success': result.status == 1}\">\n" +
    "				<md-item-content>\n" +
    "					<div class=\"md-tile-left\" layout=\"column\" layout-align=\"center center\">\n" +
    "						<icon ng-class=\"{'ic-check': result.status == 1, 'ic-clear': result.status == 2}\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"md-tile-content\">\n" +
    "					<h3>{{ result.video.name }}</h3>\n" +
    "					<h4 ng-if=\"result.status == 2\">{{ result.msg }}</h4>\n" +
    "					</div>\n" +
    "				</md-item-content>\n" +
    "			</md-item>\n" +
    "		</md-list>\n" +
    "	</md-content>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/gd-video-list/gd-video-list-item.html',
    "<div class=\"video-list-item\" layout=\"row\">\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__reorder\">\n" +
    "		<icon class=\"ic-reorder\"></icon>\n" +
    "	</div>\n" +
    "	<div class=\"video-list-item__cell video-list-item__image\">\n" +
    "		<a href=\"{{ video.theatre_url }}\" class=\"video-list-item__video-link\" ng-if=\"::(!video.missing_from_youtube)\">\n" +
    "			<img ng-src=\"{{ ::video.c_thumbnail_url }}\">\n" +
    "			<span class=\"video-list-item__duration\">{{ ::video.pretty_duration }}</span>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "	<div flex layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__video-title\">\n" +
    "		<a href=\"{{ video.theatre_url }}\" class=\"video-list-item__name video-list-item__video-link\">{{ ::video.name }}</a>\n" +
    "	</div>\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__channel-name\">\n" +
    "		<span>{{ ::video.channel_name }}</span>\n" +
    "	</div>\n" +
    "	<div layout=\"row\" layout-align=\"start center\" class=\"video-list-item__cell video-list-item__watch-count\">\n" +
    "		<icon class=\"ic-visibility\"></icon>\n" +
    "		{{ ::video.watch_count }}\n" +
    "	</div>\n" +
    "	<div layout=\"row\" layout-align=\"start center\" class=\"video-list-item__cell video-list-item__tag-count\">\n" +
    "		<icon class=\"ic-label\"></icon>\n" +
    "		{{ video.tag_count }}\n" +
    "	</div>\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__added\">\n" +
    "		{{ ::video.pretty_publish_date }}\n" +
    "	</div>\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__added\">\n" +
    "		{{ ::video.pretty_created }}\n" +
    "	</div>\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__favourite\">\n" +
    "		<gd-favourite-video-button video=\"video\" ng-if=\"::(!video.missing_from_youtube)\"></gd-favourite-video-button>\n" +
    "	</div>\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__select\">\n" +
    "		<gd-select-video-button ng-if=\"::(!video.missing_from_youtube)\" selected=\"video.selected\"></gd-select-video-button>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-video-list/gd-video-list.html',
    "<md-content class=\"video-list\" ng-class=\"{'isCollection': ctrl.isCollection && ctrl.enableManualOrdering}\">\n" +
    "	<gd-progress ng-if=\"ctrl.fetchingInBackground\"></gd-progress>\n" +
    "	<div class=\"video-list__container\" layout=\"column\" flex>\n" +
    "		<div class=\"project__summary\">\n" +
    "			<div class=\"project__summary-title\">This collection contains</div>\n" +
    "			<div layout=\"row\">\n" +
    "				<div class=\"project__summary-count\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-movie\"></icon>\n" +
    "					<ng-pluralize count=\"ctrl.listInfo.videoCount\" when=\"{'0': 'No videos', 'one': '1 video', 'other': '{} videos'}\"></ng-pluralize>\n" +
    "				</div>\n" +
    "				<div class=\"project__summary-count\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-access-time\"></icon>\n" +
    "					<ng-pluralize ng-if=\"ctrl.listInfo.totalDuration.hours\" count=\"ctrl.listInfo.totalDuration.hours\" when=\"{'one': '1 hour', 'other': '{} hours'}\"></ng-pluralize>\n" +
    "					<span ng-if=\"ctrl.listInfo.totalDuration.hours && ctrl.listInfo.totalDuration.minutes\">&nbsp;and&nbsp;</span>\n" +
    "					<ng-pluralize count=\"ctrl.listInfo.totalDuration.minutes\" when=\"{'one': '1 minute', 'other': '{} minutes'}\"></ng-pluralize>\n" +
    "					<span>&nbsp;of footage</span>\n" +
    "				</div>\n" +
    "				<div class=\"project__summary-count\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-label\"></icon>\n" +
    "					<ng-pluralize count=\"ctrl.listInfo.totalTagCount\" when=\"{'0': 'No tag instances', 'one': '1 tag instance', 'other': '{} tag instances'}\"></ng-pluralize>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<section class=\"video-list__wrapper\">\n" +
    "			<md-subheader class=\"md-primary md-sticky-no-effect\">\n" +
    "				<div class=\"video-list__thead\" layout=\"row\">\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--reorder\" layout=\"row\" layout-align=\"center center\"><icon class=\"ic-reorder\"></icon></div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--video-image\"></div>\n" +
    "					<div flex class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-name\" ng-click=\"ctrl.sort('name')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'name', reverse: ctrl.ordering.currentKey === 'name' && ctrl.ordering.reverse}\">\n" +
    "						Video title\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--channel-name\" ng-click=\"ctrl.sort('channel_name')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'channel_name', reverse: ctrl.ordering.currentKey === 'channel_name' && ctrl.ordering.reverse}\">\n" +
    "						Uploader\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-watch-count\" ng-click=\"ctrl.sort('watch_count')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'watch_count', reverse: ctrl.ordering.currentKey === 'watch_count' && ctrl.ordering.reverse}\">\n" +
    "						Views\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-tag-count\" ng-click=\"ctrl.sort('tag_count')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'tag_count', reverse: ctrl.ordering.currentKey === 'tag_count' && ctrl.ordering.reverse}\">\n" +
    "						Tags\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-date\" ng-click=\"ctrl.sort('publish_date')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'publish_date', reverse: ctrl.ordering.currentKey === 'publish_date' && ctrl.ordering.reverse}\">\n" +
    "						Published\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-date\" ng-click=\"ctrl.sort('created')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'created', reverse: ctrl.ordering.currentKey === 'created' && ctrl.ordering.reverse}\">\n" +
    "						Added\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--favourite\" layout=\"row\" layout-align=\"center center\"><icon class=\"ic-star\"></icon></div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--favourite\" layout=\"row\" layout-align=\"center center\" ng-click=\"ctrl.selectAllVideos(!ctrl.allSelected)\"><icon ng-class=\"{'ic-check-box': ctrl.allSelected, 'ic-check-box-outline-blank': !ctrl.allSelected}\"></icon></div>\n" +
    "				</div>\n" +
    "			</md-subheader>\n" +
    "			<div class=\"video-list__tbody\" layout=\"column\">\n" +
    "				<div class=\"video-list__item\" ng-repeat=\"video in videos | filter:quickFilter | orderBy:ctrl.ordering.currentKey:ctrl.ordering.reverse track by video.id\" draggable=\"{{ ::(ctrl.isCollection && ctrl.enableManualOrdering === true ? true : false) }}\" draggable-data=\"{{ ::video.youtube_id }}\" droppable droppable-data=\"{{ ::video.youtube_id }}\" on-drop=\"ctrl.onDrop\">\n" +
    "					<gd-video-list-item flex video=\"::video\"></gd-video-list-item>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</section>\n" +
    "	</div>\n" +
    "</md-content>\n" +
    "<gd-selected-videos-bottom-sheet selected-project=\"ctrl.project\" selected-tab=\"options.selectedTab\" videos=\"ctrl.selectedVideos\" actions=\"options.bottomSheetActions\"></gd-selected-videos-bottom-sheet>\n"
  );


  $templateCache.put('components/gd-video-popup/gd-video-popup.html',
    "<span class=\"video-popup md-whiteframe-z2\" layout=\"column\">\n" +
    "	<span class=\"video-popup__link\" ng-style=\"{'background-image': 'url(//i3.ytimg.com/vi/' + video.youtube_id + '/mqdefault.jpg)'}\">\n" +
    "		<span class=\"video-popup__duration\">{{ ::video.duration | duration }}</span>\n" +
    "	</span>\n" +
    "	<span class=\"video-popup__content\">\n" +
    "		<span class=\"video-popup__title\">{{ ::video.name }}</span>\n" +
    "		<span class=\"video-popup__channel\">by {{ ::video.channel_name }}</span>\n" +
    "	</span>\n" +
    "</span>\n"
  );


  $templateCache.put('components/gd-video-timeline/gd-video-timeline-tag-instance.html',
    "<div class=\"gd-video-timeline-tag-instance__wrap\"\n" +
    "	ng-mouseenter=\"onTagMouseenter()\"\n" +
    "	ng-mouseleave=\"onTagMouseleave()\">\n" +
    "	<div\n" +
    "		ng-if=\"!video.archived_at\"\n" +
    "		class=\"gd-video-timeline-tag-instance__handle gd-video-timeline-tag-instance__handle--left\"\n" +
    "		ng-mouseenter=\"onResizeHandleMouseEnter('start', $event)\"\n" +
    "		ng-mouseleave=\"onResizeHandleMouseLeave()\"\n" +
    "		ng-mousedown=\"onResizeHandleMouseDown($event)\">\n" +
    "	</div>\n" +
    "\n" +
    "	<div\n" +
    "		class=\"gd-video-timeline-tag-instance__fine-tune gd-video-timeline-tag-instance__fine-tune--{{fineTuneSide}} fade\"\n" +
    "		ng-show=\"fineTuneVisible\">\n" +
    "		<button\n" +
    "			class=\"gd-video-timeline-tag-instance__fine-tune-btn gd-video-timeline-tag-instance__fine-tune-btn--backwards\"\n" +
    "			ng-click=\"ctrl.fineTune('backwards')\">\n" +
    "				<icon class=\"ic-arrow-drop-up\"></icon>\n" +
    "			</button>\n" +
    "		<button\n" +
    "			class=\"gd-video-timeline-tag-instance__fine-tune-btn gd-video-timeline-tag-instance__fine-tune-btn--forwards\"\n" +
    "			ng-click=\"ctrl.fineTune('forwards')\">\n" +
    "				<icon class=\"ic-arrow-drop-up\"></icon>\n" +
    "			</button>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"gd-video-timeline-tag-instance__content\" ng-click=\"ctrl.playFromTag($event)\">\n" +
    "		<gd-youtube-thumbnail time=\"instance.start_seconds\" video-id=\"video.youtube_id\" class=\"gd-video-timeline-tag-instance__thumb\"></gd-youtube-thumbnail>\n" +
    "	</div>\n" +
    "\n" +
    "	<div ng-if=\"!video.archived_at\" class=\"gd-video-timeline-tag-instance__controls-wrap\" ng-show=\"controlsVisible\">\n" +
    "		<div class=\"gd-video-timeline-tag-instance__controls\" layout=\"row\">\n" +
    "			<gd-button ng-click=\"ctrl.expandToDuration($event)\">\n" +
    "				<icon class=\"ic-texture\"></icon>\n" +
    "			</gd-button>\n" +
    "			<gd-button async=\"ctrl.deleteInstance($event)\">\n" +
    "				<icon class=\"ic-delete\"></icon>\n" +
    "			</gd-button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div\n" +
    "		ng-if=\"!video.archived_at\"\n" +
    "		class=\"gd-video-timeline-tag-instance__handle gd-video-timeline-tag-instance__handle--right\"\n" +
    "		ng-mouseenter=\"onResizeHandleMouseEnter('end', $event)\"\n" +
    "		ng-mouseleave=\"onResizeHandleMouseLeave()\"\n" +
    "		ng-mousedown=\"onResizeHandleMouseDown($event)\">\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-video-timeline/gd-video-timeline-tag-label.html',
    "<div layout=\"row\" layout-align=\"center center\" layout-fill>\n" +
    "	<div ng-if=\"!editing\" class=\"gd-video-timeline-tag-label__wrap--normal\">\n" +
    "		<div\n" +
    "			class=\"gd-video-timeline-tag-label__controls\"\n" +
    "			layout=\"row\" layout-align=\"center\"\n" +
    "			ng-class=\"{ 'is-busy': busy }\"\n" +
    "			ng-hide=\"!!video.archived_at\">\n" +
    "			<gd-button class=\"gd-button--small\"  async=\"ctrl.removeTagRow()\"><icon class=\"ic-delete\"></icon></gd-button>\n" +
    "			<gd-button\n" +
    "				class=\"gd-button--small\"\n" +
    "				ng-click=\"ctrl.enableEditing()\"\n" +
    "				ng-disabled=\"busy\">\n" +
    "				<icon class=\"ic-mode-edit\"></icon>\n" +
    "			</gd-button>\n" +
    "		</div>\n" +
    "		<div class=\"gd-video-timeline-tag-label__content-wrap\" ng-click=\"ctrl.addTagInstance()\">\n" +
    "			<span class=\"gd-video-timeline-tag-label__content\">{{ tag.project_tag.name }}</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"editing\" class=\"gd-video-timeline-tag-label__wrap--editing\">\n" +
    "		<form ng-submit=\"ctrl.finishEditing()\">\n" +
    "			<input\n" +
    "				ng-model=\"tag.newName\"\n" +
    "				ng-keyup=\"ctrl.checkKey($event)\"\n" +
    "				class=\"gd-video-timeline-tag-label__edit-field\">\n" +
    "			<gd-button\n" +
    "				aria-label=\"Cancel editing\"\n" +
    "				ng-click=\"ctrl.cancelEditing()\"\n" +
    "				class=\"gd-button--small gd-video-timeline-tag-label__cancel-editing\">\n" +
    "				<icon class=\"ic-close\"></icon>\n" +
    "			</gd-button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/gd-video-timeline/gd-video-timeline.html',
    "<div class=\"gd-video-timeline__playhead-container\" style=\"transform: {{ 'translateX(' + ctrl.getTimeOffset(player.state.currentTime) + '%)' }}\">\n" +
    "	<div class=\"gd-video-timeline__playhead-handle\">\n" +
    "		<div\n" +
    "			class=\"gd-video-timeline__playhead-bubble\"\n" +
    "			ng-class=\"{ 'is-dragging': draggingPlayhead }\"\n" +
    "		>{{ player.state.currentTime | duration }}</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<md-content class=\"gd-video-timeline__content\" flex>\n" +
    "	<div class=\"gd-video-timeline__outer-wrapper\" layout=\"row\" layout-align=\"start start\">\n" +
    "		<ul class=\"gd-video-timeline__tag-list\" layout=\"column\" layout-align=\"start end\">\n" +
    "\n" +
    "			<li ng-if=\"!video.archived_at\" ng-click=\"ctrl.createThread()\" class=\"gd-video-timeline__comment-label\">\n" +
    "				<div layout=\"row\" layout-align=\"center center\">\n" +
    "					<icon class=\"ic-comment\"></icon>\n" +
    "					<span flex>Comment</span>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "			<li ng-if=\"video.archived_at\" class=\"gd-video-timeline__comment-label\">\n" +
    "				<div layout=\"row\" layout-align=\"center center\">\n" +
    "					<icon class=\"ic-comment\"></icon>\n" +
    "					<span flex>Comment</span>\n" +
    "				</div>\n" +
    "			</li>\n" +
    "			<li layout=\"column\" layout-align=\"center\">\n" +
    "				<gd-tag-autocomplete ng-model=\"tagName\" player=\"player\" video=\"video\"></gd-tag-autocomplete>\n" +
    "			</li>\n" +
    "\n" +
    "			<li ng-repeat=\"tag in ctrl.videoTags track by tag.id\" layout=\"column\" layout-align=\"center\">\n" +
    "				<gd-video-timeline-tag-label tag=\"tag\" player=\"player\" video=\"video\"></gd-video-timeline-tag-label>\n" +
    "			</li>\n" +
    "		</ul>\n" +
    "		<div class=\"gd-video-timeline__timeline\" flex ng-click=\"jumpToTime($event)\">\n" +
    "			<div class=\"gd-video-timeline__playhead-wrapper-outer\">\n" +
    "				<div class=\"gd-video-timeline__playhead-wrapper\" style=\"transform: {{ 'translateX(' + ctrl.getTimeOffset(player.state.currentTime) + '%)' }}\">\n" +
    "					<span class=\"gd-video-timeline__playhead\"></span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<ul class=\"gd-video-timeline__tag-rows\" layout=\"column\" layout-align=\"start start\">\n" +
    "				<li class=\"gd-video-timeline__tag-row gd-video-timeline__tag-row--comments\">\n" +
    "					<ol class=\"gd-video-timeline__comments-list\">\n" +
    "						<li ng-repeat=\"thread in ctrl.commentThreads track by thread.id\">\n" +
    "							<gd-popup align-to=\"top center\" align-edge=\"bottom center\" position=\"outside\" gap-y=\"10\">\n" +
    "								<gd-popup-button style=\"left: {{ thread.c_timeline_offset }}%\">\n" +
    "									<gd-timed-comment-button thread=\"thread\"></gd-timed-comment-button>\n" +
    "								</gd-popup-button>\n" +
    "								<gd-popup-content>\n" +
    "									<gd-timed-comment-popup ng-if=\"!video.archived_at\" mode=\"REPLY\" thread=\"thread\"></gd-timed-comment-popup>\n" +
    "									<gd-timed-comment-popup ng-if=\"video.archived_at\" mode=\"READONLY\" thread=\"thread\"></gd-timed-comment-popup>\n" +
    "								</gd-popup-content>\n" +
    "							</gd-popup>\n" +
    "						</li>\n" +
    "						<li ng-if=\"newThread\">\n" +
    "							<gd-timed-comment-button style=\"left: {{ newThread.c_timeline_offset }}%\" class=\"js-placeholder-comment-btn\" thread=\"newThread\"></gd-timed-comment-button>\n" +
    "						</li>\n" +
    "					</ol>\n" +
    "				</li>\n" +
    "				<li class=\"gd-video-timeline__tag-row\"></li>\n" +
    "				<li class=\"gd-video-timeline__tag-row\" ng-repeat=\"tag in ctrl.videoTags | orderBy:'project_tag.name' track by tag.id\">\n" +
    "					<div class=\"gd-video-timeline__tag-instances js-tag-instances\">\n" +
    "						<gd-video-timeline-tag-instance\n" +
    "							data-start-seconds=\"{{ tagInstance.start_seconds }}\"\n" +
    "							data-end-seconds=\"{{ tagInstance.end_seconds }}\"\n" +
    "							ng-repeat=\"tagInstance in tag.instances\"\n" +
    "							instance=\"tagInstance\"\n" +
    "							player=\"player\"\n" +
    "							video=\"video\"\n" +
    "						></gd-video-timeline-tag-instance>\n" +
    "					</div>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "			<div ng-if=\"!ctrl.videoTags.length\" class=\"gd-video-timeline-tag-empty\" layout=\"column\" layout-align=\"center center\" flex layout-fill>\n" +
    "				<h2 class=\"projects__create-prompt__title\">No tags added to the video</h2>\n" +
    "				<p class=\"projects__create-prompt__content\">Click the \"add tag\" button and start tagging.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/gd-video-timeline/tag-merge-dialog/components.gd-video-timeline.tag-merge.html',
    "<md-dialog class=\"dialog tag-merge-dialog\">\n" +
    "	<div class=\"dialog__save-overlay fade\" ng-show=\"saving\">\n" +
    "		<holo-spinner></holo-spinner>\n" +
    "	</div>\n" +
    "	<form name=\"tagMergeForm\" ng-submit=\"ctrl.mergeTags()\" novalidate>\n" +
    "		<md-content class=\"duplicates-dialog__content\">\n" +
    "			<h2>Tag merge</h2>\n" +
    "			<p class=\"duplicates-dialog__hint\">This tag already exists. Would you like to merge the two tags?</p>\n" +
    "		</md-content>\n" +
    "		<div class=\"md-actions\">\n" +
    "			<md-button type=\"button\" ng-click=\"ctrl.cancel()\">Cancel</md-button>\n" +
    "			<md-button type=\"submit\">Merge</md-button>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('components/gd-youtube-thumbnail/gd-youtube-thumbnail.html',
    "<img ng-src=\"{{ loadedUrl }}\" ng-show=\"ctrl.loaded\" class=\"gd-youtube-thumbnail__image\">\n"
  );


  $templateCache.put('components/holo-spinner/holo-spinner.html',
    "<svg class=\"spinner\" width=\"66px\" height=\"66px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "	<circle class=\"path colors\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"20\"></circle>\n" +
    "</svg>\n"
  );


  $templateCache.put('components/image-uploader/image-uploader.html',
    "<div layout=\"column\" layout-align=\"start center\" layout-fill class=\"image-uploader\" ng-class=\"{'uploading': ctrl.loading, 'uploaded': ctrl.url}\">\n" +
    "	<input class=\"image-uploader__input\" type=\"file\">\n" +
    "	<div class=\"image-uploader__prompt\">\n" +
    "		<div ng-hide=\"ctrl.url\" class=\"fade\" layout-fill layout=\"column\" layout-align=\"center center\">\n" +
    "			<icon class=\"image-uploader__image-icon ic-image\">\n" +
    "				<icon class=\"image-uploader__add-icon ic-add\"></icon>\n" +
    "			</icon>\n" +
    "			Drag an image here\n" +
    "		</div>\n" +
    "		<div ng-show=\"ctrl.url\" class=\"fade\" layout-fill layout=\"column\" layout-align=\"center center\">\n" +
    "      <img ng-src=\"{{ctrl.url}}\" alt=\"\" style=\"width: 100%;\" />\n" +
    "		</div>\n" +
    "		<div class=\"image-uploader__drop-zone\" layout-fill layout=\"column\" layout-align=\"center center\">\n" +
    "			<span class=\"image-uploader__drop-zone__progress ng-hide fade\" ng-show=\"ctrl.loading && ctrl.uploadProgress > 0\">{{ ctrl.uploadProgress }}%</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<md-progress-linear class=\"image-uploader__progress\" mode=\"determinate\" ng-value=\"ctrl.uploadProgress\"></md-progress-linear>\n" +
    "	<md-button aria-label=\"Select a file to upload\" layout=\"row\" layout-align=\"center\" class=\"image-uploader__trigger md-no-radius\" ng-click=\"ctrl.showFileDialog()\" ng-disabled=\"ctrl.loading\">\n" +
    "		<span ng-hide=\"ctrl.loading\" class=\"image-uploader__trigger-text ng-hide fade\" layout-fill layout=\"row\" layout-align=\"center center\" style=\"background: white;\">\n" +
    "			<icon class=\"ic-file-upload\"></icon> File upload\n" +
    "		</span>\n" +
    "		<span ng-show=\"ctrl.loading\" class=\"image-uploader__trigger-text ng-hide fade\" layout-fill layout=\"row\" layout-align=\"center center\">\n" +
    "			Uploading...\n" +
    "		</span>\n" +
    "	</md-button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/modals/addCollaborators.html',
    "<md-dialog class=\"dialog collaborators-dialog\">\n" +
    "	<md-content class=\"collaborators-dialog__content\">\n" +
    "		<form layout-fill layout=\"column\" ng-submit=\"ctrl.addCollaborator()\">\n" +
    "			<h2>Collaborators</h2>\n" +
    "\n" +
    "			<md-content class=\"collaborators-dialog__list-wrapper\">\n" +
    "				<md-list class=\"collaborators__list\" layout=\"row\" layout-wrap>\n" +
    "					<md-item class=\"collaborators__item\" ng-class=\"{'is-user': !user.is_owner}\" flex=\"33\" ng-repeat=\"user in ctrl.collaborators | orderBy:'created' track by user.id\" layout=\"row\" layout-align=\"start center\">\n" +
    "						<md-item-content>\n" +
    "							<div class=\"collaborators__user-image\" layout=\"column\" layout-align=\"center center\">\n" +
    "								<icon ng-if=\"!user.profile_img_url\" class=\"ic-person\"></icon>\n" +
    "								<img ng-if=\"user.profile_img_url\" flex ng-src=\"{{ user.profile_img_url }}?sz=40\">\n" +
    "								<gd-button ng-if=\"!user.is_owner\" type=\"button\" ng-click=\"ctrl.removeCollaborator(user)\" class=\"collaborators__remove-user-button\" layout-fill>\n" +
    "									<icon class=\"ic-delete\"></icon>\n" +
    "								</gd-button>\n" +
    "							</div>\n" +
    "							<div flex>\n" +
    "								<div class=\"collaborators__user-name\" ng-if=\"user.first_name\">{{ user.first_name }} {{ user.last_name }}</div>\n" +
    "								<div class=\"collaborators__user-email\" ng-if=\"!user.first_name\">{{ user.email }}</div>\n" +
    "								<div class=\"collaborators__user-type\" ng-if=\"user.is_pending\">Awaiting response</div>\n" +
    "							</div>\n" +
    "						</md-item-content>\n" +
    "					</md-item>\n" +
    "				</md-list>\n" +
    "			</md-content>\n" +
    "\n" +
    "			<md-content class=\"collaborators-dialog__input-wrapper\">\n" +
    "				<gd-autocomplete results=\"ctrl.possibleUsers\" ng-model=\"ctrl.newCollaborator\" display-property=\"email\">\n" +
    "					<div layout=\"row\" class=\"collaborators__autocomplete\">\n" +
    "						<div class=\"collaborators__autocomplete-icon\" layout=\"row\" layout-align=\"center center\">\n" +
    "							<icon class=\"ic-person-add\"></icon>\n" +
    "						</div>\n" +
    "						<input class=\"collaborators__autocomplete-input\" flex type=\"text\" ng-model=\"ctrl.newCollaborator.email\" ng-model-options=\"{ debounce: 500 }\" placeholder=\"Add by name or email address\">\n" +
    "					</div>\n" +
    "				</gd-autocomplete>\n" +
    "\n" +
    "				<div class=\"collaborators-dialog__actions\" layout=\"row\" layout-align=\"end\">\n" +
    "					<md-button class=\"dialog__action--cancel\" type=\"button\" aria-label=\"Close\" ng-click=\"ctrl.close()\">Close</md-button>\n" +
    "					<md-button class=\"dialog__action--ok\" type=\"submit\" aria-label=\"Add\" ng-disabled=\"!ctrl.newCollaborator.email\">Add</md-button>\n" +
    "				</div>\n" +
    "\n" +
    "			</md-content>\n" +
    "		</form>\n" +
    "		<section ng-show=\"ctrl.isBusy\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "			<holo-spinner class=\"holo-spinner--layer\"></holo-spinner>\n" +
    "		</section>\n" +
    "	</md-content>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('components/modals/addCollection.html',
    "<md-dialog class=\"dialog\">\n" +
    "	<md-content>\n" +
    "		<form layout-fill layout=\"column\" ng-submit=\"ctrl.addCollection()\">\n" +
    "			<h2>Create new collection</h2>\n" +
    "			<md-input-group class=\"md-input-group-theme-greenday\" layout=\"column\">\n" +
    "				<label for=\"collectionName\">Title</label>\n" +
    "				<md-input id=\"collectionName\" type=\"text\" ng-model=\"ctrl.collection.name\" required></md-input>\n" +
    "			</md-input-group>\n" +
    "			<div layout=\"row\" layout-align=\"end\">\n" +
    "				<md-button class=\"dialog__action--cancel\" type=\"button\" ng-click=\"ctrl.close()\">Cancel</md-button>\n" +
    "				<md-button class=\"dialog__action--ok\" type=\"submit\">Save</md-button>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</md-content>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('components/modals/confirm.html',
    "<md-dialog class=\"dialog\">\n" +
    "	<md-content>\n" +
    "		<div>{{ content }}</div>\n" +
    "	</md-content>\n" +
    "	<div class=\"md-actions\" layout=\"row\" layout-align=\"end\">\n" +
    "		<md-button class=\"dialog__action--cancel\" ng-click=\"close()\">No</md-button>\n" +
    "		<md-button class=\"dialog__action--ok\" ng-click=\"ok()\">Yes</md-button>\n" +
    "	</div>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('components/modals/userSettings.html',
    "<md-dialog class=\"dialog user-settings\">\n" +
    "	<div class=\"user-settings__header\">\n" +
    "		<md-content>\n" +
    "			Settings\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "\n" +
    "	<md-content>\n" +
    "		<!-- <div class=\"user-settings__section\">\n" +
    "			<div class=\"user-settings__subheader\">Google Account</div>\n" +
    "			<div class=\"user-settings__content\">You are currently signed in with:<br>{{ ctrl.user.email }}</div>\n" +
    "			<md-button class=\"md-raised\" ng-click=\"ctrl.switchAccounts(false)\">Switch accounts</md-button>\n" +
    "		</div> -->\n" +
    "\n" +
    "		<div class=\"user-settings__section\">\n" +
    "			<div class=\"user-settings__subheader\">Close my account and leave Montage</div>\n" +
    "			<div class=\"user-settings__content\">\n" +
    "				This will:\n" +
    "				<ul>\n" +
    "					<li>Delete all the projects you created</li>\n" +
    "					<li>Delete all tags associations you created on other projects</li>\n" +
    "					<li>Remove my account and details</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<md-button class=\"md-raised md-warn\" ng-click=\"ctrl.deleteAccount($event)\">Delete everything</md-button>\n" +
    "			<div class=\"user-settings__delete-warning\">this action is undoable</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div layout=\"row\" layout-align=\"end\">\n" +
    "			<md-button aria-label=\"Cancel\" class=\"dialog__action--ok\" type=\"button\" ng-click=\"ctrl.close()\">Cancel</md-button>\n" +
    "		</div>\n" +
    "	</md-content>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('components/notifications/simple-toast.html',
    "<md-toast class=\"toast\" layout=\"row\">\n" +
    "	<div class=\"toast-content\" flex>{{ toastApi.content }}</div>\n" +
    "	<div class=\"md-action\" layout=\"row\" layout-align=\"center center\">\n" +
    "		<md-button aria-label=\"Close\" class=\"toast-button toast-button--ok md-primary\" ng-if=\"toastApi.showClose\" ng-click=\"ok()\">\n" +
    "			Close\n" +
    "		</md-button>\n" +
    "	</div>\n" +
    "</md-toast>\n"
  );


  $templateCache.put('components/notifications/undo-toast.html',
    "<md-toast class=\"toast\" layout=\"row\">\n" +
    "	<div class=\"toast-content\" flex>{{ toastApi.content }}</div>\n" +
    "	<div class=\"md-action\" layout=\"row\" layout-align=\"center center\">\n" +
    "		<md-button aria-label=\"Undo\" class=\"toast-button toast-button--ok md-primary\" ng-click=\"toastCtrl.undo()\">\n" +
    "			Undo\n" +
    "		</md-button>\n" +
    "	</div>\n" +
    "</md-toast>\n"
  );


  $templateCache.put('components/one-search/one-search-result-item.html',
    "<div class=\"video-list-item\" layout=\"row\">\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__select\">\n" +
    "		<gd-select-video-button selected=\"video.selected\"></gd-select-video-button>\n" +
    "	</div>\n" +
    "	<div class=\"video-list-item__cell video-list-item__image\">\n" +
    "		<div class=\"video-list-item__video-link\">\n" +
    "			<img ng-src=\"//i3.ytimg.com/vi/{{ ::video.youtube_id }}/default.jpg\">\n" +
    "			<span class=\"video-list-item__duration\">{{ ::video.pretty_duration }}</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div flex layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__video-title\" >\n" +
    "		<a class=\"video-list-item__name video-list-item__toggle-expanded\" ng-click=\"toggleExpanded()\">{{ ::video.name }}</a>\n" +
    "		<div class=\"video-list-item__description\">\n" +
    "			<div class=\"video-list-item__description__text\" ng-bind-html=\"::video.notes\"></div>\n" +
    "			<div class=\"video-list-item__description__controls\">\n" +
    "				<a class=\"video-list-item__description__more\" ng-click=\"toggleDescription()\">Read more</a>\n" +
    "				<a class=\"video-list-item__description__less\" ng-click=\"toggleDescription()\">Show less</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__channel-name\">\n" +
    "		<span>{{ ::video.channel_name }}</span>\n" +
    "	</div>\n" +
    "	<div layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__added\">\n" +
    "		{{ ::video.pretty_publish_date }}\n" +
    "	</div>\n" +
    "	<div ng-if=\"project\" layout=\"column\" layout-align=\"center\" class=\"video-list-item__cell video-list-item__favourite\">\n" +
    "		<gd-add-to-collection-button video=\"video\" project=\"project\" collection=\"collection\"></gd-add-to-collection-button>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/one-search/one-search-results.html',
    "<md-content class=\"video-list\" flex>\n" +
    "	<div class=\"video-list__container\" layout=\"column\" flex>\n" +
    "		<section class=\"video-list__wrapper\">\n" +
    "			<md-subheader class=\"md-primary md-sticky-no-effect\">\n" +
    "				<div class=\"video-list__thead\" layout=\"row\" ng-class=\"{'video-list__thead--selected': ctrl.selectedVideos.length }\">\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--favourite\" layout=\"row\" layout-align=\"center center\" ng-click=\"ctrl.selectAllVideos(!ctrl.selectedVideos.length)\"><icon ng-class=\"{'ic-remove': ctrl.selectedVideos.length, 'ic-check-box-outline-blank': !ctrl.selectedVideos.length}\"></icon></div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-image\" ng-click=\"ctrl.sort('name')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'name', reverse: ctrl.ordering.currentKey === 'name' && ctrl.ordering.reverse}\">\n" +
    "						<span ng-hide=\"ctrl.selectedVideos.length\">Video</span>\n" +
    "						<span ng-show=\"ctrl.selectedVideos.length\">{{ ctrl.selectedVideos.length }} videos selected</span>\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div flex class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-name\" >\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--channel-name\" ng-click=\"ctrl.sort('channel_name')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'channel_name', reverse: ctrl.ordering.currentKey === 'channel_name' && ctrl.ordering.reverse}\" ng-hide=\"ctrl.selectedVideos.length\">\n" +
    "						<span>Uploader</span>\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--sortable video-list__thead-cell--video-date\" ng-click=\"ctrl.sort('publish_date')\" ng-class=\"{'active': ctrl.ordering.currentKey === 'publish_date', reverse: ctrl.ordering.currentKey === 'publish_date' && ctrl.ordering.reverse}\" ng-hide=\"ctrl.selectedVideos.length\">\n" +
    "						<span>Published</span>\n" +
    "						<icon class=\"sort-icon ic-arrow-back ic-rotate-90 ic-small\"></icon>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__thead-cell video-list__thead-cell--favourite\" ng-hide=\"ctrl.selectedVideos.length\"></div>\n" +
    "					<div class=\"video-list__thead--add-all\" ng-if=\"ctrl.selectedProject\" ng-show=\"ctrl.selectedVideos.length\" layout=\"row\" layout-align=\"center center\">\n" +
    "						<md-button ng-click=\"ctrl.addAll()\">ADD TO PROJECT</md-button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</md-subheader>\n" +
    "			<md-list class=\"video-list__tbody\" layout=\"column\">\n" +
    "				<md-item class=\"video-list__item\" ng-repeat=\"video in videos | orderBy:ctrl.ordering.currentKey:ctrl.ordering.reverse track by video.youtube_id\">\n" +
    "					<md-item-content>\n" +
    "						<one-search-result-item flex video=\"video\" project=\"ctrl.selectedProject\" collection=\"ctrl.selectedCollection\" columns=\"options.columns\"></one-search-result-item>\n" +
    "					</md-item-content>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "			<md-list class=\"video-list__tbody\" layout=\"column\">\n" +
    "				<md-item class=\"video-list__item\" ng-if=\"hasMoreResults\">\n" +
    "					<md-item-content layout=\"row\" layout-align=\"center center\">\n" +
    "						<md-button class=\"md-primary\" aria-label=\"Load more\" ng-click=\"ctrl.onloadMoreClick()\">Load more</md-button>\n" +
    "					</md-item-content>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "		</section>\n" +
    "	</div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/one-search/one-search.html',
    "<div class=\"one-search\" ng-class=\"{'one-search--expanded': ctrl.isVisible}\" layout=\"column\" layout-fill>\n" +
    "	<md-toolbar class=\"one-search__toolbar\" layout=\"row\">\n" +
    "		<div class=\"one-search__input-wrapper\" flex layout=\"row\" layout-align=\"start center\">\n" +
    "			<gd-button class=\"one-search__close-button\" ng-click=\"ctrl.closeSearch();\">\n" +
    "				<icon class=\"ic-arrow-back\"></icon>\n" +
    "			</gd-button>\n" +
    "			<input flex type=\"text\" ng-model=\"ctrl.filterSet.filters.q\" class=\"one-search__input\" placeholder=\"Search YouTube or enter a YouTube URL\" ng-model-options=\"{ debounce: 1000 }\">\n" +
    "			<gd-button class=\"one-search__reset-button\" ng-click=\"ctrl.reset();\">\n" +
    "				<icon class=\"ic-add-circle ic-rotate-45\"></icon>\n" +
    "			</gd-button>\n" +
    "		</div>\n" +
    "	</md-toolbar>\n" +
    "	<div class=\"one-search__filters\">\n" +
    "		<gd-video-filter-set ng-model=\"ctrl.filterSet\" auto-fetch=\"false\" on-update=\"ctrl.onFilterSetUpdate(ctrl.filterSet)\" config=\"ctrl.filterConfig\"></gd-video-filter-set>\n" +
    "	</div>\n" +
    "	<div class=\"one-search__results\" flex layout=\"row\">\n" +
    "		<one-search-results flex class=\"fade\" ng-show=\"ctrl.searchResults.length\" selected-project=\"ctrl.selectedProject\" filtering=\"false\" selected-collection=\"ctrl.selectedCollection\" ng-show=\"ctrl.viewMode === 'list'\" videos=\"ctrl.searchResults\" track-by=\"youtube_id\" layout=\"column\" options=\"ctrl.videoListOptions\" has-more-results=\"ctrl.hasMoreResults\" on-load-more-click=\"ctrl.loadMore()\"></one-search-results>\n" +
    "		<div ng-show=\"!ctrl.loading && !ctrl.isFiltering && !ctrl.searchResults.length\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "			<h2 class=\"projects__create-prompt__title\">Search for videos to get started</h2>\n" +
    "			<p class=\"projects__create-prompt__content\">Search YouTube or enter the URL for a YouTube video, channel or playlist to add videos to your project library</p>\n" +
    "		</div>\n" +
    "		<div ng-show=\"!ctrl.loading && ctrl.isFiltering && !ctrl.searchResults.length\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "			<h2 class=\"projects__create-prompt__title\">No videos found</h2>\n" +
    "			<p class=\"projects__create-prompt__content\">Please try again with different search query</p>\n" +
    "		</div>\n" +
    "		<section ng-show=\"ctrl.loading\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "			<holo-spinner></holo-spinner>\n" +
    "		</section>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/potato-datepicker/potato-datepicker.html',
    "<div class=\"pt-datepicker pt-datepicker--{{ datepicker.options.mode }} md-whiteframe-z1\" ng-class=\"{'no-week-days': !datepicker.options.showWeekDays, 'no-week-numbers': !datepicker.options.showWeekNumbers}\">\n" +
    "	<div class=\"pt-datepicker__days\" ng-if=\"datepicker.options.showWeekDays\">\n" +
    "		<md-content>\n" +
    "			<md-item class=\"pt-datepicker__week\">\n" +
    "				<md-list class=\"pt-datepicker__week-days\">\n" +
    "					<md-item class=\"pt-datepicker__week-number\" ng-if=\"datepicker.options.showWeekNumbers\">W</md-item><!--\n" +
    "				 --><md-item class=\"pt-datepicker__week-day\" ng-repeat=\"day in datepicker.weekdays\">{{ ::day }}</md-item>\n" +
    "				</md-list>\n" +
    "			</md-item>\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "	<div class=\"pt-datepicker__calendar\">\n" +
    "		<md-content class=\"pt-datepicker__content\">\n" +
    "			<md-list class=\"pt-datepicker__months\">\n" +
    "				<md-item id=\"{{ ::month.id }}\" class=\"pt-datepicker__month\" ng-class=\"{'pt-datepicker__month--highlighted': month.isHighlighted}\" ng-repeat=\"month in datepicker.months track by month.id\">\n" +
    "					<md-subheader class=\"md-primary pt-datepicker__month-name\">{{ ::month.name }} {{ ::month.year }}</md-subheader>\n" +
    "					<md-list class=\"pt-datepicker__weeks\">\n" +
    "						<md-item class=\"pt-datepicker__week\" ng-class=\"{'pt-datepicker__week--highlighted': week.isHighlighted}\" ng-repeat=\"week in month.weeks track by week.id\">\n" +
    "							<md-list class=\"pt-datepicker__week-days\">\n" +
    "								<md-item class=\"pt-datepicker__week-number\" ng-if=\"datepicker.options.showWeekNumbers\">{{ ::week.week }}</md-item><!--\n" +
    "							 --><md-item data-date=\"{{ ::day.date }}\" class=\"pt-datepicker__week-day\" ng-repeat=\"day in week.days track by day.id\" ng-class=\"{'pt-datepicker__week-day--faded': !day.isInCurrentMonth, 'selected': day.isSelected, 'pt-datepicker__week-day--highlighted': day.isHighlighted, 'pt-datepicker__week-day--start-date': day.isStartDate, 'pt-datepicker__week-day--end-date': day.isEndDate}\">\n" +
    "									<md-item-content class=\"pt-datepicker__week-day__content\">{{ ::day.dayNumber }}</md-item-content>\n" +
    "								</md-item>\n" +
    "							</md-list>\n" +
    "						</md-item>\n" +
    "					</md-list>\n" +
    "				</md-item>\n" +
    "			</md-list>\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/project/project-list-item-dropdown.html',
    "<gd-floating-menu-item icon=\"ic-edit\" ng-click=\"menuData.ctrl.modes.edit=true\">Edit</gd-floating-menu-item>\n" +
    "<gd-floating-menu-item icon=\"ic-delete\" ng-click=\"menuData.ctrl.removeProject($event, menuData.ctrl.project)\">Remove</gd-floating-menu-item>\n"
  );


  $templateCache.put('components/project/project-list-item.html',
    "<div class=\"project-list-item md-whiteframe-z1\" layout=\"column\" ng-hide=\"!isVisible\" ng-class=\"{'project-list-item--expanded': ctrl.showInfo}\">\n" +
    "	<div class=\"project__edit\" layout=\"row\" ng-show=\"ctrl.modes.edit\">\n" +
    "		<span class=\"project__image\" layout=\"column\">\n" +
    "			<image-uploader image=\"ctrl.project.image_url\" is-busy=\"ctrl.imageUploaderBusy\" ng-model=\"ctrl.project.image_url\" type=\"project\" layout-fill></image-uploader>\n" +
    "		</span>\n" +
    "		<div class=\"project\" flex>\n" +
    "			<form layout-fill class=\"project__form\" layout=\"column\" ng-submit=\"ctrl.saveProject()\">\n" +
    "				<md-input-container class=\"md-input-group-theme-greenday\" layout=\"column\">\n" +
    "					<label for=\"projectName\">Title</label>\n" +
    "					<input id=\"projectName\" type=\"text\" ng-model=\"ctrl.project.name\" required>\n" +
    "				</md-input-container>\n" +
    "				<md-input-container class=\"md-input-group-theme-greenday\" layout=\"column\">\n" +
    "					<label for=\"projectDescription\">Description</label>\n" +
    "					<input id=\"projectDescription\" multiline type=\"text\" ng-model=\"ctrl.project.description\">\n" +
    "				</md-input-container>\n" +
    "				<div layout=\"column\" flex></div>\n" +
    "				<div layout=\"row\" layout-align=\"end center\">\n" +
    "					<md-button class=\"md-primary\" aria-label=\"Cancel\" ng-disabled=\"ctrl.imageUploaderBusy == true\" type=\"button\" ng-click=\"ctrl.cancel()\">Cancel</md-button>\n" +
    "					<md-button class=\"md-accent\" aria-label=\"Save\" ng-disabled=\"ctrl.imageUploaderBusy == true\" type=\"submit\">Save</md-button>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"project__wrapper\" layout=\"row\" ng-hide=\"ctrl.modes.edit\">\n" +
    "		<span class=\"project__image\" layout=\"column\">\n" +
    "			<span class=\"project__thumb\" ng-style=\"{'background-image': 'url(' + ctrl.project.image_url + '=h210)'}\" layout-fill layout=\"row\">\n" +
    "				<span class=\"project__accept-decline\" ng-if=\"ctrl.project.current_user_info.is_pending\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "					<md-button type=\"button\" class=\"md-raised md-primary\" ng-click=\"ctrl.inviteAccept(ctrl.project)\">Accept</md-button>\n" +
    "					<md-button type=\"button\" class=\"md-raised md-warn\" ng-click=\"ctrl.inviteReject($event, ctrl.project)\">Decline</md-button>\n" +
    "				</span>\n" +
    "			</span>\n" +
    "			<!-- we only want this link to show if the user is not pending. If they are pending then they need to be able\n" +
    "			to click the relevant accept/reject CTAs provided by the directive above. This link basically fills all the\n" +
    "			space available effectively blocking the CTA when pending. -->\n" +
    "			<a class=\"project__link\" ng-if=\"!ctrl.project.current_user_info.is_pending\" href=\"/project/{{ ctrl.project.id }}\"></a>\n" +
    "\n" +
    "		</span>\n" +
    "		<div class=\"project\" flex>\n" +
    "			<span class=\"project__details\" layout=\"column\" layout-fill>\n" +
    "				<span class=\"project__bg\" layout-fill layout=\"column\" ng-if=\"ctrl.project.image_url\">\n" +
    "					<span class=\"project__bg-img\" ng-style=\"{'background-image': 'url(' + ctrl.project.image_url + '=w590-h210-p-fSoften=1,120,0)'}\" layout-fill></span>\n" +
    "				</span>\n" +
    "				<span class=\"project__bg-overlay\" layout-fill></span>\n" +
    "				<div class=\"project__info\" layout=\"column\" layout-fill>\n" +
    "					<a ng-if=\"!ctrl.project.current_user_info.is_pending\" class=\"project__link\" href=\"/project/{{ ctrl.project.id }}\"></a>\n" +
    "					<span layout=\"row\">\n" +
    "						<span class=\"project__name\" href=\"/project/{{ ctrl.project.id }}\">{{ ctrl.project.name }}</span>\n" +
    "						<span flex></span>\n" +
    "						<gd-floating-menu-button ng-if=\"!ctrl.project.current_user_info.is_pending && ctrl.project.current_user_info.is_admin\" menu-template-url=\"components/project/project-list-item-dropdown.html\" align-to=\"right\" menu-data=\"menuData\" menu-width=\"2x\">\n" +
    "							<icon class=\"ic-more-vert\"></icon>\n" +
    "						</gd-floating-menu-button>\n" +
    "					</span>\n" +
    "					<span class=\"project__stats\" layout=\"row\" ng-if=\"!ctrl.project.current_user_info.is_pending\">\n" +
    "						<stats icon=\"ic-movie-white\" one-item-text=\"video\" items-text=\"videos\" count=\"ctrl.project.video_count\" no-items-text=\"No videos yet\"></stats>\n" +
    "						<stats icon=\"ic-label-white\" one-item-text=\"tag\" items-text=\"tags\" count=\"ctrl.project.video_tag_instance_count\" no-items-text=\"No tags yet\"></stats>\n" +
    "					</span>\n" +
    "					<div flex>\n" +
    "						<div class=\"project__description\" ng-if=\"ctrl.project.current_user_info.is_pending\">{{ ctrl.project.description }}</div>\n" +
    "					</div>\n" +
    "					<span ng-if=\"!ctrl.project.current_user_info.is_pending\" layout=\"row\" layout-align=\"end\">\n" +
    "						<gd-button class=\"project__show-info\" ng-click=\"ctrl.showInfo=!ctrl.showInfo\">\n" +
    "							<icon ng-if=\"!ctrl.showInfo\" class=\"ic-unfold-more\"></icon>\n" +
    "							<icon ng-if=\"ctrl.showInfo\" class=\"ic-unfold-less\"></icon>\n" +
    "						</gd-button>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-hide=\"ctrl.modes.edit\" class=\"project__overview\" ng-class=\"{'project__overview--visible': ctrl.showInfo}\">\n" +
    "		<div class=\"project__overview__info\" layout=\"row\">\n" +
    "			<strong class=\"project__overview__title\">Created</strong>\n" +
    "			<span class=\"project__overview__text\" flex>\n" +
    "				{{ ctrl.project.created | amCalendar | lowercase }} by\n" +
    "				<span ng-if=\"ctrl.project.owner.id === userId\">you</span>\n" +
    "				<span ng-if=\"ctrl.project.owner.id !== userId\">{{ ctrl.project.owner.first_name }} {{ ctrl.project.owner.last_name }}</span>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<div class=\"project__overview__info\" layout=\"row\">\n" +
    "			<strong class=\"project__overview__title\">Tags</strong>\n" +
    "			<span class=\"project__overview__text\" flex>\n" +
    "				<ul class=\"project__overview__tagname\">\n" +
    "					<li ng-repeat=\"projecttag in ctrl.project.projecttags|limitTo:5\"><strong>{{ projecttag.name }}</strong></li>\n" +
    "				</ul>\n" +
    "				<span ng-if=\"ctrl.project.projecttags.length > 5\">and <strong>{{ ctrl.project.projecttags.length - 5 }} more</strong></span>\n" +
    "			</span>\n" +
    "		</div>\n" +
    "		<md-content class=\"project__description\">\n" +
    "			{{ ctrl.project.description }}\n" +
    "		</md-content>\n" +
    "	</div>\n" +
    "	<section ng-show=\"ctrl.loading\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "		<holo-spinner></holo-spinner>\n" +
    "	</section>\n" +
    "</div>\n"
  );


  $templateCache.put('components/stats/stats.html',
    "<span class=\"stat\" layout=\"row\">\n" +
    "	<span class=\"stat__icon\" layout=\"column\" layout-align=\"center\">\n" +
    "		<icon class=\"{{ icon }}\"></icon>\n" +
    "	</span>\n" +
    "	<span class=\"stat__text\" flex layout=\"column\" layout-align=\"center start\">\n" +
    "		<span ng-if=\"count\" layout=\"row\">\n" +
    "			<span class=\"stat__text--big\">{{ count }}</span>\n" +
    "			<span flex layout=\"column\" layout-align=\"center start\">\n" +
    "				<ng-pluralize count=\"count\" when=\"{'other': itemsText, 'one': oneItemText || itemsText }\"></ng-pluralize>\n" +
    "			</span>\n" +
    "		</span>\n" +
    "		<span ng-if=\"!count\">\n" +
    "			{{ noItemsText }}\n" +
    "		</span>\n" +
    "	</span>\n" +
    "</span>\n"
  );


  $templateCache.put('components/toggle-button/toggle-button.html',
    "<div class=\"toggle-button\" ng-click=\"ctrl.changeValue()\" ng-class=\"{'toggle-button--toggled': ctrl.checked}\" layout=\"row\" layout-align=\"start center\">\n" +
    "	<div class=\"toggle-button__button\">\n" +
    "		<div class=\"toggle-button__track\"></div>\n" +
    "		<div class=\"toggle-button__handle md-whiteframe-z1\"></div>\n" +
    "	</div>\n" +
    "	<div flex class=\"toggle-button__label\" ng-transclude></div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/user-box/user-box.html',
    "<div class=\"user-box\" layout=\"column\">\n" +
    "	<div class=\"user-box__userinfo\" layout=\"{{ thumbLayout }}\" layout-align=\"center\">\n" +
    "		<div layout=\"row\" layout-align=\"center\">\n" +
    "			<img class=\"user-box__thumbnail\" ng-src=\"{{ ::user.profile_img_url }}?sz={{ ::thumbSize }}\" ng-if=\"user.profile_img_url\" />\n" +
    "			<img class=\"user-box__thumbnail\" ng-src=\"{{ ::defaultProfileImgUrl }}\" ng-if=\"!user.profile_img_url\" />\n" +
    "		</div>\n" +
    "		<div flex>\n" +
    "			<div class=\"user-box__firstname\" layout=\"{{ nameLayout }}\" layout-align=\"{{ nameLayoutAlign }}\">{{ user.first_name }}</div>\n" +
    "			<div class=\"user-box__lastname\" layout=\"{{ nameLayout }}\" layout-align=\"{{ nameLayoutAlign }}\">{{ user.last_name }}</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"user-box__stats\" layout=\"column\" layout-align=\"center center\">\n" +
    "		<stats icon=\"ic-movie\" items-text=\"videos watched\" one-item-text=\"video watched\" count=\"userStats.videos_watched\" no-items-text=\"No videos watched yet\"></stats>\n" +
    "		<stats icon=\"ic-label\" items-text=\"tags added\" one-item-text=\"tag added\" count=\"userStats.tags_added\" no-items-text=\"No tags added yet\"></stats>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/video-filters/gd-video-channel-filter/gd-video-channel-filter.html',
    "<md-content class=\"video-filter__list md-whiteframe-z1\">\n" +
    "	<div class=\"video-filter__list__quick-filter\" layout=\"row\" layout-align=\"start center\">\n" +
    "		<icon class=\"ic-search\"></icon>\n" +
    "		<input flex class=\"video-filter__list__quick-filter__input\" type=\"text\" ng-model=\"nameFilter\" ng-model-options=\"{debounce: 500}\" placeholder=\"Quick filter channels\">\n" +
    "		<md-button aria-label=\"Clear\" ng-show=\"channelFilterCtrl.selectedChannels.length\" ng-click=\"channelFilterCtrl.deselectAll()\">\n" +
    "			Clear\n" +
    "		</md-button>\n" +
    "	</div>\n" +
    "	<md-content class=\"video-filter__content-list\">\n" +
    "		<md-list>\n" +
    "			<md-item ng-repeat=\"channel in channelFilterCtrl.channels | filter: {name: nameFilter} | orderBy:'name'\">\n" +
    "				<md-item-content class=\"video-filter__list-item\" ng-class=\"{'selected': channel.selected}\">\n" +
    "					<gd-button class=\"video-filter__toggle-button\" ng-click=\"channelFilterCtrl.toggleChannel(channel)\">\n" +
    "						<span layout=\"row\" layout-align=\"start center\">\n" +
    "							<icon ng-class=\"{'ic-check-box-outline-blank': !channel.selected, 'ic-check-box': channel.selected}\"></icon>\n" +
    "							<span class=\"video-filter__channel-name\">{{ ::channel.name }}</span>\n" +
    "						</span>\n" +
    "					</gd-button>\n" +
    "				</md-item-content>\n" +
    "			</md-item>\n" +
    "		</md-list>\n" +
    "	</md-content>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/video-filters/gd-video-date-filter/gd-video-date-filter.html',
    "<md-content class=\"md-whiteframe-z1\">\n" +
    "	<div class=\"video-filter__list__quick-filter\" layout=\"row\" layout-align=\"start center\">\n" +
    "		<div>\n" +
    "			<md-select ng-model=\"data.selectedType\">\n" +
    "				<md-option ng-repeat=\"type in types track by $index\" value=\"{{ type.type }}\">{{ ::type.text }}</md-option>\n" +
    "			</md-select>\n" +
    "		</div>\n" +
    "		<div ng-if=\"data.selectedType !== 'no_recorded_date'\">\n" +
    "			<md-select ng-model=\"data.selectedMode\">\n" +
    "				<md-option ng-repeat=\"mode in modes track by $index\" value=\"{{ mode.mode }}\">{{ ::mode.text }}</md-option>\n" +
    "			</md-select>\n" +
    "		</div>\n" +
    "		<div flex layout=\"row\" layout-align=\"end center\">\n" +
    "			<md-button type=\"button\" aria-label=\"Clear\" ng-click=\"dateFilterCtrl.reset()\">\n" +
    "				Clear\n" +
    "			</md-button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"video-filter__date-filter-content\" layout=\"column\" layout-align=\"start start\" ng-if=\"data.selectedType !== 'no_recorded_date'\">\n" +
    "		<gd-popup align-to=\"bottom left\" align-edge=\"top left\" position=\"outside\" gap-y=\"0\" layout-fill>\n" +
    "			<gd-popup-button>\n" +
    "				<md-input-container>\n" +
    "					<label>\n" +
    "						<span ng-if=\"data.selectedMode === 'between' || data.selectedMode === 'notbetween'\">From:</span>\n" +
    "						<span ng-if=\"data.selectedMode !== 'between' && data.selectedMode !== 'notbetween'\">Pick a date</span>\n" +
    "					</label>\n" +
    "					<input type=\"text\" ng-model=\"data.startDateString\">\n" +
    "				</md-input-container>\n" +
    "			</gd-popup-button>\n" +
    "			<gd-popup-content>\n" +
    "				<gd-datepicker on-date-select=\"_popupInstance.close()\" ng-model=\"data.selectedDate.start\" highlight-max-date=\"!!data.selectedDate.end\" max-date=\"data.selectedDate.end\" ng-model-options=\"{ debounce: 0 }\"></gd-datepicker>\n" +
    "			</gd-popup-content>\n" +
    "		</gd-popup>\n" +
    "\n" +
    "		<gd-popup align-to=\"bottom left\" align-edge=\"top left\" position=\"outside\" gap-y=\"0\" ng-if=\"data.selectedMode === 'between' || data.selectedMode === 'notbetween'\" layout-fill>\n" +
    "			<gd-popup-button>\n" +
    "				<md-input-container>\n" +
    "					<label>To:</label>\n" +
    "					<input type=\"text\" ng-model=\"data.endDateString\">\n" +
    "				</md-input-container>\n" +
    "			</gd-popup-button>\n" +
    "			<gd-popup-content>\n" +
    "				<gd-datepicker on-date-select=\"_popupInstance.close()\" ng-model=\"data.selectedDate.end\" min-date=\"data.selectedDate.start\" ng-model-options=\"{ debounce: 0 }\"></gd-datepicker>\n" +
    "			</gd-popup-content>\n" +
    "		</gd-popup>\n" +
    "	</div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/video-filters/gd-video-filter-set/gd-video-filter-set.html',
    "<div layout=\"row\" class=\"video-filter-set\" layout-align=\"start center\">\n" +
    "	<gd-video-filter ng-if=\"::displayConfig.keyword\" type=\"text\" title=\"Filter by keyword\" is-open=\"true\" ng-model=\"ngModel.filters.q\">\n" +
    "		<input class=\"video-filter__input\" type=\"text\" placeholder=\"Filter by keyword\" ng-model=\"ngModel.filters.q\" ng-model-options=\"{ debounce: ctrl.debounce }\">\n" +
    "	</gd-video-filter>\n" +
    "\n" +
    "	<gd-video-filter ng-if=\"::displayConfig.tag\" type=\"tag\" title=\"Tag\" ng-model=\"ngModel.filters.tag_ids\">\n" +
    "		<gd-video-tag-filter project=\"project\" ng-model=\"ngModel.filters.tag_ids\" ng-model-options=\"{ debounce: ctrl.debounce }\"></gd-video-tag-filter>\n" +
    "	</gd-video-filter>\n" +
    "\n" +
    "	<gd-video-filter ng-if=\"::displayConfig.date\" type=\"date\" title=\"Date\" ng-model=\"ngModel.filters.date\" is-open=\"filtersMeta.date.isOpen\">\n" +
    "		<gd-video-date-filter ng-model=\"ngModel.filters.date\" filter-meta=\"filtersMeta.date\"></gd-video-date-filter>\n" +
    "	</gd-video-filter>\n" +
    "\n" +
    "	<gd-video-filter ng-if=\"::displayConfig.location\" type=\"location\" title=\"Location\" ng-model=\"ngModel.filters.location\">\n" +
    "		<gd-video-location-filter ng-model=\"ngModel.filters.location\"></gd-video-location-filter>\n" +
    "	</gd-video-filter>\n" +
    "\n" +
    "	<gd-video-filter ng-if=\"::displayConfig.channel\" type=\"channel\" title=\"Uploader\" ng-model=\"ngModel.filters.channel_ids\">\n" +
    "		<gd-video-channel-filter project=\"project\" ng-model=\"ngModel.filters.channel_ids\" ng-model-options=\"{ debounce: ctrl.debounce }\"></gd-video-channel-filter>\n" +
    "	</gd-video-filter>\n" +
    "</div>\n"
  );


  $templateCache.put('components/video-filters/gd-video-filter/gd-video-filter-title.html',
    "<div layout=\"row\" layout-align=\"start center\">\n" +
    "	<span ng-if=\"ngModel.prefix\">{{ ngModel.prefix }}&nbsp;</span>\n" +
    "	<span ng-repeat=\"item in titleItems\">\n" +
    "		<span ng-if=\"!$first && totalItems > 1\">\n" +
    "			<span ng-if=\"$last && totalItems <= ngModel.offset\">&nbsp;{{ ngModel.conjunctive }}</span>\n" +
    "			<span ng-if=\"!$last || totalItems > ngModel.offset\">{{ ngModel.separator }}</span>\n" +
    "		</span>\n" +
    "		<span class=\"highlight\">\n" +
    "			<strong>{{ item[ngModel.titleKey] }}</strong>\n" +
    "		</span>\n" +
    "	</span>\n" +
    "	<span ng-if=\"ngModel.offset && totalItems > ngModel.offset\">&nbsp;and {{ totalItems - ngModel.offset }} more</span>\n" +
    "	<span ng-if=\"ngModel.suffix\">&nbsp;{{ ngModel.suffix }}</span>\n" +
    "</div>\n"
  );


  $templateCache.put('components/video-filters/gd-video-filter/gd-video-filter.html',
    "<div class=\"video-filter video-filter--{{ type }}\">\n" +
    "	<gd-button ng-if=\"type !== 'text'\" class=\"video-filter__button\" ng-click=\"filterCtrl.onClick()\" ng-class=\"{'active': nonDefault, 'open': isOpen}\">\n" +
    "		<span layout=\"row\" layout-align=\"start center\">\n" +
    "			<span class=\"video-filter__filter-title\">\n" +
    "				<gd-video-filter-title ng-model=\"filterCtrl.titleObj\"></gd-video-filter-title>\n" +
    "				{{ filterCtrl.filterTitle }}\n" +
    "			</span>\n" +
    "			<icon class=\"ic-arrow-drop-down\"></icon>\n" +
    "		</span>\n" +
    "	</gd-button>\n" +
    "	<div class=\"video-filter__filter fade\" ng-show=\"!!isOpen\" ng-transclude></div>\n" +
    "	<gd-backdrop ng-if=\"type !== 'text'\" ng-show=\"isOpen\" callback=\"filterCtrl.onClick()\"></gd-backdrop>\n" +
    "</div>\n"
  );


  $templateCache.put('components/video-filters/gd-video-location-filter/gd-video-location-filter.html',
    "<md-content class=\"video-filter__list md-whiteframe-z1\">\n" +
    "	<md-content class=\"video-filter__content-list\" layout=\"row\" layout-align=\"start start\">\n" +
    "		<md-radio-group ng-model=\"mode\" flex>\n" +
    "			<md-radio-button value=\"0\" aria-label=\"Has no location\">Has no location</md-radio-button>\n" +
    "			<md-radio-button value=\"1\" aria-label=\"Has location\">Has location</md-radio-button>\n" +
    "			<md-radio-button value=\"2\" aria-label=\"Has location\">Specific location</md-radio-button>\n" +
    "		</md-radio-group>\n" +
    "		<div class=\"location-filter__clear-button\">\n" +
    "			<md-button type=\"button\" aria-label=\"Clear\" ng-click=\"locationFilterCtrl.clear()\">\n" +
    "				Clear\n" +
    "			</md-button>\n" +
    "		</div>\n" +
    "	</md-content>\n" +
    "	<md-content class=\"video-filter__content\" ng-show=\"mode === '2'\">\n" +
    "		<form ng-submit=\"locationFilterCtrl.onLocationUpdate()\">\n" +
    "			<div class=\"location-filter__row\" layout=\"row\" layout-align=\"start center\">\n" +
    "				<div class=\"location-filter__part\">Within</div>\n" +
    "				<div class=\"location-filter__part\">\n" +
    "					<input class=\"location-filter__input--radius\" type=\"text\" ng-model=\"location.radius\">\n" +
    "				</div>\n" +
    "				<div class=\"location-filter__part\" flex>\n" +
    "					<ng-pluralize count=\"location.radius\" when=\"{'one': 'mile of', 'other': 'miles of'}\"></ng-pluralize>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"location-filter__row\" layout=\"row\" layout-align=\"start center\">\n" +
    "				<div flex class=\"location-filter__part\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<input flex class=\"location-filter__input--autocomplete\" type=\"text\" ng-model=\"location.name\">\n" +
    "				</div>\n" +
    "				<div class=\"location-filter__part\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<md-button type=\"submit\" aria-label=\"Apply\" ng-disabled=\"!location.radius || !location.lat || !location.lng\" flex class=\"md-primary\">Apply</md-button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</form>\n" +
    "	</md-content>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/video-filters/gd-video-tag-filter/gd-video-tag-filter.html',
    "<md-content class=\"video-filter__list md-whiteframe-z1\">\n" +
    "	<div class=\"video-filter__list__quick-filter\" layout=\"row\" layout-align=\"start center\">\n" +
    "		<icon class=\"ic-search\"></icon>\n" +
    "		<input flex class=\"video-filter__list__quick-filter__input\" type=\"text\" ng-model=\"tagFilterCtrl.nameFilter\" placeholder=\"Quick filter tags\">\n" +
    "		<md-button aria-label=\"Clear\" ng-show=\"tagFilterCtrl.markedTags.length\" ng-click=\"tagFilterCtrl.deselectAll()\">\n" +
    "			Clear\n" +
    "		</md-button>\n" +
    "	</div>\n" +
    "	<md-content class=\"video-filter__content-list\">\n" +
    "		<gd-tag-list ng-if=\"!tagFilterCtrl.nameFilter\" ng-model=\"tagFilterCtrl.cleanTags\" tag-template=\"{{ ::tagFilterCtrl.tagTemplateUrl }}\"></gd-tag-list>\n" +
    "		<gd-tag-list flat=\"true\" name-filter=\"{{ tagFilterCtrl.nameFilter }}\" ng-if=\"tagFilterCtrl.nameFilter\" ng-model=\"tagFilterCtrl.allTags\" tag-template=\"{{ ::tagFilterCtrl.tagTemplateUrl }}\"></gd-tag-list>\n" +
    "	</md-content>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/video-filters/gd-video-tag-filter/gd-video-tag-template.html',
    "<md-item>\n" +
    "	<md-item-content class=\"video-filter__list-item\" ng-class=\"{'selected': ngModel.state === 1, 'excluded': ngModel.state === -1}\">\n" +
    "		<gd-button class=\"video-filter__toggle-button\" ng-click=\"tagClicked($event, ngModel)\">\n" +
    "			<span layout=\"row\" layout-align=\"start center\">\n" +
    "				<icon class=\"ic-check-box-outline-blank\"></icon>\n" +
    "				<span class=\"video-filter__tag-name\">{{ ngModel.name }}</span>\n" +
    "				<span class=\"video-tag-filter__tag-instance-count\">({{ ngModel.video_tag_instance_count || 0 }})</span>\n" +
    "			</span>\n" +
    "		</gd-button>\n" +
    "	</md-item-content>\n" +
    "</md-item>\n"
  );


  $templateCache.put('components/video-map/video-map-infobox.html',
    "<md-content class=\"video-map__videos md-whiteframe-z1\">\n" +
    "	<div class=\"video-map__quick-filter\" layout=\"row\" layout-align=\"end center\">\n" +
    "		<div class=\"video-map__quick-filter__icon\" layout=\"row\" layout-align=\"center center\" ng-show=\"parameter.totalVideos > 1\">\n" +
    "			<icon class=\"ic-search\"></icon>\n" +
    "		</div>\n" +
    "		<div layout=\"row\" flex ng-show=\"parameter.totalVideos > 1\">\n" +
    "			<input flex class=\"video-map__quick-filter__input\" type=\"text\" ng-model=\"parameter.nameFilter\" placeholder=\"Search videos in this location\" autofocus>\n" +
    "		</div>\n" +
    "		<div layout=\"row\">\n" +
    "			<gd-button class=\"video-map__close-button\" aria-label=\"Clear\" ng-click=\"parameter.close()\">\n" +
    "				<icon class=\"ic-close\"></icon>\n" +
    "			</gd-button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<md-content class=\"video-map__wrapper\">\n" +
    "		<md-list class=\"video-map__video-list\">\n" +
    "			<md-item class=\"video-map__video-box\" ng-repeat=\"video in parameter.videos | filter:{ name: parameter.nameFilter } | orderBy:'name' track by video.id\" layout=\"column\">\n" +
    "				<div class=\"video-map__video-box__content\" ng-if=\"parameter.videos.length === 1 && video.location_overridden === true && video.precise_location === true\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-info\"></icon>\n" +
    "					<span flex>This video's location is edited by a Montage user.</span>\n" +
    "				</div>\n" +
    "				<div class=\"video-map__video-box__content\" ng-if=\"parameter.videos.length === 1 && video.location_overridden === true && video.precise_location === false\" layout=\"row\" layout-align=\"start center\">\n" +
    "					<icon class=\"ic-info\"></icon>\n" +
    "					<span flex>Imprecise location added in Montage.</span>\n" +
    "				</div>\n" +
    "				<a class=\"video-map__video-box__link\" href=\"/project/{{ ::video.project_id }}/video/{{ ::video.youtube_id }}\" style=\"background-image: url('//i3.ytimg.com/vi/{{ ::video.youtube_id }}/mqdefault.jpg')\">\n" +
    "					<span class=\"video-list-item__duration\">{{ ::video.duration | duration }}</span>\n" +
    "				</a>\n" +
    "				<div class=\"video-map__video-box__content\">\n" +
    "					<div class=\"video-box__title\">{{ ::video.name }}</div>\n" +
    "					<div class=\"video-box__channel\">by {{ ::video.channel_name }}</div>\n" +
    "				</div>\n" +
    "			</md-item>\n" +
    "		</md-list>\n" +
    "	</md-content>\n" +
    "</md-content>\n"
  );


  $templateCache.put('components/video-map/video-map.html',
    "<div class=\"video-map\">\n" +
    "	<ui-gmap-google-map ng-if=\"ctrl.markers.length > 0\" options=\"ctrl.mapOptions\" refresh=\"refreshWhen\" control=\"ctrl.map.controller\" center=\"ctrl.map.options.center\" zoom=\"ctrl.map.options.zoom\" bounds=\"ctrl.map.options.bounds\" flex>\n" +
    "		<ui-gmap-markers control=\"ctrl.markerClusterer.controller\" models=\"ctrl.markers\" doCluster=\"true\" options=\"'options'\" fit=\"true\" idKey=\"'id'\" coords=\"'self'\" clusterOptions=\"ctrl.markerClusterer.options\" clusterEvents=\"ctrl.markerClusterer.events\"></ui-gmap-markers>\n" +
    "\n" +
    "		<ui-gmap-window coords=\"ctrl.infoBox.options.coords\" show=\"ctrl.infoBox.options.isVisible\" templateUrl=\"ctrl.infoBox.options.templateUrl\" templateParameter=\"ctrl.infoBox.options.templateParams\" closeClick=\"ctrl.infoBox.options.isVisible = false;\" options=\"ctrl.infoBox.options\" control=\"ctrl.infoBox.controller\"></ui-gmap-window>\n" +
    "	</ui-gmap-google-map>\n" +
    "\n" +
    "	<div layout-fill layout=\"row\" layout-align=\"center center\" class=\"video-map__no-location\" ng-if=\"ctrl.initialised && ctrl.markers.length === 0\">\n" +
    "		<md-content class=\"video-map__no-location-text\">No location data available</md-content>\n" +
    "	</div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/video-tag-view/video-tag-view.html',
    "<md-content class=\"video-list\">\n" +
    "	<div class=\"video-list__tag-container\" layout=\"column\" flex ng-if=\"tagList.length > 0\">\n" +
    "		<div class=\"video-list__tag-wrapper\">\n" +
    "			<md-content class=\"video-list__tag\" ng-class=\"{'expanded': tag.expanded}\" ng-repeat=\"tag in tagList track by tag.global_tag_id\">\n" +
    "				<div layout=\"row\">\n" +
    "					<div layout=\"column\" flex>\n" +
    "						<div class=\"video-list__tag-name\">{{ ::tag.name }}</div>\n" +
    "						<div class=\"video-list__tag-stats\">\n" +
    "							<ng-pluralize count=\"tag.instanceCount\" when=\"{'one': '1 instance across', 'other': '{} instances across'}\"></ng-pluralize>\n" +
    "							<ng-pluralize count=\"tag.videoCount\" when=\"{'one': '1 video', 'other': '{} videos'}\"></ng-pluralize>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"video-list__tag-toggle-button\" ng-if=\"tag.hiddenInstanceCount > 0\">\n" +
    "						<gd-button ng-click=\"ctrl.toggleTag(tag)\">\n" +
    "							<span layout=\"row\" layout=align=\"start center\">\n" +
    "								<span class=\"video-list__tag__more-text\" flex layout=\"row\" layout-align=\"center center\">\n" +
    "									<span ng-if=\"!tag.expanded\">{{ ::tag.hiddenInstanceCount }} more</span>\n" +
    "									<span ng-if=\"tag.expanded\">Showing all {{ ::tag.instanceCount }} instances</span>\n" +
    "								</span>\n" +
    "								<icon ng-class=\"{'ic-unfold-more': !tag.expanded, 'ic-unfold-less': tag.expanded}\"></icon>\n" +
    "							</span>\n" +
    "						</gd-button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"video-list__tag-instances\" layout=\"row\" layout-align=\"start start\">\n" +
    "					<div class=\"video-list__tag-instance\" ng-repeat=\"instance in tag.instances | limitTo:tag.limit\">\n" +
    "						<div class=\"video-list__tag-instance-image-wrapper\">\n" +
    "							<div class=\"video-list__tag-instance-image\" style=\"background-image: url(//img.youtube.com/vi/{{ ::instance.youtube_id }}/default.jpg)\"></div>\n" +
    "							<!-- <div class=\"video-list__tag-instance-image\" style=\"background-image: url(/yt-thumbnail/?id={{ ::instance.youtube_id }}&amp;ats={{ ::instance.start_seconds * 1000 | round }})\"></div> -->\n" +
    "						</div>\n" +
    "						<div class=\"video-list__tag-instance-overlay\">\n" +
    "							<a href=\"/project/{{ ::ctrl.projectId }}/video/{{ ::instance.youtube_id }}?t={{ ::instance.start_seconds }}\" class=\"video-list__tag-instance-overlay-link\" layout-fill layout=\"column\" layout-align=\"start center\">\n" +
    "								<span flex>\n" +
    "									<span class=\"video-list__tag-instance-overlay__video-name\">{{ ::instance.video_name }}</span>\n" +
    "								</span>\n" +
    "								<span class=\"video-list__tag-instance-overlay-info\" layout=\"row\" layout-align=\"start center\">\n" +
    "									<span><icon class=\"ic-play-circle-fill\"></icon></span>\n" +
    "									<span flex>{{ ::instance.start_seconds | round }}s</span>\n" +
    "								</span>\n" +
    "							</a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</md-content>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</md-content>\n" +
    "<div layout-fill flex layout=\"row\" layout-align=\"center center\" class=\"video-tag-view__no-tag\" ng-if=\"ctrl.initialised && tagList.length === 0\">\n" +
    "	<md-content class=\"video-tag-view__no-tag-text\">No tag data available</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('components/youtube-video/youtube-video.html',
    "<div class=\"youtube-video__thumb\" ng-if=\"videoId\" style=\"background-image: url('//i3.ytimg.com/vi/{{ videoId }}/hqdefault.jpg');\"></div>\n" +
    "<div class=\"youtube-video__iframe\"></div>\n" +
    "<!--\n" +
    "<div class=\"youtube-video__controls\" layout=\"row\" layout-align=\"center end\">\n" +
    "	<div class=\"youtube-video__progress\">\n" +
    "		<span class=\"youtube-video__current-time\">{{ ctrl.videoData.state.currentTime | duration }}</span>/{{ ctrl.videoData.info.duration | duration }}\n" +
    "	</div>\n" +
    "	<div class=\"youtube-video__playback-rate\" layout=\"row\" layout-align=\"start end\">\n" +
    "		<span>Speed</span>\n" +
    "		<md-slider discrete ng-model=\"ctrl.videoData.state.playbackRate\" step=\"0.5\" min=\"0.25\" max=\"2\" aria-label=\"Playback rate\"></md-slider>\n" +
    "	</div>\n" +
    "	<span flex></span>\n" +
    "	<icon class=\"ic-volume-up\" ng-click=\"\"></icon>\n" +
    "	<icon class=\"ic-link\"></icon>\n" +
    "	<icon class=\"ic-closed-caption\"></icon>\n" +
    "	<icon class=\"ic-fullscreen\"></icon>\n" +
    "</div>\n" +
    "-->\n" +
    "<div ng-transclude></div>\n"
  );


  $templateCache.put('pages/accept-nda/pages.accept-nda.html',
    "<div layout=\"column\" flex layout-align=\"start center\" ng-show=\"!ctrl.isBusy\" class=\"ng-hide fade nda\">\n" +
    "	<md-content class=\"nda__content md-whiteframe-z1\" flex layout=\"column\" ng-if=\"ctrl.step === 1\">\n" +
    "		<md-content class=\"nda__card md-padding\" flex>\n" +
    "			<h3>\n" +
    "				Montage is a free and public tool to help journalists and researchers work to analyze and tag public YouTube videos together. Please bear in mind that submission of information over the internet is never entirely secure. Please read our Terms of Service and Privacy Policy carefully to understand how we protect your data.\n" +
    "			</h3>\n" +
    "			<div ng-include=\"'pages/partials/pages.terms.html'\" style=\"height:85%\"></div>\n" +
    "		</md-content>\n" +
    "		<md-content class=\"nda__buttons md-padding\" layout=\"row\" layout-align=\"center\">\n" +
    "			<md-button class=\"md-primary nda_button\" ng-click=\"ctrl.gotoStep(2)\">I agree</md-button>\n" +
    "		</md-content>\n" +
    "	</md-content>\n" +
    "\n" +
    "	<md-content class=\"nda__content md-whiteframe-z1\" flex layout=\"column\" ng-if=\"ctrl.step === 2\">\n" +
    "		<md-content class=\"nda__card md-padding\" flex>\n" +
    "			<h3>\n" +
    "				Montage is a free and public tool to help journalists and researchers work to analyze and tag public YouTube videos together. Please bear in mind that submission of information over the internet is never entirely secure. Please read our Terms of Service and Privacy Policy carefully to understand how we protect your data.\n" +
    "			</h3>\n" +
    "			<div ng-include=\"'pages/partials/pages.community-guidelines.html'\" style=\"height:85%\"></div>\n" +
    "		</md-content>\n" +
    "		<md-content class=\"nda__buttons md-padding\" layout=\"row\" layout-align=\"center\">\n" +
    "			<md-button class=\"md-primary nda_button\" ng-click=\"ctrl.acceptNDA()\">I agree</md-button>\n" +
    "		</md-content>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/errors/pages.403.html',
    "<div layout=\"column\" flex layout-align=\"center center\" ng-show=\"!ctrl.isBusy\" class=\"ng-hide fade\">\n" +
    "	<md-content class=\"hero md-whiteframe-z1\" layout=\"column\" layout-align=\"center center\">\n" +
    "		<h1>Ooops!</h1>\n" +
    "		<p>403: You are not supposed to see this.</p>\n" +
    "\n" +
    "		<md-button class=\"md-primary\" href=\"/\" aria-label=\"Get me out of here\">Get me out of here</md-button>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/errors/pages.404.html',
    "<div layout=\"column\" flex layout-align=\"center center\" ng-show=\"!ctrl.isBusy\" class=\"ng-hide fade\">\n" +
    "	<md-content class=\"hero md-whiteframe-z1\" layout=\"column\" layout-align=\"center center\">\n" +
    "		<h1>Ooops!</h1>\n" +
    "		<p>404: Nope, it's not here.</p>\n" +
    "\n" +
    "		<md-button class=\"md-primary\" href=\"/\" aria-label=\"Get me out of here\">Get me out of here</md-button>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/errors/pages.500.html',
    "<div layout=\"column\" flex layout-align=\"center center\" ng-show=\"!ctrl.isBusy\" class=\"ng-hide fade\">\n" +
    "	<md-content class=\"hero md-whiteframe-z1\" layout=\"column\" layout-align=\"center center\">\n" +
    "		<h1>Ooops!</h1>\n" +
    "		<p>500: Sometimes things just don't happen.</p>\n" +
    "\n" +
    "		<md-button class=\"md-primary\" href=\"/\" aria-label=\"Get me out of here\">Get me out of here</md-button>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/home/pages.home.html',
    "<md-content class=\"hero\" layout=\"column\">\n" +
    "	<md-card class=\"hero__card\">\n" +
    "		<img src=\"/img/welcome-slide-1.png\" class=\"md-card-image\">\n" +
    "		<md-content class=\"md-padding\" layout=\"column\">\n" +
    "			<h2>Welcome to Montage</h2>\n" +
    "			<p>You are about to become part of the web’s most important community for analysing video, giving the hundreds of hours uploaded to YouTube a new and more important meaning: the power to be analysed and reported.</p>\n" +
    "		</md-content>\n" +
    "	</md-card>\n" +
    "</md-content>\n"
  );


  $templateCache.put('pages/legal/pages.legal.community-guidelines.html',
    "<div layout=\"column\" flex layout-align=\"start center\" class=\"fade nda\">\n" +
    "	<md-content class=\"nda__content md-whiteframe-z1\" flex layout=\"column\">\n" +
    "		<md-content class=\"nda__card md-padding\" flex>\n" +
    "			<div ng-include=\"'pages/partials/pages.community-guidelines.html'\"></div>\n" +
    "		</md-content>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/legal/pages.legal.terms.html',
    "<div layout=\"column\" flex layout-align=\"start center\" class=\"fade nda\">\n" +
    "	<md-content class=\"nda__content md-whiteframe-z1\" flex layout=\"column\">\n" +
    "		<md-content class=\"nda__card md-padding\" flex>\n" +
    "			<div ng-include=\"'pages/partials/pages.terms.html'\"></div>\n" +
    "		</md-content>\n" +
    "	</md-content>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/partials/pages.community-guidelines.html',
    "<div class=\"col-content\" style=\"height:100%\">\n" +
    "<iframe src=\"https://meedan.com/en/montage/montage_privacy.html\" style=\"width:100%;height:100%;border-style:hidden\"/>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/partials/pages.terms.html',
    "<div class=\"col-content\" style=\"height:100%\">\n" +
    "<iframe src=\"https://meedan.com/en/montage/montage_tos.html\"  style=\"width:100%;height:100%;border-style:hidden\"/>\n" +
    "</div>\n"
  );


  $templateCache.put('pages/project/pages.project.html',
    "<div class=\"project__toolbar\" layout=\"column\">\n" +
    "	<div class=\"project__description\" ng-if=\"ctrl.project.description\" ng-class=\"{'expanded': ctrl.descriptionExpanded}\" layout=\"row\" layout-align=\"center start\">\n" +
    "		<md-content flex>{{ ctrl.project.description }}</md-content>\n" +
    "		<gd-button ng-click=\"ctrl.descriptionExpanded = !ctrl.descriptionExpanded\">\n" +
    "			<icon class=\"ic-expand-more\"></icon>\n" +
    "		</gd-button>\n" +
    "	</div>\n" +
    "	<div class=\"project__toolbar__row\" layout=\"row\" layout-align=\"center\" flex>\n" +
    "		<div class=\"content-spacer\" flex></div>\n" +
    "		<div class=\"project__toolbar__wrapper\" layout=\"row\" layout-align=\"center\">\n" +
    "			<md-button ng-if=\"ctrl.collection\" aria-label=\"Export collection\" class=\"md-fab md-accent project__toolbar-export-button\" ng-click=\"ctrl.exportCollection()\">\n" +
    "				<icon class=\"ic-save\"></icon>\n" +
    "			</md-button>\n" +
    "			<div class=\"project__toolbar-header\" flex=\"33\" layout=\"row\" layout-align=\"start center\">\n" +
    "				<span ng-show=\"ctrl.collection\" flex layout=\"row\" layout-align=\"start center\">\n" +
    "					<gd-inline-edit ng-model=\"ctrl.collection.name\" on-save=\"ctrl.updateCollection()\" layout=\"column\">\n" +
    "						{{ ctrl.collection.name }}\n" +
    "					</gd-inline-edit>\n" +
    "					<gd-button ng-click=\"ctrl.removeCollection($event)\" layout=\"row\" layout-align=\"center center\" class=\"project__toolbar__delete-collection\">\n" +
    "						<icon class=\"ic-delete\"></icon>\n" +
    "					</gd-button>\n" +
    "				</span>\n" +
    "				<span ng-show=\"!ctrl.collection\" flex>\n" +
    "					<span ng-show=\"ctrl.section === 'library'\">All videos</span>\n" +
    "					<span ng-show=\"ctrl.section === 'favorites'\">Favourite videos</span>\n" +
    "					<span ng-show=\"ctrl.section === 'unwatched'\">Unwatched videos</span>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "			<div flex class=\"project__toolbar__buttons\" layout=\"row\" layout-align=\"center\">\n" +
    "				<gd-button layout=\"row\" layout-align=\"center center\" class=\"gd-button--icon\" ng-class=\"{ 'is-active': ctrl.viewMode === 'list' }\" ng-click=\"ctrl.switchView('list')\">\n" +
    "					<icon class=\"ic-view-list\"></icon>\n" +
    "					<md-tooltip md-delay=\"100\">Videos</md-tooltip>\n" +
    "				</gd-button>\n" +
    "				<gd-button layout=\"row\" layout-align=\"center center\" class=\"gd-button--icon\" ng-class=\"{ 'is-active': ctrl.viewMode === 'map' }\" ng-click=\"ctrl.switchView('map')\">\n" +
    "					<icon class=\"ic-place\"></icon>\n" +
    "					<md-tooltip md-delay=\"100\">Locations</md-tooltip>\n" +
    "				</gd-button>\n" +
    "				<gd-button layout=\"row\" layout-align=\"center center\" class=\"gd-button--icon\" ng-class=\"{ 'is-active': ctrl.viewMode === 'tag' }\" ng-click=\"ctrl.switchView('tag')\">\n" +
    "					<icon class=\"ic-label\"></icon>\n" +
    "					<md-tooltip md-delay=\"100\">Tags</md-tooltip>\n" +
    "				</gd-button>\n" +
    "			</div>\n" +
    "			<div flex=\"33\" layout=\"row\" layout-align=\"end\"></div>\n" +
    "		</div>\n" +
    "		<div class=\"content-spacer\" flex></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"project-filter-toolbar md-whiteframe-z1\" layout=\"row\" layout-align=\"start center\">\n" +
    "	<div class=\"content-spacer\" flex></div>\n" +
    "	<div class=\"project-filter-toolbar__content\">\n" +
    "		<gd-video-filter-set project=\"ctrl.project\" collection=\"ctrl.collection\" auto-fetch=\"false\" show-text-filter=\"true\" ng-model=\"ctrl.filterSet\" on-update=\"ctrl.onFilterSetUpdate(ctrl.filterSet)\"></gd-video-filter-set>\n" +
    "	</div>\n" +
    "	<div class=\"content-spacer\" flex></div>\n" +
    "</div>\n" +
    "\n" +
    "<md-content class=\"project__main-content\" flex layout=\"column\">\n" +
    "	<div ng-if=\"!ctrl.isFiltering && !ctrl.projectVideos.length && ctrl.viewMode === 'list'\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "		<h2 class=\"projects__create-prompt__title\">Search for videos to get started</h2>\n" +
    "		<p class=\"projects__create-prompt__content\">To add videos to your project library use the search box</p>\n" +
    "		<md-button aria-label=\"Add new project\" class=\"md-fab md-accent\" ng-click=\"appctrl.showSearch()\">\n" +
    "			<icon class=\"ic-search\"></icon>\n" +
    "		</md-button>\n" +
    "	</div>\n" +
    "	<div ng-if=\"ctrl.isFiltering || ctrl.viewMode !== 'list' || ctrl.projectVideos.length > 0\">\n" +
    "		<gd-video-list lazy-show=\"ctrl.viewMode === 'list'\" videos=\"ctrl.filterSet.videos\" layout=\"column\" is-filtering=\"ctrl.isFiltering\" options=\"ctrl.videoListOptions\" ordering=\"ctrl.ordering\" quick-filter=\"ctrl.quickFilter\"></gd-video-list>\n" +
    "		<video-map lazy-show=\"ctrl.viewMode === 'map'\" refresh-when=\"ctrl.viewMode === 'map'\" videos=\"ctrl.filterSet.videos\" layout=\"row\" flex></video-map>\n" +
    "		<video-tag-view lazy-show=\"ctrl.viewMode === 'tag'\" tags=\"ctrl.filterSet.tags\" layout=\"column\" flex></video-tag-view>\n" +
    "	</div>\n" +
    "</md-content>\n" +
    "\n" +
    "<section ng-show=\"ctrl.loaders.project\" class=\"page-loader ng-hide fade\" layout=\"column\" layout-align=\"center center\">\n" +
    "	<holo-spinner class=\"holo-spinner--layer\"></holo-spinner>\n" +
    "</section>\n"
  );


  $templateCache.put('pages/projects/pages.projects.html',
    "\n" +
    "<section ng-if=\"ctrl.projects | any:{current_user_info: {is_pending: true}}\" layout=\"row\" layout-align=\"center center\" class=\"pending-projects-banner\">\n" +
    "	<div>When you accept a project your presence will be visible to collaborators on that project</div>\n" +
    "</section>\n" +
    "<md-content flex>\n" +
    "	<md-toolbar class=\"appbar__bg\"></md-toolbar>\n" +
    "\n" +
    "	<div class=\"page-content\" layout=\"row\">\n" +
    "		<div class=\"user-sidebar\" flex=\"20\">\n" +
    "			<user-box user=\"appctrl.user\" user-stats=\"ctrl.userStats\" thumb-size=\"92\" thumb-layout=\"column\" name-layout=\"row\" name-layout-align=\"center\" icon-colour=\"grey\"></user-box>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"projects__list\" layout=\"column\" flex>\n" +
    "			<div class=\"projects__list-wrapper\" ng-if=\"ctrl.newProject || ctrl.projects.length > 0\" layout-fill>\n" +
    "				<project-list-item class=\"slide-project\" ng-if=\"ctrl.newProject\" project=\"ctrl.newProject\" user-id=\"{{ appctrl.user.id }}\" is-visible=\"true\" on-save=\"ctrl.onProjectSave($index, project)\" on-cancel=\"ctrl.onProjectAddCancel()\"></project-list-item>\n" +
    "				<project-list-item class=\"slide-project\" ng-if=\"ctrl.projects.length > 0\" ng-repeat=\"project in ctrl.projects | orderBy:'-created' track by project.id\" project=\"project\" index=\"{{ $index }}\" user-id=\"{{ appctrl.user.id }}\" is-visible=\"true\" on-save=\"ctrl.onProjectSave($index, project)\" on-cancel=\"ctrl.onProjectAddCancel()\"></project-list-item>\n" +
    "			</div>\n" +
    "			<div ng-show=\"ctrl.projects.length === 0 && !ctrl.newProject && ctrl.user.is_whitelisted\" class=\"projects__create-prompt\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "				<h2 class=\"projects__create-prompt__title\">Get started by creating a project</h2>\n" +
    "				<p class=\"projects__create-prompt__content\">Your own projects, and any invitations to other user’s projects, will appear here.</p>\n" +
    "				<md-button aria-label=\"Add new project\" class=\"md-fab md-accent\" ng-click=\"ctrl.addBlankProject()\">\n" +
    "					<icon class=\"ic-add\"></icon>\n" +
    "				</md-button>\n" +
    "			</div>\n" +
    "			<div ng-if=\"ctrl.projects.length === 0 && !ctrl.newProject && !ctrl.user.is_whitelisted\" class=\"projects__no-create-prompt\" layout=\"column\" layout-align=\"center center\" flex>\n" +
    "				<h2 class=\"projects__no-create-prompt__title\">You are not authorized to create new projects.</h2>\n" +
    "				<p class=\"projects__no-create-prompt__content\">Collaborate with others on a Montage project by being invited by a project owner.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"projects__create-button\" layout=\"row\" layout-align=\"center\" flex=\"10\">\n" +
    "			<md-button aria-label=\"Add new project\" ng-if=\"ctrl.projects.length > 0 && ctrl.user.is_whitelisted\" class=\"md-fab md-accent\" ng-click=\"ctrl.addBlankProject()\">\n" +
    "				<icon class=\"ic-add\"></icon>\n" +
    "			</md-button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('pages/video/duplicate-videos-dialog/pages.video.duplicate-videos.html',
    "<md-dialog class=\"dialog duplicates-dialog\">\n" +
    "	<div class=\"dialog__save-overlay fade\" ng-show=\"saving || loading\">\n" +
    "		<holo-spinner></holo-spinner>\n" +
    "	</div>\n" +
    "	<form name=\"autocompleteForm\" ng-submit=\"ctrl.save()\" novalidate>\n" +
    "		<md-content class=\"duplicates-dialog__content\">\n" +
    "			<h2>Duplicate videos</h2>\n" +
    "\n" +
    "			<p class=\"duplicates-dialog__hint\">Enter the details of videos which have the same content as this one.</p>\n" +
    "\n" +
    "				<input\n" +
    "					name=\"videoField\"\n" +
    "					class=\"duplicates-dialog__input duplicates-dialog__input--autofocus\"\n" +
    "					flex\n" +
    "					type=\"text\"\n" +
    "					ng-pattern=\"ctrl.videoUrlPattern\"\n" +
    "					ng-model=\"data.query\"\n" +
    "					ng-keydown=\"ctrl.onInputKeyDown($event)\"\n" +
    "					placeholder=\"Video ID or URL\">\n" +
    "\n" +
    "				<ul class=\"validation-messages\">\n" +
    "					<li class=\"validation-message validation-message--error\" ng-show=\"autocompleteForm.videoField.$error.pattern\" layout=\"row\" layout-align=\"start center\">\n" +
    "						<span class=\"validation-message__message\" flex>Invalid video ID. Copy and paste the whole Montage video URL.</span>\n" +
    "						<icon class=\"validation-message__icon ic-warning\"></icon>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "\n" +
    "			<div class=\"duplicates-dialog__video-list-title\">This video</div>\n" +
    "			<table class=\"duplicates-dialog__video-list\">\n" +
    "				<tr>\n" +
    "					<td class=\"duplicates-dialog__item-cell--thumbnail\">\n" +
    "						<gd-youtube-thumbnail video-id=\"video.youtube_id\" time=\"0\"></gd-youtube-thumbnail>\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--title\">\n" +
    "						{{ video.name }}\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--channel\">\n" +
    "						{{ video.channel_name }}\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--duration\">\n" +
    "						{{ video.duration * 1000 | date:'m:ss' }}\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--remove\"></td>\n" +
    "				</tr>\n" +
    "			</table>\n" +
    "\n" +
    "			<div class=\"duplicates-dialog__video-list-title\">Other videos</div>\n" +
    "\n" +
    "			<table class=\"duplicates-dialog__video-list\">\n" +
    "				<tr ng-repeat=\"video in duplicates track by video.youtube_id\">\n" +
    "					<td class=\"duplicates-dialog__item-cell--thumbnail\">\n" +
    "						<gd-youtube-thumbnail video-id=\"video.youtube_id\" time=\"0\"></gd-youtube-thumbnail>\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--title\">\n" +
    "						<a href=\"/project/{{ ::video.project_id }}/video/{{ ::video.youtube_id }}\" class=\"video-list-item__video-link\">{{ video.name }}</a>\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--channel\">\n" +
    "						{{ video.channel_name }}\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--duration\">\n" +
    "						{{ video.duration * 1000 | date:'m:ss' }}\n" +
    "					</td>\n" +
    "					<td class=\"duplicates-dialog__item-cell--remove\">\n" +
    "						<gd-button ng-click=\"ctrl.removeDuplicate(video)\">\n" +
    "							<icon class=\"ic-cancel\"></icon>\n" +
    "						</gd-button>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</table>\n" +
    "\n" +
    "			<div ng-if=\"!duplicates.length\" class=\"duplicates-dialog__no-duplicates\">\n" +
    "				This video has no duplicates\n" +
    "			</div>\n" +
    "\n" +
    "		</md-content>\n" +
    "		<div class=\"md-actions\">\n" +
    "			<md-button class=\"md-primary\" ng-click=\"ctrl.cancel()\" aria-label=\"Cancel\">Cancel</md-button>\n" +
    "			<md-button class=\"md-accent\" type=\"submit\" aria-label=\"Save\">Save</md-button>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('pages/video/pages.video.html',
    "<div class=\"appbar__bg\"></div>\n" +
    "<md-content class=\"video-page\" layout-align=\"start center\" layout=\"column\" layout-fill flex>\n" +
    "	<div class=\"video-theater\" layout=\"column\" flex>\n" +
    "		<div class=\"video-theater__wrap\">\n" +
    "			<div class=\"video-theater__overview\" layout=\"row\">\n" +
    "				<div class=\"video-theater__video\" layout=\"row\">\n" +
    "					<youtube-video video-id=\"ctrl.gdVideoData.youtube_id\" player=\"ctrl.player\" start-time=\"ctrl.videoStartTime\" flex></youtube-video>\n" +
    "				</div>\n" +
    "				<div class=\"video-theater__info\" layout=\"column\">\n" +
    "					<gd-video-details-panel project=\"ctrl.project\" gd-video-data=\"ctrl.gdVideoData\" yt-video-data=\"ctrl.ytVideoData\" layout=\"column\" flex></gd-video-details-panel>\n" +
    "				</div>\n" +
    "				<div class=\"video-theater__nav-arrow video-theater__nav-arrow--left\" layout=\"column\" layout-align=\"center center\">\n" +
    "					<a href=\"{{ ctrl.prevUrl }}\" ng-if=\"ctrl.prevUrl && !ctrl.gdVideoData.archived_at\" class=\"video-theater__nav-link fade\">\n" +
    "						<icon class=\"ic-chevron-left\"></icon>\n" +
    "						<gd-video-popup video=\"ctrl.prevVideo\"></gd-video-popup>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "				<div class=\"video-theater__nav-arrow video-theater__nav-arrow--right\" layout=\"column\" layout-align=\"center center\">\n" +
    "					<a href=\"{{ ctrl.nextUrl }}\" ng-if=\"ctrl.nextUrl && !ctrl.gdVideoData.archived_at\" class=\"video-theater__nav-link fade\">\n" +
    "						<icon class=\"ic-chevron-right\"></icon>\n" +
    "						<gd-video-popup video=\"ctrl.nextVideo\"></gd-video-popup>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"video-theater__player-controls\" layout=\"row\" layout-align=\"center\">\n" +
    "			<gd-video-controls player=\"ctrl.player\" layout=\"row\" layout-align=\"center\"></gd-video-controls>\n" +
    "		</div>\n" +
    "		<div class=\"video-theater__timeline\" layout=\"row\" flex>\n" +
    "			<gd-video-timeline video=\"ctrl.gdVideoData\" player=\"ctrl.player\" layout=\"row\" flex></gd-video-timeline>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('pages/video/pages.youtube-video.html',
    "<div class=\"appbar__bg\"></div>\n" +
    "<md-content class=\"video-page\" layout-align=\"start center\" layout=\"column\" layout-fill flex>\n" +
    "	<div class=\"video-theater\" layout=\"column\" flex>\n" +
    "		<div class=\"video-theater__wrap\">\n" +
    "			<div class=\"video-theater__overview\" layout=\"row\">\n" +
    "				<div class=\"video-theater__video\" layout=\"row\">\n" +
    "					<youtube-video video-id=\"ctrl.gdVideoData.youtube_id\" player=\"ctrl.player\" start-time=\"ctrl.videoStartTime\" flex></youtube-video>\n" +
    "				</div>\n" +
    "				<div class=\"video-theater__info\" layout=\"column\">\n" +
    "					<gd-video-details-panel project=\"ctrl.project\" gd-video-data=\"ctrl.gdVideoData\" yt-video-data=\"ctrl.ytVideoData\" layout=\"column\" flex></gd-video-details-panel>\n" +
    "				</div>\n" +
    "				<div class=\"video-theater__nav-arrow video-theater__nav-arrow--left\" layout=\"column\" layout-align=\"center center\">\n" +
    "					<a href=\"{{ ctrl.prevUrl }}\" ng-if=\"ctrl.prevUrl\" class=\"video-theater__nav-link fade\">\n" +
    "						<icon class=\"ic-chevron-left\"></icon>\n" +
    "						<gd-video-popup video=\"ctrl.prevVideo\"></gd-video-popup>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "				<div class=\"video-theater__nav-arrow video-theater__nav-arrow--right\" layout=\"column\" layout-align=\"center center\">\n" +
    "					<a href=\"{{ ctrl.nextUrl }}\" ng-if=\"ctrl.nextUrl\" class=\"video-theater__nav-link fade\">\n" +
    "						<icon class=\"ic-chevron-right\"></icon>\n" +
    "						<gd-video-popup video=\"ctrl.nextVideo\"></gd-video-popup>\n" +
    "					</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"video-theater__player-controls\" layout=\"column\" layout-align=\"center\">\n" +
    "			<gd-video-controls player=\"ctrl.player\" layout=\"row\" layout-align=\"center\"></gd-video-controls>\n" +
    "		</div>\n" +
    "		<div class=\"video-theater__timeline\" layout=\"row\" flex>\n" +
    "			<div flex=\"30\" layout=\"row\" layout-align=\"center center\">\n" +
    "				<div class=\"no-tagging\" flex layout=\"column\" layout-align=\"center center\">\n" +
    "					<icon class=\"ic-label\"></icon>\n" +
    "				</div>\n" +
    "				<div flex layout=\"row\" layout-align=\"start start\">\n" +
    "					<div flex=\"80\">\n" +
    "						<h3>Tagging disabled</h3>\n" +
    "						<p>Add this video to a project to see tagging options.</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<gd-video-adder is-visible=\"true\" videos=\"ctrl.videos\" flex=\"70\" layout=\"column\"></gd-video-adder>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</md-content>\n"
  );


  $templateCache.put('pages/video/remove-video-dialog/pages.video.remove-video.html',
    "<md-dialog>\n" +
    "	<md-content>\n" +
    "		<h2>Remove video</h2>\n" +
    "		<p ng-if=\"collectionId\">Are sure you wish to remove this video from the collection?</p>\n" +
    "		<p ng-if=\"!collectionId\">Are sure you wish to remove this video from the Library?</p>\n" +
    "	</md-content>\n" +
    "	<div class=\"md-actions\">\n" +
    "		<md-button ng-click=\"cancel()\">Cancel</md-button>\n" +
    "		<md-button class=\"md-warn\" ng-click=\"remove()\" ng-if=\"collectionId\">\n" +
    "			Remove video from collection\n" +
    "		</md-button>\n" +
    "		<md-button class=\"md-warn\" ng-click=\"remove()\" ng-if=\"!collectionId\">\n" +
    "			Remove video from Library\n" +
    "		</md-button>\n" +
    "	</div>\n" +
    "</md-dialog>\n"
  );


  $templateCache.put('pages/video/video-dropdown.html',
    "<gd-floating-menu-group ng-if=\"!menuData.hasProject\" icon=\"ic-folder\" title=\"Add to\">\n" +
    "	<gd-floating-menu-group ng-mouseenter=\"menuData.getCollections(project.id)\" icon=\"ic-folder\" title=\"{{ project.name }}\" ng-repeat=\"project in menuData.projects\">\n" +
    "		<gd-floating-menu-item icon=\"ic-movie\" ng-click=\"menuData.addToProject(project)\">Library</gd-floating-menu-item>\n" +
    "		<gd-floating-menu-item ng-if=\"menuData.collections[project.id].length\" ng-repeat=\"collection in menuData.collections[project.id]\" ng-click=\"menuData.addToCollection(project, collection)\">{{ collection.name }}</gd-floating-menu-item>\n" +
    "		<gd-floating-menu-item hide-on-click=\"false\" icon=\"ic-add\" layout=\"row\" layout-align=\"start center\">\n" +
    "			<form ng-submit=\"menuData.createCollection(project.id, menuData.newCollectionName)\">\n" +
    "				<span ng-hide=\"menuData.addingNewCollection\" ng-click=\"menuData.showNewCollectionForm()\">New collection</span>\n" +
    "				<input flex type=\"text\" placeholder=\"Collection name\" ng-show=\"menuData.addingNewCollection\" ng-model=\"menuData.newCollectionName\">\n" +
    "			</form>\n" +
    "		</gd-floating-menu-item>\n" +
    "	</gd-floating-menu-group>\n" +
    "</gd-floating-menu-group>\n" +
    "\n" +
    "<gd-floating-menu-group ng-if=\"menuData.hasProject\" icon=\"ic-folder\" title=\"Add to\" ng-mouseenter=\"menuData.getCollections(menuData.projects[0].id)\" ng-hide=\"menuData.isVideoArchived()\">\n" +
    "	<gd-floating-menu-item hide-on-click=\"false\" ng-if=\"menuData.collections[menuData.projects[0].id].length\" ng-repeat=\"collection in menuData.collections[menuData.projects[0].id]\" ng-click=\"menuData.addToCollection(menuData.projects[0], collection)\" >\n" +
    "		<span layout=\"row\" layout-align=\"start center\">\n" +
    "			<span class=\"gd-floating-menu-group__icon\">\n" +
    "				<icon ng-class=\"{'ic-check-box-outline-blank': !menuData.isVideoInCollection(collection), 'ic-check-box ic-colour-accent': menuData.isVideoInCollection(collection)}\"></icon>\n" +
    "			</span>\n" +
    "			<span>{{ collection.name }}</span>\n" +
    "		</span>\n" +
    "	</gd-floating-menu-item>\n" +
    "	<gd-floating-menu-item class=\"video-dropdown__collection\" hide-on-click=\"false\" icon=\"ic-add\" layout=\"row\" layout-align=\"start center\">\n" +
    "		<form ng-submit=\"menuData.createCollection(menuData.projects[0].id, menuData.newCollectionName)\">\n" +
    "			<span ng-hide=\"menuData.addingNewCollection\" ng-click=\"menuData.showNewCollectionForm()\">New collection</span>\n" +
    "			<span ng-show=\"menuData.addingNewCollection\" layout=\"column\">\n" +
    "				<input flex type=\"text\" placeholder=\"Collection name\" ng-model=\"menuData.newCollectionName\">\n" +
    "				<span layout=\"row\" layout-align=\"end center\">\n" +
    "					<md-button md-no-ink aria-label=\"Cancel\" type=\"button\" ng-click=\"menuData.resetCollectionForm()\">Cancel</md-button>\n" +
    "					<md-button md-no-ink class=\"md-primary\" aria-label=\"Add\" type=\"submit\">Add</md-button>\n" +
    "				</span>\n" +
    "			</span>\n" +
    "		</form>\n" +
    "	</gd-floating-menu-item>\n" +
    "</gd-floating-menu-group>\n" +
    "\n" +
    "<gd-floating-menu-item icon=\"ic-folder\" ng-click=\"menuData.manageDuplicates($event)\" ng-hide=\"menuData.isVideoArchived()\">Manage duplicates</gd-floating-menu-item>\n" +
    "<gd-floating-menu-item icon=\"ic-folder\" ng-click=\"menuData.remove($event)\">Remove</gd-floating-menu-item>\n"
  );


  $templateCache.put('pages/welcome/pages.welcome.html',
    "<div ng-show=\"!ctrl.isBusy\" class=\"ng-hide fade welcome-page\">\n" +
    "  <div class=\"content\">\n" +
    "    <div class=\"map-of-syria\"></div>\n" +
    "\n" +
    "    <div class=\"caption\">\n" +
    "      <div class=\"quote\">\n" +
    "        <p class=\"main-quote\">\"Montage helps our team analyze days of video content by enabling collaboration. It allows us to focus our attention on analysis as opposed to data collection.\"</p>\n" +
    "        <p class=\"credit\">- The Carter Center</p>\n" +
    "      </div>\n" +
    "      <span class=\"montage-icon\"></span>\n" +
    "      <div class=\"purpose\">\n" +
    "        Montage enables teams to work together to analyze and tag YouTube videos.\n" +
    "      </div>\n" +
    "      <div class=\"button-bar\">\n" +
    "        <div class=\"btn-log-in\" ng-click=\"ctrl.logIn()\" aria-label=\"Sign in with Google\">\n" +
    "          <img src=\"{{ ctrl.static.getFileUrl('img/btn_google_signin_dark_normal_web@2x.png') }}\" />\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"meedan-message\">\n" +
    "        A project of <a href=\"https://meedan.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n" +
    "          <img src=\"{{ ctrl.static.getFileUrl('img/meedan-logo-nav.svg') }}\" />\n" +
    "        </a>\n" +
    "      </div>\n" +
    "      <div class=\"jigsaw-icon\">\n" +
    "        <a href=\"https://jigsaw.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\"/>\n" +
    "        <img src=\"{{ ctrl.static.getFileUrl('img/developed-with-youtube-logos-2x-single.png') }}\" />\n" +
    "      </div>\n" +
    "      <div class=\"opensource-message\">\n" +
    "        Montage is open source on <a href=\"https://github.com/meedan/montage\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.\n" +
    "      </div>\n" +
    "      <div class=\"links-bar\">\n" +
    "        <a href=\"https://meedan.com/en/montage/montage_privacy.html\" target=\"_blank\" rel=\"noopener noreferrer\">Privacy Policy</a>\n" +
    "        <a href=\"https://meedan.com/en/montage/montage_tos.html\" target=\"_blank\" rel=\"noopener noreferrer\">Terms of Service</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
