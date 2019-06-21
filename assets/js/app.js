const closeAll = () => {
  $("#androidchannels").slideToggle();
  $("#cloudchannels").slideToggle();
  $("#mobilewebchannels").slideToggle();
  $(".course").slideToggle();
};

closeAll();

$(".viewchannel").click(function(e) {
  e.preventDefault();
  target = e.target.id;
  $(`#${target}channels`).slideToggle("300");
});

$(".viewcourse").click(function(e) {
  e.preventDefault();
  target = e.target.id;
  $(`#${target}courses`).slideToggle("300");
});
