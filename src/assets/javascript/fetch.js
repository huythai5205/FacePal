const fetch = function (string, functionToExecute) {
  let key = 'ZKLb9xO0SnI4KkfXFdoM9fmLuFkJqtfVtXKPpxM0';
  let url = 'https://cors-anywhere.herokuapp.com/https://developer.nps.gov/api/v1/' + string;
  var myHeaders = new Headers();
  myHeaders.append('X-Api-Key', key);
  var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
  };

  fetch(url, myInit).then(function (response) {
    return response.json();
  }).then(function (json) {
    let data = json.data;
    functionToExecute(data);
  });
}

module.exports = fetch;
