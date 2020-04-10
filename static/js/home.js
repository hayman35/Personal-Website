$(function() {
  $(".typed").typed({
    strings: [
      "stat hayman.human<br/>" + 
      "><span class='caret'>$</span> skills: c, c++, java, python, android<br/> ^100" +
      "><span class='caret'>$</span> hobbies: soccer, travel, gaming, app development</a><br/> ^300" +
      "><span class='caret'>$</span> degree: computer science<br/>" 
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
