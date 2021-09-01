// consegue abstrair todas as configurações de rotas
import {Router} from 'express';
import CadastroController from './controller/CadastroController';

const routes = Router();

routes.post('/cadastro', CadastroController.create)
routes.get('/cadastro', CadastroController.list)
routes.put('/cadastro', CadastroController.update)

export default routes;
