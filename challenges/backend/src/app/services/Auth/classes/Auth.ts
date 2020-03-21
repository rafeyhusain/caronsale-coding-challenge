import {IAuth} from "../interface/IAuth";
import { AuthToken } from './AuthToken';
import {injectable} from "inversify";
import "reflect-metadata";
import axios from 'axios';

require('dotenv').config();
const sha512 = require('js-sha512')

@injectable()
export class Auth implements IAuth {

    public constructor() {
    }


    public login(userMailId: string, password: string): Promise<AuthToken> {
        
        return new Promise<AuthToken>((resolve, reject) => {
            
            const endPoint = `${process.env.API_BASE_URL}/v1/authentication/${userMailId}`;
            const hashPassword = this.hashPasswordWithCycles(password, 5);

            axios({
                url: endPoint,
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: { "password": `${hashPassword}`, "meta": "" } 
              }).then(response => {
                resolve (new AuthToken(response.data));
              }).catch(err => {
                  reject(err)
              })
      
        });
    }
    

    private hashPasswordWithCycles(plainTextPassword: string, cycles: number): string { 
        let hash = `${plainTextPassword}`;
    
        for (let i = 0; i < cycles; i++) { 
            hash = sha512(hash); 
        }
  
        return hash;
    }

}