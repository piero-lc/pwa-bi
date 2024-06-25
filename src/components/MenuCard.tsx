import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuCard.css';

interface MenuCardProps {
  title: string;
  path: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, path }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(path)} className="menu-card">
      <CardContent className="card-content">
      <img src="/assets/images/power_bi_icon.png" alt="Power BI" className="card-content-icon" 
        style={{ width: '1.2rem', height: 'auto', marginRight: '1rem' }}/>
        <Typography variant="h6" className="custom-typography">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default MenuCard;
