function getStorage(name, deafult){
    if(localStorage.getItem(name)===null){
      return deafult;
    }
    else{
      return Number(localStorage.getItem(name));
    }
  }
  if (localStorage.getItem("clicksOnCookie") === null) {
    console.log("No data found for cookies!");
    var clicks;
    clicks = 0;
  }
  
  else {
    console.log("Data found for cookies!");
    var clicks = Number(localStorage.clicksOnCookie);
    document.getElementById("cookies").innerHTML = clicks;
    
  }
  if (localStorage.getItem("clicksPerClick") === null) {
    console.log("No data found for Clicks!");
    var perclick = 1;
  }
  
  else {
    console.log("Data found for Clicks!");
    var perclick = Number(localStorage.clicksPerClick);
    document.getElementById("cpcDisplay").innerHTML = "You are getting: " + perclick + " per click" ;
  }
  if (localStorage.getItem("clicksPerSecond") === null) {
    console.log("No data foune for Per Second!");
    var persecond= 0;
  }
  
  else {
    console.log("Data found for Per Second!");
    var persecond = Number(localStorage.clicksPerSecond);
    document.getElementById("cpsDisplay").innerHTML = "You are getting: " + persecond + " per second" ;
  }
  if (localStorage.getItem("clickerPrice") === null) {
    console.log("No data found for the clicker price");
    var clickerPrice = 50;
  }
  
  else {
    console.log("Data found for clickerPrice");
    var clickerPrice = Number(localStorage.clickerPrice);
    document.getElementById("ClickerBuy").innerHTML  = "+1 Cookies per second! "+clickerPrice + " cookies.";
  }
  if (localStorage.getItem("bigCPCprice") === null) {
    console.log("no data found for big cpc price");
    var bigcpcUpPrice = 250;
  }
  
  else {
    console.log("Data found for bigCPCprice");
    var bigcpcUpPrice = Number(localStorage.bigCPCprice);
    document.getElementById("bigcpcBuy").innerHTML  = "+6 cookies per click! "+bigcpcUpPrice + " cookies.";
    
  }
  if (localStorage.getItem("priceOfClicker") === null) {
    console.log("no data found for the small click price! Set to 25");
    var cpcPrice = 25;
  }
  
  else {
    console.log("Data found for clicker price!");
    var cpcPrice = Number(localStorage.priceOfClicker);
    document.getElementById("smallcpcBuy").innerHTML  = "+1 cookie per click! "+cpcPrice + " cookies.";
    
  }
  if (localStorage.getItem("BigclickerPrice") === null) {
    console.log("no data found for the big clicker price! Set to 10");
    var BigclickerPrice = 300;
  }
  
  else {
    console.log("Data found for big clicker price!");
    var BigclickerPrice = Number(localStorage.BigclickerPrice);
    document.getElementById("BigClickerBuy").innerHTML  = "+5 Cookies Per Second! "+ BigclickerPrice + " cookies!";
    
  }
  console.log("Uh ohhh, are you cheating? That may not end well...")
  var perSecondIntervel = setInterval(perSecond, 1000);
  
  
    
  
  function cpcUp(){
    if(clicks >= cpcPrice){
      clicks = clicks - cpcPrice;
      perclick = perclick + 1;
      cpcPrice= cpcPrice * 2.5;
      cpcPrice = Math.round(cpcPrice);
      document.getElementById("cookies").innerHTML = clicks;
      document.getElementById("smallcpcBuy").innerHTML = "+1 Cookies Per Click! " + cpcPrice + " cookies.";
      document.getElementById("cpcDisplay").innerHTML = "You are getting: " + perclick + " per click" ;
      localStorage.setItem('priceOfClicker', cpcPrice);
      localStorage.setItem('clicksPerClick', perclick);
      
    }
    else{
      alert("Not Enough Cookies!");
      
    }
    
  }
  function resetData(){
    if (confirm('Are you sure you want to reset your data?')) {
    console.log('reseting data....');
    localStorage.removeItem("clicksOnCookie");
    console.log("Reset clicks");
    localStorage.removeItem("clicksPerClick");
    localStorage.removeItem("clicksPerSecond");
    console.log("Reset clicks per click and per second");
    localStorage.removeItem("clickerPrice");
    localStorage.removeItem('priceOfClicker');
    localStorage.removeItem("bigCPCprice");
    localStorage.removeItem("BigclickerPrice")
    console.log("Done resetting data, resetting variables");
    clicks = 0;
    persecond = 0;
    console.log("Reset key variables, changing displays");
    document.getElementById("cookies").innerHTML = clicks;
    console.log("Reloading page");
    location.reload();
  } 
  else {
    console.log('No answer given, will not reset data..');
    }
  }
  
  function bigcpcUp(){
    if(clicks >= bigcpcUpPrice){
      clicks = clicks - bigcpcUpPrice;
      perclick = perclick + 6;
      bigcpcUpPrice = bigcpcUpPrice * 2.5;
      bigcpcUpPrice = Math.round(bigcpcUpPrice);
      document.getElementById("cookies").innerHTML = clicks;
      document.getElementById("bigcpcBuy").innerHTML  = "+6 Cookies Per Click! "+bigcpcUpPrice + " cookies.";
      document.getElementById("cpcDisplay").innerHTML = "You are getting: " + perclick + " per click" ;
      localStorage.setItem('clicksPerClick', perclick);
      localStorage.setItem("bigCPCprice", bigcpcUpPrice);
    }
    else{
      alert("Not Enough Cookies!");
      
    }
    
  }
  function perSecond(){
    clicks = clicks + persecond;
    document.getElementById("cookies").innerHTML = clicks;
    localStorage.setItem('clicksOnCookie', clicks);
  }
  function buyClicker(){
    if(clicks >= clickerPrice){
      clicks = clicks - clickerPrice;
      clickerPrice = clickerPrice * 1.7;
      clickerPrice = Math.round(clickerPrice);
      document.getElementById("ClickerBuy").innerHTML  = "+1 Cookies Per Second! "+clickerPrice + " cookies.";
      persecond = persecond + 1;
      document.getElementById("cookies").innerHTML = clicks
      document.getElementById("cpsDisplay").innerHTML = "You are getting: " + persecond + " per second" ;
      localStorage.setItem("clicksPerSecond", persecond);
      localStorage.setItem("clickerPrice", clickerPrice);
      
    }
    else{
      alert("Not Enough Cookies!");
      
    }
    
  }
  function buyBigClicker(){
    if(clicks >= BigclickerPrice){
      clicks = clicks - BigclickerPrice;
      BigclickerPrice = BigclickerPrice * 1.5;
      BigclickerPrice = Math.round(BigclickerPrice);
      document.getElementById("BigClickerBuy").innerHTML  = "+5 Cookies Per Second! "+BigclickerPrice + " cookies!";
      persecond = persecond + 5;
      document.getElementById("cookies").innerHTML = clicks;
      document.getElementById("cpsDisplay").innerHTML = "You are getting: " + persecond + " per second" ;
      localStorage.setItem("clicksPerSecond", persecond);
      localStorage.setItem("BigclickerPrice", BigclickerPrice);
      
    }
    else{
      alert("Not Enough Cookies!");
      
    }
  }

  function ClickUp(){
    clicks = clicks + perclick;
    document.getElementById("cookies").innerHTML = clicks;
    localStorage.setItem('clicksOnCookie', clicks);
    
  
  }