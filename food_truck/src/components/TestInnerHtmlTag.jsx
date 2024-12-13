import {useDrag} from 'react-use-gesture';
import {useSpring, animated} from 'react-spring';

const TestInnerHtmlTag = ({key, tag}) => {

    const logoPos = useSpring({x:0, y:0});

    const bindLogoPos = useDrag((params)=>{
        logoPos.x.set(params.offset[0]);
        logoPos.y.set(params.offset[1]);
      });

      return(<animated.div {...bindLogoPos()} style={{x: logoPos.x, y: logoPos.y}} key={key} dangerouslySetInnerHTML={{ __html: tag }} />)
}

export default TestInnerHtmlTag;