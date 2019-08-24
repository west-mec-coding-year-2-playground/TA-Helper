// var terminalkit = require("terminal-kit");
var fs 					= require("fs");
var inquirer 			= require("inquirer");
var settings 			= require('./settings.js');

	inquirer.prompt([
		{
			type: "rawlist",
			name: "choice",
			message: "What do you need to do?",
			choices: [
			"Clone student repos", 
			"Install npm in repos",
			"clone a specific repo from a student"
			]
		},

		// VERSION 2 SPECS
		// 1. Choose the week you are in
		// 2. Clone the repos
		// - - - - - - - - - - - - - - -
	    /*
		    {
		      type: "rawlist",
		      name: "week",
		      message: "Which week are you in do you need to do?",
		      choices: [
				"Week 1",
				"Week 2",
				"Week 3",
				"Week 4",
				"Week 5",
				"Week 6",
				"Week 7",
				"Week 8",
				"Week 9",
				"Week 10",
				"Week 11",
				"Week 12",
				"Week 13",
				"Week 14",
				"Week 15",
				"Week 16",
				"Week 17",
				"Week 18",
				"Week 19",
				"Week 20",
				"Week 21",
				"Week 22",
				"Week 23"
		      ]
		    },
		*/
	])
	.then(function(user){
		// console.log(JSON.stringify(user, null, 2));

		if (user.choice==="Clone student repos") {
			console.log("Cloning repos")
		}
		if (user.choice==="Install npm in repos") {
			console.log("npm is now installed all projects ! ");
			// installNPM()
		}
		if (user.choice==="clone a specific repo from a student") {
			// need to store to arguements
			// cloneRepo()
			console.log("cloned ! ");
		}
	});