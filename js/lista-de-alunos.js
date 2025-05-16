// Inicializar DataTable safadinho
$(document).ready(function() {
    $('#studentsTable').DataTable({
        responsive: true,
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json'
        },
        dom: '<"top"lf>rt<"bottom"ip>',
        initComplete: function() {
            


            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-mdb-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new mdb.Tooltip(tooltipTriggerEl);
            });
        }
    });
    
    // Manipuladores de filtrs
    $('#statusFilter, #cursoFilter, #turmaFilter, #periodoFilter').change(function() {
        console.log('Filter changed:', $(this).attr('id'), $(this).val());
    });
    
    $('#resetFilters').click(function() {
        $('#statusFilter, #cursoFilter, #turmaFilter, #periodoFilter').val('');
    });
    
    // Botão de exportar
    $('#exportExcel').click(function() {
        alert('Exportar para Excel');
    });
    
    // Botão de exportar pdf
    $('#exportPDF').click(function() {
        alert('Exportar para PDF');
    });
    
    $('#printList').click(function() {
        window.print();
    });
    
    // Checkbox de mostrar inativos
    $('#showInactive').change(function() {
        console.log('Show inactive:', $(this).is(':checked'));
    });
});

// Adiciona um event listener para o formulário de busca
document.getElementById('form-busca').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão de submit
    
    // Obtém o valor digitado no input de busca
    const termoBusca = document.getElementById('input-busca').value.trim().toLowerCase();
    
    // Obtém todas as linhas da tabela de alunos
    const linhas = document.querySelectorAll('#studentsTable tbody tr');
    
    // Variável para controlar se encontrou algum resultado
    let encontrouResultado = false;
    
    // Percorre todas as linhas da tabela
    linhas.forEach(linha => {
        // Obtém o nome e email do aluno na linha atual
        const nome = linha.querySelector('td:nth-child(2) strong').textContent.toLowerCase();
        const email = linha.querySelector('td:nth-child(2) .text-muted').textContent.toLowerCase();
        const matricula = linha.querySelector('td:nth-child(3)').textContent.toLowerCase();
        
        // Verifica se o termo de busca está contido no nome, email ou matrícula
        if (nome.includes(termoBusca) || email.includes(termoBusca) || matricula.includes(termoBusca)) {
            linha.style.display = ''; // Mostra a linha
            encontrouResultado = true;
        } else {
            linha.style.display = 'none'; // Esconde a linha
        }
    });
    
    // Mostra mensagem se nenhum resultado for encontrado
    if (!encontrouResultado && termoBusca !== '') {
        alert('Nenhum aluno encontrado com o termo: ' + termoBusca);
    }
});

// Adiciona funcionalidade para limpar a busca quando o input estiver vazio
document.getElementById('input-busca').addEventListener('input', function(e) {
    if (this.value.trim() === '') {
        const linhas = document.querySelectorAll('#studentsTable tbody tr');
        linhas.forEach(linha => {
            linha.style.display = ''; // Mostra todas as linhas
        });
    }
});

// Inicializa a tabela com DataTables (se necessário)
$(document).ready(function() {
    // Inicializa a tabela com DataTables (opcional)
    const table = $('#studentsTable').DataTable({
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
        },
        "responsive": true
    });

    // Função para aplicar todos os filtros
    function aplicarFiltros() {
        const termoBusca = $('#input-busca').val().trim().toLowerCase();
        const status = $('#statusFilter').val();
        const curso = $('#cursoFilter').val();
        const turma = $('#turmaFilter').val();
        const periodo = $('#periodoFilter').val();
        const mostrarInativos = $('#showInactive').is(':checked');

        $('#studentsTable tbody tr').each(function() {
            const linha = $(this);
            const nome = linha.find('td:nth-child(2) strong').text().toLowerCase();
            const email = linha.find('td:nth-child(2) .text-muted').text().toLowerCase();
            const matricula = linha.find('td:nth-child(3)').text().toLowerCase();
            const statusAluno = linha.find('td:nth-child(6) .badge').text();
            const cursoAluno = linha.find('td:nth-child(4) .badge').text();
            const turmaAluno = linha.find('td:nth-child(5)').text();
            
            // Verifica se a linha deve ser exibida com base nos filtros
            const correspondeBusca = termoBusca === '' || 
                                  nome.includes(termoBusca) || 
                                  email.includes(termoBusca) || 
                                  matricula.includes(termoBusca);
            
            const correspondeStatus = status === '' || statusAluno === status;
            const correspondeCurso = curso === '' || cursoAluno === curso;
            const correspondeTurma = turma === '' || turmaAluno.includes(turma);
            const correspondePeriodo = periodo === '' || true; // Adicione lógica para período se necessário
            
            // Verifica se deve mostrar inativos
            const mostraLinha = (mostrarInativos || statusAluno !== 'Inativo') && 
                              correspondeBusca && 
                              correspondeStatus && 
                              correspondeCurso && 
                              correspondeTurma && 
                              correspondePeriodo;

            linha.toggle(mostraLinha);
        });
    }

    // Evento de busca
    $('#form-busca').on('submit', function(e) {
        e.preventDefault();
        aplicarFiltros();
    });

    $('#input-busca').on('input', function() {
        aplicarFiltros();
    });

    // Eventos para os filtros
    $('#statusFilter, #cursoFilter, #turmaFilter, #periodoFilter, #showInactive').on('change', function() {
        aplicarFiltros();
    });

    // Botão para limpar todos os filtros
    $('#resetFilters').on('click', function() {
        $('#input-busca').val('');
        $('#statusFilter').val('');
        $('#cursoFilter').val('');
        $('#turmaFilter').val('');
        $('#periodoFilter').val('');
        $('#showInactive').prop('checked', false);
        
        aplicarFiltros();
    });

    // Botões de exportação (exemplo básico)
    $('#exportExcel').on('click', function() {
        // Lógica para exportar para Excel
        alert('Exportando para Excel...');
        // Implementação real pode usar bibliotecas como SheetJS
    });

    $('#exportPDF').on('click', function() {
        // Lógica para exportar para PDF
        alert('Exportando para PDF...');
        // Implementação real pode usar bibliotecas como jsPDF
    });

    $('#printList').on('click', function() {
        window.print();
    });

    // Inicializa tooltips
    $('[data-mdb-toggle="tooltip"]').each(function() {
        new mdb.Tooltip(this);
    });
});