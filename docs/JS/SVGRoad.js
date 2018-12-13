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

SVGRoad.animation = function(targetPath) {
  var currentAnimationProps;
  var isAnimationRunning = false;
  this.to = function(to, duration, propertyEvalAndSetter) {
    /*duration is in ms */
    /*propertyEvalAndSetter calculates property values of a path and change as well*/
    currentAnimationProps = {
      to: to,
      duration: duration,
      propertyEvalAndSetter: propertyEvalAndSetter
    };
    return this;// so that you can call play()
  };

  this.play = function() {
    if (!isAnimationRunning) {
      isAnimationRunning = true;
      animate(currentAnimationProps);
    }
  };

  function animate(
    x,
    to = x.to,
    duration = x.duration,
    propertyEvalAndSetter = x.propertyEvalAndSetter
  ) {
    var from = propertyEvalAndSetter.initial(targetPath); // get the initial values
    var timeInterval = 20; //in ms
    var timeLeft = duration;
    var animateUnit = setInterval(function() {
      timeLeft -= timeInterval;
      var percentSpent = (duration - timeLeft) / duration;

      if (timeLeft >= 0) {
        propertyEvalAndSetter.update(targetPath, from, to, percentSpent);
      } else {
        clearInterval(animateUnit);
        propertyEvalAndSetter.update(targetPath, from, to, 1);
        isAnimationRunning = false;
      }
    }, timeInterval);
  }
};

SVGRoad.prototype.animate = function() {
  return new SVGRoad.animation(this);
};

SVGRoad.strokeDashoffsetEvalAndSetter = {
  initial: function(targetPath) {
    return targetPath.getStrokeDashoffsetInPercent();
  },
  update: function(targetPath, from, to, percentPropertyChange) {
    var by = to - from;
    targetPath.setStrokeDashoffsetInPercent(by * percentPropertyChange + from);
  }
};
