import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import "./styles.css";

export default function NovoAluno(){
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nascimento, setNascimento] = useState('');
  const history = useHistory();

 async function handleNovoAluno(e){
    e.preventDefault();

    const data = {
      nome,
      endereco,
      nascimento,
    }

      try {
        await api.post('alunos',data, {})
        history.push('/alunos');
      } 
      catch (error) {
        alert('Erro ao cadastrar Aluno, tente novamente')
      }

  }

  return(
    <div className="novo-aluno-container">
      <div className="content">
        <section><h1>Cadastrar Novo Aluno</h1></section>

        <form onSubmit={handleNovoAluno}>
          <input 
            placeholder="Nome"
            value={nome}
            onChange = {e => setTitle(e.target.value)}
          />

          <textarea 
            placeholder="Endereco"
            value={endereco}
            onChange = {e => setDescription(e.target.value)}
          />

          <input 
            placeholder="Nascimento"
            value={nascimento}
            onChange = {e => setValor(e.target.value)}
          />

          <button  className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}