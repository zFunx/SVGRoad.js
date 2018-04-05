function SVGRoad(elem) {
  var 
    pathLength = elem.getTotalLength(),
    pathLengthPer100 = pathLength / 100;

  this.update = function() {
    pathLength = elem.getTotalLength();
  };

  this.getPathLength = function() {
    return pathLength;
  };

  this.setStrokeDasharrayInPercent = function() {
    var strokeDasharray = "";
    for (i = 0; i < arguments.length; i++) {
      strokeDasharray += arguments[i] * pathLengthPer100 + " ";
    }
    elem.style.strokeDasharray = strokeDasharray;
  };

  this.setStrokeDashoffsetInPercent = function(strokeDashoffset) {
    elem.style.strokeDashoffset = strokeDashoffset * pathLengthPer100;
  };
}
