import {useDrag} from 'react-use-gesture';
import {useSpring, animated} from 'react-spring';
import { useRef } from 'react';

const TestInnerHtmlTag = ({key, tag, saveTag}) => {

    const logoPos = useRef({ x: 0, y: 0 });
        
    const [springProps, setSpringProps] = useSpring(() => ({ x: 0, y: 0 }));

    const bindLogoPos = useDrag((params) => {
        logoPos.current.x = params.offset[0];
        logoPos.current.y = params.offset[1];
        setSpringProps({ x: logoPos.current.x, y: logoPos.current.y });
    });

    const style = {x: springProps.x, y: springProps.y, display: 'inline-block', position: 'relative', cursor: 'default'}

    saveTag(key, tag, style)

    return(<animated.div {...bindLogoPos()} style={{x: springProps.x, y: springProps.y, display: 'inline-block', position: 'relative', cursor: 'default'}} key={key} dangerouslySetInnerHTML={{ __html: tag }} />)
}

export default TestInnerHtmlTag;