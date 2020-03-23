let button = document.querySelector('button')

console.log(button)

button.addEventListener('click', function(){
    console.log('i have just clicked a button')

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            console.log( this.responseText.message)
            // console.log(this.responseText)
            console.log(typeof this.responseText)
        }
    // else {
    //     console.log('not available' + this.status)
    // }
    }

    xhttp.open('GET', "https://dog.ceo/api/breeds/image/random" )
    xhttp.send()

})