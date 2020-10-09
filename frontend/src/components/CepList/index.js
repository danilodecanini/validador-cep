import React from 'react';
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


const CepList = () => {
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
              <TableContainer>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableCell>Cidade</TableCell>
                        <TableCell>CEP</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <span className="font-semibold ml-2">Mandaguari</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">86975-000</span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CepList;
