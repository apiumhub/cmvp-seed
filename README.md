# CMVP-Seed :: Angular Controller + MVP
CMVP architecture seed. Feel free to use in your projects :)
We did this to help developers to create a cool strict MVP.
You can <a href="http://apiumtech.com/contact-us" >contact us</a> for any question... We've been very successful using that architecture for many webapp and mobile projects for the last 2 years.

## Installation
`npm install`

## Running the tests
To check that the system is ok, simply run the tests.
As long as we promote the use of a strong IDE, we suggest to run the test from PHPStorm.
To do this:

* Install PHPStorm
* Install Karma plugin 
* Configure Karma in "Run Configurations"
* Run the tests
<div align="center"><img src="http://apiumtech.com/wp-content/uploads/2015/03/test_ok_2.png" > </img></div>

## Running the server

`npm start`

## About CMVP Architecture

We created that architecture to decouple frontend from backend using the best technology we could find, that's why we choose AngularJS.
Besides this... we can't not predict the future. Maybe we want to replace the angularsj for other technology as reactjs or even backbone.
To avoid the dependency with the framework all the core of the architecture is pure Javascript, not AngularJS. 
That also have some good things like testeability, emergent design... That's Agile.

## Why C.M.V.P. ?

* C.ontroller: angularJS controller for $scope and other angular facilities injection
* M.odel: for managing data provided by server or that is about to be sent
* V.iew: for every single element that is displayed
* P.resenter: for model and view binding

### Diving in. Controller.

* The only responsibility is to instantiate the right view injecting all dependencies into it. 
* All angular logic is encapsulated in registerController method.
* Always one controller per view.


### Diving in. Model.

* Validates data. 
* Establishes server connection configuration.
* Constructs queries.
* Implements data interactions (inside its domain).


### Diving in. View.

* view’s responsibility is to instantiate a presenter. It also may pass presenter a model instance.
* view has 3 main blocks:
** data: presentation model that is exposed in $scope and is accessible from the html view.
** event: functions which execution means a model access. They are always overwritten in presenter.
** fn: functions which execution do not require a model intervention. 

### Diving in. Presenter.

The only responsibility is to bind view events with model methods. It is accomplished passing view’s methods as callbacks.

# Components

## Aspects

Implemented with meld library. Aspects make possible to “cut across” different application domains. 
In JS they are used in order to implement Dynamic Proxy design pattern.

## EventBus

Communication between different views is accomplished by the implementation of Event Bus. 
With Event Bus views’ shared state can be avoided. Every view is independent and does not rely on other views implementation.

## Q Promises

Communication with server is done using q promises. They facilitate response treating implementing callbacks for success, error, timeout, etc.


# Technologies
<strong>The <a href="http://apiumtech.com">Apiumtech Team</a></strong> has built the <strong>CMVP Seed</strong> on top of these amazing and awesome technologies:

<img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvHWF-dZAWmRYOTy0AHz2t0XfeFRehD_TSrWV2weRQwXl05m91CVrgF4XS" > </img>
<img src="http://karma-runner.github.io/assets/img/banner.png" > </img>
<img src="http://www.macminicolo.net/i_mini/jenkinslogo.png" > </img>
<img src="https://angularjs.org/img/AngularJS-large.png" > </img>
<img src="https://nodejs.org/images/roadshow-promo.png" > </img>
<img src="http://chaijs.com/public/img/chai-logo-small.png" > </img>
<img src="http://apiumtech.com/wp-content/uploads/2015/03/jasmine.png" > </img>
<img src="http://requirejs.org/i/logo.png" > </img>
<img src="http://www.sonarqube.org/wp-content/themes/sonarsource.org/images/sonar.png" > </img>
<img src="http://apiumtech.com/wp-content/uploads/2015/03/sinon_javascript.png" > </img>
<img src="http://lesscss.org/public/img/logo.png" > </img>
<img src="http://apiumtech.com/wp-content/uploads/2015/03/npm_logo.png" > </img>
<img src="http://phantomjs.org/img/phantomjs-logo.png" > </img>



