CREATE TABLE public.animals (
	id serial4 NOT NULL,
	name varchar(32) NOT NULL,
    image_url varchar(2048) NULL,
	birthday timestamp NULL,
    gender varchar(16) NULL,
    isneutered bool NOT NULL DEFAULT false,
    note text NULL,
    status varchar(16) NOT NULL DEFAULT 'active',
    breed_id serial4,
    FOREIGN KEY (breed_id) REFERENCES breeds(id),
    centre_id serial4,
    FOREIGN KEY (centre_id) REFERENCES centres(id),
    CONSTRAINT animals_pkey PRIMARY KEY (id)
);


INSERT INTO animals (name, birthday, image_url, gender, isneutered, note, status, breed_id, centre_id) VALUES
	('Butter', TO_TIMESTAMP('2014-07-02 06:14:00.742000000', 'YYYY-MM-DD HH24:MI:SS'), 'https://images.dog.ceo/breeds/pomeranian/n02112018_3737.jpg', 'Male', false, 'I am a good dog.', 'active', 1, 1);
