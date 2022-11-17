# NgRodoviaria

Projeto Desenvolvido em [Angular CLI](https://github.com/angular/angular-cli) versão 14.2.8.
Projeto Consume os dados da [Api](https://github.com/Romenildo/Projeto-Minsait)

# MOSTRANDO A APLICAÇÃO
A aplicação consiste em um sistema de rodoviária para o controle dos funcionacios e vendas de passagens.

## Página Inicial
Página Inicial para uma home da aplicação com algumas informações da aplicação.
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/paginaInicial.png)

## Pagina Motoristas / Cobradores
Tela de Controle de Motoristas e Cobradores, contendo a opção de cadastrar/editar/remover os mesmos.    
Também contém a opção de filtrar a lista por id ou nome.
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/motorista.png)
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/cobrador.png)

## Passagem
Tela de Passagens é possivel cadastrar novas passagens definindo o destino, horario e preço da passagem.   
Contém a lista de todas as passagens cadastradas, além de editar, excluir e listar os passageiros que compraram a passagem.   
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/passagem.png)
Após cadastrar uma passagem ao selecionar a seta (>) para prosseguir para cadastrar um passsageiro, e escolher as opções   
de seguro e se é estudante:   
```
  Caso ativou seguro: preco da passagem +4.50
  Caso seja estudante: preco fica pela metade
```   
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/passageiroPreenchido.png)
Em Seguida é gerado um qrCode com as informações da passagem e passageiro além do valor calculado da passagem    
que o passageiro deve pagar:
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/qrccode.png)
Então a opção de de listar os Passageiros da passagem vai aparecer os novos passageiros que compraram a passagem
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/listaPassageiros.png)

## Tela Onibus
E Finalmente a ultima tela é o controle dos onibus que liga com as demais, nela é possivel cadastrar um novo onibus e viação.   
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/onibus.png)
Após criar é possivel associar os Motoristas/Cobradores e passagem do onibus. Ele irá mostrar uma lista ao clicar em cada botão de cadastro
com as pessoas disponiveis que não estão associados a outros onibus para poder ser selecionado:
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/onibusListaCadastro.png)
E finalmente associando cada entidade a um Onibus e alterando as demais:
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/onibusFinal.png)
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/cobradorAssociado.png)
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/motoristaAssociado.png)
![](https://github.com/Romenildo/Treinamento-GIT/blob/master/imgs/mindsait/passagemAssociado.png)

# Fim

