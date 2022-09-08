import React, { useState } from 'react';

import { SearchBar } from '@rneui/themed';

export default function Search({ listData,setListData, originalData }) {

    const [search, setSearch] = useState('')
    return (

        <SearchBar
            containerStyle={{ backgroundColor: 'tranparent' }}
            inputContainerStyle={{ backgroundColor: 'tranparent' }}
            lightTheme={true}
            placeholder="Search..."
            onChangeText={(search) => {
                if(search==''){
                    setListData([...originalData])
                    return;
                }
             
                setSearch(search);
                const filteredData =[];
                listData.filter((item)=>{
                    if(item.title.toLowerCase().includes(search.toLowerCase()))
                    filteredData.push(item)
   
                })
                setListData([...filteredData])
            }}
            value={search}
        />
    );
}