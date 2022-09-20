import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const iframe_2=document.querySelector("iframe")
const player = new Vimeo.Player(iframe);
const player_2 = new Vimeo.Player(iframe_2);

player.on('timeupdate', throttle(function (e) {
        localStorage.setItem("videoplayer-current-time",JSON.stringify({time: e.seconds }));}, 1000));

player.getVideoTitle().then(function (title) { localStorage.setItem("videoplayer-current-name", `"name":${title}`) });
    
player_2.on('timeupdate', throttle(function (e) {
        localStorage.setItem("videoplayer-current-time_2",JSON.stringify({time: e.seconds }));}, 1000));

    player_2.getVideoTitle().then(function (title) {localStorage.setItem("videoplayer-current-name_2", `"name_2":${title}`)});

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

player_2.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time_2")).time).then(function (seconds) {
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

