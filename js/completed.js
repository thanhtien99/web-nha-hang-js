function onloadCompleted() {
  var customer = JSON.parse(localStorage.getItem("customer"));
  var users = JSON.parse(localStorage.getItem("users"));
  for (i in users) {
    if (users[i].id == customer[0].id) {
      var htmlname = `
          <article class="about-info">
              <h2 id="titleName">${users[i].name}</h2>
              <p>SĐT: ${users[i].phone}</p>
              <p>email: ${users[i].email}</p>
              <p>address: ${users[i].address}</p>
            </article>
          `;

      document.getElementById("titleName").innerHTML = htmlname;
    }
  }
  var storedOrder = JSON.parse(localStorage.getItem("order"));
  var total1 = JSON.parse(localStorage.getItem("total"));
  var res1 = '';
  for (i in storedOrder) {
    var name = storedOrder[i].name;
    var qty = storedOrder[i].qty;
    var price = parseFloat(storedOrder[i].price);
    var img = storedOrder[i].img;
    var total = parseFloat(qty * price);
    var html = `
    <img src="${img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
    var ii = i;
    ii++;
    var row = "<tr class='table-success'>";
    row += "<td>" + ii + "</td>";
    row += "<td>" + html + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + price+"₫" + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + total +"₫"+ "</td>";
    row += "</tr>";
    res1 += row;
  }
  var row1 = "<tr>";
  row1 += "<td>" + "Total" + "</td>";
  row1 += "<td></td>";
  row1 += "<td></td>";
  row1 += "<td></td>";
  row1 += "<td></td>";
  row1 += "<td>" + `<span id='sub'>${total1}₫</span>` + "</td>";
  row1 += "</tr>";
  document.getElementById("tab").innerHTML = res1;
  document.getElementById("tr").innerHTML = row1;
}
function confirm() {
  var customer = JSON.parse(localStorage.getItem("customer"));
  var total = JSON.parse(localStorage.getItem("total"));
  var ordersuccess = JSON.parse(localStorage.getItem("ordersuccess")) || [];
  var order = JSON.parse(localStorage.getItem("order"));
  var users = JSON.parse(localStorage.getItem("users"));
  var choicedate = JSON.parse(localStorage.getItem("choicedate"));
  var product = [];
  for (k in order) {
    oneproduct = {
      nameDish: order[k].name,
      qtyDish: order[k].qty,
      priceDish: order[k].price,
      img: order[k].img
    }
    product.push(oneproduct);
  }
  for (i in users) {
    if (users[i].id == customer[0].id) {
      for (j = 0; j <= ordersuccess.length; j++) {
        for (k in order) {
          OrderComplete = {
            id: j,
            date: choicedate.dateSet,
            hour: choicedate.hourSet,
            minute: choicedate.minuteSet,
            total: total,
            idCustomer: users[i].id,
            name: users[i].name,
            nameCustomer: users[i].userName,
            phone: users[i].phone,
            email: users[i].email,
            address: users[i].address,
            qtyCustomer: choicedate.customerNum,
            product: product,
            messages: "Đang chờ xử lý",
            isActive: false,
          };
        }
      }
    }
  }
  ordersuccess.push(OrderComplete);
  localStorage.setItem("ordersuccess", JSON.stringify(ordersuccess));
  localStorage.removeItem("choicedate");
  localStorage.removeItem("order");
  localStorage.removeItem("total");
  alert("Đặt  bàn thành công! Chúng tôi sẽ sớm liên hệ với bạn, xin cảm ơn");
  window.location.href = "index.html";
}
