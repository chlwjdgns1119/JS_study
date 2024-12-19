import {useDrag} from 'react-use-gesture';
import {useSpring, animated} from 'react-spring';
import { useRef, forwardRef, useImperativeHandle, useEffect, useState } from 'react';

const TestInnerHtmlTag = forwardRef((props, ref) => {
    const {idx, tag} = props;

    const logoPos = useRef({ x: 0, y: 0 });
        
    const [springProps, setSpringProps] = useSpring(() => ({ x: 0, y: 0 }));

    const bindLogoPos = useDrag((params) => {
        logoPos.current.x = params.offset[0];
        logoPos.current.y = params.offset[1];
        setSpringProps({ x: logoPos.current.x, y: logoPos.current.y });
        setChildData({idx, tag, style});
    });

    useEffect(()=>{
        console.log(props)
    }, [])

    const style = {x: springProps.x, y: springProps.y, display: 'inline-block', position: 'relative', cursor: 'default'};

    useImperativeHandle(ref, () => ({
        getChildData: () => {idx, tag, style}, 
      }));

    return(
        <animated.div {...bindLogoPos()} 
            style={{x: springProps.x, y: springProps.y, display: 'inline-block', position: 'relative', cursor: 'default'}} 
            key={idx} dangerouslySetInnerHTML={{ __html: tag }} 
        />)
});

TestInnerHtmlTag.displayName = 'TestInnerHtmlTag';

export default TestInnerHtmlTag;