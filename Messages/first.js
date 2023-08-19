const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value1');
const intValue = parseInt(value, 10); // Convert the string value to an integer
console.log('Integer Value:', intValue); // Outputs the integer value in the browser console
const urlParams1 = new URLSearchParams(window.location.search);
const value1 = urlParams.get('value2');
console.log('Value 2 :', value1); // Outputs the integer value in the browser console
const urlParams2 = new URLSearchParams(window.location.search);
const value2 = urlParams.get('value3');
console.log('Value 3 :', value2);


fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${value1}&domain=${value2}&id=${intValue}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {

        let body = document.createElement('div');
        body.innerHTML = data.body;
        full.appendChild(body);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });