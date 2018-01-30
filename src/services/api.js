import fetch from 'isomorphic-fetch';
import env from '../env';

const baseUrl = 'https://aerolab-challenge.now.sh'


const api = {
    product:{
        async get(){
            const response = await fetch(`${baseUrl}/products`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${env.token}`
                },
            })
            const data = await response.json()
            return data
        },
    },

    user:{
        async get(){
            const response = await fetch(`${baseUrl}/user/me`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${env.token}`
                },
            })
            const data = await response.json()
            return data
        }
    },
    history:{
        async get(){
            const response = await fetch(`${baseUrl}/history`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${env.token}`
                },
            })
            const data = await response.json();
            return data
        }
    },
    redeem:{
        async post(productId){
            const response = await fetch(`${baseUrl}/redeem`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${env.token}`
                },
                
                body:JSON.stringify({
                    "productId": productId 
                })
            })
          const data = await response.json();  
          return data;
        }
    }
}

export default api;