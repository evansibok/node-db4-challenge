exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          recipe_id: "1",
          order_number: "1",
          step_details: `Slice the chorizo and tip into a large saucepan over a medium heat. 
            Fry gently for 5 mins or until starting to turn dark brown. Add the tomatoes and butter beans, 
            bring to the boil, then simmer for 10 mins. Swirl through the pesto, season lightly and 
            ladle into four bowls.`
        },
        {
          recipe_id: "2",
          order_number: "1",
          step_details: `Blitz the roasted red pepper with the olive oil, 
            walnuts and garlic in a food processor, season well and set aside.`
        },
        {
          recipe_id: "2",
          order_number: "2",
          step_details: `Bring a pan of salted water to the boil, add the pasta and cook for 1 min 
          less than the pack instructions and drain, reserving a ladleful of cooking water. Tip the 
          pasta back into the pan, along with the reserved cooking water and red pepper sauce, and 
          return to the heat to warm through. Tip the pasta into a bowl and top with the parmesan and 
          some chopped toasted walnuts. Season and serve.`
        },
        {
          recipe_id: "3",
          order_number: "1",
          step_details: `Remove the outer leaves from the cauliflower, cut off the stalk and roughly 
          chop, then cut the head into small florets. Toss a quarter of the florets in 1 tbsp oil and 1 
          tsp of the fennel seeds, season well, then tip into a roasting tin and set aside.`
        },
        {
          recipe_id: "3",
          order_number: "2",
          step_details: `Heat oven to 220C/200C fan/gas 7. Heat ½ tbsp oil in a saucepan over a medium 
          heat and add the remaining fennel seeds, toast for 2 mins, then add the lentils and the remaining 
          cauliflower. Stir in the curry paste, then add 1 litre water and bring to the boil. Simmer for 25 
          mins until the cauliflower is tender and the lentils are cooked through.`
        },
        {
          recipe_id: "3",
          order_number: "3",
          step_details: `Meanwhile, put the roasting tin of cauliflower in the oven and cook for 20 mins 
          until crisp and slightly charred. Tip the soup mixture into a food processor and blitz until smooth, 
          tip back into the pan to warm through, adding the lemon juice and a little water if it's too thick. 
          Tip into bowls and top with the crispy cauliflower and fennel seeds to serve.`
        }
      ]);
    });
};