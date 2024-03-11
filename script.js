// Initialize the title of the page
var title = document.createElement("h1");
title.innerHTML = "Harry Potter Spells";
document.body.append(title);
var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";
//fetching data from the API
function foo() {
    fetch("https://hp-api.onrender.com/api/spells")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        bar(data);
    })
    .catch(function(error) {
        console.log('Error fetching data:', error);
    });
}
foo();
//function to display the data
function bar(res) {
    for (var i = 0; i < res.length; i++) {
        var column = document.createElement("div");
        column.className = "col-md-12";
        column.innerHTML = `<div class="card">
            <div class="card-header">
              ${i + 1}) Spell <i class="fa fa-magic" aria-hidden="true"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">${res[i].name}</h5>
              <p class="card-text">Description: ${res[i].description}</p>
            </div>
          </div>`;
        row.append(column);
    }
    //appending the data to the body
    container.append(row);
    document.body.append(container);
}
