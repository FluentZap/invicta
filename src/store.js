export const trainingActions = ['Nourish', 'Sleep', 'Get Buff', 'Acrobatics']
export const combatActions = ['Light Attack', 'Heavy Attack', 'Stun', 'Aggressive', 'Evasive', 'Defensive']

export const InitStats = {
    currentStats: {
        health: 0,
        energy: 0,
        charisma: 0,
        strength: 0,
        dexterity: 0,
        nourishment: 0,
    },
    maxStats: {
        health: 100,
        energy: 100,
        charisma: 100,
        strength: 100,
        dexterity: 100,
        nourishment: 100,
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