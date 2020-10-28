function age_calc2()
{
	var DOB=prompt("plz enter birthdate in DD/MM/YYYY format");

	var year=DOB.split("/")[2];
	var month=DOB.split("/")[1];
	var day=DOB.split("/")[0];
	var date= new Date();
	var nowyear= date.getFullYear();
	//console.log(nowyear)
	var nowmonth= date.getMonth()+1;
	//console.log(nowmonth+1)
	var nowdate= date.getDate();
	//console.log(nowdate);
	if(day>nowdate)
	{
		nowdate=nowdate+30;
		nowmonth=nowmonth-1;
	}
	if(month>nowmonth)
	{
		nowmonth=nowmonth+12;
		nowyear=nowyear-1;
	}
	var ageday=nowdate-day;
	var agemonth= nowmonth-month;
	var ageyear= nowyear-year;
	console.log(ageday);
	console.log(agemonth);
	console.log(ageyear);
	var h4=document.createElement('h4');
	var textnode=document.createTextNode("You are "+ageyear+" years,"+agemonth+" months and "+ageday+" days old");
	h4.setAttribute('id',"hid");
	h4.appendChild(textnode);
	document.getElementById('flex-box-result').appendChild(h4);
}
function age_calc1()
{
	var birth=prompt("please enter your birth year");
	var result=(2020-birth)*365;
	var h4=document.createElement('h1');
	var textnode=document.createTextNode("You are "+result+ " days old.");
	h4.setAttribute('id',"hid");
	h4.appendChild(textnode);
	document.getElementById('flex-box-result').appendChild(h4);
}
function reset()
{
	document.getElementById('flex-box-result').remove();
}