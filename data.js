export const products = [
    { 
        flavors: [
            {name: "Calabresa"},
            {name: "Italiana"},
            {name: "Portuguesa"},
            {name: "Frango"},
            {name: "Queijo"},
            {name: "Chocolate"},
        ],
        products: [
            {type: "Broto", points: 5, price: 8},
            {type: "Pequena", points: 10, price: 10},
            {type: "Média", points: 15, price: 35},
            {type: "Grande", points: 20, price: 40},
            {type: "Familia", points: 30, price: 54},
        ],
        additionals: [
            {price: 6, drinks: "Refrigerante", additional: "Palmito +"},
            {price: 5, drinks: "Suco", additional: "Orégano +"},
            {price: 1, drinks: "Água", additional: "Cheddar +"},
            {price: 10, drinks: "Cerveja", additional: "Cebela +"},
            {price: 2, drinks: "Água com gás", additional: "Azeitonas + "},
            {price: 13, drinks: "Drink Especial", additional: "Catupiry +"}
        ],
        todayPromotion: [
            {price: 30, points: 50, day: 1, pizza: "Calabresa", ingredients: "mussarela, peito de peru, palmito, parmesão, oregano"},
            {price: 30, points: 50, day: 2, pizza: "Frango", ingredients: "mussarela, peito de peru, palmito, parmesão, oregano"},
            {price: 30, points: 50, day: 3, pizza: "Queijo", ingredients: "mussarela, peito de peru, palmito, parmesão, oregano"},
            {price: 30, points: 50, day: 4, pizza: "Chocolate", ingredients: "mussarela, peito de peru, palmito, parmesão, oregano"},
            {price: 30, points: 50, day: 5, pizza: "Portuguesa", ingredients: "mussarela, peito de peru, palmito, parmesão, oregano "},
            {price: 30, points: 50, day: 6, pizza: "Italiana", ingredients: "mussarela, peito de peru, palmito, parmesão, oregano"}
        ]
    }
]