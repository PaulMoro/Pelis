import React, { useEffect, useState } from "react";
import { getMovie } from "../lib/imbdRequest";
import {Card, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

function CardMovie() {

  const [dataMovie, setData] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);

  /* call API */
  const obtenerDatos = async () => {
    const movie = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=29ab3bfd741326feef018c4535a4a0cf&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1");

    const dataMovie = await movie.json();
    setData(dataMovie);
    console.log(dataMovie)
  };

  return (
    <>
      {dataMovie.results.map((item) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.results.poster_path} />
          <Card.Body>
            <Card.Title>{item.results.original_title}</Card.Title>
            <Card.Text>
              {item.results.verview}
            </Card.Text>
            <Button variant="primary">Ver Más</Button>
            <Button variant="primary">Me Encanta</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
export default CardMovie;
