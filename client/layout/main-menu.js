'use strict';

Template.mainMenu.events({
    'click .js-menu-overlay': function () {
        Session.set('isMainMenuActive', false);
    }
});
