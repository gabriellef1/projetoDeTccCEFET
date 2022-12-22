import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AbaLateral from '../All/AbaLateral.js';
import Formulario from '../All/Formulario.js';
import FormControl from '@material-ui/core/FormControl';
import Imprimir from '../All/ImpressaoDeDados.js';
import PersistentDrawerLeft from '../Drawe.js'
import FiltrarAluno from '../All/FiltrarAluno.js';

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export class Professor extends React.Component {
  render() {
	const usuario = ['Ana', 'responsavel']; //simula um banco de dados
	const paginas = ['Visualizar Alunos', 'Cadastrar Atividade'];
	const itens=[-1];
	const exibir = [
		<div> <FiltrarAluno itens={itens}/> </div>,
		<CadastrarAtividade/>];
    return (
		<div>
			<div>
				<PersistentDrawerLeft/>
			</div>
			<div>
				<AbaLateral paginas={paginas} exibir={exibir}/>
			</div>
		</div>
		
    );
  }
}

function CadastrarAtividade (){
	const [enviado, setEnviado] = React.useState("nao");
	const handleSubmit = (event) => {
		setEnviado(event.target.value);
		event.preventDefault();
	};
	const itens=[-1];
	
	return(
		<div>
			{enviado === "nao" ?
		
		<FormControl>
			<h1> Cadastre Uma Atividade </h1>
			<TextField
				id="disciplina"
				label="Disciplina"
				required
				variant="outlined"
			/>
			<br/>
			<TextField
				id="nomeAtividade"
				label="Nome da Atividade"
				required
				variant="outlined"
			/>
			<br/>
			<TextField
				id="descricaoAtividade"
				label="Descrição da Atividade"
				variant="outlined"
			/>
			<br/>
			{/*
			<KeyboardDatePicker
			  margin="normal"
			  id="dataDeEntrega"
			  label="Data de Entrega"
			  format="MM/dd/yyyy"
			  value={selectedDate}
			  onChange={handleDateChange}
			  KeyboardButtonProps={{
				'aria-label': 'change date',
			  }}
			  required
			/>
			*/}
			<TextField
				id="dataDeEntrega"
				label="Data de Entrega"
				required
				variant="outlined"
			/>
			<br/>
			<TextField
				id="link"
				label="Link da Atividade"
				variant="outlined"
			/>
			<br/>
			<Button variant="contained" color="secondary" type="submit" onClick={handleSubmit}>
						ENVIAR
			</Button>
		</FormControl>
		
		:
			<div>
				<FiltrarAluno itens={itens}/>
			</div>
		}
		</div>
	);
}