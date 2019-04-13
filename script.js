const message1 =`Ek Pal Ki Ye Baat Nahi +
				 Do Pal Ka Ye Sath Nahi +
				 Kehne Ko Toh Ye Zindagi..Jannat Se Pyaari hai +
				 Par Vo Sath Hi Kya Jisme Apka Hath Nahi`
const message2 =`Dil Ke Kone Se Ek Awaaz Aati Hai+
				 Hame Har Pal Unki Yaad Aati Hai+
				 Dil Puchta Hai Bar Bar Hamse+
				 Ke Jitna Hum Yaad Karte Hai Unhe+
				 Kya Unhe Bhi Hmari Yaad Aati Hai`
const message3 = `Diwaana Hun Tera Mujhe Inkar Toh Nahi+
                                 Kaise Main Keh Dun Mujhe Pyaar Nahi+
                                 Kuch Shararat Toh Teri Nigahon Ki Bhi Thi+
                                 Mai Akela Iska Gunahgar Toh Nahi`
const message4 = `Zindagi Mai Koi Pyaar Se Pyaara Ni Milta+
                                 Zindagi Mai Koi Pyaar Se Pyaara Ni Milta+
                                 Jo Hai Pass Apke Usko Sambhal Kar Rakhna+
                                 Kyunki Ek Bar Kho Kar Pyaar Dubara Ni Milta`
const message5 = `Chupke se dhadkan me utar jaayenge,+ 
		  Raahen Ulfat me had se guzar jaayenge,+ 
		  Aap jo hamen itna chahenge, +
		  Hum to aapki saanson me pighal jaayenge.`
let data=[];
data.push(message5);
data.push(message4);
data.push(message3);
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
