define(function(require) {
    'use strict';

    function Pomodoro(di) {
        this.di = di;
    }

    Pomodoro.newInstance = function(di) {
        di = di || {};
        return new Pomodoro(di);
    };

    Pomodoro.prototype.getStatus = function() {
        return undefined;
    };

    return Pomodoro;
});
