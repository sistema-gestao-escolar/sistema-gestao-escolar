document.addEventListener('DOMContentLoaded', function() {
            // Performance Chart (Bar)
            const performanceCtx = document.getElementById('performanceChart').getContext('2d');
            const performanceChart = new Chart(performanceCtx, {
                type: 'bar',
                data: {
                    labels: ['Algoritmos', 'Banco de Dados', 'Programação Web', 'Engenharia de Software', 'Design de Interfaces'],
                    datasets: [{
                        label: 'Média da Turma',
                        data: [7.8, 6.5, 8.2, 7.0, 8.5],
                        backgroundColor: 'rgba(55, 163, 90, 0.7)',
                        borderColor: 'rgba(55, 163, 90, 1)',
                        borderWidth: 1
                    }, {
                        label: 'Média Geral',
                        data: [7.2, 6.8, 7.9, 7.1, 8.1],
                        backgroundColor: 'rgba(52, 152, 219, 0.7)',
                        borderColor: 'rgba(52, 152, 219, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.raw.toFixed(1);
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10,
                            ticks: {
                                callback: function(value) {
                                    return value.toFixed(1);
                                }
                            }
                        }
                    }
                }
            });
            
            // Status Chart (Doughnut)
            const statusCtx = document.getElementById('statusChart').getContext('2d');
            const statusChart = new Chart(statusCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Aprovados', 'Recuperação', 'Reprovados'],
                    datasets: [{
                        data: [65, 20, 15],
                        backgroundColor: [
                            'rgba(55, 163, 90, 0.7)',
                            'rgba(255, 193, 7, 0.7)',
                            'rgba(220, 53, 69, 0.7)'
                        ],
                        borderColor: [
                            'rgba(55, 163, 90, 1)',
                            'rgba(255, 193, 7, 1)',
                            'rgba(220, 53, 69, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'right',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = Math.round((value / total) * 100);
                                    return `${label}: ${value} (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            });
            
            // Alunos Chart (Modal)
            const alunosCtx = document.getElementById('alunosChart').getContext('2d');
            const alunosChart = new Chart(alunosCtx, {
                type: 'bar',
                data: {
                    labels: ['Ciência da Computação', 'Engenharia de Software', 'Análise de Sistemas', 'Design Gráfico'],
                    datasets: [{
                        label: 'Alunos Matriculados',
                        data: [28, 22, 30, 18],
                        backgroundColor: 'rgba(55, 163, 90, 0.7)',
                        borderColor: 'rgba(55, 163, 90, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            // Filter handlers
            document.getElementById('applyFilters').addEventListener('click', function() {
                // Aqui você implementaria a filtragem dos dados
                alert('Filtros aplicados com sucesso! Os gráficos seriam atualizados com os dados filtrados.');
            });
            
            document.getElementById('resetReportFilters').addEventListener('click', function() {
                document.getElementById('reportCurso').value = '';
                document.getElementById('reportTurma').value = '';
                document.getElementById('reportPeriodo').value = '';
                document.getElementById('reportAno').value = '2023';
                document.getElementById('reportDataInicio').value = '';
                document.getElementById('reportDataFim').value = '';
            });
            
            // Generate full report
            document.getElementById('gerarRelatorioCompleto').addEventListener('click', function() {
                alert('Relatório completo gerado e disponível para download!');
            });
        });