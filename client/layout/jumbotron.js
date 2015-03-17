'use strict';

Template.jumbotron.events({
    'pretty-diff-success .js-fake-file-name, click .js-read-more': function () {
        $('html, body').stop(true, false).animate({
            scrollTop: $('main').position().top
        }, 'slow', 'linear');
    }
});
