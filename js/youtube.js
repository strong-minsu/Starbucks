// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
// onYouTubeIframeAPIReady <- 바꾸면 안됨!!
function onYouTubeIframeAPIReady() {
  // <div id="palyer"></div> -> #붙이면 안됨!!
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID
    },
    events: {
      // 영상이 준비가 되면 익명함수 실행 -> 영상을 음소거 함
      onReady: function (event) {
        event.target.mute() // 음소거
      }
    }
  });
}