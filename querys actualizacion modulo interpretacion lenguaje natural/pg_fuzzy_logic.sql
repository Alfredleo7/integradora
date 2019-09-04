CREATE TABLE public.regla (
id serial PRIMARY KEY,
    valoracion integer NOT NULL,
    conclusion text,
    codigo text NOT NULL,
    id_caracteristica text NOT NULL
);

insert into caracteristica (nombre, descripcion) values ('Jugabilidad', '')