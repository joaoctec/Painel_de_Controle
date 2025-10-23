const Formulario = (() => {
    
    let formEl;
    let nomeEl, emailEl, idadeEl, cargoEl;
    
    let callbackSucesso;

    const handleSubmit = (event) => {

        event.preventDefault(); 
        
        const nome = nomeEl.value.trim();
        const email = emailEl.value.trim();
        const idade = idadeEl.value.trim();
        const cargo = cargoEl.value.trim();

        if (!nome || !email || !idade || !cargo) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const novoUsuario = {
            nome: nome,
            email: email,
            idade: idade,
            cargo: cargo
        };

        if (callbackSucesso) {
            callbackSucesso(novoUsuario);
        }
        
        formEl.reset();
        nomeEl.focus(); 
    };

    const iniciar = (callback) => {

        callbackSucesso = callback;
        
        formEl = document.getElementById('form-cadastro');
        nomeEl = document.getElementById('nome');
        emailEl = document.getElementById('email');
        idadeEl = document.getElementById('idade');
        cargoEl = document.getElementById('cargo');

        formEl.addEventListener('submit', handleSubmit);
    };

    return {
        iniciar
    };

})();