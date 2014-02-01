define(['handlebars'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["forms/base"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<h4>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <ul class=\"error\">\n                ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </ul>\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"buttons-container\">\n            ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.buttons), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <input class=\"button ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['class']), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.name), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " type=\"button\" value=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.display_text), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = (depth0 && depth0['class'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

function program12(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = (depth0 && depth0.display_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program14(depth0,data) {
  
  
  return "Submit";
  }

  buffer += "<form class=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"messages-container\"></div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.title), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    <div class=\"non-field-error-container\">\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n\n    <div class=\"fieldsets\">\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.form)),stack1 == null || stack1 === false ? stack1 : stack1.buttons), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    <div class=\"additional_content_container\"></div>\n</form>\n";
  return buffer;
  });

this["Templates"]["forms/errors"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n    ";
  return buffer;
  }

  buffer += "<ul class=\"error\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.errors), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Templates"]["forms/fields/button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = (depth0 && depth0['class'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = (depth0 && depth0.display_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program5(depth0,data) {
  
  
  return "Submit";
  }

  buffer += "<input class=\"input-button ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0['class']), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" type=\"button\" name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.display_text), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" />\n";
  return buffer;
  });

this["Templates"]["forms/fields/checkbox_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <div class=\"input-container\">\n        <input class=\"input-checkbox";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n\n        <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/date_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <select class=\"input-select";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                ";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.data), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </select>\n        ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " required";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"input-container\">\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.choices), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/date_time_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  
  return "hidden";
  }

function program7(depth0,data) {
  
  
  return "text";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"input-container\">\n        <input class=\"input-text";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.is_hidden), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/file_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">";
  if (stack2 = helpers.label_text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.label_text); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n\n    <div class=\"input-container\">\n        <input class=\"input-file";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"file\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/hidden_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " required";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.initial)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  return buffer;
  }

  buffer += "<input class=\"input-hidden";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"hidden\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.initial), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " />\n";
  return buffer;
  });

this["Templates"]["forms/fields/image_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"input-container\">\n        <input class=\"input-image";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"image\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/password_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  
  return "hidden";
  }

function program7(depth0,data) {
  
  
  return "password";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "maxlength="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.max_length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"input-container\">\n        <input class=\"input-password";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.is_hidden), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.max_length), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " />\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/radio_select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " required ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <label class=\"label-inline\" for=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "|"
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <input class=\"input-radio";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"radio\" id=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "|"
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n\n            <p class=\"label-text\">"
    + escapeExpression(((stack1 = (depth0 && depth0.display)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n        </label>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " required";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n            <ul class=\"error\">\n                ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </ul>\n        ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n";
  return buffer;
  }

  buffer += "<div class=\"input-container";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    ";
  stack2 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.choices), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    <div class=\"error-container\">\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</div>\n\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  });

this["Templates"]["forms/fields/select"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.display)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"input-container\">\n        <select class=\"input-select";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.choices), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </select>\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/select_multiple"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.value)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.display)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n            ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"input-container\">\n        <select class=\"input-select";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" multiple size="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.choices)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ">\n            ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.choices), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </select>\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/text_input"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  
  return "hidden";
  }

function program7(depth0,data) {
  
  
  return "text";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "maxlength="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.max_length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    <div class=\"input-container\">\n        <input class=\"input-text";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" type=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.is_hidden), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.max_length), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " />\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.help_text), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/fields/textarea"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "required ";
  }

function program3(depth0,data) {
  
  
  return " required";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <ul class=\"error\">\n                    ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                </ul>\n            ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n                    ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p class=\"help\">"
    + escapeExpression(((stack1 = (depth0 && depth0.help_text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    ";
  return buffer;
  }

  buffer += "<label class=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.widget)),stack1 == null || stack1 === false ? stack1 : stack1.input_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" for=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n    <p class=\"label-text\">";
  if (stack2 = helpers.label_text) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.label_text); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n\n    <div class=\"input-container\">\n        <textarea class=\"input-textarea";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.required), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></textarea>\n\n        <div class=\"error-container\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.field)),stack1 == null || stack1 === false ? stack1 : stack1.errors), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </div>\n    </div>\n\n    ";
  stack2 = helpers['if'].call(depth0, (depth0 && depth0.help_text), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</label>\n";
  return buffer;
  });

this["Templates"]["forms/messages"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n        <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n    ";
  return buffer;
  }

  buffer += "<ul class=\"info\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.messages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["Templates"]["forms/model_instance"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h3><a href=\"#/apps/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model_data)),stack1 == null || stack1 === false ? stack1 : stack1.app)),stack1 == null || stack1 === false ? stack1 : stack1.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model_data)),stack1 == null || stack1 === false ? stack1 : stack1.app)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> - "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.model_data)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n<a href=\"#/apps/"
    + escapeExpression(((stack1 = (depth0 && depth0.app_label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/models/"
    + escapeExpression(((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/instances/add/\" class=\"add_model\">Add "
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n<div class=\"model_instance_form\"></div>\n";
  return buffer;
  });

return this["Templates"];

});