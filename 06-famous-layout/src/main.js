/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Surface = famous.core.Surface;
var FlexibleLayout = famous.views.FlexibleLayout;

var mainContext = Engine.createContext();

var ratios = [200, 100, 50, 25, 12, 6, 3, 2, 1];

var layout = new FlexibleLayout({
	ratios: ratios
});

var surfaces = [];
for(var i=0;i<ratios.length; i++) {
   surfaces.push(new Surface({
      size: [undefined, undefined],
      properties: {
	  backgroundColor: 'RGBA(255, 192, 203,' + (1/(i+1)) + ')',
	  borderRight: '1px solid'
      }
   }));
}

layout.sequenceFrom(surfaces);
mainContext.add(layout);
