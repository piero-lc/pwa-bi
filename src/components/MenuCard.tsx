import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuCard.css';

interface MenuCardProps {
  title: string;
  icon: React.ReactNode;
  path: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, icon, path }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(path)} className="menu-card">
      <CardContent className="card-content">
        {icon}
        <Typography variant="h6" className="custom-typography">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default MenuCard;
