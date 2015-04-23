/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;

// create the main context
var mainContext = Engine.createContext();

var helloPony = new ImageSurface({
	size: [true, true],
	content: 'ponies/pony.gif',
        properties: {
		color: 'blue',
		backgroundColor: 'pink'
	}
});

//new
var translateMod = new Modifier({
	transform: Transform.translate(150, 200, 0)
});
var rotateMod = new Modifier({
	transform: Transform.rotate(0.5,0.5,0.5) //rad
});
//new

mainContext.add(translateMod).add(rotateMod).add(helloPony);
//mainContext.add(rotateMod).add(translateMod).add(helloPony);
