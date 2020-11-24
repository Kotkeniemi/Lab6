import express from 'express';
import { v4 as IDChecker} from 'uuid';
IDChecker(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const router = express.Router();

let books = []

router.get('/', (req,res)=>{
    res.send(books);
});

/*const createBook = (req,res)=> {
    const book = req.body;
    const Identifier = IDChecker();
    const bookIdentifer = {...book, id: Identifier};
    books.push(bookIdentifer);
    res.send( `User with the username ${book.Title} added to db `);
} */
router.post('/', (req,res)=> {

    const book = req.body;
    const Identifier = IDChecker();
    const bookIdentifer = {...book, id: Identifier};
    books.push(bookIdentifer);
    res.send( `User with the username ${book.Title} added to db `);
});

router.get('/:id', (req,res)=> {
    const { id } = req.params;
    const findBook = books.find((book)=> book.id ===id);
    res.send(findBook);
});

router.delete('/:id', (req,res)=> {
    const { id } = req.params;
    books = books.filter((book) => book.id != id); // since return false, it will delete book from array
    res.send(`Book with id ${id} delete from database`);
});

router.patch('/:id', (req,res)  => {
    const { id } = req.params;
    const {Title, Author, Publisher, Date, URL} = req.body;
    const update = books.find((book)=> book.id === id);
    if(Title){
        update.Title = Title;
    }
    if(Author){
        update.Author = Author;
    }
    if(Publisher){
        update.Publisher = Publisher;
    }
    if(Date){
        update.Date = Date;
    }
    if(URL){
        update.URL = URL;
    }
    res.send(`Book with id ${id} has been edited`);

});
export default router;
