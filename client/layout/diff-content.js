'use strict';

Template.diffContent.helpers({
    isMainFullWidth: function () {
        return Session.get('isMainFullWidth');
    }
});

Template.diffContent.events({
    'click .js-expand-viewport': function () {
        var state = Session.get('isMainFullWidth');
        Session.set('isMainFullWidth', !state);
    },
    'click .js-reset-viewport': function () {
        $('.js-fake-file-name').val('');
        Session.set('prettyDiffData');
    }
});
