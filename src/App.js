import GalleryCard from "./component/Gallery-view";
import Actor from "./data-models/Actor";

function App() {
  const actor1= new Actor ('lital','hen','1989-02-27','https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg','https://www.imdb.com/name/nm0425005/');
  const actor2= new Actor ('viki','sau','1989-05-27');
  const actorArr=[actor1, actor2]
  return (
    <div>
   <GalleryCard actorData={actorArr}/>
    </div>
  );
}

export default App;
