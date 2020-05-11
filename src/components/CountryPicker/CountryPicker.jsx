import React,{useState,useEffect} from 'react';
import  { fetchCountries }from '../../api'
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css'

const CountryPicker = ({handleCountryChange}) => {
      const [fecthedCountries,setFetchedCountries] = useState([])

      useEffect(
          () =>{
              const fetchApi = async () =>{
                  setFetchedCountries(await fetchCountries() )
              }
              fetchApi()
          },[setFetchedCountries]
         
      )

    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue = "" onChange  = { (e)=>handleCountryChange(e.target.value)}>
                <option value = "">Global</option>
                {fecthedCountries.map((country,i) =>
                    <option key = {i} value ={country}>{country}</option>
                )}
            </NativeSelect>
        </FormControl>
    );
}
 
export default CountryPicker;