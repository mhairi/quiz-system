(function() {
    'use strict';

    var module = angular.module('QuizSystem', []);

    function Questions() {
        var ctrl = this;

        ctrl.questions = [
            {
                "id": 1,
                "q": "This is a question of great importance"
            },
            {
                "id": 2,
                "q": "Quiz system is well designed and proper"
            },
            {
                "id": 3,
                "q": "AngularJS is a spiffy framework"
            },
            {
                "id": 4,
                "q": "Mhairi Makes Quiz Software"
            }
        ];

        ctrl.ansValues = [1,2,3,4,5];

        ctrl.answers = {};


        ctrl.submitData = function () {
            console.log(ctrl.answers);

            ctrl.answers = {};
        }
    }

    module
        .controller('Questions', Questions)

}());
