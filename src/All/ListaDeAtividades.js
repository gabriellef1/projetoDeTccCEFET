import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  ListItemLink: {
	backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ListaDeAtividades(){
    const classes = useStyles();
	const usuario = ['Ana', 'aluno']; //simula um banco de dados
	const atividades = [
		["Aplicações para Web II", "Prova em Dupla", "Criar um controle de tarefas em PHP", "16/02/2021", "https://ava.cefetmg.br/mod/assign/view.php?id=69190"],
		["Linguagem e Técnicas de Programação II", "Atividade Prática", "Criar uma interface em Java", "24/02/2021", "https://ava.cefetmg.br/mod/assign/view.php?id=3875"],
		["Linguagem e Técnicas de Programação II", "Atividade Prática", "Criar uma interface em Java", "24/02/2021", "https://ava.cefetmg.br/mod/assign/view.php?id=3875"],
		["Linguagem e Técnicas de Programação II", "Atividade Prática", "Criar uma interface em Java", "14/02/2021", "https://ava.cefetmg.br/mod/assign/view.php?id=3875"]
    ];
	atividades.sort(ordenacao);
	function ordenacao(a, b) {
		if (a[3] === b[3]) {
			return 3;
		}
		else {
			return (a[3] < b[3]) ? -1 : 1;
		}
	}
	
	//criar uma variável com as datas existentes
	//checar se a data está contida no array
	////se sim, imprime a atividade sem a data
	////se não, imprime a data antes da atividade a adc no array
	var datas = [];
	return(
		<div>
			<h1> Lista de Atividades </h1>
			<div className={classes.root}>
			  <List component="nav" aria-label="main mailbox folders">
				{atividades.map((atividade) => {
					return(
						<div>
							
							{datas.includes(atividade[3])?
								<div/>
										
							: 
								<div>
									{datas.push(atividade[3])}
									<ListItem button>
										<ListItemIcon>
											<ListItemText primary={atividade[3]} />
										</ListItemIcon>	
									</ListItem>
								</div>
							}
								Disciplina: {atividade[0]} <br/>
								Descrição: {atividade[2]} <br/>
								Link: <a href={atividade[4]}> Clique aqui para acessar a atividade </a>
								<br/> <br/>
						</div>	
					);		
				})}
			  </List>
			</div>
		</div>
    );
}