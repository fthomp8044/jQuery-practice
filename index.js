
$("h1").addClass("big-title margin-50");
$("button").removeClass("big-button");

$("h1").text("Goodbye");
$("button").html("<p>Dont click me</p>");

$("a").attr("href", "https://www.yahoo.com")

$("h1").click(function (){
  $("h1").css("color", "purple");
})

// for loop for every button click to change header color

for (let i = 0; i<5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  });
}
