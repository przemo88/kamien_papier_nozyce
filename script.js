		var params =
		{
			pc_score : 0,
			user_score: 0,
			counter: 0,
			game_over: false
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
				params.game_over = true;
			}

			else if(params.pc_score == params.counter)
			{
				showModal();
				hideModal();
				//output.innerHTML = "YOU LOSE THE ENTIRE GAME!!!";
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

		var test = document.getElementById('modal-overlay');
		var close = document.querySelectorAll(".modal .close");
		var modals = document.querySelectorAll(".modal");

		


	function  showModal(){
	
		/*document.querySelector('#modal-overlay').classList.add('show');*/
		
		document.querySelector(".modal").classList.add('show');
		document.querySelector(".modal").classList.add('overlay');
		
	};

	
	function hideModal()
	{
		
		var close = document.getElementById("close");
		close.addEventListener("click", function(){
			document.querySelector(".modal").classList.remove('show');
		});
		}

	
		

	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal); 
	}
	
	
	// Mimo, że obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale
	
	/*var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	*/
	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 
	/*body.addEventListener('click', function()
	{
		var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	})
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	/*document.querySelector('#modal-overlay').addEventListener('click', hideModal);*/
	
	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	/*
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}*/

	

	
