import React, { useEffect, useState } from "react";
import Gif from './Gif'
import getGifs from '../../services/getGifs';
import './ListOfGifs.css'

export default function ListOfGifs({ params }) {
  const { keyword } = params;

  const [gifs, updateGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword }).then(res => updateGifs(res));
  }, [])

  return <div className="list-gifs">
    {
      gifs.map(({ id, title, url }) =>
        <Gif
          title={title}
          id={id}
          url={url}
          key={id}
        />
      )
    }
  </div>
}