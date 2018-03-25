# SVGRoad

Javascript library to manipulate SVG Path

## Features

* Set `stroke-dasharray` in %
* Set `stroke-dashoffset` in %

## Setup

```html
<script src="SVGRoad.js"></script>
```

## Initialize the Path

```javascript
var pathElem = document.getElementById("path"); //get the path element

var SVGRoadInstance = new SVGRoad(pathElem);
```

## Set `stroke-dasharray` in %

```javascript
SVGRoadInstance.setStrokeDasharrayInPercent(50);
```

```javascript
SVGRoadInstance.setStrokeDasharrayInPercent(50, 10);
```

```javascript
SVGRoadInstance.setStrokeDasharrayInPercent(50,5,10,5,...);//multiple arguments
```

## Set `stroke-dashoffset` in %

```javascript
SVGRoadInstance.setStrokeDashoffsetInPercent(40);
```
