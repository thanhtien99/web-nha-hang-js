function onloadAccount() {
  var customer = JSON.parse(localStorage.getItem("customer"));
  var user = JSON.parse(localStorage.getItem("users"));
  for (i in user) {
    if (user[i].id == customer[0].id) {
      document.getElementById("name").value = user[i].name;
      document.getElementById("phone").value = user[i].phone;
      document.getElementById("email").value = user[i].email;
      document.getElementById("address").value = user[i].address;
    }
  }
}
var account;
function changeUser() {
  var customer = JSON.parse(localStorage.getItem("customer"));
  var user = JSON.parse(localStorage.getItem("users"));
  account = user;
  for (i in account) {
    if (account[i].id == customer[0].id) {
      account[i].name = document.getElementById("name").value;
      account[i].phone = document.getElementById("phone").value;
      account[i].email = document.getElementById("email").value;
      account[i].address = document.getElementById("address").value;
    }
  }
  localStorage.setItem("users", JSON.stringify(account));
  alert("Thành công!");
}

var modal = document.getElementById("myModal");

function changepass() {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.getElementById('respassword').addEventListener("keyup", function () {
  var password = document.getElementById('password').value;
  var respassword = document.getElementById('respassword').value;
  if (password !== respassword) {
    document.getElementById('respassword').style.border = "1px solid red";
  } else {
    document.getElementById('respassword').style.border = "1px solid #ced4da";
  }
});
function resetpass() {
  var customer = JSON.parse(localStorage.getItem("customer"));
  var user = JSON.parse(localStorage.getItem("users"));
  account = user;
  for (i in account) {
    if (account[i].id == customer[0].id) {
      if (document.getElementById("passOld").value != account[i].password) {
        alert("Sai mật khẩu cũ!");
      } else {
        if (
          document.getElementById("password").value !=
          document.getElementById("respassword").value
        ) {
          alert("Mật khẩu không khớp!");
        } else {
          account[i].password = document.getElementById("password").value;
          localStorage.setItem("users", JSON.stringify(account));
          alert("Thành công!");
          clear();
          modal.style.display = "none";
        }
      }
    }
  }
}
function clear(){
  document.getElementById('passOld').value = "";
  document.getElementById('password').value = "";
  document.getElementById('respassword').value = "";
}
