import React, { useState, useEffect, useContext } from "react";
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

export const Cards = () => {

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
    setformS(1)
    console.log(formS)
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
  const [all, setAll] = useState([]);

  const GetAll = async () => {
    const resp = await fetch(
      "https://nvidia-sessions-api.herokuapp.com/sessions/"
    );
    const json = await resp.json();
    setAll(json);


  };

  useEffect(() => {
    GetAll();
  });



  // nav
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='contenedor'>

    	{/* FILTRO */}
      <div className="padreF">
      <h2>Filters</h2>
      <div className="search">
        <form onSubmit={handleSInput}>

          <input placeholder="search" className="input" name="filterName" value={filterName} onChange={handleC} />
          <button type="submit">

        <SearchIcon  className="lupa" />
          </button>
        </form>
      </div>
      <div>
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
              <Tab value="one" label="Item One" />
              <Tab value="two" label="Item Two" />
              <Tab value="three" label="Item Three" />
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
