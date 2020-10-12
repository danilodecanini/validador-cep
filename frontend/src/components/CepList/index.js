import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import {
  Card,
  CardBody,
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@windmill/react-ui';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import notify from '../../utils/notify';


const CepList = () => {
  const [ceps, setCeps] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function getData(){
      await api.get('/').then(response => {
        if(response.data) {
          if(response.data.status === 'success'){
            setCeps(response.data.data);
            notify(response.data.status, 'Sucesso!', response.data.message);
            setLoading(false);
          } else {
            notify('danger', 'Ops!', response.data.message);
          }

        }
      })
      .catch(err => {
        console.log(err);
        notify('error', 'Ops!', 'Algo deu errado!');
      });


    }

    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto mt-10">
        <div className="shadow">
          <Card>
            <CardBody>
              <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">Listagem de CEP's cadastrados</p>
              <Link to="/add">
                <Button className="mb-4" iconLeft={AiOutlinePlus}>Novo CEP</Button>
              </Link>
              {!isLoading && (
                <TableContainer>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableCell>Cidade</TableCell>
                          <TableCell>CEP</TableCell>
                          <TableCell>Data Criação</TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                      {ceps.map(cep => (
                        <TableRow>
                          <TableCell>
                            <div className="flex items-center text-sm">
                              <span className="font-semibold ml-2">{cep.city}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm">{cep.cep}</span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm">{new Date(cep.createdAt).toLocaleString()}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CepList;
