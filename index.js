const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
var generatehtml = require("./generatehtml");
var generatejs = require("./generatejs");
var generatecss = require("./generatecss");
const { file } = require("tmp");
    
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function secondarycolor(colorlist){
  const randomindex = Math.floor(Math.random() * colorlist.length);
  const secondarycolor = colorlist[randomindex];
  return secondarycolor;
}


function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What's Your Project's Name?"
      },
      {
        type: "input",
        name: "description",
        message: "Enter A Description For Your Project"
      },
      {
        type: "input",
        name: "deschead1",
        message: "Enter The First Description Heading"

    },
    {
      type: "input",
      name: "desc1",
      message: "Enter The First Description"
    },
      {
        type: "input",
        name: "deschead2",
        message: "Enter The Second Description Heading"

    },
    {
      type: "input",
      name: "desc2",
      message: "Enter The Second Description"
    },
      {
        type: "input",
        name: "deschead3",
        message: "Enter The Third Description Heading"

    },
    {
      type: "input",
      name: "desc3",
      message: "Enter The Third Description"
    },
      {
        type: "input",
        name: "deschead4",
        message: "Enter The Fourth Description Heading"

    },
    {
      type: "input",
      name: "desc4",
      message: "Enter The Fourth Description"
    },
      {
        type: "input",
        name: "repo",
        message: "Enter Repository Link"
      },      
      {
        type: "input",
        name: "directory",
        message: "Enter directory path"
      }
    ]).then(function(data) {
      const colorlist = ['#00F064','#00DCF0','#FF7832','#FFC800','#F03232', '#A082FF',]
      data.secondarycolor = secondarycolor(colorlist);
      data.badgecolor = data.secondarycolor.replace("#", "");
      var file = data.directory + "/index.html";
      console.log("Generating index.html...");
      writeToFile(file, generatehtml({...data}));
      var file = data.directory + "/style.css";
      console.log("Generating style.css...");
      writeToFile(file, generatecss({...data}));
      var file = data.directory + "/script.js";
      console.log("Generating script.js...");
      writeToFile(file, generatejs());
        
});
}
init()
