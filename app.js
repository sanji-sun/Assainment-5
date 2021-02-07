document.getElementById("searchBtn").addEventListener("click", function () {
    const inputValue = document.getElementById("search-input");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue.value}`)
        .then(res => res.json())
        .then(data => displayMealsItems(data.meals));
        
})

const displayMealsItems = meal => {
    const allMealsDiv = document.getElementById("meals-items");
    meal.forEach(allMeal => {
        const singleItemsDiv = document.createElement("div");
        singleItemsDiv.className = 'single-items'
        const mealInfo = `
            <img onclick="displayDetails('${allMeal.strMeal}')" src="${allMeal.strMealThumb}">
            <h4 onclick="displayDetails('${allMeal.strMeal}')">${allMeal.strMeal}</h4>
        `;
        singleItemsDiv.innerHTML = mealInfo;
        allMealsDiv.appendChild(singleItemsDiv);
    });
}

// food details

const displayDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]))
};

const renderFoodInfo = food => {
    const foodDetailsDiv = document.getElementById('foodsDetails');

    foodDetailsDiv.innerHTML = `
    <img src="${food.strMealThumb}" alt="">
    <div class="details">
        <h4>${food.strMeal}</h4>
        
        <h5 class="pt-3 pb-2">Ingredients</h5>
        <ul class="list-unstyled mb-0">
            <li>${food.strMeasure1}, ${food.strIngredient1}</li>
            <li>${food.strMeasure2}, ${food.strIngredient2}</li>
            <li>${food.strMeasure3}, ${food.strIngredient3}</li>
            <li>${food.strMeasure4}, ${food.strIngredient4}</li>
        </ul>
    </div>

`;
};

