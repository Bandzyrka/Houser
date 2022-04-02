import React, {useState, useEffect} from 'react';
import {BiFilter} from 'react-icons/bi'
import { SearchPageContainer, ToggleSearchFilter, FilterContainer} from './search-page.styles';
import SearchFilters from '../../components/searchFilters/searchFilters.component'
import { useSearchParams } from 'react-router-dom';
import {fetchApi, baseUrl} from '../../utils/fetchApi'
import PropertiesPreview from '../../components/properties-preview/propertiesPreview.component';
import { Spinner } from 'react-bootstrap';
const SearchPage = () => {
    const [showFilter, toggleFilter] = useState(false)
    const [properties, setProperties] = useState([])
    const [searchParams] = useSearchParams();

    useEffect(() => {
      const currentParams = Object.fromEntries([...searchParams]);
      if(Object.keys(currentParams).length === 0){ //no search params load default values
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002`).then(response =>setProperties(response.hits))
      }
      else{
        fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002`, {...currentParams}).then(response =>setProperties(response.hits))
      }
    }, [searchParams]);
    return(
    <SearchPageContainer>
        <ToggleSearchFilter onClick={() => toggleFilter(!showFilter)}> Search Property By Filters <BiFilter /> </ToggleSearchFilter>
        {
            showFilter ?
            <FilterContainer > <SearchFilters /></FilterContainer>
            :
            null
        }
        {properties.length !== 0 ? <PropertiesPreview properties={properties} key="properties"/> : <Spinner animation="border" style={{margin: "auto"}}/>}
    </SearchPageContainer>
)}
 
export default SearchPage;