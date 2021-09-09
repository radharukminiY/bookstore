export default class BookstoreService{
  books = [
    {
      id: 1,
      title: 'Production‑Ready Microservices',
      author: 'Susan J. Fowler',
      price: 155,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71kPW3SLQSL.jpg',
    },
    {
      id: 2,
      title: 'Release It! Design and Deploy Production‑Ready',
      author: 'Michael T. Nyggard',
      price: 98,
      imgUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6805/9781680502398.jpg',
    },
  ];

  getBooks = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.books);
      }, 1000);
    });
  }
}
