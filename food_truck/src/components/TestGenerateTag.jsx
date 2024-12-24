import './TestGenerateTag.css';
import TestInnerHtmlTag from './TestInnerHtmlTag';'./TestInnerHtmlTag';
import { useState, useEffect } from 'react';

const TestGenerateTag = ({tag_obj, saveTag, showState}) => {
    const [isResizing, setIsResizing] = useState(false);
    const [initalY, setInitialY] = useState(0);
    const [height, setHeight] = useState(720);

    const handleMouseUp = () => {
        setIsResizing(false);
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsResizing(true);
        setInitialY(e.clientY);
    }

    const handleMouseMove = (e) => {
        if(isResizing){
            const newHeight = height + e.clientY - initalY;
            setHeight(newHeight);
            setInitialY(e.clientY);
        }
    }

    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing]);

    return(
        <div>
            <div className="generate-basetag" style={{height}} >
                {Object.values(tag_obj).map((item, idx) => {
                    return(
                        <TestInnerHtmlTag key={idx} idx={idx} tag={item} saveTag={saveTag} showState={showState}/>
                    )
                    /* return(<div key={idx} dangerouslySetInnerHTML={{ __html: item }} />) */
                })}
            </div>
            <div className='height-resizing-bar' 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}>
            </div>
        </div>
    );
};

export default TestGenerateTag;