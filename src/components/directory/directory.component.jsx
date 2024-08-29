import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss"; //jdogisme

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} id={id} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
