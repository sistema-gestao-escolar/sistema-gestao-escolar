$(document).ready(function() {
    const table = $('#turmasTable').DataTable({
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

    // Filtros (Curso, Período, Turno, Status)
    $('#cursoFilter, #periodoFilter, #turnoFilter, #statusFilter').change(function() {
        let curso = $('#cursoFilter').val();
        let periodo = $('#periodoFilter').val();
        let turno = $('#turnoFilter').val();
        let status = $('#statusFilter').val();

        // Limpa filtros
        table.columns().search('');

        // Aplica filtros
        if (curso) table.column(1).search(curso);     // Exemplo: coluna 1 = Curso
        if (periodo) table.column(2).search(periodo); // Exemplo: coluna 2 = Período
        if (turno) table.column(3).search(turno);     // Exemplo: coluna 3 = Turno
        if (status) table.column(4).search(status);   // Exemplo: coluna 4 = Status

        table.draw();
    });

    // Resetar Filtros
    $('#resetFilters').click(function() {
        $('#cursoFilter, #periodoFilter, #turnoFilter, #statusFilter').val('');
        table.columns().search('').draw();
    });

    // Mostrar Inativos (checkbox)
    $('#showInactive').change(function() {
        let showInactive = $(this).is(':checked');
        if (showInactive) {
            table.column(5).search('Inativo').draw(); // Exemplo: coluna 5 = Status Inativo
        } else {
            table.column(5).search('').draw();
        }
    });

    // Exportar Turmas (CSV)
    $('#exportTurmas').click(function() {
        let csv = [];
        let rows = table.rows({ search: 'applied' }).data().toArray();

        if (rows.length === 0) {
            alert('Nenhuma turma encontrada para exportar.');
            return;
        }

        // Cabeçalho
        csv.push(['Nome', 'Curso', 'Período', 'Turno', 'Status']); // Ajuste conforme seu cabeçalho real

        // Dados
        rows.forEach(function(row) {
            csv.push([row[0], row[1], row[2], row[3], row[4]]);
        });

        // Gera CSV
        let csvContent = "data:text/csv;charset=utf-8," + csv.map(e => e.join(",")).join("\n");
        let encodedUri = encodeURI(csvContent);
        let link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "turmas.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Imprimir
    $('#printTurmas').click(function() {
        window.print();
    });

    // Salvar Nova Turma
    $('#salvarTurma').click(function() {
        // Aqui você pode adicionar a lógica de salvar no banco via AJAX
        alert('Turma salva com sucesso!');
        $('#novaTurmaModal').modal('hide');
        // Recarregar tabela ou adicionar nova linha dinamicamente, se necessário
    });

    // Visualizar Detalhes da Turma
    $(document).on('click', '.btn-outline-primary[title="Visualizar"]', function() {
        let rowData = table.row($(this).closest('tr')).data();
        // Preencher modal com os detalhes (ajuste os IDs)
        $('#detalhesTurmaModal .modal-body').html(`
            <p><strong>Nome:</strong> ${rowData[0]}</p>
            <p><strong>Curso:</strong> ${rowData[1]}</p>
            <p><strong>Período:</strong> ${rowData[2]}</p>
            <p><strong>Turno:</strong> ${rowData[3]}</p>
            <p><strong>Status:</strong> ${rowData[4]}</p>
        `);
        $('#detalhesTurmaModal').modal('show');
    });
});
