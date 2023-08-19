var items = ['qiott.com', '1secmail.com', '1secmail.org', '1secmail.net', 'kzccv.com', 'wuuvo.com', 'icznn.com', 'ezztt.com'];
var randomIndex = Math.floor(Math.random() * items.length);
console.log('Random item:', items[randomIndex]);
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}
const randomString = generateRandomString(7);
var combinedExport = {
    randomString: randomString,
    randomIndex: items[randomIndex]
  };
export default combinedExport;
setInterval(function () {

    fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${randomString}&domain=${items[randomIndex]}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(data => {
            let i = 0;
            data.forEach(element => {
                fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${randomString}&domain=${items[randomIndex]}&id=${data[i].id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json(); // Parse response body as JSON
                    })
                    .then(data => {

                        let body = document.createElement('tr');
                        body.innerHTML = `<td>${data.from}</td><td>${data.subject}</td><td>${data.date}</td><td><a href="./Messages/first.html?value1=${data.id}&value2=${randomString}&value3=${items[randomIndex]}">View</a></td>`;
                        document.getElementsByClassName("iframe")[0].contentDocument.getElementById("yb").appendChild(body);
                       
                        
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    });
                i++;
            })
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}, 3500)
setInterval(function () {
    document.getElementsByClassName("iframe")[0].contentDocument.getElementById("yb").innerHTML =`<tr>
    <th>Sender</th>
    <th>Subject</th>
    <th>Time</th>
    <th>View</th>
</tr>`;
}, 3500)