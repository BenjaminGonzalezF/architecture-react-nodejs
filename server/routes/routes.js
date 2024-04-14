import {login, addUser} from '../middlewares/users.midlewares.js';
export default function routes(app){
    app.get('/', (req, res) => {
        res.send('Hello World!')
        });

    app.get('/login', async (req, res) => {
        return login(req, res);
    });

    app.post('/addUser', async (req, res) => {
        return addUser(req, res);
    });


}