select "countries"."name" as "Country",
  count("cityId") as "Cities"
  from "countries"
    join "cities" using ("countryId")
  group by "countries"."countryId";
