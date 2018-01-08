function fbs_click(){
  var u = location.href;
  var t = document.title;
  window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t)+'&s='+encodeURIComponent(CQuote + CAuthor),'sharer','toolbar=0,status=0,width=626,height=436');
}


function rSign(){
  var test = Math.random();
  return test > 0.5 ? 1 : -1;
}
var CQuote = "", CAuthor = "";
function getQuote() {
$.ajax({
        jsonp: "jsonp",
        dataType: "jsonp",
        contentType: "application/jsonp",
        url: "https://api.forismatic.com/api/1.0/?",
        data : {
          method:"getQuote",
          lang:"en",
          format:"jsonp",          
        },
        success : function(quote){
      //  document.getElementById("quote").innerHTML =  
        CQuote = quote.quoteText ;
      // document.getElementById("author").innerHTML = 
        CAuthor = quote.quoteAuthor ;
      document.getElementById("author").innerHTML = CAuthor; 
      document.getElementById("quote").innerHTML = CQuote;    
        }
        
      });
}    
 

 $(document).ready(function(){
  getQuote();
 })


var background = document.getElementById('backimg');
var huetarget = 0;
var huecurrent = 0;
var bright = 1;
function abyssmal(){
  background.style.filter = 'hue-rotate('+huecurrent+'deg) ';
  if (huecurrent < huetarget) {huecurrent+=Math.abs(huetarget-huecurrent)/20}
  if (huecurrent >= huetarget) {huecurrent-=Math.abs(huetarget-huecurrent)/20}
  }
var interval = setInterval(abyssmal,25);

$("#btnAnimate").on("click",function(){
  huetarget += (Math.random()*50+50)*rSign();
  getQuote();
});

$('#tweet').on("click",function(){
  window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + CQuote + '"   -' + CAuthor) ,"_blank")    
});

$('#facebook').on("click",function(){
  fbs_click();
  
});