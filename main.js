function displayTime() {
    var currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();
    document.getElementById("time").innerHTML = currentTime; // update the HTML element with the time
  }
  setInterval(displayTime, 1000);




  document.addEventListener("DOMContentLoaded",function(){
    // // holding btn submit
     document.querySelector("#addBtn").disabled = true;
    // // holding input text
     document.querySelector("#taskText").onkeyup = function()
             {
                     if(document.querySelector("#taskText").value.length >= 3 ) {
                    document.querySelector("#addBtn").disabled = false;     
                    }
                     else{
                            document.querySelector("#addBtn").disabled = true;
                    }
             }
    
            document.querySelector("form").onsubmit = function(){
    
    
                     const task= document.querySelector("#taskText").value;
                     const li =document.createElement("li");
                     const check=document.createElement("input");
                     check.type='checkbox';
                     check.setAttribute("id","chBox");
                     li.setAttribute("id","taskLi");
                     li.setAttribute("class","liStyle");
                     li.innerHTML=task;
                     const parentElement = document.createElement("div");   
                     parentElement.appendChild(li);  
                     parentElement.appendChild(check);
                     parentElement.setAttribute("class" , "taskkk")
                      
                     check.addEventListener("change", function() {
                        if (this.checked) {
                          const parentElement = this.parentElement;
                          
                          const doneTasks = document.querySelector('#doneTasks');
                          
                          
                          // Introduce a delay of 2 seconds
                          setTimeout(function() {
                            doneTasks.appendChild(parentElement);
                          }, 100);
                        } 
                        
                        else {
                          const parentElement = this.parentElement;
                          const toDo = document.querySelector('#toDo');
                          toDo.appendChild(parentElement);
                          
                        }
                      });
                      
                      

                      parentElement.style.display = "flex";
                      parentElement.style.alignItems = "center";
                      
                      li.style.flex = "5";
                      check.style.flex = ".3";
                      check.style.width = "20px";
                      check.style.height = "20px";
                     
                     document.querySelector("#toDo").appendChild(parentElement);
                     document.querySelector("#taskText").value='';
                     document.querySelector("#addBtn").disabled = true;
                     



                     return false;
             }
           
           
     })

     

  