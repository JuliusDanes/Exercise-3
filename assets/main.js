"use strict";

$(document).ready(function () 
{
    $.ajax(
    {
        url: "https://swapi.co/api/planets/",
        type : 'get',
        dataType : 'json',
        success: function (rsh) {
            let input = "";
            console.log(rsh.results);
            rsh.results.map((rsh, index) => 
            {
                input += "<tr>"
                        + "<td>" + rsh.name + "</td>"
                        + "<td>" + rsh.rotation_period + "</td>"
                        + "<td>" + rsh.orbital_period + "</td>"
                        + "<td>" + rsh.diameter + "</td>"
                        + "<td>" + rsh.climate + "</td>"
                        + "<td>" + rsh.gravity + "</td>"
                        + "<td>" + rsh.terrain + "</td>"
                        + "<td>" + rsh.surface_water + "</td>"
                        + "<td>" + rsh.population + "</td>"
                        + "</tr>";
            })
            $(".list").html(input);
            $("#planets").DataTable()
        },
    });
})