document.formRegister.respassword.addEventListener("keyup", function () {
  var password = document.formRegister.password.value;
  var respassword = document.formRegister.respassword.value;
  if (password !== respassword) {
    document.formRegister.respassword.style.border = "1px solid red";
  } else {
    document.formRegister.respassword.style.border = "1px solid #ced4da";
  }
});

var id;
function register() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  for (i = 0; i <= users.length; i++) {
    id = i;
  }
  let userData = {
    id: id,
    userName: document.formRegister.userName.value,
    password: document.formRegister.password.value,
    respassword: document.formRegister.respassword.value,
    name: document.formRegister.Name.value,
    phone: document.formRegister.phone.value,
    email: document.formRegister.email.value,
    address: document.formRegister.address.value,
  };
  var x = document.getElementsByClassName("inputform");
  var count;
  for (var i = 0; i < x.length; i++) {
    if (x[i].value == "") {
      count++;
      alert("Vui lòng điền " + x[i].placeholder);
    } else {
      count = 0;
    }
  }
  if (userData.password == userData.respassword && count == 0) {
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng kí thành công!");
    window.location.href = "login.html";
  } else {
    alert("Mật khẩu không khớp");
  }
}
