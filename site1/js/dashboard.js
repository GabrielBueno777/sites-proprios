// Planos disponíveis
const PLANS = [
    {
        id: 'basic',
        name: 'Plano Basic',
        price: 29.90,
        features: [
            'Acesso básico a treinos',
            'Dieta genérica',
            'Suporte por email',
            'Acompanhamento básico'
        ]
    },
    {
        id: 'pro',
        name: 'Plano Pro',
        price: 79.90,
        features: [
            'Plano de treino personalizado',
            'Dieta customizada',
            'Análise de IMC e recomendações',
            'Registro alimentar completo',
            'Suporte por chat',
            'Relatórios semanais'
        ]
    },
    {
        id: 'premium',
        name: 'Plano Premium',
        price: 149.90,
        features: [
            'Tudo do Plano Pro',
            'Coach de treino dedicado',
            'Consultoria nutricional',
            'Ajustes semanais de treino',
            'Suporte 24/7',
            'Acesso exclusivo a novos programas',
            'Video-aulas com especialistas'
        ]
    }
];

// Verificar autenticação ao carregar
window.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    loadUserData();
    renderPlans();
});

function loadUserData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = allUsers.find(u => u.id == currentUser.id);

    if (user) {
        document.getElementById('userName').textContent = user.name;
        if (user.plan) {
            const planName = PLANS.find(p => p.id === user.plan)?.name || 'Desconhecido';
            document.getElementById('userPlan').textContent = planName;
        }
    }
}

function renderPlans() {
    const container = document.getElementById('plansContainer');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = allUsers.find(u => u.id == currentUser.id);
    const userPlan = user?.plan;
    const hasConfig = user?.config;

    container.innerHTML = PLANS.map(plan => `
        <div class="plan-card ${plan.id} ${userPlan === plan.id ? 'current-plan' : ''}" onclick="viewPlanDetails('${plan.id}')">
            <h3>${plan.name}</h3>
            <div class="plan-price">
                R$ ${plan.price.toFixed(2)}
                <span>/mês</span>
            </div>
            <ul class="plan-features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="btn-subscribe ${userPlan === plan.id ? 'active' : ''}" 
                    onclick="subscribePlan('${plan.id}'); event.stopPropagation();"
                    ${userPlan === plan.id ? 'disabled' : ''}>
                ${userPlan === plan.id ? '✓ Seu Plano Atual' : 'Assinar Agora'}
            </button>
        </div>
    `).join('');
}

function viewPlanDetails(planId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = allUsers.find(u => u.id == currentUser.id);

    if (user && user.config) {
        // Se já tem config salvo, vai direto para ver o plano completo
        window.location.href = 'config.html';
    } else {
        // Se não tem config, vai para configuração para criar o plano
        showMessage('Configure seu perfil primeiro para ver os detalhes do plano!', 'info');
        setTimeout(() => {
            window.location.href = 'config.html';
        }, 2000);
    }
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('dashboardMessage');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    
    setTimeout(() => {
        messageDiv.className = 'message';
    }, 5000);
}

function goToConfig() {
    window.location.href = 'config.html';
}

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}
