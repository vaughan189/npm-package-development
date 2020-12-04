import { Request, Response } from 'express';
import { Calculator } from '@vaughan189/my-awesome-calculator';
import { add, subtract } from "@vaughan189/maths-package";

const calculator = new Calculator();

interface HelloResponse {
    hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
    return res.send('API is working 🤓 well done');
};

export const helloHandler = (req: Request, res: Response) => {
    const { params } = req;
    const { name = 'World' } = params;
    const response = helloBuilder(name);

    return res.json(response);
};