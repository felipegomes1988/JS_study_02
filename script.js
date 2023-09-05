/* 
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/



let students=[
  {
    name: "Felipe",
    gradeOne: 9,
    gradeTwo: 9.5,
  },
  {
    name: "Andressa",
    gradeOne: 10,
    gradeTwo: 10,
  },
  {
    name: "Pedro",
    gradeOne: 2.5,
    gradeTwo: 7,
  },
  {
    name: "Ricardo",
    gradeOne: 6,
    gradeTwo: 7.5,
  },

];



function avarageCalc(student, gradeOne, gradeTwo){

  let avarage = (gradeOne+gradeTwo)/2;
  let aproved = (gradeOne+gradeTwo)/2>=7;

  if(aproved){
    return alert(`A média do(a) aluno(a) ${student} foi: ${avarage} \n Parabéns, ${student}! Você passou no concurso!`)
  }

  else{
    return alert(`A média do(a) aluno(a) ${student} foi: ${avarage} \n Não foi dessa vez, ${student}! Tente novamente!`)

  }
}

for(let student of students){
  avarageCalc(student.name, student.gradeOne, student.gradeTwo)
}


  

