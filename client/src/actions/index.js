import axios from "axios"

export const fetchUser = () => async (dispatch) =>{
   const response = await axios.get('/api/current')
    dispatch({type:'FETCH_USER', payload:response.data})
} 
