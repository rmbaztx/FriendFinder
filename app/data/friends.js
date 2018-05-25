// friends.js for Friend Finder
// save your application's data inside of this file as an array of objects
//
// ===============================================================================
// DATA
// Below data will hold all of the friend candidates for whom we have data.
// Initially we just set it equal to a "dummy" potential friend.
// We will compare the user's responses to 10 questions to the candidates responses and 
// find the closest matches -- this will be done in survey.html?
// ===============================================================================

var friendArray = [
    {
      name: "Ahmed",
      photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  // Where do I require this?

  module.exports = friendArray;