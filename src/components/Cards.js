import React, { useState, useEffect} from "react";
// nav
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "../style/style.css";
import { useNavigate } from "react-router-dom";


///filtroooo
//acordion
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//form
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import FilterType from "../helpers/FilterType";

export const Cards =  () => {

  ///filtrooooooo

  const [industry, setIndustry] = useState([]);
  const [primary, setPrimary] = useState([]);
  const [session, setSession] = useState([]);
  const [filters, setFilters] = useState({})

  const getFilters = async () => {
    const { industry_segment, primary_topic, session_type } =
      await FilterType();
    setIndustry(industry_segment);
    setPrimary(primary_topic);
    setSession(session_type);
  };

  useEffect(() => {
    getFilters()
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleChangeF = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);

  };


  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
    console.log(filters)

  };
  //input
  const [formS, setformS] = useState({
    filterName: '',
  })
  let { filterName } = formS;

  const handleC = ({ target }) => {
    setformS({
      ...formS,
      [target.name]: target.value
    })
    console.log(formS)
  }

  const handleSInput = (e) => {
    e.preventDefault()
    console.log('soy submit')
  }
  //cardddddddddddddddddd


  //ver mas
  const navigate = useNavigate()

  const ver = (id) => {
    console.log(id.id)
    localStorage.setItem('key', id.id)
    navigate('/detail')
  }


  ///Obtener dataaaaaaaaaa
  const [all, setAll] = useState([]);
  const [allData, setData] = useState([]);
  let url = "https://nvidia-sessions-api.herokuapp.com/sessions/"
  const GetAll = async () => {
    
    const resp = await fetch(
      url
    );
    const json = await resp.json();
    setAll(json);
    setData(json);
      
    ///buscarrrrrrrrrrrrrrrrr
  };

  const todo = () => {

    setAll(allData)
  }
  const buscar = () => {
    console.log(filterName)
    let filtrado = allData.filter(card =>card.title.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()))
    console.log(filtrado)
    setAll(filtrado)
  }
  const buscarFecha1 = () => {
    let d = '2022'
    let filtrado = allData.filter(card =>card.date.toLocaleLowerCase().includes(d))
    console.log(filtrado)
    setAll(filtrado)
  }
  const buscarFecha2 = () => {
    let d = '2023'
    let filtrado = allData.filter(card =>card.date.toLocaleLowerCase().includes(d))
    
    console.log(filtrado)
    setAll(filtrado)
  }
  // const buscarFecha3 = () => {
  //   let d = '2024'

  //   let d1 = '2023-01';
  //   let d2 = '2023-02';
  //   let d3 = '2023-03';
  //   let d4 = '2023-04';
  //   let d5 = '2023-05';
  //   let d6 = '2023-06';
  //   let filtrado = allData.filter(card =>card.date.toLocaleLowerCase().includes(d))
  //   console.log(filtrado)
  //   setAll(filtrado)
  // }
  // const buscarFecha4 = () => {
  //   let d1 = '2023-07';
  //   let d2 = '2023-08';
  //   let d3 = '2023-09';
  //   let d4 = '2023-10';
  //   let d5 = '2023-11';
  //   let d6 = '2023-12';
  //   let filtrado = allData.filter(card =>card.date.toLocaleLowerCase().includes(d1 || d2 || d3 || d4 || d5 || d6))
  //   console.log(filtrado)
  //   setAll(filtrado)
  // }
  useEffect(() => {
    GetAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setAll]);



  // nav
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='contenedor'>

      {/* FILTRO */}
      <div className="padreF">
        <h2 className="h2">Filters</h2>
        <div className="search">
          <form className="f" onSubmit={handleSInput}>

            <input placeholder="search" className="input" name="filterName" value={filterName} onChange={handleC} />
            <button type="submit" className="btn" onClick={() => { buscar() }}>

              <SearchIcon className="lupa" />
            </button>
          </form>
        </div>
        <div>

          {/* ////panel 1 */}

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChangeF("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "23%", flexShrink: 0 }}>
                Industry Segment
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {industry.map((element) => {
                  return (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={element}
                      name={element}
                      onChange={handleFilterChange}
                    />
                  );
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          {/* ////panel 2 */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChangeF("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Primary Topic
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {primary.map((element) => {
                  return (
                    <FormControlLabel control={<Checkbox />} label={element} />
                  );
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>

          {/* ////panel 3 */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChangeF("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Session Type
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {session.map((element) => {
                  return (
                    <FormControlLabel control={<Checkbox />} label={element} />
                  );
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>


      <div className="padreC">
        <nav>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="All" onClick={() => { todo() }}/>
              <Tab value="two" label="2022" onClick={() => { buscarFecha1() }}/>
              <Tab value="three" label="2023" onClick={() => { buscarFecha2() }}/>
              {/* <Tab value="four" label="2024" onClick={() => { buscarFecha3() }}/> */}
              {/* <Tab value="five" label="2023(month 7 - 12)" onClick={() => { buscarFecha4() }}/> */}
            </Tabs>
          </Box>
        </nav>
        {/* <div>{user}</div> */}
        {all.map((element) => {
          const {
            title,
            description,
            industry_segment,
            primary_topic,
            session_type,
            audience_level,
            id,
          } = element;
          return (
            <div key={id} className="card">
              <h2>{title}</h2>
              <h4>{session_type}</h4>
              <p>{description}</p>
              <p>{audience_level}</p>
              <p>{" "}<b>Industry:</b> {industry_segment}
              </p>
              <p>{" "}<b>Primary Topic:</b> {primary_topic}</p>
              <button onClick={() => { ver({ id }) }}>ver detalle</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
