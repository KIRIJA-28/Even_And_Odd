var player1={
    Name:"Player1",
    p1_count:0,
    p1_val:[]
};

var  player2={
    Name:"Player2",
    p2_count:0,
    p2_val:[]
};
var count=0;
function playEvenOdd(){
    var p1=Math.floor(Math.random()*25+1);
    var p2=Math.floor(Math.random()*25+1);
    player1.p1_val.push(p1);
    player2.p2_val.push(p2);
    if(count==5)
    {
       if(player1.p1_count==player2.p2_count){
        document.getElementById("input").textContent="Match Draw!!";
       }
       else if(player1.p1_count>player2.p2_count){
       document.getElementById("input").textContent=player1.Name+"Wins The Match ";
       }
       else 
       {
        document.getElementById("input").textContent=player2.Name+"Wins The Match";
       }
    }

 else{
        count++;
        if(p1%2==0){
            player1.p1_count++;
            document.getElementById("player1score").textContent=player1.p1_count;
        }
        if(p2%2==0){
            player2.p2_count++;
            document.getElementById("player2score").textContent=player2.p2_count;

        }
        updateCircle();
    }
}
    function updateCircle(){
        var p1_circle=document.getElementById("player1").children;
        player1.p1_val.forEach((run,value)=>{
            if(run%2==0){
                p1_circle[value].style.backgroundColor="green";
            }
            else{
                p1_circle[value].style.backgroundColor="red";
            }
        });

        var p2_circle=document.getElementById("player2").children;
        player2.p2_val.forEach((run,value)=>{
            if(run%2==0){
                p2_circle[value].style.backgroundColor="green";
            }
            else{
                p2_circle[value].style.backgroundColor="red";
            }
              });
}