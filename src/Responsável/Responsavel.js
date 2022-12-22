import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AbaLateral from '../All/AbaLateral.js';
import Formulario from '../All/Formulario.js';
import Imprimir from '../All/ImpressaoDeDados.js';
import PersistentDrawerLeft from '../Drawe.js'
import ListaDeAtividades from '../All/ListaDeAtividades.js';
import EditarUsuario from '../All/EditarUsuario.js';

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

export class Responsavel extends React.Component {
  render() {
	const usuario = ['Ana', 'responsavel']; //simula um banco de dados
	const paginas = ['Dados', 'Editar Dados', 'Atividades'];
	const itens=[1, 2, 3];
	const exibir = [<Imprimir itens={itens}/>, <EditarUsuario itens={itens}/>, <ListaDeAtividades/>];
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