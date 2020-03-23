let button = document.querySelector('button')
let img = document.querySelector('#dogImage')

// console.log(img)

// console.log(button)

button.addEventListener('click', function(){
    console.log('i have just clicked a button')

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            let dataParsed = JSON.parse(this.responseText)
            console.log( dataParsed.message)
            let url = dataParsed.message
            // console.log(this.responseText)
            // console.log(typeof this.responseText) // This is a string therefor it is seeing the json as a string 
                                                  // therefore we have to parse the json to normal object literal

             img.src = url;
             console.log(img.src)                                     
        }
    // else {
    //     console.log('not available' + this.status)
    // }
    }

    xhttp.open('GET', "https://dog.ceo/api/breeds/image/random" )
    xhttp.send()

})