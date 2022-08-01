import React from 'react';
import {Divider} from '@mui/material';
import { ImportContacts, BookmarkBorder, Web, BorderAll, StarOutline } from '@mui/icons-material';
import './top.css';

const Top = () => {
  return (
    <div className="top">
    <div className="item">
    <ul className="list">
     <li className="listItem">
     <ImportContacts/>
     overview</li>
     <li className="listItem">
     <BookmarkBorder/>
     Repositories</li>
     <li className="listItem">
     <Web/>
     Projects</li>
     <li className="listItem">
     <BorderAll/>
     Packages</li>
     <li className="listItem">
     <StarOutline/>
     Stars</li>
     </ul>
     </div>
    <Divider  />
    </div>
  )
}

export default Top
