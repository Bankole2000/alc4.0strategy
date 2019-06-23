M.AutoInit();

const closeAll = () => {
  $("#androidchannels").slideToggle();
  $("#cloudchannels").slideToggle();
  $("#mobilewebchannels").slideToggle();
  $(".course").slideToggle();
};

closeAll();

$(".viewchannel").click(function(e) {
  e.preventDefault();
  let target = e.target.id;
  $(`#${target}channels`).slideToggle("300");
});

$(".viewcourse").click(function(e) {
  e.preventDefault();
  let target = e.target.id;
  $(`#${target}courses`).slideToggle("300");
});

$(window).click(function(e) {
  let id, status, message;
  if (e.target.className.includes("form-check-input")) {
    id = e.target.id;
    if (e.target.checked) {
      status = "done";
    } else {
      status = "Not yet Done";
    }
    message = `${id} is ${status}`;
    M.toast({ html: message });
    console.log(`${id} is ${status}`);
  }
});
