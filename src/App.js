import Card from "./components/Card";
import data from "./data";


function App() {
  const cards = data.map(card=>{
    return(
          <Card 
            card={card}
          />
    )
  })
  return (
    <div className="w-[650px] bg-white mx-auto">
      <div className=" flex justify-center py-7 bg-[#F55A5A]">
          <h1 className="text-xl flex items-center gap-3 text-white font-medium">
            <span className=""><img src="/images/Fill213.png" alt="" className="w-7"/> </span> my travel journal.
          </h1>
      </div>
      <div className="py-5 px-10">
      {cards}
      </div>
    </div>
  );
}

export default App;
