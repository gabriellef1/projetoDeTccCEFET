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
import FiltrarAluno from './FiltrarAluno.js';

//botao e select
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(8),
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
}));

export default function Formulario(props){
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
	if(propriedadesItens.includes(0)){
		paginas.push('Cadastrando um ' + props.tipo);
		exibir.push(<OutrosUsuarios tipo={props.tipo}/>);
		cont++;
	}
	if(propriedadesItens.includes(1)){
		paginas.push('1. Identificacao');
		exibir.push(<Identificacao />);
		cont++;
	}
	if(propriedadesItens.includes(2)){
		paginas.push('2. Dados Familiares');
		exibir.push(<DadosFamiliares />);
		cont++;
	}
	if(propriedadesItens.includes(3)){
		paginas.push('3. Informação Escolar');
		exibir.push(<InformacaoEscolar />);
		cont++;
	}
	if(propriedadesItens.includes(4)){
		paginas.push('4. Avaliação Geral');
		exibir.push(<AvaliacaoGeral />);
		cont++;
	}
	if(propriedadesItens.includes(5)){
		paginas.push('5. Avaliação Do Aluno');
		exibir.push(<AvaliacaoDoAluno />);
		cont++;
	}
	
	if (cont===5){
		paginas.push('Tudo');
		exibir.push(<Tudo />);
	}
	
    return (
		<div>
			<form className={classes.form} noValidate>
				<AbaSuperior paginas={paginas} exibir={exibir}/>
				{/*
				<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			  >
					ENVIAR
				</Button>*/}
			</form>
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
	
	return(
		<FormControl component="fieldset">
			<h1> 1 - Identificação </h1>
			<TextField
				id="nome"
				label="Nome Completo"
				required
				variant="outlined"
			/>
			<br/>
			<TextField
					id="telefone"
					label="Telefone"
					placeholder="Digite o número de telefone que será usado para login"
					variant="outlined"
					required
			/>
			<br/>
			{/*
			<KeyboardDatePicker
			  margin="normal"
			  id="dataDeNascimento"
			  label="Data de Nascimento"
			  format="MM/dd/yyyy"
			  value={selectedDate}
			  onChange={handleDateChange}
			  KeyboardButtonProps={{
				'aria-label': 'change date',
			  }}
			/>
			*/}
			
			<h2> Endereço </h2>
			<TextField
				id="enderecoRua"
				label="Rua"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="enderecoNumero"
				label="Número"
				type="number"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="enderecoComplemento"
				label="Complemento"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="enderecoBairro"
				label="Bairro"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="enderecoEstado"
				label="Estado"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="enderecoCidade"
				label="Cidade"
				variant="outlined"
			/>
			<br/>
		</FormControl>
	);
}

function DadosFamiliares(){
	return(
		<FormControl component="fieldset">
			<h1> 2 - Dados Familiares </h1>
			<TextField
				id="nomeResponsavel1"
				label="Nome do Responsável 1"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="nomeResponsavel2"
				label="Nome do Responsável 2"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="numeroDeIrmaos"
				label="Número de Irmãos"
				type="number"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="moraCom"
				label="Com quem mora?"
				variant="outlined"
			/>
			<br/>
		</FormControl>
	);
}

function InformacaoEscolar(){
	const classes = useStyles();
	const [campus, setCampus] = React.useState('');
	const handleChange = (event) => {
		setCampus(event.target.value);
	};
	
	const [serie, setSerie] = React.useState('');
	const handleChangeS = (event) => {
		setSerie(event.target.value);
	};
	
	return(
		<FormControl component="fieldset">
			<h1> 3 - Informação Escolar </h1>
			
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
				<InputLabel id="serie">Série</InputLabel>
				<Select
				  labelId="serieLabel"
				  id="serieLabel-select"
				  value={serie}
				  onChange={handleChangeS}
				  label="Selecione a Série"
				>
				  <MenuItem value="">
					<em>Selecione o Campus</em>
				  </MenuItem>
				  <MenuItem value={1}>1ª série</MenuItem>
				  <MenuItem value={2}>2ª série</MenuItem>
				  <MenuItem value={3}>3ª série</MenuItem>
				</Select>
			</FormControl>
			
			<TextField
				id="turma"
				label="Curso ou Turma"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="idadeInicial"
				label="Idade em que entrou na escola"
				type="number"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="historiaEscolar"
				label="História Escolar"
				multiline
				rows={4}
				placeholder="Digite aqui a história escolar (comum) e antecedentes relevantes"
				variant="outlined"
			/>
			<br/>
			<TextField
				id="motivo"
				label="Motivo do Encaminhamento"
				multiline
				rows={4}
				placeholder="Qual o motivo do encaminhamento para o atendimento educacional especializado (dificuldades apresentadas pelo aluno)?"
				variant="outlined"
			/>
			<br/>
		</FormControl>
	);
}

function AvaliacaoGeral(){
	return(
		<FormControl component="fieldset">
			<h1> 4 - Avaliação Geral </h1>
			<AmbitoFamiliar />
			<AmbitoEscolar />
		</FormControl>
	);
}
function AmbitoFamiliar(){
	return(
		<div>
			<FormControl component="fieldset">
				<h2> 4.1 - Âmbito Familiar </h2>
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
				
				
			</FormControl>
		</div>
	);
}
function AmbitoEscolar(){
	return(
		<div>
			<FormControl component="fieldset">
				<h2> 4.2 - Âmbito Escolar </h2>
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
			</FormControl>
		</div>
	);
}
function InsercaoDeDados(props){
	return(
		<div>
			<h3> {props.titulo} </h3>
			{props.conteudo} <br/>
			<FormControl component="fieldset">
				<TextField
					id={props.id}
					label={props.rotulo}
					multiline
					rows={2}
					variant="outlined"
				/>
			</FormControl>
		</div>
	);
}

function AvaliacaoDoAluno(){
	return (
		<div>
			<h1> 5 - Avaliação do Aluno </h1>
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
				<h2> 5.1 - Condições de Saúde Geral </h2>
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
		<FormControl component="fieldset">
						<FormLabel component="legend"> 1 - Diagnóstico </FormLabel>
						Tem diagnóstico da área de saúde que indica surdez, deficiência visual, deficiência física, deficiência intelectual ou 
						<br/>transtorno global de desenvolvimento?
						<RadioGroup row aria-label="diagnostico" name="diagnostico" id="diagnostico" value={value} onChange={handleChange.bind(this)}>
							<FormControlLabel value="sim" control={<Radio />} label="Sim" />
							<FormControlLabel value="nao" control={<Radio />} label="Não" />
						</RadioGroup>
						
						{value==='sim' ?
							<FormControl component="fieldset">
								<TextField
								  id="qualDiagnostico"
								  label="Diagnóstico"
								  placeholder="Digite aqui o diagnóstico do aluno"
								  variant="outlined"
								/>
								<br/>
								<TextField
								  id="dataEResultadosDoDiagnostico"
								  label="Data e Resultado"
								  multiline
								  rows={2}
								  placeholder="Qual a data e resultado do diagnóstico?"
								  variant="outlined"
								/>
								<br/>
							</FormControl>
						: value==='nao' ?
							<TextField
							  id="situacaoDoDiagnostico"
							  label="Situação"
							  multiline
							  rows={2}
							  placeholder="Qual é a situação do aluno quanto ao diagnóstico?"
							  variant="outlined"
							/>
						:
							<div/>
						}
						<br/>
		</FormControl>
	);
}
function OutrosProblemas(){
	
	const [value, setValue] = React.useState(' ');
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	return(
		<FormControl component="fieldset">
						<FormLabel component="legend"> 2 - Outros Problemas de Saúde </FormLabel>
						Tem outros problemas de saúde?
						<RadioGroup row aria-label="outrosProblemas" name="outrosProblemas" id="outrosProblemas" value={value} onChange={handleChange.bind(this)}>
							<FormControlLabel value="sim" control={<Radio />} label="Sim" />
							<FormControlLabel value="nao" control={<Radio />} label="Não" />
						</RadioGroup>
						{value==='sim' ?
							<TextField
							  id="quaisOutrosProblemas"
							  label="Quais?"
							  placeholder="Digite aqui outros problemas de saúde do aluno"
							  variant="outlined"
							/>
						:
							<div/>
						}
						<br/>
		</FormControl>
	);
}
function Medicamentos(){
	const [value, setValue] = React.useState(' ');
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	return(
		<FormControl component="fieldset">
						<FormLabel component="legend"> 3 - Medicamentos </FormLabel>
						Faz uso de medicamentos controlados?
						<RadioGroup row aria-label="medicamentos" name="medicamentos" id="medicamentos" value={value} onChange={handleChange.bind(this)}>
							<FormControlLabel value="sim" control={<Radio />} label="Sim" />
							<FormControlLabel value="nao" control={<Radio />} label="Não" />
						</RadioGroup>
						{value==='sim' ?
							<FormControl component="fieldset">
								<TextField
								  id="quaisMedicamentos"
								  label="Quais?"						
								  placeholder="Digite aqui os medicamentos e observações que considere importante"
								  variant="outlined"
								/>
								<br/>
								<TextField
								  id="medicamentoProcessoDeAprendizagem"
								  label="Processo de Aprendizagem"
								  multiline
								  rows={2}
								  placeholder="O medicamento interfere no processo de aprendizagem? Explique."
								  variant="outlined"
								/>
								<br/>
							</FormControl>
						:
							<div/>
						}
						<br/>
		</FormControl>
	);
}
function Recomendacoes(){
	const [value, setValue] = React.useState(' ');
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	return(
		<FormControl component="fieldset">
						<FormLabel component="legend"> 4 - Recomendações da Área da Saúde </FormLabel>
						Existem recomendações da área da saúde?
						<RadioGroup row aria-label="outrosProblemas" name="outrosProblemas" id="outrosProblemas" value={value} onChange={handleChange.bind(this)}>
							<FormControlLabel value="sim" control={<Radio />} label="Sim" />
							<FormControlLabel value="nao" control={<Radio />} label="Não" />
						</RadioGroup>
						{value==='sim' ?
							<TextField
							  id="recomendacoes"
							  label="Quais?"
							  placeholder="Digite aqui todas as recomendações"
							  variant="outlined"
							/>
						:
							<div/>
						}
						<br/>
		</FormControl>
	);
}

function NecessidadesEducacionaisEspeciais(){
	//campos de texto para inserir informações
	//arrumar os tamanhos
	return(
		<div>
			<h2> 5.2 - Necessidades Educacionais Especiais do Aluno </h2>
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
			<h3> {props.titulo} </h3>
			{props.conteudo} <br/>
			<FormControl component="fieldset">
				<TextField
					id={props.id}
					label={props.rotulo}
					multiline
					rows={2}
					variant="outlined"
				/>
			</FormControl>
		</div>
	);
}

function DesenvolvimentoDoAluno(){
	const classes = useStyles();
    return (
		<div>
			<h2> 5.3 - Desenvolvimento do Aluno </h2>
			<h3> Função Cognitiva </h3>
			<FuncaoCognitiva legenda='Percepção Visual' nome="PercepcaoVisual"/>
			<FuncaoCognitiva legenda='Percepção Auditiva' nome="PercepcaoAuditiva"/>
			<FuncaoCognitiva legenda='Percepção Tátil' nome="PercepcaoTatil"/>
			<FuncaoCognitiva legenda='Percepção Sinestésica' nome="PercepcaoSinestesica"/>
			<FuncaoCognitiva legenda='Percepção Espacial' nome="PercepcaoEspacial"/>
			<FuncaoCognitiva legenda='Percepção Temporal' nome="PercepcaoTemporal"/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			>
				ENVIAR
			</Button>
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
					<FormControl component="fieldset">
						<FormLabel component="legend">{props.legenda}</FormLabel>
						<RadioGroup row aria-label={props.nome} name={props.nome} value={value} onChange={handleChange.bind(this)}>
							<FormControlLabel value="nenhuma" control={<Radio />} label="Nenhuma Dificuldade" />
							<FormControlLabel value="pouca" control={<Radio />} label="Pouca Dificuldade" />
							<FormControlLabel value="dificuldade" control={<Radio />} label="Dificuldade" />
							<FormControlLabel value="muita" control={<Radio />} label="Muita Dificuldade" />
							<FormControlLabel value="extrema" control={<Radio />} label="Extrema Dificuldade" />
						</RadioGroup>
						<TextField
						  id={props.name + "textField"}
						  label="Observações"
						  multiline
						  rows={2}
						  placeholder="Digite aqui observações importantes"
						  variant="outlined"
						/>
						<br/>
						
					</FormControl>
		</div>
	);
}

function OutrosUsuarios(props){
	const classes = useStyles();
	
	const [enviado, setEnviado] = React.useState("nao");
	const handleSubmit = (event) => {
		setEnviado(event.target.value);
		event.preventDefault();
	};
	
	return(
		<div>
			{enviado === 'nao' ?
			<FormControl>
				<h1> Insira os dados do {props.tipo} </h1>
				<TextField
					id="nome"
					label="Nome"
					multiline
					placeholder="Digite o nome do usuário"
					variant="outlined"
					required
				/>
				<br/>
				<TextField
					id="telefone"
					label="Telefone"
					multiline
					placeholder="Digite o número de telefone que será usado para login"
					variant="outlined"
					required
				/>
				<br/>
				{<Button
					value="sim"
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					onClick={handleSubmit}
					className={classes.submit}
				>
					ENVIAR
				</Button>}
			</FormControl>
			:
				<div>
					<h1> Selecione o aluno com o qual relacionar este usuário: </h1>
					<FiltrarAluno />
				</div>
			}
		</div>
	);
}








