/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var Surface = famous.core.Surface;

// create the main context
var mainContext = Engine.createContext();


var helloSurface = new Surface({
	content: '<span>Friendship is magic!</span>',
        properties: {
		color: 'blue',
		backgroundColor: 'pink'
	}
});

mainContext.add(helloSurface);
