/*

    Write a constructor function to represent a Rectangle, which can calculate its area and perimeter.
    Write a Point function which takes x and y coordinates as arguments to define it. It should also be able to evaluate the distance from another point. We may make use of this exercise in a later assignment problem when dealing with the Document Object Model.
    Write javascript code so that we can check if a string object is a palindrome. E.g. "xyx".isPalindrome() should return true.


*/

function Rectangle(w,h){
  this.area = function(){
    return w * h;
  };
  this.perimeter = function(){
    return Math.PI * w * h;
  };

  JSON.stringify(this);
}

function Point(x,y){
  this.x = x;
  this.y = y;
  this.distanceToPoint = function(point){
    return Math.sqrt( Math.pow((point.x - this.x),2) + Math.pow((point.y - this.y),2) );
  }
}

String.prototype.isPalindrome = function (){
  //var stringArray = new Array();
  var index = this.length-1;
  for (let i = 0; i < (this.length/2)+1; i++) {
    if(this[index]!=this[i])
      return false;
    index--;
  }
  return true;
};
