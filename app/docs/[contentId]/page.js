import ContentDisplay from "@/app/components/ContentDisplay";

const ContentDetails = ({params : {contentId}}) => {
    return (
        <div>
            <ContentDisplay id={contentId}/>
        </div>
    );
};

export default ContentDetails;