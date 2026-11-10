// Traducción de la web (ES / EN / FR) para las banderas de la cabecera.
// Cada clave es el texto en castellano tal cual aparece en index.html; el valor es [inglés, francés].
// Si cambias un texto en index.html, cambia también su clave aquí (si no, ese texto se quedará en castellano).
// El chat de Eris (#panel-eris) y las conversaciones de ejemplo (#hilo) tienen su propio sistema de idioma.
(function(){
  var D = {
    'La app Euxenos, en tu móvil': ['The Euxenos app, on your phone', 'L’appli Euxenos, sur votre mobile'],
    'Las citas, las reservas y los pedidos que recoge Eris te llegan a la app con aviso al momento. Desde ahí confirmas, propones otra hora o cancelas con un toque, y tienes tu catálogo, tu horario y tus días de cierre.': ['The appointments, bookings and orders Eris takes reach the app with an instant notification. From there you confirm, suggest another time or cancel with one tap, and you have your catalogue, opening hours and closing days.', 'Les rendez-vous, réservations et commandes pris par Eris arrivent dans l’appli avec une notification immédiate. De là, vous confirmez, proposez un autre horaire ou annulez d’un geste, et vous avez votre catalogue, vos horaires et vos jours de fermeture.'],
    'Un restaurante hace una foto a su carta y la app saca los platos y los precios, sin teclear nada.': ['A restaurant takes a photo of its menu and the app pulls out the dishes and prices, with no typing.', 'Un restaurant prend sa carte en photo et l’appli en extrait les plats et les prix, sans rien taper.'],
    '79 €/mes': ['€79/month', '79 €/mois'],
    '790 €/año': ['€790/year', '790 €/an'],
    'App Euxenos con tu Eris: agenda, citas y avisos en el móvil': ['Euxenos app with your Eris: diary, appointments and notifications on your phone', 'Appli Euxenos avec votre Eris : agenda, rendez-vous et notifications sur votre mobile'],
    'Atención 24 h también en el chat de tu web': ['24/7 answering also in your website chat', 'Accueil 24 h/24 aussi dans le chat de votre site'],
    '49 €/mes': ['€49/month', '49 €/mois'],
    '490 €/año': ['€490/year', '490 €/an'],
    // Quiénes somos (04/11)
    'La empresa y lo que hacemos': ['The company and what we do', 'L’entreprise et ce que nous faisons'],
    'Euxenos es una empresa de Talavera de la Reina que ayuda a pequeños negocios de toda España a atender bien a sus clientes, aunque no puedan estar pendientes del teléfono todo el día.': ['Euxenos is a company from Talavera de la Reina (Spain) that helps small businesses all over Spain look after their customers well, even when they can’t be on the phone all day.', 'Euxenos est une entreprise de Talavera de la Reina (Espagne) qui aide les petites entreprises de toute l’Espagne à bien accueillir leurs clients, même quand elles ne peuvent pas rester au téléphone toute la journée.'],
    'Eris, nuestra agente de inteligencia artificial.': ['Eris, our artificial intelligence agent.', 'Eris, notre agente d’intelligence artificielle.'],
    'Coge el teléfono y contesta WhatsApp, Instagram y el chat de la web cuando tú no llegas. Da citas, responde dudas y te deja el aviso en el móvil.': ['She answers the phone, WhatsApp, Instagram and your website chat when you can’t. She books appointments, answers questions and leaves you a notification on your phone.', 'Elle répond au téléphone, à WhatsApp, à Instagram et au chat du site quand vous ne pouvez pas. Elle prend les rendez-vous, répond aux questions et vous laisse une notification sur votre mobile.'],
    'La app Euxenos.': ['The Euxenos app.', 'L’appli Euxenos.'],
    'Tu agenda, tus citas, tus pedidos y tu catálogo en el móvil, con avisos al momento.': ['Your diary, appointments, orders and catalogue on your phone, with instant notifications.', 'Votre agenda, vos rendez-vous, vos commandes et votre catalogue sur votre mobile, avec des notifications instantanées.'],
    'Páginas web para tu negocio.': ['Websites for your business.', 'Des sites web pour votre entreprise.'],
    'Una web propia, sencilla y clara, con Eris atendiendo en el chat.': ['Your own simple, clear website, with Eris answering in the chat.', 'Votre propre site, simple et clair, avec Eris qui répond dans le chat.'],
    'Cómo lo hacemos': ['How we do it', 'Comment nous le faisons'],
    'Nos cuentas cómo trabajas y lo montamos todo por ti: la agente, tus canales y los avisos. Después lo mantenemos y lo mejoramos. Eris no sustituye a nadie: es una más de tu equipo. Sin permanencia y con precio final.': ['Tell us how you work and we set everything up for you: the AI agent, your channels and the notifications. Then we maintain and improve it. Eris doesn’t replace anyone: she’s one more member of your team. No lock-in and the price you see is the price you pay.', 'Vous nous expliquez comment vous travaillez et nous installons tout pour vous : l’agente d’intelligence artificielle, vos canaux et les notifications. Ensuite, nous l’entretenons et l’améliorons. Eris ne remplace personne : elle fait partie de votre équipe. Sans engagement et au prix final.'],
    'Por qué nos llamamos Euxenos': ['Why we’re called Euxenos', 'Pourquoi nous nous appelons Euxenos'],
    // Agente, no chatbot (10/11)
    'No es un chatbot. Es una agente que resuelve.': ['Not a chatbot. An agent that gets things done.', 'Ce n’est pas un chatbot. C’est une agente qui agit.'],
    'Un chatbot contesta lo que le preguntas. Eris, además, hace el trabajo.': ['A chatbot answers what you ask. Eris also does the work.', 'Un chatbot répond à ce qu’on lui demande. Eris, en plus, fait le travail.'],
    'Coge la llamada que tú no puedes': ['She takes the call you can’t', 'Elle prend l’appel que vous ne pouvez pas prendre'],
    'Entiende qué quiere tu cliente y te deja su petición de cita en la app, lista para confirmar con un toque.': ['She understands what your customer wants and leaves the appointment request in your app, ready to confirm with one tap.', 'Elle comprend ce que veut votre client et vous laisse sa demande de rendez-vous dans l’appli, prête à confirmer d’un geste.'],
    'Contesta con los datos reales de tu negocio': ['She answers with your business’s real details', 'Elle répond avec les vraies informations de votre entreprise'],
    'Tu horario, tus precios, tus días de cierre. No con frases de manual.': ['Your opening hours, your prices, your closing days. Not with stock phrases.', 'Vos horaires, vos prix, vos jours de fermeture. Pas avec des phrases toutes faites.'],
    '¿Te escriben una cita por WhatsApp?': ['Someone books by WhatsApp?', 'On vous demande un rendez-vous par WhatsApp ?'],
    'Mándale la captura a tu Eris y ella la apunta en tu agenda.': ['Send the screenshot to your Eris and she adds it to your diary.', 'Envoyez la capture à votre Eris et elle l’inscrit dans votre agenda.'],
    'Le hablas como a una compañera': ['You talk to her like a colleague', 'Vous lui parlez comme à une collègue'],
    '«¿Qué tengo mañana?», «apúntame a María el domingo a las cinco». Y lo hace.': ['“What do I have tomorrow?”, “book María in on Sunday at five”. And she does it.', '« Qu’est-ce que j’ai demain ? », « note María dimanche à cinq heures ». Et elle le fait.'],
    'Si alguien quiere hablar contigo': ['If someone wants to talk to you', 'Si quelqu’un veut vous parler'],
    'Recoge sus datos y te avisa al momento.': ['She takes their details and lets you know straight away.', 'Elle prend ses coordonnées et vous prévient tout de suite.'],
    // Web por secciones (04/11): atajos, volver al inicio y «Ver otro apartado»
    '← Volver al inicio': ['← Back to home', '← Retour à l’accueil'],
    '¿Qué quieres ver?': ['What would you like to see?', 'Que voulez-vous voir ?'],
    'Toca un apartado y lo abrimos aquí mismo, sin tener que bajar por toda la página.': ['Tap a section and it opens right here, no need to scroll through the whole page.', 'Touchez une rubrique et elle s’ouvre ici même, sans parcourir toute la page.'],
    'Eris, tu web y la app para tu negocio': ['Eris, your website and the app for your business', 'Eris, votre site et l’appli pour votre entreprise'],
    'Llámala o escríbele como si fueras tu cliente': ['Call or message her as if you were your customer', 'Appelez-la ou écrivez-lui comme si vous étiez votre client'],
    'De la primera llamada a tenerla funcionando': ['From the first call to having her up and running', 'Du premier appel à sa mise en service'],
    'Peluquerías, clínicas, talleres, restaurantes y más': ['Salons, clinics, garages, restaurants and more', 'Salons, cliniques, garages, restaurants et plus'],
    'Los 2 packs, sin permanencia': ['The 2 plans, no lock-in', 'Les 2 formules, sans engagement'],
    'Lo que más nos preguntan': ['What people ask us most', 'Ce qu’on nous demande le plus'],
    'Teléfono, WhatsApp, correo y tu opinión': ['Phone, WhatsApp, email and your feedback', 'Téléphone, WhatsApp, e-mail et votre avis'],
    'Contacto': ['Contact', 'Contact'],
    'Ver otro apartado': ['See another section', 'Voir une autre rubrique'],
    'Inicio': ['Home', 'Accueil'],
    // Nuevas secciones (03/11): menú por sector, Pruébala ahora, preguntas frecuentes y barra del móvil
    'Pruébala ahora': ['Try her now', 'Essayez-la maintenant'],
    'Por sector': ['By sector', 'Par secteur'],
    'Peluquerías y barberías': ['Hair salons and barbershops', 'Salons de coiffure et barbiers'],
    'Clínicas': ['Clinics', 'Cliniques'],
    'Preguntas frecuentes': ['FAQ', 'Questions fréquentes'],
    'Pruébala ahora, como si fueras tu cliente': ['Try her now, as if you were your customer', 'Essayez-la maintenant, comme si vous étiez votre client'],
    'Treinta segundos bastan para ver cómo atendería a tus clientes. Pregúntale lo que quieras: precios, citas o cómo funciona.': ['Thirty seconds is enough to see how she would look after your customers. Ask her anything: prices, appointments or how it works.', 'Trente secondes suffisent pour voir comment elle s’occuperait de vos clients. Demandez-lui ce que vous voulez : prix, rendez-vous ou fonctionnement.'],
    'Por teléfono': ['By phone', 'Par téléphone'],
    'Llámala': ['Call her', 'Appelez-la'],
    'Marca el 919 93 36 42 y te atenderá Eris, igual que atendería el teléfono de tu negocio.': ['Dial +34 919 93 36 42 and Eris will answer, just as she would answer your business phone.', 'Composez le +34 919 93 36 42 et Eris vous répondra, comme elle répondrait au téléphone de votre entreprise.'],
    'Por chat': ['By chat', 'Par chat'],
    'Escríbele': ['Message her', 'Écrivez-lui'],
    'Nota de voz, desde aquí': ['Voice note, from here', 'Message vocal, d’ici'],
    'Mándale un audio': ['Send her a voice note', 'Envoyez-lui un vocal'],
    'Toca el micrófono del chat, habla y Eris te contesta con su voz y por escrito.': ['Tap the chat’s microphone, speak, and Eris replies with her voice and in writing.', 'Touchez le micro du chat, parlez, et Eris vous répond de vive voix et par écrit.'],
    'Mandar un audio': ['Send a voice note', 'Envoyer un vocal'],
    '¿Prefieres hablar con una persona?': ['Would you rather talk to a person?', 'Vous préférez parler à une personne ?'],
    'Que me llame el equipo': ['Have the team call me', 'Être rappelé par l’équipe'],
    'Mira cómo funciona en:': ['See how it works for:', 'Voyez comment ça marche pour :'],
    'Escríbele por WhatsApp': ['Message her on WhatsApp', 'Écrivez-lui sur WhatsApp'],
    'Por WhatsApp': ['On WhatsApp', 'Par WhatsApp'],
    'Mándale un WhatsApp al 919 93 36 42, por escrito o con una nota de voz, y te contesta al momento.': ['Send a WhatsApp to +34 919 93 36 42, in writing or as a voice note, and she replies instantly.', 'Envoyez un WhatsApp au +34 919 93 36 42, par écrit ou en message vocal, et elle répond tout de suite.'],
    'Abrir WhatsApp': ['Open WhatsApp', 'Ouvrir WhatsApp'],
    'Escríbele aquí': ['Message her here', 'Écrivez-lui ici'],
    'En el chat de esta web, sin instalar nada: te responde al momento, de día o de noche.': ['In this website’s chat, nothing to install: she replies instantly, day or night.', 'Dans le chat de ce site, sans rien installer : elle répond tout de suite, de jour comme de nuit.'],
    'Llamar': ['Call', 'Appeler'],
    'Chat': ['Chat', 'Chat'],
    'WhatsApp de Eris': ['Eris on WhatsApp', 'WhatsApp d’Eris'],
    'Chat con Eris': ['Chat with Eris', 'Chat avec Eris'],
    'WhatsApp:': ['WhatsApp:', 'WhatsApp :'],
    'Llamar a Eris': ['Call Eris', 'Appeler Eris'],
    'Contactar con Eris': ['Contact Eris', 'Contacter Eris'],
    'Lo que más nos preguntan los negocios antes de empezar.': ['What businesses ask us most before getting started.', 'Ce que les entreprises nous demandent le plus avant de commencer.'],
    '¿Se nota que es una inteligencia artificial?': ['Can people tell she’s an AI?', 'Est-ce qu’on remarque que c’est une intelligence artificielle ?'],
    'Eris es una agente de inteligencia artificial y no lo escondemos. Habla con naturalidad y en el idioma de tu cliente. Si alguien prefiere hablar con una persona, recoge sus datos y te avisa para que le llames tú.': ['Eris is an AI agent and we don’t hide it. She speaks naturally and in your customer’s language. If someone would rather talk to a person, she takes their details and lets you know so you can call them back.', 'Eris est une agente d’intelligence artificielle et nous ne le cachons pas. Elle parle naturellement et dans la langue de votre client. Si quelqu’un préfère parler à une personne, elle note ses coordonnées et vous prévient pour que vous le rappeliez.'],
    '¿Qué pasa si le preguntan algo muy concreto?': ['What if she’s asked something very specific?', 'Et si on lui pose une question très précise ?'],
    'Eris trabaja con toda la información de tu negocio: servicios, precios, horarios, normas y preguntas frecuentes, y la ampliamos cuando lo necesites. Responde con seguridad a lo que conoce. Si un caso requiere tu decisión, como un presupuesto especial o una excepción, le da al cliente toda la información disponible, le confirma que lo revisas tú, recoge sus datos y te lo pasa al momento. Nunca inventa precios ni condiciones.': ['Eris works with all your business information: services, prices, opening hours, policies and FAQs, and we expand it whenever you need. She answers confidently on everything she knows. If a case needs your decision, such as a special quote or an exception, she gives the customer all the available information, confirms that you will review it, takes their details and passes it to you straight away. She never makes up prices or conditions.', 'Eris travaille avec toutes les informations de votre entreprise : services, tarifs, horaires, règles et questions fréquentes, et nous les complétons dès que nécessaire. Elle répond avec assurance à tout ce qu’elle connaît. Si un cas demande votre décision, comme un devis spécial ou une exception, elle donne au client toutes les informations disponibles, lui confirme que vous allez l’examiner, prend ses coordonnées et vous le transmet aussitôt. Elle n’invente jamais de prix ni de conditions.'],
    '¿Tengo que cambiar mi número de teléfono?': ['Do I have to change my phone number?', 'Dois-je changer de numéro de téléphone ?'],
    'No. Sigues con tu número de siempre: solo desvías a Eris las llamadas que no puedas coger. Si puedes cogerlo, lo coges tú.': ['No. You keep your usual number: you only forward to Eris the calls you can’t take. If you can answer, you answer.', 'Non. Vous gardez votre numéro habituel : vous transférez seulement à Eris les appels que vous ne pouvez pas prendre. Si vous pouvez décrocher, vous décrochez.'],
    '¿Y si se acaban los minutos de voz?': ['What if I run out of voice minutes?', 'Et si les minutes vocales sont épuisées ?'],
    'Te avisamos antes de llegar al límite. Si quieres, añades 75 minutos más por 19,99 €/mes. Nunca cobramos nada extra sin tu aceptación.': ['We let you know before you reach the limit. If you want, you add 75 more minutes for €19.99/month. We never charge anything extra without your approval.', 'Nous vous prévenons avant d’atteindre la limite. Si vous le souhaitez, vous ajoutez 75 minutes pour 19,99 €/mois. Nous ne facturons jamais rien de plus sans votre accord.'],
    '¿Hay permanencia?': ['Is there a minimum contract?', 'Y a-t-il un engagement ?'],
    'No. Te das de baja cuando quieras escribiendo a soporte@euxenos.com. Si pagas el año, te regalamos dos meses.': ['No. You can cancel whenever you like by emailing soporte@euxenos.com. If you pay for the year, you get two months free.', 'Non. Vous résiliez quand vous voulez en écrivant à soporte@euxenos.com. Si vous payez l’année, deux mois sont offerts.'],
    'No tengo página web. ¿Me sirve?': ['I don’t have a website. Will it work for me?', 'Je n’ai pas de site web. Est-ce que ça me convient ?'],
    'Sí. El Pack Básico no lleva web: Eris coge tu teléfono y atiende tu WhatsApp e Instagram por 49 €/mes. Si más adelante quieres web propia, la tienes en el Pack Completo.': ['Yes. The Basic Pack doesn’t include a website: Eris answers your phone, WhatsApp and Instagram for €49/month. If you want your own website later, it comes with the Complete Pack.', 'Oui. La formule Basique n’inclut pas de site : Eris répond à votre téléphone, WhatsApp et Instagram pour 49 €/mois. Si vous voulez votre propre site plus tard, il est inclus dans la formule Complète.'],
    '¿Tengo que saber de tecnología?': ['Do I need to know about technology?', 'Dois-je m’y connaître en technologie ?'],
    'No. Nos cuentas cómo trabajas y nosotros lo montamos todo: la agente, tus canales y los avisos. Tú solo recibes las citas y los avisos en el móvil.': ['No. You tell us how you work and we set everything up: the AI agent, your channels and the notifications. You just receive the appointments and notifications on your phone.', 'Non. Vous nous expliquez comment vous travaillez et nous installons tout : l’agente d’intelligence artificielle, vos canaux et les notifications. Vous recevez simplement les rendez-vous et les notifications sur votre mobile.'],

    // Cabecera y menú
    'Acceso clientes': ['Client login', 'Accès clients'],
    'Menú': ['Menu', 'Menu'],
    'Qué hacemos': ['What we do', 'Ce que nous faisons'],
    'Cómo trabajamos': ['How we work', 'Notre méthode'],
    'Para qué negocios': ['Which businesses', 'Pour quelles entreprises'],
    'Precios': ['Pricing', 'Tarifs'],
    'Quiénes somos': ['About us', 'Qui sommes-nous'],
    'Opiniones': ['Reviews', 'Avis'],
    'App Euxenos: tu negocio con Eris': ['Euxenos app: your business with Eris', 'App Euxenos : votre entreprise avec Eris'],
    'Habla con Eris': ['Talk to Eris', 'Parler à Eris'],

    // Portada
    '«el que recibe bien a quien llega»': ['“the one who welcomes whoever arrives”', '« celui qui accueille bien qui arrive »'],
    'Cuando tú no puedes coger el teléfono,': ['When you can’t pick up the phone,', 'Quand vous ne pouvez pas décrocher,'],
    'lo coge Eris.': ['Eris does.', 'Eris répond.'],
    'Eris coge el teléfono y contesta tu web, WhatsApp e Instagram cuando tú no llegas, a cualquier hora. Le da cita a tu cliente y a ti te deja el aviso en el móvil.': ['Eris answers your phone and replies on your website, WhatsApp and Instagram when you can’t, at any time of day. She books your customer in and sends you a notification on your phone.', 'Eris répond au téléphone et sur votre site, WhatsApp et Instagram quand vous n’êtes pas disponible, à toute heure. Elle donne rendez-vous à votre client et vous envoie une notification sur votre mobile.'],
    'Desde 49 €/mes': ['From €49/month', 'À partir de 49 €/mois'],
    '· Precio final · Sin permanencia': ['· Final price · No lock-in contract', '· Prix final · Sans engagement'],
    'Llama y pruébala: 919 93 36 42': ['Call and try her: +34 919 93 36 42', 'Appelez pour l’essayer : +34 919 93 36 42'],
    'Escríbele o mándale un audio': ['Message her or send a voice note', 'Écrivez-lui ou envoyez un vocal'],
    'Así atendería el teléfono de tu negocio. Si te interesa, te deja tus datos y el equipo te llama.': ['That’s how she would answer your business phone. If you’re interested, leave your details and the team will call you.', 'C’est ainsi qu’elle répondrait au téléphone de votre entreprise. Si cela vous intéresse, laissez vos coordonnées et l’équipe vous rappelle.'],
    'Ejemplo:': ['Example:', 'Exemple :'],

    // Equipo
    'Una más de tu equipo, no un sustituto': ['One more member of your team, not a replacement', 'Un membre de plus dans votre équipe, pas un remplaçant'],
    'Tú y tu gente seguís atendiendo como siempre. Eris entra solo cuando no llegáis, para que ningún cliente se quede sin respuesta.': ['You and your staff keep serving customers as always. Eris only steps in when you can’t, so no customer goes unanswered.', 'Vous et votre équipe continuez à servir vos clients comme toujours. Eris n’intervient que lorsque vous n’êtes pas disponibles, pour qu’aucun client ne reste sans réponse.'],
    'Un martes, 11:40': ['A Tuesday, 11:40', 'Un mardi, 11 h 40'],
    'Suena el teléfono': ['The phone rings', 'Le téléphone sonne'],
    'Estás trabajando: con un cliente delante, en plena faena o en la calle.': ['You’re working: with a customer in front of you, mid-job or out and about.', 'Vous êtes au travail : avec un client, en plein boulot ou en déplacement.'],
    '¿Puedes cogerlo?': ['Can you pick up?', 'Vous pouvez décrocher ?'],
    'Lo coges tú, como siempre': ['You answer, as always', 'Vous répondez, comme toujours'],
    'Nada cambia en tu forma de atender. Eris no interviene.': ['Nothing changes in how you work. Eris stays out of it.', 'Rien ne change dans votre façon de travailler. Eris n’intervient pas.'],
    'o': ['or', 'ou'],
    '¿Tienes las manos ocupadas?': ['Hands full?', 'Vous avez les mains prises ?'],
    'Contesta Eris por ti': ['Eris answers for you', 'Eris répond à votre place'],
    'Atiende a quien llama, le da cita si la quiere y te deja el aviso en el móvil.': ['She takes the call, books an appointment if they want one and sends you a notification on your phone.', 'Elle prend l’appel, donne un rendez-vous si on le souhaite et vous envoie une notification sur votre mobile.'],
    'Con los mensajes de la web, WhatsApp o Instagram pasa igual: respondes tú cuando puedes y Eris cubre el resto, también de noche y en festivos.': ['It works the same with messages on your website, WhatsApp or Instagram: you reply when you can and Eris covers the rest, including nights and holidays.', 'C’est pareil pour les messages du site, de WhatsApp ou d’Instagram : vous répondez quand vous pouvez et Eris s’occupe du reste, y compris la nuit et les jours fériés.'],

    // Servicios
    'Lo que creamos para tu negocio': ['What we build for your business', 'Ce que nous créons pour votre entreprise'],
    'Lo dejamos todo montado y funcionando en los canales que ya usan tus clientes: el teléfono, WhatsApp, Instagram y tu web.': ['We set everything up and running on the channels your customers already use: phone, WhatsApp, Instagram and your website.', 'Nous installons tout, prêt à fonctionner, sur les canaux que vos clients utilisent déjà : téléphone, WhatsApp, Instagram et votre site.'],
    'Páginas web con agente de inteligencia artificial integrada': ['Websites with a built-in AI agent', 'Sites web avec agente d’intelligence artificielle intégrée'],
    'Diseñamos la web de tu negocio y le integramos una agente de inteligencia artificial, como la de esta página, que atiende a tus visitantes a cualquier hora: resuelve dudas, recoge peticiones de cita y reservas, y te avisa al momento.': ['We design your business website and build in an AI agent, like the one on this page, that looks after your visitors at any time: she answers questions, takes appointment and booking requests, and notifies you straight away.', 'Nous concevons le site de votre entreprise et y intégrons une agente d’intelligence artificielle, comme celle de cette page, qui accueille vos visiteurs à toute heure : elle répond aux questions, prend les demandes de rendez-vous et de réservation, et vous prévient aussitôt.'],
    'Un restaurante estrena web y recibe reservas también de madrugada, sin que nadie conteste a mano.': ['A restaurant launches its new website and gets bookings even in the middle of the night, without anyone answering by hand.', 'Un restaurant lance son site et reçoit des réservations même en pleine nuit, sans que personne ne réponde à la main.'],
    'Agente de inteligencia artificial que contesta tu teléfono': ['An AI agent that answers your phone', 'Une agente d’intelligence artificielle qui répond à votre téléphone'],
    'Si puedes coger el teléfono, lo coges tú, como siempre. Cuando estás con un cliente, comunicas o has cerrado, una agente de inteligencia artificial coge esa llamada por ti: atiende con naturalidad, resuelve dudas, apunta los datos de quien llama y te avisa al momento. No tienes que cambiar de número: basta con desviar las llamadas que no puedas coger.': ['If you can pick up the phone, you do, as always. When you’re with a customer, on another call or closed, an AI agent takes that call for you: she speaks naturally, answers questions, notes the caller’s details and notifies you straight away. You don’t need to change your number: just forward the calls you can’t take.', 'Si vous pouvez décrocher, vous le faites, comme toujours. Quand vous êtes avec un client, déjà en ligne ou fermé, une agente d’intelligence artificielle prend l’appel pour vous : elle parle naturellement, répond aux questions, note les coordonnées de l’appelant et vous prévient aussitôt. Pas besoin de changer de numéro : il suffit de renvoyer les appels que vous ne pouvez pas prendre.'],
    'Pruébalo tú mismo: llama al': ['Try it yourself: call', 'Essayez vous-même : appelez le'],
    'y te atenderá Eris, nuestra agente de inteligencia artificial. Así atendería el teléfono de tu negocio.': ['and Eris, our AI agent, will answer. That’s how she would answer your business phone.', 'et Eris, notre agente d’intelligence artificielle, vous répondra. C’est ainsi qu’elle répondrait au téléphone de votre entreprise.'],
    'Agentes de inteligencia artificial en tus redes': ['AI agents on your social media', 'Agentes d’intelligence artificielle sur vos réseaux'],
    'La misma agente, también en WhatsApp e Instagram. Responde dudas, recoge los datos que necesitas y te pasa la conversación cuando hace falta una persona.': ['The same AI agent, also on WhatsApp and Instagram. She answers questions, collects the details you need and hands the conversation over to you when a person is needed.', 'La même agente, aussi sur WhatsApp et Instagram. Elle répond aux questions, recueille les informations nécessaires et vous passe la conversation quand une personne est nécessaire.'],
    'Una clínica deja de perder pacientes que escriben fuera de horario.': ['A clinic stops losing patients who write outside opening hours.', 'Une clinique ne perd plus les patients qui écrivent en dehors des horaires.'],
    'Publicidad local en Google e Instagram': ['Local advertising on Google and Instagram', 'Publicité locale sur Google et Instagram'],
    'Te ayudamos a que te encuentren los clientes de tu zona. Ponemos a punto tu ficha de Google, con fotos, horarios, publicaciones y respuesta a reseñas, y creamos anuncios locales en Google, Instagram y Facebook para la gente que tienes cerca. Quien llega desde un anuncio lo atiende tu agente de inteligencia artificial al momento. El dinero de los anuncios lo pagas tú directamente a Google o Meta, con el presupuesto que elijas: nosotros solo cobramos la gestión.': ['We help local customers find you. We set up your Google Business Profile with photos, opening hours, posts and replies to reviews, and create local ads on Google, Instagram and Facebook for people near you. Anyone who comes from an ad is looked after by your AI agent straight away. You pay the ad spend directly to Google or Meta, with the budget you choose: we only charge for managing it.', 'Nous aidons les clients de votre quartier à vous trouver. Nous optimisons votre fiche Google (photos, horaires, publications et réponses aux avis) et créons des annonces locales sur Google, Instagram et Facebook pour les personnes proches de chez vous. Quiconque arrive via une annonce est pris en charge aussitôt par votre agente d’intelligence artificielle. Vous payez le budget publicitaire directement à Google ou Meta, selon le montant que vous choisissez : nous ne facturons que la gestion.'],
    'Una peluquería local aparece en Google cuando buscan «peluquería cerca de mí» y llena huecos de la semana con un anuncio en Instagram.': ['A local hair salon shows up on Google when people search for “hair salon near me” and fills empty slots in the week with an Instagram ad.', 'Un salon de coiffure de quartier apparaît sur Google quand on cherche « coiffeur près de moi » et remplit ses créneaux libres grâce à une annonce Instagram.'],
    'Eris Escaparate: contenido que te trae clientes': ['Eris Escaparate: content that brings you customers', 'Eris Escaparate : du contenu qui vous amène des clients'],
    'Tu agente de inteligencia artificial atiende a los clientes que llegan; Eris Escaparate hace que lleguen más. Cada mes preparamos el contenido de tus redes con un método de tres pasos: los': ['Your AI agent looks after the customers who arrive; Eris Escaparate brings in more. Every month we prepare your social media content with a three-step method: the', 'Votre agente d’intelligence artificielle s’occupe des clients qui arrivent ; Eris Escaparate en fait venir davantage. Chaque mois, nous préparons le contenu de vos réseaux selon une méthode en trois étapes : les'],
    'problemas': ['problems', 'problèmes'],
    'que tienen tus clientes, las': ['your customers have, the', 'de vos clients, les'],
    'dudas': ['questions', 'questions'],
    'que siempre te preguntan y': ['they always ask you, and', 'qu’on vous pose toujours et des'],
    'casos reales': ['real cases', 'cas réels'],
    'de tu trabajo. Y no inventamos los temas: salen de lo que tus clientes preguntan de verdad a Eris en tu chat y tu teléfono. Así todo funciona junto: el contenido atrae, Eris atiende y tú solo confirmas.': ['from your work. And we don’t make up the topics: they come from what your customers really ask Eris on your chat and phone. So it all works together: the content attracts, Eris responds and you just confirm.', 'de votre travail. Et nous n’inventons pas les sujets : ils viennent de ce que vos clients demandent vraiment à Eris sur votre chat et votre téléphone. Tout fonctionne ensemble : le contenu attire, Eris répond et vous n’avez qu’à confirmer.'],
    'Un taller publica «Si el coche vibra al frenar, es por esto». Quien tiene ese problema le escribe, y Eris le da cita.': ['A garage posts “If your car vibrates when braking, this is why”. Anyone with that problem gets in touch, and Eris books them in.', 'Un garage publie « Si votre voiture vibre au freinage, voici pourquoi ». Ceux qui ont ce problème écrivent, et Eris leur donne rendez-vous.'],
    'Ver el vídeo': ['Watch the video (Spanish)', 'Voir la vidéo (en espagnol)'],
    'Automatizaciones': ['Automations', 'Automatisations'],
    'Las tareas repetitivas se hacen solas: un cliente rellena un formulario, sus datos se guardan, recibe la confirmación por email y un recordatorio antes de su cita.': ['Repetitive tasks take care of themselves: a customer fills in a form, their details are saved, and they get an email confirmation and a reminder before their appointment.', 'Les tâches répétitives se font toutes seules : un client remplit un formulaire, ses données sont enregistrées, il reçoit une confirmation par e-mail et un rappel avant son rendez-vous.'],
    'Una academia recibe las matrículas de septiembre ordenadas en una hoja, y cada alumno su confirmación por email al momento, sin que nadie las teclee.': ['A school receives its September enrolments neatly organised in a spreadsheet, and each student gets an email confirmation instantly, without anyone typing them in.', 'Une école reçoit ses inscriptions de septembre classées dans un tableau, et chaque élève sa confirmation par e-mail instantanément, sans que personne ne les saisisse.'],

    // Cómo trabajamos
    'Sin tecnicismos y sin que tengas que aprender nada nuevo.': ['No jargon, and nothing new for you to learn.', 'Sans jargon technique et sans rien apprendre de nouveau.'],
    'Hablamos de tu día a día': ['We talk about your day-to-day', 'Nous parlons de votre quotidien'],
    'Una llamada corta y sin compromiso para ver qué tareas te roban más tiempo.': ['A short, no-obligation call to see which tasks take up most of your time.', 'Un court appel sans engagement pour voir quelles tâches vous prennent le plus de temps.'],
    'Lo montamos a tu medida': ['We set it up to fit you', 'Nous l’installons sur mesure'],
    'Preparamos el sistema con tus datos, tus textos y tu forma de atender a los clientes.': ['We prepare the system with your information, your wording and the way you treat your customers.', 'Nous préparons le système avec vos données, vos textes et votre façon d’accueillir vos clients.'],
    'Lo mantenemos y mejoramos': ['We maintain and improve it', 'Nous l’entretenons et l’améliorons'],
    'Cada mes revisamos cómo funciona y lo ajustamos para que siga ahorrándote tiempo.': ['Every month we check how it’s working and fine-tune it so it keeps saving you time.', 'Chaque mois, nous vérifions son fonctionnement et l’ajustons pour qu’il continue à vous faire gagner du temps.'],

    // Sectores
    'Para cualquier negocio que atienda clientes': ['For any business that serves customers', 'Pour toute entreprise qui accueille des clients'],
    'Si recibes mensajes, citas, reservas o pedidos, hay algo que se puede automatizar. Estos son solo algunos ejemplos.': ['If you get messages, appointments, bookings or orders, there’s something that can be automated. These are just a few examples.', 'Si vous recevez des messages, des rendez-vous, des réservations ou des commandes, il y a quelque chose à automatiser. Voici seulement quelques exemples.'],
    'Salud': ['Health', 'Santé'],
    'Clínicas dentales, centros médicos y sanidad privada, fisioterapia, psicología, ópticas, veterinarios': ['Dental clinics, medical centres and private healthcare, physiotherapy, psychology, opticians, vets', 'Cabinets dentaires, centres médicaux et santé privée, kinésithérapie, psychologie, opticiens, vétérinaires'],
    'Belleza y bienestar': ['Beauty and wellness', 'Beauté et bien-être'],
    'Peluquerías, barberías, centros de estética, uñas y pestañas, spas': ['Hair salons, barbers, beauty salons, nails and lashes, spas', 'Salons de coiffure, barbiers, instituts de beauté, ongles et cils, spas'],
    'Comercio': ['Retail', 'Commerce'],
    'Tiendas de alimentación, fruterías y carnicerías, tiendas de segunda mano, moda, tiendas online': ['Grocery stores, greengrocers and butchers, second-hand shops, fashion, online shops', 'Épiceries, primeurs et boucheries, dépôts-ventes, mode, boutiques en ligne'],
    'Hostelería y turismo': ['Hospitality and tourism', 'Restauration et tourisme'],
    'Bares, restaurantes, cafeterías, hoteles, casas rurales': ['Bars, restaurants, cafés, hotels, country guesthouses', 'Bars, restaurants, cafés, hôtels, gîtes ruraux'],
    'Servicios': ['Services', 'Services'],
    'Talleres, reformas, fontaneros y electricistas, limpieza, inmobiliarias, gestorías y asesorías': ['Garages, renovations, plumbers and electricians, cleaning, estate agents, accountants and advisers', 'Garages, rénovation, plombiers et électriciens, nettoyage, agences immobilières, cabinets comptables et de conseil'],
    'Educación, deporte y ocio': ['Education, sport and leisure', 'Éducation, sport et loisirs'],
    'Guarderías, academias, autoescuelas, gimnasios, escuelas de baile y música': ['Nurseries, tutoring schools, driving schools, gyms, dance and music schools', 'Crèches, centres de formation, auto-écoles, salles de sport, écoles de danse et de musique'],
    '¿Tu negocio no aparece? También funciona.': ['Don’t see your business? It works for you too.', 'Votre activité n’apparaît pas ? Ça marche aussi.'],
    'Cuéntanos qué haces': ['Tell us what you do', 'Dites-nous ce que vous faites'],

    // Precios
    'Precios claros, sin sorpresas': ['Clear prices, no surprises', 'Des prix clairs, sans surprise'],
    'Un alta que pagas una sola vez, al contratar, para montarlo todo, y una cuota mensual que incluye el mantenimiento y las mejoras. Todos los precios son finales: lo que ves es lo que pagas.': ['A one-off setup fee, paid when you sign up, to get everything running, and a monthly fee that includes maintenance and improvements. All prices are final: what you see is what you pay.', 'Des frais de mise en service payés une seule fois, à la souscription, pour tout installer, et un abonnement mensuel qui inclut la maintenance et les améliorations. Tous les prix sont définitifs : vous payez ce que vous voyez.'],
    'Sin permanencia:': ['No lock-in:', 'Sans engagement :'],
    'te das de baja cuando quieras. Si pagas el año, te regalamos dos meses.': ['cancel whenever you like. Pay for the year and get two months free.', 'résiliez quand vous voulez. Si vous payez à l’année, deux mois sont offerts.'],
    'Mensual': ['Monthly', 'Mensuel'],
    'Anual': ['Yearly', 'Annuel'],
    '2 meses gratis': ['2 months free', '2 mois offerts'],
    'Esencial': ['Essential', 'Essentiel'],
    'Básico': ['Basic', 'Basique'],
    'Completo': ['Complete', 'Complet'],
    'Recomendado': ['Recommended', 'Recommandé'],
    'Atención telefónica y mensajería, sin página web': ['Phone and messaging support, without a website', 'Accueil téléphonique et messagerie, sans site web'],
    'Página web propia y atención en todos los canales': ['Your own website and support on every channel', 'Votre propre site et un accueil sur tous les canaux'],
    'Para negocios con un volumen alto de llamadas': ['For businesses with a high volume of calls', 'Pour les entreprises qui reçoivent beaucoup d’appels'],
    'Para negocios que trabajan con presupuestos': ['For businesses that work with quotes', 'Pour les entreprises qui travaillent sur devis'],
    'Precio final': ['Final price', 'Prix final'],
    '199 €': ['€199', '199 €'],
    '499 €': ['€499', '499 €'],
    'Por qué hay un alta:': ['Why there is a setup fee:', 'Pourquoi des frais de mise en service :'],
    'es el trabajo de poner en marcha tu Eris, que se hace una sola vez: conocer cómo trabaja tu negocio (servicios, precios, horarios y normas), configurarla para que atienda como tú, conectar tu teléfono, WhatsApp e Instagram, preparar tu app Euxenos y probarlo todo antes de dejarlo funcionando. En el Pack Completo incluye además el diseño y la creación de tu página web. Después solo pagas la cuota, que cubre el servicio, el mantenimiento y las mejoras.': ['it covers the work of setting up your Eris, done just once: learning how your business works (services, prices, opening hours and rules), configuring her to handle customers the way you would, connecting your phone, WhatsApp and Instagram, preparing your Euxenos app and testing everything before it goes live. In the Complete Pack it also includes designing and building your website. After that you only pay the fee, which covers the service, maintenance and improvements.', 'c’est le travail de mise en place de votre Eris, réalisé une seule fois : comprendre le fonctionnement de votre entreprise (services, prix, horaires et règles), la configurer pour qu’elle accueille vos clients comme vous, connecter votre téléphone, WhatsApp et Instagram, préparer votre app Euxenos et tout tester avant la mise en service. Dans le pack Complet, elle comprend aussi la conception et la création de votre site web. Ensuite, vous ne payez que l’abonnement, qui couvre le service, la maintenance et les améliorations.'],
    '¿Por qué hay que pagar un alta?': ['Why is there a setup fee?', 'Pourquoi y a-t-il des frais de mise en service ?'],
    'Porque cada Eris se prepara a medida para tu negocio. El alta cubre ese trabajo inicial, que se hace una sola vez: recoger la información de tu negocio, configurar a Eris para que responda como lo harías tú, conectar tu teléfono, WhatsApp e Instagram, preparar tu app Euxenos y probarlo todo antes de ponerlo en marcha. En el Pack Completo incluye también el diseño y la creación de tu página web. Se paga una sola vez, al contratar; después solo pagas la cuota.': ['Because every Eris is set up specifically for your business. The setup fee covers that initial work, done just once: gathering your business information, configuring Eris to answer the way you would, connecting your phone, WhatsApp and Instagram, preparing your Euxenos app and testing everything before going live. In the Complete Pack it also includes designing and building your website. You pay it only once, when you sign up; after that you only pay the fee.', 'Parce que chaque Eris est préparée sur mesure pour votre entreprise. Les frais de mise en service couvrent ce travail initial, réalisé une seule fois : recueillir les informations de votre entreprise, configurer Eris pour qu’elle réponde comme vous le feriez, connecter votre téléphone, WhatsApp et Instagram, préparer votre app Euxenos et tout tester avant la mise en service. Dans le pack Complet, ils comprennent aussi la conception et la création de votre site web. Vous les payez une seule fois, à la souscription ; ensuite, vous ne payez que l’abonnement.'],
    '99 €': ['€99', '99 €'],
    '390 €': ['€390', '390 €'],
    '600 €': ['€600', '600 €'],
    '1.000 €': ['€1,000', '1 000 €'],
    '39 €/mes': ['€39/month', '39 €/mois'],
    '55 €/mes': ['€55/month', '55 €/mois'],
    '99 €/mes': ['€99/month', '99 €/mois'],
    '199 €/mes': ['€199/month', '199 €/mois'],
    '390 €/año': ['€390/year', '390 €/an'],
    '550 €/año': ['€550/year', '550 €/an'],
    '990 €/año': ['€990/year', '990 €/an'],
    '1.990 €/año': ['€1,990/year', '1 990 €/an'],
    'Alta del servicio': ['Setup fee', 'Mise en service'],
    '· pago único al contratar': ['· one-off payment when you sign up', '· paiement unique à la souscription'],
    'Coste mensual': ['Monthly cost', 'Coût mensuel'],
    'Coste anual': ['Yearly cost', 'Coût annuel'],
    '· cada mes': ['· every month', '· chaque mois'],
    '· 2 meses gratis': ['· 2 months free', '· 2 mois offerts'],
    'Atención telefónica cuando no puedes contestar (150 min/mes)': ['Phone answering when you can’t pick up (150 min/month)', 'Accueil téléphonique quand vous ne pouvez pas répondre (150 min/mois)'],
    'Atención 24 h en WhatsApp e Instagram': ['24/7 support on WhatsApp and Instagram', 'Accueil 24 h/24 sur WhatsApp et Instagram'],
    'Gestión de solicitudes de cita': ['Appointment request management', 'Gestion des demandes de rendez-vous'],
    'App Euxenos: agenda y avisos en el móvil': ['Euxenos app: calendar and mobile notifications', 'App Euxenos : agenda et notifications sur mobile'],
    'Sin página web (incluida en el plan Básico)': ['No website (included in the Basic plan)', 'Sans site web (inclus dans le plan Basique)'],
    'Contratar': ['Sign up', 'Souscrire'],
    'Información': ['More info', 'Infos'],
    'Página web propia de hasta 5 secciones': ['Your own website, up to 5 sections', 'Votre propre site, jusqu’à 5 sections'],
    'Atención 24 h en la web, WhatsApp e Instagram': ['24/7 support on your website, WhatsApp and Instagram', 'Accueil 24 h/24 sur votre site, WhatsApp et Instagram'],
    '▶ Vídeo · 45 s': ['▶ Video · 45 s (Spanish)', '▶ Vidéo · 45 s (espagnol)'],
    '▶ Vídeo · 39 s': ['▶ Video · 39 s (Spanish)', '▶ Vidéo · 39 s (espagnol)'],
    '▶ Vídeo · 37 s': ['▶ Video · 37 s (Spanish)', '▶ Vidéo · 37 s (espagnol)'],
    '🔇 Activar sonido': ['🔇 Turn sound on', '🔇 Activer le son'],
    '🔊 Quitar sonido': ['🔊 Turn sound off', '🔊 Couper le son'],
    'Todo lo incluido en el Básico': ['Everything in Basic', 'Tout ce qui est inclus dans Basique'],
    'Atención telefónica: 150 min/mes': ['Phone answering: 150 min/month', 'Accueil téléphonique : 150 min/mois'],
    'Atención telefónica: 300 min/mes (el doble)': ['Phone answering: 300 min/month (double)', 'Accueil téléphonique : 300 min/mois (le double)'],
    'Citas sincronizadas con tu calendario': ['Appointments synced with your calendar', 'Rendez-vous synchronisés avec votre agenda'],
    'Todo lo incluido en el Completo': ['Everything in Complete', 'Tout ce qui est inclus dans Complet'],
    'Presupuestos en PDF preparados por Eris': ['PDF quotes prepared by Eris', 'Devis en PDF préparés par Eris'],
    'Revisión y aprobación con un clic': ['Review and approve in one click', 'Vérification et validation en un clic'],
    'Atención telefónica: 300 min/mes': ['Phone answering: 300 min/month', 'Accueil téléphonique : 300 min/mois'],
    'Precios de lanzamiento (fase beta). Todos los precios son finales, sin nada que sumar. Al contratar pagas el alta y la primera cuota; después, solo la cuota de cada mes (o de cada año, si eliges el pago anual).': ['Launch prices (beta). All prices are final, with nothing to add. When you sign up you pay the setup fee and the first instalment; after that, only the monthly fee (or yearly, if you choose annual payment).', 'Prix de lancement (phase bêta). Tous les prix sont définitifs, rien à ajouter. À la souscription, vous payez la mise en service et la première échéance ; ensuite, uniquement l’abonnement mensuel (ou annuel, si vous choisissez le paiement à l’année).'],
    'Minutos de voz:': ['Voice minutes:', 'Minutes vocales :'],
    'si un mes te acercas al límite, te avisamos antes. Si quieres, añades 75 minutos más por 19,99 €/mes. Nunca cobramos nada extra sin tu aceptación.': ['if you get close to the limit in a month, we let you know first. If you want, you can add 75 more minutes for €19.99/month. We never charge anything extra without your consent.', 'si vous approchez de la limite un mois donné, nous vous prévenons avant. Si vous le souhaitez, vous ajoutez 75 minutes pour 19,99 €/mois. Nous ne facturons jamais rien de plus sans votre accord.'],
    'te das de baja cuando quieras escribiendo a soporte@euxenos.com.': ['cancel whenever you like by writing to soporte@euxenos.com.', 'résiliez quand vous voulez en écrivant à soporte@euxenos.com.'],
    'A medida:': ['Custom:', 'Sur mesure :'],
    'ficha de Google, anuncios locales, Eris Escaparate y automatizaciones van con presupuesto sin compromiso.': ['Google Business Profile, local ads, Eris Escaparate and automations are quoted with no obligation.', 'fiche Google, annonces locales, Eris Escaparate et automatisations font l’objet d’un devis sans engagement.'],
    'Todo el detalle en las': ['Full details in the', 'Tous les détails dans les'],
    'condiciones del servicio': ['terms of service (Spanish)', 'conditions du service (en espagnol)'],

    // Por qué Euxenos
    'Por qué Euxenos': ['Why Euxenos', 'Pourquoi Euxenos'],
    'Euxenos viene del griego y significa': ['Euxenos comes from Greek and means', 'Euxenos vient du grec et signifie'],
    '. Los antiguos griegos llamaban al Mar Negro': ['. The ancient Greeks called the Black Sea', '. Les Grecs anciens appelaient la mer Noire'],
    ', «el mar que no recibe», porque era peligroso navegarlo. Cuando aprendieron a hacerlo, lo rebautizaron como': [', “the inhospitable sea”, because it was dangerous to sail. Once they learned how, they renamed it', ', « la mer inhospitalière », car elle était dangereuse à naviguer. Quand ils apprirent à le faire, ils la rebaptisèrent'],
    ': «el mar que da la bienvenida».': [': “the welcoming sea”.', ' : « la mer accueillante ».'],
    'Eso es lo que hacemos: que tu negocio reciba bien a todo el que llega, a cualquier hora y en su idioma.': ['That’s what we do: make sure your business welcomes everyone who arrives, at any time and in their own language.', 'C’est ce que nous faisons : que votre entreprise accueille bien tous ceux qui arrivent, à toute heure et dans leur langue.'],

    // Contacto
    'Cuéntanos qué te quita tiempo': ['Tell us what eats up your time', 'Dites-nous ce qui vous fait perdre du temps'],
    'Llámanos o escríbele a Eris, como prefieras, y te atendemos al momento. Si quieres que te llame una persona del equipo, díselo y deja tu teléfono y la hora que te viene bien.': ['Call us or write to Eris, whichever you prefer, and we’ll help you right away. If you’d like someone from the team to call you, just say so and leave your number and a good time to call.', 'Appelez-nous ou écrivez à Eris, comme vous préférez, et nous vous répondons aussitôt. Si vous souhaitez qu’une personne de l’équipe vous rappelle, dites-le et laissez votre numéro et l’heure qui vous convient.'],
    'Llamar al 919 93 36 42': ['Call +34 919 93 36 42', 'Appeler le +34 919 93 36 42'],
    'Escribir a Eris': ['Write to Eris', 'Écrire à Eris'],
    'Teléfono': ['Phone', 'Téléphone'],
    'Información y presupuestos': ['Information and quotes', 'Informations et devis'],
    'Soporte a clientes': ['Customer support', 'Support client'],
    'Síguenos': ['Follow us', 'Suivez-nous'],

    // Opiniones
    'Déjanos tu opinión': ['Leave us your feedback', 'Donnez-nous votre avis'],
    'Estamos en fase beta y cada comentario nos ayuda a mejorar. Cuéntanos qué tal te ha parecido la web o la atención de Eris. El nombre y el email son opcionales.': ['We’re in beta and every comment helps us improve. Tell us what you thought of the website or of Eris. Name and email are optional.', 'Nous sommes en phase bêta et chaque commentaire nous aide à progresser. Dites-nous ce que vous avez pensé du site ou de l’accueil d’Eris. Le nom et l’e-mail sont facultatifs.'],
    'Tu valoración': ['Your rating', 'Votre note'],
    'Comentario': ['Comment', 'Commentaire'],
    'Nombre (opcional)': ['Name (optional)', 'Nom (facultatif)'],
    'Email (opcional)': ['Email (optional)', 'E-mail (facultatif)'],
    'Enviar opinión': ['Send feedback', 'Envoyer mon avis'],
    'Al enviar tu opinión aceptas la': ['By sending your feedback you accept the', 'En envoyant votre avis, vous acceptez la'],
    'política de privacidad': ['privacy policy (Spanish)', 'politique de confidentialité (en espagnol)'],
    '5 estrellas': ['5 stars', '5 étoiles'],
    '4 estrellas': ['4 stars', '4 étoiles'],
    '3 estrellas': ['3 stars', '3 étoiles'],
    '2 estrellas': ['2 stars', '2 étoiles'],
    '1 estrella': ['1 star', '1 étoile'],
    'Elige una valoración de 1 a 5 estrellas.': ['Choose a rating from 1 to 5 stars.', 'Choisissez une note de 1 à 5 étoiles.'],
    'Enviando…': ['Sending…', 'Envoi…'],
    '¡Gracias! Hemos recibido tu opinión.': ['Thank you! We’ve received your feedback.', 'Merci ! Nous avons bien reçu votre avis.'],
    'No hemos podido enviarla. Inténtalo de nuevo o escríbenos por correo.': ['We couldn’t send it. Please try again or email us.', 'Nous n’avons pas pu l’envoyer. Réessayez ou écrivez-nous par e-mail.'],

    // Pie
    '© 2026 Euxenos · Versión beta': ['© 2026 Euxenos · Beta version', '© 2026 Euxenos · Version bêta'],
    'Teléfono:': ['Phone:', 'Téléphone :'],
    'Contacto:': ['Contact:', 'Contact :'],
    'Soporte a clientes:': ['Customer support:', 'Support client :'],
    '¿Ya eres cliente?': ['Already a client?', 'Déjà client ?'],
    'Entra en la app Euxenos': ['Log in to the Euxenos app', 'Accédez à l’app Euxenos'],
    'El chat y las llamadas los atiende Eris, una agente de inteligencia artificial.': ['Chat and calls are handled by Eris, an artificial intelligence agent.', 'Le chat et les appels sont pris en charge par Eris, une agente d’intelligence artificielle.'],
    'Aviso legal': ['Legal notice', 'Mentions légales'],
    'Privacidad': ['Privacy', 'Confidentialité'],
    'Condiciones': ['Terms', 'Conditions'],
    'Configurar cookies': ['Cookie settings', 'Paramètres des cookies'],

    // Contratar (diálogo)
    'Tu email (aquí te llegan la factura y el acceso)': ['Your email (your invoice and login details will be sent here)', 'Votre e-mail (vous y recevrez la facture et l’accès)'],
    'Tu nombre': ['Your name', 'Votre nom'],
    'Nombre del negocio': ['Business name', 'Nom de l’entreprise'],
    'Cancelar': ['Cancel', 'Annuler'],
    'Ir al pago': ['Go to payment', 'Passer au paiement'],
    'Preparando el pago…': ['Preparing payment…', 'Préparation du paiement…'],
    'Escribe un email válido.': ['Please enter a valid email.', 'Saisissez une adresse e-mail valide.'],
    'No hemos podido preparar el pago. Inténtalo de nuevo o escríbenos a soporte@euxenos.com.': ['We couldn’t prepare the payment. Please try again or write to soporte@euxenos.com.', 'Nous n’avons pas pu préparer le paiement. Réessayez ou écrivez à soporte@euxenos.com.'],
    'Es el precio base del pack; si tu negocio necesita algo más, te lo confirmamos antes de empezar. Pagas con tarjeta en Stripe, de forma segura. Sin permanencia.': ['This is the base price of the pack; if your business needs anything more, we’ll confirm it before we start. You pay securely by card with Stripe. No lock-in.', 'C’est le prix de base du pack ; si votre entreprise a besoin de plus, nous vous le confirmons avant de commencer. Vous payez par carte via Stripe, en toute sécurité. Sans engagement.'],

    // Aviso de cookies
    'Tu privacidad, primero': ['Your privacy comes first', 'Votre vie privée d’abord'],
    'Usamos solo lo imprescindible para que la web y el chat funcionen. Si aceptas, además recordaremos tus preferencias, como el idioma, para la próxima visita. No usamos cookies de análisis ni de publicidad.': ['We only use what’s essential for the website and chat to work. If you accept, we’ll also remember your preferences, such as language, for your next visit. We don’t use analytics or advertising cookies.', 'Nous n’utilisons que l’indispensable au fonctionnement du site et du chat. Si vous acceptez, nous retiendrons aussi vos préférences, comme la langue, pour votre prochaine visite. Nous n’utilisons ni cookies d’analyse ni cookies publicitaires.'],
    'Rechazar': ['Reject', 'Refuser'],
    'Aceptar': ['Accept', 'Accepter'],
    'Más información': ['More information', 'En savoir plus'],

    // Atributos (lectores de pantalla y descripciones)
    'Menú principal': ['Main menu', 'Menu principal'],
    'Instagram de Euxenos': ['Euxenos on Instagram', 'Euxenos sur Instagram'],
    'TikTok de Euxenos': ['Euxenos on TikTok', 'Euxenos sur TikTok'],
    'App Euxenos: gestiona tu negocio con Eris': ['Euxenos app: run your business with Eris', 'App Euxenos : gérez votre entreprise avec Eris'],
    'Idioma': ['Language', 'Langue'],
    'Ejemplos de conversaciones con clientes': ['Examples of conversations with customers', 'Exemples de conversations avec des clients'],
    'Ejemplo anterior': ['Previous example', 'Exemple précédent'],
    'Ejemplo siguiente': ['Next example', 'Exemple suivant'],
    'Forma de pago': ['Payment frequency', 'Mode de paiement'],
    'Vídeo del Pack Básico (45 segundos)': ['Basic Pack video (45 seconds, Spanish)', 'Vidéo du pack Basique (45 secondes, en espagnol)'],
    'Vídeo del Pack Completo (39 segundos)': ['Complete Pack video (39 seconds, Spanish)', 'Vidéo du pack Complet (39 secondes, en espagnol)'],
    'Vídeo del Pack Plus (37 segundos)': ['Plus Pack video (37 seconds, Spanish)', 'Vidéo du pack Plus (37 secondes, en espagnol)'],

    // Ejemplos de conversación (portada)
    'Así atiende Eris, con el negocio abierto o cerrado': ['How Eris responds, whether you’re open or closed', 'Voici comment Eris répond, ouvert ou fermé'],
    'Peluquerías': ['Hair salons', 'Salons de coiffure'],
    'Centros de estética': ['Beauty salons', 'Instituts de beauté'],
    'Clínicas dentales': ['Dental clinics', 'Cabinets dentaires'],
    'Talleres': ['Garages', 'Garages'],
    'Fontanería': ['Plumbing', 'Plomberie'],
    'Restaurantes': ['Restaurants', 'Restaurants'],
    'Pastelerías': ['Bakeries', 'Pâtisseries'],
    'Estudios de tatuajes': ['Tattoo studios', 'Salons de tatouage'],
    'Inmobiliarias': ['Estate agents', 'Agences immobilières'],
    'Gestorías y abogados': ['Accountants and lawyers', 'Comptables et avocats'],
    'Autoescuelas': ['Driving schools', 'Auto-écoles'],
    'Hoteles y casas rurales': ['Hotels and guesthouses', 'Hôtels et gîtes'],
    'Peluquería cerrada. Una clienta': ['Salon closed. A customer', 'Salon fermé. Une cliente'],
    'Centro cerrado. Una clienta': ['Salon closed. A customer', 'Institut fermé. Une cliente'],
    'La recepcionista está con otro paciente. Uno nuevo': ['The receptionist is with another patient. A new one', 'La réceptionniste est avec un autre patient. Un nouveau'],
    'Taller cerrado. Un cliente': ['Garage closed. A customer', 'Garage fermé. Un client'],
    'El fontanero está en otro trabajo. Un cliente': ['The plumber is on another job. A customer', 'Le plombier est sur un autre chantier. Un client'],
    'Cocina cerrada. Un cliente': ['Kitchen closed. A customer', 'Cuisine fermée. Un client'],
    'Pastelería cerrada. Un cliente': ['Bakery closed. A customer', 'Pâtisserie fermée. Un client'],
    'Estudio en plena sesión. Alguien': ['Studio mid-session. Someone', 'Studio en pleine séance. Quelqu’un'],
    'Oficina cerrada. Un comprador': ['Office closed. A buyer', 'Agence fermée. Un acheteur'],
    'Despacho cerrado. Una autónoma': ['Office closed. A freelancer', 'Cabinet fermé. Une indépendante'],
    'Profesores dando clase. Alguien': ['Instructors teaching. Someone', 'Moniteurs en cours. Quelqu’un'],
    'Recepción cerrada. Una viajera': ['Reception closed. A traveller', 'Réception fermée. Une voyageuse'],
    'Cita reservada y aviso en la app': ['Appointment booked and notification in the app', 'Rendez-vous réservé et notification dans l’appli'],
    'Cita en la agenda y aviso en la app': ['In the diary, with a notification in the app', 'Dans l’agenda, avec une notification dans l’appli'],
    'Cita urgente en la agenda de la clínica': ['Urgent appointment in the clinic’s calendar', 'Rendez-vous urgent dans l’agenda du cabinet'],
    'Cita apuntada en la app del taller': ['Appointment logged in the garage’s app', 'Rendez-vous noté dans l’appli du garage'],
    'Urgencia avisada al fontanero por WhatsApp': ['Emergency sent to the plumber on WhatsApp', 'Urgence signalée au plombier par WhatsApp'],
    'Reserva guardada y cocina avisada': ['Booking saved and kitchen notified', 'Réservation enregistrée et cuisine prévenue'],
    'Encargo apuntado para la pastelería': ['Order noted for the bakery', 'Commande notée pour la pâtisserie'],
    'Cita apuntada en la agenda del estudio': ['Appointment in the studio’s calendar', 'Rendez-vous dans l’agenda du studio'],
    'Interesado guardado y visita en marcha': ['Lead saved and viewing on its way', 'Contact enregistré et visite en cours'],
    'Caso guardado y llamada agendada con la gestora': ['Case saved and call booked with the advisor', 'Dossier enregistré et appel prévu avec la comptable'],
    'Alumno apuntado y autoescuela avisada': ['Student signed up and school notified', 'Élève inscrit et auto-école prévenue'],
    'Solicitud de reserva guardada': ['Booking request saved', 'Demande de réservation enregistrée']
  };

  // Cómo se dice «X escribe por WhatsApp» en cada idioma: [verbo + preposición, canal]
  var CANAL = {
    en: { 'Instagram':['writes on','Instagram'], 'WhatsApp':['writes on','WhatsApp'], 'teléfono':['calls on the','phone'], 'la web':['writes from the','website'] },
    fr: { 'Instagram':['écrit sur','Instagram'], 'WhatsApp':['écrit sur','WhatsApp'], 'teléfono':['appelle par','téléphone'], 'la web':['écrit depuis le','site'] }
  };

  var POS = { en:0, fr:1 };
  var ATRIBUTOS = ['aria-label', 'title', 'placeholder', 'data-mes', 'data-anual'];
  var EXCLUIR = '#panel-eris, #hilo, script, style, svg';
  var idioma = 'es', textos = null, atributos = null;

  function t(s, l){
    l = l || idioma;
    if(l === 'es' || s == null) return s;
    var e = D[String(s).trim()];
    return e ? e[POS[l]] : s;
  }

  function recoger(){
    textos = []; atributos = [];
    var ver = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function(n){
        var p = n.parentElement;
        if(!p || p.closest(EXCLUIR)) return NodeFilter.FILTER_REJECT;
        return D[n.nodeValue.trim()] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    var n;
    while((n = ver.nextNode())) textos.push({ nodo: n, es: n.nodeValue });
    document.body.querySelectorAll('[' + ATRIBUTOS.join('],[') + ']').forEach(function(el){
      if(el.closest(EXCLUIR)) return;
      ATRIBUTOS.forEach(function(a){
        var v = el.getAttribute(a);
        if(v && D[v.trim()]) atributos.push({ el: el, a: a, es: v });
      });
    });
  }

  function poner(l){
    if(!textos) recoger();
    idioma = (l === 'en' || l === 'fr') ? l : 'es';
    textos.forEach(function(x){
      var s = x.es, ini = s.match(/^\s*/)[0], fin = s.match(/\s*$/)[0];
      x.nodo.nodeValue = idioma === 'es' ? s : ini + t(s.trim()) + fin;
    });
    atributos.forEach(function(x){ x.el.setAttribute(x.a, idioma === 'es' ? x.es : t(x.es)); });
    // Los precios muestran el texto de data-mes o data-anual según el botón elegido
    var anual = document.querySelector('.periodo button[data-periodo="anual"][aria-pressed="true"]');
    document.querySelectorAll('#precios [data-mes]').forEach(function(el){
      el.textContent = el.getAttribute(anual ? 'data-anual' : 'data-mes');
    });
    document.documentElement.lang = idioma;
  }

  window.euxI18n = {
    poner: poner,
    t: function(s, l){ return t(s, l); },
    idioma: function(){ return idioma; },
    canal: function(canal, l){ l = l || idioma; return (CANAL[l] && CANAL[l][canal]) || null; }
  };
})();
