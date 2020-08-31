function sorter(sData, type){
  //my magic gData variable 😈 😎
  let gData;
  let sortedData=[];
  const findRanking=(type, data, typer) => {
  gData = data;
    if(!type === 'highest' && !type === 'lowest') return null;
      let marker=false;
      if(typer ===  'array'){
        for(var i=0; i<gData.length; i++){
          for(var j=0; j<gData.length; j++){
            if(type === 'highest' ? gData[i] >= gData[j] : gData[i] <= gData[j]){
            marker=true;
            }
            else {

            marker=false;
            break;
            }

          }
          if(marker) {
            // remove data from array using splice and the index of data, get the data index with indexOf()
            //uncomment next line and notice something
            sortedData.push(gData[i]);
            gData.splice(gData.indexOf(gData[i]), 1);
            //sortedArr.push(data[i]);

            break;
          }

      }

    } else if(typer === 'object'){
        for(var i in gData){
          for(var j in gData){

            if(type === 'highest' ? gData[i] >= gData[j] : gData[i] <= gData[j]){
              marker=true;
            }
            else {

              marker=false;
              break;
            }

          }
          if(marker) {
      

            sortedData.push({[i] : gData[i]});
            delete gData[i];
            //sortedArr.push(data[i]);

            break;
          }

      }
    } else return null;



  }

  const selectionSorter =(data)=>{
    gData=data;
    let r;
    let typer = () => {
      if(typeof(gData) === 'object' && Array.isArray(gData)) return 'array';
    else if(typeof(gData) === 'object' && !Array.isArray(gData)) return 'object';
    else return null;
  };

  if(!typer()) return null;
    const initLength = typer() === 'array' ? gData.length : Object.keys(gData).length;

      for( r=0; r< initLength; r++){

        findRanking(type, gData, typer());
       }


  }


  selectionSorter(sData);
  return sortedData;
}


console.log(sorter(7, 'highest'));
console.log(sorter([35, 88, 111, 61, 94, 156, 141], 'lowest'));
console.log(sorter({"the black keys": 35, "radiohead":156, "neutral milk hotel": 94, "wilco": 111, "beck": 88, "the strokes": 61, "kishore kumar": 141}, 'highest'));
