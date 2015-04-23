/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var FlexibleLayout = famous.views.FlexibleLayout;

var mainContext = Engine.createContext();

function newColouredSurface(colour) {
   return new Surface({
      size: [undefined, undefined],
      properties: {
	  backgroundColor: 'RGBA('+ colour[0] + ',' + colour[1] + ',' + colour[2] + ',' + (1/(i+1)) + ')',
	  borderRight: '1px solid',
	  borderBottom: '1px solid'
      }
   });
}

var ratios = [200, 100, 50, 25, 12, 6, 3, 2, 1];

var nestedLayout = new FlexibleLayout({
	direction: 1, /*means Y*/
	ratios: ratios
});
var nestedSurfaces = [];
for(var i=0;i<ratios.length; i++) {
   nestedSurfaces.push(newColouredSurface([0,255,0]));
}
nestedLayout.sequenceFrom(nestedSurfaces);



var layout = new FlexibleLayout({
	ratios: ratios
});
var surfaces = [];
surfaces.push(nestedLayout);
for(var i=1;i<ratios.length; i++) {
   surfaces.push(newColouredSurface([255, 192, 203]));
}

layout.sequenceFrom(surfaces);
mainContext.add(layout);
