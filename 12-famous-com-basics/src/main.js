/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var ImageSurface = famous.surfaces.ImageSurface;

// create the main context
var mainContext = Engine.createContext();

var pony = new ImageSurface({
	size: [true, true],
	content: 'ponies/start.gif',
});
var centreMod = new Modifier();
centreMod.setOrigin([0.5, 0.5]);
centreMod.setAlign([0.5, 0.5]);
mainContext.add(centreMod).add(pony);

pony.on("click", function(e) {
    pony.setContent("ponies/transforming.gif");
});

/* Works not as expected in Firefox???
   The engine event is handled before the surface event?
Engine.on("click", function(e) {
   console.log(e);
   alert("whoops, you missed the pony");
});
*/
