function CalcularMedia(atletas)
{
    atletas.forEach(function(atleta)
    {
        console.log("Atleta: " + atleta.nome);
        console.log("Notas Obtidas: " + atleta.notas);
        
        let media = 0, i = 0;
        atleta.notas.sort((a, b) => a - b);
        
        for(i = 1; i < atleta.notas.length - 1; i++)
        {
            media = media + atleta.notas[i];
        }
        
        media = media / (i - 1);
        
        console.log("Média Válida: " + media);
        console.log(" ");
    });
}


let atletas =
[
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

CalcularMedia(atletas);