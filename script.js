let messages={
	message1 : `Ek Pal Ki Ye Baat Nahi + Do Pal Ka Ye Sath Nahi + Kehne Ko Toh Ye Zindagi..Jannat Se Pyaari hai + Par Vo Sath Hi Kya Jisme Apka Hath Nahi`,
	message2 : `Dil Ke Kone Se Ek Awaaz Aati Hai+Hame Har Pal Unki Yaad Aati Hai+Dil Puchta Hai Bar Bar Hamse+Ke Jitna Hum Yaad Karte Hai Unhe+Kya Unhe Bhi Hmari Yaad Aati Hai`,
	message3 : `Diwaana Hun Tera Mujhe Inkar Toh Nahi+Kaise Main Keh Dun Mujhe Pyaar Nahi+Kuch Shararat Toh Teri Nigahon Ki Bhi Thi+Mai Akela Iska Gunahgar Toh Nahi`,
	message4 : `Zindagi Mai Koi Pyaar Se Pyaara Ni Milta+Zindagi Mai Koi Pyaar Se Pyaara Ni Milta+Jo Hai Pass Apke Usko Sambhal Kar Rakhna+Kyunki Ek Bar Kho Kar Pyaar Dubara Ni Milta`,
	message5 : `Chupke se dhadkan me utar jaayenge,+ Raahen Ulfat me had se guzar jaayenge,+ Aap jo hamen itna chahenge, + Hum to aapki saanson me pighal jaayenge.`,
	message6 : `Apki Parchai Hamare Dil Mai Hai+Apki Yaadein Hamari Aankhon Mai Hain+Aapko Hum Bhulaye Bi Kaise+Aapki Mohabbat Hamare Sansoon Mai Hai.`
}

let createdDate=new Date("04/09/2019 00:00:00");
let n=Math.floor((new Date()-createdDate)/(1000*60*60*24))+1;

let data=[];

for(var i=n;i>=1;i--){
	let variable=`message${i}`;
	data.push(messages[`${variable}`]);
}

console.log(data);
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
