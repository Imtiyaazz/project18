import logo from "./logo.svg";
import "./App.css";
import ProdList from "./component/ProdList";
import PrdList from "./ecommerce/PrdList";
import { Card, CardContent } from "@mui/material";

function App() {
  return (
    <Card>
      <CardContent>
        <PrdList />
      </CardContent>
    </Card>
    // <ProdList />;
  );
}

export default App;
