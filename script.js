var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

var Fake = [
  '<img src=" https://media.tumblr.com/78a9d3eae59a2a3ed8531b482bdc5a4f/tumblr_inline_mgzkontwjP1rxsw83.gif"></img> <b><center>Happy Birthday! :) </b><br><br>So What are your plans for today?',
    'Thats Good!',
  'So when are you coming back?',
  'okay,Damn sometime talking to you is just like sending letters! You reply so late :P',
  'Fine :P Enjoy your day!',
  'Bye',
  ':)'
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://media.licdn.com/dms/image/D5603AQGgrYgocqUjgg/profile-displayphoto-shrink_200_200/0/1708325504886?e=1717632000&v=beta&t=o4Rd1MmwaoU_Q9hJ5mX2zBdn4H-hvbqxn9a0Tii7e6Y" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://media.licdn.com/dms/image/D5603AQGgrYgocqUjgg/profile-displayphoto-shrink_200_200/0/1708325504886?e=1717632000&v=beta&t=o4Rd1MmwaoU_Q9hJ5mX2zBdn4H-hvbqxn9a0Tii7e6Y" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}