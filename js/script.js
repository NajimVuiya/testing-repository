'use strict';

(function()
{
// Button selector start here 
const startBtnElm = document.querySelector('#startBtnElm');
const p1BtnElm = document.querySelector('#p1BtnElm');
const p2BtnElm = document.querySelector('#p2BtnElm');
const p3BtnElm = document.querySelector('#p3BtnElm');
const p4BtnElm = document.querySelector('#p4BtnElm');
const resetBtnElm = document.querySelector('#resetBtnElm');

// dice selector start here
const p1DiceElm = document.querySelector('#p1DiceElm');
const p2DiceElm = document.querySelector('#p2DiceElm');
const p3DiceElm = document.querySelector('#p3DiceElm');
const p4DiceElm = document.querySelector('#p4DiceElm');

// score selector element start here 
const mainScorElm = document.querySelector('#mainScorElm');
const player1ScoreElm = document.querySelector('#p1ScorElm');
const player2ScoreElm = document.querySelector('#p2ScorElm');
const player3ScoreElm = document.querySelector('#p3ScorElm');
const player4ScoreElm = document.querySelector('#p4ScorElm');

//  showing success message
const successMessages = document.querySelector('.successMessages img');
// random number generation start here
function setRandomNumberToWinScor(max)
{
	return Math.ceil(Math.random() * 8)
}

// data layer start here
let defaultWinScor = 20;
let player1Score = 0;
let player2Score = 0;
let player3Score = 0;
let player4Score = 0;
let turn = 'player1';
// show default to UI Function start here
function defaultShowToUI()
{
	mainScorElm.textContent = defaultWinScor;
	player1ScoreElm.textContent = player1Score;
	player2ScoreElm.textContent = player2Score;
	player3ScoreElm.textContent = player3Score;
	player4ScoreElm.textContent = player4Score
}
// show default to UI
defaultShowToUI()
//  all audio start here  
// success audio 
const successAudios = new Audio();
successAudios.src = 'audio-sound/successButton.mp3';
// reset audio start here 
const resetBtnAudio = new Audio();
resetBtnAudio.src = 'audio-sound/resetAudio.wav';
// start button 
const startButtonAudio = new Audio();
startButtonAudio.src = 'audio-sound/startbutton.wav';
// player1 
const player1BtnAudio = new Audio();
player1BtnAudio.src = 'audio-sound/playerButton.wav';
// Player2 
const player2BtnAudio = new Audio();
player2BtnAudio.src = 'audio-sound/playerButton.wav';
// player3 
const player3BtnAudio = new Audio();
player3BtnAudio.src = 'audio-sound/playerButton.wav';
// player4 
const player4BtnAudio = new Audio();
player4BtnAudio.src = 'audio-sound/playerButton.wav';


/*=======================================*/ /*=======================*/
// 							start all work start here
/*=======================================*/ /*=======================*/
// after clicking button1 will be inabled
function player1BtnInabled()
{
	p1BtnElm.removeAttribute('disabled');
}
// after clicking startBtn will be disabled
function startBtnDisabled()
{
	startBtnElm.setAttribute('disabled','disabled');
}
// winscore view start here
function viewLayerWinScor()
{	
	defaultWinScor = setRandomNumberToWinScor(defaultWinScor);
	mainScorElm.textContent = defaultWinScor;
}
/*------------------------*/ 
// 	  button 1 Start here
/*------------------------*/ 

// just testing now 
// default button2,3,4 disabled
function defaultBtn2_3_4_disabled()
{
	p1BtnElm.setAttribute('disabled','disabled');
	p2BtnElm.setAttribute('disabled','disabled');
	p3BtnElm.setAttribute('disabled','disabled');
	p4BtnElm.setAttribute('disabled','disabled');
	resetBtnElm.setAttribute('disabled','disabled');
}
defaultBtn2_3_4_disabled();
// image will be change it mean's all image will be default image
function defaultImageHere()
{
	p1DiceElm.setAttribute('src','defaul-image/default.png');
	p2DiceElm.setAttribute('src','defaul-image/default.png');
	p3DiceElm.setAttribute('src','defaul-image/default.png');
	p4DiceElm.setAttribute('src','defaul-image/default.png');
}
// reset button inabled 
function resetButtonInabled()
{
	resetBtnElm.removeAttribute('disabled');
}
/*=======================================*/ /*=======================*/
// 							start all work End here
/*=======================================*/ /*=======================*/


/*=======================================*/ /*=======================*/
// 							Player1 button Start here 
/*=======================================*/ /*=======================*/


// successConditionFun start here 
function successConditionFun()
{
	if(defaultWinScor === player1Score)
	{
		defaultBtn2_3_4_disabled();
		defaultImageHere();
		resetButtonInabled();
	}
}
// player1 button inabled and disabled function start here
function player1BtnInabledDisabledFun()
{
	if(turn === 'player1')
	{
		// generate random number p1
		const getRandomNumberToGRNP1 = generateRandomNumberPlayer1();
		// player1 source element means image source here 
		const getDiceImageFromP1IS = player1ImageSource(getRandomNumberToGRNP1);
		// set player1 dice start herer
		setPlayer1Dice(getDiceImageFromP1IS);
		// adding score player 1
		p1ScoreAddingToStore(getRandomNumberToGRNP1);

		p1BtnElm.setAttribute('disabled','disabled');
		p2BtnElm.removeAttribute('disabled');
		turn = 'player2';
	}
}


// -------------------For checking ---------------------
// success message start here
function successMessShowing()
{
	let isP1Sucess = defaultWinScor === player1Score;
	let isP2Sucess = defaultWinScor === player2Score;
	let isP3Sucess = defaultWinScor === player3Score;
	let isP4Sucess = defaultWinScor === player4Score;

	switch(true)
	{
		case isP1Sucess :
			successMessages.setAttribute('src', 'defaul-image/two.gif');
			successAudios.play();
		break;
		case isP2Sucess :
			successMessages.setAttribute('src', 'defaul-image/two.gif');
			successAudios.play();
		break;
		case isP3Sucess :
			successMessages.setAttribute('src', 'defaul-image/two.gif');
			successAudios.play();
		break;
		case isP4Sucess :
			successMessages.setAttribute('src', 'defaul-image/two.gif');
			successAudios.play();
		break;
	}
}
// -------------------For checking ---------------------
// player1 adding score
function p1ScoreAddingToStore(getRandomNumberToGRNP1)
{
	player1Score += getRandomNumberToGRNP1;
	// -------=============-=-===-=-=-=-=====
	successMessShowing();
	// -------=============-=-===-=-=-==-=====
	player1ScoreElm.textContent = player1Score;
}
// set player1 dice start herer
function setPlayer1Dice(getDiceImageFromP1IS)
{
	p1DiceElm.setAttribute('src',getDiceImageFromP1IS);
}
// player1 source element means image source here 
function player1ImageSource(getRandomNumberToGRNP1)
{
	let diceIMGPlayer1 = `image/dice-${getRandomNumberToGRNP1}.png`;
	return diceIMGPlayer1;
}
// generate random number p1
function generateRandomNumberPlayer1()
{
	let randomNumPlayer1 = Math.ceil(Math.random() * 6);
	return randomNumPlayer1;
}
/*=======================================*/ /*=======================*/
// 							Player1 button End here 
/*=======================================*/ /*=======================*/


/*=======================================*/ /*=======================*/
// 							Player2 button Start here 
/*=======================================*/ /*=======================*/
// player2 success condtion start here
function successConditionFunP2()
{
	if(defaultWinScor === player2Score)
	{
		defaultBtn2_3_4_disabled();
		defaultImageHere();
		resetButtonInabled();
	}
}
// player2 button inabled and idabled function start here
function player2BtnInabledDisabledFun()
{
	if(turn === 'player2')
	{
		// generate random number player2
		const getRandomNumPlayer2 = geterateRandomNumPlayer2();
		// dice image source player 2
		const getDiceImgFromDIS = diceImageSourcePlayer2(getRandomNumPlayer2);
		// set image to img tag Player2
		setImageToImg(getDiceImgFromDIS)
		// player 2 score  
		p2ScoreAddingToStore(getRandomNumPlayer2);

		p2BtnElm.setAttribute('disabled','disabled');
		p3BtnElm.removeAttribute('disabled');
		turn = 'player3';
	}
}
// player 2 score  adding
function p2ScoreAddingToStore(getRandomNumPlayer2)
{
	 player2Score += getRandomNumPlayer2;
	// it showing success message 
	// -------=============-=-===-=-=-=-=====
	successMessShowing();
	// -------=============-=-===-=-=-==-=====
	player2ScoreElm.textContent = player2Score;
}
// set image to img tag Player2
function setImageToImg(getDiceImgFromDIS)
{
	p2DiceElm.setAttribute('src',getDiceImgFromDIS);
}
// dice image source player 2
function diceImageSourcePlayer2(getRandomNumPlayer2)
{
	let diceImage = `image/dice-${getRandomNumPlayer2}.png`;
	return diceImage;
}
// generate random number player2
function geterateRandomNumPlayer2()
{
	let player2Randoms = Math.ceil(Math.random() * 6);
	return player2Randoms;
}

/*=======================================*/ /*=======================*/
// 							Player2 button End here 
/*=======================================*/ /*=======================*/

/*=======================================*/ /*=======================*/
// 							Player3 button Start here 
/*=======================================*/ /*=======================*/
// player3 success condition start here
function successConditionFunP3()
{
	if(defaultWinScor === player3Score)
	{
		defaultBtn2_3_4_disabled();
		defaultImageHere();
		resetButtonInabled();
	}
}
// player3 button inabled and disabled function start here
function player3BtnInabledDisabledFun()
{
	if(turn === 'player3')
	{
		// generate random number player3
		const getRandomNumPlayer3 = generateRandomNumber3();
		// dice image source player 3
		const getDiceISP3 = diceImageSourcePlayer3(getRandomNumPlayer3);
		// set image to img tag Player3
		setImageToImgPlayer3(getDiceISP3);
		// player 3 score  
		p3ScoreAddingToStore(getRandomNumPlayer3);
		p3BtnElm.setAttribute('disabled','disabled');
		p4BtnElm.removeAttribute('disabled');
		turn = 'player4';
	}
}
// player 3 score  
function p3ScoreAddingToStore(getRandomNumPlayer3)
{
	 player3Score += getRandomNumPlayer3;
	// player 3 success score start here
	// -------=============-=-===-=-=-=-=====
	successMessShowing();
	// -------=============-=-===-=-=-==-=====
	player3ScoreElm.textContent = player3Score;
}
//Systematice success message start here player3
function playerThreeScore(player3Score)
{
	successMessageFun(player3Score);
}
//Systematice success message start here player2
function playerTwoScore(player2Score)
{
	successMessageFun(player2Score)
}
// Systematice success message start here player 1
function playerOneScore(player1Score)
{
	successMessageFun(player1Score);
}
// set image to img tag Player3
function setImageToImgPlayer3(getDiceISP3)
{
	p3DiceElm.setAttribute('src',getDiceISP3);
}
// dice image source player 3
function diceImageSourcePlayer3(getRandomNumPlayer3)
{
	let diceImage3 = `image/dice-${getRandomNumPlayer3}.png`;
	return diceImage3;
}
// generate random number player3
function generateRandomNumber3()
{
	let player3Randoms = Math.ceil(Math.random() * 6);
	return player3Randoms;
}

// success condition functin start here
function successConditionFunP4()
{
	if(defaultWinScor === player4Score)
	{
		defaultBtn2_3_4_disabled();
		defaultImageHere();
		resetButtonInabled();
	}
}
/*=======================================*/ /*=======================*/
// 							Player3 button End here 
/*=======================================*/ /*=======================*/

/*=======================================*/ /*=======================*/
// 							Player4 button Start here 
/*=======================================*/ /*=======================*/
// player4 button inabled and disabled start here
function player4BtnInabledDisabledFun()
{
	if(turn === 'player4')
	{
		// generate random number player4
		const getRandomNumToGRNP = generateRandomNumberPlayer4()
		// dice image source player 4
		const getDiceSurceFromDISP = diceImageSourcePlayer4(getRandomNumToGRNP);
		// set image to img tag Player4
		setImageToImgPlayer4(getDiceSurceFromDISP); 
		// player 4 score  
		p4ScoreAddingToStore(getRandomNumToGRNP);

		p4BtnElm.setAttribute('disabled','disabled');
		p1BtnElm.removeAttribute('disabled');
		turn = 'player1';
	}
}
// player 4 score adding
function p4ScoreAddingToStore(getRandomNumToGRNP)
{
	player4Score += getRandomNumToGRNP;
	// -------=============-=-===-=-=-=-=====
	successMessShowing();
	// -------=============-=-===-=-=-==-=====
	player4ScoreElm.textContent = player4Score
}
// set image to img tag Player4
function  setImageToImgPlayer4(getDiceSurceFromDISP)
{
	p4DiceElm.setAttribute('src', getDiceSurceFromDISP);
}
// dice image source player 4
function diceImageSourcePlayer4(getRandomNumToGRNP)
{
	let diceImage4 = `image/dice-${getRandomNumToGRNP}.png`;
	return diceImage4;
}
// generate random number player4
function generateRandomNumberPlayer4()
{
	let randomNumPlayer4 = Math.ceil(Math.random() * 6);
	return randomNumPlayer4;
}

/*=======================================*/ /*=======================*/
// 							Player4 button End here 
/*=======================================*/ /*=======================*/

/*=======================================*/ /*=======================*/
// 							Reset button Start here 
/*=======================================*/ /*=======================*/
function defaultsScore()
{
	defaultWinScor = 20;
	mainScorElm.textContent = defaultWinScor;
}
// Remove user score UI and data layer
function cleanDataStore()
{
	// data layer reomve 
	player1Score = 0;
	player2Score = 0;
	player3Score = 0;
	player4Score = 0;

	// view layer
	player1ScoreElm.textContent = player1Score;
	player2ScoreElm.textContent = player2Score;
	player3ScoreElm.textContent = player3Score;
	player4ScoreElm.textContent = player4Score;
}
// success image is remove now
function successImageRemove()
{
	successMessages.removeAttribute('src', 'defaul-image/two.gif');
}
// reset button disabled start button inabled
function resetBtnDisabledStartBtnInabled()
{
	resetBtnElm.setAttribute('disabled','disabled');
	startBtnElm.removeAttribute('disabled');
}
/*=======================================*/ /*=======================*/
// 							Reset button End here 
/*=======================================*/ /*=======================*/
// init function Start here
function init()
{
	// start button Start here
	startBtnElm.addEventListener('click',(evt) => 
	{
		evt.preventDefault();

		// vsetRandomValueFromDWSiew layer start here 
		viewLayerWinScor();

		// after clicking startBtn will be disabled
		startBtnDisabled();

		// after clicking button1 will be inabled
		player1BtnInabled();

		// audio start here
		startButtonAudio.play();
	});

	// Player1 button Start here 
	p1BtnElm.addEventListener('click', (evt) => 
	{
		evt.preventDefault();
		player1BtnInabledDisabledFun();	
		successConditionFun();
		player1BtnAudio.play();	
	});

	// Player2 button Start here 
	p2BtnElm.addEventListener('click', (evt) => 
	{
		evt.preventDefault();
		player2BtnInabledDisabledFun();
		// player2 success condtion start here
		successConditionFunP2();
		player2BtnAudio.play();
	});

	// Player3 button Start here 
	p3BtnElm.addEventListener('click',(evt) => 
	{
		evt.preventDefault();
		player3BtnInabledDisabledFun();
		successConditionFunP3();
		player3BtnAudio.play();
	});

	// Player4 button Start here 
	p4BtnElm.addEventListener('click',(evt) => 
	{
		evt.preventDefault();
		player4BtnInabledDisabledFun();
		successConditionFunP4();
		player4BtnAudio.play();
	});

	// Reset button start here
	resetBtnElm.addEventListener('click', (evt) => 
	{
		evt.preventDefault();
		// reset button disabled start button inabled
		resetBtnDisabledStartBtnInabled();
		// success image is remove now
		successImageRemove();
		// Remove user score UI and data layer
		cleanDataStore();
		// reset audio start here 
		resetBtnAudio.play();
	    // default score start here
		defaultsScore();
		
	});
}
init();
// init function End here
})();




