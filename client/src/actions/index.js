import axios from "axios"
import {reset} from 'redux-form';

export const fetchUser = () => async (dispatch) =>{
   const response = await axios.get('/api/current')
    dispatch({type:'FETCH_USER', payload:response.data})
} 

export const savePassword = (formValues,history) => async (dispatch) => {
    const response = await axios.post('/api/savepassword', formValues);
    history.push('/')
    dispatch({type:"FETCH_USER", payload:response.data})

}
export const deletePassword = (id) => async (dispatch) => {
    const response = await axios.post('/api/deletepassword', id);
    dispatch({type:"FETCH_USER", payload:response.data})

}
export const editPassword = (values) => async (dispatch) => {
    const response = await axios.patch('/api/updatepassword', values);
    dispatch({type:"FETCH_USER", payload:response.data})

}