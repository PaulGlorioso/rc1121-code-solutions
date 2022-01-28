select "a"."line1" as "address",
       "district",
       "c"."name" as "City"
from "addresses" as "a"
join "cities" as "c" using ("cityId");
