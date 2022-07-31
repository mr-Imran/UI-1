   //if it is in phone than hide the sidebar
   if (window.innerWidth < 768) {
    document.getElementById("checkphone").style.display = "none";
    document.getElementById("forhide").style.display = "none";

 }

 // 

 document.getElementById("loadmore").addEventListener("click",function(){

    //refresh the page 
    alert("refresh the page");

 }
 )

http.createServer(function(req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

console.log("Server is running on port 8080");

