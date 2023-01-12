// -- Village88 MAP
var world1 = [
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8],
    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,8,2,3,2, 8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,8],
    [8,2,10,10,10, 2,8,2,8,8, 2,8,2,10,10, 10,2,10,2,10, 2,8,2,10,2, 8,2,10,10,10, 10,2,10,10,10, 10,2,10,10,10, 10,2,8],
    [8,3,10,10,10, 2,8,2,8,8, 2,8,2,10,10, 10,2,10,2,10, 2,8,2,10,2, 8,2,10,10,10, 10,2,10,2,2, 2,2,2,2,2, 2,2,8],
    [8,2,10,10,10, 2,8,2,8,8, 2,8,2,10,10, 10,2,10,2,10, 2,8,2,10,2, 8,2,2,2,2, 2,2,10,2,10, 10,2,10,10,10, 10,3,8],

    [8,2,2,2,2, 2,8,2,8,8, 2,8,2,10,10, 10,2,10,2,10, 2,2,2,10,2, 2,2,10,10,10, 10,2,10,2,10, 10,2,2,2,2, 2,2,8],
    [8,2,10,10,10, 2,8,2,2,2, 2,8,2,10,10, 10,2,10,2,10, 10,10,2,10,10, 10,2,10,2,2, 10,2,10,2,10, 10,2,10,10,10, 10,2,8],
    [8,2,10,10,10, 2,2,2,8,8, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,8],
    [8,2,10,10,10, 10,10,2,8,8, 2,10,10,10,10, 2,8,8,2,8, 2,2,10,10,2, 10,10,2,2,2, 10,10,0,10,10, 2,2,8,8,8, 8,2,8],
    [8,2,2,10,10, 10,10,2,2,3, 2,10,10,10,10, 2,8,8,2,8, 2,10,10,2,2, 2,10,10,2,10, 10,0,0,0,10, 10,2,8,8,8, 8,2,8],

    [8,8,2,2,10, 10,10,10,2,2, 2,2,2,2,2, 2,8,8,2,8, 2,10,10,2,2, 2,10,10,2,10, 10,0,0,0,10, 10,2,2,2,2, 2,2,8],
    [8,8,8,2,10, 10,10,10,2,2, 10,10,10,10,2, 2,2,2,2,8, 2,2,10,10,3, 10,10,2,2,2, 10,10,10,10,10, 2,2,8,8,8, 8,2,8],
    [8,2,2,2,2, 2,2,2,2,2, 10,10,10,10,2, 8,2,8,2,8, 2,10,10,2,2, 2,10,10,2,10, 10,2,2,2,10, 10,2,8,8,8, 8,2,8],
    [8,2,8,8,2, 10,10,10,10,10, 10,10,10,2,2, 8,2,8,2,8, 2,10,10,2,8, 2,10,10,2,2, 2,2,8,2,2, 2,2,8,8,8, 8,2,8],
    [8,3,8,8,2, 2,10,10,10,10, 10,10,2,2,8, 8,2,8,2,8, 2,10,10,2,8, 2,10,10,2,10, 10,2,8,2,10, 10,2,2,2,2, 2,3,8],

    [8,2,2,2,2, 2,2,10,10,10, 10,2,2,8,8, 8,2,8,2,8, 2,10,10,2,2, 2,10,10,2,10, 10,2,3,2,10, 10,2,8,8,8, 8,2,8],
    [8,2,8,8,8, 8,2,2,10,10, 2,2,8,8,8, 8,2,8,2,8, 2,2,10,10,2, 10,10,2,2,2, 10,10,10,10,10, 2,2,8,8,8, 8,2,8],
    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,3,8,2,2, 2,2,2,2,2, 2,2,2,8,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,8],
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8]
];


// -- CLASSIC MAP
var world2 = [
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8],
    [8,2,2,2,2, 2,2,2,2,2, 8,2,2,2,2, 2,2,2,2,2, 8],
    [8,2,11,11,11, 2,11,11,11,2, 8,2,11,11,11, 2,11,11,11,2, 8],
    [8,3,11,11,11, 2,11,11,11,2, 8,2,11,11,11, 2,11,11,11,3, 8],
    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 8],

    [8,2,11,11,11, 2,11,2,11,11, 11,11,11,2,11, 2,11,11,11,2, 8],
    [8,2,2,2,2, 2,11,2,2,2, 11,2,2,2,11, 2,2,2,2,2, 8],
    [8,8,8,8,8, 2,11,11,11,2, 11,2,11,11,11, 2,8,8,8,8, 8],
    [0,0,0,0,8, 2,11,2,2,2, 2,2,2,2,11, 2,8,0,0,0, 0],
    [8,8,8,8,8, 2,11,2,11,11, 0,11,11,2,11, 2,8,8,8,8, 8],

    [2,2,2,2,2, 2,2,2,11,0, 0,0,11,2,2, 2,2,2,2,2, 2],
    [8,8,8,8,8, 2,11,2,11,0, 0,0,11,2,11, 2,8,8,8,8, 8],
    [0,0,0,0,8, 2,11,2,11,11, 11,11,11,2,11, 2,8,0,0,0, 0],
    [0,0,0,0,8, 2,11,2,2,2, 2,2,2,2,11, 2,8,0,0,0, 0],
    [8,8,8,8,8, 2,11,2,11,11, 11,11,11,2,11, 2,8,8,8,8, 8],

    [8,2,2,2,2, 2,2,2,2,2, 11,2,2,2,2, 2,2,2,2,2, 8],
    [8,2,11,11,11, 2,11,11,11,2, 11,2,11,11,11, 2,11,11,11,2, 8],
    [8,2,2,2,11, 2,2,2,2,2, 2,2,2,2,2, 2,11,2,2,2, 8],
    [8,8,8,2,11, 2,11,2,11,11, 11,11,11,2,11, 2,11,2,8,8, 8],
    [8,3,2,2,2, 2,11,2,2,2, 11,2,2,2,11, 2,2,2,2,3, 8],

    [8,2,11,11,11, 2,11,11,11,2, 11,2,11,11,11, 2,11,11,11,2, 8],
    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 8],
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8]
];


// -- GOOGLE PACMAN MAP
var world3 = [
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8],
    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,8,2,2, 2,8,2,2,2, 8,8,8,2,2, 2,2,8],
    [8,3,8,2,11, 11,11,11,2,8, 8,8,8,8,8, 8,2,2,2,2, 2,2,2,14,2, 2,2,2,2,8, 8,3,8],
    [8,2,2,2,11, 2,2,2,2,2, 2,2,2,2,2, 2,2,11,11,0, 11,11,2,14,2, 12,12,12,2,2, 2,2,8],
    [8,8,8,2,11, 2,11,11,2,12, 12,12,2,13,13, 13,2,11,0,0, 0,11,2,14,2, 12,12,12,2,8, 8,8,8],

    [0,0,8,2,11, 2,3,11,2,12, 0,12,2,13,0, 13,2,11,11,11, 11,11,2,14,2, 2,2,2,2,8, 0,0,0],
    [8,8,8,2,11, 11,11,11,2,12, 12,12,2,13,13, 13,2,2,2,2, 2,2,2,14,2, 12,12,12,2,8, 8,8,8],
    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,11,11,11, 11,11,2,2,2, 2,2,2,2,2, 2,2,8],
    [8,2,8,8,2, 8,8,8,8,2, 8,2,8,8,8, 8,2,2,2,11, 2,2,2,8,8, 8,8,2,8,8, 8,2,8],
    [8,3,2,2,2, 2,2,2,2,2, 8,2,2,2,2, 2,2,8,2,2, 2,8,2,2,2, 2,2,2,2,2, 2,3,8],

    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8]
];


// -- CODING DOJO MAP
var world4 = [
    [0,0,0,0,0, 0,0,0,0,0, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,0,0, 0,0,0,0,0, 0,0,0],
    [0,0,0,0,0, 0,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,0,0,0, 0,0,0],
    [0,0,0,0,0, 0,0,0,0,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,0, 0,0,0,0,0, 0,0,0],
    [8,8,8,8,8, 8,8,8,8,8, 8,2,2,2,2, 2,3,2,2,2, 2,2,8,8,8, 8,8,8,8,8, 8,8,8],
    [8,2,2,2,2, 2,2,2,2,8, 8,2,8,8,8, 8,2,8,8,8, 8,2,8,8,2, 2,2,2,2,2, 2,2,8],

    [8,8,3,8,8, 8,8,8,2,8, 8,2,8,8,8, 8,2,8,8,8, 8,2,8,8,2, 8,8,8,8,8, 3,8,8],
    [0,8,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,8,0],
    [0,8,2,10,10, 10,10,2,2,10, 2,10,2,2,10, 2,10,2,2,10, 2,10,2,2,10, 2,10,10,10,10, 2,8,0],
    [0,8,2,10,2, 2,2,2,10,10, 2,10,10,2,10, 2,10,10,2,10, 2,10,10,2,10, 2,10,2,2,2, 2,8,0],
    [0,8,2,10,2, 8,8,2,2,2, 3,2,2,2,10, 2,10,10,2,2, 2,10,10,10,10, 2,10,2,10,10, 2,8,0],

    [0,8,2,10,2, 8,8,2,10,10, 2,10,10,2,10, 2,10,10,2,10, 2,10,3,10,10, 2,10,2,10,10, 2,8,0],
    [0,8,2,10,2, 2,2,2,2,10, 2,10,2,2,10, 2,10,10,2,10, 2,10,2,2,10, 2,10,2,10,10, 2,8,0],
    [8,8,2,10,10, 10,10,2,2,2, 2,2,2,2,10, 2,10,2,2,10, 2,10,2,2,2, 2,4,2,2,2, 2,8,8],
    [8,2,2,2,2, 2,2,2,2,8, 8,8,2,2,2, 2,2,2,2,2, 2,2,2,2,16, 16,0,16,16,2, 2,2,8],
    [8,2,8,8,8, 8,8,2,8,8, 8,8,8,2,8, 8,8,2,8,8, 8,2,16,16,16, 16,6,16,16,16, 16,2,8],

    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,12,12, 5,0,7,12,12, 2,2,8],
    [8,2,10,10,2, 10,10,2,2,2, 10,10,10,10,2, 2,8,8,8,2, 10,10,2,2,12, 0,0,0,12,2, 2,8,8],
    [8,2,10,10,2, 2,10,10,2,10, 10,2,2,10,10, 2,8,8,8,2, 2,2,2,12,12, 12,12,12,12,12, 2,2,8],
    [8,2,10,10,2, 2,10,10,2,10, 10,2,2,10,10, 2,8,8,8,2, 10,10,2,2,12, 2,3,2,12,2, 2,2,8],
    [8,2,2,2,2, 3,10,10,2,2, 2,2,2,2,2, 2,2,3,2,2, 10,10,2,2,2, 2,2,2,2,2, 8,2,8],

    [8,2,10,10,2, 2,10,10,2,10, 10,2,2,10,10, 2,10,10,2,2, 10,10,2,2,12, 2,2,2,12,2, 8,2,8],
    [8,2,10,10,2, 2,10,10,2,10, 10,2,2,10,10, 2,10,10,2,2, 10,10,2,2,12, 8,8,8,12,2, 8,2,8],
    [8,2,10,10,2, 10,10,2,2,2, 10,10,10,10,2, 2,2,10,10,10, 10,2,2,2,12, 2,8,2,12,2, 8,2,8],
    [8,2,2,2,2, 2,2,2,8,2, 2,2,2,2,2, 8,2,2,2,2, 2,2,8,2,2, 2,8,2,2,2, 2,2,8],
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8]
];


// -- HACKER HERO MAP
var world5 = [
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8],
    [8,2,2,2,2, 2,2,2,2,2, 2,8,2,2,2, 2,2,2,2,2, 2,2,2,8,2, 2,2,2,2,2, 2,2,2,2,8],
    [8,2,8,8,8, 8,8,8,8,8, 2,8,2,8,8, 8,8,8,8,8, 8,8,2,8,2, 8,8,8,8,8, 8,8,8,2,8],
    [8,3,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,3,8],
    [8,8,2,14,2, 2,14,2,14,14, 14,14,2,14,14, 14,14,2,14,2, 2,14,2,14,14, 14,14,2,14,14, 14,14,2,8,8],
    
    [0,8,2,14,2, 2,14,2,14,0, 0,14,2,14,2, 2,2,2,14,2, 14,2,2,2,2, 2,2,2,14,14, 14,14,2,8,0],
    [0,8,2,14,14, 14,14,2,14,14, 14,14,2,14,3, 8,8,2,14,2, 14,3,8,14,14, 14,14,2,2,2, 2,2,2,8,0],
    [0,8,2,14,2, 2,14,2,14,2, 2,14,2,14,2, 2,2,2,14,2, 14,2,2,2,2, 2,2,2,14,14, 14,2,2,8,0],
    [8,8,2,14,2, 2,14,2,14,2, 2,14,2,14,14, 14,14,2,14,2, 2,14,2,14,14, 14,14,2,14,2, 14,14,2,8,8],
    [8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,8],

    [8,2,8,8,8, 8,8,8,8,2, 8,8,8,8,8, 2,8,8,8,8, 8,8,2,8,8, 8,8,8,8,2, 8,8,8,2,8],
    [8,2,2,2,2, 8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,8],
    [8,2,14,14,2, 8,2,14,14,2, 14,14,2,14,14, 14,14,2,14,14, 14,0,14,14,2, 2,15,2,15,15, 2,15,15,2,8],
    [8,2,2,2,2, 2,2,14,14,2, 14,14,2,14,14, 14,14,2,14,14, 0,0,0,14,14, 2,15,2,15,2, 2,2,2,2,8],
    [8,2,14,14,2, 2,2,14,14,2, 14,14,2,2,2, 2,2,2,14,14, 0,0,0,14,14, 2,15,2,15,2, 15,2,15,2,8],

    [8,2,14,14,14, 14,14,14,14,2, 14,14,2,14,14, 14,14,2,14,14, 14,14,14,14,2, 2,15,15,15,2, 15,2,15,2,8],
    [8,2,14,14,14, 14,14,14,14,2, 14,14,2,14,14, 14,14,3,2,2, 2,2,2,2,2, 2,15,2,15,3, 15,15,15,2,8],
    [8,2,14,14,2, 2,2,14,14,2, 14,14,2,2,2, 2,2,2,14,14, 2,14,14,2,2, 2,15,2,15,2, 15,2,15,2,8],
    [8,2,14,14,2, 3,2,2,2,2, 14,14,2,14,14, 14,14,2,14,14, 2,14,14,14,2, 2,2,2,2,2, 15,2,15,2,8],
    [8,2,14,14,2, 2,2,14,14,2, 14,14,2,14,14, 14,14,2,14,14, 2,2,14,14,14, 2,15,15,2,15, 15,2,15,2,8],

    [8,2,2,2,2, 8,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,8],
    [8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8, 8,8,8,8,8]
];


// Randomize the current map for every refresh 
var worlds = [world1, world2, world3, world4, world5]
var world = worlds[Math.floor(Math.random() * worlds.length)];
// var world = worlds[2]

// Location of ALL Characters inside the map
var characters = {
    pacmanX: 1,
    pacmanY: 1,
    blinkyX: 1,
    blinkyY: 1,
    inkyX: 1,
    inkyY: 1,
    pinkyX: 1,
    pinkyY: 1,
    clydeX: 1,
    clydeY: 1,
    gateX: 1,
    gateY: 1,
    mapTitle: "Default Title"
}


var totalScore = 5; // +5 for the coin behind Blinky
var currentScore = 0;

// Changes the location of pacman for every map
function characterLocation() {
    if (world == worlds[0]) {
        characters.pacmanX = 32;
        characters.pacmanY = 12;
        characters.blinkyX = 32;
        characters.blinkyY = 7;
        characters.inkyX = 31;
        characters.inkyY = 9;
        characters.pinkyX = 33;
        characters.pinkyY = 9;
        characters.clydeX = 32;
        characters.clydeY = 10;
        characters.gateX = 32;
        characters.gateY = 8;
        characters.mapTitle = "Village88 Map"
    }
    else if (world == worlds[1]) {
        characters.pacmanX = 10;
        characters.pacmanY = 13;
        characters.blinkyX = 13;
        characters.blinkyY = 8;
        characters.inkyX = 9;
        characters.inkyY = 10;
        characters.pinkyX = 11;
        characters.pinkyY = 10;
        characters.clydeX = 10;
        characters.clydeY = 11;
        characters.gateX = 10;
        characters.gateY = 9;
        characters.mapTitle = "Classic Map"
    }
    else if (world == worlds[2]) {
        characters.pacmanX = 19;
        characters.pacmanY = 6;
        characters.blinkyX = 19;
        characters.blinkyY = 2;
        characters.inkyX = 18;
        characters.inkyY = 4;
        characters.pinkyX = 20;
        characters.pinkyY = 4;
        characters.clydeX = 19;
        characters.clydeY = 4;
        characters.gateX = 19;
        characters.gateY = 3;
        characters.mapTitle = "Google Map"
    }
    else if (world == worlds[3]) {
        characters.pacmanX = 26;
        characters.pacmanY = 19;
        characters.blinkyX = 26;
        characters.blinkyY = 12;
        characters.inkyX = 25;
        characters.inkyY = 15;
        characters.pinkyX = 27;
        characters.pinkyY = 15;
        characters.clydeX = 26;
        characters.clydeY = 14;
        characters.gateX = 26;
        characters.gateY = 13;
        characters.mapTitle = "Coding Dojo Map"
    }
    else if (world == worlds[4]) {
        characters.pacmanX = 21;
        characters.pacmanY = 16;
        characters.blinkyX = 21;
        characters.blinkyY = 11;
        characters.inkyX = 20;
        characters.inkyY = 13;
        characters.pinkyX = 22;
        characters.pinkyY = 13;
        characters.clydeX = 21;
        characters.clydeY = 14
        characters.gateX = 21;
        characters.gateY = 12;
        characters.mapTitle = "Hacker Hero Map"
        ;
    }

    world[characters.pacmanY][characters.pacmanX] = 1;
    world[characters.blinkyY][characters.blinkyX] = 4;
    world[characters.inkyY][characters.inkyX] = 5;
    world[characters.pinkyY][characters.pinkyX] = 6;
    world[characters.clydeY][characters.clydeX] = 7;
    world[characters.gateY][characters.gateX] = 9;

    document.getElementById("mapTitle").innerHTML = characters.mapTitle;

}

characterLocation();

// display the world
function displayWorld() {
    var output = "";


    // 0 - Empty
    // 1 - Pacman
    // 2 - Coins
    // 3 - Cherry
    // 4-7 - Ghosts (BLinky, Inky, Pinky, Clyde)
    // 8 - Bricks
    // 9 - Gate
    
    for(var i=0; i < world.length; i++){
        output += "\n<div class='row'>";
        for(var j=0; j < world[i].length; j++){
            if(world[i][j] == 0) {
               output += "\n\t<div class='empty'></div>"
            }
            else if(world[i][j] == 1) {
               output += "\n\t<div id='pacman'></div>" ;
            }
            else if(world[i][j] == 2) {
               output += "\n\t<div class='coins'></div>";
            }
            else if(world[i][j] == 3) {
                output += "\n\t<div class='cherries'></div>";
            }
            else if(world[i][j] == 4) {
                output += "\n\t<div id='blinky' class='ghosts'></div>";
            }
            else if(world[i][j] == 5) {
                output += "\n\t<div id='inky' class='ghosts'></div>";
            }
            else if(world[i][j] == 6) {
                output += "\n\t<div id='pinky' class='ghosts'></div>";
            }
            else if(world[i][j] == 7) {
                output += "\n\t<div id='clyde' class='ghosts'></div>";
            }
             else if(world[i][j] >= 8) {
                if(world[i][j] == 9) {
                    output += "\n\t<div class='bricks gate pink-0'></div>";
                }
                else if(world[i][j] == 10) {
                    output += "\n\t<div class='bricks blue-0'></div>";
                }
                else if(world[i][j] == 11) {
                    output += "\n\t<div class='bricks blue-1'></div>";
                }
                else if(world[i][j] == 12) {
                    output += "\n\t<div class='bricks red-0'></div>";
                }
                else if(world[i][j] == 13) {
                    output += "\n\t<div class='bricks yellow-0'></div>";
                }
                else if(world[i][j] == 14) {
                    output += "\n\t<div class='bricks green-0'></div>";
                }
                else if(world[i][j] == 15) {
                    output += "\n\t<div class='bricks green-1'></div>";
                }
                else if(world[i][j] == 16) {
                    output += "\n\t<div class='bricks neutral-0'></div>";
                }
                else{
                    output += "\n\t<div class='bricks default'></div>";
                }
            }
        }
        output += "\n</div>";
    }
    document.getElementById("world").innerHTML += output;
}

displayWorld();

// Displays the current location of pacman
function displayPacman() {
    document.getElementById("pacman").style.top = "0px";
    document.getElementById("pacman").style.left = "0px";
}

// displayPacman();

// Updates the Map every time pacman gets a coin
function updateWorld() {
    document.getElementById("world").innerHTML = "";
    displayWorld();
}



// SCORE TOWN - Everything about SCORES

function countTotalSCore() {
    for(var i=0; i < world.length; i++) {
        for(var j=0; j < world[i].length; j++) {
            if(world[i][j] == 2) {
                totalScore += 5;
            }
            else if(world[i][j] == 3) {
                totalScore += 20;
            }
        }
    }
    console.log(totalScore)
}

countTotalSCore();

// Updates the Score 
function updateScore (y, x) {
    if (world[y][x] == 2) {
        currentScore += 5;
        world[y][x] = 0;
        document.getElementById("score").innerHTML = currentScore;
    }
    else if (world[y][x] == 3) {
        currentScore += 20;
        world[y][x] = 0;
        document.getElementById("score").innerHTML = currentScore;
    }
}

// Checks if you WON the Game 
function checkIfWon() {
    if (currentScore == totalScore) {
        setTimeout(function(){
            alert('CONGRATULATIONS, YOU WON!')
        }, 100)
    }
}



//  GHOST TOWN - everything about ghosts

class Ghost {
        constructor(idNumber, idName, speed,) {
            this.idNumber = idNumber;
            this.idName = idName;
            this.speed = speed;
            // this.timerId = NaN
        }
    }
    
    var ghosts = [
        new Ghost(4, 'blinky', 3),
        new Ghost(5, 'inky', 4),
        new Ghost(6, 'pinky', 5),
        new Ghost(7, 'clyde', 8)
    ]

// Write the function that Moves the ghost
function moveGhost(ghost) {
    
    // Get the Current & NextValue of Ghost's Location
    var currentValue;
    var nextValue;
    
    if(ghost.idNumber == 4) {
        currentValue = 2;
    } 
    else {
        currentValue = 0;
    }

    // Directions Values
    // 1 - Up
    // 2 - Down
    // 3 - Left
    // 4 - Right

    var directions = [1,2,3,4]
    // var direction = directions[3]

    setInterval(function() {
        var direction = directions[Math.floor(Math.random() * directions.length)];
        

        if(direction == 1) {
            if(world[characters[`${ghost.idName}Y`]-1][characters[`${ghost.idName}X`]] < 4) {
                // Gets the Next Value of a Ghost
                nextValue = world[characters[`${ghost.idName}Y`]-1][characters[`${ghost.idName}X`]]
                // Changes the Position of the Ghost for X|Y Axis
                characters[`${ghost.idName}Y`]--;
                // Changes the Locations where Pacman left, with the 'currentValue'
                world[characters[`${ghost.idName}Y`]+1][characters[`${ghost.idName}X`]] = currentValue;
                // Update the 'currentValue' with the 'nextValue'
                currentValue = nextValue;
            }
        }
        else if(direction == 2) {
            if(world[characters[`${ghost.idName}Y`]+1][characters[`${ghost.idName}X`]] < 4) {
                nextValue = world[characters[`${ghost.idName}Y`]+1][characters[`${ghost.idName}X`]]
                characters[`${ghost.idName}Y`]++;
                world[characters[`${ghost.idName}Y`]-1][characters[`${ghost.idName}X`]] = currentValue;
                currentValue = nextValue;
            }       
        }
        else if(direction == 3) {
            if(world[characters[`${ghost.idName}Y`]][characters[`${ghost.idName}X`]-1] < 4) {
                nextValue = world[characters[`${ghost.idName}Y`]][characters[`${ghost.idName}X`]-1]
                characters[`${ghost.idName}X`]--;
                world[characters[`${ghost.idName}Y`]][characters[`${ghost.idName}X`]+1] = currentValue;
                currentValue = nextValue;
            }
        }
        else if(direction == 4) {
            if(world[characters[`${ghost.idName}Y`]][characters[`${ghost.idName}X`]+1] < 4) {
                nextValue = world[characters[`${ghost.idName}Y`]][characters[`${ghost.idName}X`]+1]
                characters[`${ghost.idName}X`]++;
                world[characters[`${ghost.idName}Y`]][characters[`${ghost.idName}X`]-1] = currentValue;
                currentValue = nextValue;
            }         
        }
        else {
            direction = directions[Math.floor(Math.random() * directions.length)]
            console.log("function else")           
        }

        // If Ghost Collides to PACMAN - GAME OVER for PACMAN 
        if(currentValue == 1) {
            alert('GAME OVER! A Ghost eaten you.')
        }

        // Update the Location of Ghost in the Maze Array
        world[characters[`${ghost.idName}Y`]][characters[`${ghost.idName}X`]] = ghost.idNumber;
        updateWorld();
        
    }, 1000 / ghost.speed)
    
}

// Open the Gate After (3) seconds
// function openTheGates() {
//     setTimeout(function(){
//         world[characters.gateY][characters.gateX] = 0;
//         for (var i=0; i < ghosts.length; i++) {
//             moveGhost(ghosts[i])
//         }
//     }, 2500)
// }


function openTheGates() {
    setTimeout(function(){
        world[characters.gateY][characters.gateX] = 0;
    }, 2500)
}

openTheGates();

// Move ALL ghosts randomly
setTimeout(function(){
    for (var i=0; i < ghosts.length; i++) {
        moveGhost(ghosts[i])
    }
}, 1700)
// moveGhost(ghosts[0])



// Navigates Pacman through the Map
document.onkeydown = function(e) {
    world[characters.pacmanY][characters.pacmanX] = 0;

    if(e.keyCode === 40 && world[characters.pacmanY+1][characters.pacmanX] < 8) { //DOWN
        if(world[characters.pacmanY+1][characters.pacmanX] > 3 && world[characters.pacmanY+1][characters.pacmanX] < 8){
            alert('GAME OVER! You bumped to a Ghost.')
        }
        characters.pacmanY++;
        updateScore(characters.pacmanY, characters.pacmanX);
    }

    else if(e.keyCode === 38 && world[characters.pacmanY-1][characters.pacmanX] < 8) {  // UP
        if (world[characters.pacmanY-1][characters.pacmanX] > 3 && world[characters.pacmanY-1][characters.pacmanX] < 8) {
            alert('GAME OVER! You bumped to a Ghost.')
        }
        characters.pacmanY--;
        updateScore(characters.pacmanY, characters.pacmanX);
    }

    else if(e.keyCode === 39 && world[characters.pacmanY][characters.pacmanX+1] < 8) { // Right
        if (world[characters.pacmanY][characters.pacmanX+1] > 3 && world[characters.pacmanY][characters.pacmanX+1] < 8) {
            alert('GAME OVER! You bumped to a Ghost.')
        }
        characters.pacmanX++;
        updateScore(characters.pacmanY, characters.pacmanX);
        console.log(totalScore)
    }
    
    else if(e.keyCode === 37 && world[characters.pacmanY][characters.pacmanX-1] < 8) {  // Left
        if (world[characters.pacmanY][characters.pacmanX-1] > 3 && world[characters.pacmanY][characters.pacmanX-1] < 8) {
            alert('GAME OVER! You bumped to a Ghost.')
        }
        characters.pacmanX--;
        updateScore(characters.pacmanY, characters.pacmanX);
    }
    world[characters.pacmanY][characters.pacmanX] = 1;
    updateWorld();
    checkIfWon()
}