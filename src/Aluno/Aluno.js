import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import AbaLateral from '../All/AbaLateral.js';
import Formulario from '../All/Formulario.js';
import RoomIcon from '@material-ui/icons/Room';
import Imprimir from '../All/ImpressaoDeDados.js';
import PersistentDrawerLeft from '../Drawe.js'
import ListaDeAtividades from '../All/ListaDeAtividades.js';


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

export class Aluno extends React.Component {
  render() {
	const usuario = ['Ana', 'aluno']; //simula um banco de dados
    const paginas = ['Dados', 'Atividades', 'Pedagogia', <RoomIcon  />];
	const itens = [1, 2, 3];

   
	const exibir = [<Imprimir itens={itens}/>, <ListaDeAtividades />, <Pedagogia />, '*Mostrar aqui o mapa do campus*'];
    return (
      <div>
          
      <div>
        <PersistentDrawerLeft/>
      </div>
    
      
        <AbaLateral paginas={paginas} exibir={exibir} />
      
     
      </div>

    );
  }
}

function Pedagogia(){
	const classes = useStyles();
	return(
		<div>
			<FormControl component="fieldset">
					<form className={classes.form} noValidate>
						<h1> Contatar a Pedagogia </h1>
						<h3> Deseja propor alguma mudança ou informar algo à pedagogia? Insira abaixo: </h3>
						<TextField
						  id={"alunoPedagogia"}
						  label=""
						  multiline
						  rows={4}
						  placeholder="Digite aqui o que gostaria de dizer!"
						  variant="outlined"
						/>
						<br/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							ENVIAR
					    </Button>
					</form>
					//envia uma alteração para o banco de dados
			</FormControl>
		</div>
	);
}