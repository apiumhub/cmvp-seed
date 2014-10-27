/**
 * Created by kevin on 10/27/14.
 */
app.registerPresenter(function (container) {
    function TomatoPresenter() {
    }

    TomatoPresenter.prototype.show = function (view) {
        view.event.onClickTomato = function () {
            console.log("!!!");
           view.setColor('orange');
        }.bind(this);
    };

    TomatoPresenter.newInstance = function () {
        return Some(new TomatoPresenter());
    }

    return TomatoPresenter;
});