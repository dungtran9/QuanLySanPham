let productList = ["Sony Xperia", "Samsung Galaxy", "Nokia 8", "Apple Iphone 8", "Huawei P30 Pro", "Vsmart"];
function displayProductFromArray() {
    let str = "<table>"
        + "<h3>Display All Product</h3>"
        + "<tr>"
        + "<th width='70%'>Product Name</th>"
        + "<th width='20%'>&nbsp;</th>"
        + "<th width='30%'>&nbsp;</th>"
        + "</tr>"
        + "<hr>"
    for (let i = 0; i < productList.length; i++) {
        str += `<tr>
                <td>${productList[i]}</td>
                <td><button id="edit" onclick="editProduct(${i})">Edit</button></td>
                <td><button id="delete" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`;
    }
    str += "</table>"
    document.getElementById("Product").innerHTML = str;
}

function addProduct() {
    let product = document.getElementById("newproduct").value;
    if (product !== '') {
        productList.push(product);
    }
    displayProductFromArray(productList);
}

function editProduct(index) {
    productList[index] = prompt("Content edited");
    displayProductFromArray(productList);
}

function deleteProduct(index) {
    productList.splice(index,1);
    displayProductFromArray(productList);
}

displayProductFromArray(productList);