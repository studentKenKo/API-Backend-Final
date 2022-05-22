CREATE TABLE public.centres (
	id serial4 NOT NULL,
	name varchar(32) NOT NULL,
    image_url varchar(2048) NULL,
    tel varchar(16) NOT NULL,
	address text NOT NULL,
    note text NULL,
    CONSTRAINT centres_pkey PRIMARY KEY (id)
);


INSERT INTO centres (name, image_url, tel, address, note) VALUES
	('Hong Kong Centre - HQ', 'https://www.spca.org.hk/images/clinicpix/Mongkok_2.jpg', '24020501', '5 Wan Shing Street, Wan Chai, Hong Kong', 
    'Opening Hours:
    Monday	-
    Tuesday	09:00 - 18:00
    Wednesday	09:00 - 18:00
    Thursday	09:00 - 18:00
    Friday	09:00 - 18:00
    Saturday	09:00 - 18:00
    Sunday	09:00 - 18:00
    Public Holidays*	09:00 - 18:0'),
    ('Kowloon Centre', 'https://www.spca.org.hk/images/clinicpix/Kowloon_2.jpg', '21139104', '105 Princess Margaret Road, Kowloon (Next to Oi Man Estate Petrol Station)', 
    'Opening Hours:
    Monday	09:00 - 18:00
    Tuesday	09:00 - 18:00
    Wednesday	09:00 - 18:00
    Thursday	-
    Friday	09:00 - 18:00
    Saturday	09:00 - 18:00
    Sunday	09:00 - 18:00
    Public Holidays*	09:00 - 18:0'),
    ('Mong Kok Adopt-a-Pet Centre', 'https://www.spca.org.hk/images/clinicpix/HKcentre_2.jpg', '27141000', 'G/F, 49 Waterloo Road Kowloon', 
    'Opening Hours:
    Monday	09:00 - 18:00
    Tuesday	09:00 - 18:00
    Wednesday	09:00 - 18:00
    Thursday	09:00 - 18:00
    Friday	09:00 - 18:00
    Saturday	-
    Sunday	09:00 - 18:00
    Public Holidays*	09:00 - 18:0');
    
