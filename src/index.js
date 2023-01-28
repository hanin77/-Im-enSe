import "bootstrap";
import "./sass/main.scss";

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $(".sidebar").toggleClass("active");
    $(".content").toggleClass("active");
    $(".sidebar__header").toggleClass("crop");
  });
});
