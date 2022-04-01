const tiles = document.querySelectorAll('.tiles')
const info = document.querySelector('p')

// Define the game

let turn = 'X'
let store =['-', '-', '-', '-','-','-','-','-','-']
// Array(9).fill('-')// Array,i need 9 items filled with blancks


//  changing whose turn it is to click

const switchTurn =()=>{

    if(turn ==='X'){
        turn ='O'
        return
    }
    turn ='X'
}

//  updating the game store
const updateStore=(index, turn)=>{
    store.splice(index, 1, turn)// starting from index, delete 1, replace it with turn

}


//  checking if a game has ended
const checkGameState=(turn)=>{
    // check if they are still positions on board
    if(store.every(position => position !='-')){// every returns true or false
        return 'Matrix Complete'
    }
    //check for Diagonal wins
    if((store[0]===turn)&& (store[4]===turn) &&(store[8] ===turn)){
        return true
    }else if((store[2]===turn) && (store[4]===turn) && (store[6]===turn)){
        return true
    }

    // Check for Horizontal wins
    if((store[0]===turn)&& (store[1]===turn) &&(store[2] ===turn)){
        return true
    }else if((store[3]===turn) && (store[4]===turn) && (store[5]===turn)){
        return true
    } else if((store[6]===turn) && (store[7]===turn) && (store[8]===turn)){
        return true
    }

    // Check for Vertical wins
    if((store[0]===turn)&& (store[3]===turn) &&(store[6] ===turn)){
        return true
    }else if((store[1]===turn) && (store[4]===turn) && (store[7]===turn)){
        return true
    } else if((store[2]===turn) && (store[5]===turn) && (store[8]===turn)){
        return true
    }

    // No match 
    return false
}



const handleGameOver =(playerTurn)=>{
    let gameOver = checkGameState(playerTurn)
    if(gameOver){
        setTimeout(()=>{
            if (typeof gameOver === 'string') {
                alert(`Game over\nDrawn Position reached`)
            } else {
                alert(`GAME OVER\n ${playerTurn} wins`)
            }

        }, 500)
    }
}


tiles.forEach((tile,index)=>{// this is a node list so we can loop through it
    tile.addEventListener('click',()=>{
        if(!tile.textContent){// if nothing has been in the title.text content
            tile.textContent =turn
            updateStore(index, turn)
            handleGameOver(turn)
            console.log(store)
            switchTurn()
        }
    })
})