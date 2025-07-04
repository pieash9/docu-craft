import ContentDisplay from "@/components/ContentDisplay";

const SubContentDetails = ({ params: { subContentId } }) => {
  return (
    <div>
      <ContentDisplay id={subContentId} />
    </div>
  );
};

export default SubContentDetails;