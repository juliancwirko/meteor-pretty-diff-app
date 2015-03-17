'use strict';

Template.registerHelper('isMainMenuActive', function () {
    return Session.get('isMainMenuActive');
});
