// external js: masonry.pkgd.js, imagesloaded.pkgd.js

var grid = document.querySelector('.grid');
var msnry;
var columns = 3;
var setColumns = function() {
	columns = window.outerWidth > 640 ? 3 : window.outerWidth > 320 ? 2 : 1;
	console.log(columns);
};
setColumns();
window.onresize(setColumns);
imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    //columnWidth: '.grid-sizer',
    columnWidth: function(containerWidth) { return containerWidth/columns; },
    percentPosition: true,
    gutter: 10
  });
});