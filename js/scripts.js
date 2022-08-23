function players (Name){
    const playerElement = document.getElementById(Name);
    const playerName = playerElement.innerText;
    const selectedplayersParent = document.getElementById('seleceted-player-id')
     let playersArray = [selectedplayersParent.childNodes.length];

     const playerNumbers = document.getElementById('players-number');
      playerNumbers.innerText =playersArray;

     if(selectedplayersParent.childNodes.length < 6){
        const li = document.createElement('li');
        li.innerText = playerName;
        selectedplayersParent.appendChild(li)
        playersArray.push(li)
      
     }
     else{
      window.alert("You are selected five players");
      return
     }

     return selectedplayersParent.childNodes.length;
    
}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const playersCount = document.getElementById('seleceted-player-id');
    const playersCountLength = playersCount.childNodes.length - 1;
    const perPlayerCost = getInputFeildNUmber('per-player-cost');
   const totalPlayerCost = perPlayerCost * playersCountLength;
 
   const playersExpenses = document.getElementById('player-expenses');
   playersExpenses.innerText = totalPlayerCost;
 
   return totalPlayerCost;
 
 })