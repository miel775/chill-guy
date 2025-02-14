// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Je kunt de volgende URLs uit onze API gebruiken:
// - https://fdnd.directus.app/items/tribe
// - https://fdnd.directus.app/items/squad
// - https://fdnd.directus.app/items/person
// En combineren met verschillende query parameters als filter, sort, search, etc.
// Gebruik hiervoor de documentatie van https://directus.io/docs/guides/connect/query-parameters
// En de oefeningen uit https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/squad-page-ontwerpen.md

// Haal alle eerstejaars squads uit de WHOIS API op van dit jaar (2024–2025)
const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const squadResponseJSON = await squadResponse.json()

// Controleer de data in je console (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(squadResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))


// Om Views weer te geven, heb je Routes nodig
// Maak een GET route voor de index
app.get('/', async function (request, response) {
  // Haal alle personen uit de WHOIS API op, van dit jaar
  const personResponse = await fetch('https://fdnd.directus.app/items/person/?sort=name&fields=*,squads.squad_id.name,squads.squad_id.cohort&filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}}]}')

  // alle jaren
  const ninetySeventyOneResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["1971-01-01","1971-12-31"]}}]}')
  const ninetySeventyThreeResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["1973-01-01","1973-12-31"]}}]}')
  const ninetyEightyFourResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["1984-01-01","1984-12-31"]}}]}')
  const ninetyNinetyResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["1990-01-01","1990-12-31"]}}]}')
  const ninetyNinetyFourResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["1994-01-01","1994-12-31"]}}]}')
  const ninetyNinetyNineResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["1999-01-01","1999-12-31"]}}]}')
  const twoThousandResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2000-01-01","2000-12-31"]}}]}')
  const twoThousandOneResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2001-01-01","2001-12-31"]}}]}')
  const twoThousandTwoResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2002-01-01","2002-12-31"]}}]}')
  const twoThousandThreeResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2003-01-01","2003-12-31"]}}]}')
  const twoThousandFourResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2004-01-01","2004-12-31"]}}]}')
  const twoThousandFiveResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2005-01-01","2005-12-31"]}}]}')
  const twoThousandSixResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2006-01-01","2006-12-31"]}}]}')
  const twoThousandSevenResponse = await fetch('https://fdnd.directus.app/items/person/?filter={"_and":[{"squads":{"squad_id":{"tribe":{"name":"FDND Jaar 1"}}}},{"squads":{"squad_id":{"cohort":"2425"}}},{"birthdate":{"_between":["2007-01-01","2007-12-31"]}}]}')

  // En haal daarvan de JSON op
  const ninetySeventyOneResponseJSON = await ninetySeventyOneResponse.json()
  const ninetySeventyThreeResponseJSON = await ninetySeventyThreeResponse.json()
  const ninetyEightyFourResponseJSON = await ninetyEightyFourResponse.json()
  const ninetyNinetyResponseJSON = await ninetyNinetyResponse.json()
  const ninetyNinetyFourResponseJSON = await ninetyNinetyFourResponse.json()
  const ninetyNinetyNineResponseJSON = await ninetyNinetyNineResponse.json()
  const twoThousandOneResponseJSON = await twoThousandOneResponse.json()
  const twoThousandTwoResponseJSON = await twoThousandTwoResponse.json()
  const twoThousandThreeResponseJSON = await twoThousandThreeResponse.json()
  const twoThousandFourResponseJSON = await twoThousandFourResponse.json()
  const twoThousandFiveResponseJSON = await twoThousandFiveResponse.json()
  const twoThousandSixResponseJSON = await twoThousandSixResponse.json()
  const twoThousandSevenResponseJSON = await twoThousandSevenResponse.json()
  const personResponseJSON = await personResponse.json()

  // hoe kan je dit kleiner maken?

  const twoThousandResponseJSON = await twoThousandResponse.json()
  
  // personResponseJSON bevat gegevens van alle personen uit alle squads van dit jaar
  // Je zou dat hier kunnen filteren, sorteren, of zelfs aanpassen, voordat je het doorgeeft aan de view

  // Render index.liquid uit de views map en geef de opgehaalde data mee als variabele, genaamd persons
  // Geef ook de eerder opgehaalde squad data mee aan de view
  response.render('index.liquid', {
    persons: personResponseJSON.data, 
    squads: squadResponseJSON.data,
    ninetySeventyOne: ninetySeventyOneResponseJSON.data,
    ninetySeventyThree: ninetySeventyThreeResponseJSON.data,
    ninetyEightyFour: ninetyEightyFourResponseJSON.data,
    ninetyNinety: ninetyNinetyResponseJSON.data,
    ninetyNinetyFour: ninetyNinetyFourResponseJSON.data,
    ninetyNinetyNine: ninetyNinetyNineResponseJSON.data,
    twoThousands: twoThousandResponseJSON.data,
    twoThousandOne: twoThousandOneResponseJSON.data,
    twoThousandTwo: twoThousandTwoResponseJSON.data,
    twoThousandThree: twoThousandThreeResponseJSON.data,
    twoThousandFour: twoThousandFourResponseJSON.data,
    twoThousandFive: twoThousandFiveResponseJSON.data,
    twoThousandSix: twoThousandSixResponseJSON.data,
    twoThousandSeven: twoThousandSevenResponseJSON.data })
})


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  response.redirect(303, '/')
})


// Maak een GET route voor een detailpagina met een route parameter, id
// Zie de documentatie van Express voor meer info: https://expressjs.com/en/guide/routing.html#route-parameters
app.get('/student/:id', async function (request, response) {
  // Gebruik de request parameter id en haal de juiste persoon uit de WHOIS API op
  const personDetailResponse = await fetch('https://fdnd.directus.app/items/person/' + request.params.id)
  // En haal daarvan de JSON op
  const personDetailResponseJSON = await personDetailResponse.json()
  
  // Render student.liquid uit de views map en geef de opgehaalde data mee als variable, genaamd person
  // Geef ook de eerder opgehaalde squad data mee aan de view
  response.render('student.liquid', {person: personDetailResponseJSON.data, squads: squadResponseJSON.data})
})


// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


