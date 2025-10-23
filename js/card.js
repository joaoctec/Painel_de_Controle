const Cards = (() => {
    
    let usuarios = [];

    let listaUsuariosEl;
    let campoBuscaEl;

    const criarCard = (usuario) => {

        const card = document.createElement('div');

        card.className = 'card-usuario'; 

        card.dataset.id = usuario.id;


        const nomeEl = document.createElement('h3');
        nomeEl.textContent = usuario.nome;

        const emailEl = document.createElement('p');
        emailEl.textContent = `Email: ${usuario.email}`;
        
        const idadeEl = document.createElement('p');
        idadeEl.textContent = `Idade: ${usuario.idade}`;
        
        const cargoEl = document.createElement('p');
        cargoEl.textContent = `Cargo: ${usuario.cargo}`;

        card.append(nomeEl, emailEl, idadeEl, cargoEl);

        card.addEventListener('dblclick', () => {
            card.remove();
            
            usuarios = usuarios.filter(u => u.id !== usuario.id);
        });

        return card;
    };

    const filtrarCards = () => {
        const termoBusca = campoBuscaEl.value.toLowerCase();

        const cardsVisiveis = listaUsuariosEl.querySelectorAll('.card-usuario');

        cardsVisiveis.forEach(card => {

            const nomeUsuario = card.querySelector('h3').textContent.toLowerCase();
            
            if (nomeUsuario.includes(termoBusca)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    };

    const adicionarUsuario = (usuario) => {

        usuario.id = Date.now(); 

        usuarios.push(usuario);

        const novoCard = criarCard(usuario);
        listaUsuariosEl.appendChild(novoCard);
    };

    const iniciar = () => {
        listaUsuariosEl = document.getElementById('lista-usuarios');
        campoBuscaEl = document.getElementById('campo-busca');

        campoBuscaEl.addEventListener('input', filtrarCards);
    };

    return {
        iniciar,
        adicionarUsuario
    };

})();