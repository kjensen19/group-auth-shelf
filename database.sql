
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);

INSERT into "item"("description", "image_url", "user_id")
    VALUES('duck', 'https://amsterdamduckstore.com/wp-content/uploads/2019/09/Whooping-rubber-duck-front-Amsterdam-Duck-Store.jpg', '1'),
        ('loab', 'https://th-thumbnailer.cdn-si-edu.com/Jvween4IqwhnqjLh_3qyW7p7NmY=/1000x750/filters:no_upscale():focal(512x405:513x406)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ff/45/ff458986-1c34-4074-8861-6773a005247b/loab.jpg', '2'),
        ('jackfruit', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.melissas.com%2Fproducts%2Fjackfruit-fresh&psig=AOvVaw2CI_JFKrbVZD1KJkBNPawu&ust=1665091103294000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCfzYaCyvoCFQAAAAAdAAAAABAD', '1');