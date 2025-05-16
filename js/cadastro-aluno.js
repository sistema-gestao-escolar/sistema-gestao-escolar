// Validação do formulário
(function() {
    'use strict';
    
    // Busca todos os formulários apara aplicar estilos de validação
    const forms = document.querySelectorAll('.needs-validation');
    
    // Faça um loopzinho sobre eles e evite a submissão
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        }, false);
    });
    
    // Foto upload preview
    document.getElementById('foto').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.getElementById('photo-preview');
                preview.src = e.target.result;
                preview.style.display = 'block';
                document.querySelector('#photo-upload-area i').style.display = 'none';
                document.querySelector('#photo-upload-area p').textContent = 'Alterar Foto';
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Máscaras para campos
    document.getElementById('telefone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);
        
        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        
        e.target.value = value;
    });
    
    document.getElementById('cpf').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        e.target.value = value;
    });
    
    document.getElementById('cep').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 8) value = value.substring(0, 8);
        value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
        e.target.value = value;
    });
    
    // Gerar matrícula automática
    document.getElementById('dataIngresso').addEventListener('change', function() {
        const date = new Date(this.value);
        const year = date.getFullYear().toString().substr(-2);
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('matricula').value = `${year}${randomNum}`;
    });
})();