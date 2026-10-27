// Traducción de la web (ES / EN / FR) para las banderas de la cabecera.
// Cada clave es el texto en castellano tal cual aparece en index.html; el valor es [inglés, francés].
// Si cambias un texto en index.html, cambia también su clave aquí (si no, ese texto se quedará en castellano).
// El chat de Eris (#panel-eris) y las conversaciones de ejemplo (#hilo) tienen su propio sistema de idioma.
(function(){
  var D = {
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
    'Ningún cliente sin respuesta.': ['No customer left unanswered.', 'Aucun client sans réponse.'],
    'Nunca.': ['Ever.', 'Jamais.'],
    'Eris coge el teléfono y contesta tu web, WhatsApp e Instagram cuando tú no llegas, a cualquier hora. Le da cita a tu cliente y a ti te deja el aviso en el móvil.': ['Eris answers your phone and replies on your website, WhatsApp and Instagram when you can’t, at any time of day. She books your customer in and sends you a notification on your phone.', 'Eris répond au téléphone et sur votre site, WhatsApp et Instagram quand vous n’êtes pas disponible, à toute heure. Elle donne rendez-vous à votre client et vous envoie une notification sur votre mobile.'],
    'Desde 42,35 €/mes': ['From €42.35/month', 'À partir de 42,35 €/mois'],
    ', IVA incluido · Sin permanencia': [', VAT included · No lock-in contract', ', TVA incluse · Sans engagement'],
    '📞 Llama y pruébala: 919 93 36 42': ['📞 Call and try her: +34 919 93 36 42', '📞 Appelez pour l’essayer : +34 919 93 36 42'],
    'Escríbele o háblale desde aquí': ['Chat or talk to her from here', 'Écrivez-lui ou parlez-lui d’ici'],
    'Así atendería el teléfono de tu negocio. Si te interesa, te deja tus datos y el equipo te llama.': ['That’s how she would answer your business phone. If you’re interested, leave your details and the team will call you.', 'C’est ainsi qu’elle répondrait au téléphone de votre entreprise. Si cela vous intéresse, laissez vos coordonnées et l’équipe vous rappelle.'],
    'Ejemplo:': ['Example:', 'Exemple :'],

    // Equipo
    'Una más de tu equipo, no un sustituto': ['One more member of your team, not a replacement', 'Un membre de plus dans votre équipe, pas un remplaçant'],
    'Tú y tu gente seguís atendiendo como siempre. Eris entra solo cuando no llegáis, para que ningún cliente se quede sin respuesta.': ['You and your staff keep serving customers as always. Eris only steps in when you can’t, so no customer goes unanswered.', 'Vous et votre équipe continuez à servir vos clients comme toujours. Eris n’intervient que lorsque vous n’êtes pas disponibles, pour qu’aucun client ne reste sans réponse.'],
    'Peluquería, 11:40': ['Hair salon, 11:40', 'Salon de coiffure, 11 h 40'],
    'Suena el teléfono': ['The phone rings', 'Le téléphone sonne'],
    'Estás en el local, con un cliente en el sillón.': ['You’re in the salon, with a customer in the chair.', 'Vous êtes au salon, avec un client dans le fauteuil.'],
    '¿Puedes cogerlo?': ['Can you pick up?', 'Vous pouvez décrocher ?'],
    'Lo coges tú, como siempre': ['You answer, as always', 'Vous répondez, comme toujours'],
    'Nada cambia en tu forma de atender. Eris no interviene.': ['Nothing changes in how you work. Eris stays out of it.', 'Rien ne change dans votre façon de travailler. Eris n’intervient pas.'],
    'o': ['or', 'ou'],
    '¿Estás cortando el pelo?': ['Busy cutting hair?', 'Vous êtes en pleine coupe ?'],
    'Contesta Eris por ti': ['Eris answers for you', 'Eris répond à votre place'],
    'Atiende a quien llama, le da cita si la quiere y te deja el aviso en el móvil.': ['She takes the call, books an appointment if they want one and sends you a notification on your phone.', 'Elle prend l’appel, donne un rendez-vous si on le souhaite et vous envoie une notification sur votre mobile.'],
    'Con los mensajes de la web, WhatsApp o Instagram pasa igual: respondes tú cuando puedes y Eris cubre el resto, también de noche y en festivos.': ['It works the same with messages on your website, WhatsApp or Instagram: you reply when you can and Eris covers the rest, including nights and holidays.', 'C’est pareil pour les messages du site, de WhatsApp ou d’Instagram : vous répondez quand vous pouvez et Eris s’occupe du reste, y compris la nuit et les jours fériés.'],

    // Servicios
    'Lo que creamos para tu negocio': ['What we build for your business', 'Ce que nous créons pour votre entreprise'],
    'Lo hacemos a medida, con las herramientas que ya usas: WhatsApp, Instagram, Gmail, Google Calendar y hojas de cálculo.': ['Tailor-made, with the tools you already use: WhatsApp, Instagram, Gmail, Google Calendar and spreadsheets.', 'Sur mesure, avec les outils que vous utilisez déjà : WhatsApp, Instagram, Gmail, Google Agenda et tableurs.'],
    'Páginas web con asistente integrado': ['Websites with a built-in assistant', 'Sites web avec assistante intégrée'],
    'Diseñamos la web de tu negocio y le integramos una asistente con IA, como la de esta página, que atiende a tus visitantes a cualquier hora: resuelve dudas, toma reservas o pide presupuestos y te avisa al momento.': ['We design your business website and build in an AI assistant, like the one on this page, that looks after your visitors at any time: she answers questions, takes bookings or quote requests and notifies you straight away.', 'Nous concevons le site de votre entreprise et y intégrons une assistante IA, comme celle de cette page, qui s’occupe de vos visiteurs à toute heure : elle répond aux questions, prend les réservations ou les demandes de devis et vous prévient aussitôt.'],
    'Un restaurante estrena web y recibe reservas también de madrugada, sin que nadie conteste a mano.': ['A restaurant launches its new website and gets bookings even in the middle of the night, without anyone answering by hand.', 'Un restaurant lance son site et reçoit des réservations même en pleine nuit, sans que personne ne réponde à la main.'],
    'Asistente que contesta tu teléfono': ['An assistant that answers your phone', 'Une assistante qui répond à votre téléphone'],
    'Si puedes coger el teléfono, lo coges tú, como siempre. Cuando estás con un cliente, comunicas o has cerrado, una asistente con IA coge esa llamada por ti: atiende con naturalidad, resuelve dudas, apunta los datos de quien llama y te avisa al momento. No tienes que cambiar de número: basta con desviar las llamadas que no puedas coger.': ['If you can pick up the phone, you do, as always. When you’re with a customer, on another call or closed, an AI assistant takes that call for you: she speaks naturally, answers questions, notes the caller’s details and notifies you straight away. You don’t need to change your number: just forward the calls you can’t take.', 'Si vous pouvez décrocher, vous le faites, comme toujours. Quand vous êtes avec un client, déjà en ligne ou fermé, une assistante IA prend l’appel pour vous : elle parle naturellement, répond aux questions, note les coordonnées de l’appelant et vous prévient aussitôt. Pas besoin de changer de numéro : il suffit de renvoyer les appels que vous ne pouvez pas prendre.'],
    'Pruébalo tú mismo: llama al': ['Try it yourself: call', 'Essayez vous-même : appelez le'],
    'y te atenderá Eris, nuestra asistente. Así atendería el teléfono de tu negocio.': ['and Eris, our assistant, will answer. That’s how she would answer your business phone.', 'et Eris, notre assistante, vous répondra. C’est ainsi qu’elle répondrait au téléphone de votre entreprise.'],
    'Asistentes con IA en tus redes': ['AI assistants on your social media', 'Assistantes IA sur vos réseaux'],
    'La misma asistente, también en WhatsApp, Instagram o Telegram. Responde dudas, recoge los datos que necesitas y te pasa la conversación cuando hace falta una persona.': ['The same assistant, also on WhatsApp, Instagram or Telegram. She answers questions, collects the details you need and hands the conversation over to you when a person is needed.', 'La même assistante, aussi sur WhatsApp, Instagram ou Telegram. Elle répond aux questions, recueille les informations dont vous avez besoin et vous passe la conversation quand une personne est nécessaire.'],
    'Una clínica deja de perder pacientes que escriben fuera de horario.': ['A clinic stops losing patients who write outside opening hours.', 'Une clinique ne perd plus les patients qui écrivent en dehors des horaires.'],
    'Publicidad local en Google e Instagram': ['Local advertising on Google and Instagram', 'Publicité locale sur Google et Instagram'],
    'Te ayudamos a que te encuentren los clientes de tu zona. Ponemos a punto tu ficha de Google, con fotos, horarios, publicaciones y respuesta a reseñas, y creamos anuncios locales en Google, Instagram y Facebook para la gente que tienes cerca. Quien llega desde un anuncio lo atiende tu asistente al momento. El dinero de los anuncios lo pagas tú directamente a Google o Meta, con el presupuesto que elijas: nosotros solo cobramos la gestión.': ['We help local customers find you. We set up your Google Business Profile with photos, opening hours, posts and replies to reviews, and create local ads on Google, Instagram and Facebook for people near you. Anyone who comes from an ad is looked after by your assistant straight away. You pay the ad spend directly to Google or Meta, with the budget you choose: we only charge for managing it.', 'Nous aidons les clients de votre quartier à vous trouver. Nous optimisons votre fiche Google (photos, horaires, publications et réponses aux avis) et créons des annonces locales sur Google, Instagram et Facebook pour les personnes proches de chez vous. Quiconque arrive via une annonce est pris en charge aussitôt par votre assistante. Vous payez le budget publicitaire directement à Google ou Meta, selon le montant que vous choisissez : nous ne facturons que la gestion.'],
    'Una peluquería de barrio aparece en Google cuando buscan «peluquería cerca de mí» y llena huecos de la semana con un anuncio en Instagram.': ['A local hair salon shows up on Google when people search for “hair salon near me” and fills empty slots in the week with an Instagram ad.', 'Un salon de coiffure de quartier apparaît sur Google quand on cherche « coiffeur près de moi » et remplit ses créneaux libres grâce à une annonce Instagram.'],
    'Eris Escaparate: contenido que te trae clientes': ['Eris Escaparate: content that brings you customers', 'Eris Escaparate : du contenu qui vous amène des clients'],
    'Tu asistente atiende a los clientes que llegan; Eris Escaparate hace que lleguen más. Cada mes preparamos el contenido de tus redes con un método de tres pasos: los': ['Your assistant looks after the customers who arrive; Eris Escaparate brings in more. Every month we prepare your social media content with a three-step method: the', 'Votre assistante s’occupe des clients qui arrivent ; Eris Escaparate en fait venir davantage. Chaque mois, nous préparons le contenu de vos réseaux selon une méthode en trois étapes : les'],
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
    'Un alta que pagas una sola vez, al contratar, para montarlo todo, y una cuota mensual que incluye el mantenimiento y las mejoras. Todos los precios llevan el IVA incluido.': ['A one-off setup fee, paid when you sign up, to get everything running, and a monthly fee that includes maintenance and improvements. All prices include VAT.', 'Des frais de mise en service payés une seule fois, à la souscription, pour tout installer, et un abonnement mensuel qui inclut la maintenance et les améliorations. Tous les prix sont TVA incluse.'],
    'Sin permanencia:': ['No lock-in:', 'Sans engagement :'],
    'te das de baja cuando quieras. Si pagas el año, te regalamos dos meses.': ['cancel whenever you like. Pay for the year and get two months free.', 'résiliez quand vous voulez. Si vous payez à l’année, deux mois sont offerts.'],
    'Mensual': ['Monthly', 'Mensuel'],
    'Anual': ['Yearly', 'Annuel'],
    '2 meses gratis': ['2 months free', '2 mois offerts'],
    'Esencial': ['Essential', 'Essentiel'],
    'Básico': ['Basic', 'Basique'],
    'Completo': ['Complete', 'Complet'],
    'Recomendado': ['Recommended', 'Recommandé'],
    'Solo chat, sin web: peluquerías, barberías y negocios de barrio': ['Chat only, no website: hair salons, barbers and local shops', 'Chat uniquement, sans site : salons de coiffure, barbiers et commerces de quartier'],
    'Web propia y todos los canales': ['Your own website and every channel', 'Votre propre site et tous les canaux'],
    'Clínicas y negocios con muchas llamadas': ['Clinics and businesses with lots of calls', 'Cliniques et entreprises qui reçoivent beaucoup d’appels'],
    'Talleres, reformas y negocios con presupuestos': ['Garages, renovations and businesses that send quotes', 'Garages, rénovation et entreprises qui font des devis'],
    'Alta del servicio': ['Setup fee', 'Mise en service'],
    '· pago único al contratar': ['· one-off payment when you sign up', '· paiement unique à la souscription'],
    'Coste mensual': ['Monthly cost', 'Coût mensuel'],
    'Coste anual': ['Yearly cost', 'Coût annuel'],
    '· cada mes': ['· every month', '· chaque mois'],
    '· 2 meses gratis': ['· 2 months free', '· 2 mois offerts'],
    'IVA incluido ·': ['VAT included ·', 'TVA incluse ·'],
    'IVA incluido · 99 € + IVA': ['VAT included · €99 + VAT', 'TVA incluse · 99 € HT'],
    'IVA incluido · 390 € + IVA': ['VAT included · €390 + VAT', 'TVA incluse · 390 € HT'],
    'IVA incluido · 600 € + IVA': ['VAT included · €600 + VAT', 'TVA incluse · 600 € HT'],
    'IVA incluido · 1.000 € + IVA': ['VAT included · €1,000 + VAT', 'TVA incluse · 1 000 € HT'],
    '119,79 €': ['€119.79', '119,79 €'],
    '471,90 €': ['€471.90', '471,90 €'],
    '726 €': ['€726', '726 €'],
    '1.210 €': ['€1,210', '1 210 €'],
    '42,35 €/mes': ['€42.35/month', '42,35 €/mois'],
    '66,55 €/mes': ['€66.55/month', '66,55 €/mois'],
    '119,79 €/mes': ['€119.79/month', '119,79 €/mois'],
    '240,79 €/mes': ['€240.79/month', '240,79 €/mois'],
    '423,50 €/año': ['€423.50/year', '423,50 €/an'],
    '665,50 €/año': ['€665.50/year', '665,50 €/an'],
    '1.197,90 €/año': ['€1,197.90/year', '1 197,90 €/an'],
    '2.407,90 €/año': ['€2,407.90/year', '2 407,90 €/an'],
    '35 €/mes + IVA': ['€35/month + VAT', '35 €/mois HT'],
    '55 €/mes + IVA': ['€55/month + VAT', '55 €/mois HT'],
    '99 €/mes + IVA': ['€99/month + VAT', '99 €/mois HT'],
    '199 €/mes + IVA': ['€199/month + VAT', '199 €/mois HT'],
    '350 €/año + IVA': ['€350/year + VAT', '350 €/an HT'],
    '550 €/año + IVA': ['€550/year + VAT', '550 €/an HT'],
    '990 €/año + IVA': ['€990/year + VAT', '990 €/an HT'],
    '1.990 €/año + IVA': ['€1,990/year + VAT', '1 990 €/an HT'],
    'Eris 24 h por chat en tu WhatsApp, Instagram y Google': ['Eris 24/7 by chat on your WhatsApp, Instagram and Google', 'Eris 24 h/24 par chat sur votre WhatsApp, Instagram et Google'],
    'Recoge las peticiones de cita': ['Collects appointment requests', 'Recueille les demandes de rendez-vous'],
    'App Euxenos: agenda y avisos al móvil': ['Euxenos app: calendar and phone notifications', 'App Euxenos : agenda et notifications sur mobile'],
    'Sin web propia ni teléfono (los tienes en el Básico)': ['No website or phone (included in Basic)', 'Sans site ni téléphone (inclus dans Basique)'],
    'Contratar': ['Sign up', 'Souscrire'],
    'Información': ['More info', 'Infos'],
    'Web propia, hasta 5 secciones': ['Your own website, up to 5 sections', 'Votre propre site, jusqu’à 5 sections'],
    'Eris 24 h en tu web, WhatsApp e Instagram': ['Eris 24/7 on your website, WhatsApp and Instagram', 'Eris 24 h/24 sur votre site, WhatsApp et Instagram'],
    'Eris coge tu teléfono y las llamadas desde la web (50 min/mes)': ['Eris answers your phone and calls from your website (50 min/month)', 'Eris répond à votre téléphone et aux appels depuis le site (50 min/mois)'],
    '▶ Vídeo · 45 s': ['▶ Video · 45 s (Spanish)', '▶ Vidéo · 45 s (espagnol)'],
    '▶ Vídeo · 39 s': ['▶ Video · 39 s (Spanish)', '▶ Vidéo · 39 s (espagnol)'],
    '▶ Vídeo · 37 s': ['▶ Video · 37 s (Spanish)', '▶ Vidéo · 37 s (espagnol)'],
    '🔇 Activar sonido': ['🔇 Turn sound on', '🔇 Activer le son'],
    '🔊 Quitar sonido': ['🔊 Turn sound off', '🔊 Couper le son'],
    'Todo lo del Básico': ['Everything in Basic', 'Tout le pack Basique'],
    'Teléfono y llamadas web: 150 min/mes': ['Phone and website calls: 150 min/month', 'Téléphone et appels web : 150 min/mois'],
    'Eris apunta las citas en tu calendario': ['Eris puts appointments in your calendar', 'Eris inscrit les rendez-vous dans votre agenda'],
    'Todo lo del Completo': ['Everything in Complete', 'Tout le pack Complet'],
    'Eris prepara presupuestos en PDF': ['Eris prepares PDF quotes', 'Eris prépare des devis en PDF'],
    'Tú los revisas y apruebas con un clic': ['You review and approve them in one click', 'Vous les vérifiez et les validez en un clic'],
    'Teléfono y llamadas web: 300 min/mes': ['Phone and website calls: 300 min/month', 'Téléphone et appels web : 300 min/mois'],
    'Precios de lanzamiento (fase beta). Los precios grandes llevan el IVA incluido (21 %, península y Baleares); debajo tienes el importe sin IVA. En Canarias, Ceuta y Melilla no se aplica IVA (el impuesto local lo gestiona el cliente). Al contratar pagas el alta y la primera cuota; después, solo la cuota de cada mes (o de cada año, si eliges el pago anual).': ['Launch prices (beta). The large prices include Spanish VAT (21%, mainland Spain and the Balearic Islands); below is the amount without VAT. No VAT is charged in the Canary Islands, Ceuta and Melilla (the customer handles the local tax). When you sign up you pay the setup fee and the first instalment; after that, only the monthly fee (or yearly, if you choose annual payment).', 'Prix de lancement (phase bêta). Les grands prix incluent la TVA espagnole (21 %, Espagne continentale et Baléares) ; le montant HT figure en dessous. Aux Canaries, à Ceuta et à Melilla, la TVA ne s’applique pas (le client gère la taxe locale). À la souscription, vous payez la mise en service et la première échéance ; ensuite, uniquement l’abonnement mensuel (ou annuel, si vous choisissez le paiement à l’année).'],
    'Minutos de voz:': ['Voice minutes:', 'Minutes vocales :'],
    'si un mes te acercas al límite, te avisamos antes. Si quieres, añades 150 minutos más por 47,19 €/mes (39 € + IVA). Nunca cobramos nada extra sin tu aceptación.': ['if you get close to the limit in a month, we let you know first. If you want, you can add 150 more minutes for €47.19/month (€39 + VAT). We never charge anything extra without your consent.', 'si vous approchez de la limite un mois donné, nous vous prévenons avant. Si vous le souhaitez, vous ajoutez 150 minutes pour 47,19 €/mois (39 € HT). Nous ne facturons jamais rien de plus sans votre accord.'],
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
    '📞 Llamar al 919 93 36 42': ['📞 Call +34 919 93 36 42', '📞 Appeler le +34 919 93 36 42'],
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
    'El chat y las llamadas los atiende Eris, una asistente con inteligencia artificial.': ['Chat and calls are handled by Eris, an artificial intelligence assistant.', 'Le chat et les appels sont pris en charge par Eris, une assistante dotée d’intelligence artificielle.'],
    'Aviso legal': ['Legal notice', 'Mentions légales'],
    'Privacidad': ['Privacy', 'Confidentialité'],
    'Condiciones': ['Terms', 'Conditions'],
    'Configurar cookies': ['Cookie settings', 'Paramètres des cookies'],

    // Contratar (diálogo)
    'Tu email (aquí te llegan la factura y el acceso)': ['Your email (your invoice and login details will be sent here)', 'Votre e-mail (vous y recevrez la facture et l’accès)'],
    'Tu nombre': ['Your name', 'Votre nom'],
    'Nombre del negocio': ['Business name', 'Nom de l’entreprise'],
    'Mi negocio está en Canarias, Ceuta o Melilla (sin IVA)': ['My business is in the Canary Islands, Ceuta or Melilla (no VAT)', 'Mon entreprise est aux Canaries, à Ceuta ou à Melilla (sans TVA)'],
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
    'Cita reservada y recordatorio programado': ['Appointment booked and reminder scheduled', 'Rendez-vous réservé et rappel programmé'],
    'Cita en la agenda y recordatorio el jueves': ['In the calendar, reminder on Thursday', 'Dans l’agenda, rappel jeudi'],
    'Cita urgente en la agenda de la clínica': ['Urgent appointment in the clinic’s calendar', 'Rendez-vous urgent dans l’agenda du cabinet'],
    'Cita en el calendario del taller': ['Appointment in the garage’s calendar', 'Rendez-vous dans l’agenda du garage'],
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
