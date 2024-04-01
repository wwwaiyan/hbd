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
  '<img src=" https://media.tumblr.com/78a9d3eae59a2a3ed8531b482bdc5a4f/tumblr_inline_mgzkontwjP1rxsw83.gif"></img> <b><center>Happy Birthday! :) </b><br><br>မွေးနေ့မှာ ပျော်ရွှင်ပါစေ...',
    'Thats Good!',
  'So when are you coming back?',
  'အမြဲ တမ်း ပေါ့ပေါ့ပါးပါး ပျော်ပျော်ရွှင်ရွှင်နေနိုင်ပါစေ',
  'Enjoy your day!',
  'မွေးနေ့မှာ ပျော်ရွှင်ပါစေနော်',
  ':)',
  'HappyBirthday Kadaie lay yayy',
  "Wishing you a day filled with laughter, joy, and all your heart desires. Happy Birthday!",
  "May your special day be as bright and beautiful as you are. Happy Birthday!",
  "Sending you warmest wishes for a birthday that's as wonderful as you are. Enjoy every moment!",
  "Here's to another fabulous year ahead! Happy Birthday!",
  "Happy Birthday! May this year bring you endless happiness, love, and success."
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