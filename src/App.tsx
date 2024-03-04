import { useEffect, useState } from 'react';
import Filter from './components/Filter'
import FilteredJobs from './components/Jobs/FilteredJobs'
import TopBackground from './components/TopBackground'


const arr1 = ['water', 'eba', 'garri']
const arr2 = ['water', 'eba'];

const chk = arr1.includes(...arr2)
// console.log(chk);


function App(props) {
  const [filterItem , setFilterItem]= useState([])

  useEffect(() => {
    
  },[])
  
  const getFilterData = (data) => {
    setFilterItem(data);
  };

  return (
    <>
      <TopBackground />
      <Filter items={ filterItem} />
      <FilteredJobs filterItems={getFilterData} />
    </>
  )
}

export default App
