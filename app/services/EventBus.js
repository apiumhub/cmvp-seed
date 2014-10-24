/**
 * Created by kevin on 10/24/14.
 */
app.register({dependencies: ['postal']}, function (postal) {
    function EventBus() {

    }

    EventBus.prototype.sayHello = function () {
        return "Hello!";
    };

    return new EventBus();
});