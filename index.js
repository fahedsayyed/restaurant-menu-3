
  const dishes= [
    {
      "id": 1,
      "name": "Chicken Burger",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch"]
    },
    {
      "id": 2,
      "name": "Ham Burger",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 3,
      "name": "Cheese Burger",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 4,
      "name": "Fries",
      "restaurant": "Mc Donalds",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 5,
      "name": "Egg Muffin",
      "restaurant": "Mc Donalds",
      "availableMeals": ["breakfast"]
    },
    {
      "id": 6,
      "name": "Burrito",
      "restaurant": "Taco Bell",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 7,
      "name": "Tacos",
      "restaurant": "Taco Bell",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 8,
      "name": "Quesadilla",
      "restaurant": "Taco Bell",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 9,
      "name": "Steak",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 10,
      "name": "Yakitori",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 11,
      "name": "Nankotsu",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 12,
      "name": "Piman",
      "restaurant": "BBQ Hut",
      "availableMeals": ["dinner"]
    },
    {
      "id": 13,
      "name": "Vegan Bento",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch"]
    },
    {
      "id": 14,
      "name": "Coleslaw Sandwich",
      "restaurant": "Vege Deli",
      "availableMeals": ["breakfast"]
    },
    {
      "id": 15,
      "name": "Grilled Sandwich",
      "restaurant": "Vege Deli",
      "availableMeals": ["breakfast"]
    },
    {
      "id": 16,
      "name": "Veg. Salad",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 17,
      "name": "Fruit Salad",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 18,
      "name": "Corn Soup",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 19,
      "name": "Tomato Soup",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 20,
      "name": "Minestrone Soup",
      "restaurant": "Vege Deli",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 21,
      "name": "Pepperoni Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 22,
      "name": "Pepperoni Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 23,
      "name": "Hawaiian Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 24,
      "name": "Seafood Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 25,
      "name": "Deep Dish Pizza",
      "restaurant": "Pizzeria",
      "availableMeals": ["dinner"]
    },
    {
      "id": 26,
      "name": "Chow Mein",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 27,
      "name": "Mapo Tofu",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 28,
      "name": "Kung Pao",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 29,
      "name": "Wontons",
      "restaurant": "Panda Express",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 30,
      "name": "Garlic Bread",
      "restaurant": "Olive Garden",
      "availableMeals": ["breakfast", "lunch", "dinner"]
    },
    {
      "id": 31,
      "name": "Ravioli",
      "restaurant": "Olive Garden",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 32,
      "name": "Rigatoni Spaghetti",
      "restaurant": "Olive Garden",
      "availableMeals": ["lunch", "dinner"]
    },
    {
      "id": 33,
      "name": "Fettucine Pasta",
      "restaurant": "Olive Garden",
      "availableMeals": ["lunch", "dinner"]
    }
  ]
  var mealArray=[]

const meal = dishes.map(data=>(data.availableMeals))
meal.map(data=>{
  data.map(mealdata=>{
    mealArray.push(mealdata)
  })

})
var row=""
const uniquemeal=[...new Set(mealArray)]
uniquemeal.map( data =>{
 row+=`<option value="${data}">${data}</option>`;
})

document.getElementById("meals").innerHTML=row
// console.log(mealArray,'meal')
//const unique = dishes.filter((restaurant,index)=> dishes.indexOf(restaurant) == index);
//console.log(unique);
// function selectmeal( ){
// // let selectedmeal=document.getElementById('meals').value;
// let foundRestaurants =JSON.parse(localStorage.getItem('foundRestaurants'))
// console.log(foundRestaurants,'foundRestaurants')
// }
//for next step
//document.getElementById('next1').addEventListener('click',(e)=>{
 // e.preventDefault()
//var resturantaccording=''
//let selectedmeal= JSON.parse(localStorage.getItem('selectedmeal'))
//dishes.map(data=>{
// data.availableMeals.map(meal=>{
//if(meal==selectedmeal){
//  console.log(data.restaurant,'data.restaurant')
//  resturantaccording+=`<option>${data.restaurant}</option>`
//  }
//})
//})
//document.getElementById("restaurant").innerHTML=resturantaccording
//console.log(resturantaccording,'restaurant')

//}) 
// const unique = dishes.filter((restaurants,index) => dishes.indexOf(restaurants)==index);
// console.log(unique)


// var restaurantNames = new Set();
// dishes.forEach(element => {
// 	restaurantNames.add(element.restaurant);
// });

// // console.log(restaurantNames);

// restaurantNames = Array.from(restaurantNames);

// document.getElementById("restaurant").innerHTML=`${restaurantNames.map( restaurantName => {
//   console.log(restaurantName,'restaurantName')
// 	return `<option value="${restaurantName}">${restaurantName}</option>`;
// })}`
// document.getElementById("restaurant").addEventListener("click",(e)=>{
// e.preventDefault();
// console.log(document.getElementById("restaurant").value,'wow')
// })

//const uniques = dishes.filter((value,index)=>dishes.indexOf(value)==index);

// console.log(uniques)
var dishname1 =[];
function filterdish(){
   let foundRestaurants =JSON.parse(localStorage.getItem('foundRestaurants'))
   dishes.forEach(elemt => {
    if(elemt.restaurant==foundRestaurants){
      dishname1.push(elemt.name);
    }

   });
     dishname1=[...new Set(dishname1)]
  document.getElementById("dish").innerHTML=`${dishname1.map(dishname1=>{
    return `<option value="${dishname1}">${dishname1}</option>`;
  })}`;
}
//for select multiple dish
var SelecteddishContainer=[]
var selecteddish=''
var selectedserving=''
document.getElementById("dish").addEventListener('click',()=>{
  selecteddish = document.getElementById("dish").value
})
document.getElementById("serving").addEventListener('click',()=>{
  selectedserving = document.getElementById("serving").value
})

document.getElementById('addmore').addEventListener('click',(e)=>{
e.preventDefault()
SelecteddishContainer.push({
    dish:selecteddish,
    serving:selectedserving
  })
  //showSelectedDish
  let row=''
SelecteddishContainer &&SelecteddishContainer.map(data=>{
  console.log(data,'wow')
  row+=`<div><p>${ data.dish }</p><p>${ data.serving }</p></div><br/>` 
})
document.getElementById("showSelectedDish").innerHTML=row
}) 

 


const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(formStepsNum==1){
      filterdish()
    }

    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if(formStepsNum==1){
      filterdish()
    }
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


function showOrderDetails(element){

	var meals=document.getElementById("meals").value;
	localStorage.setItem("meal_name",meals)

	var pos=document.getElementById("position").value;
	localStorage.setItem("no_of_people",pos)

	var restaurants = document.getElementById("restaurant").value;
	localStorage.setItem("restaurant_name",restaurants)

  var dish_name = document.getElementById("dish").value;
	localStorage.setItem("dish_name",dish_name)

  var ser_ving = document.getElementById("serving").value;
	localStorage.setItem("servings",ser_ving)



	const data = {
		meal_name:			localStorage.getItem('meal_name'),
		no_of_people:		localStorage.getItem('no_of_people'),
		restaurant_name: 	localStorage.getItem('restaurant_name'),
    dish_name: 	localStorage.getItem('dish_name'),
    ser_ving: 	localStorage.getItem('servings'),
	};
	document.getElementById('meal_name').innerText 			= data.meal_name;
	document.getElementById('no_of_people').innerText 		= data.no_of_people;
	document.getElementById('restaurant_name').innerText 	= data.restaurant_name;
  document.getElementById('dish_name').innerText 	= data.dish_name;
  document.getElementById('servings').innerText 	= data.ser_ving;
	element.hidden = false;
	localStorage.clear();
}
//function listboxresult(){
//var spanresult=document.getElementById("result");
// spanresult.value="";
// var x=document.getElementById("dish");
// for(var i=0; i<x.options.length;i++){
//  spanresult.value +=x.option[i].value +"";
// document.getElementById("result").innerHTML=spanresult.value;
//document.getElementById("result").style.color="green"
//}
//et fltr = dishes.filter((rstr)=>{
  //return rstr=="";
//})
//console.log(fltr)
//var filterdata = dishes.filter(elems=>
//  elems.restaurant =="Vege Deli"
//) 

//console.log(filterdata)

let foundDishes = [];
function selectMeal(selectedMailVal){
    let selectedmeal = selectedMailVal.value;
    //  document.getElementById('meals').value;
    localStorage.setItem('selectedmeal',JSON.stringify(selectedmeal));

    foundDishes = [];
  
    dishes.map( (dish, ind, arr) => {
        let mealInd = dish.availableMeals.findIndex( (mealObj) => (mealObj === selectedmeal) );
        if(mealInd > -1) {
          let restaurantExist = foundDishes.findIndex( (dishObj) => (dishObj.restaurant === dish.restaurant) );
          if(restaurantExist === -1) {
            foundDishes.push(dish);
            let option = document.createElement('option');
            option.value = dish.restaurant;
            option.innerText = dish.restaurant;
           // document.querySelector('#restaurant').innerHTML = option
           document.querySelector('#restaurant').appendChild(option);
          }
        }
     
    });

 
}
document.querySelector('#restaurant').addEventListener("click",()=>{
  localStorage.setItem('foundRestaurants', JSON.stringify( document.querySelector('#restaurant').value));
})