import pizza from "../../../assets/pizza.jpg"
import steak from "../../../assets/steak.webp"
import salad from "../../../assets/salad.jpeg"
import noodles from "../../../assets/noodles.jpeg"
import masala from "../../../assets/masala.jpeg"
import tacos from "../../../assets/tacos.jpeg"


const MenuData = [
    {
     id: 1,
     type: "food",   
     img: pizza,
     dishName: "Pizza",
     dishType:"Italian",
     dishTime:"22 mins",
     dishDescription:"This is a individual sized pizza with lots of pineapple.",
     dishPrice:"$10.00",
    },
    {
     id: 2,   
     type: "food",
     img: steak,
     dishName: "Steak",
     dishType:"American",
     dishTime:"6 min",
     dishDescription:"This is a 2 oz plant-based steak with roasted vegetables.",
     dishPrice:"$12.00",
    },
    {
     id: 3,   
     type: "food",
     img: salad,
     dishName: "Salad",
     dishType:"Greek",
     dishTime:"3 mins",
     dishDescription:"This is a huge Greek greens and veggie mixed salad with homemade dressing.",
     dishPrice:"$8.00",
    },
    {
     id: 4,
     type: "food",   
     img: noodles,
     dishName: "Noodles",
     dishType:"Asian-Fusion",
     dishTime:"8 mins",
     dishDescription:"A bowl of East-Asian noodles with South-Asian veggies in a homemade sauce.",
     dishPrice:"$10.00",
    },
    {
     id: 5,
     type: "food",   
     img: masala,
     dishName: "masala",
     dishType:"Indian",
     dishTime:"10 mins",
     dishDescription:"Chickpeas and a spicy tomato sauce with ten Indian spices",
     dishPrice:"$9.00",
    },
    {
     id: 6,
     type: "food",   
     img: tacos,
     dishName: "tacos",
     dishType:"Mexican",
     dishTime:"6 min",
     dishDescription:"Three tacos with five vegetable of the week, special sauce, and avocado.",
     dishPrice:"$9.00",
    },
]

export default MenuData 