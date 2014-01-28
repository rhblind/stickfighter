define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["cards/page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"large-12\">\n    <h3 class=\"right\">Card API Example</h3>\n    <p>\n        Check your javascript console for output!\n    </p>\n</div>\n";
  });

this["Templates"]["dashboard/page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"large-12\">\n    <ul class=\"inline-list\">\n        <li><a href=\"/#/sketchy\">Sketchy UI Demo</a></li>\n        <li><a href=\"/#/card-api\">Card API example</a></li>\n    </ul>\n</div>\n";
  });

this["Templates"]["sketchy/page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"large-12\">\n    <h3 class=\"right\">Sketchy UI demo page</h3>\n</div>\n<div class=\"large-6\">\n    <div class=\"large-4\">\n        <hr/>\n        <ul class=\"sketchy square\">\n            <li>This is a list</li>\n            <li>which shows off</li>\n            <li>our sketchy square</li>\n            <li>bullets.</li>\n        </ul>\n    </div>\n    <div class=\"large-4\">\n        <hr/>\n        <ul class=\"sketchy disc\">\n            <li>We also have</li>\n            <li>the sketchy disc</li>\n            <li>bullets.</li>\n            <li>Pretty nifty, huh?</li>\n        </ul>\n    </div>\n    <div class=\"large-4\">\n        <hr/>\n        <ul class=\"sketchy dash\">\n            <li>Last, but not least</li>\n            <li>we have the sketchy dash</li>\n            <li>bullets style.</li>\n        </ul>\n    </div>\n</div>\n<div class=\"large-6 sketchy\">\n    <button class=\"sketchy button\">hurra</button>\n</div>\n";
  });

this["Templates"]["staff-stuff/card-database-compositeview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"sketchy large-12 columns\">\n    <ul class=\"sketchy square\"></ul>\n</div>\n";
  });

this["Templates"]["staff-stuff/card-database-itemview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n";
  return buffer;
  });

this["Templates"]["staff-stuff/card-database-layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section>\n    <h1>Test template!</h1>\n    <section id=\"menu\"></section>\n    <section id=\"preview\"></section>\n</section>\n";
  });

return this["Templates"];

});