import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);

      player.on('timeupdate', throttle(function (e) {
        localStorage.setItem("videoplayer-current-time",JSON.stringify({time: e.seconds }));
      }, 1000));

player.getVideoTitle().then(function (title) {
    localStorage.setItem("videoplayer-current-name", `"name":${title}`)
      });

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")).time).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

