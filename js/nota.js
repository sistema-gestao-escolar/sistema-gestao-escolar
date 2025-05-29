document.addEventListener('DOMContentLoaded', function() {
            // Simulação de carregamento de turmas/disciplinas
            document.getElementById('turmaSelect').addEventListener('change', function() {
                const turmaId = this.value;
                if (turmaId) {
                    // Habilitar e carregar disciplinas
                    document.getElementById('disciplinaSelect').disabled = false;
                    
                    // Simular disciplinas baseadas na turma selecionada
                    const disciplinaSelect = document.getElementById('disciplinaSelect');
                    disciplinaSelect.innerHTML = '<option value="" selected disabled>Selecione uma disciplina</option>';
                    
                    if (turmaId === '1') {
                        // Turma A - Ciência da Computação
                        const disciplinas = [
                            {id: '1', nome: 'Algoritmos e Estruturas de Dados'},
                            {id: '2', nome: 'Banco de Dados'},
                            {id: '3', nome: 'Programação Web'}
                        ];
                        
                        disciplinas.forEach(disciplina => {
                            const option = document.createElement('option');
                            option.value = disciplina.id;
                            option.textContent = disciplina.nome;
                            disciplinaSelect.appendChild(option);
                        });
                    } else if (turmaId === '2') {
                        // Turma B - Engenharia de Software
                        const disciplinas = [
                            {id: '4', nome: 'Engenharia de Software I'},
                            {id: '5', nome: 'Testes de Software'},
                            {id: '6', nome: 'Arquitetura de Software'}
                        ];
                        
                        disciplinas.forEach(disciplina => {
                            const option = document.createElement('option');
                            option.value = disciplina.id;
                            option.textContent = disciplina.nome;
                            disciplinaSelect.appendChild(option);
                        });
                    }
                    
                    // Resetar avaliação
                    document.getElementById('avaliacaoSelect').disabled = true;
                    document.getElementById('avaliacaoSelect').innerHTML = '<option value="" selected disabled>Selecione uma disciplina</option>';
                    document.getElementById('carregarAlunos').disabled = true;
                }
            });
            
            document.getElementById('disciplinaSelect').addEventListener('change', function() {
                const disciplinaId = this.value;
                if (disciplinaId) {
                    // Habilitar e carregar avaliações
                    document.getElementById('avaliacaoSelect').disabled = false;
                    
                    // Simular avaliações baseadas na disciplina selecionada
                    const avaliacaoSelect = document.getElementById('avaliacaoSelect');
                    avaliacaoSelect.innerHTML = '<option value="" selected disabled>Selecione uma avaliação</option>';
                    
                    const avaliacoes = [
                        {id: '1', nome: 'Prova Bimestral 1'},
                        {id: '2', nome: 'Trabalho Prático'},
                        {id: '3', nome: 'Seminário'}
                    ];
                    
                    avaliacoes.forEach(avaliacao => {
                        const option = document.createElement('option');
                        option.value = avaliacao.id;
                        option.textContent = avaliacao.nome;
                        avaliacaoSelect.appendChild(option);
                    });
                    
                    document.getElementById('carregarAlunos').disabled = false;
                }
            });
            
            // Carregar alunos quando selecionar avaliação
            document.getElementById('carregarAlunos').addEventListener('click', function() {
                const turmaSelect = document.getElementById('turmaSelect');
                const disciplinaSelect = document.getElementById('disciplinaSelect');
                const avaliacaoSelect = document.getElementById('avaliacaoSelect');
                
                if (turmaSelect.value && disciplinaSelect.value && avaliacaoSelect.value) {
                    // Atualizar cabeçalho
                    document.getElementById('disciplinaAtual').textContent = disciplinaSelect.options[disciplinaSelect.selectedIndex].text;
                    document.getElementById('avaliacaoAtual').textContent = avaliacaoSelect.options[avaliacaoSelect.selectedIndex].text;
                    
                    // Aqui você faria uma requisição AJAX para carregar os alunos
                    // Estamos simulando com os dados já existentes na tabela
                    
                    // Mostrar mensagem de sucesso
                    const toast = new mdb.Toast(document.getElementById('liveToast'));
                    toast.show();
                }
            });
            
            // Configurar avaliação
            document.getElementById('salvarAvaliacao').addEventListener('click', function() {
                // Validar e salvar os dados da avaliação
                alert('Avaliação configurada com sucesso!');
                document.getElementById('configAvaliacaoModal').modal('hide');
            });
            
            // Salvar notas individuais
            document.querySelectorAll('.btn-lancar').forEach(btn => {
                btn.addEventListener('click', function() {
                    const row = this.closest('tr');
                    const aluno = row.querySelector('td:nth-child(2)').textContent;
                    const nota = row.querySelector('input[type="number"]').value;
                    
                    // Aqui você faria uma requisição AJAX para salvar a nota
                    alert(`Nota ${nota} salva para o aluno ${aluno}`);
                    
                    // Atualizar status
                    if (nota >= 6) {
                        row.querySelector('.badge-status').className = 'badge bg-success badge-status';
                        row.querySelector('.badge-status').textContent = 'Aprovado';
                    } else if (nota >= 4) {
                        row.querySelector('.badge-status').className = 'badge bg-warning badge-status';
                        row.querySelector('.badge-status').textContent = 'Recuperação';
                    } else {
                        row.querySelector('.badge-status').className = 'badge bg-danger badge-status';
                        row.querySelector('.badge-status').textContent = 'Reprovado';
                    }
                });
            });
        });