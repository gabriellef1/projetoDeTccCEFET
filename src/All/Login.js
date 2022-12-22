import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

//botão de login
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
}));

export default function Login(){
	  const classes = useStyles();
	  
	  return (
		<Container component="main" maxWidth="xs">
		  <CssBaseline />
		  <div className={classes.paper}>
			<Avatar className={classes.avatar}>
			  <LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Login
			</Typography>
			<form className={classes.form} noValidate>
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="telefone"
				label="Número de Telefone"
				name="telefone"
				//autoComplete="email"
				autoFocus
			  />
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Senha"
				type="password"
				id="password"
				autoComplete="current-password"
			  />
			  <FormControlLabel
				control={<Checkbox value="remember" color="primary" />}
				label="Continuar Conectado"
			  />
			  <Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			  >
					ENTRAR
			  </Button>
			  <Grid container>
				<Grid item xs>
				  <Link href="#" variant="body2">
					Esqueceu a senha?
				  </Link>
				</Grid>
			  </Grid>
			</form>
		  </div>
		  
		</Container>
	  );
}