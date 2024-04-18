import "./productItem.css";

const ProductsItem = (props) => {
  return (
    <>
      <article>
        <img src={props.article.image} alt={props.article.title} />
        <h2>{props.article.title}</h2>
        <p>{props.article.price}</p>
        <button>Buy Now</button>
      </article>
    </>
  );
};

export default ProductsItem;
