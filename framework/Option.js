/**
 * Created by kevin on 10/22/14.
 */

/** Option is a monad that safeguards access to null values providing
 * simple binding checks and conditional logic.
 **/

(function (jsScope) {
    function isFunction(func) {
        return Object.prototype.toString.call(func) == '[object Function]';
    }

    jsScope.None = function () {
        return {
            getOrElse: function (elseFn) {
                if (elseFn == null) {
                    throw new Error("Don't use null values if you are using the Option monad!");
                }

                if (isFunction(elseFn)) {
                    return elseFn();
                } else {
                    return elseFn;
                }
            },

            isEmpty: true
        };
    };

    jsScope.Some = function (x) {
        if (x == null) {
            throw new Error("called Some with a null value!")
        }

        return {
            getOrElse: function () {
                return x;
            },

            isEmpty: false
        };
    };

    jsScope.Option = function (x) {
        return (x ? Some(x) : None());
    };

    jsScope.throwException = function (instance) {
        return function () {
            throw instance;
        };
    };

})(window);