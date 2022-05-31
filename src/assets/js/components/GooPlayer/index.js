import GooPlayer from './GooPlayer.js'
import Peeps from './Peeps.js'
import PlyrUI from './PlyrUI.js'

Peeps.init()
PlyrUI.init()

var timeoutDelay =1200;
var safeMode = new URL(window.location.href).searchParams.get("safeMode");
if (safeMode != null && safeMode == "1") {
  timeoutDelay = 2500;
}

setTimeout(function() {
  var Goo = new _GooPlayer["default"]();
  Goo.init();
}, timeoutDelay);
