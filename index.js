const token = ''

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});
var base = Airtable.base('app3t1PNBljbYelji');




function getTopicTitles () {
  return base('Modules').select().eachPage((records) => console.log(records.map(x => x.fields.Title)))
}

function getTopics() {
  return base('Modules').select().firstPage
}

function getTopicUnits(topic) {

  getTopics()((err, records) =>  {
    records.forEach(topic => {
      console.log(topic.fields.Number, topic.fields.Sections)
    })
  })
}


// getTopics()
getTopicUnits()
