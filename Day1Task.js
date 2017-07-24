Episode 1

The output of this episode will be "My name is Keith". This is because the variable name was declared as 'Keith', the console was then instructed to output the name to the console and print.




Episode 2

The output of this episode will be 3. This is because we declare the score as being 3 within the function. The global score of 5 is overwritten, if we did not declare var score = 3 within the function then it would return the global score of 5.





Episode 3

The output of this episode will be 0:Ducks, 1:Dogs, 2:Lions. This is because as with above, the variables of myAnimals is declared within the function, again overwritting the global name. We get the O:, 1:, 2: next to the animals as we have directed that it should contain the animals id starting at 0 and increment by 1 per animal.





Episode 4

The output of this episode will be Jay, Val, Harvey, Rick and Suspect three is Keith. This is because within the function we have told it to produce suspectOne, suspectTwo, suspectThree and SuspectFour. It replaces the original suspectThree with Harvey as we have directed it to be changed within the function. 

It then prints out Suspect three is Keith, this is because we have declared this to be printed outwith the function where we state that suspectThree should be changed, therefore it takes the original suspectThree of Keith.



Episode 5

The output of this episode with be 'Poirot'. This is because we have declared within the detectiveInfo function that the detective name is 'Poirot', again as previously this overrides the global name of 'Ace Ventura'. In this case it does not print out the output of the printName function as we have only returned detective.name, we have not asked it to output to the console.




Episode 6

The output of this episode will be 'the murderer is rick'. This is because we are calling the console.log outwith the function, therefore Rick is the only murderer available to the console.log.





Episode 7

var mySports = ['Badminton', 'Tennis', 'Netball'];

var listSports = function() {
  var mySports = ['Football', 'Squash', 'Athletics'];
}

listSports();
console.log( "My favourite sports are: " + mySports );



