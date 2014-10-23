/**
 * This file is implementation dependent. Now it is highly coupled (and ugly) to requirejs because we must download framework
 * dependencies somehow. Using Grunt we can remove this dependency minimizing the manifest with the application dependencies
 * (for example, requirejs + angularjs + postal + manifest + main) and load only one file. This way we are not tied to any
 * AMD because we only need to load application sources using the current application configuration.
 *
 * After minimizing, this file should only load the app.manifest.src dependencies before initializing the application using
 * the global 'app' object (as you can see in app.registerObject...). This function is the only one that must be kept.
 */

app.initialize();