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

const produtos = [
  {
    imagem:
      "https://martinelloeletrodomesticos.fbitsstatic.net/img/p/smartphone-xiaomi-redmi-14c-256gb-azul-tela-6-88-cam-dupla-selfie-13mp-80192/266784.jpg?w=482&h=482&v=202501231556&qs=ignore",
    titulo: "Smartphone Xiaomi Redmi Note 12 128GB",
    preco: "R$ 1.299,00",
    condicao: "Novo",
    estoque: 15,
    vendedor: "Tech Loja",
    localizacao: "São Paulo - SP",
    categoria: "Celulares e Smartphones",
    avaliacao: "4.7",
  },
  {
    imagem:
      "https://m.media-amazon.com/images/I/51cj43d2FUL._AC_UF894,1000_QL80_.jpg",
    titulo: "Notebook Acer Aspire 5 15.6” Ryzen 5, 8GB RAM, SSD 512GB",
    preco: "R$ 2.899,00",
    condicao: "Novo",
    estoque: 7,
    vendedor: "Loja Digital",
    localizacao: "Curitiba - PR",
    categoria: "Informática",
    avaliacao: "4.5",
  },
  {
    imagem:
      "https://bebercalcados.cdn.magazord.com.br/img/2024/05/produto/48181/12228008-1-9087.jpg?ims=600x600",
    titulo: "Tênis Nike Revolution 6 Masculino",
    preco: "R$ 249,90",
    condicao: "Novo",
    estoque: 42,
    vendedor: "Esporte Shop",
    localizacao: "Rio de Janeiro - RJ",
    categoria: "Moda Masculina",
    avaliacao: "4.6",
  },
  {
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqn87zwVuXrh3X-cchpyv70vAhEqcC92LGQ&s",
    titulo: "TV LG 50” 4K UHD LED Smart",
    preco: "R$ 2.399,00",
    condicao: "Usado",
    estoque: 3,
    vendedor: "Outlet Eletrônicos",
    localizacao: "Belo Horizonte - MG",
    categoria: "TVs",
    avaliacao: "4.2",
  },
];

export default function Table2() {
  return (
    <>
      <Typography
        variant="h3"
        color="initial"
        sx={{ mt: 3, mb: 3, fontStyle: "italic", fontWeight: "700" }}
      >
        Table 2
      </Typography>
      <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#f3f4f6" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Imagem</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Condição</TableCell>
              <TableCell>Estoque</TableCell>
              <TableCell>Vendedor</TableCell>
              <TableCell>Localização</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Avaliação</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((item) => (
              <TableRow
                key={item.imagem}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                  "&:hover": { backgroundColor: "#f0f0f0", cursor: "pointer" },
                }}
              >
                <TableCell>
                  <img
                    src={item.imagem}
                    alt={item.titulo}
                    style={{
                      width: 60,
                      height: 60,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </TableCell>
                <TableCell>{item.titulo}</TableCell>
                <TableCell>{item.preco}</TableCell>
                <TableCell>{item.condicao}</TableCell>
                <TableCell>{item.estoque}</TableCell>
                <TableCell>{item.vendedor}</TableCell>
                <TableCell>{item.localizacao}</TableCell>
                <TableCell>{item.categoria}</TableCell>
                <TableCell>{item.avaliacao}</TableCell>
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