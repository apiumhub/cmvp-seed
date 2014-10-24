/**
 * Created by kevin on 10/24/14.
 */
app.register(function (container) {
    var postal = container.get('postal');

    function EventBus() {

    }

    console.log(postal);
    EventBus.prototype.subscribe = function (parameters) {
        return {
            unsuscribe: postal.subscribe(parameters).unsuscribe,
            channel: parameters.channel,
            topic: parameters.topic
        };
    };

    EventBus.prototype.publish = function (parameters) {
        postal.publish(parameters);
    };

    return new EventBus();
});