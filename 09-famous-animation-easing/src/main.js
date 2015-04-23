/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Surface = famous.core.Surface;
var Easing = famous.transitions.Easing;

var mainContext = Engine.createContext();
var rowAlign = 0;

function makePony() {
    return new ImageSurface({
	size: [true, true],
	content: 'ponies/firepony.gif',
    });
}

function gallopWith(options) {
  var gallop = new Modifier();
  gallop.setAlign([0, rowAlign]);
  gallop.setAlign([0.5, rowAlign], {duration: 3000, curve: options.easing ? Easing[options.easing] : undefined});
  mainContext.add(gallop).add(makePony());

  var textMod = new Modifier();
  textMod.setAlign([0, rowAlign]);
  mainContext.add(textMod).add(new Surface({
	  content: options.easing ? options.easing : "undefined (default)"
  }));

  rowAlign += 0.15;
}

gallopWith({easing: undefined});
gallopWith({easing: "outBounce"});
gallopWith({easing: "inOutCirc"});
gallopWith({easing: "outElastic"});
gallopWith({easing: "outSine"});

