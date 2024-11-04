import { useEffect, useState } from "react";
//importar a funcionalidade no arquivo

export default function App() {
  //função especial para efeitos colaterais
  //ele pode receber uma função e um [array de dependencia]
  //useEffect()
  //useEffect(() => {}, [])
  useEffect(() => {
    console.log("entregue o desafio");
  }, []);
  //executar um efeito colateral apenas 1 vez
  //assum que é montado
  const [contagem, setContagem] = useState(0);
  useEffect(() => {
    console.log(
      "vou ser executado apenas quando houver mudança no estado do botão."
    );
  }, []);

  useEffect(() => {
    console.log("Olá!");
  });
  //sem o array de dependencias
  //vai ser executado a cada efeito colateral (qualquer mudança no componente ou na página)
  return (
    <main>
      <h1>useEffect</h1>
      <h2>Efeito especial para efeitos colaterais</h2>
      <h3>{contagem}</h3>
      <button onClick={() => setContagem(contagem + 1)}>Incrementar</button>
    </main>
  );
}
