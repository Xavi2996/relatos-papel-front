const books = [
    { id: 1, title: "El principito", author: "Antoine de Saint-Exupéry", price: '100', novedad: true, recomendado: false, stock: 5, image: "assets/images/books/el-principito.jpg" },
    { id: 2, title: "Cien años de soledad", author: "Gabriel García Márquez", price: '120', novedad: false, recomendado: true, stock: 3, image: "assets/images/books/cien-anos.jpg" },
    { id: 3, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", price: '150', novedad: false, recomendado: true, stock: 7, image: "assets/images/books/don-quijote.jpg" },
    { id: 4, title: "1984", author: "George Orwell", price: '90', novedad: true, recomendado: false, stock: 10, image: "assets/images/books/1984.jpg" },
    { id: 5, title: "Matar a un ruiseñor", author: "Harper Lee", price: '110', novedad: false, recomendado: true, stock: 4, image: "assets/images/books/matar-a-un-ruisenor.jpg" },
    { id: 6, title: "Orgullo y prejuicio", author: "Jane Austen", price: '95', novedad: true, recomendado: false, stock: 6, image: "assets/images/books/orgullo-prejuicio.jpg" },
    { id: 7, title: "Crimen y castigo", author: "Fiódor Dostoyevski", price: '130', novedad: false, recomendado: true, stock: 2, image: "assets/images/books/crimen-castigo.jpg" },
    { id: 8, title: "La Odisea", author: "Homero", price: '140', novedad: true, recomendado: false, stock: 8, image: "assets/images/books/odisea.jpg" },
    { id: 9, title: "El Gran Gatsby", author: "F. Scott Fitzgerald", price: '105', novedad: false, recomendado: true, stock: 5, image: "assets/images/books/gran-gatsby.jpg" },
    { id: 10, title: "En busca del tiempo perdido", author: "Marcel Proust", price: '160', novedad: true, recomendado: false, stock: 3, image: "assets/images/books/busca-del-tiempo-perdido.jpg" },
    { id: 11, title: "Ulises", author: "James Joyce", price: '170', novedad: false, recomendado: true, stock: 1, image: "assets/images/books/ulises.jpg" },
    { id: 12, title: "La Divina Comedia", author: "Dante Alighieri", price: '180', novedad: true, recomendado: false, stock: 9, image: "assets/images/books/divina-comedia.jpg" },
    { id: 13, title: "Hamlet", author: "William Shakespeare", price: '85', novedad: false, recomendado: true, stock: 6, image: "assets/images/books/hamlet.jpg" },
    { id: 14, title: "El retrato de Dorian Gray", author: "Oscar Wilde", price: '115', novedad: true, recomendado: false, stock: 7, image: "assets/images/books/retrato-de-dorian-gray.jpg" },
    { id: 15, title: "La Metamorfosis", author: "Franz Kafka", price: '75', novedad: false, recomendado: true, stock: 10, image: "assets/images/books/metamorfosis.jpg" }
  ];

  const novedades = [
    { id: 1, title: "El principito", author: "Antoine de Saint-Exupéry", price: '100', novedad: true, recomendado: false, stock: 5, image: "assets/images/books/el-principito.jpg" },
    { id: 4, title: "1984", author: "George Orwell", price: '90', novedad: true, recomendado: false, stock: 10, image: "assets/images/books/1984.jpg" },
    { id: 6, title: "Orgullo y prejuicio", author: "Jane Austen", price: '95', novedad: true, recomendado: false, stock: 6, image: "assets/images/books/orgullo-prejuicio.jpg" },
    { id: 8, title: "La Odisea", author: "Homero", price: '140', novedad: true, recomendado: false, stock: 8, image: "assets/images/books/odisea.jpg" },
    { id: 10, title: "En busca del tiempo perdido", author: "Marcel Proust", price: '160', novedad: true, recomendado: false, stock: 3, image: "assets/images/books/busca-del-tiempo-perdido.jpg" },
    { id: 12, title: "La Divina Comedia", author: "Dante Alighieri", price: '180', novedad: true, recomendado: false, stock: 9, image: "assets/images/books/divina-comedia.jpg" },
    { id: 14, title: "El retrato de Dorian Gray", author: "Oscar Wilde", price: '115', novedad: true, recomendado: false, stock: 7, image: "assets/images/books/retrato-de-dorian-gray.jpg" }
];

const recomendados = [
    { id: 2, title: "Cien años de soledad", author: "Gabriel García Márquez", price: '120', novedad: false, recomendado: true, stock: 3, image: "assets/images/books/cien-anos.jpg" },
    { id: 3, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", price: '150', novedad: false, recomendado: true, stock: 7, image: "assets/images/books/don-quijote.jpg" },
    { id: 5, title: "Matar a un ruiseñor", author: "Harper Lee", price: '110', novedad: false, recomendado: true, stock: 4, image: "assets/images/books/matar-a-un-ruisenor.jpg" },
    { id: 7, title: "Crimen y castigo", author: "Fiódor Dostoyevski", price: '130', novedad: false, recomendado: true, stock: 2, image: "assets/images/books/crimen-castigo.jpg" },
    { id: 9, title: "El Gran Gatsby", author: "F. Scott Fitzgerald", price: '105', novedad: false, recomendado: true, stock: 5, image: "assets/images/books/gran-gatsby.jpg" },
    { id: 11, title: "Ulises", author: "James Joyce", price: '170', novedad: false, recomendado: true, stock: 1, image: "assets/images/books/ulises.jpg" },
    { id: 13, title: "Hamlet", author: "William Shakespeare", price: '85', novedad: false, recomendado: true, stock: 6, image: "assets/images/books/hamlet.jpg" },
    { id: 15, title: "La Metamorfosis", author: "Franz Kafka", price: '75', novedad: false, recomendado: true, stock: 10, image: "assets/images/books/metamorfosis.jpg" }
];
  
  export default { books, novedades, recomendados };