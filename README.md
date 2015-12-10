# signal_keeper
//S I G N A L _ K E E P E R

/*This small EXPERIMENTAL tool when enabled will try to keep a VPN connection alive by
  downloading a small image ~5kb this should help avoid random connection lost

  Init: var signal_keeper = setInterval(MeasureConnectionSpeed, 10000);

  Features:
  - internal tick auto increment on each run (10sec) when tick reach 200 Signal Keeper will auto shutdown
    (Max bandwidth usage set @ 1080 KB with RUNTIME of ~33 minutes)

*/
