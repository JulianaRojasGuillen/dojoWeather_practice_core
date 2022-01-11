function displayAlert(){
    alert("Loading weather report...");
}

function disappearAlert(){
    document.querySelector(".message").remove();
}


function changetoFarenheit(nums){
    for(let i=0;i<nums.length;i++){
        nums[i]= Math.round(nums[i]*1.8+32);
    }
    return nums;
}


function convertTemperature(){
    
    let nums=[24,18,27,19,21,16,26,21];
    let numsCelsius=document.querySelectorAll(".temperature");
   
    if(document.querySelector(".scaleOption").value==="°F"){
        
        let newNums=changetoFarenheit(nums);
        for(let i=0;i<numsCelsius.length;i++){
            numsCelsius[i].innerHTML= newNums[i] + "°";
        }   
    } else {
        for(let i=0;i<numsCelsius.length;i++){
            numsCelsius[i].innerHTML= nums[i] + "°";
        }
    }
    
}


