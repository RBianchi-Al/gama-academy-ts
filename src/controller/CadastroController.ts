// gerenciamento e regras de negócio, faz as requisições

import {Request, Response} from 'express';

export default {
    async create(req: Request, res: Response){
        const {nome, cpf} = req.body;
        const id = 3;
        const data = {id, nome, cpf}
        return res.status(201).json({data: data})
    },
    async list(req: Request, res: Response){
        const result = [{id: 1, cpf: 222555, nome: "Renata"},{id: 1, cpf: 333555, nome: "Marciel"}  ]
        return res.status(201).json({data: result})
    },
    async update(req: Request, res: Response){
        const {nome, cpf} = req.body;
        const dataAlteracao = '30/03/2021';
        const cadastro = {dataAlteracao, nome, cpf}
        cadastro.nome = "José da Silva"
        return res.status(201).json({data: cadastro})

    }
}