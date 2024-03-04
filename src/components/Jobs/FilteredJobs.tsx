import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';

interface DataItem {
  id: number;
  new: boolean;
  logo: string;
  company: string;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface FilterDat {
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}

const FilteredJobs = (props: { filterItems: (arg0: FilterDat[]) => void }) => {
  const [jobData, setJobData] = useState<DataItem[]>([]);
  const [filterData, setFilterData] = useState<FilterDat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('./data.json');
      const data = res.data;
      setJobData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Call filterItems function after filterData is updated
    props.filterItems(filterData);
  }, [filterData]);

  const filterHandler = (text: string) => {
    console.log(text);

    if (!filterData.includes(text)) {
      setFilterData((prevData) => [...prevData, text]);
    }
  };

  return jobData
    .filter((data: FilterDat) => {
      if (filterData.length === 0) {
        return true;
      } else {
        const filterObject = [...filterData];
        console.log(filterObject);
        
        return (
          data.languages.includes(filterObject) ||
          data.tools.includes(filterObject) ||
          filterObject.includes(data.role) ||
          filterObject.includes(data.level)
        );
      }
    })
    .map((data) => {
      return (
        <section className="jobs" key={data.id}>
          <Card
            className={data.new && data.featured && 'new--item'}
            data-id={data.id}
          >
            <div className="section--item_1">
              <div className="logo">
                <img src={data.logo} alt="" />
              </div>
              <div className="details">
                <div className="company">
                  <h4>{data.company}</h4>
                  <div className="alert">
                    {data.new && <h3 className="new">NEW!</h3>}
                    {data.featured && <h3 className="featured">FEATURED</h3>}
                  </div>
                </div>
                <h4 className="position">{data.position}</h4>
                <div className="info">
                  <p>{data.postedAt}</p>

                  <p>{data.contract}</p>

                  <p>{data.location}</p>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="section--item_2">
              <h5 onClick={() => filterHandler(data.role)}>{data.role}</h5>
              <h5
                onClick={() => filterHandler(data.level)}
                key={Math.random().toString()}
              >
                {data.level}
              </h5>
              {data.languages.map((lang) => (
                <h5
                  onClick={() => filterHandler(lang)}
                  key={Math.random().toString()}
                >
                  {lang}
                </h5>
              ))}

              {data.tools.map((tool) => (
                <h5
                  onClick={() => filterHandler(tool)}
                  key={Math.random().toString()}
                >
                  {tool}
                </h5>
              ))}
            </div>
          </Card>
        </section>
      );
    });
};

export default FilteredJobs;
