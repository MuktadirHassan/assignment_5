fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res=>res.json())
.then(data=>displayMeals(data));


const displayMeals = meals =>{
    
    const ul = document.getElementById('meals');

    for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        const li = document.createElement('li');
        li.innerText=meal.name;
        ul.appendChild(li);
        
    }

}
