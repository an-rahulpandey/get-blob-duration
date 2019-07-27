"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=getBlobDuration;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));function getBlobDuration(e){return _getBlobDuration.apply(this,arguments)}function _getBlobDuration(){return(_getBlobDuration=(0,_asyncToGenerator2.default)(_regenerator.default.mark(function e(r){var t,n;return _regenerator.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.createElement("video"),n=new Promise(function(e){return t.addEventListener("loadedmetadata",function(){t.duration===1/0?(t.currentTime=Number.MAX_SAFE_INTEGER,t.ontimeupdate=function(){t.ontimeupdate=null,e(t.duration),t.currentTime=0}):e(t.duration)})}),t.src=window.URL.createObjectURL(r),e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}
//# sourceMappingURL=getBlobDuration.js.map
