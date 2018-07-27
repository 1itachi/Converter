

    document.getElementById('output').style.visibility = 'hidden'; 
       
    document.getElementById('lbsInput').addEventListener('input',function(e){
        document.getElementById('output').style.visibility = 'visible';
        let weight = e.target.value;

        
        var x = document.getElementById("mySelect").selectedIndex;
        console.log(document.getElementsByTagName("option")[x].value);
        document.getElementById('gramsOutput').innerHTML = weight*453.592;
        document.getElementById('kgOutput').innerHTML = weight*0.453592;
        document.getElementById('ozOutput').innerHTML = weight*16;





        if (document.getElementById('lbsInput').value == ''||document.getElementById('lbsInput').value == 0){
            document.getElementById('output').style.visibility = 'hidden'; 
        }
    });


  




