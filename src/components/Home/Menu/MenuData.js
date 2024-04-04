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
     itemName: "Pizza",
     itemType:"Italian",
     itemTime:"22 mins",
     itemDescription:"This is a individual sized pizza with lots of pineapple.",
     itemPrice:"$10.00",
    },
    {
     id: 2,   
     type: "food",
     img: steak,
     itemName: "Steak",
     itemType:"American",
     itemTime:"6 min",
     itemDescription:"This is a 2 oz plant-based steak with roasted vegetables.",
     itemiteme:"$12.00",
    },
    {
     id: 3,   
     type: "food",
     img: salad,
     itemName: "Salad",
     itemType:"Greek",
     itemTime:"3 mins",
     itemDescription:"This is a huge Greek greens and veggie mixed salad with homemade dressing.",
     itemPrice:"$8.00",
    },
    {
     id: 4,
     type: "food",   
     img: noodles,
     itemName: "Noodles",
     itemType:"Asian-Fusion",
     itemTime:"8 mins",
     itemDescription:"A bowl of East-Asian noodles with South-Asian veggies in a homemade sauce.",
     itemPrice:"$10.00",
    },
    {
     id: 5,
     type: "food",   
     img: masala,
     itemName: "masala",
     itemType:"Indian",
     itemTime:"10 mins",
     itemDescription:"Chickpeas and a spicy tomato sauce with ten Indian spices",
     itemPrice:"$9.00",
    },
    {
     id: 6,
     type: "food",   
     img: tacos,
     itemName: "tacos",
     itemType:"Mexican",
     itemTime:"6 min",
     itemDescription:"Three tacos with five vegetable of the week, special sauce, and avocado.",
     itemPrice:"$9.00",
    },
]

export default MenuData 