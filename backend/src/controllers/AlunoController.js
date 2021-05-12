const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {

  async index (req,res){
    const alunos = await connection('alunos').select('*');
    return res.json(alunos);
  },

  async create(req,res){
    const {nome, endereco, nascimento} = req.body;
  const id = crypto.randomBytes(4).toString('HEX');

  await connection('alunos').insert({
    id,
    nome,
    endereco,
    nascimento
  });

  async delete(req,res){
    const {id} = req.params;
    const id_aluno = req.headers.authorization;
  
    const aluno = await connection('alunos')
      .where('id',id)
      .select('aluno_id')
      .first();
      
      await connection('alunos').where('id',id).delete();

      return res.status(204).send();
    
  }

  return res.json({id});
  }
};