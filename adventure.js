// pages

var introPage = $('.introPage')
var comfort=0;

var nextCellButton = $('.nextCellButton')
nextCellButton.show();


var cellPage = $('.cellPage')
cellPage.hide();

var nextConsoleButton = $('.nextConsoleButton')
nextConsoleButton.show();

nextCellButton.click(function(){
  introPage.hide();
  cellConsolePage.show();
});

//are you going to the yule ball
var cellConsolePage = $('.cellConsolePage')
cellConsolePage.hide();

var redButton = $('.redButton')
redButton.show();

var blueButton = $('.blueButton')
blueButton.show();

redButton.click(function(){ // Wrong
  cellConsolePage.hide();
  onetwo.show();
  comfort=comfort+2;
  console.log(comfort);
});

blueButton.click(function(){ //Correct button
  cellConsolePage.hide();
  really.show();
  console.log(comfort);
});

//but I’m a little nervous…
var onetwo = $('.onetwo')
onetwo.hide();

var someone = $('.someone')
someone.show();

someone.click(function(){ // Wrong
  onetwo.hide();
  really.hide();
  inmind.show();
  comfort=comfort+2;
  console.log(comfort);
});

var chochang = $('.chochang')
chochang.show();

chochang.click(function(){
  onetwo.hide();
  really.hide();
  umsure.show();
  comfort=comfort-1;
  console.log(comfort);
});

//Really? I’m sure someone will ask you. I’m not sure if I should ask someone or not.

var really = $('.really')
really.hide();

var pansies = $('.pansies')
pansies.show();

pansies.click(function(){ // Wrong
  really.hide();
  alright.show();
  comfort=comfort-1;
  console.log(comfort);
});

var inmind = $('.inmind')
inmind.hide();

var thinking = $('.thinking')
thinking.show();

var bothering = $('.bothering')
bothering.show();

bothering.click(function(){ // Wrong
  inmind.hide();
  blimey.show();
  comfort=comfort+2;
  console.log(comfort);
});

var nobody = $('.nobody')
nobody.hide();

var lamepotter = $('.lamepotter')
lamepotter.show();

var dances = $('.dances')
dances.show();

dances.click(function(){ // Wrong
  nobody.hide();
  inmind.show();
  comfort=comfort+2;
  console.log(comfort);
});



thinking.click(function(){ // Wrong
  inmind.hide();
  umsure.hide();
  howfeel.hide();
  fancy.show();
  comfort=comfort+2;
  console.log(comfort);
});

//have u been
var umsure = $('.umsure')
umsure.hide();

var nutter = $('.nutter')
nutter.show();


nutter.click(function(){ // Wrong
  umsure.hide();
  howfeel.show();
  comfort=comfort-1;
  console.log(comfort);
});

//oh alright
var alright = $('.alright')
alright.hide();

var suppose = $('.suppose')
suppose.show();

var nonsense = $('.nonsense')
nonsense.show();

suppose.click(function(){ // Wrong
  alright.hide();
  fancy.show();
  comfort=comfort-1;
  console.log(comfort);
});

nonsense.click(function(){ // Wrong
  alright.hide();
  nobody.show();
  comfort=comfort-1;
  console.log(comfort);
});

var endg = $('.endg')
endg.show();

endg.click(function(){ // Wrong
  good.hide();
  endgood.show();
  comfort=comfort+5;
  console.log(comfort);
  document.getElementById('comforttest').innerHTML = comfort;


});

var endb = $('.endb')
endb.show();

endb.click(function(){ // Wrong
  guessso.hide();
  endbad.show();
  comfort=comfort-5;
  console.log(comfort);
  document.getElementById('comfortt').innerHTML = comfort;
});

var endgood = $('.endgood')
endgood.hide();

var endbad = $('.endbad')
endbad.hide();

var about = $('.about')
about.hide();

var abt = $('.abt')
abt.show();

abt.click(function(){ // Wrong
  endbad.hide();
  endgood.hide();
  about.show();
});

var guessso = $('.guessso')
guessso.hide();

lamepotter.click(function(){ // Wrong
  alright.hide();
  nobody.hide();
  guessso.show();
  comfort=comfort-1;
  console.log(comfort);

});

var fancy = $('.fancy')
fancy.hide();

var action = $('.action')
action.show();

var cool = $('.cool')
cool.show();

action.click(function(){ // Wrong
  fancy.hide();
  blimey.hide();
  sryblimey.hide();
  happyharry.show();
  comfort=comfort+2;
  console.log(comfort);

});

cool.click(function(){
  fancy.hide();
  blimey.hide();
  sryblimey.hide();
  notsosure.show();
  comfort=comfort-1;
  console.log(comfort);
});

var blimey = $('.blimey')
blimey.hide();

var howfeel = $('.howfeel')
howfeel.hide();

var rubbish = $('.rubbish')
rubbish.show();

rubbish.click(function(){ // Wrong
  fancy.hide();
  blimey.hide();
  howfeel.hide();
  erwouldnt.show();
  comfort=comfort-1;
  console.log(comfort);
});

var erwouldnt = $('.erwouldnt')
erwouldnt.hide();

var bloodyhell = $('.bloodyhell')
bloodyhell.show();

var troll = $('.troll')
troll.show();

troll.click(function(){ // Wrong
  erwouldnt.hide();
  blimey.hide();
  howfeel.hide();
  sryblimey.show();
  comfort=comfort-1;
  console.log(comfort);
});

var sryblimey = $('.sryblimey')
sryblimey.hide();

var notsosure = $('.notsosure')
notsosure.hide();

var happyharry = $('.happyharry')
happyharry.hide();

var seeing = $('.seeing')
seeing.show();

var glad = $('.glad')
glad.show();

var offcolor = $('.offcolor')
offcolor.show();

offcolor.click(function(){ // Wrong
  notsosure.hide();
  yikes2.hide();
  happyharry.show();
  comfort=comfort-1;
  console.log(comfort);
});


var yike = $('.yike')
yike.show();

var yikes2 = $('.yikes2')
yikes2.hide();

seeing.click(function(){ // Wrong
  happyharry.hide();
  yikes2.show();
  comfort=comfort-1;
  console.log(comfort);
});

var neville = $('.neville')
neville.show();

neville.click(function(){ // Wrong
  happyharry.hide();
  issue.hide();
  good.show();
  comfort=comfort+3;
  console.log(comfort);
});

var good = $('.good')
good.hide();

var issue = $('.issue')
issue.hide();

yike.click(function(){ // Wrong
  yikes2.hide();
  notsosure.hide();
  issue.show();
  comfort=comfort-1;
  console.log(comfort);
});

var bad = $('.bad')
bad.show();

 bad.click(function(){ // Wrong
  issue.hide();
  guessso.show();
});
