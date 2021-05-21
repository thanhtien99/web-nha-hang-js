var product = [];
function loadProduct() {
  var menu = JSON.parse(localStorage.getItem("menu")) || [];
  if (menu.length > 0) {
    show();
  }
}

var id;
function save() {
  var menu = JSON.parse(localStorage.getItem("menu")) || [];
  var e = document.getElementById("selectCategoryProduct");
  var category = e.options[e.selectedIndex].value;
  for (i in menu) {
    if (menu[i].category == category) {
      for (k = 0; k <= menu[i].list.length; k++) {
        id = k;
      }
    }
  }
  var nameProduct = document.getElementById("nameProduct").value;
  var priceProduct = document.getElementById("priceProduct").value;
  var noteProduct = document.getElementById("noteProduct").value;
  var imgProduct = document.getElementById("imgProduct").value;
  if (nameProduct | priceProduct | noteProduct | imgProduct) {
    var oneProduct = {
      id: id,
      name: nameProduct,
      price: priceProduct,
      note: noteProduct,
      img: imgProduct,
      qty: 1,
    };
    for (j in menu) {
      if (menu[j].category == category) {
        menu[j].list.push(oneProduct);
      }
    }
    localStorage.setItem("menu", JSON.stringify(menu));
    show();
    changeCategory();
  } else {
    reset();
  }
}
function show() {
  let html = `
  <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
  <thead>
    <tr>
      <th>Id</th>
      <th>Tên sản phẩm</th>
      <th>Img</th>
      <th>giá</th>
      <th>Ghi chú</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="tab">
  </tbody>
</table>
    `;
  document.getElementById("dataTable").innerHTML = html;
  changeCategory();
}

function changeCategory() {
  var menu = JSON.parse(localStorage.getItem("menu")) || [];
  var e = document.getElementById("selectCategory");
  var category = e.options[e.selectedIndex].value;
  let row = "";
  for (i in menu) {
    if (menu[i].category == category) {
      for (j in menu[i].list) {
        row += "<tr >";
        row += "<td>" + menu[i].list[j].id + "</td>";
        row += "<td>" + menu[i].list[j].name + "</td>";
        row +=
          "<td>" +
          `<img src="${menu[i].list[j].img}" style="width: 80px; height: 80px"/>` +
          "</td>";
        row += "<td>" + menu[i].list[j].price+"₫" + "</td>";
        row += "<td>" + menu[i].list[j].note + "</td>";
        row +=
          "<td>" +
          `<button type="button" onclick="editsp(${menu[i].list[j].id})" class="btn btn-success"><i class="fas fa-edit"></i></button>` +
          "</td>";
        row +=
          "<td>" +
          `<button type="button" onclick="deletesp(${menu[i].list[j].id})" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>` +
          "</td>";
        row += "</tr>";
      }
    }
  }
  document.getElementById("tab").innerHTML = row;
}

function editsp(id) {
  var menu = JSON.parse(localStorage.getItem("menu")) || [];
  document.getElementById("ok").style.display = "none";
  document.getElementById("edit").style.display = "block";
  var e = document.getElementById("selectCategory");
  var category = e.options[e.selectedIndex].value;
  for (i in menu) {
    if (menu[i].category == category) {
      for (j in menu[i].list) {
        if (menu[i].list[j].id == id) {
          document.getElementById("nameProduct").value = menu[i].list[j].name;
          document.getElementById("priceProduct").value = menu[i].list[j].price;
          document.getElementById("noteProduct").value = menu[i].list[j].note;
          document.getElementById("imgProduct").value = menu[i].list[j].img;
        }
      }
    }
  }
  document.getElementById(
    "edit"
  ).innerHTML = `<button type="button" onclick="editok(${id})" class="btn btn-success">save</button>`;
}
function editok(id) {
  var menu = JSON.parse(localStorage.getItem("menu")) || [];
  var e = document.getElementById("selectCategory");
  var category = e.options[e.selectedIndex].value;
  singleProduct = menu;
  for (i in menu) {
    if (menu[i].category == category) {
      for (j in menu[i].list) {
        if (menu[i].list[j].id == id) {
          singleProduct[i].list[j].id = menu[i].list[j].id;
          singleProduct[i].list[j].name = document.getElementById(
            "nameProduct"
          ).value;
          singleProduct[i].list[j].price = document.getElementById(
            "priceProduct"
          ).value;
          singleProduct[i].list[j].note = document.getElementById(
            "noteProduct"
          ).value;
          singleProduct[i].list[j].img = document.getElementById(
            "imgProduct"
          ).value;
        }
      }
    }
  }
  localStorage.setItem("menu", JSON.stringify(singleProduct));
  if (document.getElementById("edit").style.display === "block") {
    document.getElementById("edit").style.display = "none";
    document.getElementById("ok").style.display = "block";
  } else {
    document.getElementById("edit").style.display = "block";
    document.getElementById("ok").style.display = "none";
  }

  show();
  changeCategory();
  reset();
}
function deletesp(id) {
  var r = confirm("Are you sure!");
  if(r == true){
    var menu = JSON.parse(localStorage.getItem("menu")) || [];
    var e = document.getElementById("selectCategory");
    var category = e.options[e.selectedIndex].value;
    product = menu;
    for (i in product) {
      if (product[i].category == category) {
        for (j in product[i].list) {
          if (product[i].list[j].id == id) {
            console.log((product[i].list).splice(j, 1)); 
            break;
          }
        }
        break;
      }
    }
    localStorage.setItem("menu", JSON.stringify(product));
    changeCategory();
  }
  
}

function reset() {
  document.getElementById("nameProduct").value = "";
  document.getElementById("priceProduct").value = "";
  document.getElementById("noteProduct").value = "";
  document.getElementById("imgProduct").value = "";
}
