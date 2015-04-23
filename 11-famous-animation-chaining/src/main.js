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

var gallop = new Modifier();
gallop.setOrigin([0.5, 0.5]);
gallop.setAlign([0, 0.75]);
gallop.setAlign([0.5, 0.5], {duration: 3000});
gallop.setAlign([1, 0.5], {duration: 2000, curve: Easing.outSine});

mainContext.add(gallop).add(makePony());

