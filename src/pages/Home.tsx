import React from 'react';
import { Grid, Box } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from '../components/NavBar';
import MenuCard from '../components/MenuCard';
import './Home.css';

const Home: React.FC = () => {
  const submodules = [
    { title: 'Reporte de Ventas', icon: <AssessmentIcon className="card-content-icon" />, path: '/sales' },
    { title: 'Reporte de Inventario', icon: <InventoryIcon className="card-content-icon" />, path: '/inventory' },
    { title: 'Reporte de Merma', icon: <DeleteIcon className="card-content-icon" />, path: '/wastage' },
  ];

  return (
    <>
      <NavBar />
      <Box className="container">
        <Grid container spacing={2}>
          {submodules.map((submodule, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MenuCard title={submodule.title} icon={submodule.icon} path={submodule.path} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
