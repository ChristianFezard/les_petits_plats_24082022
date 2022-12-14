/* Integration des éléments dans les dropdowns */

export function fillDropdown(recipes) {
    let ingredientList = [];
    let applianceList = [];

    const dropdownIngredient = document.getElementById("ingredient_list");
    const dropdownAppliance = document.getElementById("appliance_list");
    const dropdownUstensil = document.getElementById("ustensil_list");

/* Tableau ingredients */    

    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            ingredientList.push(ingredient.ingredient);
        });
    });
    ingredientList = [...new Set(ingredientList)];
    ingredientList.sort();

    /* edition du tableau en élément intégré a la liste a puces*/

    dropdownIngredient.innerHTML = "";
    ingredientList.forEach((item) => {
        let list = document.createElement("li");
        list.setAttribute("class", "ingredient_element");
        list.innerText = item.slice(0, 1).toUpperCase() + item.slice(1);

        dropdownIngredient.appendChild(list);
    });

/* Tableau appareils */

    recipes.forEach((recipe) => {
        applianceList.push(recipe.appliance);
    });
    applianceList = [...new Set(applianceList)];
    applianceList.sort();

    dropdownAppliance.innerHTML = "";
    applianceList.forEach((item) => {
        let list = document.createElement("li");
        list.setAttribute("class", "appliance_element");
        list.innerText = item.slice(0, 1).toUpperCase() + item.slice(1);

        dropdownAppliance.appendChild(list);
    })

/* Tableau ustensiles */

    let ustensils = recipes.map((recipe) => {
       return recipe.ustensils 
    });
    ustensils = ustensils.flat();
    ustensils = [...new Set(ustensils)];
    ustensils.sort((a, b) => {
        return a.localeCompare(b);
    });

    dropdownUstensil.innerHTML = "";
    ustensils.forEach((item) => {
        let list = document.createElement("li");
        list.setAttribute("class", "ustensil_element");
        list.innerText = item.slice(0, 1).toUpperCase() + item.slice(1);

        dropdownUstensil.appendChild(list);
    })
}




