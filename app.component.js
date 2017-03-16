(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<div class="container-fluid">' +
      '<div class="row-fluid">' +
        '<div class="span3">' +
          '<div class="well sidebar-nav">' +
            '<ul class="nav nav-list">'+
              '<li class="nav-header">Sidebar</li>'+
              '<li class="active"><a href="#">Link</a></li>'+
              '<li><a href="#">Link</a></li>'+
              '<li><a href="#">Link</a></li>' +
              '<li><a href="#">Link</a></li>' +
              '<li class="nav-header">Sidebar</li>'+
              '<li><a href="#">Link</a></li>'+
              
              '<li class="nav-header">Sidebar</li>'+
              '<li><a href="#">Link</a></li>'+
            '</ul>'+
          '</div><!--/.well -->'+
        '</div><!--/span-->'+
        '<div class="span9">'+
          '<div class="hero-unit">'+
            '<h1>Fantasy Olympics!</h1>'+
            '<p></p>'+
            '<p><a href="#" class="btn btn-primary btn-large">Learn more &raquo;</a></p>'+
          '</div>'+
          '<div class="row-fluid">'+
            '<div class="span1">'+
              '<h2>1</h2>' +
              '<p>Player 1</p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>'+
            '</div><!--/span-->'+
            '<div class="span1">' +
              '<h2>2</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>'+
              '<p><a class="btn" href="#">View details &raquo;</a></p>'+
            '</div><!--/span-->'+
            '<div class="span1">'+
              '<h2>3</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span1">'+
              '<h2>4</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span1">'+
              '<h2>5</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span1">'+
              '<h2>6</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span1">'+
              '<h2>7</h2>'+
              '<p>Player 1</p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span1">'+
              '<h2>8</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span1">'+
              '<h2>9</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span1">'+
              '<h2>10</h2>'+
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
          '</div><!--/row-->' +

          '<div class="row-fluid">' +
            '<div class="span4">' +
              '<h2>Heading</h2>' +
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>'+
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span4">' +
              '<h2>Heading</h2>' +
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>'+
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
            '<div class="span4">' +
              '<h2>Heading</h2>' +
              '<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>' +
              '<p><a class="btn" href="#">View details &raquo;</a></p>' +
            '</div><!--/span-->' +
          '</div><!--/row-->' +
        '</div><!--/span-->' +
      '</div><!--/row-->',
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
