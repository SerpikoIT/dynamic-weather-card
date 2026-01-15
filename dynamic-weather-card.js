var r=function(c,f,h,$){var F=arguments.length,b=F<3?f:$===null?$=Object.getOwnPropertyDescriptor(f,h):$,W;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")b=Reflect.decorate(c,f,h,$);else for(var k=c.length-1;k>=0;k--)if(W=c[k])b=(F<3?W(b):F>3?W(f,h,b):W(f,h))||b;return F>3&&b&&Object.defineProperty(f,h,b),b};var a=globalThis,b0=a.ShadowRoot&&(a.ShadyCSS===void 0||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W0=Symbol(),x0=new WeakMap;class k0{constructor(c,f,h){if(this._$cssResult$=!0,h!==W0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=c,this._strings=f}get styleSheet(){let c=this._styleSheet,f=this._strings;if(b0&&c===void 0){let h=f!==void 0&&f.length===1;if(h)c=x0.get(f);if(c===void 0){if((this._styleSheet=c=new CSSStyleSheet).replaceSync(this.cssText),h)x0.set(f,c)}}return c}toString(){return this.cssText}}var Bc=(c)=>{if(c._$cssResult$===!0)return c.cssText;else if(typeof c==="number")return c;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${c}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},Qc=(c)=>new k0(typeof c==="string"?c:String(c),void 0,W0),z0=(c,...f)=>{let h=c.length===1?c[0]:f.reduce(($,F,b)=>$+Bc(F)+c[b+1],c[0]);return new k0(h,c,W0)},T0=(c,f)=>{if(b0)c.adoptedStyleSheets=f.map((h)=>h instanceof CSSStyleSheet?h:h.styleSheet);else for(let h of f){let $=document.createElement("style"),F=a.litNonce;if(F!==void 0)$.setAttribute("nonce",F);$.textContent=h.cssText,c.appendChild($)}},Jc=(c)=>{let f="";for(let h of c.cssRules)f+=h.cssText;return Qc(f)},_0=b0?(c)=>c:(c)=>c instanceof CSSStyleSheet?Jc(c):c;var{is:Uc,defineProperty:Hc,getOwnPropertyDescriptor:D0,getOwnPropertyNames:Cc,getOwnPropertySymbols:jc,getPrototypeOf:V0}=Object,yc=!1,U=globalThis;if(yc)U.customElements??=customElements;var H=!0,y,S0=U.trustedTypes,Nc=S0?S0.emptyScript:"",P0=H?U.reactiveElementPolyfillSupportDevMode:U.reactiveElementPolyfillSupport;if(H)U.litIssuedWarnings??=new Set,y=(c,f)=>{if(f+=` See https://lit.dev/msg/${c} for more information.`,!U.litIssuedWarnings.has(f)&&!U.litIssuedWarnings.has(c))console.warn(f),U.litIssuedWarnings.add(f)},queueMicrotask(()=>{if(y("dev-mode","Lit is in dev mode. Not recommended for production!"),U.ShadyDOM?.inUse&&P0===void 0)y("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var dc=H?(c)=>{if(!U.emitLitDebugLogEvents)return;U.dispatchEvent(new CustomEvent("lit-debug",{detail:c}))}:void 0,V=(c,f)=>c,P={toAttribute(c,f){switch(f){case Boolean:c=c?Nc:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c);break}return c},fromAttribute(c,f){let h=c;switch(f){case Boolean:h=c!==null;break;case Number:h=c===null?null:Number(c);break;case Object:case Array:try{h=JSON.parse(c)}catch($){h=null}break}return h}},t=(c,f)=>!Uc(c,f),R0={attribute:!0,type:String,converter:P,reflect:!1,useDefault:!1,hasChanged:t};Symbol.metadata??=Symbol("metadata");U.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(c){this.__prepare(),(this._initializers??=[]).push(c)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(c,f=R0){if(f.state)f.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(c))f=Object.create(f),f.wrapped=!0;if(this.elementProperties.set(c,f),!f.noAccessor){let h=H?Symbol.for(`${String(c)} (@property() cache)`):Symbol(),$=this.getPropertyDescriptor(c,h,f);if($!==void 0)Hc(this.prototype,c,$)}}static getPropertyDescriptor(c,f,h){let{get:$,set:F}=D0(this.prototype,c)??{get(){return this[f]},set(b){this[f]=b}};if(H&&$==null){if("value"in(D0(this.prototype,c)??{}))throw Error(`Field ${JSON.stringify(String(c))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);y("reactive-property-without-getter",`Field ${JSON.stringify(String(c))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:$,set(b){let W=$?.call(this);F?.call(this,b),this.requestUpdate(c,W,h)},configurable:!0,enumerable:!0}}static getPropertyOptions(c){return this.elementProperties.get(c)??R0}static __prepare(){if(this.hasOwnProperty(V("elementProperties",this)))return;let c=V0(this);if(c.finalize(),c._initializers!==void 0)this._initializers=[...c._initializers];this.elementProperties=new Map(c.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(V("properties",this))){let f=this.properties,h=[...Cc(f),...jc(f)];for(let $ of h)this.createProperty($,f[$])}let c=this[Symbol.metadata];if(c!==null){let f=litPropertyMetadata.get(c);if(f!==void 0)for(let[h,$]of f)this.elementProperties.set(h,$)}this.__attributeToPropertyMap=new Map;for(let[f,h]of this.elementProperties){let $=this.__attributeNameForProperty(f,h);if($!==void 0)this.__attributeToPropertyMap.set($,f)}if(this.elementStyles=this.finalizeStyles(this.styles),H){if(this.hasOwnProperty("createProperty"))y("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))y("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(c){let f=[];if(Array.isArray(c)){let h=new Set(c.flat(1/0).reverse());for(let $ of h)f.unshift(_0($))}else if(c!==void 0)f.push(_0(c));return f}static __attributeNameForProperty(c,f){let h=f.attribute;return h===!1?void 0:typeof h==="string"?h:typeof c==="string"?c.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((c)=>this.enableUpdating=c),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((c)=>c(this))}addController(c){if((this.__controllers??=new Set).add(c),this.renderRoot!==void 0&&this.isConnected)c.hostConnected?.()}removeController(c){this.__controllers?.delete(c)}__saveInstanceProperties(){let c=new Map,f=this.constructor.elementProperties;for(let h of f.keys())if(this.hasOwnProperty(h))c.set(h,this[h]),delete this[h];if(c.size>0)this.__instanceProperties=c}createRenderRoot(){let c=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return T0(c,this.constructor.elementStyles),c}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((c)=>c.hostConnected?.())}enableUpdating(c){}disconnectedCallback(){this.__controllers?.forEach((c)=>c.hostDisconnected?.())}attributeChangedCallback(c,f,h){this._$attributeToProperty(c,h)}__propertyToAttribute(c,f){let $=this.constructor.elementProperties.get(c),F=this.constructor.__attributeNameForProperty(c,$);if(F!==void 0&&$.reflect===!0){let W=($.converter?.toAttribute!==void 0?$.converter:P).toAttribute(f,$.type);if(H&&this.constructor.enabledWarnings.includes("migration")&&W===void 0)y("undefined-attribute-value",`The attribute value for the ${c} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=c,W==null)this.removeAttribute(F);else this.setAttribute(F,W);this.__reflectingProperty=null}}_$attributeToProperty(c,f){let h=this.constructor,$=h.__attributeToPropertyMap.get(c);if($!==void 0&&this.__reflectingProperty!==$){let F=h.getPropertyOptions($),b=typeof F.converter==="function"?{fromAttribute:F.converter}:F.converter?.fromAttribute!==void 0?F.converter:P;this.__reflectingProperty=$;let W=b.fromAttribute(f,F.type);this[$]=W??this.__defaultValues?.get($)??W,this.__reflectingProperty=null}}requestUpdate(c,f,h,$=!1,F){if(c!==void 0){if(H&&c instanceof Event)y("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let b=this.constructor;if($===!1)F=this[c];if(h??=b.getPropertyOptions(c),(h.hasChanged??t)(F,f)||h.useDefault&&h.reflect&&F===this.__defaultValues?.get(c)&&!this.hasAttribute(b.__attributeNameForProperty(c,h)))this._$changeProperty(c,f,h);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(c,f,{useDefault:h,reflect:$,wrapped:F},b){if(h&&!(this.__defaultValues??=new Map).has(c)){if(this.__defaultValues.set(c,b??f??this[c]),F!==!0||b!==void 0)return}if(!this._$changedProperties.has(c)){if(!this.hasUpdated&&!h)f=void 0;this._$changedProperties.set(c,f)}if($===!0&&this.__reflectingProperty!==c)(this.__reflectingProperties??=new Set).add(c)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(f){Promise.reject(f)}let c=this.scheduleUpdate();if(c!=null)await c;return!this.isUpdatePending}scheduleUpdate(){let c=this.performUpdate();if(H&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof c?.then==="function")y("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return c}performUpdate(){if(!this.isUpdatePending)return;if(dc?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),H){let F=[...this.constructor.elementProperties.keys()].filter((b)=>this.hasOwnProperty(b)&&(b in V0(this)));if(F.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${F.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[$,F]of this.__instanceProperties)this[$]=F;this.__instanceProperties=void 0}let h=this.constructor.elementProperties;if(h.size>0)for(let[$,F]of h){let{wrapped:b}=F,W=this[$];if(b===!0&&!this._$changedProperties.has($)&&W!==void 0)this._$changeProperty($,void 0,F,W)}}let c=!1,f=this._$changedProperties;try{if(c=this.shouldUpdate(f),c)this.willUpdate(f),this.__controllers?.forEach((h)=>h.hostUpdate?.()),this.update(f);else this.__markUpdated()}catch(h){throw c=!1,this.__markUpdated(),h}if(c)this._$didUpdate(f)}willUpdate(c){}_$didUpdate(c){if(this.__controllers?.forEach((f)=>f.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(c);if(this.updated(c),H&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))y("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(c){return!0}update(c){this.__reflectingProperties&&=this.__reflectingProperties.forEach((f)=>this.__propertyToAttribute(f,this[f])),this.__markUpdated()}updated(c){}firstUpdated(c){}}C.elementStyles=[];C.shadowRootOptions={mode:"open"};C[V("elementProperties",C)]=new Map;C[V("finalized",C)]=new Map;P0?.({ReactiveElement:C});if(H){C.enabledWarnings=["change-in-update","async-perform-update"];let c=function(f){if(!f.hasOwnProperty(V("enabledWarnings",f)))f.enabledWarnings=f.enabledWarnings.slice()};C.enableWarning=function(f){if(c(this),!this.enabledWarnings.includes(f))this.enabledWarnings.push(f)},C.disableWarning=function(f){c(this);let h=this.enabledWarnings.indexOf(f);if(h>=0)this.enabledWarnings.splice(h,1)}}(U.reactiveElementVersions??=[]).push("2.1.2");if(H&&U.reactiveElementVersions.length>1)queueMicrotask(()=>{y("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var j=globalThis,K=(c)=>{if(!j.emitLitDebugLogEvents)return;j.dispatchEvent(new CustomEvent("lit-debug",{detail:c}))},Mc=0,E;j.litIssuedWarnings??=new Set,E=(c,f)=>{if(f+=c?` See https://lit.dev/msg/${c} for more information.`:"",!j.litIssuedWarnings.has(f)&&!j.litIssuedWarnings.has(c))console.warn(f),j.litIssuedWarnings.add(f)},queueMicrotask(()=>{E("dev-mode","Lit is in dev mode. Not recommended for production!")});var N=j.ShadyDOM?.inUse&&j.ShadyDOM?.noPatch===!0?j.ShadyDOM.wrap:(c)=>c,e=j.trustedTypes,O0=e?e.createPolicy("lit-html",{createHTML:(c)=>c}):void 0,ic=(c)=>c,$0=(c,f,h)=>ic,Ic=(c)=>{if(D!==$0)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");D=c},Yc=()=>{D=$0},Z0=(c,f,h)=>{return D(c,f,h)},l0="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,n0="?"+I,Xc=`<${n0}>`,z=document,s=()=>z.createComment(""),o=(c)=>c===null||typeof c!="object"&&typeof c!="function",q0=Array.isArray,Lc=(c)=>q0(c)||typeof c?.[Symbol.iterator]==="function",w0=`[ 	
\f\r]`,xc=`[^ 	
\f\r"'\`<>=]`,zc=`[^\\s"'>=/]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v0=1,K0=2,Tc=3,E0=/-->/g,s0=/>/g,X=new RegExp(`>|${w0}(?:(${zc}+)(${w0}*=${w0}*(?:${xc}|("|')|))|$)`,"g"),Dc=0,o0=1,Vc=2,g0=3,A0=/'/g,G0=/"/g,m0=/^(?:script|style|textarea|title)$/i,Sc=1,c0=2,f0=3,B0=1,h0=2,Rc=3,Pc=4,Oc=5,Q0=6,vc=7,J0=(c)=>(f,...h)=>{if(f.some(($)=>$===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(h.some(($)=>$?._$litStatic$))E("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:c,strings:f,values:h}},Q=J0(Sc),A=J0(c0),Ff=J0(f0),T=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),p0=new WeakMap,x=z.createTreeWalker(z,129),D=$0;function u0(c,f){if(!q0(c)||!c.hasOwnProperty("raw")){let h="invalid template strings array";throw h=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),Error(h)}return O0!==void 0?O0.createHTML(f):f}var Ec=(c,f)=>{let h=c.length-1,$=[],F=f===c0?"<svg>":f===f0?"<math>":"",b,W=O;for(let _=0;_<h;_++){let G=c[_],w=-1,B,d=0,q;while(d<G.length){if(W.lastIndex=d,q=W.exec(G),q===null)break;if(d=W.lastIndex,W===O){if(q[v0]==="!--")W=E0;else if(q[v0]!==void 0)W=s0;else if(q[K0]!==void 0){if(m0.test(q[K0]))b=new RegExp(`</${q[K0]}`,"g");W=X}else if(q[Tc]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(W===X)if(q[Dc]===">")W=b??O,w=-1;else if(q[o0]===void 0)w=-2;else w=W.lastIndex-q[Vc].length,B=q[o0],W=q[g0]===void 0?X:q[g0]==='"'?G0:A0;else if(W===G0||W===A0)W=X;else if(W===E0||W===s0)W=O;else W=X,b=void 0}console.assert(w===-1||W===X||W===A0||W===G0,"unexpected parse state B");let i=W===X&&c[_+1].startsWith("/>")?" ":"";F+=W===O?G+Xc:w>=0?($.push(B),G.slice(0,w)+l0+G.slice(w))+I+i:G+I+(w===-2?_:i)}let k=F+(c[h]||"<?>")+(f===c0?"</svg>":f===f0?"</math>":"");return[u0(c,k),$]};class g{constructor({strings:c,["_$litType$"]:f},h){this.parts=[];let $,F=0,b=0,W=c.length-1,k=this.parts,[_,G]=Ec(c,f);if(this.el=g.createElement(_,h),x.currentNode=this.el.content,f===c0||f===f0){let w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}while(($=x.nextNode())!==null&&k.length<W){if($.nodeType===1){{let w=$.localName;if(/^(?:textarea|template)$/i.test(w)&&$.innerHTML.includes(I)){let B=`Expressions are not supported inside \`${w}\` elements. See https://lit.dev/msg/expression-in-${w} for more information.`;if(w==="template")throw Error(B);else E("",B)}}if($.hasAttributes()){for(let w of $.getAttributeNames())if(w.endsWith(l0)){let B=G[b++],q=$.getAttribute(w).split(I),i=/([.?@])?(.*)/.exec(B);k.push({type:B0,index:F,name:i[2],strings:q,ctor:i[1]==="."?a0:i[1]==="?"?t0:i[1]==="@"?e0:l}),$.removeAttribute(w)}else if(w.startsWith(I))k.push({type:Q0,index:F}),$.removeAttribute(w)}if(m0.test($.tagName)){let w=$.textContent.split(I),B=w.length-1;if(B>0){$.textContent=e?e.emptyScript:"";for(let d=0;d<B;d++)$.append(w[d],s()),x.nextNode(),k.push({type:h0,index:++F});$.append(w[B],s())}}}else if($.nodeType===8)if($.data===n0)k.push({type:h0,index:F});else{let B=-1;while((B=$.data.indexOf(I,B+1))!==-1)k.push({type:vc,index:F}),B+=I.length-1}F++}if(G.length!==b)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+c.join("${...}")+"`");K&&K({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:c})}static createElement(c,f){let h=z.createElement("template");return h.innerHTML=c,h}}function S(c,f,h=c,$){if(f===T)return f;let F=$!==void 0?h.__directives?.[$]:h.__directive,b=o(f)?void 0:f._$litDirective$;if(F?.constructor!==b){if(F?._$notifyDirectiveConnectionChanged?.(!1),b===void 0)F=void 0;else F=new b(c),F._$initialize(c,h,$);if($!==void 0)(h.__directives??=[])[$]=F;else h.__directive=F}if(F!==void 0)f=S(c,F._$resolve(c,f.values),F,$);return f}class r0{constructor(c,f){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=c,this._$parent=f}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(c){let{el:{content:f},parts:h}=this._$template,$=(c?.creationScope??z).importNode(f,!0);x.currentNode=$;let F=x.nextNode(),b=0,W=0,k=h[0];while(k!==void 0){if(b===k.index){let _;if(k.type===h0)_=new p(F,F.nextSibling,this,c);else if(k.type===B0)_=new k.ctor(F,k.name,k.strings,this,c);else if(k.type===Q0)_=new cc(F,this,c);this._$parts.push(_),k=h[++W]}if(b!==k?.index)F=x.nextNode(),b++}return x.currentNode=z,$}_update(c){let f=0;for(let h of this._$parts){if(h!==void 0)if(K&&K({kind:"set part",part:h,value:c[f],valueIndex:f,values:c,templateInstance:this}),h.strings!==void 0)h._$setValue(c,h,f),f+=h.strings.length-2;else h._$setValue(c[f]);f++}}}class p{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(c,f,h,$){this.type=h0,this._$committedValue=Z,this._$disconnectableChildren=void 0,this._$startNode=c,this._$endNode=f,this._$parent=h,this.options=$,this.__isConnected=$?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let c=N(this._$startNode).parentNode,f=this._$parent;if(f!==void 0&&c?.nodeType===11)c=f.parentNode;return c}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(c,f=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(c=S(this,c,f),o(c)){if(c===Z||c==null||c===""){if(this._$committedValue!==Z)K&&K({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=Z}else if(c!==this._$committedValue&&c!==T)this._commitText(c)}else if(c._$litType$!==void 0)this._commitTemplateResult(c);else if(c.nodeType!==void 0){if(this.options?.host===c){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",c,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(c)}else if(Lc(c))this._commitIterable(c);else this._commitText(c)}_insert(c){return N(N(this._$startNode).parentNode).insertBefore(c,this._$endNode)}_commitNode(c){if(this._$committedValue!==c){if(this._$clear(),D!==$0){let f=this._$startNode.parentNode?.nodeName;if(f==="STYLE"||f==="SCRIPT"){let h="Forbidden";if(f==="STYLE")h="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else h="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(h)}}K&&K({kind:"commit node",start:this._$startNode,parent:this._$parent,value:c,options:this.options}),this._$committedValue=this._insert(c)}}_commitText(c){if(this._$committedValue!==Z&&o(this._$committedValue)){let f=N(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=Z0(f,"data","property");c=this._textSanitizer(c),K&&K({kind:"commit text",node:f,value:c,options:this.options}),f.data=c}else{let f=z.createTextNode("");if(this._commitNode(f),this._textSanitizer===void 0)this._textSanitizer=Z0(f,"data","property");c=this._textSanitizer(c),K&&K({kind:"commit text",node:f,value:c,options:this.options}),f.data=c}this._$committedValue=c}_commitTemplateResult(c){let{values:f,["_$litType$"]:h}=c,$=typeof h==="number"?this._$getTemplate(c):(h.el===void 0&&(h.el=g.createElement(u0(h.h,h.h[0]),this.options)),h);if(this._$committedValue?._$template===$)K&&K({kind:"template updating",template:$,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:f}),this._$committedValue._update(f);else{let F=new r0($,this),b=F._clone(this.options);K&&K({kind:"template instantiated",template:$,instance:F,parts:F._$parts,options:this.options,fragment:b,values:f}),F._update(f),K&&K({kind:"template instantiated and updated",template:$,instance:F,parts:F._$parts,options:this.options,fragment:b,values:f}),this._commitNode(b),this._$committedValue=F}}_$getTemplate(c){let f=p0.get(c.strings);if(f===void 0)p0.set(c.strings,f=new g(c));return f}_commitIterable(c){if(!q0(this._$committedValue))this._$committedValue=[],this._$clear();let f=this._$committedValue,h=0,$;for(let F of c){if(h===f.length)f.push($=new p(this._insert(s()),this._insert(s()),this,this.options));else $=f[h];$._$setValue(F),h++}if(h<f.length)this._$clear($&&N($._$endNode).nextSibling,h),f.length=h}_$clear(c=N(this._$startNode).nextSibling,f){this._$notifyConnectionChanged?.(!1,!0,f);while(c!==this._$endNode){let h=N(c).nextSibling;N(c).remove(),c=h}}setConnected(c){if(this._$parent===void 0)this.__isConnected=c,this._$notifyConnectionChanged?.(c);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class l{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(c,f,h,$,F){if(this.type=B0,this._$committedValue=Z,this._$disconnectableChildren=void 0,this.element=c,this.name=f,this._$parent=$,this.options=F,h.length>2||h[0]!==""||h[1]!=="")this._$committedValue=Array(h.length-1).fill(new String),this.strings=h;else this._$committedValue=Z;this._sanitizer=void 0}_$setValue(c,f=this,h,$){let F=this.strings,b=!1;if(F===void 0){if(c=S(this,c,f,0),b=!o(c)||c!==this._$committedValue&&c!==T,b)this._$committedValue=c}else{let W=c;c=F[0];let k,_;for(k=0;k<F.length-1;k++){if(_=S(this,W[h+k],f,k),_===T)_=this._$committedValue[k];if(b||=!o(_)||_!==this._$committedValue[k],_===Z)c=Z;else if(c!==Z)c+=(_??"")+F[k+1];this._$committedValue[k]=_}}if(b&&!$)this._commitValue(c)}_commitValue(c){if(c===Z)N(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=D(this.element,this.name,"attribute");c=this._sanitizer(c??""),K&&K({kind:"commit attribute",element:this.element,name:this.name,value:c,options:this.options}),N(this.element).setAttribute(this.name,c??"")}}}class a0 extends l{constructor(){super(...arguments);this.type=Rc}_commitValue(c){if(this._sanitizer===void 0)this._sanitizer=D(this.element,this.name,"property");c=this._sanitizer(c),K&&K({kind:"commit property",element:this.element,name:this.name,value:c,options:this.options}),this.element[this.name]=c===Z?void 0:c}}class t0 extends l{constructor(){super(...arguments);this.type=Pc}_commitValue(c){K&&K({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(c&&c!==Z),options:this.options}),N(this.element).toggleAttribute(this.name,!!c&&c!==Z)}}class e0 extends l{constructor(c,f,h,$,F){super(c,f,h,$,F);if(this.type=Oc,this.strings!==void 0)throw Error(`A \`<${c.localName}>\` has a \`@${f}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(c,f=this){if(c=S(this,c,f,0)??Z,c===T)return;let h=this._$committedValue,$=c===Z&&h!==Z||c.capture!==h.capture||c.once!==h.once||c.passive!==h.passive,F=c!==Z&&(h===Z||$);if(K&&K({kind:"commit event listener",element:this.element,name:this.name,value:c,options:this.options,removeListener:$,addListener:F,oldListener:h}),$)this.element.removeEventListener(this.name,this,h);if(F)this.element.addEventListener(this.name,this,c);this._$committedValue=c}handleEvent(c){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,c);else this._$committedValue.handleEvent(c)}}class cc{constructor(c,f,h){this.element=c,this.type=Q0,this._$disconnectableChildren=void 0,this._$parent=f,this.options=h}get _$isConnected(){return this._$parent._$isConnected}_$setValue(c){K&&K({kind:"commit to element binding",element:this.element,value:c,options:this.options}),S(this,c)}}var sc=j.litHtmlPolyfillSupportDevMode;sc?.(g,p);(j.litHtmlVersions??=[]).push("3.3.2");if(j.litHtmlVersions.length>1)queueMicrotask(()=>{E("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var v=(c,f,h)=>{if(f==null)throw TypeError(`The container to render into may not be ${f}`);let $=Mc++,F=h?.renderBefore??f,b=F._$litPart$;if(K&&K({kind:"begin render",id:$,value:c,container:f,options:h,part:b}),b===void 0){let W=h?.renderBefore??null;F._$litPart$=b=new p(f.insertBefore(s(),W),W,void 0,h??{})}return b._$setValue(c),K&&K({kind:"end render",id:$,value:c,container:f,options:h,part:b}),b};v.setSanitizer=Ic,v.createSanitizer=Z0,v._testOnlyClearSanitizerFactoryDoNotCallOrElse=Yc;var oc=(c,f)=>c,U0=!0,Y=globalThis,fc;if(U0)Y.litIssuedWarnings??=new Set,fc=(c,f)=>{if(f+=` See https://lit.dev/msg/${c} for more information.`,!Y.litIssuedWarnings.has(f)&&!Y.litIssuedWarnings.has(c))console.warn(f),Y.litIssuedWarnings.add(f)};class L extends C{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let c=super.createRenderRoot();return this.renderOptions.renderBefore??=c.firstChild,c}update(c){let f=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(c),this.__childPart=v(f,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return T}}L._$litElement$=!0;L[oc("finalized",L)]=!0;Y.litElementHydrateSupport?.({LitElement:L});var gc=U0?Y.litElementPolyfillSupportDevMode:Y.litElementPolyfillSupport;gc?.({LitElement:L});(Y.litElementVersions??=[]).push("4.2.2");if(U0&&Y.litElementVersions.length>1)queueMicrotask(()=>{fc("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var hc=!0,$c;if(hc)globalThis.litIssuedWarnings??=new Set,$c=(c,f)=>{if(f+=` See https://lit.dev/msg/${c} for more information.`,!globalThis.litIssuedWarnings.has(f)&&!globalThis.litIssuedWarnings.has(c))console.warn(f),globalThis.litIssuedWarnings.add(f)};var pc=(c,f,h)=>{let $=f.hasOwnProperty(h);return f.constructor.createProperty(h,c),$?Object.getOwnPropertyDescriptor(f,h):void 0},lc={attribute:!0,type:String,converter:P,reflect:!1,hasChanged:t},nc=(c=lc,f,h)=>{let{kind:$,metadata:F}=h;if(hc&&F==null)$c("missing-class-metadata",`The class ${f} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let b=globalThis.litPropertyMetadata.get(F);if(b===void 0)globalThis.litPropertyMetadata.set(F,b=new Map);if($==="setter")c=Object.create(c),c.wrapped=!0;if(b.set(h.name,c),$==="accessor"){let{name:W}=h;return{set(k){let _=f.get.call(this);f.set.call(this,k),this.requestUpdate(W,_,c,!0,k)},init(k){if(k!==void 0)this._$changeProperty(W,void 0,c,k);return k}}}else if($==="setter"){let{name:W}=h;return function(k){let _=this[W];f.call(this,k),this.requestUpdate(W,_,c,!0,k)}}throw Error(`Unsupported decorator location: ${$}`)};function n(c){return(f,h)=>{return typeof h==="object"?nc(c,f,h):pc(c,f,h)}}function Fc(c){return n({...c,state:!0,attribute:!1})}var mc=!0,uc;if(mc)globalThis.litIssuedWarnings??=new Set,uc=(c,f)=>{if(f+=c?` See https://lit.dev/msg/${c} for more information.`:"",!globalThis.litIssuedWarnings.has(f)&&!globalThis.litIssuedWarnings.has(c))console.warn(f),globalThis.litIssuedWarnings.add(f)};var bc="0.3.3",H0={en:{sunny:"Sunny",clear:"Clear",overcast:"Overcast",cloudy:"Cloudy",partlycloudy:"Partly Cloudy",rainy:"Rainy",rain:"Rain",snowy:"Snowy",snow:"Snow",foggy:"Foggy",fog:"Fog",lightning:"Lightning","lightning-rainy":"Thunderstorm",pouring:"Heavy Rain","snowy-rainy":"Sleet",hail:"Hail","clear-night":"Clear Night"},ru:{sunny:"Солнечно",clear:"Ясно",overcast:"Пасмурно",cloudy:"Облачно",partlycloudy:"Переменная облачность",rainy:"Дождь",rain:"Дождь",snowy:"Снег",snow:"Снег",foggy:"Туман",fog:"Туман",lightning:"Гроза","lightning-rainy":"Гроза с дождем",pouring:"Сильный дождь","snowy-rainy":"Мокрый снег",hail:"Град","clear-night":"Ясная ночь"}},C0={en:{feels_like:"Feels like",forecast_title:"Today's Forecast",no_data:"No data",forecast_unavailable:"Forecast unavailable",weather:"Weather",wind_unit_ms:"m/s",wind_unit_kmh:"km/h"},ru:{feels_like:"Ощущается как",forecast_title:"Прогноз на сегодня",no_data:"Нет данных",forecast_unavailable:"Прогноз недоступен",weather:"Погода",wind_unit_ms:"м/с",wind_unit_kmh:"км/ч"}},M={SUNRISE_START:360,SUNRISE_END:480,DAY_END:1080,SUNSET_END:1200},Wc=["templow","temperature_low","temp_low","min_temp","yandex_pogoda_minimal_forecast_temperature"],R={showFeelsLike:!0,showWind:!1,showWindGust:!1,showWindDirection:!1,showHumidity:!1,showMinTemp:!0,showForecast:!1,showSunriseSunset:!1,showClock:!1,overlayOpacity:0.1,language:"auto",height:null,windSpeedUnit:"ms"};function rc(){let c=new Date,f=c.getHours(),h=c.getMinutes(),$=f*60+h;if($>=M.SUNRISE_START&&$<M.SUNRISE_END)return{type:"sunrise",progress:($-M.SUNRISE_START)/120};if($>=M.SUNRISE_END&&$<M.DAY_END)return{type:"day",progress:($-M.SUNRISE_END)/600};if($>=M.DAY_END&&$<M.SUNSET_END)return{type:"sunset",progress:($-M.DAY_END)/120};return{type:"night",progress:0}}function kc(c,f,h){if(c.type==="sunrise"){let $=c.progress;return{x:f*(0.3+$*0.4),y:h*(0.85-$*0.55)}}else if(c.type==="sunset"){let $=c.progress;return{x:f*(0.5+$*0.3),y:h*(0.3+$*0.55)}}else if(c.type==="day"){let F=c.progress*Math.PI;return{x:f*(0.5+Math.sin(F)*0.25),y:h*(0.25-Math.sin(F)*0.1)}}else return{x:f*0.75,y:h*0.3}}function _c(c){if(c.type==="sunrise"){let f=c.progress,h={r:26,g:26,b:46},$={r:255,g:160,b:122},F={r:255,g:215,b:0};return{start:{r:Math.round(h.r+($.r-h.r)*f),g:Math.round(h.g+($.g-h.g)*f),b:Math.round(h.b+($.b-h.b)*f)},end:{r:Math.round(h.r+(F.r-h.r)*f),g:Math.round(h.g+(F.g-h.g)*f),b:Math.round(h.b+(F.b-h.b)*f)}}}else if(c.type==="sunset"){let f=c.progress,h={r:255,g:107,b:107},$={r:255,g:160,b:122},F={r:26,g:26,b:46};return{start:{r:Math.round(h.r+(F.r-h.r)*f),g:Math.round(h.g+(F.g-h.g)*f),b:Math.round(h.b+(F.b-h.b)*f)},end:{r:Math.round($.r+(F.r-$.r)*f),g:Math.round($.g+(F.g-$.g)*f),b:Math.round($.b+(F.b-$.b)*f)}}}return null}function wc(c){if(!c)return"";return`${new Date(c).getHours().toString().padStart(2,"0")}:00`}function j0(c){if(!c)return"";let f=typeof c==="string"?new Date(c):c,h=f.getHours(),$=f.getMinutes();return`${h.toString().padStart(2,"0")}:${$.toString().padStart(2,"0")}`}function y0(c,f=null,h=null,$=null){let F=null,b=null;if(f&&$&&$.states[f]){let W=$.states[f];F=new Date(W.state)}if(h&&$&&$.states[h]){let W=$.states[h];b=new Date(W.state)}if(!F||!b){if(c&&c.attributes){let W=c.attributes;if(!F&&(W.forecast_sunrise||W.sunrise))F=new Date(W.forecast_sunrise||W.sunrise);if(!b&&(W.forecast_sunset||W.sunset))b=new Date(W.forecast_sunset||W.sunset)}}return{sunrise:F,sunset:b,hasSunData:!!(F&&b)}}function N0(c){let f=new Date;if(c.hasSunData&&c.sunrise&&c.sunset){let h=f.getTime(),$=c.sunrise.getTime(),F=c.sunset.getTime();if($-h>43200000)$-=86400000;if(F-h>43200000)F-=86400000;let b=$-3600000,W=$+3600000,k=F-3600000,_=F+3600000;if(h>=b&&h<W)return{type:"sunrise",progress:(h-b)/(W-b)};if(h>=W&&h<k)return{type:"day",progress:(h-W)/(k-W)};if(h>=k&&h<_)return{type:"sunset",progress:(h-k)/(_-k)};return{type:"night",progress:0}}return rc()}class J{ctx;constructor(c){this.ctx=c}drawCloud(c,f,h,$){let F=this.ctx.shadowBlur,b=this.ctx.shadowColor,W=this.ctx.globalAlpha;this.ctx.shadowBlur=h*0.25,this.ctx.shadowColor=`rgba(255, 255, 255, ${$*0.4})`,this.ctx.globalAlpha=$*0.85,this.ctx.fillStyle="rgba(255, 255, 255, 1)",[{x:c,y:f,r:h*0.4},{x:c+h*0.35,y:f,r:h*0.5},{x:c+h*0.65,y:f,r:h*0.48},{x:c+h*0.92,y:f,r:h*0.38},{x:c+h*0.18,y:f-h*0.28,r:h*0.38},{x:c+h*0.52,y:f-h*0.32,r:h*0.42},{x:c+h*0.78,y:f-h*0.28,r:h*0.38},{x:c+h*0.32,y:f-h*0.42,r:h*0.32},{x:c+h*0.62,y:f-h*0.48,r:h*0.36},{x:c+h*0.82,y:f-h*0.42,r:h*0.32}].forEach((_)=>{this.ctx.beginPath(),this.ctx.arc(_.x,_.y,_.r,0,Math.PI*2),this.ctx.fill()}),this.ctx.shadowBlur=F,this.ctx.shadowColor=b,this.ctx.globalAlpha=W}drawClouds(c,f,h,$=0.5){let F=Math.max(2,Math.floor(f/150*$));for(let b=0;b<F;b++){let W=(c*3+b*150)%(f+200)-100,k=h*(0.2+b%3*0.15)+Math.sin(c*0.2+b)*8,_=40+b%3*15,G=0.6+b%2*0.2;this.drawCloud(W,k,_,G)}}}class d0 extends J{draw(c,f,h,$){let F=Date.now()*0.001,b=kc($,f,h),W=b.x,k=b.y;if($.type==="day"||$.type==="sunrise"||$.type==="sunset"){if(this.drawSun(W,k,F),$.type==="sunrise"||$.type==="sunset")this.drawHorizonReflection(W,k,h,F)}else if($.type==="night")this.drawNightSky(f,h,F);this.drawClouds(F,f,h,0.3)}drawSun(c,f,h){let $=48+Math.sin(h*0.15)*1.5,F=this.ctx.createRadialGradient(c,f,$*0.3,c,f,$*3.5);F.addColorStop(0,"rgba(255, 248, 230, 0.25)"),F.addColorStop(0.15,"rgba(255, 240, 200, 0.2)"),F.addColorStop(0.3,"rgba(255, 230, 170, 0.15)"),F.addColorStop(0.5,"rgba(255, 220, 140, 0.1)"),F.addColorStop(0.7,"rgba(255, 210, 120, 0.06)"),F.addColorStop(0.85,"rgba(255, 200, 100, 0.03)"),F.addColorStop(1,"rgba(255, 190, 90, 0)"),this.ctx.fillStyle=F,this.ctx.beginPath(),this.ctx.arc(c,f,$*3.5,0,Math.PI*2),this.ctx.fill();let b=this.ctx.createRadialGradient(c,f,$*0.5,c,f,$*2.2);b.addColorStop(0,"rgba(255, 250, 220, 0.35)"),b.addColorStop(0.3,"rgba(255, 240, 190, 0.25)"),b.addColorStop(0.6,"rgba(255, 230, 160, 0.15)"),b.addColorStop(0.85,"rgba(255, 220, 140, 0.08)"),b.addColorStop(1,"rgba(255, 210, 120, 0)"),this.ctx.fillStyle=b,this.ctx.beginPath(),this.ctx.arc(c,f,$*2.2,0,Math.PI*2),this.ctx.fill();let W=this.ctx.createRadialGradient(c,f,$*0.6,c,f,$*1.6);W.addColorStop(0,"rgba(255, 252, 240, 0.5)"),W.addColorStop(0.4,"rgba(255, 245, 210, 0.35)"),W.addColorStop(0.7,"rgba(255, 235, 180, 0.2)"),W.addColorStop(1,"rgba(255, 225, 150, 0)"),this.ctx.fillStyle=W,this.ctx.beginPath(),this.ctx.arc(c,f,$*1.6,0,Math.PI*2),this.ctx.fill();let k=this.ctx.createRadialGradient(c-$*0.1,f-$*0.1,0,c,f,$);k.addColorStop(0,"#FFFEF5"),k.addColorStop(0.15,"#FFF9E6"),k.addColorStop(0.3,"#FFF4D6"),k.addColorStop(0.5,"#FFEDC0"),k.addColorStop(0.7,"#FFE4A8"),k.addColorStop(0.85,"#FFDC95"),k.addColorStop(1,"#FFD37F"),this.ctx.fillStyle=k,this.ctx.beginPath(),this.ctx.arc(c,f,$,0,Math.PI*2),this.ctx.fill()}drawHorizonReflection(c,f,h,$){let F=48+Math.sin($*0.15)*1.5,b=h*0.85;if(f>=b-50){let W=Math.max(0,(b-f)/50)*0.3;this.ctx.fillStyle=`rgba(255, 140, 0, ${W})`,this.ctx.beginPath(),this.ctx.ellipse(c,b,F*1.5,F*0.5,0,0,Math.PI*2),this.ctx.fill()}}drawNightSky(c,f,h){this.ctx.fillStyle="#FFFFFF";for(let b=0;b<20;b++){let W=(c*0.2+b*47)%c,k=(f*0.2+b*23)%(f*0.6),_=Math.sin(h*0.8+b)*0.5+0.5;this.ctx.globalAlpha=_*0.8,this.ctx.beginPath(),this.ctx.arc(W,k,1.5,0,Math.PI*2),this.ctx.fill()}let $=c*0.75,F=f*0.3;this.ctx.globalAlpha=0.9,this.ctx.fillStyle="#F0F0F0",this.ctx.beginPath(),this.ctx.arc($,F,25,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#1a1a2e",this.ctx.beginPath(),this.ctx.arc($-8,F-5,22,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1}}class m extends J{rainDrops=[];lastTime=0;draw(c,f,h,$,F=!1){let b=Date.now()*0.001;this.drawClouds(b,f,h,F?1:0.8),this.drawRain(f,h,F)}drawRain(c,f,h){let $=h?130:90;if(this.rainDrops.length!==$){this.rainDrops=[];for(let k=0;k<$;k++)this.rainDrops.push({x:Math.random()*c,y:Math.random()*f-Math.random()*200,speed:h?80+Math.random()*100:60+Math.random()*80,windOffset:(Math.random()-0.5)*30,width:h?1.2+Math.random()*1:0.8+Math.random()*0.7,length:h?8+Math.random()*10:6+Math.random()*8,alpha:h?0.75+Math.random()*0.15:0.65+Math.random()*0.2,phase:Math.random()*Math.PI*2})}let F=Date.now()*0.001,b=this.lastTime>0?Math.min(F-this.lastTime,0.1):0.016666666666666666;this.lastTime=F;let W=F;for(let k=0;k<this.rainDrops.length;k++){let _=this.rainDrops[k];if(_.y+=_.speed*b,_.y>f+50)_.y=-50-Math.random()*100,_.x=Math.random()*c;let G=_.windOffset*(1+Math.sin(W*0.5+_.phase)*0.2),w=_.x+G;if(w<-10)_.x=c+10;else if(w>c+10)_.x=-10;this.drawRainDrop(w,_.y,_)}}drawRainDrop(c,f,h){this.ctx.save(),this.ctx.globalAlpha=h.alpha;let $=f-h.length*0.5,F=f+h.length*0.5,b=h.alpha,W=h.alpha*0.5;this.ctx.fillStyle="rgba(220, 240, 255, "+b+")",this.ctx.strokeStyle="rgba(240, 250, 255, "+W+")",this.ctx.lineWidth=0.4,this.ctx.beginPath(),this.ctx.moveTo(c,$),this.ctx.quadraticCurveTo(c-h.width*0.3,f,c-h.width,F-h.width*0.3),this.ctx.arc(c,F,h.width,Math.PI,0,!1),this.ctx.quadraticCurveTo(c+h.width*0.3,f,c,$),this.ctx.closePath(),this.ctx.fill(),this.ctx.stroke(),this.ctx.restore()}}class M0 extends J{snowflakes=[];lastTime=0;draw(c,f,h,$){let F=Date.now()*0.001;this.drawClouds(F,f,h,0.7),this.drawSnowflakes(f,h)}drawSnowflakes(c,f){let h=Math.floor(c*f/5000),$=Math.max(30,Math.min(h,80));if(this.snowflakes.length!==$){this.snowflakes=[];for(let k=0;k<$;k++)this.snowflakes.push({x:Math.random()*c,y:Math.random()*f-Math.random()*100,speedY:15+Math.random()*10,speedX:(Math.random()-0.5)*8,size:1.5+Math.random()*1.5,alpha:0.6+Math.random()*0.3,rotation:Math.random()*Math.PI*2,rotationSpeed:(Math.random()-0.5)*0.3,swayPhase:Math.random()*Math.PI*2,swaySpeed:0.5+Math.random()*0.5})}let F=Date.now()*0.001,b=this.lastTime>0?Math.min(F-this.lastTime,0.1):0.016666666666666666;this.lastTime=F;let W=F;this.ctx.lineCap="round";for(let k=0;k<this.snowflakes.length;k++){let _=this.snowflakes[k],G=Math.sin(W*_.swaySpeed+_.swayPhase)*2;if(_.y+=_.speedY*b,_.x+=(_.speedX+G)*b,_.rotation+=_.rotationSpeed*b,_.y>f+20)_.y=-20-Math.random()*50,_.x=Math.random()*c;if(_.x<-10)_.x=c+10;else if(_.x>c+10)_.x=-10;this.drawSnowflake(_.x,_.y,_.size,_.alpha,_.rotation)}}drawSnowflake(c,f,h,$,F){this.ctx.save(),this.ctx.translate(c,f),this.ctx.rotate(F),this.ctx.strokeStyle=`rgba(255, 255, 255, ${$})`,this.ctx.lineWidth=1,this.ctx.beginPath();for(let b=0;b<6;b++){let W=Math.PI/3*b,k=Math.cos(W),_=Math.sin(W);this.ctx.moveTo(0,0),this.ctx.lineTo(_*h*2.5,k*h*2.5);let G=_*h*1.5+k*h*0.5,w=k*h*1.5-_*h*0.5,B=_*h*1.8+k*h*1.2,d=k*h*1.8-_*h*1.2;this.ctx.moveTo(G,w),this.ctx.lineTo(B,d);let q=_*h*1.5-k*h*0.5,i=k*h*1.5+_*h*0.5,Zc=_*h*1.8-k*h*1.2,qc=k*h*1.8+_*h*1.2;this.ctx.moveTo(q,i),this.ctx.lineTo(Zc,qc)}this.ctx.stroke(),this.ctx.restore()}}class i0 extends J{draw(c,f,h,$){let F=Date.now()*0.001;this.drawClouds(F,f,h,0.7)}}class I0 extends J{draw(c,f,h,$){let F=Date.now()*0.0003;this.ctx.fillStyle="rgba(200, 200, 200, 0.4)";for(let b=0;b<3;b++){let W=h*(0.4+b*0.2),k=Math.sin(F+b)*20;this.ctx.beginPath(),this.ctx.moveTo(0,W);for(let _=0;_<=f;_+=5){let G=Math.sin((_/f+F)*Math.PI*4+b)*15;this.ctx.lineTo(_,W+G+k)}this.ctx.lineTo(f,h),this.ctx.lineTo(0,h),this.ctx.closePath(),this.ctx.fill()}}}class Y0 extends J{hailStones=[];draw(c,f,h,$){let F=Date.now()*0.001;this.drawClouds(F,f,h,1),this.drawHailStones(f,h)}drawHailStones(c,f){if(this.hailStones.length!==60){this.hailStones=[];for(let F=0;F<60;F++)this.hailStones.push({startX:Math.random()*c,startY:Math.random()*(f+150)-75,speed:120+Math.random()*80,windOffset:(Math.random()-0.5)*20,size:2+Math.random()*3,alpha:0.8+Math.random()*0.15,phase:Math.random()*Math.PI*2})}let $=Date.now()*0.002;this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.strokeStyle="rgba(255, 255, 255, 0.9)",this.ctx.lineWidth=0.5;for(let F=0;F<this.hailStones.length;F++){let b=this.hailStones[F],W=(b.startY+$*b.speed)%(f+150);if(W>f+30)b.startY=-30-Math.random()*30,b.startX=Math.random()*c;let k=b.windOffset*(1+Math.sin($*0.6+b.phase)*0.15),_=(b.startX+k+$*20%c)%c;if(_<-5)b.startX=c+5;else if(_>c+5)b.startX=-5;this.drawHailStone(_,W,b)}}drawHailStone(c,f,h){this.ctx.save(),this.ctx.globalAlpha=h.alpha,this.ctx.beginPath(),this.ctx.ellipse(c,f,h.size,h.size*0.9,0,0,Math.PI*2),this.ctx.fill(),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.beginPath(),this.ctx.ellipse(c-h.size*0.3,f-h.size*0.3,h.size*0.3,h.size*0.25,0,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="rgba(240, 250, 255, 1)",this.ctx.restore()}}class X0 extends J{rainyAnimation;constructor(c){super(c);this.rainyAnimation=new m(c)}draw(c,f,h,$,F=!0){let b=Date.now()*0.001;if(this.drawClouds(b,f,h,1),F)this.rainyAnimation.draw(c,f,h,$,!1);this.drawLightning(f,h,b)}drawLightning(c,f,h){let $=Math.sin(h*2.5)*Math.sin(h*5.3)*Math.sin(h*7.1),F=Math.max(0,$);if(F>0.4){let b=(F-0.4)/0.6,W=b*0.6,k=Math.min(W,Math.sin(b*Math.PI)*0.6);this.ctx.fillStyle=`rgba(255, 255, 255, ${k})`,this.ctx.fillRect(0,0,c,f)}}}var Kc=z0`
  :host {
    display: block;
    --card-width: 100%;
    --card-height: 200px;
    --primary-color: #007AFF;
    --day-gradient-start: #87CEEB;
    --day-gradient-end: #E0F6FF;
    --night-gradient-start: #1a1a2e;
    --night-gradient-end: #16213e;
    --sunset-gradient-start: #FF6B6B;
    --sunset-gradient-end: #FFA07A;
    --sunrise-gradient-start: #FFA07A;
    --sunrise-gradient-end: #FFD700;
    --overlay-opacity: 0.1;
  }

  ha-card {
    overflow: hidden;
    background: transparent;
    box-shadow: none;
    position: relative;
    z-index: 0;
    isolation: isolate;
  }

  .weather-card {
    position: relative;
    width: var(--card-width);
    min-height: var(--card-height, 200px);
    border-radius: 16px;
    overflow: visible;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, var(--day-gradient-start), var(--day-gradient-end));
    transition: background 2s ease-in-out, min-height 0.3s ease;
  }

  .weather-card.night {
    background: linear-gradient(135deg, var(--night-gradient-start), var(--night-gradient-end));
  }

  .weather-card.sunset {
    background: linear-gradient(135deg, var(--sunset-gradient-start), var(--sunset-gradient-end));
  }

  .weather-card.sunrise {
    background: linear-gradient(135deg, var(--sunrise-gradient-start), var(--sunrise-gradient-end));
  }

  .canvas-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    pointer-events: none;
  }

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* Dark overlay for better text contrast */
  .weather-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 0.8)) 0%,
      rgba(0, 0, 0, calc(var(--overlay-opacity) * 1.2)) 100%
    );
    z-index: 0;
    border-radius: 16px;
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    text-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 2px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .location {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.9;
  }

  .temperature {
    font-size: 64px;
    font-weight: 100;
    line-height: 1;
    margin: 0;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .condition {
    font-size: 20px;
    font-weight: 400;
    opacity: 0.9;
  }

  .feels-like {
    font-size: 16px;
    opacity: 0.85;
    margin-top: 8px;
  }

  .temp-range {
    font-size: 18px;
    opacity: 0.9;
    margin-top: 8px;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .temp-min {
    font-size: 14px;
    opacity: 0.7;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 12px;
    font-size: 13px;
    opacity: 0.9;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .info-icon {
    font-size: 16px;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .info-icon svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  .forecast-container {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .forecast-title {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .forecast-scroll {
    display: flex;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 12px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .forecast-scroll::-webkit-scrollbar {
    height: 6px;
  }

  .forecast-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }

  .forecast-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  .forecast-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    min-width: 60px;
  }

  .forecast-time {
    font-size: 12px;
    opacity: 0.7;
    font-weight: 400;
  }

  .forecast-icon {
    line-height: 1;
  }

  .forecast-icon svg {
    width: 32px;
    height: 32px;
    display: block;
  }

  .forecast-temp {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.9;
  }

  .clock {
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 48px;
    font-weight: 200;
    line-height: 1;
    color: white;
    text-shadow:
      0 1px 2px rgba(0, 0, 0, 0.4),
      0 2px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 2;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .clock {
      font-size: 36px;
      bottom: 16px;
      right: 16px;
    }
  }
`;var ac={wind:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.64 20a5 5 0 113.61 8.46h-35.5">
        <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" values="-57; 57"/>
      </path>
      <path fill="none" stroke="currentColor" stroke-dasharray="24 15" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M29.14 44a5 5 0 103.61-8.46h-21">
        <animate attributeName="stroke-dashoffset" begin="-1.5s" dur="2s" repeatCount="indefinite" values="-39; 39"/>
      </path>
    </svg>
  `,humidity:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"/>
      <path fill="currentColor" opacity="0.8" d="M26.24 30.19a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3.05 3.05 0 01-2.12.68 3 3 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.74-1.92zm11-.23a.42.42 0 01-.08.4L29 41.69a1.37 1.37 0 01-.44.44 1.87 1.87 0 01-.72.09h-.67c-.2 0-.33-.06-.38-.18s0-.25.09-.42l8.2-11.35a1 1 0 01.41-.41 2 2 0 01.67-.08h.76q.27 0 .34.22zm-8.9 1.17c-.79 0-1.19.36-1.19 1.07v1c0 .71.4 1.07 1.19 1.07s1.19-.36 1.19-1.07v-1c.02-.71-.38-1.07-1.17-1.07zm5.16 5.63a3 3 0 012.12-.69 3 3 0 012.12.69 2.51 2.51 0 01.74 1.92v1.24a2.48 2.48 0 01-.74 1.9 3 3 0 01-2.12.68 3.05 3.05 0 01-2.12-.68 2.48 2.48 0 01-.74-1.9v-1.24a2.51 2.51 0 01.76-1.92zm2.12.94c-.79 0-1.19.35-1.19 1.07v1c0 .73.4 1.09 1.19 1.09s1.19-.36 1.19-1.09v-1c.02-.72-.38-1.07-1.17-1.07z"/>
    </svg>
  `,sunrise:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 25l-6.34 6.34M14 16v2m18 12a10 10 0 00-10 10m24 0a10 10 0 00-10-10m22 16H6m50.34-16L50 23.66"/>
      <circle cx="32" cy="40" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 40a14 14 0 00-28 0"/>
    </svg>
  `,sunset:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 41l-6.34-6.34M14 50v-2m18-12a10 10 0 0110 10m-24 0a10 10 0 0110-10M6 52h52M7.66 42L14 48.34"/>
      <circle cx="32" cy="46" r="5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <path fill="none" stroke="currentColor" stroke-dasharray="2 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 46a14 14 0 01-28 0"/>
    </svg>
  `},Ac=(c)=>A`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style="transform: rotate(${c}deg); transform-origin: center;">
    <path fill="currentColor" d="M12 2L4 20L12 17L20 20L12 2Z"/>
  </svg>
`,tc={sunny:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,clear:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"/>
        <animateTransform attributeName="transform" dur="45s" from="0 32 32" repeatCount="indefinite" to="360 32 32" type="rotate"/>
      </g>
    </svg>
  `,"clear-night":A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/>
        <animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/>
      </g>
    </svg>
  `,partlycloudy:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="partly-cloudy-clip">
          <path fill="none" d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#partly-cloudy-clip)">
        <g>
          <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"/>
          <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate"/>
        </g>
      </g>
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
    </svg>
  `,overcast:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <clipPath id="overcast-clip-a">
          <path fill="none" d="M12 35l-8-1-1-10 2-8 5-4 4.72-2.21h6L29 10l4 3v7l-6 4h-6l-3 3v4l-4 2-2 2z"/>
        </clipPath>
        <clipPath id="overcast-clip-b">
          <path fill="none" d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#overcast-clip-a)">
        <g>
          <g>
            <path fill="none" stroke="#f59e0b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"/>
            <animateTransform attributeName="transform" dur="45s" from="0 19 24" repeatCount="indefinite" to="360 19 24" type="rotate"/>
          </g>
          <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="3 0; -3 0; 3 0"/>
        </g>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
      <g clip-path="url(#overcast-clip-b)">
        <path fill="none" stroke="#9ca3af" stroke-linejoin="round" stroke-width="2" d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-2.1 0; 2.1 0; -2.1 0"/>
      </g>
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,cloudy:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,rainy:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,rain:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,pouring:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
    </svg>
  `,snowy:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="31" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="24" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
        <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
        <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
    </svg>
  `,snow:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="31" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/>
        <animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="24" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/>
        <animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.25" fill="none" stroke="#72b8d4" stroke-miterlimit="10"/>
        <path fill="none" stroke="#72b8d4" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/>
        <animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/>
        <animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/>
        <animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/>
      </g>
    </svg>
  `,foggy:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"/>
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"/>
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
    </svg>
  `,fog:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"/>
        <animateTransform attributeName="transform" begin="0s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
      <g>
        <path fill="none" stroke="#d1d5db" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"/>
        <animateTransform attributeName="transform" begin="-4s" dur="5s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/>
      </g>
    </svg>
  `,hail:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="24" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="31" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
    </svg>
  `,"snowy-rainy":A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <circle cx="24" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="31" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
      <g>
        <circle cx="38" cy="45" r="1.5" fill="#72b8d4"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="1 -5; -2 18; -4 14"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/>
      </g>
    </svg>
  `,lightning:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"/>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/>
      </g>
    </svg>
  `,"lightning-rainy":A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path fill="none" stroke="#e5e7eb" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"/>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"/>
        <animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/>
        <animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/>
      </g>
      <g>
        <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z"/>
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/>
      </g>
    </svg>
  `,windy:A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `,"windy-variant":A`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <g>
        <path fill="none" stroke="#e5e7eb" stroke-linejoin="round" stroke-width="3" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/>
        <animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/>
      </g>
    </svg>
  `};function u(c,...f){let h=ac[c];if(typeof h==="function")return h(...f);return h||""}function Gc(c){if(!c)return"";return tc[c.toLowerCase()]||""}class L0 extends L{animationFrame=null;canvas=null;ctx=null;canvasWidth=0;canvasHeight=0;animations={};holdTimer=null;holdDelay=500;clockInterval=null;resizeObserver=null;_wheelHandler=null;lastTap=null;holdFired=!1;_testTimeOfDay;static get styles(){return Kc}constructor(){super();this.currentTime="";this.config={}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{setTimeout(()=>{if(this.setupCanvas(),this.canvas&&this.ctx)this.initializeAnimations(),this.startAnimation(),this.setupResizeObserver();this.setupForecastScroll(),this.startClock()},100)})}disconnectedCallback(){if(super.disconnectedCallback(),this.animationFrame)cancelAnimationFrame(this.animationFrame),this.animationFrame=null;if(this.resizeObserver)this.resizeObserver.disconnect(),this.resizeObserver=null;if(this._wheelHandler&&this.shadowRoot){let c=this.shadowRoot.querySelector(".forecast-scroll");if(c)c.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=null}if(this.clockInterval)clearInterval(this.clockInterval),this.clockInterval=null}updated(c){if(super.updated(c),c.has("hass")||c.has("config")){if(this.canvas&&this.ctx)this.resizeCanvas();this.setupForecastScroll()}}initializeAnimations(){if(!this.ctx)return;this.animations={sunny:new d0(this.ctx),rainy:new m(this.ctx),snowy:new M0(this.ctx),cloudy:new i0(this.ctx),foggy:new I0(this.ctx),hail:new Y0(this.ctx),thunderstorm:new X0(this.ctx)}}setupResizeObserver(){if(!this.shadowRoot)return;let c=this.shadowRoot.querySelector(".canvas-container");if(!c)return;this.resizeObserver=new ResizeObserver(()=>{this.resizeCanvas()}),this.resizeObserver.observe(c)}setupForecastScroll(){if(!this.shadowRoot)return;let c=this.shadowRoot.querySelector(".forecast-scroll");if(!c)return;if(this._wheelHandler)c.removeEventListener("wheel",this._wheelHandler);this._wheelHandler=(f)=>{let h=f;if(h.deltaY!==0)f.preventDefault(),c.scrollLeft+=h.deltaY},c.addEventListener("wheel",this._wheelHandler,{passive:!1})}resizeCanvas(){if(!this.canvas||!this.shadowRoot)return;let c=this.shadowRoot.querySelector(".canvas-container");if(!c)return;let f=c.getBoundingClientRect();if(f.width===0||f.height===0)return;let h=window.devicePixelRatio||2;if(this.canvas.width=f.width*h,this.canvas.height=f.height*h,this.canvas.style.width="100%",this.canvas.style.height="100%",this.ctx=this.canvas.getContext("2d"),this.ctx)this.ctx.scale(h,h);this.canvasWidth=f.width,this.canvasHeight=f.height,this.initializeAnimations()}setupCanvas(){if(!this.shadowRoot)return;let c=this.shadowRoot.querySelector(".canvas-container");if(!c)return;let f=c.querySelector("canvas");if(f)f.remove();this.canvas=document.createElement("canvas"),c.appendChild(this.canvas),this.resizeCanvas()}getState(c){if(!this.hass||!c)return null;let f=this.hass.states[c];return f?f.state:null}getAttributes(c){if(!this.hass||!c)return{};let f=this.hass.states[c];return f?f.attributes:{}}getWeatherData(){let c=this.config.entity||"weather.home",f=this.getState(c),h=this.getAttributes(c),$=h.condition||f||"sunny",F=null;if(this.config.templowAttribute&&h[this.config.templowAttribute]!=null)F=h[this.config.templowAttribute];else{for(let b of Wc)if(h[b]!=null){F=h[b];break}if(F==null)F=(h.forecast&&h.forecast[0]?h.forecast[0].templow:null)||(h.forecast_hourly&&h.forecast_hourly[0]?h.forecast_hourly[0].native_templow:null)}return{condition:$,temperature:h.temperature!=null?h.temperature:null,apparentTemperature:h.apparent_temperature||null,humidity:h.humidity!=null?h.humidity:null,windSpeed:h.wind_speed!=null?h.wind_speed:null,windGust:h.wind_gust_speed||h.wind_gust||null,windBearing:h.wind_bearing!=null?h.wind_bearing:null,windDirection:h.wind_direction||null,pressure:h.pressure||null,forecast:h.forecast||h.forecast_hourly||[],friendlyName:h.friendly_name||this.translateKey("weather"),templow:F}}getTodayForecast(){if(!this.hass||!this.config)return[];let c=this.getWeatherData();if(!c.forecast||c.forecast.length===0)return[];let f=new Date,h=new Date(f.getFullYear(),f.getMonth(),f.getDate()),$=new Date(h);return $.setDate($.getDate()+1),c.forecast.filter((b)=>{if(!b.datetime)return!1;let W=new Date(b.datetime),k=new Date(W.getFullYear(),W.getMonth(),W.getDate());return k.getTime()===h.getTime()||k.getTime()===$.getTime()&&W.getHours()<=f.getHours()}).sort((b,W)=>new Date(b.datetime).getTime()-new Date(W.datetime).getTime()).slice(0,8)}startAnimation(){let c=()=>{this.draw(),this.animationFrame=requestAnimationFrame(c)};c()}draw(){if(!this.ctx||!this.canvas)return;if(!this.canvasWidth||!this.canvasHeight){if(this.resizeCanvas(),!this.canvasWidth||!this.canvasHeight)return}let c=this.canvasWidth,f=this.canvasHeight;this.ctx.clearRect(0,0,c,f);let h=this.getWeatherData(),$=this.hass?.states[this.config.entity],F=y0($||{},this.config.sunriseEntity,this.config.sunsetEntity,this.hass),b=this._testTimeOfDay||N0(F);switch(h.condition.toLowerCase()){case"sunny":case"clear":this.animations.sunny?.draw(Date.now(),c,f,b);break;case"clear-night":this.animations.sunny?.draw(Date.now(),c,f,{type:"night",progress:0});break;case"rainy":case"rain":this.animations.rainy?.draw(Date.now(),c,f,b,!1);break;case"pouring":this.animations.rainy?.draw(Date.now(),c,f,b,!0);break;case"snowy":case"snow":this.animations.snowy?.draw(Date.now(),c,f,b);break;case"snowy-rainy":this.animations.rainy?.draw(Date.now(),c,f,b,!1),this.animations.snowy?.draw(Date.now(),c,f,b);break;case"hail":this.animations.hail?.draw(Date.now(),c,f,b);break;case"foggy":case"fog":this.animations.foggy?.draw(Date.now(),c,f,b);break;case"lightning":this.animations.thunderstorm?.draw(Date.now(),c,f,b,!1);break;case"lightning-rainy":this.animations.thunderstorm?.draw(Date.now(),c,f,b,!0);break;case"cloudy":case"partlycloudy":default:this.animations.cloudy?.draw(Date.now(),c,f,b);break}}renderTodayForecast(){let c=this.getTodayForecast();if(c.length===0)return Q`<div style="opacity: 0.6; font-size: 14px;">${this.translateKey("forecast_unavailable")}</div>`;return Q`
      <div class="forecast-scroll">
        ${c.map((f)=>Q`
          <div class="forecast-item">
            <div class="forecast-time">${wc(f.datetime)}</div>
            <div class="forecast-icon">${Gc(f.condition||"sunny")}</div>
            <div class="forecast-temp">${Math.round(f.temperature||f.temp||f.native_temperature||0)}°</div>
          </div>
        `)}
      </div>
    `}getLanguage(){if(this.config.language&&this.config.language!=="auto")return this.config.language;if(this.hass&&this.hass.language){if(this.hass.language.split("-")[0]==="ru")return"ru";return"en"}return"en"}getConditionName(c){let f=this.getLanguage();return(H0[f]||H0.en)[c.toLowerCase()]||c}translateKey(c){let f=this.getLanguage();return(C0[f]||C0.en)[c]||c}convertWindSpeed(c){if(c==null)return null;if(this.config.windSpeedUnit==="kmh")return Math.round(c*3.6*10)/10;return c}getWindSpeedUnit(){return this.config.windSpeedUnit==="kmh"?this.translateKey("wind_unit_kmh"):this.translateKey("wind_unit_ms")}formatCurrentTime(){let c=new Date,f=String(c.getHours()).padStart(2,"0"),h=String(c.getMinutes()).padStart(2,"0");return`${f}:${h}`}startClock(){if(!this.config.showClock)return;this.currentTime=this.formatCurrentTime(),this.clockInterval=window.setInterval(()=>{this.currentTime=this.formatCurrentTime()},1000)}render(){if(!this.hass)return Q`<div>No Home Assistant connection</div>`;let c=this.getWeatherData(),f=this.hass.states[this.config.entity],h=y0(f,this.config.sunriseEntity,this.config.sunsetEntity,this.hass),$=this._testTimeOfDay||N0(h),F=`weather-card ${$.type}`,b=this.config.height?`${this.config.height}px`:"200px",W=_c($),k=W?`background: linear-gradient(135deg, rgb(${W.start.r}, ${W.start.g}, ${W.start.b}), rgb(${W.end.r}, ${W.end.g}, ${W.end.b}));`:"",G=`--overlay-opacity: ${this.config.overlayOpacity!==void 0?this.config.overlayOpacity:R.overlayOpacity};`;return Q`
      <ha-card
        @click=${this.handleTap}
        @pointerdown=${this.handlePointerDown}
        @pointerup=${this.handlePointerUp}
        @pointercancel=${this.handlePointerUp}
      >
        <div class="${F}" style="min-height: ${b}; ${k}; ${G} cursor: pointer;">
          <div class="canvas-container"></div>
          <div class="content">
            ${this.config.name!==void 0?Q`
              <div class="header">
                <div class="location">${this.config.name||c.friendlyName}</div>
              </div>
            `:""}
            <div>
              <div class="condition">${this.getConditionName(c.condition)}</div>
              <div class="temperature">${c.temperature!=null?Math.round(c.temperature)+"°":this.translateKey("no_data")}</div>
              ${this.config.showMinTemp&&c.templow?Q`
                <div class="temp-range">
                  <span class="temp-min">↓ ${Math.round(c.templow)}°</span>
                </div>
              `:""}
              ${this.config.showFeelsLike&&c.apparentTemperature?Q`
                <div class="feels-like">${this.translateKey("feels_like")} ${Math.round(c.apparentTemperature)}°</div>
              `:""}
            </div>
            <div class="details">
              <div class="info-grid">
                ${this.config.showHumidity&&c.humidity!=null?Q`
                  <div class="info-item">
                    <span class="info-icon">${u("humidity")}</span>
                    <span>${c.humidity} %</span>
                  </div>
                `:""}
                ${this.config.showSunriseSunset&&h.hasSunData?Q`
                  <div class="info-item">
                    <span class="info-icon">${u("sunrise")}</span>
                    <span>${j0(h.sunrise)}</span>
                  </div>
                `:""}
                ${this.config.showWind&&c.windSpeed!=null?Q`
                  ${this.config.showWindDirection&&c.windBearing!=null?Q`
                    <div class="info-item">
                      <span class="info-icon">${Ac(c.windBearing)}</span>
                      <span>${this.convertWindSpeed(c.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&c.windGust?` / ${this.convertWindSpeed(c.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `:Q`
                    <div class="info-item">
                      <span class="info-icon">${u("wind")}</span>
                      <span>${this.convertWindSpeed(c.windSpeed)} ${this.getWindSpeedUnit()}${this.config.showWindGust&&c.windGust?` / ${this.convertWindSpeed(c.windGust)} ${this.getWindSpeedUnit()}`:""}</span>
                    </div>
                  `}
                `:""}
                ${this.config.showSunriseSunset&&h.hasSunData?Q`
                  <div class="info-item">
                    <span class="info-icon">${u("sunset")}</span>
                    <span>${j0(h.sunset)}</span>
                  </div>
                `:""}
              </div>
            </div>
            ${this.config.showForecast?Q`
              <div class="forecast-container">
                <div class="forecast-title">${this.translateKey("forecast_title")}</div>
                ${this.renderTodayForecast()}
              </div>
            `:""}
          </div>
          ${this.config.showClock?Q`
            <div class="clock">${this.currentTime}</div>
          `:""}
        </div>
      </ha-card>
    `}setConfig(c){if(!c.entity)throw Error("Please define a weather entity");this.config={type:"custom:animated-weather-card",entity:c.entity,icons_path:c.icons_path,name:c.name,height:c.height||R.height,showFeelsLike:c.show_feels_like!==!1,showWind:c.show_wind!==!1,showWindGust:c.show_wind_gust!==!1,showWindDirection:c.show_wind_direction!==!1,showHumidity:c.show_humidity!==!1,showMinTemp:c.show_min_temp!==!1,showForecast:c.show_forecast===!0,showSunriseSunset:c.show_sunrise_sunset!==!1,showClock:c.show_clock===!0,overlayOpacity:c.overlay_opacity!==void 0?c.overlay_opacity:R.overlayOpacity,language:c.language||R.language,windSpeedUnit:c.wind_speed_unit||R.windSpeedUnit,sunriseEntity:c.sunrise_entity||null,sunsetEntity:c.sunset_entity||null,templowAttribute:c.templow_attribute||null,tapAction:c.tap_action||{action:"more-info"},holdAction:c.hold_action||{action:"none"},doubleTapAction:c.double_tap_action||{action:"none"}}}handleAction(c){if(!c||!this.hass)return;switch(c.action||"more-info"){case"more-info":this.fireEvent("hass-more-info",{entityId:c.entity||this.config.entity});break;case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:c.entity||this.config.entity});break;case"call-service":if(c.service){let[h,$]=c.service.split(".");this.hass.callService(h,$,c.service_data||{})}break;case"navigate":if(c.navigation_path)window.history.pushState(null,"",c.navigation_path),this.fireEvent("location-changed",{replace:!1});break;case"url":if(c.url_path)window.open(c.url_path);break;case"none":default:break}}fireEvent(c,f={}){let h=new CustomEvent(c,{detail:f,bubbles:!0,composed:!0});this.dispatchEvent(h)}handleTap(c){if(c.target.closest(".forecast-item")||c.target.closest(".info-item"))return;if(this.lastTap&&Date.now()-this.lastTap<300){this.handleDoubleTap(c),this.lastTap=null;return}this.lastTap=Date.now(),setTimeout(()=>{if(this.lastTap)this.handleAction(this.config.tapAction),this.lastTap=null},300)}handlePointerDown(c){this.holdTimer=window.setTimeout(()=>{this.handleHold(c),this.holdFired=!0},this.holdDelay)}handlePointerUp(c){if(this.holdTimer)clearTimeout(this.holdTimer);if(this.holdFired)c.preventDefault(),c.stopPropagation(),this.holdFired=!1}handleHold(c){this.handleAction(this.config.holdAction)}handleDoubleTap(c){this.handleAction(this.config.doubleTapAction)}getCardSize(){return 1}}r([n({type:Object})],L0.prototype,"hass",void 0),r([n({type:Object})],L0.prototype,"config",void 0),r([Fc()],L0.prototype,"currentTime",void 0);try{customElements.define("dynamic-weather-card",L0),console.log(`%cDynamic Weather Card %c${bc}`,"color: #007AFF; font-weight: bold; font-size: 14px;","color: #666; font-size: 12px;",`
Динамическая карточка погоды`),window.customCards=window.customCards||[];let c={type:"dynamic-weather-card",name:"Dynamic Weather Card",description:"Динамическая карточка погоды",preview:!0,documentationURL:"https://github.com/teuchezh/dynamic-weather-card"};window.customCards.push(c)}catch(c){console.error("❌ Ошибка при регистрации Dynamic Weather Card:",c)}
