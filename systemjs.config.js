/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        // 'hammerjs': 'node_modules/hammerjs',
        'app': 'app', // 'dist',
        '@angular': 'node_modules/@angular',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        // '@angular/router': 'node_modules/@angular/router',
        // '@angular/http': 'node_modules/@angular/http',
        // '@angular/forms': 'node_modules/@angular/forms',
        'jquery': 'node_modules/jquery/dist/jquery.min.js',
        'semantic': 'vendor/js/semantic.js',
        'rxjs': 'node_modules/rxjs',
        'ng-semantic': 'node_modules/ng-semantic'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        // 'hammerjs': {main: 'hammer.js', defaultExtension: 'js'},
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
        'angular2-in-memory-web-api': {main: 'index.js', defaultExtension: 'js'},
        // 'ng2-material': {main: 'index.js', defaultExtension: 'js'},
        'ng-semantic': {main:'ng-semantic.js',defaultExtension:'js'}
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'forms',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }

    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js'};
    }

    // packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };
    // packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };
    // packages['@angular/http'] = { main: 'index.js', defaultExtension: 'js' };

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);