// Bot with bootbot
//https://github.com/Charca/bootbot
//./ngrok http 3000 
// run nodemon ongBotFb.js


const BootBot = require('bootbot')
const conf = require('./config.js')
const delay = require('delay');

const bot = new BootBot({
	//NOS DA FB
	// accessToken: process.env.ACCESSTOKEN,
	accessToken: conf.accessToken1,
	//accessToken: '',

	

	//LE DAMOS A FB 
	verifyToken: conf.verifyToken1,
	// verifyToken: process.env.VERIFYTOKEN,

    //NOS DA FB
	appSecret: conf.appSecret1,
	// appSecret: process.env.APPSECRET

});






// bot.on('message', (payload,chat)=> {

// 	console.log(payload)
// 	chat.say(`Echo : ${payload.message.text})
// });

//Escuchar ciertos saludos
// bot.hear(['hola','hi','guten tag, que onda, holi'],(payload,chat)=> {

// 	chat.say('Hola soy el bot de Ong, en qué te puedo ayudar? ')
// })


//Respuesta a hola

bot.hear(['Hola', 'hey', 'saludos', 'saludo', 'ong', 'Saludos', '¿Como estas?', 'quiero', 'quisiera','dónde', 'donde'], (payload, chat) =>{
	const text = payload.message.text;
	console.log(text);
	
	chat.say({
		text: 'Hola soy el bot de Ong, en qué te puedo ayudar?',
		buttons: [
			{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
			{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
		]	
	});
});


bot.on('postback:HORARIOS_SETTINGS', (payload, chat) => {
	console.log('The Horariosbutton was clicked!');
	chat.say({

		text: '¿De qué dia te gustaría conocer los horarios?',
		quickReplies: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
	});

});	

bot.hear(['Volver a Horarios'], (payload, chat) =>{
	
	chat.say({

		text: '¿De qué dia te gustaría conocer los horarios?',
		quickReplies: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
	});
	
});


bot.on('postback:HELP_HUMAN', (payload, chat) => {
	console.log('The Help Me button was clicked!');
	chat.say({

		text: 'Podrás contactarte directamente con alguien escribiendo al correo ongsdiner@gmail.com y enviando un número de contacto',
		quickReplies: ['Volver a Horarios', 'adiós']
	});

});	


bot.hear(['Lunes'], (payload, chat) =>{
	
	chat.say({

		text: 'Selecciona un horario del lunes',
		quickReplies: ['Lunes De 7 a 8', 'Lunes De 11 a 12', 'Lunes 19:30']
	});
	
});

bot.hear(['Martes'], (payload, chat) =>{
	
	chat.say({

		text: 'Selecciona un horario del Martes',
		quickReplies: ['Martes De 11 a 12']
	});
	
});

bot.hear(['Miercoles', 'Miercoles'], (payload, chat) =>{
	
	chat.say({

		text: 'Selecciona un horario del Miercoles',
		quickReplies: ['Miercoles De 7 a 8', 'Miercoles De 13 a 14', 'Miercoles De 20 a 21']
	});
	
});

bot.hear(['Jueves'], (payload, chat) =>{
	
	chat.say({

		text: 'Selecciona un horario del Jueves',
		quickReplies: ['Jueves De 11 a 12']
	});
	
});

bot.hear(['Viernes'], (payload, chat) =>{
	
	chat.say({

		text: 'Selecciona un horario del Viernes',
		quickReplies: ['Viernes De 7 a 8', 'Viernes De 11 a 12']
	});
	
});

bot.hear(['Sabado'], (payload, chat) =>{
	
	chat.say({

		text: 'Los sabados se imparte este taller con duración de 2 horas y media',
		quickReplies: ['Sabado 10 a 12:30']
	});
	
});

bot.hear(['Lunes De 7 a 8','Miercoles De 7 a 8', 'Viernes de 7 a 8' ], (payload, chat) =>{

	(async () => {
		chat.say( 'Para conocer esta dirección puedes enviar un correo a ongsdiner@gmail.com con un número de contacto');

	
		chat.say({
				attachment: 'image',
				url: 'http://www.baltapirts.lv/img/gallery/28.jpg'
		});
	
	await delay(6000);
		
		// Executed 100 milliseconds later
			chat.say({
				text: '¿Fue util esta información? ¿Quieres volver a revisar los horarios?',
				buttons: [
					{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
					{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
				] 
			});
	})();
				
});

bot.hear(['Lunes De 11 a 12','Viernes De 11 a 12'], (payload, chat) =>{

	(async () => {
		chat.say( '*Esta es una clase especialmente para adultos mayores y de la tercera edad.* Esta es la información del lugar: Alcanfores 29, Las Águilas, CDMX ');

		chat.say( 'Puedes revisar la ubicación aquí: https://goo.gl/maps/ySLfu8ba7e62');
		chat.say({
				attachment: 'image',
				url: 'https://sukhmaani.com/wp-content/themes/sukhmaani/img/b1.jpg'
		})
	
	
	await delay(6000);
		
		
			chat.say({
				text: '¿Fue util esta información? ¿Quieres volver a revisar los horarios?',
				buttons: [
					{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
					{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
				] 
			});
	})();
	
});

bot.hear(['Lunes 19:30'], (payload, chat) =>{

	(async () => {
		chat.say( 'Esta es la información del lugar: En Barranca del Muerto');

		chat.say( 'PPara conocer esta dirección puedes enviar un correo a ongsdiner@gmail.com con un número de contacto');
		chat.say({
				attachment: 'image',
				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXej9UGs1FoIl8a0_Ff8G0MpxGzb4hem1vI49OrCuGU4KMpRTG'
		})
		
	await delay(4000);
		
		// Executed 100 milliseconds later
			chat.say({
				text: '¿Fue util esta información? ¿Quieres volver a revisar los horarios?',
				buttons: [
					{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
					{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
				] 
			});
	})();
	
});

bot.hear(['Martes De 11 a 12','Jueves De 11 a 12'], (payload, chat) =>{

	(async () => {
		chat.say( '*Esta es una clase especialmente para adultos mayores y de la tercera edad.* /n Esta es la información del lugar: Las Lomas Explanada 305 Centro SEDI ');

		chat.say( 'Puedes revisar la ubicación aquí: https://goo.gl/maps/rDZ5xNBucGt');
		chat.say({
				attachment: 'image',
				url: 'http://lospatitosdelgenil.es/wp-content/uploads/2015/02/centro-infantil-003.jpg'
			})
	
	
	await delay(4000);
		
		// Executed 100 milliseconds later
			chat.say({
				text: '¿Fue util esta información? ¿Quieres volver a revisar los horarios?',
				buttons: [
					{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
					{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
				] 
			});
	})();
	
});

bot.hear(['Miercoles De 13 a 14'], (payload, chat) =>{

	(async () => {
		chat.say( '*Esta es una clase especialmente para adultos mayores y de la tercera edad.* /n Esta es la información del lugar: Olivar de los Padres - Fundación Vida Plena Asilo de día http://fundacioninova.org/fundacion_vida_plena/ ');

		chat.say( 'Puedes revisar la ubicación aquí: https://goo.gl/maps/8MCCcCzhNcE2');
		chat.say({
				attachment: 'image',
				url: 'https://www.debate.com.mx/export/sites/debate/img/2016/08/28/abuelos2.jpg_657678749.jpg'
			})
	
	
	await delay(4000);
		
		// Executed 100 milliseconds later
			chat.say({
				text: '¿Fue util esta información? ¿Quieres volver a revisar los horarios?',
				buttons: [
					{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
					{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
				] 
			});
	})();
	
});

//Miércoles 20  a 21     en la Colonia del Valle

bot.hear(['Miercoles De 20 a 21' ], (payload, chat) =>{

	(async () => {
		chat.say( 'Colonia del valle. Para conocer esta dirección puedes enviar un correo a ongsdiner@gmail.com con un número de contacto');

	
		chat.say({
				attachment: 'image',
				url: 'http://comoorganizarlacasa.com/wp-content/uploads/2016/08/Pisos-de-madera-para-el-interior-de-tu-casa-20.jpg'
		});
	
	await delay(6000);
		
		// Executed 100 milliseconds later
			chat.say({
				text: '¿Fue util esta información? ¿Quieres volver a revisar los horarios?',
				buttons: [
					{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
					{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
				] 
			});
	})();
				
});

bot.hear(['Sabado 10 a 12:30'], (payload, chat) =>{

	(async () => {
		chat.say( 'Esta es la información del lugar: Alcanfores 29, Las Águilas, CDMX ');

		chat.say( 'Puedes revisar la ubicación aquí: https://goo.gl/maps/ySLfu8ba7e62');
		chat.say({
				attachment: 'image',
				url: 'https://sukhmaani.com/wp-content/themes/sukhmaani/img/b1.jpg'
		})
	
	
	await delay(6000);
		
		
			chat.say({
				text: '¿Fue util esta información? ¿Quieres volver a revisar los horarios?',
				buttons: [
					{type: 'postback', title: 'Horarios', payload: 'HORARIOS_SETTINGS'}, 
					{type: 'postback', title: 'Hablar con un humano', payload: 'HELP_HUMAN'}
				] 
			});
	})();
	
});
//Escuchar ciertas despedidas
bot.hear(['adios','adiós','nos vemos' , 'bye', 'hasta luego'],(payload,chat)=> {

	chat.say('Hasta pronto, te esperamos en las clases! :D ')
})





//Enviar mensajes con botones

bot.hear(['Ayuda','ayuda.', 'hey'], (payload, chat) =>{
		chat.say({
			text: 'En qué te puedo ayudar??',
			buttons: [
				{type: 'postback', title: 'Setings', payload: 'HELP_SETTINGS'}, 
				{type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN'}
			]

		});

});


// bot.on(postback:HELP_HUMAN,(payload, chat)=> {
// 	chat.say('una persona se comunicará contigo a la brevedad')

// });



bot.start()














