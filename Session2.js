var fs 					= require('fs');
var exec 				= require('child_process').exec;
var request 			= require("request"); //
var site 				= "https://github.com/";

var reponames 			= [
    "01-JS-Debug",
    // "ES6",
];
var studentList 		= [
    "NLe031",
    "CGregorio026",
    "Mjohnson030",
    "TAdcox009",
    "Rhernandez028",
    "JGordon024",
    "AStilphen000",
    "AGradillas025",
    "ECortes016",
    "AArias011",
    "JVerduzco046",
    "ASomoza041",
    "MRizo036",
    "MFischer981",
    "EGruenemeier984"
];
    
var urlList 			= [];

const debug = false;
const production = true;

const session = "session-2";

testClone()


// MAIN FUNCTIONS
// - - - - - - - - - - - - - - -
// 1. Clone all student repos
// creates a list of all instances, include repos that do not exist...
// - - - - - - - - - - - - - - -
    function testClone(){
            reponames.forEach(function(repo) {
                var list = studentList.map(function(student) {
                return `git clone ${site}${student}/${repo} ${session}/${student}/${repo}` 
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
