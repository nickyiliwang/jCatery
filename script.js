var catArr = [
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1548546738-8509cb246ed3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1457410129867-5999af49daf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1526509177308-2073fcfbf0b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1479065476818-424362c3a854?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
];
var dogArr = [
  "https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1499938971550-7ad287075e0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  "https://images.unsplash.com/photo-1508814437933-f0c7d18a9217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1477973770766-6228305816df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80",
  "https://images.unsplash.com/photo-1510679674848-ee62d0e08ab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1460&q=80",
  "https://images.unsplash.com/photo-1532353949707-2e77707ee8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjg0Njh9&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80"
];

$("#header").css("background-color", "lightblue");
$("#initial").css("color", "red");
$(".navbar-brand").text("jCatry");

$("img").on("click", function onClick() {
  $(this).attr("src", catArr[pickMeNewCat()]);
});

$("input").on("keypress", function(event) {
  if (event.which === 13) {
    $("#cat-frontpage").attr("src", catArr[$("#catNum").val()]);
  }
});

function pickMeNewCat() {
  return Math.floor(Math.random() * 11);
}

$("#dog-group .card .card-img-top").map(x => $("#dog" + x).attr("src", dogArr[pickMeNewCat()]));