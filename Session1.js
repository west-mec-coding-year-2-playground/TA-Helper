var fs 					= require('fs');
var exec 				= require('child_process').exec;
var request 			= require("request"); //


var site 				= "https://github.com/";
var settings 			= require('./settings.js');
var reponames 			= [
	"01-JS-Debug",
    // "ES6",
];
var studentList 		= [
	"CWebdale006",
	"RWahl005",
	"ckim990",
	"DKelley989",
	"VAkanbi971",
	"KAbaquin694",
	"TPeterson998",
	"PMabbitt992",
	"BRiley001",
	"DSandoval004",
	"jaybar975",
	"sovalle997",
	"PCapuano978",
	"maustin034",
	"EGruenemeier984"
];
var urlList 			= [];

const debug = false;
const production = true;



testClone()


// MAIN FUNCTIONS
// - - - - - - - - - - - - - - -
	// 1. Clone all student repos
	// creates a list of all instances, include repos that do not exist...
	// - - - - - - - - - - - - - - -
		function testClone(){
			    reponames.forEach(function(repo) {
			      var list = studentList.map(function(student) {
			      	return `git clone ${site}${student}/${repo} session-1/${student}/${repo}` 
			      })
			      urlList = urlList.concat(list);
				  command = urlList.join(' && ');
			    })

				exec(command, function (err, stdout, stderr) {
					console.log(stdout);
					console.log(stderr);
				});
		}

		// VERSION 2
		// function should clone all student projects without an error
		// will iterate through 2 arrays (gitNames,students)
		// cloneRepo('kabrittan', 'Basic-Portfolio')
		// - - - - - - - - - - - - - - -
			function cloneRepo(name,git){
				command= `git clone ${site}${name}/${git} students/${name}/${git}`;
			  exec(command, function (err, stdout, stderr) {
			      console.log(stdout);
			      console.log(stderr);
			  });
			}	
