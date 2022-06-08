

/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = ',us&appid=f110cbd7f8fe97c7ced230e5e635f753&units=metric';
let button = document.getElementById('generate');
const mood = document.getElementById('feelings');
const server = "http://localhost:8000" ;
 // Create a new date instance dynamically with JS
 let d = new Date();
 let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


const weatherToday = async ()=> {
    const zipCode = document.getElementById('zip').value;
    const res = await fetch(baseUrl+zipCode+apiKey)
    try {
        const info =await res.json();
        console.log(info);
        console.log(info.main.temp);
        return info;
    }catch(error){
        console.log('error', error);
    }
};
const updateUI = async()=>{
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('temp').innerHTML=allData.TEMP;
      document.getElementById('content').innerHTML=allData.MOOD;
      document.getElementById('date').innerHTML=allData.date;
      console.log(allData);
   
  
    }catch(error){
      console.log("error", error);
    }
};
button.addEventListener('click', function(e){
    weatherToday()
    .then(info=>{
        
        const data = {TEMP:info.main.temp,MOOD:mood.value,date:newDate};
        console.log(data);
        const option={
            method: 'POST',
            credentials: 'same-origin',
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
         return fetch('/weather' , option);
    })
       
   

    .then(response=>{
        return response.json();

    })
    .then(response=>{
        console.log(response);
        updateUI();
        
    })
});


// const postTheData = async(url='',data={})=>{
//     const res = await fetch(url , {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/jacon',
//         },
//         body:JSON.stringify(data),
//     });
//     try{
//         const newData = await res.json();
//         console.log(newData);
//         return newData;
//     }
//     catch(error){
//         console.log('error',error);
//     }
// }

