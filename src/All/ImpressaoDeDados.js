import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
//import 'date-fns';
//import Grid from '@material-ui/core/Grid';
//import DateFnsUtils from '@date-io/date-fns';
//import KeyboardDatePicker from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//select:
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import AbaSuperior from './AbaSuperior.js';

//botao e select
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Imprimir(props){
	//formcontrol abraçando tudo
	//fixar aba lateral
	//aba superior com as partes do formulário
	//igualar os tamanhos dos textos de necessidades educacionais especiais
	//dividir em routes
	//const paginas = ['1. Identificacao', '2. Dados Familiares', '3. Informação Escolar', '4. Avaliação Geral', '5. Avaliação DoAluno', 'Tudo'];
	//const exibir = [<Identificacao />, <DadosFamiliares />, <InformacaoEscolar />, <AvaliacaoGeral />, <AvaliacaoDoAluno />, <Tudo />];
	const classes = useStyles();
	const paginas = Array();
	const exibir = Array();
	const propriedadesItens = Array.from(props.itens);
	var cont = 0;
	if (propriedadesItens.includes(-1)){
		paginas.push('Identificacao');
		exibir.push(<IdentificacaoProfessor />);
		paginas.push('Condições Familiares');
		exibir.push(<CondicoesFamiliaresProfessor />);
		paginas.push('Adaptações');
		exibir.push(<AdaptacoesProfessor />);
	}else{
		if(propriedadesItens.includes(1)){
			paginas.push('Identificacao');
			exibir.push(<Identificacao />);
			cont++;
		}
		if(propriedadesItens.includes(2)){
			paginas.push('Dados Familiares');
			exibir.push(<DadosFamiliares />);
			cont++;
		}
		if(propriedadesItens.includes(3)){
			paginas.push('Informação Escolar');
			exibir.push(<InformacaoEscolar />);
			cont++;
		}
		if(propriedadesItens.includes(4)){
			paginas.push('Avaliação Geral');
			exibir.push(<AvaliacaoGeral />);
			cont++;
		}
		if(propriedadesItens.includes(5)){
			paginas.push('Avaliação Do Aluno');
			exibir.push(<AvaliacaoDoAluno />);
			cont++;
		}
		
		if (cont===5){
			paginas.push('Tudo');
			exibir.push(<Tudo />);
		}
	}
    return (
		<div>
				<AbaSuperior paginas={paginas} exibir={exibir}/>
		</div>
    );
}

function Tudo(){
	//formcontrol abraçando tudo
	//fixar aba lateral
	//aba superior com as partes do formulário
	//igualar os tamanhos dos textos de necessidades educacionais especiais
	//dividir em routes
    return (
		<div>
			<FormControl>
				{<Identificacao />}
				{<DadosFamiliares />}
				{<InformacaoEscolar />}
				{<AvaliacaoGeral />}
				{<AvaliacaoDoAluno />}
				
			</FormControl>
		</div>
    );
}


function Identificacao(){
	//nome completo, data de nascimento, número de celular
	//endereço -> rua, número, complemento, bairro, cidade, estado
	
	const [selectedDate, setSelectedDate] = React.useState(new Date('2006-01-01'));

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	
	const aluno = ['Esse é meu nome', '01/07/2006'];
	
	return(
		<div>
			<h1> Identificação </h1>
			<h3> Nome: </h3> <p> {aluno[0]} </p>
			<h3> Data de Nascimento: </h3> <p> {aluno[1]} </p>
			<Endereco /> //colocar condicao para a professora
		</div>
	);
	
	
	function Endereco(){
		const endereco = ['Essa é minha rua', '800', ' ', 'Estado Belo', 'Cidade Linda', 'Meu Bairro'];
		return(
			<div>
				<br/>
				<h2> Endereço: </h2>
				<h3> Rua: </h3> <p> {endereco[0]} </p>
				<h3> Número: </h3> <p> {endereco[1]} </p>
				<h3> Complemento: </h3> <p> {endereco[2]} </p>
				<h3> Estado: </h3> <p> {endereco[3]} </p>
				<h3> Cidade: </h3> <p> {endereco[4]} </p>
				<h3> Bairro: </h3> <p> {endereco[5]} </p>
			</div>
		);
	}
}


function DadosFamiliares(){
	const dados = ['Eu sou a mãe', 'Eu sou o pai', '3', 'Mãe e dois irmãos'];
	return(
		<div>
			<h1> Dados Familiares </h1>
			<h3> Nome dos Responsáveis: </h3> <p> {dados[0]} </p> <p> {dados[1]} </p>
			<br/>
			<h3> Número de Irmãos: </h3> <p> {dados[2]} </p>
			<br/>
			<h3> Mora Com: </h3> <p> {dados[3]} </p>
			<br/>
		</div>
	);
}


function InformacaoEscolar(){
	const classes = useStyles();
	
	const dados = ['XI (Contagem)', '3ª', 'Informática', '3', 'Aqui aparecerá uma linda história', 'E aqui os motivos'];
	return(
		<div>
			<h1> Informação Escolar </h1>
			<h3> Campus: </h3> <p> {dados[0]} </p>
			<h3> Série: </h3> <p> {dados[1]} </p>
			<h3> Curso ou Turma: </h3> <p> {dados[2]} </p>
			<h3> Idade Inicial: </h3> <p> {dados[3]} </p>
			<br/>
			<h3> História Escolar: </h3> <p> {dados[4]} </p>
			<br/>
			<h3> Motivo do Encaminhamento: </h3> <p> {dados[5]} </p>
			<br/>
		</div>
	);
}


function AvaliacaoGeral(){
	return(
		<FormControl component="fieldset">
			<h1> Avaliação Geral </h1>
			<AmbitoFamiliar />
			<AmbitoEscolar />
		</FormControl>
	);
}
function AmbitoFamiliar(){
	return(
		<div>
				<h2> Âmbito Familiar </h2>
				<InsercaoDeDados
					id="caracteristicasAmbienteFamiliar"
					titulo="1 - Características do Ambiente Familiar"
					rotulo="Características do Ambiente Familiar"
					conteudo="Quais as condições de moradia e atitudes?"
				/>
				<InsercaoDeDados
					id="convivioFamiliar"
					titulo="2 - Convívio Familiar"
					rotulo="Convívio Familiar"
					conteudo="Como são as relações afetivas, qualidade de comunicações, expectativas?"
				/>
				<InsercaoDeDados
					id="condicoesAmbienteFamiliar"
					titulo="3 - Condições do ambiente familiar para a aprendizagem escolar"
					rotulo="Condições do ambiente familiar para a aprendizagem escolar"
					conteudo=" "
				/>
				<br/>
		</div>
	);
}
function AmbitoEscolar(){
	return(
		<div>
				<h2> Âmbito Escolar </h2>
				<InsercaoDeDados
					id="culturaEFilosofiaDaEscola"
					titulo="1 - Cultura e Fisolofia"
					rotulo="Cultura e Fisolofia"
					conteudo="Qual a cultura e a filosofia da escola?"
				/>
				<InsercaoDeDados
					id="organizacaoEscola"
					titulo="2 - Organização da Escola"
					rotulo="Organização da Escola"
					conteudo="Como é a organização da escola (acessibilidade física, organização das turmas, mobiliário adequado, etc?"
				/>
				<InsercaoDeDados
					id="recursosHumanos"
					titulo="3 - Recursos Humanos"
					rotulo="Recursos Humanos"
					conteudo="Há professor auxiliar de sala, instrutor de Libras, tutor na sala de aula, parceria com profissionais da saúde, etc?"
				/>
				<InsercaoDeDados
					id="atitudesFrenteAoAluno"
					titulo="4 - Atitudes Frente ao Aluno"
					rotulo="Atitudes Frente ao Aluno"
					conteudo="Como são as atitudes de alunos, funcionários, professores, gestores, pais, etc?"
				/>
				<InsercaoDeDados
					id="professorDaSalaDeAulaRegular"
					titulo="5 - Professor da Sala de Aula Regular"
					rotulo="Professor da Sala de Aula Regular"
					conteudo="Formação inicial e continuada, motivação para trabalhar, reação frente às dificuldades do aluno, aspecto físico da saça de aula, etc"
				/>
				<br/>
		</div>
	);
}
function InsercaoDeDados(props){
	return(
		<div>
			<h3> {props.rotulo} </h3> <p> {props.conteudo} </p>
			<br/>
		</div>
	);
}


function AvaliacaoDoAluno(){
	return (
		<div>
			<h1> Avaliação do Aluno </h1>
			<CondicoesDeSaudeGeral />
			<NecessidadesEducacionaisEspeciais />
			<DesenvolvimentoDoAluno />
		</div>
    );
}
function CondicoesDeSaudeGeral(){
	//perguntas
	//dependendo da resposta, caixinhas com opções para respostas adicionais
	return(
		<div>
			<FormControl component="fieldset">
				<h2> Condições de Saúde Geral </h2>
				<Diagnostico />
				<OutrosProblemas />
				<Medicamentos />
				<Recomendacoes />
			</FormControl>
		</div>
	);
}
function Diagnostico(){
	const [value, setValue] = React.useState(' ');
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	return(
		<div>
			<h3> Diagnóstico </h3> <p> O aluno possui transtorno do espectro do de autismo. </p> <p> O diagnóstico foi feito em 2010. </p>
			<p> ou </p>
			<p> O aluno não possui diagnóstico. </p> <p> Aqui viria a situação. </p>
			<br/>
		</div>
	);
}
function OutrosProblemas(){
	
	return(
		<div>
			<h3> Outros problemas </h3> <p> Sim, o aluno possui outros problemas de saúde. </p> <p> Aqui viriam os problemas </p>
			<p> ou </p>
			<p> Não, o aluno não possui outros problemas de saúde. </p>
			<br/>
		</div>
	);
}
function Medicamentos(){
	
	return(
		<div>
			<h3> Medicamentos </h3> <p> Sim, o aluno faz uso de medicamentos controlados. </p> <p> Aqui viriam os medicamentos. </p>
			<p> ou </p>
			<p> Não, o aluno não faz uso de medicamentos controlados. </p>
			<br/>
		</div>
	);
}
function Recomendacoes(){
	const [value, setValue] = React.useState(' ');
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	return(
		<div>
			<h3> Recomendações da Área da Saúde </h3> <p> Existem recomendações da área da saúde. </p> <p> Aqui viriam as recomendações. </p>
			<p> ou </p>
			<p> Não existem recomendações da área da saúde. </p>
			<br/>
		</div>
	);
}

function NecessidadesEducacionaisEspeciais(){
	//campos de texto para inserir informações
	//arrumar os tamanhos
	return(
		<div>
			<h2> Necessidades Educacionais Especiais do Aluno (NEE) </h2>
			<FormControl component="fieldset">
				<Necessidade
					id="deficiencia"
					titulo="1 - Deficiência(s) ou Suspeita"
					rotulo="Deficiência(s) ou Suspeita"
					conteudo="Quais as deficiência(s) ou suspeita de deficiência(s) específica(s) apresentada(s)?"
				/>
				<Necessidade
					id="sistemaLinguistico"
					titulo="2 - Sistema Linguístico"
					rotulo="Sistema Linguístico"
					conteudo="Qual o sistema linguístico utilizado pelo aluno na sua comunicação?				 "
				/>
				<Necessidade
					id="recursos"
					titulo="3 - Recursos e Equipamentos"
					rotulo="Recursos e Equipamentos"
					conteudo="Qual o tipo de recurso e/ou equipamento já utilizado pelo aluno?				 	 "
				/>
				<Necessidade
					id="recursosProvidenciar"
					titulo="4 - Recurso e Equipamentos Para Providenciar"
					rotulo="Recurso e Equipamentos Para Providenciar"
					conteudo="Qual o tipo de recurso e/ou equipamento que precisa ser providenciado para o aluno?"
				/>
				<Necessidade
					id="implicacoes"
					titulo="5 - Implicações da NEE (Necessidade Educacional Especial)"
					rotulo="Implicações da NEE"
					conteudo="Quais as implicações da NEE do aluno para a acessibilidade curricular?			  "
				/>
				<Necessidade
					id="observacoes"
					titulo="6 - Observações"
					rotulo="Observações"
					conteudo="Digite aqui observações importantes                                                 "
				/>
				<br/>
			</FormControl>
		</div>
	);
}
function Necessidade(props){
	return(
		<div>
			<h3> {props.rotulo} </h3> <p> {props.conteudo} </p>
		</div>
	);
}

function DesenvolvimentoDoAluno(){
    return (
		<div>
			<h2> Desenvolvimento do Aluno </h2>
			<h3> Função Cognitiva </h3>
			<FuncaoCognitiva legenda='Percepção Visual' nome="PercepcaoVisual"/>
			<FuncaoCognitiva legenda='Percepção Auditiva' nome="PercepcaoAuditiva"/>
			<FuncaoCognitiva legenda='Percepção Tátil' nome="PercepcaoTatil"/>
			<FuncaoCognitiva legenda='Percepção Sinestésica' nome="PercepcaoSinestesica"/>
			<FuncaoCognitiva legenda='Percepção Espacial' nome="PercepcaoEspacial"/>
			<FuncaoCognitiva legenda='Percepção Temporal' nome="PercepcaoTemporal"/>
		</div>
    );
}
function FuncaoCognitiva(props){
	//formulario completo para cadastro do aluno
	//cada parte do formulário é um componente:
	////h1 -> títulos principais (Desenvolvimento do aluno/avaliação específica para o aluno/adaptação)
	////h2 -> subtítulos (função cognitiva)
	////h3 -> subsubtítulos rs (percepção visual)
	////p -> explicação do aspecto
	////elemento de formulário -> inserção dos dados
	
	const [value, setValue] = React.useState('dificuldade');
	const handleChange = (event) => {
		setValue(event.target.value);
	};
		
	return(
		<div>
			<h4> {props.legenda}: </h4> <p> Extrema Dificuldade (exemplo) </p>
			<p> Observações sobre {props.legenda} virão aqui. </p>
		</div>
	);
}

function IdentificacaoProfessor(){
	const classes = useStyles();
	
	const dados = ['Este é meu nome', '3ª', 'Informática', 'O aluno possui transtorno do espectro do de autismo.'];
	return(
		<div>
			<h1> Identificação </h1>
			<h3> Nome: </h3> <p> {dados[0]} </p>
			<h3> Série: </h3> <p> {dados[1]} </p>
			<h3> Curso ou Turma: </h3> <p> {dados[2]} </p>
			<h3> Diagnóstico </h3> <p> {dados[3]} </p>
			<br/>
		</div>
	);
}

function CondicoesFamiliaresProfessor(){
	return(
		<div>
			<h1> Condições Familiares </h1>
			<p> Buscar no banco de dados e imprimir os itens do âmbito familiar que abordam as condições. </p>
			<br/>
		</div>
	);
}

function AdaptacoesProfessor(){
	const classes = useStyles();
	return(
		<div>
					<FormControl component="fieldset">
					<form className={classes.form} noValidate>
						<h1> Adaptações Propostas Para o Aluno </h1>
						<p> Busca no banco de dados as adaptações associadas a este aluno propostas por outros professores. </p>
						<br/>
						<h3> Deseja propor alguma adaptação ou sugestão para o ensino do aluno? Insira abaixo: </h3>
						<TextField
						  id={"adaptacoestextField"}
						  label="Adaptações"
						  multiline
						  rows={4}
						  placeholder="Digite aqui adaptações que gostaria de propor!"
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
					</FormControl>
		</div>
	);
}






