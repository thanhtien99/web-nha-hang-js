var user = [];
function loadCus() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.length > 0) {
    show();
  }
}

var id;
function save() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  user = users;
  for (i = 0; i <= user.length; i++) {
    id = i;
  }
  var nameCus = document.getElementById("nameCus").value;
  var passwordCus = document.getElementById("passwordCus").value;
  var fullName = document.getElementById("fullnameCus").value;
  var phoneCus = document.getElementById("phoneCus").value;
  var emailCus = document.getElementById("emailCus").value;
  let addressCus = document.getElementById("addressCus").value;
  if (nameCus | passwordCus | fullName | phoneCus | emailCus | addressCus) {
    var oneCus = {
      id: id,
      userName: nameCus,
      password: passwordCus,
      name: fullName,
      phone: phoneCus,
      email: emailCus,
      address: addressCus,
    };
    user.push(oneCus);
    localStorage.setItem("users", JSON.stringify(user));
    show();
    reset();
  } else {
    reset();
  }
}
function show() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  let html = `
  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
      <th>Id User</th>
      <th>Tên đăng nhập</th>
      <th>Mật khẩu</th>
      <th>Họ tên</th>
      <th>SĐT</th>
      <th>Email</th>
      <th>Address</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="tab">
  </tbody>
</table>
    `;
  document.getElementById("dataTable").innerHTML = html;
  let row = "";
  for (i in users) {
    row += "<tr >";
    row += "<td>" + users[i].id + "</td>";
    row += "<td>" + users[i].userName + "</td>";
    row += "<td>" + users[i].password + "</td>";
    row += "<td>" + users[i].name + "</td>";
    row += "<td>" + users[i].phone + "</td>";
    row += "<td>" + users[i].email + "</td>";
    row += "<td>" + users[i].address + "</td>";
    row +=
      "<td>" +
      `<button type="button" onclick="editsp(${i})" class="btn btn-success"><i class="fas fa-edit"></i></button>` +
      "</td>";
    row +=
      "<td>" +
      `<button type="button" onclick="deletesp(${i})" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>` +
      "</td>";
    row += "</tr>";
  }
  document.getElementById("tab").innerHTML = row;
}
function editsp(id) {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  document.getElementById("ok").style.display = "none";
  document.getElementById("edit").style.display = "block";

  document.getElementById("nameCus").value = users[id].userName;
  document.getElementById("passwordCus").value = users[id].password;
  document.getElementById("fullnameCus").value = users[id].name;
  document.getElementById("phoneCus").value = users[id].phone;
  document.getElementById("emailCus").value = users[id].email;
  document.getElementById("addressCus").value = users[id].address;
  document.getElementById(
    "edit"
  ).innerHTML = `<button type="button" onclick="editok(${id})" class="btn btn-success">save</button>`;
}
function editok(id) {
  var users = JSON.parse(localStorage.getItem("users")) || [];

  user = users;
  user[id].id = users[id].id;
  user[id].userName = document.getElementById("nameCus").value;
  user[id].password = document.getElementById("passwordCus").value;
  user[id].name = document.getElementById("fullnameCus").value;
  user[id].phone = document.getElementById("phoneCus").value;
  user[id].email = document.getElementById("emailCus").value;
  user[id].address = document.getElementById("addressCus").value;
  localStorage.setItem("users", JSON.stringify(user));
  if (document.getElementById("edit").style.display === "block") {
    document.getElementById("edit").style.display = "none";
    document.getElementById("ok").style.display = "block";
  } else {
    document.getElementById("edit").style.display = "block";
    document.getElementById("ok").style.display = "none";
  }

  show();
  reset();
}
function deletesp(id) {
  var r = confirm("Are you sure!");
  if(r == true){
    var users = JSON.parse(localStorage.getItem("users")) || [];
    user = users;
    user.splice(id, 1);
    localStorage.setItem("users", JSON.stringify(user));
    show();
  }
  
}

function reset() {
  document.getElementById("nameCus").value = "";
  document.getElementById("passwordCus").value = "";
  document.getElementById("fullnameCus").value = "";
  document.getElementById("phoneCus").value = "";
  document.getElementById("emailCus").value = "";
  document.getElementById("addressCus").value = "";
}
