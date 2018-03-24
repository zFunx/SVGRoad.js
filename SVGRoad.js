function SVGRoad(elem) {
  this.pathLength = elem.getTotalLength();
  this.pathLengthPer100 = this.pathLength / 100;
  this.update = function() {
    this.pathLength = elem.getTotalLength();
  };

  this.setStrokeDasharrayInPercent = function() {
    var strokeDasharray = "";
    for (i = 0; i < arguments.length; i++) {
      strokeDasharray += arguments[i] * this.pathLengthPer100 + " ";
    }
    elem.style.strokeDasharray = strokeDasharray;
  };

  this.setStrokeDashoffsetInPercent = function(strokeDashoffset) {
    elem.style.strokeDashoffset = strokeDashoffset * this.pathLengthPer100;
  };
}
