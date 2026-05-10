// Verificar se usuário já está logado
window.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('currentUser');
    if (user) {
        window.location.href = 'dashboard.html';
    }

    setupTabButtons();
    setupForms();
});

function setupTabButtons() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            
            // Remove active de todos
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Adiciona active no clicado
            tab.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

function setupForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleRegister();
    });
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const messageDiv = document.getElementById('message');

    if (!email || !password) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }

    // Buscar usuário no localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email
        }));
        const redirectPage = user.config ? 'config.html' : 'dashboard.html';
        showMessage('Login realizado com sucesso! Redirecionando...', 'success');
        setTimeout(() => {
            window.location.href = redirectPage;
        }, 1500);
    } else {
        showMessage('Email ou senha incorretos', 'error');
    }
}

function handleRegister() {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const confirmPassword = document.getElementById('registerConfirmPassword').value.trim();

    if (!name || !email || !password || !confirmPassword) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showMessage('As senhas não coincidem', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('A senha deve ter pelo menos 6 caracteres', 'error');
        return;
    }

    // Verificar se email já existe
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
        showMessage('Email já cadastrado', 'error');
        return;
    }

    // Criar novo usuário
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        plan: null,
        config: null
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    showMessage('Cadastro realizado com sucesso! Faça login para continuar', 'success');
    
    // Limpar formulário
    document.getElementById('registerForm').reset();
    
    // Mudar para aba de login após 2 segundos
    setTimeout(() => {
        document.querySelector('[data-tab="login-tab"]').click();
    }, 2000);
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    
    setTimeout(() => {
        messageDiv.className = 'message';
    }, 5000);
}
