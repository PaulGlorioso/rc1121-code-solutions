select "genres"."name" as "Genre",
  count("films".*) as "Films"
  from "genres"
    join "filmGenre" using ("genreId")
    join "films" using ("filmId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
  group by "genres"."name";
