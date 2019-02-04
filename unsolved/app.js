let command = "";

const print = function() {
  let htmlStr = "";
  for (let i = 0; i < employeeList.length; i++) {
    htmlStr += `<div class="entry"><p> ${employeeList[i].name}</p><p> ${
      employeeList[i].officeNum
    }</p><p> ${employeeList[i].phoneNum}</p></div>`;
  }
  render(htmlStr);
};

const add = function() {
  const userName = $("#name").val();
  const officeNum = $("#office").val();
  const phoneNum = $("#phone").val();
  employeeList.push({
    name: userName,
    officeNum: officeNum,
    phoneNum: phoneNum
  });
  print();
};

const verify = function() {
  const userName = $("#name").val();
  let htmlStr = "no";
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      htmlStr = "yes";
    }
  }
  render(htmlStr);
};



const remove = function() {
  const userName = $("#name").val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name === userName) {
      employeeList.splice(i, 1);
    }
  }
  print();
};

const runCommand = function(event) {
  console.log("add");
  event.preventDefault();
  switch (command) {
    case "add":
      add();
      break;
    case "verify":
      verify();
      break;
  }
};

const setView = function() {
  $("#list").empty();
  command = "";
  $("form").hide();
  print();
};

const setAdd = function() {
  $("#list").empty();
  command = "add";
  $("form").show();
  $(".extra-inputs").show();
};

const setVerify = function() {
  $("#list").empty();
  command = "verify";
  $("form").show();
  $("extra-inputs").hide();
};



const render = function(htmlStr) {
  $("#list").html(htmlStr);
};

$("#view").on("click", setView);
$("#add").on("click", setAdd);
$("#verify").on("click", setVerify);


$("#submit").on("click", runCommand);
