import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    //height: 224,
  },
  tabs: {
    borderRight: `6px solid ${theme.palette.divider}`,
  },
}));

export default function AbaLateral(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const propriedadesPagina = Array.from(props.paginas);

  return (
    <div className={classes.root}>
		  <Tabs
			orientation="vertical"
		    variant="fullWidth"
			value={value}
			onChange={handleChange}
			aria-label="Vertical tabs example"
			className={classes.tabs}
     
		  >
		  
		  {propriedadesPagina.map((nome, index) => {
			return <Tab label={nome} {...a11yProps({index})} />
		  })}
		  </Tabs>
	  {propriedadesPagina.map((nome, index) => {
		return (
			<TabPanel value={value} index={index}>
				{props.exibir[index]}
			</TabPanel>
		)
      })}

    </div>
  );
}