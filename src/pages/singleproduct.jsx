import { useParams } from "react-router";

function SingleProduct() {
  const { productId: id, reviewId } = useParams();

  // server api request -> poroduct id <= details

  return (
    <div className="page">
      <p>Current Product Id is: {id} {reviewId ? `and Review Id is ${reviewId}`: ``}</p>
    </div>
  );
}

export default SingleProduct;