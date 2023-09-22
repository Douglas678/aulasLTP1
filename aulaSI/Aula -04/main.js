let cor = prompt('Digite uma cor:');
cor = cor.toUpperCase();

// O toUpperCase transforma a string para maiusculo
// O toLoweCase tranforma a string para maiuscula

if(cor == 'VERMELHO'){
    alert('Pare!');
}else if(cor == 'VERDE'){
    alert('prossiga');
}else if (cor == 'AMARELO'){
    alert('Atenção! Se continuar vai dá ruim');
}else {
    alert('cor invalida');
}