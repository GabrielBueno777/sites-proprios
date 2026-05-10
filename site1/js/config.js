// Dados de treinos e dietas baseados em perfil
const WORKOUT_PLANS = {
    'perder-peso': {
        tipo: 'Treino para Perda de Peso',
        descricao: 'Foco em cardio e exercícios de alta intensidade para queimar calorias',
        treinos: [
            { dia: 'Segunda', exercicio: 'Corrida', series: '5x5min', intensidade: 'Alta', calorias: 300 },
            { dia: 'Terça', exercicio: 'Musculação (Pernas)', series: '4x12', intensidade: 'Média', calorias: 250 },
            { dia: 'Quarta', exercicio: 'Ciclismo', series: '45min', intensidade: 'Média-Alta', calorias: 350 },
            { dia: 'Quinta', exercicio: 'Musculação (Peito/Costas)', series: '4x10', intensidade: 'Média', calorias: 280 },
            { dia: 'Sexta', exercicio: 'HIIT (Treino Intervalado)', series: '20min', intensidade: 'Muito Alta', calorias: 400 },
            { dia: 'Sábado', exercicio: 'Caminhada Leve', series: '60min', intensidade: 'Baixa', calorias: 200 },
            { dia: 'Domingo', exercicio: 'Descanso', series: '-', intensidade: '-', calorias: 0 }
        ]
    },
    'ganhar-massa': {
        tipo: 'Treino para Ganho de Massa',
        descricao: 'Foco em musculação com exercícios compostos e progressão de peso',
        treinos: [
            { dia: 'Segunda', exercicio: 'Peito e Tríceps', series: '4x6-8', intensidade: 'Alta', calorias: 250 },
            { dia: 'Terça', exercicio: 'Costas e Bíceps', series: '4x6-8', intensidade: 'Alta', calorias: 250 },
            { dia: 'Quarta', exercicio: 'Pernas', series: '4x8-10', intensidade: 'Muito Alta', calorias: 300 },
            { dia: 'Quinta', exercicio: 'Ombros e Posterior', series: '4x8-10', intensidade: 'Alta', calorias: 240 },
            { dia: 'Sexta', exercicio: 'Corpo Inteiro (Força)', series: '3x5', intensidade: 'Muito Alta', calorias: 280 },
            { dia: 'Sábado', exercicio: 'Exercícios Complementares', series: '3x12', intensidade: 'Média', calorias: 150 },
            { dia: 'Domingo', exercicio: 'Descanso Ativo (Alongamento)', series: '20min', intensidade: 'Baixa', calorias: 50 }
        ]
    },
    'saude': {
        tipo: 'Treino para Saúde e Bem-estar',
        descricao: 'Exercícios moderados para melhorar cardio e flexibilidade',
        treinos: [
            { dia: 'Segunda', exercicio: 'Caminhada Rápida', series: '45min', intensidade: 'Média', calorias: 250 },
            { dia: 'Terça', exercicio: 'Musculação Leve (Full Body)', series: '3x10', intensidade: 'Baixa-Média', calorias: 200 },
            { dia: 'Quarta', exercicio: 'Yoga', series: '60min', intensidade: 'Baixa', calorias: 150 },
            { dia: 'Quinta', exercicio: 'Corrida Leve', series: '30min', intensidade: 'Média', calorias: 220 },
            { dia: 'Sexta', exercicio: 'Pilates', series: '45min', intensidade: 'Média', calorias: 180 },
            { dia: 'Sábado', exercicio: 'Atividade ao Ar Livre', series: '60min', intensidade: 'Média', calorias: 250 },
            { dia: 'Domingo', exercicio: 'Descanso', series: '-', intensidade: '-', calorias: 0 }
        ]
    },
    'definicao': {
        tipo: 'Treino para Definição Muscular',
        descricao: 'Combinação de musculação e cardio para ganho de definição',
        treinos: [
            { dia: 'Segunda', exercicio: 'Peito e Tríceps + Cardio', series: '4x8-12 + 20min', intensidade: 'Alta', calorias: 350 },
            { dia: 'Terça', exercicio: 'Costas e Bíceps + Cardio', series: '4x8-12 + 20min', intensidade: 'Alta', calorias: 350 },
            { dia: 'Quarta', exercicio: 'HIIT', series: '25min', intensidade: 'Muito Alta', calorias: 380 },
            { dia: 'Quinta', exercicio: 'Pernas e Posterior + Cardio', series: '4x10-12 + 15min', intensidade: 'Alta', calorias: 380 },
            { dia: 'Sexta', exercicio: 'Ombros e Núcleo', series: '4x10-12', intensidade: 'Média-Alta', calorias: 280 },
            { dia: 'Sábado', exercicio: 'Caminhada Moderada', series: '60min', intensidade: 'Média', calorias: 250 },
            { dia: 'Domingo', exercicio: 'Descanso', series: '-', intensidade: '-', calorias: 0 }
        ]
    }
};

const TRAINING_LOCATION_PLANS = {
    'perder-peso': {
        casa: {
            tipo: 'Treino em Casa para Perda de Peso',
            descricao: 'Sem equipamentos. Foco em cardio e corpo livre para queimar calorias e melhorar o condicionamento.',
            exercicios: [
                { nome: 'Polichinelos', duracao: '4x30 segundos', detalhes: '30s de descanso entre as séries.' },
                { nome: 'Agachamento com Salto', duracao: '4x15', detalhes: 'Use ritmo controlado e mantenha o tronco reto.' },
                { nome: 'Mountain Climbers', duracao: '3x40 segundos', detalhes: 'Aumente o ritmo para aumentar a queima calórica.' },
                { nome: 'Prancha', duracao: '3x40 segundos', detalhes: 'Mantenha o corpo alinhado e abdominal contraído.' },
                { nome: 'Burpees', duracao: '3x12', detalhes: 'Atenção à técnica para evitar lesões.' }
            ]
        },
        academia: {
            tipo: 'Treino na Academia para Perda de Peso',
            descricao: 'Combina máquinas de cardio e exercícios de força para queimar calorias com eficiência.',
            exercicios: [
                { nome: 'Esteira', maquina: 'Esteira', duracao: '20 minutos', detalhes: 'Ritmo constante, inclinação leve.' },
                { nome: 'Bicicleta Ergométrica', maquina: 'Bicicleta Ergométrica', duracao: '15 minutos', detalhes: 'Intervalos de 1 min forte e 1 min leve.' },
                { nome: 'Leg Press', maquina: 'Leg Press', reps: '4x12', detalhes: 'Carga moderada, foco na execução.' },
                { nome: 'Remada Sentada', maquina: 'Máquina de Remada', reps: '4x12', detalhes: 'Costas alinhadas e puxada controlada.' },
                { nome: 'Escada', maquina: 'Step ou Escada', duracao: '10 minutos', detalhes: 'Passo firme e postura ereta.' }
            ]
        }
    },
    'ganhar-massa': {
        casa: {
            tipo: 'Treino em Casa para Ganho de Massa',
            descricao: 'Treino com foco em força e resistência usando o próprio corpo e itens simples.',
            exercicios: [
                { nome: 'Flexões', duracao: '4x10-15', detalhes: 'Mantenha o corpo reto e desça até quase encostar no chão.' },
                { nome: 'Afundo Estático', duracao: '4x12 por perna', detalhes: 'Pode segurar garrafas ou mochilas para aumentar a carga.' },
                { nome: 'Ponte de Glúteo', duracao: '4x15', detalhes: 'Suba com os glúteos e mantenha os pés firmes no chão.' },
                { nome: 'Remada Invertida na Mesa', duracao: '3x10', detalhes: 'Use uma mesa resistente para puxar o corpo para cima.' },
                { nome: 'Agachamento com Peso', duracao: '4x12', detalhes: 'Segure um objeto pesado para adicionar resistência.' }
            ]
        },
        academia: {
            tipo: 'Treino na Academia para Ganho de Massa',
            descricao: 'Treino com máquinas e pesos para estimular crescimento muscular com cargas progressivas.',
            exercicios: [
                { nome: 'Supino Reto', maquina: 'Máquina de Supino ou Barra', reps: '4x8-10', detalhes: 'Carga pesada e movimento controlado.' },
                { nome: 'Puxada na Barra Fixa ou Pulldown', maquina: 'Pulldown', reps: '4x8-10', detalhes: 'Costas contraídas no final do movimento.' },
                { nome: 'Leg Press', maquina: 'Leg Press', reps: '4x10-12', detalhes: 'Empurre com os calcanhares e mantenha os joelhos alinhados.' },
                { nome: 'Elevação Lateral', maquina: 'Halteres', reps: '4x12', detalhes: 'Movimento lento e postura correta.' },
                { nome: 'Rosca Direta', maquina: 'Barra ou Halteres', reps: '4x10', detalhes: 'Controle a descida para maximizar a contração.' }
            ]
        }
    },
    'saude': {
        casa: {
            tipo: 'Treino em Casa para Saúde',
            descricao: 'Exercícios leves e contínuos para melhorar condicionamento, flexibilidade e bem-estar geral.',
            exercicios: [
                { nome: 'Caminhada no Lugar', duracao: '10 minutos', detalhes: 'Passo leve, movendo os braços.' },
                { nome: 'Agachamento Livre', duracao: '3x12', detalhes: 'Sem peso, subindo até os joelhos quase em 90°.' },
                { nome: 'Alongamento Dinâmico', duracao: '10 minutos', detalhes: 'Movimentos suaves para ombros, costas e pernas.' },
                { nome: 'Abdominal Bicicleta', duracao: '3x20', detalhes: 'Trabalha o core com intensidade moderada.' },
                { nome: 'Ponte de Glúteo', duracao: '3x15', detalhes: 'Mantém a lombar alinhada e glúteos ativados.' }
            ]
        },
        academia: {
            tipo: 'Treino na Academia para Saúde',
            descricao: 'Treino leve com máquinas e aulas para melhorar resistência e saúde geral.',
            exercicios: [
                { nome: 'Esteira', maquina: 'Esteira', duracao: '20 minutos', detalhes: 'Ritmo confortável, sem forçar demais.' },
                { nome: 'Elíptico', maquina: 'Elíptico', duracao: '15 minutos', detalhes: 'Movimento fluido para proteger as articulações.' },
                { nome: 'Leg Press Leve', maquina: 'Leg Press', reps: '3x12', detalhes: 'Carga leve, foco em movimento suave.' },
                { nome: 'Puxada Alta', maquina: 'Pulldown', reps: '3x12', detalhes: 'Costas relaxadas e postura correta.' },
                { nome: 'Máquina de Abdutor', maquina: 'Máquina de Abdutor', reps: '3x15', detalhes: 'Movimento controlado para trabalhar laterais de pernas.' }
            ]
        }
    },
    'definicao': {
        casa: {
            tipo: 'Treino em Casa para Definição',
            descricao: 'Treino intervalado de alta intensidade para reduzir gordura e definir músculos sem equipamentos.',
            exercicios: [
                { nome: 'Burpees', duracao: '4x12', detalhes: 'Movimento completo para queima intensa.' },
                { nome: 'Agachamento com Salto', duracao: '4x15', detalhes: 'Explosão e controle na subida.' },
                { nome: 'Flexão com Posição de Prancha', duracao: '4x10', detalhes: 'Foco no core e peito.' },
                { nome: 'Alpinista', duracao: '3x45 segundos', detalhes: 'Aumenta o ritmo cardíaco e define o abdômen.' },
                { nome: 'Prancha Lateral', duracao: '3x30 segundos por lado', detalhes: 'Trabalha oblíquos e estabilidade.' }
            ]
        },
        academia: {
            tipo: 'Treino na Academia para Definição',
            descricao: 'Combina cardio com máquinas de resistência para diminuir gordura e definir o corpo.',
            exercicios: [
                { nome: 'HIIT na Esteira', maquina: 'Esteira', duracao: '25 minutos', detalhes: '1 min rápido / 1 min leve.' },
                { nome: 'Crossover', maquina: 'Crossover', reps: '4x12', detalhes: 'Trabalha peitoral com foco em definição.' },
                { nome: 'Puxada na Barra Fixa ou Pulldown', maquina: 'Pulldown', reps: '4x12', detalhes: 'Costas definidas e postura ereta.' },
                { nome: 'Leg Press', maquina: 'Leg Press', reps: '4x12', detalhes: 'Carga média com repetições controladas.' },
                { nome: 'Abdominal na Máquina', maquina: 'Máquina de Abdominal', reps: '3x15', detalhes: 'Trabalha a definição do core.' }
            ]
        }
    }
};

const DIET_PLANS = {
    'perder-peso': {
        tipo: 'Dieta para Perda de Peso',
        descricao: 'Deficitário de 500-700 kcal/dia, proteína alta para preservar massa',
        caloriasDiarias: 1800,
        refeicoes: [
            {
                nome: 'Café da Manhã (07:00)',
                calorias: 350,
                items: [
                    '2 ovos cozidos',
                    '1 xícara de leite desnatado',
                    '1 maçã pequena',
                    'Café com adoçante'
                ]
            },
            {
                nome: 'Lanche da Manhã (10:00)',
                calorias: 150,
                items: [
                    '1 iogurte grego desnatado (150ml)',
                    '1 colher de sopa de granola'
                ]
            },
            {
                nome: 'Almoço (12:30)',
                calorias: 500,
                items: [
                    '150g de frango grelhado',
                    '1 xícara de arroz integral',
                    'Salada (alface, tomate, cenoura)',
                    '1 colher de sopa de azeite'
                ]
            },
            {
                nome: 'Lanche da Tarde (15:30)',
                calorias: 150,
                items: [
                    '1 banana média',
                    '1 colher de sopa de amendoim'
                ]
            },
            {
                nome: 'Jantar (19:00)',
                calorias: 400,
                items: [
                    '150g de peixe (salmão ou tilápia)',
                    '1 xícara de batata-doce cozida',
                    'Brócolis cozido à vontade',
                    '1 colher de chá de azeite'
                ]
            },
            {
                nome: 'Ceia (21:30)',
                calorias: 250,
                items: [
                    '1 xícara de leite desnatado com chocolate em pó light',
                    '2 bolachas integrais'
                ]
            }
        ]
    },
    'ganhar-massa': {
        tipo: 'Dieta para Ganho de Massa',
        descricao: 'Superavitário de 300-500 kcal/dia, proteína muito alta',
        caloriasDiarias: 2800,
        refeicoes: [
            {
                nome: 'Café da Manhã (07:00)',
                calorias: 600,
                items: [
                    '4 ovos (3 claras + 1 inteiro)',
                    '1 tigela de aveia (50g)',
                    '1 banana grande',
                    '1 colher de sopa de mel',
                    'Leite integral 200ml'
                ]
            },
            {
                nome: 'Lanche da Manhã (10:00)',
                calorias: 400,
                items: [
                    '1 pão francês',
                    '2 colheres de sopa de manteiga de amendoim',
                    '1 copo de leite integral'
                ]
            },
            {
                nome: 'Almoço (12:30)',
                calorias: 700,
                items: [
                    '250g de frango cozido ou grelhado',
                    '1.5 xícara de arroz branco',
                    '1 batata-doce grande',
                    'Salada com 1 colher de azeite',
                    '1 fruta (laranja ou maçã)'
                ]
            },
            {
                nome: 'Pré-treino (15:00)',
                calorias: 400,
                items: [
                    'Whey protein (25g)',
                    '2 bananas',
                    '1 colher de sopa de mel',
                    'Água ou leite'
                ]
            },
            {
                nome: 'Pós-treino (17:30)',
                calorias: 350,
                items: [
                    'Whey protein (25g)',
                    '1 xícara de suco de uva',
                    '1 tigela de arroz branco'
                ]
            },
            {
                nome: 'Jantar (20:00)',
                calorias: 550,
                items: [
                    '200g de carne vermelha magra',
                    '1 xícara de batata-doce',
                    'Brócolis ou abóbora',
                    '1 colher de sopa de azeite'
                ]
            },
            {
                nome: 'Ceia (22:00)',
                calorias: 250,
                items: [
                    '1 xícara de leite integral',
                    '1 colher de sopa de mel',
                    '2 bolachas integrais com mel'
                ]
            }
        ]
    },
    'saude': {
        tipo: 'Dieta para Saúde e Equilíbrio',
        descricao: 'Alimentação balanceada e variada para bem-estar geral',
        caloriasDiarias: 2000,
        refeicoes: [
            {
                nome: 'Café da Manhã (07:00)',
                calorias: 350,
                items: [
                    '2 fatias de pão integral',
                    '1 colher de sopa de manteiga de amendoim',
                    '1 maçã média',
                    '1 xícara de leite desnatado'
                ]
            },
            {
                nome: 'Lanche da Manhã (10:00)',
                calorias: 150,
                items: [
                    '1 iogurte natural com mel',
                    '1 punhado de frutas secas'
                ]
            },
            {
                nome: 'Almoço (12:30)',
                calorias: 550,
                items: [
                    '120g de frango ou peixe',
                    '1 xícara de arroz integral',
                    '1 xícara de feijão',
                    'Salada variada com azeite'
                ]
            },
            {
                nome: 'Lanche da Tarde (15:30)',
                calorias: 200,
                items: [
                    '1 smoothie (frutas + leite)',
                    '1 granola caseira'
                ]
            },
            {
                nome: 'Jantar (19:00)',
                calorias: 400,
                items: [
                    '150g de peixe ou ovos',
                    '1 xícara de batata cozida',
                    'Legumes variados cozidos',
                    '1 colher de chá de azeite'
                ]
            },
            {
                nome: 'Ceia (21:30)',
                calorias: 150,
                items: [
                    '1 xícara de leite morno',
                    '3 castanhas ou avelãs'
                ]
            }
        ]
    },
    'definicao': {
        tipo: 'Dieta para Definição Muscular',
        descricao: 'Alto em proteína com carboidratos estratégicos',
        caloriasDiarias: 2200,
        refeicoes: [
            {
                nome: 'Café da Manhã (07:00)',
                calorias: 400,
                items: [
                    '3 ovos cozidos',
                    '1/2 xícara de aveia',
                    '1 banana',
                    'Café sem açúcar'
                ]
            },
            {
                nome: 'Lanche da Manhã (10:00)',
                calorias: 200,
                items: [
                    '1 whey protein shake',
                    '1 maçã',
                    '1 colher de sopa de mel'
                ]
            },
            {
                nome: 'Almoço (12:30)',
                calorias: 550,
                items: [
                    '200g de frango grelhado',
                    '1 xícara de arroz integral',
                    'Brócolis à vontade',
                    '1 colher de azeite'
                ]
            },
            {
                nome: 'Pré-treino (15:30)',
                calorias: 300,
                items: [
                    '2 fatias de pão integral',
                    '1 colher de sopa de mel',
                    'Café ou chá'
                ]
            },
            {
                nome: 'Pós-treino (17:30)',
                calorias: 300,
                items: [
                    'Whey protein (25g)',
                    '1 banana',
                    '100ml de suco natural'
                ]
            },
            {
                nome: 'Jantar (20:00)',
                calorias: 450,
                items: [
                    '180g de peixe ou ovos',
                    '1 batata-doce média',
                    'Salada com azeite',
                    'Chá sem açúcar'
                ]
            }
        ]
    }
};

// Verificar autenticação
window.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    loadSavedConfig();
    setupForm();
});

function setupForm() {
    document.getElementById('configForm').addEventListener('submit', (e) => {
        e.preventDefault();
        saveConfig();
    });
}

function saveConfig() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const idade = parseInt(document.getElementById('idade').value);
    const genero = document.getElementById('genero').value;
    const objetivo = document.querySelector('input[name="objetivo"]:checked').value;

    if (!altura || !peso || !idade || !genero || !objetivo) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }

    const localTreino = document.querySelector('input[name="localTreino"]:checked')?.value;

    if (!localTreino) {
        showMessage('Por favor, escolha onde você vai treinar (casa ou academia).', 'error');
        return;
    }

    const config = {
        altura,
        peso,
        idade,
        genero,
        objetivo,
        localTreino,
        dataCriacao: new Date().toISOString()
    };

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = allUsers.findIndex(u => u.id == currentUser.id);

    if (userIndex !== -1) {
        allUsers[userIndex].config = config;
        localStorage.setItem('users', JSON.stringify(allUsers));

        showMessage('Perfil salvo com sucesso! Gerando seu plano personalizado...', 'success');
        setTimeout(() => {
            generatePlans(objetivo);
        }, 1500);
    }
}

function loadSavedConfig() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = allUsers.find(u => u.id == currentUser.id);

    if (user && user.config) {
        document.getElementById('altura').value = user.config.altura;
        document.getElementById('peso').value = user.config.peso;
        document.getElementById('idade').value = user.config.idade;
        document.getElementById('genero').value = user.config.genero;
        document.querySelector(`input[value="${user.config.objetivo}"]`).checked = true;
        if (user.config.localTreino) {
            document.querySelector(`input[name="localTreino"][value="${user.config.localTreino}"]`).checked = true;
        }
        
        generatePlans(user.config.objetivo, user.config.localTreino);
    }
}

function generatePlans(objetivo) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const user = allUsers.find(u => u.id == currentUser.id);
    const config = user.config;
    const localTreino = config.localTreino || 'casa';

    const imc = calculateIMC(config.peso, config.altura);
    const recomendacao = generateRecommendation(imc, config.genero, objetivo);

    renderRecommendations(recomendacao);
    renderWorkoutPlan(objetivo, localTreino);
    renderDietPlan(objetivo);
    renderFoodLog();
}

function calculateIMC(peso, altura) {
    const alturaMetros = altura / 100;
    return peso / (alturaMetros * alturaMetros);
}

function generateRecommendation(imc, genero, objetivo) {
    let recomendacao = '';
    let tipo = '';

    if (imc < 18.5) {
        tipo = 'Baixo Peso';
        recomendacao = 'Você está abaixo do peso ideal. Recomendamos um plano focado em ganho de massa muscular com uma dieta calórica aumentada e treinos de força.';
    } else if (imc < 25) {
        tipo = 'Peso Normal';
        recomendacao = 'Seu peso está na faixa ideal! Mantenha uma alimentação equilibrada e escolha treinos baseados no seu objetivo pessoal.';
    } else if (imc < 30) {
        tipo = 'Sobrepeso';
        recomendacao = 'Você está com sobrepeso. Recomendamos um plano com foco em perda de peso, combinando cardio e musculação leve.';
    } else {
        tipo = 'Obesidade';
        recomendacao = 'Você está com obesidade. Recomendamos começar com exercícios de baixo impacto, como caminhada e natação, associados a uma dieta deficitária.';
    }

    return {
        imc: imc.toFixed(1),
        tipo,
        recomendacao,
        objetivo
    };
}

function renderRecommendations(recomendacao) {
    const container = document.getElementById('recommendationsContainer');
    container.innerHTML = `
        <div class="recommendations">
            <h2>📊 Análise do Seu Perfil</h2>
            <div class="recommendation-card">
                <h3>Seu IMC: ${recomendacao.imc} - ${recomendacao.tipo}</h3>
                <p>${recomendacao.recomendacao}</p>
            </div>
            <div class="recommendation-card">
                <h3>🎯 Seu Objetivo: ${recomendacao.objetivo.replace('-', ' ').toUpperCase()}</h3>
                <p>Seu plano foi customizado para ajudá-lo a alcançar este objetivo. Mantenha consistência e siga as recomendações de treino e dieta.</p>
            </div>
        </div>
    `;
}

function renderWorkoutPlan(objetivo, localTreino) {
    const plan = WORKOUT_PLANS[objetivo];
    const locationPlan = TRAINING_LOCATION_PLANS[objetivo]?.[localTreino] || TRAINING_LOCATION_PLANS[objetivo].casa;
    const container = document.getElementById('workoutContainer');

    let html = `
        <div class="plan-content">
            <div class="content-section">
                <h2>💪 ${locationPlan.tipo}</h2>
                <p style="margin-bottom: 20px; color: #666;">${locationPlan.descricao}</p>
                <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <strong>Treino em: ${localTreino === 'academia' ? 'Academia' : 'Casa'}</strong>
                </div>
                <h3>Exercícios Recomendados</h3>
    `;

    locationPlan.exercicios.forEach(exercicio => {
        html += `
            <div class="workout-item">
                <h4>${exercicio.nome}</h4>
                ${exercicio.maquina ? `<p><strong>Máquina:</strong> ${exercicio.maquina}</p>` : ''}
                <p><strong>Reps/Duração:</strong> ${exercicio.reps || exercicio.duracao}</p>
                <p>${exercicio.detalhes}</p>
            </div>
        `;
    });

    html += `
                <div style="margin-top: 30px;">
                    <h3>Plano Semanal Sugerido</h3>
                </div>
    `;

    plan.treinos.forEach(treino => {
        html += `
            <div class="workout-item">
                <h4>${treino.dia}</h4>
                <p><strong>Exercício:</strong> ${treino.exercicio}</p>
                <p><strong>Séries/Duração:</strong> ${treino.series}</p>
                <p><strong>Intensidade:</strong> ${treino.intensidade}</p>
                <p><strong>Calorias Queimadas:</strong> ~${treino.calorias} kcal</p>
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

function renderDietPlan(objetivo) {
    const plan = DIET_PLANS[objetivo];
    const container = document.getElementById('dietContainer');

    let html = `
        <div class="plan-content">
            <div class="content-section">
                <h2>🍽️ ${plan.tipo}</h2>
                <p style="margin-bottom: 20px; color: #666;">${plan.descricao}</p>
                <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <strong>Calorias Diárias Recomendadas: ${plan.caloriasDiarias} kcal</strong>
                </div>
    `;

    plan.refeicoes.forEach(refeicao => {
        html += `
            <div class="meal">
                <h4>
                    ${refeicao.nome}
                    <span class="calories">${refeicao.calorias} kcal</span>
                </h4>
                <ul class="meal-items">
                    ${refeicao.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
}

function renderFoodLog() {
    const container = document.getElementById('foodLogContainer');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const logs = JSON.parse(localStorage.getItem(`foodLogs_${currentUser.id}`) || '[]');

    let html = `
        <div class="plan-content">
            <div class="food-log">
                <h2>📋 Seu Registro Alimentar</h2>
                <div style="margin-bottom: 20px;">
                    <input type="text" id="foodInput" placeholder="Ex: Frango com arroz, 450 kcal" style="width: 70%; padding: 10px; border: 2px solid #e0e0e0; border-radius: 5px;">
                    <input type="number" id="caloriesInput" placeholder="Calorias" min="0" style="width: 20%; padding: 10px; margin-left: 10px; border: 2px solid #e0e0e0; border-radius: 5px;">
                    <button onclick="addFoodLog()" style="padding: 10px 20px; background: #FF6B35; color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">Adicionar</button>
                </div>
    `;

    if (logs.length > 0) {
        let totalCalorias = 0;
        logs.forEach((log, index) => {
            totalCalorias += log.calories;
            const date = new Date(log.timestamp).toLocaleDateString('pt-BR');
            const time = new Date(log.timestamp).toLocaleTimeString('pt-BR');
            
            html += `
                <div class="log-entry">
                    <div class="log-entry-info">
                        <h4>${log.food}</h4>
                        <p>${date} às ${time}</p>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span class="log-entry-calories">${log.calories} kcal</span>
                        <button onclick="removeFoodLog(${index})" style="background: #E63946; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer;">✕</button>
                    </div>
                </div>
            `;
        });
        
        const today = new Date().toDateString();
        const todayLogs = logs.filter(log => new Date(log.timestamp).toDateString() === today);
        const todayTotal = todayLogs.reduce((a, b) => a + b.calories, 0);
        
        html += `
            <div style="background: linear-gradient(135deg, #FF6B35 0%, #004E89 100%); color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center;">
                <p><strong>Total Hoje: ${todayTotal} kcal</strong></p>
            </div>
        `;
    } else {
        html += `<div class="no-logs">Nenhum registro alimentar ainda. Comece a registrar suas refeições!</div>`;
    }

    html += `</div></div>`;
    container.innerHTML = html;
}

function addFoodLog() {
    const food = document.getElementById('foodInput').value.trim();
    const calories = parseInt(document.getElementById('caloriesInput').value);

    if (!food || !calories || calories <= 0) {
        alert('Preencha o nome do alimento e as calorias corretamente');
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const logs = JSON.parse(localStorage.getItem(`foodLogs_${currentUser.id}`) || '[]');

    logs.push({
        food: food,
        calories: calories,
        timestamp: new Date().toISOString()
    });

    localStorage.setItem(`foodLogs_${currentUser.id}`, JSON.stringify(logs));
    document.getElementById('foodInput').value = '';
    document.getElementById('caloriesInput').value = '';

    renderFoodLog();
    showMessage('Alimento adicionado ao registro!', 'success');
}

function removeFoodLog(index) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const logs = JSON.parse(localStorage.getItem(`foodLogs_${currentUser.id}`) || '[]');

    logs.splice(index, 1);
    localStorage.setItem(`foodLogs_${currentUser.id}`, JSON.stringify(logs));

    renderFoodLog();
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('configMessage');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    
    setTimeout(() => {
        messageDiv.className = 'message';
    }, 5000);
}

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}
