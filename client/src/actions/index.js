import axios from "axios"

export const fetchUser = () => async (dispatch) =>{
   const response = await axios.get('/api/current')
    dispatch({type:'FETCH_USER', payload:response.data})
} 

export const savePassword = (formValues,history) => async (dispatch) => {
    const response = await axios.post('/api/savepassword', formValues);
    history.push('/')
    dispatch({type:"FETCH_USER", payload:response.data})

}