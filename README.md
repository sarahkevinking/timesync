# flowhamster:timesync
A lightweight plugin to synchronize time on the server and client.

# Installation
```
meteor add flowhamster:timesync
```

# How it works
We define a pseudo-collection on the client `timesync`.
The server defines an anonymous publication on `timesync` that triggers the
`changed` observable an a 10 millisecond interval. When the publication stops the
observable is cleared.

# API
`Timesync.time()` returns the last received server time.
