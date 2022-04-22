import React, {useState} from "react";
import {filterData, getFilterValues} from './filtersData'
import {useSearchParams} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import './searchFilters.scss'

const SearchFilters = () => {
    const [filters] = useState(filterData)
    const [searchParams, setSearchParams] = useSearchParams()
    
    const searchProperties = (filterValues) => {
        const values = getFilterValues(filterValues)
        values.forEach((item) => {
          if(item.value && filterValues?.[item.name]) {
            searchParams.set(item.name, item.value);
            setSearchParams(searchParams)
          }
        })
      };
    return(
            filters.map(filter => (
                <Form.Select key={filter.placeholder} className="search_filters" onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
                <option className="filter"> {filter.placeholder} </option>
                    {
                        filter.items.map(item => (<option  key={item.value} value={item.value}> {item.name} </option>))
                    }
                </Form.Select>
            ))
    )
}
export default SearchFilters