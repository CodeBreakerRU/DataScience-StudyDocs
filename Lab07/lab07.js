db.DBBooks.find({year : 2005})

db.DBBooks.count()

db.DBBooks.find({year :2005, price :{$gt :250}})

db.DBBooks.find({price :{$gt:150}})

db.DBBooks.find({author : {$exists:false}})

db.DBBooks.find({author : null})

db.DBBooks.find({year : {$gt :2005}})

db.DBBooks.find({author : 'Ralph Johnson' , price : {$gt :150}})

db.DBBooks.update({title:'Oracle Databases'}, {$set: {price:400}})

db.DBBooks.find({title:'Oracle Databases'})

db.DBBooks.find({isbn :111-111-1})
db.DBBooks.update({isbn :111-111-1}, {$inc:{price:100}} )

#db.DBBooks.find({isbn :111-111-4}, {$push:{author:'Robet Rounder'}})

db.DBBooks.update({title:'ABC'},{$set:{price:400}},{upsert:true})

db.DBBooks.update({},{$set:{isbn:111-111-10}},{multi:true});

#sort by dsc order -1
db.DBBooks.find().sort({price:-1})  
#sort by asc order 1
db.DBBooks.find().sort({price:1}) 

# Count the number of books published in year 2005.
db.DBBooks.count({year:2005})

#Update the publication year of all books to 2010
db.DBBooks.update({},{$set: {year:2010}}, {multi:true})

#Count the number of books who have authored by 'Ralph Johnson'
db.DBBooks.count({author:'Ralph Johnson'})

# Deleting Documents
db.DBBooks.remove({})