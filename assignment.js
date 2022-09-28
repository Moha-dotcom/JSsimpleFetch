Person  = [
    {
       name : "Mohamed Abdullai",
        DOB : Date.UTC(1992, 5, 3),
        age : 30,
        Address :
            {
                location: "733 84th Ave",
                City : "St Paul",
                State: "MN",
                Zipode: 38923
            }

        ,
        Education_Level: "Bachelor"

    },

   {
       name : "Ahmed Ismail",
       DOB : Date.UTC(1972, 5, 3),
       age : 50,
       Address : {
           location: "453 Van Buren Ave",
           City : "St Paul",
           State: "MN",
           Zipode: 67473
       }

       ,
       Education_Level: "High School"
   },
   {
       name : "Halio Ismail",
       DOB : Date.UTC(2011, 5, 3),
       age : 11,
       Address : {
           location: "453 Van Buren Ave",
           City : "St Paul",
           State: "MN",
           Zipode: 67473
       }

       ,
       Education_Level:"None"
   }

]

// Unshift

Person.unshift( {
   name : "Justin William",
   DOB : Date.UTC(1996, 5, 3),
   age : 26,
   Address :
       {
           location: "929 Denver Rd",
           City : "Denver ",
           State: "CO",
           Zipode: 43445
       }

   ,
   Education_Level: "Bachelor"

});

Push

Person.push( {
    name : "Justin William",
    DOB : Date.UTC(1996, 5, 3),
    Address : [
        {
            location: "929 Denver Rd",
            City : "Denver ",
            State: "CO",
            Zipode: 43445
        }
    ]
    ,
    Education_Level: "Bachelor"

});


Pop
Person.pop();


Person.forEach(person => {
    console.log(person)
})


const age = Person.filter(s => s.age < 18)
console.log(age)