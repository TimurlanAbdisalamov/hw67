import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const params = useParams();
    return (
        <div className="container">
          <CategoryComponent category={params.category} limit={null} />
        </div>
    );
}

export default CategoryPage;
