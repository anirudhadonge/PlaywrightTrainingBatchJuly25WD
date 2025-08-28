import dotenv from 'dotenv'


export default function setEnvironmentValues(){
    console.log(process.env);
    dotenv.config({
        path:"./.env",
        override:true
    })
   console.log(process.env);  
}