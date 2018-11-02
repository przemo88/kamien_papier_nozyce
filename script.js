		var paper = document.getElementById('paper');
		var stone = document.getElementById('stone');
		var scissors = document.getElementById('scissors');
		var output = document.getElementById('output');
		var result = document.getElementById('result');
		var game = document.getElementById('start_btn');
		var round = document.getElementById('round');

		var pc_score = 0, user_score = 0, counter = 0, game_over = false;

		paper.disabled = true;
		stone.disabled = true;
		scissors.disabled = true;

		result.innerHTML = "PC : USER"
		result.innerHTML += "</br>" + pc_score + " - " + user_score;




		function new_game()
		{	
			pc_score = 0;
			user_score = 0;
			var counter = prompt("Set number of round");
		
			round.innerHTML = "NUMBER OF ROUND TO WIN : " + counter;
			return counter;
		}


			
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
			

			 if(pc_score < counter &&  user_score < counter)
			 {
				 	if(user == 'paper' && pc == 'stone' || user == 'stone' && pc == 'scissors' || user == 'scissors' && pc == 'paper')
				{
					output.innerHTML = "</br>YOU WON: you played " +  user + ", computer played " +  pc; 
					user_score++;
					result.innerHTML = "PC : USER"
					result.innerHTML += "</br>" + pc_score + " - " + user_score;
				}

				else if(user == 'paper' && pc == 'scissors' || user == 'stone' && pc == 'paper' || user == 'scissors' && pc == 'stone'  && pc_score < 5 || user_score < 5)
				{
					output.innerHTML = "</br>YOU LOSE: you played " +  user + ", computer played " +  pc;
					pc_score++;
					result.innerHTML = "PC : USER"
					result.innerHTML += "</br>" + pc_score + " - " + user_score;
				}

				else if(user == 'paper' && pc == 'paper' || user == 'scissors' && pc == 'scissors' || user == 'stone' && pc == 'stone'  && pc_score < 5 || user_score < 5)
				{
					output.innerHTML = "</br>DRAW: you played " +  user + ", computer played " +  pc;
				}
			
			}	

			else if(user_score == counter)
			{
				output.innerHTML = "YOU WON THE ENTIRE GAME!!!";
				game_over = true;
			}

			else if(pc_score == counter)
			{
				output.innerHTML = "YOU LOSE THE ENTIRE GAME!!!";
				game_over = true;
			}

		}

		paper.addEventListener('click', function(){
			if(game_over == false)
			{
				playerMove(1);	
			}
			else
			{
				output.innerHTML = "Game over, please press the new game button!";
			}
			
		});

		stone.addEventListener('click', function(){
			if(game_over == false)
			{
				playerMove(2);	
			}
			else
			{
				output.innerHTML = "Game over, please press the new game button!";
			}
		});

		scissors.addEventListener('click', function(){
			if(game_over == false)
			{
				playerMove(3);	
			}
			else
			{
				output.innerHTML = "Game over, please press the new game button!";
			}
		});
		

		game.addEventListener('click', function(){
				counter = new_game();
				game_over = false;
				paper.disabled = false;
				stone.disabled = false;
				scissors.disabled = false;
		});
