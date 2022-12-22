import React from "react";
import { Pedagoga } from './Pedagoga/Pedagoga.js';
import { Responsavel } from './Responsável/Responsavel.js';
import { Aluno } from "./Aluno/Aluno.js";
//import { ProfissionalDaSaude } from "./ProfissionalDaSaude.js";
import { Professor } from "./Professor/Professor.js";
import Login from "./All/Login.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})); 

export default function App() {
  const classes = useStyles();
  const usuario = ['Ana', 'professor']; //simulando o banco de dados
  return (
	  <div className={classes.paper}>
		  {usuario[1] ==='pedagogia' ?
			<Pedagoga />
		  : usuario[1]==='responsavel' ?
			<Responsavel />
		  : usuario[1] === 'aluno' ?
			<Aluno/>
		  : usuario[1] === 'professor' ?
			<Professor/>
		  :
		    <Login />
		  }
		  
	  </div>
	  
  );
}