import { useState } from 'react';
import { Header } from '../../Components/Header';
import github from '../../assets/image.png';
import ItemList from '../../Components/ItemList'
import './styles.css'

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetDate = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json()

    if(newUser.name){
      const {avatar_url, name, bio} = newUser;
      setCurrentUser({avatar_url, name, bio});

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const newRepos = await userData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }
  };

return (
    <div className="App">
      <Header/>
      <div className="conteudo">
      <img src={github} className="github" alt="github app"/>
      <div className='info'>
        <div>
          <input name="usuario" value={user} 
          onChange={event => setUser (event.target.value)} 
          placeholder='@username'/>
          <button onClick={handleGetDate}>Buscar</button>
        </div>
        {currentUser?.name ? (
            <>
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
      </>      
       ): null}
      {repos?.length ? ( 
        <div>
          <h4 className='repositorio'>Repositórios</h4>
          <ItemList title="Teste1" description="Teste de descrição"/>
          <ItemList title="Teste1" description="Teste de descrição"/>
          <ItemList title="Teste1" description="Teste de descrição"/>
          <ItemList title="Teste1" description="Teste de descrição"/>
        </div> 
      ) : null}
      </div>
    </div> 
  </div>
   );
}

export default App;
