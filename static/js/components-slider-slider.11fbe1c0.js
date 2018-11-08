(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./components/Slider/Slider.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function o(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;o(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"slider"}},"Slider"),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Slider")," is a high-level component that provides functionality similar to the HTML ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range"}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"range")," input"),", but with some extra perks. The ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://danburzo.github.io/uiuiui/storybook-static/?selectedKind=Slider"}},"Storybook for ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Slider"))," for some examples."),m.a.createElement(r.MDXTag,{name:"p",components:n},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Slider")," uses ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./Surface.md"}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Surface"))," under the hood to capture the user interaction, out of which it extracts the X or the Y coordinate, depending on whether it's a horizontal or vertical slider. It uses a linear scale from ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/d3/d3-scale"}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"d3-scale"))," to map between the percentage received from ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Surface")," and the slider's range, as defined by its ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"start")," and ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"end")," properties."),m.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),m.a.createElement(r.MDXTag,{name:"table",components:n},m.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default value"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Notes"))),m.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"property")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Any"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"td"},"none")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://github.com/danburzo/react-recipes/blob/master/recipes/property-pattern.md"}},"An optional identifier")," to pass along to the callback functions.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"className")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"td"},"none")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Any additional class names to pass to the component.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"tabIndex")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Integer"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"0")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The component's tab index.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"cyclical")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Boolean"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"false")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Whether the slider should cycle the value when reaching the interval edges.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"vertical")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Boolean"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"false")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Whether the slider should be horizontal or vertical.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"value")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Number"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"td"},"none")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The slider's initial value. Whenever the component receives a new value from its parent, it will reset the component's inner state to match that value.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"start")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Number"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"0")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"td"},"starting value")," for the range.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"end")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Number"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"100")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"td"},"end value")," for the range. It's not necessary to have ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"start < end"),", as the Slider works well even with inverted ranges.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"step")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Number"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"1")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The step to use when changing the value with the Up / Down arrow keys. For steps that are fractions, always use an appropriate ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"precision")," as well, to avoid floating-point errors.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"precision")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Number"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"0")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"The number of decimals to round the value to.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"increment")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Number"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"none"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"(Optional) number that defines the ",m.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"td"},"increment step")," when the user presses the arrow keys. When not defined, the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"step")," property will be used for this purpose.")))),m.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"css"}},"CSS"),m.a.createElement(r.MDXTag,{name:"p",components:n},"The ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Slider")," component has the class name ",m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"strong"},"uix-slider")),". It has by default a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"1em")," height, but this can be customized via CSS."),m.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"children"}},"Children"),m.a.createElement(r.MDXTag,{name:"p",components:n},"The ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Slider")," component accepts arbitrary children, which it passes along to the underlying ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"../Surface/README.md"}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"Surface"))," component."),m.a.createElement(r.MDXTag,{name:"p",components:n},"It places a couple of useful properties on each child:"),m.a.createElement(r.MDXTag,{name:"table",components:n},m.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Notes"))),m.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"value")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"number")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"This is the absolute value, which also gets sent on the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange")," callback to the outside world. You may use this value to show a tooltip, as is the case of the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"SliderTooltip")," component.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"scale")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"function")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"This is the ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"https://github.com/d3/d3-scale"}},"d3-scale")," used to map the percentage received from ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Surface")," to the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Slider"),"'s range, as defined by its ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"start")," and ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"end")," numbers. Since the child is passed along to, and nested within, the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Surface")," component, it's useful to get back that percentage with ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"scale.invert(value)")," and style the child appropriately.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"interacting")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"boolean")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"This tells the child whether the user is interacting with the Slider or not. You may use this flag to style the child appropriately.")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"vertical")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"boolean")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Each child gets the parent Slider's orientation. When set to ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true"),", the slider is vertical. Otherwise it's a plain, horizontal, slider.")))),m.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"build-in-child-components"}},"Build-in child components"),m.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"sliderhandle"}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"SliderHandle")),m.a.createElement(r.MDXTag,{name:"p",components:n},"This component displays a handle positioned at the slider value's position. It has the class name ",m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"`uix-slider"),"handle`","_","_","."),m.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"sliderprogress"}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"SliderProgress")),m.a.createElement(r.MDXTag,{name:"p",components:n},"This component fills part of the slider with a different color, depending on its value. It has the class name ",m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"`uix-slider"),"progress`","_","_","."),m.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"slidertooltip"}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"SliderTooltip")),m.a.createElement(r.MDXTag,{name:"p",components:n},"This component displays the slider's value above the slider. It has the class name ",m.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"`uix-slider"),"tooltip`","_","_","."))}}}]);