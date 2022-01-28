select "firstName",
       "lastName"
  from "customers"
    join "rentals"
      on "customers"."customerId" = "rentals"."customerId"
    join "inventory"
      on "inventory"."inventoryId" = "rentals"."inventoryId"
    join "films"
      on "films"."filmId" = "inventory". "filmId"
  where "films"."title" = 'Magic Mallrats';
