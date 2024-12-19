import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import { useSelector } from "react-redux";

const Home = () => {
    const categories = useSelector(s=> s.reducer.categories);
    return (
        <div className="container">
          {
            categories.map(item=>{
                return <CategoryComponent key={item} category={item} limit={4}/>
            })
          }

        </div>
    );
}

export default Home;
