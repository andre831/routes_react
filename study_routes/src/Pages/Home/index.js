import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <h1>
          Bem vindo a pagina HOME!
        </h1>
        <Link to="/product">Produtos</Link>
    </div>
  );
 }