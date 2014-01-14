define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["../static/webapp/templates/dashboard/page.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"large-12\">\n        <ul class=\"inline-list\">\n            <li><a href=\"/#/sketchy\">Sketchy UI Demo</a></li>\n            <li><a href=\"/#/card-api\">Card API example</a></li>\n        </ul>\n    </div>\n</div>\n";
  });

return this["Templates"];

});