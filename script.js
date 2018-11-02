var paper = document.getElementById('paper');
		var stone = document.getElementById('stone');
		var scissors = document.getElementById('scissors');
		var output = document.getElementById('output');
		var result = document.getElementById('result');

		var pc_score = 0, user_score = 0;

		result.innerHTML = "PC : USER"
		result.innerHTML += "</br>" + pc_score + " - " + user_score;

		function lottery()
		{
			var ran = Math.floor(Math.random()*3+1);
			
			 if(ran == 1)
			{
				return pc = 'paper';
			}
			else if(ran == 2)
			{
				return pc = 'stone';
			}
			else if(ran == 3)
			{
				return  pc ='scissors';
			}
		}

		function playerMove(choice)
		{	
			var user = '';

			if(choice == 1)
			{
				user = 'paper';
			}
			else if(choice == 2)
			{
				user= 'stone';
			}
			else if(choice == 3)
			{
				user = 'scissors';
			}
			
			 lottery();

		
			if(user == 'paper' && pc == 'stone' || user == 'stone' && pc == 'scissors' || user == 'scissors' && pc == 'paper')
			{
				output.innerHTML = "</br>YOU WON: you played " +  user + ", computer played " +  pc; 
				user_score++;
				result.innerHTML = "PC : USER"
				result.innerHTML += "</br>" + pc_score + " - " + user_score;
			}

			else if(user == 'paper' && pc == 'scissors' || user == 'stone' && pc == 'paper' || user == 'scissors' && pc == 'stone')
			{
				output.innerHTML = "</br>YOU LOSE: you played " +  user + ", computer played " +  pc;
				pc_score++;
				result.innerHTML = "PC : USER"
				result.innerHTML += "</br>" + pc_score + " - " + user_score;
			}

			else if(user == 'paper' && pc == 'paper' || user == 'scissors' && pc == 'scissors' || user == 'stone' && pc == 'stone')
			{
				output.innerHTML = "</br>DRAW: you played " +  user + ", computer played " +  pc;
			}


		}
		

		paper.addEventListener('click', function(){
			playerMove(1);
		});

		stone.addEventListener('click', function(){
			playerMove(2);
		});

		scissors.addEventListener('click', function(){
			playerMove(3);
		});
