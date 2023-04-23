"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[78],{78:(te,y,s)=>{s.r(y),s.d(y,{CountriesModule:()=>W});var c=s(895),h=s(551),e=s(256),Z=s(262),v=s(646),u=s(505),A=s(4),_=s(529);let g=(()=>{class n{constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:void 0,countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(t){return this.http.get(t).pipe((0,Z.K)(()=>(0,v.of)([])))}searchCapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCapital={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchCountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCountries={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,A.U)(r=>r.length>0?r[0]:null),(0,Z.K)(r=>(0,v.of)(null)))}searchRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe((0,u.b)(r=>this.cacheStore.byRegion={region:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(_.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:1.5rem;bottom:1rem;box-shadow:0 .25rem .25rem #00000040;color:#fff;display:flex;padding:.5rem 1rem;position:fixed;right:1rem}"]}),n})();var U=s(579),S=s(727);class O extends S.w0{constructor(i,t){super()}schedule(i,t=0){return this}}const f={setInterval(n,i,...t){const{delegate:o}=f;return o?.setInterval?o.setInterval(n,i,...t):setInterval(n,i,...t)},clearInterval(n){const{delegate:i}=f;return(i?.clearInterval||clearInterval)(n)},delegate:void 0};var w=s(737);const C={now:()=>(C.delegate||Date).now(),delegate:void 0};class d{constructor(i,t=d.now){this.schedulerActionCtor=i,this.now=t}schedule(i,t=0,o){return new this.schedulerActionCtor(this,i).schedule(o,t)}}d.now=C.now;const P=new class I extends d{constructor(i,t=d.now){super(i,t),this.actions=[],this._active=!1}flush(i){const{actions:t}=this;if(this._active)return void t.push(i);let o;this._active=!0;do{if(o=i.execute(i.state,i.delay))break}while(i=t.shift());if(this._active=!1,o){for(;i=t.shift();)i.unsubscribe();throw o}}}(class B extends O{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){var o;if(this.closed)return this;this.state=i;const r=this.id,a=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(a,r,t)),this.pending=!0,this.delay=t,this.id=null!==(o=this.id)&&void 0!==o?o:this.requestAsyncId(a,this.id,t),this}requestAsyncId(i,t,o=0){return f.setInterval(i.flush.bind(i,this),o)}recycleAsyncId(i,t,o=0){if(null!=o&&this.delay===o&&!1===this.pending)return t;null!=t&&f.clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const o=this._execute(i,t);if(o)return o;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let r,o=!1;try{this.work(i)}catch(a){o=!0,r=a||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:i,scheduler:t}=this,{actions:o}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,w.P)(o,this),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,super.unsubscribe()}}});var R=s(482),F=s(403);let b=(()=>{class n{constructor(){this.debouncer=new U.x,this.initialValue="",this.placeholder="",this.onDebounce=new e.vpe}ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(function J(n,i=P){return(0,R.e)((t,o)=>{let r=null,a=null,l=null;const T=()=>{if(r){r.unsubscribe(),r=null;const p=a;a=null,o.next(p)}};function ee(){const p=l+n,x=i.now();if(x<p)return r=this.schedule(void 0,p-x),void o.add(r);T()}t.subscribe((0,F.x)(o,p=>{a=p,l=i.now(),r||(r=i.schedule(ee,n),o.add(r))},()=>{T(),o.complete()},void 0,()=>{a=r=null}))})}(500)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSubscription?.unsubscribe()}onKeyPress(t){this.debouncer.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{initialValue:"initialValue",placeholder:"placeholder"},outputs:{onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"value","placeholder","keyup"],["txtInput",""]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(r);const l=e.MAs(1);return e.KtG(o.onKeyPress(l.value))}),e.qZA()}2&t&&e.Q6J("value",o.initialValue)("placeholder",o.placeholder)},encapsulation:2}),n})();function N(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay pa\xedses que mostrar\n"),e.qZA())}const M=function(n){return["/countries/by",n]};function L(n,i){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"img",5),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"td")(11,"a",6),e._uU(12,"Info"),e.qZA()()()),2&n){const t=i.$implicit,o=i.index;e.xp6(2),e.hij(" ",o+1," "),e.xp6(2),e.Q6J("src",t.flags.svg,e.LSH)("alt",t.name.common),e.xp6(2),e.hij(" ",t.name.official," "),e.xp6(2),e.hij(" ",e.lcZ(9,6,t.population)," "),e.xp6(3),e.Q6J("routerLink",e.VKq(8,M,t.cca3))}}function V(n,i){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Bandera"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Poblaci\xf3n"),e.qZA(),e._UZ(11,"th"),e.qZA()(),e.TgZ(12,"tbody"),e.YNc(13,L,13,10,"tr",4),e.qZA()()),2&n){const t=e.oxw();e.xp6(13),e.Q6J("ngForOf",t.countries)}}let m=(()=>{class n{constructor(){this.countries=[]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(t,o){if(1&t&&(e.YNc(0,N,2,0,"div",0),e.YNc(1,V,14,1,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",0===o.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,h.rH,c.JJ],styles:["img[_ngcontent-%COMP%]{width:25px}"]}),n})();function D(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}let k=(()=>{class n{constructor(t){this.contriesService=t,this.countries=[],this.initialValue="",this.isLoading=!1}ngOnInit(){this.initialValue=this.contriesService.cacheStore.byCapital.term,this.countries=this.contriesService.cacheStore.byCapital.countries}searchByCapital(t){this.isLoading=!0,this.contriesService.searchCapital(t).subscribe(o=>{this.countries=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["contries-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return o.searchByCapital(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,D,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countries))},dependencies:[c.O5,q,b,m],encapsulation:2}),n})(),E=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.countriesService.searchCountry(t).subscribe(o=>{this.countries=o})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xeds",3,"initialValue","onDebounce"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return o.searchByCountry(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr")(9,"countries-table",3),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("countries",o.countries))},dependencies:[b,m],encapsulation:2}),n})();const Q=function(n){return{"btn-success":n}};function Y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.searchByRegion(a))}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit,o=e.oxw();e.Q6J("ngClass",e.VKq(2,Q,o.selectedRegion===t)),e.xp6(1),e.hij(" ",t," ")}}let $=(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(t){this.selectedRegion=t,this.countriesService.searchRegion(t).subscribe(o=>{this.countries=o})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn btn-primary mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","btn-primary","mx-2",3,"ngClass","click"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Regi\xf3n"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,Y,2,4,"button",2),e.qZA()(),e.TgZ(6,"div",0)(7,"div",3),e._UZ(8,"hr")(9,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",o.regions),e.xp6(4),e.Q6J("countries",o.countries))},dependencies:[c.mk,c.sg,m],encapsulation:2}),n})();var j=s(900);function K(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}function X(n,i){if(1&n&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pa\xeds: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()()()(),e.TgZ(7,"div",3)(8,"div",5)(9,"h3"),e._uU(10,"Bandera"),e.qZA(),e._UZ(11,"img",6),e.qZA(),e.TgZ(12,"div",4)(13,"h3"),e._uU(14,"Informaci\xf3n"),e.qZA(),e.TgZ(15,"ul",7)(16,"li",8)(17,"strong"),e._uU(18,"Poblaci\xf3n:"),e.qZA(),e._uU(19),e.ALo(20,"number"),e.qZA(),e.TgZ(21,"li",8)(22,"strong"),e._uU(23,"C\xf3digo:"),e.qZA(),e._uU(24),e.qZA()()()(),e.TgZ(25,"div",9)(26,"div",4)(27,"h3"),e._uU(28,"Traducciones"),e.qZA(),e.TgZ(29,"div",10)(30,"span",11),e._uU(31),e.qZA(),e.TgZ(32,"span",11),e._uU(33),e.qZA(),e.TgZ(34,"span",11),e._uU(35),e.qZA(),e.TgZ(36,"span",11),e._uU(37),e.qZA(),e.TgZ(38,"span",11),e._uU(39),e.qZA(),e.TgZ(40,"span",11),e._uU(41),e.qZA(),e.TgZ(42,"span",11),e._uU(43),e.qZA(),e.TgZ(44,"span",11),e._uU(45),e.qZA(),e.TgZ(46,"span",11),e._uU(47),e.qZA(),e.TgZ(48,"span",11),e._uU(49),e.qZA(),e.TgZ(50,"span",11),e._uU(51),e.qZA(),e.TgZ(52,"span",11),e._uU(53),e.qZA(),e.TgZ(54,"span",11),e._uU(55),e.qZA(),e.TgZ(56,"span",11),e._uU(57),e.qZA(),e.TgZ(58,"span",11),e._uU(59),e.qZA(),e.TgZ(60,"span",11),e._uU(61),e.qZA(),e.TgZ(62,"span",11),e._uU(63),e.qZA(),e.TgZ(64,"span",11),e._uU(65),e.qZA(),e.TgZ(66,"span",11),e._uU(67),e.qZA(),e.TgZ(68,"span",11),e._uU(69),e.qZA(),e.TgZ(70,"span",11),e._uU(71),e.qZA(),e.TgZ(72,"span",11),e._uU(73),e.qZA(),e.TgZ(74,"span",11),e._uU(75),e.qZA(),e.TgZ(76,"span",11),e._uU(77),e.qZA(),e.TgZ(78,"span",11),e._uU(79),e.qZA()()()()()),2&n){const t=e.oxw();e.xp6(6),e.Oqu(t.country.name.official),e.xp6(5),e.Q6J("src",t.country.flags.svg,e.LSH)("alt",t.country.name.common),e.xp6(8),e.hij(" ",e.lcZ(20,30,t.country.population)," "),e.xp6(5),e.hij(" ",t.country.cca3," "),e.xp6(7),e.Oqu(t.country.translations.ara.official),e.xp6(2),e.Oqu(t.country.translations.bre.official),e.xp6(2),e.Oqu(t.country.translations.ces.official),e.xp6(2),e.Oqu(t.country.translations.cym.official),e.xp6(2),e.Oqu(t.country.translations.deu.official),e.xp6(2),e.Oqu(t.country.translations.est.official),e.xp6(2),e.Oqu(t.country.translations.fin.official),e.xp6(2),e.Oqu(t.country.translations.fra.official),e.xp6(2),e.Oqu(t.country.translations.hrv.official),e.xp6(2),e.Oqu(t.country.translations.hun.official),e.xp6(2),e.Oqu(t.country.translations.ita.official),e.xp6(2),e.Oqu(t.country.translations.jpn.official),e.xp6(2),e.Oqu(t.country.translations.kor.official),e.xp6(2),e.Oqu(t.country.translations.nld.official),e.xp6(2),e.Oqu(t.country.translations.per.official),e.xp6(2),e.Oqu(t.country.translations.pol.official),e.xp6(2),e.Oqu(t.country.translations.por.official),e.xp6(2),e.Oqu(t.country.translations.rus.official),e.xp6(2),e.Oqu(t.country.translations.slk.official),e.xp6(2),e.Oqu(t.country.translations.spa.official),e.xp6(2),e.Oqu(t.country.translations.srp.official),e.xp6(2),e.Oqu(t.country.translations.swe.official),e.xp6(2),e.Oqu(t.country.translations.tur.official),e.xp6(2),e.Oqu(t.country.translations.urd.official),e.xp6(2),e.Oqu(t.country.translations.zho.official)}}const z=[{path:"by-capital",component:k},{path:"by-country",component:E},{path:"by-region",component:$},{path:"by/:id",component:(()=>{class n{constructor(t,o,r){this.activatedRoute=t,this.router=o,this.countriesService=r}ngOnInit(){this.activatedRoute.params.pipe((0,j.w)(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(h.gz),e.Y36(h.F0),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,o){if(1&t&&(e.YNc(0,K,2,0,"ng-template",null,0,e.W1O),e.YNc(2,X,80,32,"div",1)),2&t){const r=e.MAs(1);e.xp6(2),e.Q6J("ngIf",o.country)("ngIfElse",r)}},dependencies:[c.O5,c.JJ],encapsulation:2}),n})()},{path:"**",redirectTo:"by-capital"}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(z),h.Bz]}),n})();var G=s(466);let W=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,H,G.m]}),n})()}}]);