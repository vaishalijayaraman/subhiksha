import React from 'react';
import './App.css';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import GitHubIcon from '@material-ui/icons/GitHub';
// import {Spa} from "@material-ui/icons";
// import InstagramIcon from '@material-ui/icons/Instagram';
// import BehanceIcon from '@iconify-icons/mdi/behance';

import Sparkles from "./effects/Sparkles.jsx";

function App() {
  return (
    <div className="App">
      <body className="App-header">
      <Sparkles>the magic is underway...</Sparkles>
      </body>
      <body className={"App-subheader"}>
      <Sparkles>stay tuned for my new website</Sparkles>
      </body>
      <br/>
      <body className={"App-body"}>
      vaishali jayaraman
      </body>
      <a href="https://www.linkedin.com/in/vaishalijayaraman/" target="_blank" rel="noopener noreferrer">
        <IconButton>
          <Icon icon="ant-design:linkedin-filled" style={{ fontSize: "143%" }} className={"icons"}/>
        </IconButton>
      </a>
      <a href="https://gitlab.com/vaishalijayaraman/" target="_blank" rel="noopener noreferrer">
        <IconButton>
          <Icon icon="uim:gitlab-alt" style={{ fontSize: "145%" }} className={"icons"}/>
        </IconButton>
      </a>
      <a href="https://github.com/vaishalijayaraman/">
        <IconButton>
          <GitHubIcon style={{ fontSize: "145%" }} className={"icons"}/>
        </IconButton>
      </a>
      {/*<a href="https://www.instagram.com/vaishijay/">*/}
      {/*  <IconButton>*/}
      {/*    <InstagramIcon style={{ fontSize: "145%" }} className={"icons"}/>*/}
      {/*  </IconButton>*/}
      {/*</a>*/}
      <a href="mailto:vaishalijayaraman@gmail.com" target="_blank" rel="noopener noreferrer">
        <IconButton>
          <Icon icon="dashicons:email-alt" style={{ fontSize: "143%" }} className={"icons"}/>
        </IconButton>
      </a>
      {/*<a href="https://www.behance.com/vaishalijayaraman/">*/}
      {/*  <IconButton>*/}
      {/*    <Icon icon={BehanceIcon} style={{ fontSize: "145%" }} className={"icons"}/>*/}
      {/*  </IconButton>*/}
      {/*</a>*/}
    </div>
  );
}

export default App;