(this.webpackJsonpadmissify=this.webpackJsonpadmissify||[]).push([[7],{360:function(e,t,a){var r,i=a(171).default,n=Object.create,l=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,p=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,d=(e,t,a,r)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let i of o(t))c.call(e,i)||i===a||l(e,i,{get:()=>t[i],enumerable:!(r=s(t,i))||r.enumerable});return e},u=(e,t,a)=>(((e,t,a)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!==typeof t?t+"":t,a),a),h={};((e,t)=>{for(var a in t)l(e,a,{get:t[a],enumerable:!0})})(h,{default:()=>g}),e.exports=(r=h,d(l({},"__esModule",{value:!0}),r));var m=((e,t,a)=>(a=null!=e?n(p(e)):{},d(!t&&e&&e.__esModule?a:l(a,"default",{value:e,enumerable:!0}),e)))(a(1));const b="64px",f={};class g extends m.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"state",{image:null}),u(this,"handleKeyPress",(e=>{"Enter"!==e.key&&" "!==e.key||this.props.onClick()}))}componentDidMount(){this.mounted=!0,this.fetchImage(this.props)}componentDidUpdate(e){const{url:t,light:a}=this.props;e.url===t&&e.light===a||this.fetchImage(this.props)}componentWillUnmount(){this.mounted=!1}fetchImage(e){let{url:t,light:a,oEmbedUrl:r}=e;if(!m.default.isValidElement(a))if("string"!==typeof a){if(!f[t])return this.setState({image:null}),window.fetch(r.replace("{url}",t)).then((e=>e.json())).then((e=>{if(e.thumbnail_url&&this.mounted){const a=e.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");this.setState({image:a}),f[t]=a}}));this.setState({image:f[t]})}else this.setState({image:a})}render(){const{light:e,onClick:t,playIcon:a,previewTabIndex:r,previewAriaLabel:n}=this.props,{image:l}=this.state,s=m.default.isValidElement(e),o={display:"flex",alignItems:"center",justifyContent:"center"},p={preview:i({width:"100%",height:"100%",backgroundImage:l&&!s?"url(".concat(l,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},o),shadow:i({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:b,width:b,height:b,position:s?"absolute":void 0},o),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},c=m.default.createElement("div",{style:p.shadow,className:"react-player__shadow"},m.default.createElement("div",{style:p.playIcon,className:"react-player__play-icon"}));return m.default.createElement("div",i({style:p.preview,className:"react-player__preview",onClick:t,tabIndex:r,onKeyPress:this.handleKeyPress},n?{"aria-label":n}:{}),s?e:null,a||c)}}}}]);
//# sourceMappingURL=reactPlayerPreview.c99e9f23.chunk.js.map