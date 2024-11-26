import { Header } from '../../Components/Header';
import github from '../../assets/github.png';
import ItemList from '../../Components/ItemList'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
      <img src={github} className="github" alt="github app"/>
      <div className='info'>
        <div>
          <input name="usuario" placeholder='@username'/>
          <button>Buscar</button>
        </div>
        <div className="perfil">
          <img src="https://avatars.githubusercontent.com/u/166649039?v=4" 
          className="profile" 
          alt="imagen de perfil"
          />      
        <div> 
          <h3>Marcos Vinicius</h3>
          <span>@Viniciusx0800</span>
          <p>Descrição.</p>
         
        </div>
      </div>
      <hr/>
      <div>
        <h4 className='repositorio'>Repositórios</h4>
        <ItemList title="Teste1" description="Teste de descrição"/>
        <ItemList title="Teste1" description="Teste de descrição"/>
        <ItemList title="Teste1" description="Teste de descrição"/>
        <ItemList title="Teste1" description="Teste de descrição"/>
      </div>
    </div>
  </div> 
</div>




   );
}

export default App;
