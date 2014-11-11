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

    EventBus.prototype.createChannel = function (channel, topic) {
        return {
            send: function (msg) {
                instance.publish({ channel: channel, topic: topic, data: msg });
                return msg;
            },

            listen: function (callback) {
                instance.subscribe({ channel: channel, topic: topic, callback: callback });
            }
        };
    };

    var instance = new EventBus();
    return { getInstance: function () { return instance; }};
});