export const trainingActions = [
    'Feast', 'Sleep', 'Kick Trees', 'Spar', 'Socialise', 'Medcus']

//Stun
//roll of 20 or higher gets a crit


//dex Change to evade and crit

//Strength Damage
//Accuracy Hit Chance/crit chance
//Speed action speeds
//Vitality Max Health
//Evasion evade hits
//XP levels up player

//For each level upgrade 




//d6
//d10

export const InitStats = {
    level: 1,
    xp: 0,
    currentStats: {
        energy: 0,
        nourishment: 0,
        accuracy: 0,
        health: 15,
        charisma: 0,
        strength: 0,
        speed: 0,
        vitality: 0,
        evasion: 0,
    },
    maxStats: {
        energy: 40,
        nourishment: 40,
        accuracy: 40,
        health: 15,
        charisma: 40,
        strength: 40,
        speed: 40,
        vitality: 40,
        evasion: 40,
    }    
}

export const playerAnimations = {
    idle: {
        frames: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
        ],
        time: 10,
        after: 'repeat'
    },
    attack: {
        frames: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
        ],
        time: 5,
        after: 'idle'
    },
    goToSleep: {
        frames: [
            { x: 1, y: 5 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
        ],
        time: 1,
        after: 'sleep'
    },
    sleep: {
        frames: [
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 5 },
            { x: 4, y: 5 },
        ],
        time: 5,
        after: 'repeat'
    },
    train: {
        frames: [
            { x: 0, y: 4 },
            { x: 1, y: 4 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
            { x: 4, y: 4 },
            { x: 4, y: 4 },
            { x: 3, y: 4 },
            { x: 2, y: 4 },
            { x: 1, y: 4 },
        ],
        time: 2,
        after: 'repeat'
    },
    decap: {
        frames: [
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
            { x: 4, y: 2 },
            { x: 5, y: 2 },
            { x: 0, y: 3 }
        ],
        time: 5,
        after: 'stop'
    },
    victory: {
        frames: [
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            { x: 4, y: 3 },
            { x: 5, y: 3 },
            { x: 4, y: 3 },
            { x: 3, y: 3 },
            { x: 4, y: 3 },
            { x: 5, y: 3 },
            { x: 4, y: 3 },
            { x: 3, y: 3 },
            { x: 2, y: 3 },
            { x: 1, y: 3 },
            // kick
            { x: 1, y: 4 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
            { x: 4, y: 4 },
            { x: 4, y: 4 },
            { x: 3, y: 4 },
            { x: 2, y: 4 },
            { x: 1, y: 4 },
            // fist pump
            { x: 3, y: 0 },
            { x: 2, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 2, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 0 },
        ],
        time: 1,
        after: 'idle'
    },
    nourish: {
        frames: [
            //   { x: 0, y: 4 },
            //   { x: 1, y: 4 },
            //   { x: 2, y: 4 },          
            { x: 5, y: 0 },
            { x: 3, y: 1 },
            //   { x: 4, y: 1 },
            //   { x: 2, y: 3 },

        ],
        time: 4,
        after: 'repeat'
    },
    taunt: {
        frames: [
            { x: 0, y: 4 },
            { x: 2, y: 3 },
        ],
        time: 4,
        after: 'repeat'
    },

}