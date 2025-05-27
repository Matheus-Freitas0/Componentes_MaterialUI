import {
  Paper,
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Button,
  ButtonGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Typography from "@mui/material/Typography";

const dados = [
  {
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "(11) 91234-5678",
    endereco: "Rua das Flores, 123 - São Paulo, SP",
    nascimento: "1990-05-15",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    nacionalidade: "Brasileiro",
    sexo: "Masculino",
    profissao: "Engenheiro Civil",
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    telefone: "(21) 99876-5432",
    endereco: "Av. Atlântica, 456 - Rio de Janeiro, RJ",
    nascimento: "1985-11-30",
    cpf: "987.654.321-00",
    rg: "98.765.432-1",
    nacionalidade: "Brasileira",
    sexo: "Feminino",
    profissao: "Advogada",
  },
  {
    nome: "Carlos Pereira",
    email: "carlos.pereira@email.com",
    telefone: "(31) 98765-4321",
    endereco: "Rua A, 789 - Belo Horizonte, MG",
    nascimento: "1978-07-22",
    cpf: "321.654.987-00",
    rg: "23.456.789-0",
    nacionalidade: "Brasileiro",
    sexo: "Masculino",
    profissao: "Professor",
  },
  {
    nome: "Ana Souza",
    email: "ana.souza@email.com",
    telefone: "(41) 91234-8765",
    endereco: "Rua B, 101 - Curitiba, PR",
    nascimento: "1995-03-10",
    cpf: "456.789.123-00",
    rg: "45.678.912-3",
    nacionalidade: "Brasileira",
    sexo: "Feminino",
    profissao: "Designer Gráfica",
  },
];

export default function Table1() {
  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        sx={{ mb: 3, fontStyle: "italic", fontWeight: "700" }}
      >
        Table 1
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Telefone</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Data de Nascimento</TableCell>
              <TableCell>CPF</TableCell>
              <TableCell>RG</TableCell>
              <TableCell>Nacionalidade</TableCell>
              <TableCell>Sexo</TableCell>
              <TableCell>Profissão</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dados.map((item) => (
              <TableRow key={item.nome}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.telefone}</TableCell>
                <TableCell>{item.endereco}</TableCell>
                <TableCell>{item.nascimento}</TableCell>
                <TableCell>{item.cpf}</TableCell>
                <TableCell>{item.rg}</TableCell>
                <TableCell>{item.nacionalidade}</TableCell>
                <TableCell>{item.sexo}</TableCell>
                <TableCell>{item.profissao}</TableCell>
                <TableCell>
                  <ButtonGroup variant="text" color="default" aria-label="">
                    <Button color="primary">
                      <VisibilityIcon />
                    </Button>
                    <Button color="primary">
                      <EditIcon />
                    </Button>
                    <Button color="error">
                      <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}