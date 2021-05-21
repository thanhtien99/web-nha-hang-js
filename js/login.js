var admin = {
  userName: "admin",
  password: "admin",
};
localStorage.setItem("admin", JSON.stringify(admin));

var customer;
function login() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  var Admin = JSON.parse(localStorage.getItem("admin")) || [];

  var userName = document.formLogin.userName.value;
  var password = document.formLogin.password.value;
  if (userName == Admin.userName && password == Admin.password) {
    window.location.href = "admin.html";
  } else {
    for (i in users) {
      if (users[i].userName == userName && users[i].password == password) {
        window.location.href = "index.html";
        customer = [
          {
            id: users[i].id,
            userName: users[i].userName,
            name: users[i].name
          }
        ];
      } else if (users[i].userName != userName || users[i].password != password) {
        document.getElementById('trangthai').style.display= "block";
      }
    }
  }
  localStorage.setItem("customer", JSON.stringify(customer));
}