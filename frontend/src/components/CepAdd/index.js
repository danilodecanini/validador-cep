import React from 'react';
import Header from '../layout/Header';
import { Card, CardBody, Input, Label, Button, HelperText } from '@windmill/react-ui';

const CepAdd = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <div className="shadow">
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Cadastrar CEP</p>
              <div className="mb-4">
                <Label>
                  <span>Cidade</span>
                  <Input className="mt-1" />
                </Label>
              </div>
              <div className="mb-4">
                <Label>
                  <span>CEP</span>
                  <Input className="mt-1" />
                  <HelperText valid={false}>CEP Inválido, verifique o valor digitado</HelperText>
                </Label>
              </div>
              <Button disabled>Cadastrar</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CepAdd;
