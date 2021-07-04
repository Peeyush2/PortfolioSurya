import React,{useState} from 'react'
import Home from './Home'
import dribble from './dribbble-4.svg'
import insta from './512px-Instagram.svg.png'
import Carasoul from './Carasoul'
export default function MainBody() {
    const [images,setImages] = useState([
        {img:"http://juliecristobal.com/wp-content/uploads/2020/04/lookbook-e20-35.jpg"},
        {img:"http://juliecristobal.com/wp-content/uploads/2019/05/08web.jpg"},
        {img:"http://juliecristobal.com/wp-content/uploads/2019/05/20190318_Duel_HugoMapelli-WEB.jpg"},
        {img:"http://juliecristobal.com/wp-content/uploads/2019/05/FrankieandClo_CharlotteStouvenot_Monologue_09.jpg"}]);
    return (
        <div>
            
            <div className='content-div' style={{float:'left'}}>
                <div className='leftPane'></div>
                <div className='middlePane'>
                    <span>01.</span>
                    <div className='title'>About</div>
                    </div>
                    <div className='rightPane'>
                        <span style={{visibility:'hidden'}}>.
                        </span>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Quis eleifend quam adipiscing vitae proin sagittis. A arcu cursus vitae congue mauris rhoncus aenean vel. Ante metus dictum at tempor. Non consectetur a erat nam at lectus. Purus viverra accumsan in nisl. In ante metus dictum at tempor commodo ullamcorper. Commodo viverra maecenas accumsan lacus vel facilisis.
                        </div>
                    </div>

            </div>

            <div className='content-div' >
                <div className='leftPane'></div>
                <div className='middlePane'>
                    <span>02.</span>
                    <div className='title'>Cases</div>
                    </div>
                    <div className='rightPane'>
                        <span style={{visibility:'hidden'}}>.
                        </span>
                        <div style={{display:'block'}}>
                            {/* <Home /> */}
                            <Carasoul props={images}/>
                        </div>
                        <br/>
                    </div>
            </div>

            <div className='content-div' style={{float:'left'}}>
                <div className='leftPane'></div>
                <div className='middlePane'>
                    <span>03.</span>
                    <div className='title'>Contact</div>
                    </div>
                    <div className='rightPane'>
                        <span style={{visibility:'hidden'}}>.
                        </span>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim. Est ante in nibh mauris cursus mattis molestie a iaculis. 
                        </div>
                        <span>
                            <img style={{width:'20%',height:'100%'}} src={dribble}/>
                            <img style={{width:'20%',height:'100%'}} src={insta}/>
                        </span>
                    </div>
            </div>
        </div>
    )
}
