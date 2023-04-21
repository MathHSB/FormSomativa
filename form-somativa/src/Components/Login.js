import React from 'react'
import { Input } from '../Form/Input'
import { Button } from '../Form/Button'

export const Login = () => {
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const [acesso, setAcesso] = React.useState();

  function handleSubmit(e){
    e.preventDefault();
    if(email === "AtividadeSomativa@pucpr.br" && senha ==="123456")
      setAcesso(true)  
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Input label="Email" type="text" onChange={x => setEmail(x.target.value)}/>
      <Input label="Senha" type="password" onChange={x => setSenha(x.target.value)}/>
      <Button>Acessar</Button>
      {acesso ? <p>Acessado com sucesso!</p> : null}
    </form>
  )
}
