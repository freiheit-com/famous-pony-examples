/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;
var Easing = famous.transitions.Easing;

var mainContext = Engine.createContext();

var pony = new ImageSurface({
	size: [true, true],
	content: 'ponies/firepony.gif',
});

function startGallop(gallop) {
  gallop.setAlign([1, 0.5], {duration: 4000}); 
}

var gallop = new Modifier();
mainContext.add(gallop).add(pony);
startGallop(gallop);
