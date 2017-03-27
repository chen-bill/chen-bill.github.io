'use-strict';
(function(){
    angular.module("angularGame", [])
    .controller("gameController", function($scope){
        console.log('working');

        $scope.allPersonalityTypes = [
            {
                'name': 'Academist',
                'hoursRequired': {
                    'sleep': 4,
                    'academic': 3,
                    'happy': 3,
                    'social': 5
                },
            },
            {
                'name': 'Social Butterfly',
                'hoursRequired': {
                    'sleep': 3,
                    'academic': 4,
                    'happy': 5,
                    'social': 3
                },
            },
            {
                'name': 'Happy Go Lucky',
                'hoursRequired': {
                    'sleep': 4,
                    'academic': 5,
                    'happy': 3,
                    'social': 3
                },
            },
            {
                'name': 'Hibernator',
                'hoursRequired': {
                    'sleep': 3,
                    'academic': 4,
                    'happy': 5,
                    'social': 4
                },
            },
        ];
        
        $scope.current = {
            'energy': 12,
            'statMarker': {
                'sleep': 0,
                'academic': 0,
                'happy': 0,
                'social': 0
            },
            'doubleCost':{
                'sleep': false,
                'academic': false,
                'happy': false,
                'social': false
            },
            'personalityType': {},
        };

        //html funcitons
        $scope.selectPersonality = function(personality) {
            $scope.current.personalityType = personality;
        };

        $scope.getNumber = function(num) {
            return new Array(num);   
        };
        
        $scope.debug = function(){
        };

        $scope.clickStatButton = function(stat){
            if($scope.current.personalityType.hoursRequired[stat] <= $scope.current.energy){
                $scope.current.statMarker[stat] += 1;
                $scope.current.energy -= $scope.current.personalityType.hoursRequired[stat];
            }
        };

        $scope.resetStats = function(){
            for (var key in $scope.current.statMarker){
                $scope.current.statMarker[key] = 0;
            }
            $scope.current.energy = 12;
        };

        $scope.getStatImage = function(stat){
            if (stat == 'sleep'){
                return '../media/game/sleep.png';
            } else if (stat == 'academic'){
                return '../media/game/studying.png';
            } else if (stat == 'happy'){
                return '../media/game/happiness.png';
            } else {
                return '../media/game/social.png';
            }
        }

        $scope.getStatColor = function(stat){
            if (stat == 'sleep'){
                return {'background-color':'#6fa8dc'};
            } else if (stat == 'academic'){
                return {'background-color':'#ffd966'};
            } else if (stat == 'happy'){
                return {'background-color':'#93c47d'};
            } else {
                return {'background-color':'#e06666'};
            }
        }

        $scope.getStatGainStyle = function(stat){
            styleObject = {};
            if (stat == 'sleep'){
                styleObject['background-color'] = '#6fa8dc'
            } else if (stat == 'academic'){
                styleObject['background-color'] = '#ffd966'
            } else if (stat == 'happy'){
                styleObject['background-color'] = '#93c47d'
            } else {
                styleObject['background-color'] = '#e06666'
            }
            if($scope.current.personalityType.hoursRequired[stat]>$scope.current.energy){
                styleObject['opacity'] = 0.5;
            }
            return styleObject;
        }

        $scope.getDoubleButtonColor = function(stat){
            if($scope.current.doubleCost[stat]){
                return {'background-color':'#585858'};
            } else {
                return {};
            }
        }

        $scope.clickDoubleCostButton = function(stat){
            if ($scope.current.doubleCost[stat]){
                $scope.current.doubleCost[stat] = false;
                $scope.current.personalityType.hoursRequired[stat] /= 2;
            } else {
                $scope.current.doubleCost[stat] = true;
                $scope.current.personalityType.hoursRequired[stat] *= 2;
            }
        }
    });
})();
