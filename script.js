
function display(){
const randomNumber=Math.floor(Math.random()*27);
const persons=["ajay","alagu thanush","dharsan","prithvi","soji","vignesh",
"selva muthukumar","selva kathirvelraja","kalaivanan","jesudoss","dhanush","sibee",
"rajsabari","yogesh","ranjith","bala","kavin","gayathri","shrileka","rajarajeshwari","suneeti","ashmitha","sagana","dharsana","pavithra"
,"Dhawaziri","dharshini"];
console.log(randomNumber);
document.getElementById("person").textContent=persons[randomNumber];
}