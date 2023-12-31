import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')    
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])

    return (
        <div>
             <h2 className="text-2xl">All Caterogy {categories.length} </h2>
             {
                categories.map(category => <Link to={`/category/${category.id}`} className="block mb-4 ml-4 text-xl font-semibold" key={category.id}>{category.name}</Link> )
             }
        </div>

        
    );
};

export default LeftSideNav;