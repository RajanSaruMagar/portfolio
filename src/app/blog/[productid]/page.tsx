const Page = ({ params }: { params: { productid: string } }) => {
  return <div>Product dynamic routing {params.productid}</div>;
};

export default Page;
