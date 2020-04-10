$(function() {
  $(".typed").typed({
    strings: [
      "stat hayman.human<br/>" + 
      "><span class='caret'>$</span> skills: C, C++, Java, Python, Android<br/> ^100" +
      "><span class='caret'>$</span> hobbies: Soccer,Travel, Gaming, App Devlopment</a><br/> ^300" +
      "><span class='caret'>$</span> alias: crearo <br/>" +
      "><span class='caret'>$</span> highlight: <br/>"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
