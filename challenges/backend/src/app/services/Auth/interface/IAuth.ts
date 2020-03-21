import { AuthToken } from "../classes/AuthToken";

export interface IAuth {

    login(userMailId: string, password: string): Promise<AuthToken>;

}