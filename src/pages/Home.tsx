import React from 'react';
import { Grid, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import MenuCard from '../components/MenuCard';
import './Home.css';

const Home: React.FC = () => {
  const submodules = [
    { title: 'Reporte de Ventas', path: '/sales' },
    { title: 'Reporte de Inventario', path: '/inventory' },
    { title: 'Reporte de Merma', path: '/wastage' },
  ];

  return (
    <>
      <NavBar />
      <Box className="container">
        <Grid container spacing={2}>
          {submodules.map((submodule, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MenuCard title={submodule.title} path={submodule.path} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
