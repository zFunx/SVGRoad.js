function SVGRoad(elem) {
  var pathLength = elem.getTotalLength(),
    pathLengthPer100 = pathLength / 100,
    strokeDashoffsetInPercent = 0;

  this.update = function() {
    pathLength = elem.getTotalLength();
    pathLengthPer100 = pathLength / 100;
    strokeDashoffsetInPercent =
      parseFloat(elem.style.strokeDashoffset) / pathLengthPer100;
  };

  this.getPathLength = function() {
    return pathLength;
  };

  this.getStrokeDashoffsetInPercent = function() {
    return strokeDashoffsetInPercent;
  };

  this.getStrokeDashoffsetInPx = function() {
    return strokeDashoffsetInPercent * pathLengthPer100;
  };

  this.setStrokeDasharrayInPercent = function() {
    var strokeDasharray = "";
    for (i = 0; i < arguments.length; i++) {
      strokeDasharray += arguments[i] * pathLengthPer100 + " ";
    }
    elem.style.strokeDasharray = strokeDasharray;
  };

  this.setStrokeDashoffsetInPercent = function(x) {
    elem.style.strokeDashoffset = x * pathLengthPer100;
    strokeDashoffsetInPercent = x;
  };
}
