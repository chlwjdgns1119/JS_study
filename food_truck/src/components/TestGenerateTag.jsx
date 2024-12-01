const TestGenerateTag = ({tag_arr}) => {
    return(
        <div>
            <div>임시</div>
            {tag_arr.map((item, idx) => (
                <div key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
        </div>
    );
}

export default TestGenerateTag;