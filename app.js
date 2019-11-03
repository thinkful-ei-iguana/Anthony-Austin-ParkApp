// User will be able to search for parks in one or multiple states
// User can view multiple results at once
// Show each park's NAME, DESC., WEBSITE, ADDRESS -> (optional)

const BASE_URL = 'https://api.nps.gov/api/v1/parks';
const apiKey = '0nxZI9hF2LSNbDho29iIJk8FXwUmHWzH3HXGrizh';

function handleParkInfo() {
  $('#dataEntry').on('submit', e => {
    e.preventDefault();
    const stateArr = $('.entryPoint').val().split(',');
    const maxResults = $('.max-results').val();
    apiCallPark(BASE_URL, stateArr, maxResults, apiKey);
  });
}

function formatParams(params) {
  const queries = Object.keys(params).map(key => `${[ encodeURIComponent(key) ]}=${encodeURIComponent(params[key])}`);
  return queries.join('&');
}

function apiCallPark(BASE_URL, stateArr, maxResults, apiKey) {
  const params = {
    stateCode: stateArr,
    limit: maxResults
  };

  const queryString = formatParams(params);
  const url = `${BASE_URL}?${queryString}&api_key=${apiKey}`;
  console.log(url);

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('api call error');
    })
    .then(responseJson => createTemplate(responseJson, maxResults))
    .catch(error => alert('Error'));
}

const createTemplate = function(responseJson, maxResults) {
  $('.parkList').empty();
  for (let i = 0; (i < responseJson.data.length) & (i < maxResults); i++) {
    $('.parkList').append(
      `<li><h1><a href="${responseJson.data[i].url}">${responseJson.data[i].fullName}</a></h1> <p>${responseJson
        .data[i].description}</p> </li>`
    );
    $('.parkList').removeClass('hidden');
  }
};

$(handleParkInfo());
