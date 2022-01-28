select "firstName",
       "lastName",
       sum("amount") as "Total"
  from "customers"
    join "payments" using ("customerId")
  group by "customerId"
  order by "Total" desc;
