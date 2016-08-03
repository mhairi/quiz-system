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
                "q": "Older workers do not want to train"
            },
            {
                "id": 3,
                "q": "Older workers are not economical to train"
            },
            {
                "id": 4,
                "q": "Older workers do not get good training outcomes"
            },
            {
                "id": 5,
                "q": "Older workers are too close to retirement"
            },
            {
                "id": 6,
                "q": "Older workers are too cautious"
            },
            {
                "id": 7,
                "q": "Older workers are skilled"
            },
            {
                "id": 8,
                "q": "Older workers are productive employees"
            },
            {
                "id": 9,
                "q": "Older workers cannot easily adapt to new technology"
            },
            {
                "id": 10,
                "q": "Older workers are quick to absorb new knowledge"
            },
            {
                "id": 11,
                "q": "Older workers are disruptive in team meetings"
            },
            {
                "id": 12,
                "q": "Older workers dislike taking orders from younger workers"
            },
            {
                "id": 13,
                "q": "Older workers have poor physical health and stamina"
            },
            {
                "id": 14,
                "q": "Older workers do not cope well with stress"
            },
            {
                "id": 15,
                "q": "Older workers are more likely to require time away from work"
            },
            {
                "id": 16,
                "q": "Older workers are more expensive to employ than younger workers"
            },
            {
                "id": 17,
                "q": "Older workers can't do the tasks my business needs"
            },
            {
                "id": 18,
                "q": "Older workers do not fit with my customers"
            },
            {
                "id": 19,
                "q": "Older workers have valuable experience"
            },
            {
                "id": 20,
                "q": "Older workers are not flexible"
            },
            {
                "id": 21,
                "q": "Older workers mean I would need to make adaptions to the workplace"
            },
            {
                "id": 22,
                "q": "I prefer younger workers"
            },
            {
                "id": 23,
                "q": "In a redundancy situation it is preferable to retain older workers"
            },
            {
                "id": 24,
                "q": "Older workers are more reliable than younger workers"
            },
            {
                "id": 25,
                "q": "The pace of change at work makes it difficult for older workers to cope more so than younger workers"
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

        ctrl.answers = [];


        ctrl.submitData = function () {
            $rootScope.answers = ctrl.answers;

            ctrl.answers = [];
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
        
        var sum = $rootScope.answers.reduce(function (acc, val) {
            return acc + val;
        }) - 25;

        ctrl.result = function () {
            if (sum <= 20) {
                return "love older workers";
            }
            else if (sum <= 40) {
                return "think older workers are okay";                    
            }
            else if (sum <= 60) {
                return "are neutral on older workers";                    
            }
            else if (sum <= 80) {
                return "are not keen on older workers";                    
            }
            else  {
                return "hate older workers";    
            }

        }

    }

    module
        .controller('Intro', Intro)
        .controller('Questions', Questions)
        .controller('Results', Results)

}());
