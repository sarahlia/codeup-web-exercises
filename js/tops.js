const tops = [
    {
        "toppings": [
            "green peppers",
            "roasted red pepper",
            "black olives",
            "carmelized red onion",
            "mozzarella cheese",
            "mushrooms",
            "beef"
        ]
    },
    {
        "toppings": [
            "pineapple"
        ]
    },
    {
        "toppings": [
            "pepperoni"
        ]
    },
    {
        "toppings": [
            "pepperoni"
        ]
    },
    {
        "toppings": [
            "pepperoni"
        ]
    },
    {
        "toppings": [
            "chicken"
        ]
    },
    {
        "toppings": [
            "pepperoni"
        ]
    },
    {
        "toppings": [
            "four cheese"
        ]
    },
    {
        "toppings": [
            "italian sausage"
        ]
    },
    {
        "toppings": [
            "pepperoni"
        ]
    },
    {
        "toppings": [
            "bacon",
            "pepperoni",
            "pineapple"
        ]
    }
];

const uniqueToppings = tops.reduce( (toppings, top) => {
    top.toppings.forEach( (topping) => {
        if(!toppings.includes(topping)) {
            toppings.push(topping);
        }
    });
    return toppings;
}, []);
console.log(uniqueToppings);
