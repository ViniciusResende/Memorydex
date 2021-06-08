import { container } from './styles.module.scss';
import { useHistory } from 'react-router-dom';

export function Home() {
  const history = useHistory();

  function handleNavigateToGame() {
    history.push('/game');
  }

  return (
    <div className={container}>
      <div>
        <h1>
          Seja bem vindo, <span>treinador(a)!</span>
        </h1>
        <p>
          Existem pokemons lendários espalhados pela cidade.
          <br />
          Sua missão é achá-los o quanto antes para que não <br />
          façam mais destruição!
          <span> Aceita o desafio</span>?
        </p>
        <button onClick={handleNavigateToGame}>Eu aceito!</button>
      </div>
    </div>
  );
}
