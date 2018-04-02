
//Initialize the App
var app = angular.module("dataParser",[]);


/*
Controller to determine what time of data was put into the text field
*/
app.controller("dataController", ['$scope', '$http', function($scope, $http){
    $scope.newData = function(){
    var dataInput = $scope.dataInput;
    console.log(dataInput);
        if (dataInput[0] === '<') {
            //CHECK TO MAKE SURE ITS VALID XML
            if (dataInput[1] === '?') {
                //Send the contents to node to parse XML
                $http.post('/parseXML', dataInput).then(function(results){
                    /*
                    TODO: Handle results.
                    */
                });
            }
        } else if (dataInput[0] === '{'){
            //Send contents to node to parse JSON
        } else {
            //Send contents to node to parse CSV

        }
        
    };
}]);