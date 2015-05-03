'use strict';

Template.header.onRendered(function () {
    transformicons.add('.tcon');
});

Template.header.events({
    'click .js-open-menu': function () {
        var menuState = Session.get('isMainMenuActive');
        Session.set('isMainMenuActive', !menuState);
    }
});
