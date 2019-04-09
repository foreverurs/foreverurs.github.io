const message1 =`Ek Pal Ki Ye Baat Nahi +
				 Do Pal Ka Ye Sath Nahi +
				 Kehne Ko Toh Ye Zindagi..Jannat Se Pyaari hai +
				 Par Vo Sath Hi Kya Jisme Apka Hath Nahi`
const message2 =`Dil Ke Kone Se Ek Awaaz Aati Hai+
				 Hame Har Pal Unki Yaad Aati Hai+
				 Dil Puchta Hai Bar Bar Hamse+
				 Ke Jitna Hum Yaad Karte Hai Unhe+
				 Kya Unhe Bhi Hmari Yaad Aati Hai`
let data=[];
data.push(message2);
data.push(message1);
let login=document.getElementById('login');
let messagediv=document.getElementById('messagediv');

login.style.display='block';
messagediv.style.display='none';

function submit(){
	if((document.getElementById('password').value).toLowerCase()=='dilse'||(document.getElementById('password').value).toLowerCase()=='dil se'){
		login.style.display='none';
		messagediv.style.display='block';

		for(d of data){
			let array=d.split('+');
			let div;
			for(a of array){
				div=document.createElement('div');
				div.innerHTML=a.trim();
				messagediv.appendChild(div);
			}
			div.style.paddingBottom='50px';
		}
	}
}
