import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AbaLateral from './AbaLateral.js';
import Formulario from './Formulario.js';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Imprimir from './ImpressaoDeDados.js';


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

export default function FiltrarAluno(props){
	const classes = useStyles();
	
	const [campus, setCampus] = React.useState('');
	const handleChange = (event) => {
		setCampus(event.target.value);
	};
	
	const [curso, setCurso] = React.useState('');
	const handleChangeC = (event) => {
		setCurso(event.target.value);
	};
	
	const [serie, setSerie] = React.useState('');
	const handleChangeS = (event) => {
		setSerie(event.target.value);
	};
	
	const [enviado, setEnviado] = React.useState("nao");
	const handleSubmit = (event) => {
		if (campus !== '' && serie !== '' && curso !== '')
			setEnviado(event.target.value);
		event.preventDefault();
	};
	
	const [lista, setLista] = React.useState("sim");
	const handleClickL = (event) => {
		setLista("nao");
	};
	
	return (
		//caixinha para selecionar o campus
		//pesquisa por nome do aluno
		//dentro do perfil do aluno -> router para responsaveis e professores
		<div>
			{enviado === "nao" ?
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
				<h1> Selecione o aluno: </h1>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="campus">Campus</InputLabel>
					<Select
					  labelId="campusLabel"
					  id="campusLabel-select"
					  value={campus}
					  onChange={handleChange}
					  label="Selecione o Campus"
					>
					  <MenuItem value="">
						<em>Selecione o Campus</em>
					  </MenuItem>
					  <MenuItem value={1}>Campus I (Belo Horizonte)</MenuItem>
					  <MenuItem value={2}>Campus II (Belo Horizonte)</MenuItem>
					  <MenuItem value={3}>Campus III (Leopoldina)</MenuItem>
					  <MenuItem value={4}>Campus IV (Araxá)</MenuItem>
					  <MenuItem value={5}>Campus V (Divinópolis)</MenuItem>
					  <MenuItem value={6}>Campus VI (Belo Horizonte)</MenuItem>
					  <MenuItem value={7}>Campus VII (Timóteo)</MenuItem>
					  <MenuItem value={8}>Campus VIII (Varginha)</MenuItem>
					  <MenuItem value={9}>Campus IX (Nepomuceno)</MenuItem>
					  <MenuItem value={10}>Campus X (Curvelo)</MenuItem>
					  <MenuItem value={11}>Campus XI (Contagem)</MenuItem>
					</Select>
				</FormControl>
				
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="curso">Curso</InputLabel>
					<Select
						  labelId="ursoLabel"
						  id="cursoLabel-select"
						  value={curso}
						  onChange={handleChangeC}
						  label="Selecione o Curso"
					>
						  <MenuItem value="">
							<em>Selecione o Curso</em>
						  </MenuItem>
						  <MenuItem value={1}>Controle Ambiental</MenuItem>
						  <MenuItem value={2}>Informática</MenuItem>
						  <MenuItem value={3}>Eletroeletrônica</MenuItem>
					</Select>
				</FormControl>
				
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="serie">Série</InputLabel>
					<Select
						  labelId="serieLabel"
						  id="serieLabel-select"
						  value={serie}
						  onChange={handleChangeS}
						  label="Selecione a Série"
					>
						  <MenuItem value="">
							<em>Selecione a Série</em>
						  </MenuItem>
						  <MenuItem value={1}>1ª série</MenuItem>
						  <MenuItem value={2}>2ª série</MenuItem>
						  <MenuItem value={3}>3ª série</MenuItem>
					</Select>
				</FormControl>
					
				<FormControl variant="outlined" className={classes.formControl}>
					<Button
						value = "sim"
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						BUSCAR
					</Button>
				</FormControl>
				</form>
			:
				<div>
				<h2> Lista de alunos do Campus {campus} e da {serie}ª Série: </h2>
					
					
					<Router>
					  <div>
						<nav>
						  <ul>
							<li>
							  <Link to="/alunoX">Aluno X</Link>
							</li>
							<li>
							  <Link to="/alunoY">Aluno Y</Link>
							</li>
							<li>
							  <Link to="/alunoZ">Aluno Z</Link>
							</li>
						  </ul>
						</nav>

						{/* buscar todos os alunos do banco com os filtros aplicados
						BARRA DE PESQUISA*/}
						<Switch>
						  <Route path="/alunoX">
							<Imprimir itens={props.itens}/>
						  </Route>
						  <Route path="/alunoY">
							<Imprimir itens={props.itens}/>
						  </Route>
						  <Route path="/alunoZ">
							<Imprimir itens={props.itens}/>
						  </Route>
						</Switch>
					  </div>
					</Router>
					
				</div>
			}
		</div>
	);
}