const PropertySingle = ({ property }) => {
  return <div>PropertySingle</div>;
};

export default PropertySingle;

export async function getServerSideProps(context) {
  const property = require("@/features/data/property");
  return {
    props: {
      property,
    },
  };
}
