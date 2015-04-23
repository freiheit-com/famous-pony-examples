/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;

// create the main context
var mainContext = Engine.createContext();

var helloPony = new ImageSurface({
	//size: [140, undefined],
	//size: [140, 126],
	size: [true, true],
	content: 'ponies/pony.gif',
        properties: {
		color: 'blue',
		backgroundColor: 'pink'
	}
});

mainContext.add(helloPony);
