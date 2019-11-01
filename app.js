// User will be able to search for parks in one or multiple states
// User can view multiple results at once
// Show each park's NAME, DESC., WEBSITE, ADDRESS -> (optional)

function handleParkInfo() {
  $('#dataEntry').on('submit', e => {
    e.preventDefault();
    let parkName = $('.entryPoint').val().toLowerCase();
    apiCallPark(parkName);
  });
}

function apiCallPark(parkName) {
  fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=0nxZI9hF2LSNbDho29iIJk8FXwUmHWzH3HXGrizh')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Error'));
}

function displayResults(input) {}

$(function() {
  handleParkInfo();
});


const extractData = function (data) {
  data.forEach(//param => {
    console.log(' ');
    let {
      name,
      description,
      url,
      addressUrl,
    } = //param name;
  });
};



const createTemplate = function (name, description, url, addressUrl) {
  let template = `
  <section>
    <h2><a href="${url}">${name}</a></h2>
      <ul>
        <li>Description: ${description}</li>
        <li>Address Link: ${addressUrl}</li>
      </ul>
  </section>
  `;
};