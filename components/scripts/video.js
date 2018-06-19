window._wq = window._wq || [];

// target our video by the first 3 characters of the hashed ID
_wq.push({ id: "cecdwaq3dz", onReady: function(video) {
  // at 10 seconds, do something amazing
  video.bind('secondchange', function(s) {
    if (s >= 133) {
      $("#packages").fadeIn();
    }
  });
}});

