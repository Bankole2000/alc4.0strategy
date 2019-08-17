M.AutoInit();
const check = `<i class="fas fa-check-square"></i>`;
const uncheck = `<i class="fas fa-square"></i>`;
const closeAll = () => {
  $("#androidchannels").slideToggle();
  $("#cloudchannels").slideToggle();
  $("#mobilewebchannels").slideToggle();
  $(".course").slideToggle();
};

const colorChange = (status, el) => {
  if (status === "done") {
    el.classList.add("bg-success", "text-white");
  } else if (status === "Not yet Done") {
    el.classList.remove("bg-success", "text-white");
  }
};

const addDone = id => {
  let done; // INITIALIZE DONE ARRAY
  if (localStorage.getItem("done") === null) {
    // IF LOCAL STORAGE EMPTY
    done = [];
  } else {
    done = JSON.parse(localStorage.getItem("done"));
  }
  done.push(id); // ADD TO DONE ARRAY
  localStorage.setItem("done", JSON.stringify(done)); // STORE IN LOCAL STORAGE
};

const removeDone = id => {
  let done;
  if (localStorage.getItem("done") === null) {
    done = [];
  } else {
    done = JSON.parse(localStorage.getItem("done"));
  }
  done.forEach((item, index) => {
    if (item === id) {
      done.splice(index, 1);
    }
  });
  localStorage.setItem("done", JSON.stringify(done));
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
  let id, status, message, row;
  if (e.target.className.includes("form-check-input")) {
    id = e.target.id;
    row = e.target.parentElement.parentElement.parentElement;
    if (e.target.checked) {
      status = "done";
      // Add to Local Storage
      addDone(id);
    } else {
      status = "Not yet Done";
      // Remove from Local Storage
      removeDone(id);
    }
    colorChange(status, row);
    message = `${id} is ${status}`;
    let icon = status === "done" ? check : uncheck;
    M.toast({ html: `${message} &nbsp; ${icon}` });
    console.log(`${id} is ${status}`);
  }
});

const getDone = () => {
  let done;
  if (localStorage.getItem("done") === null) {
    done = [];
  } else {
    done = JSON.parse(localStorage.getItem("done"));
  }
  done.forEach(item => {
    console.log(item);
    let el = document.getElementById(item);
    if (el != null) {
      console.log(typeof item);
      console.log(el);
      let status = "done";
      let row = el.parentElement.parentElement.parentElement;
      document.getElementById(item).checked = true;
      colorChange(status, row);
    }
  });
};

const getAllDone = () => {
  setTimeout(() => {
    getDone();
  }, 3000);
};

document.addEventListener("DOMContentLoaded", getAllDone);
