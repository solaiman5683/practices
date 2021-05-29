import "./styles.css"
import "regenerator-runtime/runtime";
import html from "./index.html"

$(document).ready(function () {
    $("#title").click(function () {
        $(this).css("background", "rgb(23, 145, 167)")
    })
})