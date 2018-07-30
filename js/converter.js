

    document.getElementById('output').style.visibility = 'hidden'; 
       
    document.getElementById('lbsInput').addEventListener('input',function(e){
        document.getElementById('output').style.visibility = 'visible';
        let weight = e.target.value;

        
        var sel = document.getElementById("sel1");
        var selOption = sel.options[sel.selectedIndex].text;
        
        console.log(selOption);
        
       if (selOption == "Pounds"){
        calculateWeight(weight,453.592,0.453592,16,1);
      //  document.getElementById('p').style.visibility = 'hidden';
       }
       else if(selOption == "Grams"){
        calculateWeight(weight,1,0.001,0.035274,0.00220462);   
       }
       else if(selOption == "Kilograms"){
        calculateWeight(weight,1000,1,35.274,2.20462);
       }
       else if(selOption == "Ounces"){
        calculateWeight(weight,28.3495,0.0283495,1,0.0625);
       //  document.getElementById('o').style.visibility = 'hidden';

       }
       else {
           alert("Select the unit of entry");
       }


        if (document.getElementById('lbsInput').value == ''||document.getElementById('lbsInput').value == 0){
            document.getElementById('output').style.visibility = 'hidden'; 
        }
    });



    function calculateWeight(weight,gnum,knum,onum,pnum){
        
        document.getElementById('gramsOutput').innerHTML  = weight*gnum;
        document.getElementById('kgOutput').innerHTML     = weight*knum;
        document.getElementById('ozOutput').innerHTML     = weight*onum;
        document.getElementById('poundsOutput').innerHTML = weight*pnum;


    }
  




