import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const sections = [
  { name: 'Quiénes Somos', link: '/' },
  // { name: 'Descarga La App', link: '/descarga'},
  { name: 'Cómo Funciona', link: '/como-funciona' },
  { name: 'Contáctanos', link: '/contactanos' },
];

const Links = ({ classes }) => (
  <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
    {sections.map((section) => (
      <Link
        color="inherit"
        noWrap
        key={section.name}
        variant="body2"
        href={section.link}
        className={classes.toolbarLink}
      >
        {section.name}
      </Link>
    ))}
  </Toolbar>
);

export default Links;
