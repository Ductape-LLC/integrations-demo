import Ductape from '@ductape/sdk';
import { config } from 'dotenv';

config();

const credentials = {
    user_id: String(process.env.DUCTAPE_USER_ID),
    workspace_id: String(process.env.DUCTAPE_WORKSPACE_ID),
    private_key: String(process.env.DUCTAPE_PRIVATE_KEY),
    redis_url: 'redis://localhost:6379', // optional
};


const ductape = new Ductape(credentials);
export default ductape;