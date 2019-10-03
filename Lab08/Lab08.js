LOAD CSV FROM "file:///products.csv" AS line
RETURN line

LOAD CSV WITH HEADERS FROM "file:///orders.csv" AS line
RETURN line

LOAD CSV WITH HEADERS FROM â€œfile:///order-details.csvâ€ AS row
RETURN row
LIMIT 8


LOAD CSV FROM â€œfile:/// products.csvâ€ AS row
RETURN count(row)

LOAD CSV FROM â€œfile:///products.csvâ€ AS row
WITH toInteger(row[0]) AS productId,
row[1] AS productName,
toFloat(row[2]) AS unitCost
RETURN productId, productName, unitCost
LIMIT 3

CREATE CONSTRAINT ON (p:Product) ASSERT p.id IS UNIQUE;
CREATE CONSTRAINT ON (o:Order) ASSERT o.id IS UNIQUE;

LOAD CSV FROM 'file:///products.csv' AS row
WITH toInteger(row[0]) AS productId, row[1] AS productName, toFloat(row[2])
AS unitCost
MERGE (p:Product {productId: productId})
 SET p.productName = productName, p.unitCost = unitCost
RETURN count(p)

===============================================================

CREATE (Ransika:Student{name: "Vinura Ransika", YOB: 1997, POB: "SL"})
CREATE (iiit:Campus{name: "IIIT"})
CREATE (Ransika)-[r:WENT_TO]->(iiit) RETURN Ransika, iiit


CREATE (Andrew:Student{name:"Andrew", YOB : 1990, POB: "AMERICA"})
CREATE (Anil:Student {name:"Anil", YOB:1983, POB: "India"})
CREATE (Swarn:Student {name:"Swarn", YOB:1991, POB: "Russia"})
CREATE (Tim:Student {name:"Tim", YOB:1992, POB:"China"})

CREATE (sliit:Campus{name:"SLIIT"})
CREATE (iiit:Campus{name:"IIIT"})
CREATE (cambridge:Campus{name:"Cambridge"})

CREATE (Andrew:Student{name:"Andrew", YOB : 1990, POB: "AMERICA"})
CREATE (cambridge:Campus{name:"Cambridge"})
CREATE (Andrew)- [r:GRADUATED_FROM] -> (cambridge) RETURN Andrew, cambridge

CREATE (Anil:Student {name:"Anil", YOB:1983, POB: "India"})
CREATE (iiit:Campus{name: "IIIT"})
CREATE (Anil)- [r:Applied_FOR] -> (iiit) RETURN Anil, iiit

CREATE (Tim:Student {name:"Tim", YOB:1992, POB:"CHINA"})
CREATE (sliit:Campus{name:"SLIIT"})
CREATE (Tim)- [r:Student_OF] - > (sliit) RETURN Tim,sliit

CREATE (Swarn:Student {name:"Swarn", YOB:1991, POB:"RUSSIA"})
CREATE (sliit:Campus {name:"SLIIT"})
CREATE (Swarn)-[r:VISITED_SLIIT] -> (sliit) RETURN Swarn, Sliit

CREATE (Tim:Student {name:"Tim", YOB:1992, POB:"CHINA"})
CREATE (Swarn:Student {name:"Swarn", YOB:1991, POB:"RUSSIA"})
CREATE (Tim)-[r:KNOWS] -> (Swarn) RETURN Tim, Swarn
