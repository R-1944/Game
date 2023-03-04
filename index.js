console.log("Welcome to Tic Tac Toe")
// console.log("Welcome to Tic Tac Toe")
let turn='X'
let gameover=false;

//Function to change the turn

const changeturn =()=>{
    return turn ==="X"? "0" :"X"
}

/*--------------Function to check for a win-----------*/
const  checkWin=()=>{
    let boxvalue=document.getElementsByClassName('boxvalue');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxvalue[e[0]].innerText===boxvalue[e[1].innerText]) && (boxvalue[e[2]].innerText===boxvalue[e[1].innerText])&&(boxvalue[e[0]].innerText !=="")){
            document.querySelector('info').innerText=boxvalue[e[0]].innerText + "Winner..."
            gameover=true
        }
      
    })

}
/*-----------------------Main  Logic Part------------------ */
let grid=document.getElementsByClassName("box");
Array.from(grid).forEach(element =>{
    let boxvalue=element.querySelector('.boxvalue');
    element.addEventListener('click',()=>{
        if(boxvalue.innerText===''){
            boxvalue.innerText =turn;
            turn=changeturn();
            checkWin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText= "Turn for "+ turn;
            }
        }
    })
})
