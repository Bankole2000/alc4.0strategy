const closeAll = () => {
  $("#androidcourses").slideToggle();
  $("#cloudcourses").slideToggle();
  $("#mobilewebcourses").slideToggle();
};

closeAll();

$("#viewandchannels").click(function(e) {
  e.preventDefault();
  $("#androidcourses").slideToggle("300");
});

$("#viewcloudchannels").click(function(e) {
  e.preventDefault();
  $("#cloudcourses").slideToggle("300");
});

$("#viewmobilewebchannels").click(function(e) {
  e.preventDefault();
  $("#mobilewebcourses").slideToggle("300");
});
