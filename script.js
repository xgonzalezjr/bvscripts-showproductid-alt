var DIV = document.getElementById("BVRRContainer");
if (DIV != null) {
    alert("BV Product ID: " + document.getElementById("BVRRContainer").children[0].children[0].getAttribute("data-product-id"));
} else {
    alert("No Reviews Display Found");
}