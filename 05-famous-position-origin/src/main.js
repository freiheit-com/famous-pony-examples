/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;

var mainContext = Engine.createContext();

function makePony(colour) {
   return new ImageSurface({
	size: [true, true],
	content: 'ponies/pony.gif',
        properties: {
	     backgroundColor: colour
	}
   });
}

function addPonyWith(options) {
    var translateMod = new Modifier({
	origin: options.origin,
	transform: Transform.translate(150, 200, 0)
    });
    
    options.to.add(translateMod).add(makePony(options.colour));
}

addPonyWith({origin: [0,0], to: mainContext, colour: 'black'});
addPonyWith({origin: [0,1], to: mainContext, colour: 'pink'});
addPonyWith({origin: [1,0], to: mainContext, colour: 'yellow'});
addPonyWith({origin: [1,1], to: mainContext, colour: 'green'});
addPonyWith({origin: [0.5,0.5], to: mainContext, colour: 'white'});

