import {useDrag} from 'react-use-gesture';
import {useSpring, animated} from 'react-spring';
import { useEffect, useState } from 'react';

const TestInnerHtmlTag = ({idx, tag, saveTag, showState}) => {

    const defaultstyle = {display: 'inline-block', position: 'absolute', cursor: 'default', left: 0, top: 0};
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
    setIsMouseDown(false);
    };

    const [logoPos, setlogoPos] = useState({ x: 0, y: 0 });
        
    const [springProps, setSpringProps] = useSpring(() => ({ x: 0, y: 0 }));

    const bindLogoPos = useDrag((params) => {
        setlogoPos({x: params.offset[0], y: params.offset[1]})
        setSpringProps({ x: logoPos.x, y: logoPos.y, immediate: true });

        
        const element = document.querySelector(`#childText_${idx}`);
        const parent = element.parentElement;            // 부모 요소
    
        const elementRect = element.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
    
        const relativeTop = elementRect.top - parentRect.top;
        const relativeLeft = elementRect.left - parentRect.left;

        const style = {
            ...defaultstyle,
            left: relativeLeft,
            top: relativeTop
        }

        saveTag(idx, tag, style);
    });

    useEffect(() => {
        saveTag(idx, tag, defaultstyle);
    }, [])

    useEffect(() => {
        const element = document.querySelector(`#childText_${idx}`);
        const parent = element.parentElement;            // 부모 요소
    
        const elementRect = element.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
    
        const relativeTop = elementRect.top - parentRect.top;
        const relativeLeft = elementRect.left - parentRect.left;

        const style = {
            ...defaultstyle,
            left: relativeLeft,
            top: relativeTop
        }

        saveTag(idx, tag, style);
    }, [showState])

    return(
        <animated.div {...bindLogoPos()} 
            style={{x: springProps.x, y: springProps.y, display: 'inline-block', position: 'absolute', cursor: 'default'}} 
            key={idx} id={`childText_${idx}`} dangerouslySetInnerHTML={{ __html: tag }} 
            onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}
        />)
};

export default TestInnerHtmlTag;