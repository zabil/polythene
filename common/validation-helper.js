"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(opts){var elProp=opts.element||"el",invalidProp=opts.invalid||"invalid",fieldStates=[],submit=function(e,onValidated){e.preventDefault();var firstInvalidIndex=getInvalidIndex();void 0!==firstInvalidIndex?fieldStates[firstInvalidIndex][elProp]&&fieldStates[firstInvalidIndex][elProp].focus():onValidated(e)},getIndex=function(el){for(var i=0;i<fieldStates.length;i++)if(fieldStates[i][elProp]===el)return i},getInvalidIndex=function(){for(var i=0;i<fieldStates.length;i++)if(fieldStates[i][invalidProp])return i},update=function(state){var index=getIndex(state[elProp]);void 0===index?fieldStates.push(state):fieldStates[index]=state};return{submit:submit,update:update}},module.exports=exports["default"];
//# sourceMappingURL=validation-helper.js.map