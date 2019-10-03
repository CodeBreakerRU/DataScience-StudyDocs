db.DBBooks.find({year:2005})
db.DBBooks.find()
db.DBBooks.count()

db.DBBooks.count({year:2005})

db.DBBooks.find({year:2005, price:{$gt:250}})
u
db.DBBooks.find({year:2005, price:{$lt:250}})

db.DBBooks.find({price:{$gt:150}})

db.DBBooks.find({year:{$exists:false}})