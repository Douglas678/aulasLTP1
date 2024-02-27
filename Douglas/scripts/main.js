const form = document.getElementById('jobform');
form.addEventListener('submit',(event) =>{
    event.preventDefault();

    const name = document.getElementById('nome').value;
    const lastName =document.getElementById('sobrenome').value;
    const age = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    if (!name || !email || !password){
        alert('Por favor, preencha todos os campos.');
        return;
    }
    console.log(`Nome: {$name}, Email: {email}, Senha: {senha}`);
})