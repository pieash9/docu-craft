import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-util";

const TagsPage = ({params: {name}}) => {
    const docs = getDocuments()
    const matchedDocuments = getDocumentsByTag(docs, name)
    return (
        <div>
            <ContentDisplay id={matchedDocuments[0].id}/>
        </div>
    );
};

export default TagsPage;