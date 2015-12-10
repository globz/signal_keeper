//S I G N A L _ K E E P E R

/*This small EXPERIMENTAL tool when enabled will try to keep a VPN connection alive by
  downloading a small image ~5kb this should help avoid random connection lost

  Init: var signal_keeper = setInterval(signal, 10000);

  Features:
  - internal tick auto increment on each run (10sec) when tick reach 200 Signal Keeper will auto shutdown
    (Max bandwidth usage set @ 1080 KB with RUNTIME of ~33 minutes)

*/

//Provide URL and image size in bytes
var imageAddr = "http://your_ip/lib/images/con_test.jpg";
var downloadSize = 5316; //bytes
var tick = 0; //Internal tick

function signal() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
		tick++; //increase on each tick
		if (tick > 199) {
			clearInterval(signal_keeper);
			tick = 0; //Reset internal tick
			console.log("Signal Keeper is now shutting down : tick quota has been reached");
		}
    }

    download.onerror = function (err, msg) {
        console.log("unable to activate Signal Keeper...");
    }

    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);

		console.log('Signal Keeper is now active : '+speedMbps+' Mpbs');
    }
}
