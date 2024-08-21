totalGeral = 0; // Inicializando a variável que irá reunir o valor dos produtos
limpar(); // Chamando a função limpar para limpar o carrinho

function adicionar() {
    // Capturando os elementos do DOM que possuem ID
    let produtoSelecionado = document.getElementById('produto');
    let quantidadeInput = document.getElementById('quantidade');
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');

    
    let textoProduto = produtoSelecionado.value; // Capturando o nome do produto selecionado
    let quantidade = quantidadeInput.value // Capturando o valor da quantidade selecionada
    
    // Verificar se o produto selecionado é válido
    if(!textoProduto || textoProduto.trim() === ""){
        alert('Seleciona um produto válido.');
        return;
    }


    let [nomeProduto, precoTexto] = textoProduto.split(' - '); 
    /* Cada produto está sendo especificado dessa forma "Fone de ouvido - R$100" com o nome do produto seguido de seu preço. Esta linha de código divide o nome do produto e seu preço e armazena nas variáveis "nomeProduto" e "precoProduto".
    
    Também posso escrever a linha 12 da seguinte forma:
    
    let nomeProduto = textoProduto.split('-')[0]; -> nomeProduto na posição 0 do array
    let precoTexto = textoProduto.split('-')[1]; -> precoTexto na posição 1 do array
    */
    
    let precoProduto = parseFloat(precoTexto.replace('R$', '')); // Excluindo o "R$" utilizando o método replace, transformando o preço do produto em um valor de ponto flutuante e atribuindo tudo isso à variável precoProduto
    
    let subtotal = precoProduto * quantidade; // Calculando o subtotal

    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoProduto}</span>
        </section>`;
    /* Para jogar os produtos para dentro do carrinho é necessário modificar o documento HTML com a propriedade "innerHTML". Por isso criei uma variável que armazena a section do carrinho que irá sofrer a mudança com uma Template String para adicionar as variáveis "quantidade" "nomeProduto" e "precoProduto". Além disso, fiz uma concatenação para não excluir os elementos adicionados anteriormente do carrinho.
    */

    totalGeral += subtotal; // Variável para reunir os valores de todos os produtos adicionados no carrinho

    valorTotal.textContent = `R$ ${totalGeral}`; // Adicionando o valor total na section do carrinho
    document.getElementById('quantidade').value = 0; // Logo após adicionar os produtos no carrinho o campo da quantidade deve zerar

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}