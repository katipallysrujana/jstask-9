//1.Use switch case and take Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday as cases and any expression related to case 
var day="sunday"
switch(day){
    case "monday":
        console.log("today is monday..!")
        break;
    case "tuesday":
        console.log("today is tuesday..!")
        break;
    case "wednesday":
        console.log("today is wednesday..!")
        break;
    case "thursday":
        console.log("today is thursday..!")
        break;
    case "friday":
        console.log("today is friday..!")
        break;
    case "saturday":
        console.log("today is saturday..!")
        break;
    case "sunday":
        console.log("today is holiday..!")
        break;
    default:
        console.log("these are week days")
}

// 2. For of loop:-- iterate array of elements having number 1  to 5

var a=[1,2,3,4,5];
for(var i=0;i<a.length;i++){
    console.log(a[i])
}
// 3. For of loop:-- take string Nd iterate characters
var a=["thanu","ramesh","rani","srujana"]
for(var i=0;i<a.length;i++){
    console.log(a[i])
}