const cols = document.querySelectorAll('.col')


document.addEventListener('click', (event) => {
    const type = event.target.dataset.type;
    if (type === 'copy') {
        const textHex = event.target.textContent
        copyHEX(textHex)
    }
})

document.addEventListener('DOMContentLoaded', function() {
    function getVisitorInfo() {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;

                fetch(`https://ipapi.co/${ipAddress}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        const city = data.city;
                        document.getElementById('ipAddress').innerText = `${ipAddress}`;
                            if (ipAddress.length < 6) {
                                const element = document.getElementById('ipAddress')
                                element.classList.add('small')
                            } else if (ipAddress.length >= 6 && ipAddress.length < 9) {d
                                const element = document.getElementById('ipAddress')
                                element.classList.add('small2')
                            } else if (ipAddress.length >= 9 && ipAddress.length < 12) {
                                const element = document.getElementById('ipAddress')
                                element.classList.add('small3')
                            } else if (ipAddress.length >= 12 && ipAddress.length < 15) {
                                const element = document.getElementById('ipAddress')
                                element.classList.add('medium')
                            } else if (ipAddress.length >= 15 && ipAddress.length < 18) {
                                const element = document.getElementById('ipAddress')
                                element.classList.add('medium2')
                            } else if (ipAddress.length >= 18 && ipAddress.length < 21) {
                                const element = document.getElementById('ipAddress')
                                element.classList.add('medium3')
                            } else if (ipAddress.length >= 21 && ipAddress.length < 24) {
                                const element = document.getElementById('ipAddress')
                                element.classList.add('big')
                            } else if (ipAddress.length >= 24 && ipAddress.length < 27) {
                                const element = document.getElementById('ipAddress')
                                element.classList.add('big2')
                            }

                            document.getElementById('city').innerText = `${city}`;
                            if (city.length < 6) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('small')
                            } else if (city.length >= 6 && city.length < 9) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('small2')
                            } else if (city.length >= 9 && city.length < 12) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('small3')
                            } else if (city.length >= 12 && city.length < 15) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('medium')
                            } else if (city.length >= 15 && city.length < 18) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('medium2')
                            } else if (city.length >= 18 && city.length < 21) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('medium3')
                            } else if (city.length >= 21 && city.length < 24) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('big')
                            } else if (city.length >= 24 && city.length < 27) {
                                const element2 = document.getElementById('city')
                                element2.classList.add('big2')
                            }
                    })
                    .catch(error => console.error('Error fetching city:', error));
            })
            .catch(error => console.error('Error fetching IP address:', error)); 
    }

    getVisitorInfo();
})

function copyHEX(text) {
    return navigator.clipboard.writeText(text);
}

function copyHEX(text) {
    return navigator.clipboard.writeText(text);
}

