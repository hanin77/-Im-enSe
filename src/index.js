import "bootstrap";
import "./sass/main.scss";

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $(".sidebar").toggleClass("active");
  });
});
