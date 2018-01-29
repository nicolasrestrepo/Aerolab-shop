import fetch from 'isomorphic-fetch';

const baseUrl = 'https://aerolab-challenge.now.sh'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTY3ZjA1OTc4OGVmZTAwNTk0YTgyNDIiLCJpYXQiOjE1MTY3NjExNzd9.8c1IU_DcJOPV0pJK84yKtKU6F33ZEmWPlBpJE3a5R9w'

const api = {
    product:{
        async get(){
            const response = await fetch(`${baseUrl}/products`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
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
                    'Authorization': `Bearer ${token}`
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
                    'Authorization': `Bearer ${token}`
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
                    'Authorization': `Bearer ${token}`
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