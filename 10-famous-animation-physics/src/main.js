/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var Easing = famous.transitions.Easing;
var Transitionable = famous.transitions.Transitionable;

var mainContext = Engine.createContext();
var colAlign = 0;

function makePony() {
    return new ImageSurface({
	size: [true, true],
	content: 'ponies/changeling.gif',
    });
}

function fallWith(options) {
  var fall = new Modifier();

  if(options.physics) {
     var physic = famous.transitions[options.physics];
     Transitionable.registerMethod(options.physics, physic); 
  }

  fall.setOrigin([0, 1]);
  fall.setAlign([colAlign, 0]);
  fall.setAlign([colAlign, 0.6], {method: options.physics, period: 3000, dampingRatio: 0.15, velocity: 0 });
  mainContext.add(fall).add(makePony());

  var textMod = new Modifier();
  textMod.setAlign([colAlign, 0]);
  mainContext.add(textMod).add(new Surface({
	  content: options.physics ? options.physics : "undefined (default)" 
  }));

  colAlign += 0.15;
}

fallWith({physics: undefined});
fallWith({physics: "SpringTransition"});
fallWith({physics: "WallTransition"});
fallWith({physics: "SnapTransition"});

