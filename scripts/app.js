/**
 * Created by hisp on 1/12/15.
 */

var libyaReportApp = angular.module('libyaReportApp',['ui.bootstrap',
    'ngRoute',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'd2HeaderBar',
    'd2Directives',
    'd2Filters',
    'd2Services',
    'pascalprecht.translate',
    'trackerReportsAppServices',
    'leftbarModule'
]).controller('DropdownCtrl', function ($scope) {
    
    //select period type
    $scope.periodTypeButton = "Select period type";
    $scope.periodTypeActions = [
        "Monthly", "Quarterly", "Six-monthly", "Yearly"
    ];

    $scope.changePeriodTypeText = function (name) {
        $scope.periodTypeButton = name;
        if(name == 'Monthly'){
            $('#month').show();            
            $('#month').attr("disabled", false);
            $('#sm').hide();
            $('#quarter').hide();
        }
        else if(name == 'Quarterly'){
            $('#quarter').show();
            $('#sm').hide();
            $('#month').hide();
        }
        else if(name == 'Six-monthly'){
            $('#sm').show();
            $('#month').hide();
            $('#quarter').hide();
        }
        else{
            $('#sm').hide();
            $('#month').show();
            $('#month').attr("disabled", true);
            $('#quarter').hide();
        }
        
    }

    //select year
    $scope.yearButton = "Select year";
    $scope.yearActions = [
        "2018", "2017", "2016"
    ];

    $scope.changeyearText = function (name) {
        $scope.yearButton = name;
    }

    //select six-monthly
    $scope.smButton = "Select period";
    $scope.smActions = [
        "January-June", "July-December"
    ];

    $scope.changesmText = function (name) {
        $scope.smButton = name;
    }

    //select quarterly
    $scope.quarterButton = "Select quarter";
    $scope.quarterActions = [
        "January-March", "April-June", "June-September","October-December"
    ];

    $scope.changequarterText = function (name) {
        $scope.quarterButton = name;
    }

    //select monthly
    $scope.monthButton = "Select month";
    $scope.monthActions = [
        "January", "February", "March","April","May","June","July","August","september","October","November","December"
    ];

    $scope.changemonthText = function (name) {
        $scope.monthButton = name;
    }
})

.config(function($routeProvider,$translateProvider){
        $routeProvider.when('/', {
            templateUrl:'views/report.html',
            controller: 'ewarnController'
        }).when('/ewarnreport', {
            templateUrl:'views/report.html',
            controller: 'ewarnController'
        }).when('/phcreport', {
            templateUrl:'views/report.html',
            controller: 'phcController'
        }).when('/hospitalreport', {
            templateUrl:'views/report.html',
            controller: 'hospitalController'
        }).when('/medicalcenterreport', {
            templateUrl:'views/report.html',
            controller: 'medicalcenterController'
        }).otherwise({
            redirectTo : '/'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.useLoader('i18nLoader');


});