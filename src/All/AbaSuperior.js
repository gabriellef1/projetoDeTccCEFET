import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
	//variant: 'standard',
  },
  test:{
    backgroundColor: '#3f51b5',
    color: 'white',
    fontWeight: 'bold',
  
  }
}));

export default function AbaSuperior(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const propriedadesPagina = Array.from(props.paginas);
	
  return (
    <div className={classes.root}>
      <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
      
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.test}
          variant="fullWidth"
          centered
       
        >
			{propriedadesPagina.map((nome, index) => {
				return <Tab  style={{fontWeight: 'bold'}} label={nome} {...a11yProps({index})} />
			})}
		</Tabs>
      </AppBar>
      </div>
     <div>

     {propriedadesPagina.map((nome, index) => {
		return (
			<TabPanel value={value} index={index}>
				{props.exibir[index]}
			</TabPanel>
		)
      })}
     </div>
	  
    </div>
  );
}