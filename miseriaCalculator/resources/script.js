/*
    @author tramasoli
*/

function calculaMiseria(form, resultContainer) {
    var nome = form.querySelector('#nome').value;
    var salario = form.querySelector('#salario').value;
    if (!isNaN(salario)) {
        var salarioAnual = salario * 12;
        var descontoINSS = salario * 12 * 0.1;
        var liquidoAnual = salarioAnual - descontoINSS;
        var containerNome = document.createElement('div');
        containerNome.className = 'salarioAnual';
        containerNome.appendChild( document.createTextNode(nome) );
        var containerSalarioAnual = document.createElement('div');
        containerSalarioAnual.className = 'salarioAnual';
        containerSalarioAnual.appendChild( document.createTextNode('Salário anual: R$ '+salarioAnual.toFixed(2)) );
        var containerDescontoINSS = document.createElement('div');
        containerDescontoINSS.className = 'descontoINSS';
        containerDescontoINSS.appendChild( document.createTextNode('Desconto INSS: R$ '+descontoINSS.toFixed(2)) );
        var containerLiquidoAnual = document.createElement('div');
        containerLiquidoAnual.className = 'liquidoAnual';
        containerLiquidoAnual.appendChild( document.createTextNode('Líquido anual: R$ '+liquidoAnual.toFixed(2)) );
        while (resultContainer.firstChild) {
            resultContainer.removeChild(resultContainer.firstChild);
        }
        resultContainer.appendChild(containerSalarioAnual);
        resultContainer.appendChild(containerDescontoINSS);
        resultContainer.appendChild(containerLiquidoAnual);
    }
    else {
        alert("Informe um número para 'salário'...");
    }
}