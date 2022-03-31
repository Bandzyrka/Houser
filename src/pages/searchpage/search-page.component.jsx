import React, {useState, useEffect} from 'react';
import {BiFilter} from 'react-icons/bi'
import { SearchPageContainer, ToggleSearchFilter, FilterContainer} from './search-page.styles';
import SearchFilters from '../../components/searchFilters/searchFilters.component'
const SearchPage = () => {
    const [showFilter, toggleFilter] = useState(false)
    return(
    <SearchPageContainer>
        <ToggleSearchFilter onClick={() => toggleFilter(!showFilter)}> Search Property By Filters <BiFilter /> </ToggleSearchFilter>
        {
            showFilter ?
            <FilterContainer > <SearchFilters /></FilterContainer>
            :
            null
        }
    </SearchPageContainer>
)}
 
export default SearchPage;