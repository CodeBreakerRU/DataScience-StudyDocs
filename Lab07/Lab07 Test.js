db.DBBooks.insert({
    isbn: 1111-1111-1,
    title: 'Professional database development',
    author: 'Steve McConnell',
    year: 2005,
    price: 320 
});

db.DBBooks.insert({
    isbn:1111-1111-2,
    title:'Test Book',
    author: 'ML'
   })
   
db.DBBooks.find()
db.DBBooks.find({author:'ML'})

db.DBBooks.insert({
    isbn:111-111-2,
    author:'Database system concepts',
    author:'ralph johnson',
    year:2008,
    price:250
})

db.DBBooks.find({isbn:111-111-3})

db.DBBooks.insert({
    isbn:111-111-3,
    title:'Database Programming',
    author:'Benjamin C.Pierce',
    year:2005,
    price:150
    })
    
db.DBBooks.insert({
    isbn:111-111-4,
    title:'SQL Guide',
    year:2009,
    price:450})

db.DBBooks.insert({
    isbn:111-111-5,
    title:'Oracle Databases',
    author:'Ralph Johnson',
    year:2005,
    price:150})

db.DBBooks.insert({
    isbn:111-111-6,
    title:'My SQL Guide',
    author:'John Stephen',
    year:2007,
    price:250})
    
db.DBBooks.find({isbn:111-111-4})
db.DBBooks.find()

db.DBBooks.find({year:2007})

db.DBBooks.find({year:{$gt:2007}})

db.DBBooks.find({year:2005, price:{$gt:250}})

db.DBBooks.find({price:{$gt:150}})