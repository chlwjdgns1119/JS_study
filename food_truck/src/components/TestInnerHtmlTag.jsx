import {useDrag} from 'react-use-gesture';
import {useSpring, animated} from 'react-spring';
import { useRef, useEffect } from 'react';

const TestInnerHtmlTag = ({idx, tag, saveTag}) => {

    const defaultstyle = {display: 'inline-block', position: 'relative', cursor: 'default', x: 0, y: 0};
    const logoPos = useRef({ x: 0, y: 0 });
        
    const [springProps, setSpringProps] = useSpring(() => ({ x: 0, y: 0 }));

    const bindLogoPos = useDrag((params) => {
        logoPos.current.x = params.offset[0];
        logoPos.current.y = params.offset[1];
        setSpringProps({ x: logoPos.current.x, y: logoPos.current.y });

        const style = {
            ...defaultstyle,
            x: logoPos.current.x,
            y: logoPos.current.y
        }

        saveTag(idx, tag, style)
    });

    useEffect(() => {
        saveTag(idx, tag, defaultstyle);
    }, [])

    return(
        <animated.div {...bindLogoPos()} 
            style={{x: springProps.x, y: springProps.y, display: 'inline-block', position: 'relative', cursor: 'default'}} 
            key={idx} dangerouslySetInnerHTML={{ __html: tag }} 
        />)
};

export default TestInnerHtmlTag;