import { ICarOnSaleClient } from '../interface/ICarOnSaleClient'
import { Auctions } from './Auctions';
import {injectable} from "inversify";
import "reflect-metadata";
import axios from 'axios';
import { AuthToken } from '../../Auth/classes/AuthToken';
import { Auth } from '../../Auth/classes/Auth';

require('dotenv').config();

@injectable()
export class CarOnSaleClient implements ICarOnSaleClient {

    getRunningAuctions(): Promise<Auctions> {

        return new Promise<Auctions>((resolve, reject) => {
            const auth = new Auth();

            auth.login('salesman@random.com', '123test').then(response => {
              const authToken = response;
              const endPoint = `${process.env.API_BASE_URL}/v2/auction/buyer/`;

              axios({
                url: endPoint,
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'userid': authToken.userId,
                  'authtoken':authToken.token
              },
              }).then(response => {
                resolve (new Auctions(response.data.items));
              }).catch(err => {
                  reject(err);
              })

            }).catch(err => {
              reject(err);
            })
      
        });

    }

}