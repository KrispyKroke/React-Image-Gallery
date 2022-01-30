CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"title" VARCHAR(50) NOT NULL,
	"path" VARCHAR(500) NOT NULL,
	"description" VARCHAR(250) NOT NULL,
	"likes" INTEGER DEFAULT 0 NOT NULL
);

INSERT INTO gallery ("title", "path", "description")
VALUES ('Small Goat', 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('Great White Shark', 'images/greatWhiteShark.jpg', 'Photo of a Great White Shark drifting through the ocean.'),
('Grand Canyon', 'images/grandCanyon.jpg', 'Photo of the Grand Canyon in all its natural beauty.'),
('Moose', 'images/moose.jpg', 'Photo of an adult male moose in its natural habitat.'),
('Eiffel Tower', 'images/eiffelTower.jpg', 'Photo of the monumental Eiffel Tower in Paris, France.');

DROP TABLE gallery;

