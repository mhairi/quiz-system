(function() {
    'use strict';

    var module = angular.module('QuizSystem', []);

    function Intro() {
        
    }

    function Questions($rootScope) {
        var ctrl = this;

        ctrl.questions = [
        {
            "id": 1,
            "q": "Older workers are hard to train"
        },

        {
            "id": 2,
            "q": "Older workers are too close to retirement"
        },
        {
            "id": 3,
            "q": "Older workers are too cautious"
        },
        {
            "id": 4,
            "q": "Older workers cannot easily adapt to new technology"
        },
        {
            "id": 5,
            "q": "Older workers dislike taking orders from younger workers"
        }
       
         ];

        ctrl.currentQuestionIndex = 0;
        ctrl.question = ctrl.questions[0]; 

        ctrl.ansValues = [
            {val: 1, text: 'Strongly agree'},
            {val: 2, text: 'Agree'},
            {val: 3, text: 'Neither agree nor disagree'},
            {val: 4, text: 'Disagree'},
            {val: 5, text: 'Strongly disagree'}
        ];

        ctrl.answers = {};

        for (var i = 0; i < ctrl.questions.length; i++) {
            ctrl.answers[ctrl.questions[i].id] = 3;
        }


        ctrl.submitData = function () {
            $rootScope.answers = ctrl.answers;

            ctrl.answers = {};
        }

        ctrl.changeQuestion = function (change) {
            ctrl.currentQuestionIndex += change;

            if (ctrl.currentQuestionIndex > ctrl.questions.length - 1) ctrl.currentQuestionIndex = ctrl.questions.length - 1;
            if (ctrl.currentQuestionIndex < 0) ctrl.currentQuestionIndex = 0;

            ctrl.question = ctrl.questions[ctrl.currentQuestionIndex];
        }

        ctrl.isFirst = function () {
            return ctrl.currentQuestionIndex === 0;
        }

        ctrl.isLast = function () {
            return ctrl.currentQuestionIndex === ctrl.questions.length - 1;
        }
    }

    function Results($rootScope) {

        var ctrl = this;
        
        var sum = 0;

        angular.forEach($rootScope.answers, function (val, key) {
            return sum += val;
        });

        ctrl.result = function () {
            if (sum <= 5) {
                return "love older workers";
            }
            else if (sum <= 10) {
                return "think older workers are okay";                    
            }
            else if (sum <= 15) {
                return "are neutral on older workers";                    
            }
            else if (sum <= 20) {
                return "are not keen on older workers";                    
            }
            else  {
                return "strongly dislike older workers";    
            }

        }

    }

    module
        .controller('Intro', Intro)
        .controller('Questions', Questions)
        .controller('Results', Results)

}());