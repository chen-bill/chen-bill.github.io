'use-strict';
(function(){
    angular.module("angularGame", [])
    .controller("gameController", function($scope){
        console.log('working');

        $scope.allPersonalityTypes = [
            {
                'name': 'Academist',
                'hoursRequired': {
                    'sleep': 2,
                    'academic': 3,
                    'happy': 3,
                    'social': 3
                },
                'styling' : {
                    'sleep': {
                        'image': '',
                        'color': ''
                    },
                    'academic': {
                        'image': '',
                        'color': ''
                    },
                    'happy': {
                        'image': '',
                        'color': ''
                    },
                    'social': {
                        'image': '',
                        'color': ''
                    }
                }
            }
        ];
        
        $scope.current = {
            'energy': 12,
            'statMarker': {
                'sleep': 0,
                'academic': 0,
                'happy': 0,
                'social': 0
            },
            'personalityType': {},
        };

        //html funcitons
        $scope.selectPersonality = function(personality) {
            $scope.current.personalityType = personality;
            console.log(personality);
        };

        $scope.getNumber = function(num) {
            console.log(num);
            return new Array(num);   
        };
        
        $scope.debug = function(){
            console.log($scope.current);
        };

        $scope.clickStatButton = function(stat){
            console.log(stat + ' pressed');
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
    });
})();
