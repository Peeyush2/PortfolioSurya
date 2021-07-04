import React,{useState,useEffect} from 'react'

export default function Face(props) {
  const [x,setx] = useState(3.725)
  const [y,sety] = useState(3.725)
  useEffect(() => {
    if(props.props!==undefined){
    if(props.props.x>props.props.y){
      setx(props.props.x/props.props.y + 3.725)
      sety(props.props.y/props.props.x + 3.725)
    
    }
  }

    return () => {
      sety(3.725)
      setx(3.725)
    }
  }, [props.props])
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{maxHeight:'100%'}} width="324.227" height="402.464" viewBox="0 0 324.227 402.464">
        <g id="Group_7" data-name="Group 7" transform="translate(-790.17 -1118.258)">
          <g id="Group_5" data-name="Group 5" transform="translate(-53.694 -59.514)">
            <g id="Group_4" data-name="Group 4" transform="translate(861 1220)">
              <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
                <path id="Path_54" data-name="Path 54" d="M224.845,679.546s-6.388,30.147,5.323,90.441c3.771,19.414,14.36,37.572,19.705,53.5,11.048,32.931,21.27,57.373,53.751,74.618,17.072,9.065,30.833,7.657,30.833,7.657,11.982.391,15.552-2.546,26.547-.394a36.689,36.689,0,0,0,15.011.524s3.773-1.022,7.712-2.524c14.86-5.664,41.323-21.922,61.887-71.555,2.561-6.18,7.9-20.441,10.247-28.043,8.518-28.262,19.16-59.224,19.16-68.645s-7.864-41.7-4.463-67.482c1.746-13.25.066-44.571-14.7-72.018-13.963-25.962-39.63-48.458-85.169-48.915C277.01,545.771,242.943,565.555,224.845,679.546Z" transform="translate(-187.96 -546.683)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_55" data-name="Path 55" d="M232.022,636.538s7.309-22.838,21.925-23.752,43.849-10.048,63.032,11.875,11.877,32.886,7.308,48.417-21.923,22.838-31.973,27.405-33.8,1.827-40.194-3.654S219.858,656.044,232.022,636.538Z" transform="translate(-184.95 -513.213)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_56" data-name="Path 56" d="M321.937,642.5s14.615-22.311,26.492-26.548,38.367-5.811,49.329,0,19.172,18.845,20.852,35.074-8.976,36.51-22.679,44.732-42.934,9.135-52.983,0S319.2,663.238,321.937,642.5Z" transform="translate(-136.011 -512.141)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_57" data-name="Path 57" d="M294.023,634.027s16.873-13.062,42.452,0" transform="translate(-150.549 -503.668)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_58" data-name="Path 58" d="M310.829,650.142s1.37,22.161-7.537,32.092-31.744,22.719-22.609,35.507,12.789,0,17.356,0,24.352,0,21.767,12.789c3.811,10.963,12.947,2.74,15.688-3.654s14.615-13.7,25.579-4.567,6.394-16.442,0-20.1-18.146-41.358-16.8-52.069" transform="translate(-158.703 -492.104)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_59" data-name="Path 59" d="M315.87,621.17s-25.256,1.289-48.415-3.654-36.542,15.53-36.542,15.53" transform="translate(-183.842 -509.722)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_60" data-name="Path 60" d="M331.957,621.085a113.574,113.574,0,0,1,28.437-4.121c8.5-.136,18.265-.2,29.738,4.176a64.631,64.631,0,0,1,10.375,5.065" transform="translate(-130.538 -509.629)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_61" data-name="Path 61" d="M245.266,643.009s46.59-16.62,58.465,0C289.115,657.8,245.266,643.009,245.266,643.009Z" transform="translate(-176.27 -499.764)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_62" data-name="Path 62" d="M332.328,649.283s22.578-20.78,51-10.849C373.775,657.921,332.328,649.283,332.328,649.283Z" transform="translate(-130.342 -499.699)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_63" data-name="Path 63" d="M272.776,729.655c7.233,1.135,28.237,10.389,52.3,8.9,4.311-.267,9.275.859,13.9,0,20.4-3.792,39.4-14.207,42.813-15.756" transform="translate(-161.758 -453.774)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_64" data-name="Path 64" d="M286.53,755.4c14.617,10.048,59.378,5.481,64.859,0" transform="translate(-154.502 -436.58)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_65" data-name="Path 65" d="M244.054,642.654h-7.072s-8.962-.517-13.723-4.188-5.321-10.495-5.321-10.495-23.752-10.4-16.444,21.749,19.184,44.818,16.444,55.839-4.514,22.9,4.138,24.725,13.167-10.048,13.167-10.048l4.558-3.9" transform="translate(-200.098 -504.647)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_66" data-name="Path 66" d="M385.747,640.571s9.294-6.972,13.862-8.525,13.7,23.112,3.654,50.517-9.329,40.576-6.492,44.952-12.3,12.981-15.755,0" transform="translate(-103.148 -501.687)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_67" data-name="Path 67" d="M286.74,585.633c-3.654,23.752,10.05,34.713,16.444,39.282s-6.851-34.715-3.883-47.5S286.74,585.633,286.74,585.633Z" transform="translate(-154.712 -532.65)" fill="none" stroke="#676767" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_68" data-name="Path 68" d="M247.721,678.21s-19.183,18.33,5.481,37.513" transform="translate(-178.725 -477.298)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_69" data-name="Path 69" d="M358.276,684.4s46.718,14.1,6.176,65" transform="translate(-116.653 -474.033)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_70" data-name="Path 70" d="M279.462,694.521s-32.886,19.536-27.4,38.448" transform="translate(-173.012 -468.693)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_71" data-name="Path 71" d="M367.9,627.417s15.96,6.483,13.862,18.463" transform="translate(-111.578 -504.093)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
                <path id="Path_72" data-name="Path 72" d="M240.635,650.811s-1.723,14.617,12.588,14.715" transform="translate(-178.747 -491.752)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1"/>
              </g>
              <path id="Path_73" data-name="Path 73" d="M362.556,722.8a66.828,66.828,0,0,1-53.332,30.963" transform="translate(-142.53 -453.774)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
              <path id="Path_76" data-name="Path 76" d="M307.343,729.922c3.228,5.073,3.322,7.262,14.318,14.234,13.444,8.524,34.679,9.3,40.895,9.608" transform="translate(-195.53 -453.774)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
              <path id="Path_74" data-name="Path 74" d="M326.681,613.052s52.127-25.77,69.986-13.065" transform="translate(-133.321 -520.42)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
              <circle 
               id="Ellipse_8" data-name="Ellipse 8" cx={x} cy={y} r="3.725" transform="translate(224.485 141.062)" fill="#fff"/>
              <circle id="Ellipse_9" data-name="Ellipse 9" cx={x} cy={y} r="3.725" transform="translate(101.485 139.062)" fill="#fff"/>
            </g>
          </g>
          <path id="Path_75" data-name="Path 75" d="M7932.449,2349.33l-49.975,21.136s25.96-35.674,46.6-35.4c-47.812-5.392-59.011,16.693-59.011,16.693s28.765-59.431,68.212-34.951c-42.667-41.841-82.1-5.39-82.1-5.39s43.519-52.7,94.42-7.88c.731,26.9.423,21.748,14.981,29.365s-16.911-25.343-6.87-34.685,17.872,26.977,24.138,28.438,10.26-46.053,10.26-41.407,17.786,12.969,17.786,12.969h18.131v28.438l10.177-33.58,19.011,30.379,15.418-35.859-2.758,35.859,25.721-30.379-6.024,26.434,22.767-15.974v13.27l29.375-5.39-11.79,15.239s40.75-18.967,49.485,11.351c-4.081-40.937-41.053-58.761-57.95-48,39.611-18.147,57.95,0,57.95,0s-164.656-123.252-265.735-37.286S7932.449,2349.33,7932.449,2349.33Z" transform="translate(-7066 -1104)" fill="#fff"/>
        </g>
      </svg>
    )
}
