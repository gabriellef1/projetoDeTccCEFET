import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AbaLateral from '../All/AbaLateral.js';
import AbaSuperior from '../All/EditarUsuario';
import Formulario from '../All/Formulario.js';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Imprimir from '../All/ImpressaoDeDados.js';
import FiltrarAluno from '../All/FiltrarAluno.js';
import PersistentDrawerLeft from '../Drawe.js';

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

export class Pedagoga extends React.Component {
  render() {
	const usuario = ['Ana', 'pedagogia']; //simula um banco de dados
	const paginas = ['Cadastrar Novo Usuário', 'Visualizar Alunos', 'Contatos e Mudanças'];
	const itens = [1, 2, 3, 4, 5];
	const exibir = [ <Cadastrar />, <Visualizar />, <Alteracoes />];
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


function Cadastrar(){
	const usuario = ['Ana', 'pedagogia']; //simula um banco de dados
	const itens = [1, 2, 3, 4, 5];
	const [tipo, setTipo] = React.useState('');
	const [exibir, setExibir] = React.useState(<Formulario itens={itens}/>);
	const handleChange = (event) => {
		setTipo(event.target.value);
		if (event.target.value === 'Aluno')
			setExibir(<Formulario itens={itens}/>)
		else
			setExibir(<Formulario itens={[0]} tipo={event.target.value}/>)
	};
	
	const [enviado, setEnviado] = React.useState("nao");
	const handleSubmit = (event) => {
		if (tipo !== '')
			setEnviado(event.target.value);
		event.preventDefault();
	};
	
	const classes = useStyles();
	return (	
		<div>
			{enviado === "nao" ?
				<div>
					<h1> Qual tipo de usuário deseja cadastrar? </h1>
					<form className={classes.form} noValidate>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel id="tipo">Tipo</InputLabel>
						<Select
						  labelId="tipoLabel"
						  id="tipoLabel-select"
						  value={tipo}
						  onChange={handleChange}
						  label="Selecione o Tipo"
						>
						  <MenuItem value="">
							<em>Selecione o Tipo</em>
						  </MenuItem>
						  <MenuItem value={"Aluno"}>Aluno</MenuItem>
						  <MenuItem value={"Professor"}>Professor</MenuItem>
						  <MenuItem value={"Responsável"}>Responsável</MenuItem>
						</Select>
						<br/>
						<Button
							value="sim"
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							onClick={handleSubmit}
							className={classes.submit}
						>
							CONFIRMAR
						</Button>
					</FormControl>			
					</form>
				</div>
			:
					exibir
			}
		</div>
	);
}


function Visualizar(){
	const itens = [1, 2, 3, 4, 5];
	return (
		//caixinha para selecionar o campus
		//pesquisa por nome do aluno
		//dentro do perfil do aluno -> router para responsaveis e professores
		<div>
			<FiltrarAluno itens={itens}/>
		</div>
	);
}

function Alteracoes(){
	
	const paginas = ['Alunos', 'Professores', 'Responsáveis'];
	const exibir = [ 'contatos de alunos', 'adaptações propostas por professores', 'mudanças propostas por responsáveis'];
	
	return (	
		<div>
			//imprimir lista com todas as alterações do banco
			<AbaSuperior paginas={paginas} exibir={exibir}/>
			//Nome do aluno (campus, série e curso) -> mensagem dele
			<br/>
			//OU
			<br/>
			//Nome do professor ou responsável -> nome do aluno (campus, série e curso) -> adaptação ou mudança proposta
			<br/>
			//botões de aprovar ou recusar
			<br/>
			//remover a alteração do banco
		</div>
	);
}