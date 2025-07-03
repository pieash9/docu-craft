import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

const CategoriesPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByCategory(docs, name);
  return (
    <div>
      <ContentDisplay id={matchedDocuments[0].id} />
    </div>
  );
};

export default CategoriesPage;
