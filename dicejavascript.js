player1 = document.querySelectorAll("div#outer1 div.main");
        function roll1(){
        player1Random = Math.floor((Math.random() * 6) + 1);
        console.log(player1Random);
            if(player1Random === 1){
                for ( var i = 0 ; i<player1.length; i++) {
                    if(player1[i].id!=="mainbox1") {
                        player1[i].style.display="none";
                    } else{
                       player1[i].style.backgroundColor="#94FC13";
                       player1[i].style.display="inline-block"; 
                       player1[i].classList.add("shadows");
                       
                    }
                       
                }
            } else if (player1Random === 2){
                for ( var i = 0 ; i<player1.length; i++) {
                    if(player1[i].id!=="mainbox2") {
                        player1[i].style.display="none";
                    }else{
                       player1[i].style.display="inline-block"; 
                       player1[i].classList.add("shadows");
                       player1[i].style.backgroundColor="#05DFD7";
                    }
                }

            } else if(player1Random === 3){
                for ( var i = 0 ; i<player1.length; i++) {
                    if(player1[i].id!=="mainbox3") {
                        player1[i].style.display="none";
                    }else{
                       player1[i].style.display="inline-block"; 
                       player1[i].classList.add("shadows");
                       player1[i].style.backgroundColor="#F5B5FC";
                    }
                }

            } else if (player1Random === 4){
                for ( var i = 0 ; i<player1.length; i++) {
                    if(player1[i].id!=="mainbox4") {
                        player1[i].style.display="none";
                    }else{
                       player1[i].style.display="inline-block"; 
                       player1[i].classList.add("shadows");
                       player1[i].style.backgroundColor="#FA9905";
                    }
                }

            } else if (player1Random === 5){
                for ( var i = 0 ; i<player1.length; i++) {
                    if(player1[i].id!=="mainbox5") {
                        player1[i].style.display="none";
                    }else{
                       player1[i].style.display="inline-block"; 
                       player1[i].classList.add("shadows");
                       player1[i].style.backgroundColor="#C68B59";
                    }
                }

            } else{
                for ( var i = 0 ; i<player1.length; i++) {
                    if(player1[i].id!=="mainbox6") {
                        player1[i].style.display="none";
                    }else{
                       player1[i].style.display="inline-block"; 
                       player1[i].classList.add("shadows");
                    }
                }

            }
        }
        player2 = document.querySelectorAll("div#outer2 div.main");
        function roll2(){
            player2Random = Math.floor((Math.random() * 6) + 1);
            console.log(player2Random);
            if(player2Random === 1){
                for ( var i = 0 ; i<player2.length; i++) {
                    if(player2[i].id!=="mainbox7") {
                        player2[i].style.display="none";
                    } else{
                       player2[i].style.display="inline-block"; 
                       player2[i].classList.add("shadows");
                       player2[i].style.backgroundColor="##94FC13";
                    }
                       
                }
            } else if (player2Random === 2){
                for ( var i = 0 ; i<player2.length; i++) {
                    if(player2[i].id!=="mainbox8") {
                        player2[i].style.display="none";
                    }else{
                       player2[i].style.display="inline-block"; 
                       player2[i].classList.add("shadows");
                       player2[i].style.backgroundColor="#05DFD7";
                    }
                }

            } else if(player2Random === 3){
                for ( var i = 0 ; i<player2.length; i++) {
                    if(player2[i].id!=="mainbox9") {
                        player2[i].style.display="none";
                    }else{
                       player2[i].style.display="inline-block"; 
                       player2[i].classList.add("shadows");
                       player2[i].style.backgroundColor="#F5B5FC";
                    }
                }

            } else if (player2Random === 4){
                for ( var i = 0 ; i<player2.length; i++) {
                    if(player2[i].id!=="mainbox10") {
                        player2[i].style.display="none";
                    }else{
                       player2[i].style.display="inline-block"; 
                       player2[i].classList.add("shadows");
                       player2[i].style.backgroundColor="#FA9905";
                    }
                }

            } else if (player2Random === 5){
                for ( var i = 0 ; i<player2.length; i++) {
                    if(player2[i].id!=="mainbox11") {
                        player2[i].style.display="none";
                    }else{
                       player2[i].style.display="inline-block"; 
                       player2[i].classList.add("shadows");
                       player2[i].style.backgroundColor="#C68B59";
                    }
                }

            } else{
                for ( var i = 0 ; i<player2.length; i++) {
                    if(player2[i].id!=="mainbox12") {
                        player2[i].style.display="none";
                    }else{
                       player2[i].style.display="inline-block"; 
                       player2[i].classList.add("shadows");
                    }
                }

            }

        }

    function info() {
            p1 = prompt("Enter the name of 1'st Player :");
            if(p1===null){
            
            } else {
                if(p1===""){
                    alert(" 🔴 You had to enter 1'st Player's name" + "\nPlease Click \"Start Game\" again to begin.")

                } else{
                    p2 =  prompt("Enter the name of 2'nd Player :");
                    if(p2===null){

                    } else {
                        if(p2 ===""){
                            alert(" 🔴 You had to enter 2'nd Player's name" + "\nPlease Click \"Start Game\" again to begin.")
                        } else{
                            document.querySelector("h1").innerHTML = "<button id='game' class='result1' onclick='display()'>Result</button>";
                            document.querySelector("h2").style.visibility="hidden";
                            document.getElementById("img1").style.display = "none";
                            document.getElementById("parent").style.display = "block";
                            document.getElementById("b1").textContent = p1;
                            document.getElementById("b2").textContent = p2;
                        }
                    }
                }
            }
        }

    function display(){
        if(player1Random > player2Random){
            document.querySelector("h2").style.visibility="visible";
                document.querySelector("h2").innerHTML = "🚩" + p1 + " Wins.";
        } else if (player1Random === player2Random) {
            document.querySelector("h2").style.visibility="visible";
            document.querySelector("h2").innerHTML= "Draw 🚫";
        } else {
            document.querySelector("h2").style.visibility="visible";
                document.querySelector("h2").innerHTML = "🚩" + p2 + " Wins." 
        }
    }
       