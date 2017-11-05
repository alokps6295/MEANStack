var app = angular.module('News',['ui.router']);

app.controller('MainCtrl',['$scope','posts',
function($scope,posts){
  $scope.test = 'Hello world!';
  $scope.posts=posts.posts;
  $scope.addPost=function()
  {
      var obj={
          title:$scope.title,
          upvotes:$scope.upvotes,
          link:$scope.link
    }
    console.log(obj);
      $scope.posts.push(obj);
  }
  $scope.upVotes=function(post)
  {
post.upvotes=post.upvotes+1;
  }
}]);
