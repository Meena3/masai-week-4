function healthRegister() {
    var firnam = document.getElementById("firstname").value;
    var lasnam = document.getElementById("lastname").value;
    var em = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;
    if(firnam.length < 3){
        alert("Firatname atleast 5 characters");
    }
    if (lasnam.length < 3) {
        alert("lastname should be minimum 5 characters");
    }
    if ((em[0]== "@") || (em[em.length-1] == "@")){
        alert("invalid email");
    }
    if (pwd.length == 3) {
        alert("password should be atleast 8 characters and alphanumeric values"); 
    }  
}
function findCalories(){
    var food = document.getElementById("foodSelect").value;
    var gain = '';
    switch (food) {
        case "Rice":
            gain = 300;
            break;
        case "Chapathi" :
            gain = 100;
            break;
        case "Juice" :
            gain = 30;
        case "Sweets":
            gain = 70;
        case "Soups":
            gain = 30;
        case "Coffee":
            gain = 20;
        case "Vegetables":
            gain = 100;
        case "Fruits":
            gain = 80;
        case "Snacks" :
            gain = 130;  
        default:
            break;
    }
    //console.log(gain)
   // console.log(food)
       document.getElementById("gainCalories").value = gain;
       gain = Number(gain);

     var exercise = document.getElementById("exerciseSelect").value;
     var loss = '';
    switch (exercise) {
        case "cycling":
            loss = 210;
        case "walking":
            loss = 180;
        case "weightlifting":
            loss = 150;
        case "running":
            loss = 200;
        case  "yoga":
            loss = 100;       
            break;
        default:
            break;
    }
    //console.log(exercise)
    //console.log(loss)
    document.getElementById("lossCalories").value = loss;
    loss= Number(loss);
    var totalspent = '';
    totalspent = (gain - loss);
    document.getElementById("totalSpent").value = totalspent;
    if (totalspent == 0) {
        document.getElementById("message").innerHTML = "Congratulation You Completed Today's Target"; 
    }
    else {
        document.getElementById("message").innerHTML = "You Put On Your Weight ";
    }

}
