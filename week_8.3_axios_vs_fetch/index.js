// axios vs fetch
const axios=require('axios')

// using async-await
async function getData(){
    const data=await fetch("https://sum-server.100xdevs.com/todos");

    const response=await data.json();
    console.log(response);
}

// using promises
 function getData2(){
        fetch("https://sum-server.100xdevs.com/todos",{
            // get method is by default
            method:'POST'

        })
            .then(async(data)=>{
                const response= await data.json();
                console.log(response);

            })
}


async function main(){
    // in axios the output is already in json format
    // get-> tells we are getting data in a get request
    const response=await axios.get('https://sum-server.100xdevs.com/todos');
    console.log(response);
}








getData();