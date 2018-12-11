		var params =
		{
			pc_score : 0,
			user_score: 0,
			counter: 0,
			game_over: false,

			progress:
			[
				

			]
		}


		var paper = document.getElementById('paper');
		var stone = document.getElementById('stone');
		var scissors = document.getElementById('scissors');
		var output = document.getElementById('output');
		var result = document.getElementById('result');
		var game = document.getElementById('start_btn');
		var round = document.getElementById('round'); 

		paper.disabled = true;
		stone.disabled = true;
		scissors.disabled = true;

		result.innerHTML = "PC : USER"
		result.innerHTML += "</br>" + params.pc_score + " - " + params.user_score;


		/*alert(params.progress.nr_round = 1);*/

		function new_game()
		{	
			params.pc_score = 0;
			params.user_score = 0;
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

			if(choice == "paper")
			{
				user = 'paper';
			}
			else if(choice == "stone")
			{
				user= 'stone';
			}
			else if(choice == "scissors")
			{
				user = 'scissors';
			}
			
			 lottery();
			
			var msg = document.getElementById("message");

			 if(params.pc_score < params.counter &&  params.user_score < params.counter)
			 {
				 	if(user == 'paper' && pc == 'stone' || user == 'stone' && pc == 'scissors' || user == 'scissors' && pc == 'paper')
				{
					output.innerHTML = "</br>YOU WON: you played " +  user + ", computer played " +  pc; 
					params.user_score++;
					result.innerHTML = "PC : USER"
					result.innerHTML += "</br>" + params.pc_score + " - " + params.user_score;
				}

				else if(user == 'paper' && pc == 'scissors' || user == 'stone' && pc == 'paper' || user == 'scissors' && pc == 'stone')
				{
					output.innerHTML = "</br>YOU LOSE: you played " +  user + ", computer played " +  pc;
					params.pc_score++;
					result.innerHTML = "PC : USER"
					result.innerHTML += "</br>" + params.pc_score + " - " + params.user_score;
				}

				else
				{
					output.innerHTML = "</br>DRAW: you played " +  user + ", computer played " +  pc;
					result.innerHTML = "PC : USER"
					result.innerHTML += "</br>" + params.pc_score + " - " + params.user_score;
				}
			
			}	

			

			else if(params.user_score == params.counter)
			{
				showModal();
				hideModal();
				//output.innerHTML = "YOU WON THE ENTIRE GAME!!!";
				message.innerHTML = "YOU WON THE ENTIRE GAME!!!";
				params.game_over = true;
			}

			else if(params.pc_score == params.counter)
			{
				showModal();
				hideModal();
				//output.innerHTML = "YOU LOSE THE ENTIRE GAME!!!";
				message.innerHTML = "YOU LOSE THE ENTIRE GAME!!!";
				params.game_over = true;
			}

		}

		var pm = document.querySelectorAll(".player-move");

				document.addEventListener('click', function(){
				var name = event.target.getAttribute("data-move");
				
				

				if(params.game_over == false)
				{
					playerMove(name);
				}
				else
				{
					output.innerHTML = "Game over, please press the new game button!";
				}

				
			})
		
		game.addEventListener('click', function(){ 
				params.counter = new_game();
				params.game_over = false;
				paper.disabled = false;
				stone.disabled = false;
				scissors.disabled = false;
		});

		
		var close = document.querySelectorAll(".modal .close");

		


	function  showModal(){
	
		/*document.querySelector('#modal-overlay').classList.add('show');*/
		
		document.querySelector(".modal").classList.add('show');
		document.querySelector(".modal").classList.add('overlay');
		document.querySelector("*").classList.add('bg');
		
	};

	
	function hideModal()
	{
		
		var close = document.getElementById("close");
		close.addEventListener("click", function(){
			document.querySelector(".modal").classList.remove('show');
			document.querySelector("*").classList.remove('bg');
		});
	}

	

	
