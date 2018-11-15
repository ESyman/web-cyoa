/* This is a starter with examples.  Remove the examples once you have made your own versions. */

'use strict'
// variables
var messages = [];
var choices;
var answer;
// story function variables
var roomLocation = 0;
//var points;
var skeletonTalk = 1;
//var back = false;
var gotClip = false;
var gotKey = false;
var haveKey = false;
var gotPoster = false;
var dungeonDoor = false;
var mainDoor = false;
var gotGloves = false;
var gotGiantKey = false;
var norRoomDoorOne = false;
var eastDoor = false;

function checkAnswers(answer) {
      switch(answer) {
        //moving commands
        case "CONTINUE":
          switch(roomLocation) {
            case 0:
              dungeonRoom();
              break;
            case 1:
              mainRoom();
              break;
            case 2:
              northmostRoom();
              break;
            case 3:
              eastRoom();
              /*switch(roomLocation) {
            case 0:
              dungeonRoom();
              break;
            case 1:
              mainRoom();
              break;
            case 2:
              northmostRoom();
              break;
            case 3:
              eastRoom();
          }*/
          }
          break;
        // dungeon room
        case "LOOK DOOR":
            lookDungeonDoor();
            break;
        case "OPEN DOOR":
          switch(roomLocation){
            case 1:
              if (dungeonDoor == false) openDungeonDoor();
          else mainRoom();
              break;
            case 4:
              northmostRoom();
          }
            
          break;
        case "LOOK SKELETON":
          lookSkeleton();
          break;
        case "GET SKELETON":
          getSkeleton();
          break;
        case "TALK SKELETON":
          talkSkeleton();
          break;
        case "LOOK POSTER":
          lookPoster();
          break;
        case "PEEL OFF POSTER":
          peelPoster();
          break;
        case "LOOK KEY":
          lookKey();
          break;
        case "GET KEY":
          getKey();
          break;
          //main room
        case "LOOK NORTHMOST DOOR":
          lookNorthMainDoor();
          break;
        case "OPEN NORTHMOST DOOR":
          openNorthMainDoor();
          break;
        case "LOOK GLOVES":
          lookGloves();
          break;
        case "GET GLOVES":
          getGloves();
          break;
          //northmost room
        case "LOOK EASTWARDS DOOR":
          lookEastwardsDoor();
          break;
        case "OPEN EASTWARDS DOOR":
          openEastwardsDoor();
          break;
        case "LOOK WESTWARDS DOOR":
          lookWestwardsDoor();
          break;
        case "OPEN WESTWARDS DOOR":
          openWestwardsDoor();
          break;
          //east room
        case "LOOK GIANT KEY":
          lookGiantKey();
          break;
        case "GET GIANT KEY":
          getGiantKey();
          break;
          //other
        case "LOOK SOUTHMOST DOOR":
          switch(roomLocation){
            case 2:
              lookSouthMainDoor();
              break;
            case 3:
              lookSouthNorDoor();
          }
          break;
        case "OPEN SOUTHMOST DOOR":
          switch(roomLocation){
            case 2:
              openSouthMainDoor();
              break;
            case 3:
              mainRoom();
          }
          break;
        case "HELP":
          switch(roomLocation) {
            case 1:
              story("You find yourself stuck in a dungeon room. A SKELETON sits nearby you. A POSTER is on the wall. There’s a KEY nearby.");
              break;
            case 2:
              story("You're now in what appears to be somebody's basement. Perhaps that last room wasn't a dungeon but a really poorly kept room. There's a door to the SOUTH leading back into said room, as well as another door to the NORTH. There are some GLOVES nearby.");
              break;
            case 3:
              story("You find yourself in another generic room. There's a locked DOOR to the east and another DOOR to the west. There's a DOOR to the south in which you came from.");
              break;
            case 4:
              story("You find yourself in an empty room, minus the GIANT KEY in the middle of it. The door leads back to the room you came from.");
          }
          break;
        case "GO BACK":
          switch(roomLocation) {
            case 1:
              dungeonRoom();
              break;
            case 2:
              mainRoom();
              break;
            case 3:
              northmostRoom();
          }
          break;
        case "Y":
          intro();
          gotClip = false;
          gotKey = false;
          haveKey = false;
          gotPoster = false;
          dungeonDoor = false;
          mainDoor = false;
          gotGloves = false;
          gotGiantKey = false;
          norRoomDoorOne = false;
          eastDoor = false;
          break;
      }
}
  
//story functions
function intro(){
  story("You are HERO!");
  choices = ["CONTINUE"];
  answer = setOptions(choices);
}

//room functions
//dungeon room
function dungeonRoom(){
  roomLocation = 1;
story("You find yourself stuck in a dungeon room. A SKELETON sits nearby you. A POSTER is on the wall. There’s a KEY nearby.");
choices = ["LOOK DOOR", "OPEN DOOR", "LOOK SKELETON", "GET SKELETON", "TALK SKELETON", "LOOK POSTER", "LOOK KEY", "GET KEY", "HELP"];
answer = setOptions(choices);
}
function lookDungeonDoor(){
story("It’s a door. What else do you think it is?");
}
function openDungeonDoor(){
  if (gotKey == false) story("You attempt to open the door by doing nothing. Maybe you should find a key.");
  else if (dungeonDoor == false){ 
    story("You use the key, only to find out it doesn’t fit. In your avail, you try moving the knob and find out that it’s already unlocked. I guess that’s one way to go through it.");
    dungeonDoor = true;
    choices = ["CONTINUE"];
    answer = setOptions(choices);
  } else mainRoom();
}
function lookSkeleton(){
story("It’s a very cheap looking skeleton, like somebody bought it from a thrift shop");
}
function getSkeleton(){
  if (gotClip == false) {
story("You try to grab the skeleton but you find out that it’s stuck to the ground. On the plus side, you find a clip in it and you pick it up.");
    gotClip = true;
  } else story("You try to grab the skeleton, yet again, although nothing happens as it’s stuck to the ground.");
}
function talkSkeleton(){
  if (skeletonTalk < 3){
    story("You decide to waste your time and talk to a cheap inanimate prop. Great going.");
    skeletonTalk++;
  } else if (skeletonTalk == 3) {
    story("You get so invested in talking to the fake skeleton to the point where you soon go mad from insanity and pass out. GAME OVER. Play again?")
    choices = ["Y", "N"];
    answer = setOptions(choices);
  }
}
function lookPoster(){
  if (gotPoster == false){
    story("It’s a very generic looking poster for… something. You can’t quite make up your mind on what it’s exactly about. A corner of it seems to be peeling off the wall. Perhaps it’s hiding something?");
    choices = ["PEEL OFF POSTER", "GO BACK"];
    answer = setOptions(choices);
  } else story("The area where the poster used to be is just some remaining bits of torn paper.")
}
function peelPoster(){
  story("You peel off the poster and look at what’s behind it, and… it’s nothing. It’s just the wall. Oh well, at least you have that poster with you.");
  gotPoster = true;
  choices = ["GO BACK"];
  answer = setOptions(choices)
}
function lookKey(){
  if (gotKey == false) story("Well… it’s a key. What do you think it does?");
  else story("You mean the one you already grabbed?")
}
function getKey(){
  if (gotKey == false) {
    story("You grab the key! You're one step closer to escaping this room of boredom.");
    gotKey = true;
  } else story("How do you get a key you already got?")
}
//main room functions
function mainRoom(){
  roomLocation = 2;
story("You're now in what appears to be somebody's basement. Perhaps that last room wasn't a dungeon but a really poorly kept room. There's a door to the SOUTH leading back into said room, as well as another door to the NORTH. There are some GLOVES nearby.");
choices = ["LOOK SOUTHMOST DOOR", "OPEN SOUTHMOST DOOR", "LOOK NORTHMOST DOOR", "OPEN NORTHMOST DOOR", "LOOK GLOVES", "GET GLOVES", "HELP"];
answer = setOptions(choices);
}
function lookSouthMainDoor(){
  story("It's the door that'll take you back into... well, that room you started in.");
}
function openSouthMainDoor(){
  dungeonRoom();
}
function lookNorthMainDoor(){
  story("Did you forget what doors look like or are you just intentionally wasting your time?");
}
function openNorthMainDoor(){
  if (gotClip == false && mainDoor == false) story("It's locked, and that key isn't doing any good. Perhaps there's something else of use in another room.");
  else if (mainDoor == false && gotClip == true){ 
    story("You unlock the door using the clip to pickpocket it. Unfortunately, you broke the clip in the process, but hey, the door's unlocked!");
    mainDoor = true;
    choices = ["CONTINUE"];
    answer = setOptions(choices);
  } else northmostRoom();
}
function lookGloves(){
  if (gotGloves == false) {
    story("They're fairly hard-duty gloves and look like they could lift up something heavy.");
    gotKey = true;
  } else story("Did you forget they're on your hands or something?")
}
function getGloves(){
  if (gotGloves == false) {
    story("You swipe the gloves and put them on, feeling a lot more powerful. Okay, not a lot but you get what we mean.");
    gotGloves = true;
  } else story("So you're putting on gloves you already have on?")
}
//northmost Room
function northmostRoom(){
  roomLocation = 3;
story("You find yourself in another generic room. There's a locked DOOR to the east and another DOOR to the west. There's a DOOR to the south in which you came from.");
choices = ["LOOK SOUTHMOST DOOR", "OPEN SOUTHMOST DOOR", "LOOK EASTWARDS DOOR", "OPEN EASTWARDS DOOR", "LOOK WESTWARDS DOOR", "OPEN WESTWARDS DOOR", "HELP"];
answer = setOptions(choices);
}
function lookSouthNorDoor(){
  story("Gee, I wonder where it'll take you.");
}
function lookEastwardsDoor(){
  story("It's a door that has a keypad on it.")
}
function openEastwardsDoor(){
  if (gotPoster == false) story("The door is locked with a numberpad on it. You try to figure out it by pressing random numbers but it does nothing. Perhaps something has the code.")
  else if (gotPoster == true && eastDoor == false) {
    story("You decide to look at the poster, and it has a code on it! You enter it in and the door unlocks itself. Congrats.")
    eastDoor = true;
    choices = ["CONTINUE"];
    answer = setOptions(choices);
  } else if (eastDoor == true) eastRoom();
}
function lookWestwardsDoor(){
  if (norRoomDoorOne == false) story("Well... it's a door with a keyhole on it. What do you think it is by now?")
  else story("Well... it's a door with a giant keyhole on it. What do you think it is by now?")
}
function openWestwardsDoor(){
  if (norRoomDoorOne == false){
    story("You open the door with the key... Only to find out there's another door with a larger keyhole. Drats! You were so close.")
    norRoomDoorOne = true;
  } else if (norRoomDoorOne == true && gotGiantKey == false) story("There's another door with a giant keyhole in it. Maybe a giant key would fit in it.")
  else if (norRoomDoorOne == true && gotGiantKey == true){
    story("You fit the giant key into the hole and open the door. You're outside of the basement and can escape now!\
          YOU WIN! Play again?")
    choices = ["Y", "N"];
    answer = setOptions(choices);
  }
}
//east room
function eastRoom(){
  roomLocation = 4;
story("You find yourself in an empty room, minus the GIANT KEY in the middle of it. The door leads back to the room you came from.");
choices = ["LOOK GIANT KEY", "GET GIANT KEY", "LOOK DOOR", "OPEN DOOR", "HELP"];
answer = setOptions(choices);
}
function lookGiantKey(){
  if (gotGiantKey == false) story("It's a really large key. Duh.")
  else story ("It's a really large key and you're holding it.")
}
function getGiantKey(){
  if (gotGloves == false && gotGiantKey == false) story("You try to lift it up but it's too heavy for you to hold! Maybe you need to get a buff...")
  else if (gotGloves == true && gotGiantKey == false){
  story("Thanks to your gloves, you lift up the key with ease. Now where should you put it?")
  gotGiantKey = true;
} else story("You mean the one you're already holding?")
  }
