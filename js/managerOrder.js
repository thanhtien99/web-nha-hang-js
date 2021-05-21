var order = [];
function loadOrder() {
  var ordersuccess = JSON.parse(localStorage.getItem("ordersuccess")) || [];
  if (ordersuccess.length > 0) {
    show();
  }
}

var id;
function show() {
  var ordersuccess = JSON.parse(localStorage.getItem("ordersuccess")) || [];
  let html = `
  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
      <th>Id</th>
      <th>Ngày đặt</th>
      <th>Id user</th>
      <th>Tên đăng nhập</th>
      <th>Đơn đặt</th>
      <th>Tổng tiền</th>
      <th>Trạng thái</th>
      <th>Xoá</th>
    </tr>
  </thead>
  <tbody id="tab">
  </tbody>
</table>
    `;
  document.getElementById("dataTable").innerHTML = html;
  var row = "";
  for (i in ordersuccess) {
    var buttondetail = `<button class='btn btn-success' onclick='showDetail(${ordersuccess[i].id})'>Xem chi tiết</button>`;
    row += "<tr >";
    row += "<td>" + ordersuccess[i].id + "</td>";
    row +=
      "<td>" +
      ordersuccess[i].date+"<br>" +
      ordersuccess[i].hour +`h`+
      ordersuccess[i].minute +`'`+
      "</td>";
    row += "<td>" + ordersuccess[i].idCustomer + "</td>";
    row += "<td>" + ordersuccess[i].nameCustomer + "</td>";
    row += "<td>" + buttondetail + "</td>";
    

    row += "<td>" + ordersuccess[i].total + "</td>";
    row +=
      "<td>" +
      `<select  class="isActive btn btn-light" onchange="changeOption(${i})">
          <option value="false">Trạng thái: ${ordersuccess[i].isActive}</option>
          <option value="false" >False</option>
          <option value="true">True</option>
    </select>` +
      "</td>";
    row +=
      "<td>" +
      `<button type="button" onclick="deletesp(${i})" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>` +
      "</td>";
    row += "</tr>";
  }
  document.getElementById("tab").innerHTML = row;
}
function changeOption(id) {
  var orders = JSON.parse(localStorage.getItem("ordersuccess")) || [];
  var res = orders;
  let selectBox = document.getElementsByClassName("isActive");
  for ( var i = 0; i < selectBox.length; i++) {
    if(i == id){
      var values= (selectBox[id][selectBox[id].selectedIndex].value);
    }
    if(values == "true") {
      var messages = "Đặt bàn thành công";
    }
    if(values == "false") {
      var messages = "Đang chờ xử lý";
    }
  }
  for (i = 0; i < res.length; i++) {
    if (res[i].id == id) {
      for(j in res[i].product){
        res[i].id = orders[i].id;
        res[i].date = orders[i].date;
        res[i].hour = orders[i].hour;
        res[i].minute = orders[i].minute;
        res[i].idCustomer = orders[i].idCustomer;
        res[i].nameCustomer = orders[i].nameCustomer;
        res[i].name = orders[i].name;
        res[i].email = orders[i].email;
        res[i].phone = orders[i].phone;
        res[i].isActive = values;
        res[i].messages = messages;
      }
      
    }
  }
  localStorage.setItem("ordersuccess", JSON.stringify(res));
  loadOrder();
}

function deletesp(id) {
  var r = confirm("Are you sure!");
  if(r == true){
    var orders = JSON.parse(localStorage.getItem("ordersuccess")) || [];
    order = orders;
    order.splice(id, 1);
    localStorage.setItem("ordersuccess", JSON.stringify(order));
    show();
  }
  
}

function showDetail(id) {
  var ordersuccess = JSON.parse(localStorage.getItem("ordersuccess")) || [];
  for (i in ordersuccess){
    if(ordersuccess[i].id == id)
    {
      var product = ordersuccess[i].product;
      var res = `
      <table class="table" name='tab'>
      <thead>
          <tr class="thead-dark">
              <th></th>
              <th></th>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
          </tr>
      </tr>
      </thead>
      <tbody id="tab">
      `;
      for (j in product) {
        var name = product[j].nameDish;
        var qty = product[j].qtyDish;
        var price = parseFloat(product[j].priceDish);
        var img = product[j].img;
        var total = parseFloat(qty * price);
        var html = `
        <img src="${img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
        var row = "<tr class='table-success'>";
        let ii =j;
        ii++;
        row += "<td>" + ii + "</td>";
        row += "<td>" + html + "</td>";
        row += "<td>" + name + "</td>";
        row += "<td>" + price+"₫" + "</td>";
        row += "<td>" + qty + "</td>";
        row += "<td>" + total+"₫" + "</td>";
        row += "</tr>";
        res += row;
      }
      res += '</tbody></table>'
      console.log(product);
      console.log(res);
      var htlm = '<div class="modal-content">' + res + '<div>'
      document.getElementById("myModal").innerHTML = htlm;
      break;
    }
  }
  cls();
}
var modal = document.getElementById("myModal");
function cls() {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};