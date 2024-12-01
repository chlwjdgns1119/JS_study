import './TestGenerateTag.css'

const TestGenerateTag = ({tag_arr}) => {
    return(
        <div className="generate-basetag">
            {tag_arr.map((item, idx) => (
                <div key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
        </div>
    );
}

export default TestGenerateTag;