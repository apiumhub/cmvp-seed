/**
 * Created by kevin on 10/24/14.
 */
app.register(function (container) {
    var postal = container.getObject('postal');

    function EventBus() {

    }

    EventBus.prototype.subscribe = function (parameters) {
        return {
            unsubscribe: postal.subscribe(parameters).unsubscribe,
            channel: parameters.channel,
            topic: parameters.topic
        };
    };

    EventBus.prototype.publish = function (parameters) {
        postal.publish(parameters);
    };

    var instance = new EventBus();
    return { getInstance: function () { return instance; }};
});