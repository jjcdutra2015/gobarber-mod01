import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Julio Dutra',
    email: 'julio@rocketseat.com.br',
    password_hash: '131321654560',
  });

  return res.json(user);
});

export default routes;
