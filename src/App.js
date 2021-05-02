import GalleryView from "./component/Gallery-view";
import Actor from "./data-models/Actor";

function App() {

  const actorData=[{
    "fname":"Dwayne",
    "lname":"Johnson",
    "birthday":'1972-05-02',
    "image":'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg',
    "imdbLink":'https://www.imdb.com/name/nm0425005/'
  },
  {
    "fname":"Jennifer ",
    "lname":"Aniston",
    "birthday":'1969-02-11',
    "image":'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg',
    "imdbLink":'https://www.imdb.com/name/nm0000098/'
  },
  {
    "fname":"Kevin",
    "lname":"Costner",
    "birthday":'1955-01-18',
    "image":'https://m.media-amazon.com/images/M/MV5BMTY1ODkwMTQxOF5BMl5BanBnXkFtZTcwNzkwNDcyMw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
    "imdbLink":'https://www.imdb.com/name/nm0000126/'
  },
]

const actorsArr=actorData.map((actor) => {
  return new Actor(actor.fname,actor.lname,actor.birthday,actor.image,actor.imdbLink)
}) 
  
  return (
    <div>
   <GalleryView actorsData={actorsArr}/>
    </div>
  );
}

export default App;
//test
