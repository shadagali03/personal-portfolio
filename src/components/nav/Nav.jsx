import React from 'react'
import './nav.css'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@material-ui/core/Tooltip'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

function Nav() {
  const [active, setActive] = useState('#home');
  return (
    <nav>
      <a href="#home" 
         className={active === "#home" ? 'active' : ''} 
         onClick={() => setActive('#home')}>
          <Tooltip title="Home" arrow>
              <HomeIcon />
          </Tooltip>
      </a>
      <a href="#about" 
         className={active === "#about" ? 'active' : ''} 
         onClick={() => setActive('#about')}>
          <Tooltip title="About" arrow>
              <PersonOutlineIcon />
          </Tooltip>
      </a>
      <a href="#skills" 
         className={active === "#skills" ? 'active' : ''} 
         onClick={() => setActive('#skills')}>
          <Tooltip title="Skills" arrow>
              <CategoryOutlinedIcon />
          </Tooltip>
      </a>
      <a href="#experience" 
         className={active === "#experience" ? 'active' : ''} 
         onClick={() => setActive('#experience')}>
          <Tooltip title="Experience" arrow>
              <WorkOutlineOutlinedIcon />
          </Tooltip>
         </a>
      <a href="#projects" 
         className={active === "#projects" ? 'active' : ''} 
         onClick={() => setActive('#projects')}>
          <Tooltip title="Projects" arrow>
              <CodeOutlinedIcon />
          </Tooltip>
      </a>
      <a href="#contact" 
         className={active === "#contact" ? 'active' : ''} 
         onClick={() => setActive('#contact')}>
          <Tooltip title="Contact" arrow>
              <ContactsOutlinedIcon />
          </Tooltip>
      </a>
    </nav>
  )
}

export default Nav