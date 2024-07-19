window.hjSiteSettings = window.hjSiteSettings || {"site_id":3762137,"rec_value":0.04,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console_consent":true,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_all_on_specific_pages":[],"suppress_text":false,"suppress_location":false,"user_attributes_enabled":false,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"abtasty":{"tag_recordings":false},"kissmetrics":{"send_user_id":false},"mixpanel":{"send_events":false},"unbounce":{"tag_recordings":false},"hubspot":{"enabled":false,"send_recordings":false,"send_surveys":false}},"features":["ask.popover_redesign","survey.image_question","client_script.compression.pc","survey.screenshots","survey.type_button","error_reporting","settings.billing_v2","feedback.embeddable_widget","survey.embeddable_widget","feedback.widgetV2"],"tracking_code_verified":true};

!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}var n,i=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.send=e,this.batchSize=r,this.flushInterval=n,this.buffer=[],this.flushTimer=null}var r,n;return r=t,(n=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(t){var e=this;this.buffer.push(t),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){e.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}var a,s,c=function(){try{return"performance"in window&&"now"in window.performance}catch(t){return!1}},u={version:6,metricsUrl:(null===(n=window._hjSettings)||void 0===n?void 0:n.metricsUrl)||"https://metrics.hotjar.io",sampling:{metrics:.1,fieldMetrics:.01,debug:.5,universalDebug:.05*.1},browser:{hasPerformance:!1,shouldLogMetrics:!1,inLab:!1},buffer:{bufferSize:40,flushInterval:3e3}},l={isDebugEnabled:!1,isMetricsEnabled:!1,isFieldMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},d=function(t,e,r){var n;l.loggedMetrics[t]=o(o({},l.loggedMetrics[t]),{},((n={})[e]=r||{},n))},f=function(t){if(!t)return"value";var e=Object.keys(t)[0];return e&&t[e]||"value"},h=function(t){var e,r=null!==(e=t.tag)&&void 0!==e?e:void 0;return l.isDebugEnabled?o(o(o({},r),t.extraTags),l.genericTags):r},g=function(t,e){if(!a)return!1;var r=l.isMetricsEnabled||l.isDebugEnabled;return"lab"===t&&(r=u.browser.inLab),"field"===t&&(r=l.isFieldMetricsEnabled),e?r&&e.flush:r},b=function(t){var e=!1,r="v=".concat(u.version),n="".concat(u.metricsUrl,"?").concat(r,"&site_id=").concat(window.hjSiteSettings.site_id)+(l.isDebugEnabled?"&debug=true":""),i=JSON.stringify(t);if("sendBeacon"in navigator)try{e=navigator.sendBeacon.bind(navigator)(n,i)}catch(t){}if(!1===e)try{var o=new XMLHttpRequest;o.open("POST",n),o.timeout=1e4,o.send(i)}catch(t){}u.browser.shouldLogMetrics&&console.debug("New Metrics: ",t)},v={getConfig:function(t){return u[t]},getState:function(t){return l[t]},start:function(){try{u.browser={hasPerformance:c(),shouldLogMetrics:/hjMetrics=1/.test(location.search),inLab:/hjLab=true/.test(location.search)};var t=v.time(),e=window.hjSiteSettings||{},r=e.features,n=e.site_id,o=new Set(r),s=u.sampling;return l.genericTags={site_id:n},l.isDebugEnabled=Math.random()<=s.universalDebug||o.has("client_script.metrics.debug")&&Math.random()<=s.debug,l.isMetricsEnabled=Math.random()<=s.metrics,l.isFieldMetricsEnabled=l.isMetricsEnabled&&Math.random()<=s.fieldMetrics,a=new i(b,u.buffer.bufferSize,u.buffer.flushInterval),t}catch(t){console.debug("Error in metrics.start",{error:t})}},reset:function(){l.loggedMetrics={}},stop:function(){l.isDebugEnabled=!1,l.isMetricsEnabled=!1,l.genericTags={}},count:function(t,e){var r=e.incr,n=e.tag,i=e.extraTags,s=e.type;try{var c,u=f(n),d=l.loggedMetrics[t],b=0;if(r?(b=(d&&d[u]||0)+(r.value||1),l.loggedMetrics[t]=o(o({},d),{},((c={})[u]=null!=r&&r.flush?0:b,c))):b=1,g(s,r)){var v={name:t,type:"count",value:b,tags:h({tag:n,extraTags:i})};a.add(v)}}catch(t){}},distr:function(t,e){var r=e.task,n=e.value,i=e.extraTags;g()&&a.add({name:t,type:"distribution",value:n,tags:h({tag:{task:r},extraTags:i})})},time:function(){try{if(!u.browser.hasPerformance)return;return performance.now()}catch(t){}},timeEnd:function(t,e){var r=e.tag,n=e.start,i=e.total,o=e.extraTags,s=e.type;try{var c=v.time();if(!i&&!c)return;var u=f(r),l=i||(n&&c?c-n:void 0);if(d(t,u,{}),l&&l>0&&g(s)){var b={name:t,type:"distribution",value:Math.round(l),tags:h({tag:r,extraTags:o})};a.add(b)}return c}catch(e){console.debug("Failed to send timer metric: ",{name:t,tag:r,error:e})}},timeIncr:function(t,e){var r,n,i,o,a=e.tag,s=e.start,c=e.flush,u=e.extraTags,h=e.type,g=hj.metrics.time(),b=s&&g?g-s:void 0,m=(r=t,{tagName:n=f(a),start:(o=(i=l.loggedMetrics[r])&&i[n]||{}).start,total:o.total}),w=b?b+(m.total||0):m.total;return d(t,m.tagName,{total:w}),c&&v.timeEnd(t,{tag:a,total:w,extraTags:u,type:h}),w},timeWatcher:function(){var t,e=0,r=!1,n=function(){var r,n=v.time();return e+=null!==(r=t&&n&&n-t)&&void 0!==r?r:0,t=v.time(),e};return{start:function(){if(!r)return r=!0,t=v.time()},incr:n,end:function(){var r=n();return e=0,t=void 0,r}}},getErrorMessage:function(t){return t instanceof Error?t.message:"string"==typeof t?t:""}},m=!(!window.CS_CONF||null===(s=window.CS_CONF.voc)||void 0===s||!s.enabled);window.hj=window.hj||function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(e)},window.hj.metrics=v;var w=hj.metrics.start();window.hjBootstrap=window.hjBootstrap||function(t,e,r){var n,i=new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot|facebook","i"),o=(null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||"unknown";if(i.test(o))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",o);var a="http:"===window.location.protocol,s=Boolean(window._hjSettings.preview);if(a&&!s)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(t,e,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var u=window.document,l=u.head||u.getElementsByTagName("head")[0];hj.scriptDomain=t;var d=u.createElement("script");d.async=1,d.src=hj.scriptDomain+e,d.charset="utf-8",l.appendChild(d),c.revision="8502284",window.hjBootstrap=c},window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.c9dc07351ea0d804fefa.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.1db817a3108bf3677001.js"},SURVEY_ISOLATED:{js:"survey-isolated.ad3478587b74efc624dc.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.f79c0c7bb13d8a14bddc.js"},SURVEY_INVITATION:{js:"survey-invitation.c2c4e967aff784353cdf.js"},NOTIFICATION:{js:"notification.86732657079a99e6ce8a.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.8d825d8bb4192c0517a5.js"},SENTRY:{js:"sentry.58c81e3e25532810f6fd.js"},BROWSER_PERF:{js:"browser-perf.8417c6bba72228fa2e29.js"},USER_TEST:{js:"user-test.6b13e219ddaceddb1094.js"}},m?window._uxa.push(["start:hotjar",window.hjSiteSettings]):(window.hjBootstrap("https://script.hotjar.com/","modules.e4b2dc39f985f11fb1e4.js","3762137"),hj.metrics.timeEnd("resource-blocking-time",{tag:{resource:"hotjar-js"},start:w,type:"lab"}))}();