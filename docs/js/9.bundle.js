(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{177:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(41);t.default=function(){return i.a.createElement(a.a,{className:"work-page-container",title:"IBM Watson"},i.a.createElement("h2",null,"Front End Web Developer Intern"),i.a.createElement("h3",null,"Summer 2017"),i.a.createElement("p",null,"With the Advanced Client Technology & Solutions team, I developed a video summarization algorithm, API, and client using Watson Developer Cloud services and offerings."),i.a.createElement("h3",null,"Summer 2016"),i.a.createElement("p",null,"Implemented functionality for user input through speech for the ",i.a.createElement("a",{href:"https://conversation-demo.mybluemix.net/",rel:"noopener noreferrer",target:"_blank"}," Watson Conversation demo app"),"."))}},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=s(a),l=s(n(1)),c=s(n(36));function s(e){return e&&e.__esModule?e:{default:e}}var u={title:/<title>.*<\/title>/gi,desc:/<desc>.*<\/desc>/gi,comment:/<!--.*-->/gi,defs:/<defs>.*<\/defs>/gi,width:/ +width="\d+(\.\d+)?(px)?"/gi,height:/ +height="\d+(\.\d+)?(px)?"/gi,fill:/ +fill="(none|#[0-9a-f]+)"/gi,sketchMSShapeGroup:/ +sketch:type="MSShapeGroup"/gi,sketchMSPage:/ +sketch:type="MSPage"/gi,sketchMSLayerGroup:/ +sketch:type="MSLayerGroup"/gi},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"render",value:function(){var e=this.props,n=e.className,i=e.component,a=e.svg,l=e.fill,s=e.width,f=e.accessibilityLabel,p=e.accessibilityDesc,h=e.classSuffix,v=e.cleanupExceptions,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["className","component","svg","fill","width","accessibilityLabel","accessibilityDesc","classSuffix","cleanupExceptions"]),m=this.props,g=m.cleanup,y=m.height;(!0===g||0===g.length&&v.length>0)&&(g=Object.keys(u)),g=g.filter(function(e){return!(v.indexOf(e)>-1)}),s&&void 0===y&&(y=s),delete d.cleanup,delete d.height;var b,w,x,O=(0,c.default)((b={SVGInline:!0,"SVGInline--cleaned":g.length},x=n,(w=n)in b?Object.defineProperty(b,w,{value:x,enumerable:!0,configurable:!0,writable:!0}):b[w]=x,b)),E=O.split(" ").join(h+" ")+h,k=t.cleanupSvg(a,g).replace(/<svg/,'<svg class="'+E+'"'+(l?' fill="'+l+'"':"")+(s||y?' style="'+(s?"width: "+s+";":"")+(y?"height: "+y+";":"")+'"':"")),S=void 0;if(p){var _=(S=/<svg(.|\n|\r\n)*?>/.exec(k)).index+S[0].length;k=k.substr(0,_)+"<desc>"+p+"</desc>"+k.substr(_)}if(f){var j=(S=S||/<svg(.|\n|\r\n)*?>/.exec(k)).index+S[0].length-1,M="SVGInline-"+t.idCount+++"-title";k=k.substr(0,j)+' role="img" aria-labelledby="'+M+'"'+k.substr(j,1)+'<title id="'+M+'">'+f+"</title>"+k.substr(j+1)}return o.default.createElement(i,r({},d,{className:O,dangerouslySetInnerHTML:{__html:k}}))}}]),t}();f.propTypes={className:l.default.string,classSuffix:l.default.string,component:l.default.oneOfType([l.default.string,l.default.func]),svg:l.default.string.isRequired,fill:l.default.string,cleanup:l.default.oneOfType([l.default.bool,l.default.array]),cleanupExceptions:l.default.array,width:l.default.string,height:l.default.string,accessibilityLabel:l.default.string,accessibilityDesc:l.default.string},f.defaultProps={component:"span",classSuffix:"-svg",cleanup:[],cleanupExceptions:[]},f.idCount=0,f.cleanupSvg=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(u).filter(function(e){return t.indexOf(e)>-1}).reduce(function(e,t){return e.replace(u[t],"")},e).trim()},t.default=f},36:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=i.apply(null,r);o&&e.push(o)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},37:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'},38:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>'},39:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>'},40:function(e,t){e.exports='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/></svg>'},41:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(35),o=n.n(a),l=n(37),c=n.n(l),s=n(38),u=n.n(s),f=n(39),p=n.n(f),h=n(40),v=n.n(h);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=[{icon:c.a,link:"https://www.github.com/sheabelsky",name:"GitHub"},{icon:u.a,link:"https://www.linkedin.com/in/sheabelsky",name:"LinkedIn"},{icon:p.a,link:"mailto:sheabelsky@gmail.com",name:"Mail"},{icon:v.a,link:"https://medium.com/@sheabelsky",name:"Medium"}],x=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,y(t).call(this,e))).state={isActive:!1},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,i.a.Component),n=t,(r=[{key:"handleHover",value:function(){var e=this.state.isActive;this.setState({isActive:!e})}},{key:"render",value:function(){var e=this.props.icon,t=e.icon,n=e.link,r=e.name,a=this.state.isActive;return i.a.createElement("a",{className:"contact-icon",href:n,onMouseEnter:this.handleHover.bind(this),onMouseLeave:this.handleHover.bind(this),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(o.a,{alt:"Icon for ".concat(r),fill:a?"grey":"white",svg:t}))}}])&&m(n.prototype,r),a&&m(n,a),t}();var O=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",null,"© 2018 Shea Hunter Belsky"),i.a.createElement("div",{className:"footer-icons"},w.map(function(e,t){return i.a.createElement(x,{icon:e,key:t})})))};t.a=function(e){var t=e.children,n=e.className,r=e.fluid,a=e.subtitle,o=e.title,l="page".concat(!0===r?" fluid":""," ").concat(n);return i.a.createElement("div",{className:l,id:"page-container"},i.a.createElement("div",{className:"page-cover"},o&&i.a.createElement("div",{className:"page-title"},o),a&&i.a.createElement("div",{className:"page-subtitle"},a)),i.a.createElement("div",{className:"page-content"},t),i.a.createElement(O,null))}}}]);