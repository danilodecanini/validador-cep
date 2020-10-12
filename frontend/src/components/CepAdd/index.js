import React, { useState } from 'react';
import Header from '../layout/Header';
import { Card, CardBody, Input, Label, Button, HelperText } from '@windmill/react-ui';
import notify from '../../utils/notify';
import api from '../../services/api';

const CepAdd = () => {
  const [city, setCity] = useState('');
  const [cep, setCEP] = useState('');
  const [isLoading, setLoading] = useState(false);

  async function handleSubmit(evt){
    evt.preventDefault();
    setLoading(true);

    if(!city || !cep){
      notify('warning', 'Atenção', 'Os campos Cidade e CEP devem ser preenchidos!');
      setLoading(false);
      return false;
    }

    await api.post('/', {
      city,
      cep
    }).then(response => {
      if(response.data.status === 'success'){
        notify(response.data.status, 'Sucesso!', response.data.message);
        setCity('');
        setCEP('');
      } else {
        notify('danger', 'Ops!', response.data.message);
      }
    }).catch(err => {
      if(err.response){
        notify('danger', 'Ops!', err.response.data.message);
      } else {
        notify('danger', 'Ops!', 'Algo deu errado!');
      }
    });

    setLoading(false);
  }

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <div className="shadow">
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Cadastrar CEP</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label>
                    <span>Cidade</span>
                    <Input onChange={e => setCity(e.target.value)} value={city} className="mt-1" />
                  </Label>
                </div>
                <div className="mb-4">
                  <Label>
                    <span>CEP</span>
                    <Input className="mt-1" onChange={e => setCEP(e.target.value)} value={cep}/>
                    <HelperText>O CEP precisa ser maior que 100.000 e menor que 999.999 <br/>O CEP não pode conter nenhum digito repetitivo alternado em pares</HelperText>
                  </Label>
                </div>
                <Button disabled={isLoading} type="submit">Cadastrar</Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CepAdd;
