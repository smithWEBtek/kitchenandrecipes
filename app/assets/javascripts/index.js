$(function () {
  console.log('index.js loaded ...');
  getRecipes()
})

function getRecipes() {

  $('button#recipes-button').on('click', function (event) {
    event.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/recipes',
      method: 'get',
      dataType: 'json'
    }).done(function (response) {

      console.log('response: ', response);

      let recipe = new Recipe(response[0])
      let recipeHtml = recipe.recipeHTML()

      $('div#data-div').html(recipeHtml)
      // debugger;
      // create class model object in js
    })
  })
}

class Recipe {
  constructor(obj) {
    this.name = obj.name
    this.description = obj.description
  }
}

Recipe.prototype.recipeHTML = function () {
  return (`
    <div>
      <h2>${this.name}</h2>
      <p>${this.description}</p>
    </div>
  `)
}