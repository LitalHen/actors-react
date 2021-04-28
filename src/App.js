import GalleryCard from "./component/Gallery-view";
import Actor from "./data-models/Actor";

function App() {
  const actor1= new Actor ('lital','hen','1989-02-27');
  const actor2= new Actor ('hen','l','1989-05-27');
  const actorArr=[actor1, actor2]
  return (
    <div>
   <GalleryCard actorData={actorArr}/>
    </div>
  );
}

export default App;
