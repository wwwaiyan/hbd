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
  'အမြဲ တမ်း ပေါ့ပေါ့ပါးပါး ပျော်ပျော်ရွှင်ရွှင်နေနိုင်ပါစေ',
  'Enjoy your day!',
  'မွေးနေ့မှာ ပျော်ရွှင်ပါစေနော်',
  ':)',
  'HappyBirthday Kadaie lay yayy',
  "Wishing you a day filled with laughter, joy, and all your heart desires. Happy Birthday!",
  "May your special day be as bright and beautiful as you are. Happy Birthday!",
  "Sending you warmest wishes for a birthday that's as wonderful as you are. Enjoy every moment!",
  "Here's to another fabulous year ahead! Happy Birthday!",
  "Happy Birthday! May this year bring you endless happiness, love, and success.",
  "Happy Birthday! Cheers to another year of making unforgettable memories.",
  "Wishing you a day filled with love, laughter, and all your favorite things. Happy Birthday!",
  "May your birthday be the start of a year filled with good luck, good health, and much happiness.",
  "Sending you my best wishes for a birthday that's as special as you are. Enjoy every moment!",
  "Happy Birthday! May your day be as wonderful and unique as you are.",
  "On your special day, I hope you're surrounded by all the people and things you love. Happy Birthday!",
  "Wishing you a day that's just as amazing as you are! Happy Birthday!",
  "Another year older, another year wiser. Happy Birthday!",
  "Here's to celebrating you and all the wonderful things you bring to the world. Happy Birthday!",
  "Sending you smiles, hugs, and lots of birthday cheer. Have a fantastic day!"
]

function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="./img/1.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="./img/2.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}