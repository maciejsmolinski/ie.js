/*jshint camelcase:true, curly:true, eqeqeq:true, immed:true, indent:2, latedef:true, newcap:true, noarg:true, noempty:true, nonew:true, quotmark:single, undef:true, unused:true, strict:true, trailing:true */

(function (global, undefined) {
  'use strict';

  global.IE = (function () {
    var IEInfo = (/(msie) ([\w.]+)/i).exec(global.navigator.userAgent);

    if (IEInfo) {
      return {
        valueOf : function () {
          return parseInt(IEInfo && IEInfo[2], 10) || undefined;
        }
      };
    } else {
      return undefined;
    }
  }());

}(this));