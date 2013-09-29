/*jshint camelcase:true, curly:true, eqeqeq:true, immed:true, indent:2, latedef:true, newcap:true, noarg:true, noempty:true, nonew:true, quotmark:single, undef:true, unused:true, strict:true, trailing:true */

(function (global, undefined) {
  'use strict';

  var IE;
  var IEInfo = (/(msie) ([\w.]+)/i).exec(global.navigator.userAgent);

  if (IEInfo) {
    IE = {
      valueOf : function () {
        return parseInt(IEInfo && IEInfo[2], 10) || undefined;
      }
    };
  }

  global.IE = IE;

}(this));