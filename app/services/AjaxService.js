/**
 * Created by kevin on 10/27/14.
 */
app.registerService(function (container) {
    var Q = container.getFunction('q');

    return {
        ajax: function (params) {
            return Q($.ajax(params));
        }
    };
});