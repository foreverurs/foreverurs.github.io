const message =`Ek Pal Ki Ye Baat Nahi +
				 Do Pal Ka Ye Sath Nahi +
				 Kehne Ko Toh Ye Zindagi..Jannat Se Pyaari hai +
				 Par Vo Sath Hi Kya Jisme Apka Hath Nahi`
				 
let login=document.getElementById('login');
let messagediv=document.getElementById('messagediv');

login.style.display='block';
messagediv.style.display='none';

function submit(){
	if((document.getElementById('password').value).toLowerCase()=='manjul'){
		login.style.display='none';
		messagediv.style.display='block';
		let array=message.split('+');
		for(a of array){
			let div=document.createElement('div');
			div.innerHTML=a.trim();
			messagediv.appendChild(div);
		}
	}
}
