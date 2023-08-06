//Exercícios lista Map, Filter e Reduce

//Exercício 1

const arrayOriginal = [10,14,20,9,16,22];
const arrayFiltrado = arrayOriginal.filter(valor => valor > 15);

console.log(`Este é meu array original: ${arrayOriginal} 
e este é meu array Filtrado com os valores maiores que 15: ${arrayFiltrado}`);



//Exercício 2

const v = [1,4,7,1,2,1,4,25,3,7];

const media = v.reduce((soma, valor) => {
  soma += valor;
  return soma;
}, 0) / v.length;

console.log(`A média dos elementos do vetor V: ${v} é igual a: ${media}.`);



//Exercício 3

const A = [3,4,8,9,15];
const cubo = A.map(valor => valor**3);

console.log(`Os valores de A são: ${A}, onde seu cubo é: ${cubo}`);



//Exercício 4, 5, 6, 7

var filmes = [
    {
        "id":1,
        "title":"Die Hard",
        "valor":12.00,
        "rating":5.0
    },
    {
        "id":2,
        "title":"Homem Aranha 1",
        "valor":8.00,
        "rating":4.0
    },
    {
        "id":3,
        "title":"Homem de Ferro",
        "valor":7.00,
        "rating":3.0
    },
    {
        "id":4,
        "title":"Die Hard",
        "valor":13.00,
        "rating":5.0
    }
];

//Exercício 4
//Letra A
console.log(`O valor do ingresso com 10% de desconto é:`);
const desconto = filmes.map(valor => {
    const valorDesconto = valor.valor-(valor.valor*0.1);
    console.log(valorDesconto.toFixed(2));

});

//Letra B
console.log(`Os filmes com ingressos maiores que R$10.00 são:`);
const maior= filmes.filter(filme => filme.valor > 10.00);
    maior.forEach(filme => {
    console.log(filme.id,filme.title);
});


//Exercício 5

const menores= filmes
  .map(filme => filme.valor)
  .filter(valor => valor < 10);

if (menores.length > 0) {
  const soma = menores.reduce((acumulador, valor) => acumulador + valor);
  const media = soma / menores.length;
  console.log(`A média dos valores menores que R$10.00 é: ${media.toFixed(2)}`);
} else {
  console.log("Não há valores menores que R$10.00");
}

//Exercício 6

const nota = filmes
    .filter(filme => filme.rating === 5.0)
    .map(filme => filme.id);

if (nota.length > 0)
{
  console.log(`Esses são os id's dos filmes com nota igual a 5.0: `);
  console.log(nota);
} else {
  console.log("Não há filmes com nota igual a 5.0");
}  

//Exercício 7

console.log(`Os filmes com id sendo um número "par" são:`);
const par= filmes.filter(filme => filme.id%2===0 );
    par.forEach(filme => {
    console.log(filme.id,filme.title);
});

//Exercício 8

const empresas = [
    {
        nome:'Sansung',
        valorDeMercado:50,
        CEO:'Kim Hyun Suk',
        anoDeCriacao:1938
    },
    {
        nome:'Microsoft',
        valorDeMercado:415,
        CEO:'Satya Nadella',
        anoDeCriacao:1975
    },
    {
        nome:'Intel',
        valorDeMercado:117,
        CEO:'Brian Krzanich',
        anoDeCriacao:1968
    },
    {
        nome:'Facebook',
        valorDeMercado:383,
        CEO:'Mark Zuckerberg',
        anoDeCriacao:2004
    },
    {
        nome:'Sportify',
        valorDeMercado:30,
        CEO:'Daniel Ek',
        anoDeCriacao:2006
    },
    {
        nome:'Apple',
        valorDeMercado:845,
        CEO:'Tim Cook',
        anoDeCriacao:1976
    }
];

//Letra A
console.log(`As empresas criadas depois dos anos 2000 são:`);

const criadas= empresas.filter(empresas => empresas.anoDeCriacao>2000 );
    criadas.forEach(empresas => {
    console.log(empresas.nome,empresas.anoDeCriacao);
});

//Letra B
console.log(`O nome da empresa com seu respectivo CEO é:`);

const informacoes = empresas.map(empresa => `${empresa.nome} - ${empresa.CEO}`);
informacoes.forEach(info => console.log(info));

//Letra C
const soma = empresas.reduce((acumulador,valor) => acumulador += valor.valorDeMercado,0);
console.log(`A soma do valor de todas as empresas juntas é: $${soma} dólares.`);

