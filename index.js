// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '32a3274666msh1328bbc5d1d6120p14a4dfjsn3e07db20185b',
// 		'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
// 	}
// };

// fetch('https://spotify-scraper.p.rapidapi.com/v1/artist/search?name=neha%20kakkar', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



// country found second api


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '32a3274666msh1328bbc5d1d6120p14a4dfjsn3e07db20185b',
// 		'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=india', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// 3rd api 

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '32a3274666msh1328bbc5d1d6120p14a4dfjsn3e07db20185b',
// 		'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
// 	}
// };

// fetch('https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2020-09-21', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




// 4th api 

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '32a3274666msh1328bbc5d1d6120p14a4dfjsn3e07db20185b',
// 		'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
// 	}
// };

// fetch('https://cricket-live-data.p.rapidapi.com/results-by-date/2023-01-15', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



const form = document.getElementById("myform");


const handleform = (e) => {

    e.preventDefault()                             //data of page is not refresh

    const date = document.forms["myform"]["date"].value;                //input value accesss in year



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '32a3274666msh1328bbc5d1d6120p14a4dfjsn3e07db20185b',
            'X-RapidAPI-Host': 'pricer.p.rapidapi.com'
        }
    };

    fetch(`https://pricer.p.rapidapi.com/str?q=${date}`, options)
        .then(response => response.json())
        .then(response => {





            response.map((cval) => {

                document.getElementById("result").innerHTML += `
                    
                    <div class="col-md-4">
                    <div class="card bg-dark text-white text-center" style="width: 18rem ;">
                    <img src="${cval.img}" class="card-img-top" alt="...">
                     <div class="card-body">
                     <h5 class="card-title">${cval.title}</h5>
                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <h3 class="text-danger">price${cval.price}</h3>
                       <a href="${cval.link}" class="btn btn-primary">Read More</a>
                        </div>
                       </div>
                    </div>
                    
                    `
            })

        })
        .catch(err => console.error(err));




}
form.addEventListener("submit", handleform)
