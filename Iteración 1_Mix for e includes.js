const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let categoriasFiltradas = [];

for (let movie of movies) {         //Con este bucle, vamos a sacar cada película dentro de movies y sus propiedades

    movie.categories.forEach(element => {       //Para acceder a los elementos individuales de cada pelicula, hay que hacer otro bucle dentro de nuestro bucle
        
        if (!categoriasFiltradas.includes(element)) {
            categoriasFiltradas.push(element);           
        }    
    });     
}
console.log(categoriasFiltradas);