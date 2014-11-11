/**
 * Created by kevin on 10/24/14.
 */

describe("EventBus", function () {
    var EventBus = app.getService('services/EventBus').getInstance();

    it("should respond to events in a subscribed channel", function () {
        var S = EventBus.subscribe({channel: "A", topic: "B", callback: function (data) {
            expect(data).toEqual("Hi!");
        }});

        EventBus.publish({channel: "A", topic: "B", data: "Hi!"});

        S.unsubscribe();
    });

    it("should not catch events on different subscriptions", function () {
        var S = EventBus.subscribe({channel: "A", topic: "A", callback: function (data) {
            expect(true).toEqual(true);
        }});

        var NotS = EventBus.subscribe({channel: "B", topic: "B", callback: function (data) {
            expect(false).toEqual(true);
        }});

        EventBus.publish({channel: "A", topic: "A", data: "AAA!!!"});

        S.unsubscribe();
        NotS.unsubscribe();
    });
});


