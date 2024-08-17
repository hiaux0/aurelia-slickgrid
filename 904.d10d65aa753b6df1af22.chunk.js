"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[904],{8359:(e,i,t)=>{t.d(i,{A:()=>r});var a=t(6240),l=t.n(a),n=t(2753),s=t.n(n)()(l());s.push([e.id,"#grid28 .slick-cell{display:inline-flex;align-items:center;gap:4px}#grid28 .avg-total{color:#a365ff}#grid28 .bold{font-weight:bold}#grid28 .total-suffix{margin-left:10px}#grid28 .hidden{display:none}#grid28 .mdi-file-pdf-outline{color:#f14668;opacity:.9}#grid28 .mdi-folder,#grid28 .mdi-folder-open{color:orange;opacity:.9}#grid28 .mdi-file-music-outline{color:#3298dc;opacity:.9}#grid28 .mdi-file-excel-outline{color:#1e9f75;opacity:.9}#grid28 .mdi-file-document-outline,#grid28 .mdi-file-question-outline{color:#686868;opacity:.9}#grid28 .display-inline-block{display:inline-block}.width-15px{width:15px}.width-30px{width:30px}.width-45px{width:45px}.width-60px{width:60px}.width-75px{width:75px}.width-90px{width:90px}",""]);const r=s},904:(e,i,t)=>{t.r(i),t.d(i,{Example28:()=>O});var a={};t.r(a),t.d(a,{bindables:()=>p,default:()=>o,dependencies:()=>c,name:()=>r,register:()=>u,template:()=>d});var l=t(2443),n=t(7689),s=t(8359);const r="example28",d='<h2>\n  <span innerhtml.bind="title"></span>\n  <span class="float-end">\n    <a style="font-size: 18px"\n        target="_blank"\n        href="https://github.com/ghiscoding/aurelia-slickgrid/blob/master/packages/demo/src/examples/slickgrid/example28.ts">\n      <span class="mdi mdi-link mdi-v-align-sub"></span> code\n    </a>\n  </span>\n</h2>\n<div class="subtitle" innerhtml.bind="subTitle"></div>\n\n<div class="row">\n  <div class="col-md-7">\n    <button click.trigger="addNewFile()" data-test="add-item-btn" class="btn btn-xs btn-icon btn-primary">\n      <span class="mdi mdi-plus color-white"></span>\n      <span>Add New Pop Song</span>\n    </button>\n    <button click.trigger="deleteFile()" data-test="remove-item-btn" class="btn btn-outline-secondary btn-xs btn-icon" disabled.bind="isRemoveLastInsertedPopSongDisabled">\n      <span class="mdi mdi-minus"></span>\n      <span>Remove Last Inserted Pop Song</span>\n    </button>\n    <button click.trigger="collapseAll()" data-test="collapse-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">\n      <span class="mdi mdi-arrow-collapse"></span>\n      <span>Collapse All</span>\n    </button>\n    <button click.trigger="expandAll()" data-test="expand-all-btn" class="btn btn-outline-secondary btn-xs btn-icon">\n      <span class="mdi mdi-arrow-expand"></span>\n      <span>Expand All</span>\n    </button>\n    <button class="btn btn-outline-secondary btn-xs btn-icon" data-test="clear-filters-btn" click.trigger="clearFilters()">\n      <span class="mdi mdi-close"></span>\n      <span>Clear Filters</span>\n    </button>\n    <button click.trigger="logFlatStructure()" class="btn btn-outline-secondary btn-xs btn-icon"\n            title="console.log of the Flat dataset">\n      <span>Log Flat Structure</span>\n    </button>\n    <button click.trigger="logHierarchicalStructure()" class="btn btn-outline-secondary btn-xs btn-icon"\n            title="console.log of the Hierarchical Tree dataset">\n      <span>Log Hierarchical Structure</span>\n    </button>\n  </div>\n\n  <div class="col-md-5">\n    <div class="input-group input-group-sm">\n      <input type="text" class="form-control search-string" placeholder="search value" autocomplete="off"\n              data-test="search-string" value.bind="searchString">\n      <button class="btn btn-sm btn-outline-secondary d-flex align-items-center" data-test="clear-search-string"\n              click.trigger="clearSearch()">\n        <span class="icon mdi mdi-close-thick"></span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div>\n  <label class="checkbox-inline control-label" for="excludeChildWhenFiltering" style="margin-left: 20px">\n    <input type="checkbox" id="excludeChildWhenFiltering" data-test="exclude-child-when-filtering"\n            checked.bind="isExcludingChildWhenFiltering"\n            click.trigger="changeExcludeChildWhenFiltering()">\n    <span\n          title="for example if we filter the word \'pop\' and we exclude children, then only the folder \'pop\' will show up without any content unless we uncheck this flag">\n      Exclude Children when Filtering Tree\n    </span>\n  </label>\n  <label class="checkbox-inline control-label" for="autoApproveParentItem" style="margin-left: 20px">\n    <input type="checkbox" id="autoApproveParentItem" data-test="auto-approve-parent-item"\n            checked.bind="isAutoApproveParentItemWhenTreeColumnIsValid"\n            click.trigger="changeAutoApproveParentItem()">\n    <span\n          title="for example in this demo if we filter with \'music\' and size \'> 70\' nothing will show up unless we have this flag enabled\n          because none of the files have both criteria at the same time, however the column with the tree \'file\' does pass the filter criteria \'music\'\n          and with this flag we tell the lib to skip any other filter(s) as soon as the with the tree (file in this demo) passes its own filter criteria">\n      Skip Other Filter Criteria when Parent with Tree is valid\n    </span>\n  </label>\n  <label class="checkbox-inline control-label" for="autoRecalcTotalsOnFilterChange" style="margin-left: 20px">\n    <input type="checkbox" id="autoRecalcTotalsOnFilterChange" data-test="auto-recalc-totals"\n            checked.bind="isAutoRecalcTotalsOnFilterChange"\n            click.trigger="changeAutoRecalcTotalsOnFilterChange()">\n    <span\n          title="Should we recalculate Tree Data Totals (when Aggregators are defined) while filtering? This feature is disabled by default.">\n      auto-recalc Tree Data totals on filter changed\n    </span>\n  </label>\n</div>\n\n<br />\n\n<div id="grid-container" class="col-sm-12">\n  <aurelia-slickgrid grid-id="grid28"\n                      column-definitions.bind="columnDefinitions"\n                      grid-options.bind="gridOptions"\n                      dataset-hierarchical.bind="datasetHierarchical"\n                      instances.bind="aureliaGrid">\n  </aurelia-slickgrid>\n</div>\n',o=d,c=[],p={};let h;function u(e){h||(h=n.K94.define({name:r,template:d,dependencies:c,bindables:p})),e.register(h)}var g=t(3853),f=t(5127),m=t(9123),b=t.n(m),x=t(4472),v=t.n(x),w=t(948),T=t.n(w),k=t(9747),y=t.n(k),F=t(7383),A=t.n(F),C=t(8308),I=t.n(C),S={};S.styleTagTransform=I(),S.setAttributes=y(),S.insert=T().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=A(),b()(s.A,S),s.A&&s.A.locals&&s.A.locals,t(7375);let O=(()=>{let e,i,t,s=[(0,n.EMX)(a)],r=[],d=[],o=[];return class{static{i=this}static{const a="function"==typeof Symbol&&Symbol.metadata?Object.create(null):void 0;t=[(0,n._tP)()],(0,l.G4)(null,null,t,{kind:"field",name:"searchString",static:!1,private:!1,access:{has:e=>"searchString"in e,get:e=>e.searchString,set:(e,i)=>{e.searchString=i}},metadata:a},d,o),(0,l.G4)(null,e={value:i},s,{kind:"class",name:i.name,metadata:a},null,r),i=e.value,a&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a}),(0,l.zF)(i,r)}title='Example 28: Tree Data with Aggregators <small> <span class="mdi mdi-file-tree mdi-27px"></span> (from a Hierarchical Dataset - <a href="https://ghiscoding.gitbook.io/aurelia-slickgrid/grid-functionalities/tree-data-grid" target="_blank">Wiki</a>)</small>';subTitle='<ul>\n    <li>It is assumed that your dataset will have Parent/Child references AND also Tree Level (indent) property.</li>\n    <ul>\n      <li>If you do not have the Tree Level (indent), you could call "convertParentChildArrayToHierarchicalView()" then call "convertHierarchicalViewToParentChildArray()"</li>\n      <li>You could also pass the result of "convertParentChildArrayToHierarchicalView()" to "dataset-hierarchical.bind" as defined in the next Hierarchical Example</li>\n    </ul>\n  </ul>';aureliaGrid;gridOptions;columnDefinitions=[];datasetHierarchical=[];isExcludingChildWhenFiltering=!1;isAutoApproveParentItemWhenTreeColumnIsValid=!0;isAutoRecalcTotalsOnFilterChange=!1;isRemoveLastInsertedPopSongDisabled=!0;lastInsertedPopSongId;searchString=(0,l.zF)(this,d,"");constructor(){this.defineGrid()}attached(){this.datasetHierarchical=this.mockDataset()}defineGrid(){this.columnDefinitions=[{id:"file",name:"Files",field:"file",type:f.PUO.string,width:150,formatter:this.treeFormatter.bind(this),filterable:!0,sortable:!0},{id:"dateModified",name:"Date Modified",field:"dateModified",formatter:f._tQ.dateIso,type:f.PUO.dateUtc,outputType:f.PUO.dateIso,minWidth:90,exportWithFormatter:!0,filterable:!0,filter:{model:f.CuW.compoundDate}},{id:"description",name:"Description",field:"description",minWidth:90,filterable:!0,sortable:!0},{id:"size",name:"Size",field:"size",minWidth:90,type:f.PUO.number,exportWithFormatter:!0,excelExportOptions:{autoDetectCellFormat:!1},filterable:!0,filter:{model:f.CuW.compoundInputNumber},formatter:(e,i,t,a,l)=>{const n=a.field;if(void 0!==l?.__treeTotals){const e=l[this.gridOptions?.treeDataOptions?.levelPropName||"__treeLevel"],i=l?.__treeTotals?.sum[n],t=l?.__treeTotals?.avg[n];if(void 0!==t&&void 0!==i)return isNaN(i)?"":`<span class="text-primary bold">sum: ${(0,f.W0)(i,0,2)} MB</span> / <span class="avg-total">avg: ${(0,f.W0)(t,0,2)} MB</span> <span class="total-suffix">(${0===e?"total":"sub-total"})</span>`;if(void 0!==i)return isNaN(i)?"":`<span class="text-primary bold">sum: ${(0,f.W0)(i,0,2)} MB</span> <span class="total-suffix">(${0===e?"total":"sub-total"})</span>`}return(0,f.EtT)(t)?`${t} MB`:""}}],this.gridOptions={autoResize:{container:"#demo-container",rightPadding:10},enableAutoSizeColumns:!0,enableAutoResize:!0,enableExcelExport:!0,excelExportOptions:{exportWithFormatter:!0,sanitizeDataExport:!0},externalResources:[new g.N],enableFiltering:!0,enableTreeData:!0,multiColumnSort:!1,treeDataOptions:{columnId:"file",childrenPropName:"files",excludeChildrenWhenFilteringTree:this.isExcludingChildWhenFiltering,autoApproveParentItemWhenTreeColumnIsValid:this.isAutoApproveParentItemWhenTreeColumnIsValid,aggregators:[new f.J2q.Avg("size"),new f.J2q.Sum("size")],autoRecalcTotalsOnFilterChange:this.isAutoRecalcTotalsOnFilterChange},headerRowHeight:35,rowHeight:33,showCustomFooter:!0,presets:{treeData:{toggledItems:[{itemId:4,isCollapsed:!0}]}}}}changeAutoApproveParentItem(){return this.isAutoApproveParentItemWhenTreeColumnIsValid=!this.isAutoApproveParentItemWhenTreeColumnIsValid,this.gridOptions.treeDataOptions.autoApproveParentItemWhenTreeColumnIsValid=this.isAutoApproveParentItemWhenTreeColumnIsValid,this.aureliaGrid.slickGrid.setOptions(this.gridOptions),this.aureliaGrid.filterService.refreshTreeDataFilters(),!0}changeAutoRecalcTotalsOnFilterChange(){return this.isAutoRecalcTotalsOnFilterChange=!this.isAutoRecalcTotalsOnFilterChange,this.gridOptions.treeDataOptions.autoRecalcTotalsOnFilterChange=this.isAutoRecalcTotalsOnFilterChange,this.aureliaGrid.slickGrid?.setOptions(this.gridOptions),this.aureliaGrid.filterService.clearFilters(),this.aureliaGrid.treeDataService.enableAutoRecalcTotalsFeature(),!0}changeExcludeChildWhenFiltering(){return this.isExcludingChildWhenFiltering=!this.isExcludingChildWhenFiltering,this.gridOptions.treeDataOptions.excludeChildrenWhenFilteringTree=this.isExcludingChildWhenFiltering,this.aureliaGrid.slickGrid.setOptions(this.gridOptions),this.aureliaGrid.filterService.refreshTreeDataFilters(),!0}clearSearch(){this.searchString=""}searchStringChanged(){this.updateFilter()}updateFilter(){this.aureliaGrid.filterService.updateFilters([{columnId:"file",searchTerms:[this.searchString]}],!0,!1,!0)}treeFormatter=((0,l.zF)(this,o),(e,i,t,a,l,n)=>{const s=n.getOptions(),r=s.treeDataOptions&&s.treeDataOptions.levelPropName||"__treeLevel";if(null==t||void 0===l)return"";const d=n.getData(),o=d.getItems(),c=d.getIdPropertyName()||"id",p=d.getIdxById(l[c]),h=this.getFileIcon(t),u=l[r];t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const g=`<span style="display:inline-block; width:${15*u}px;"></span>`,m=(0,f.WJk)(5*u);if(o[p+1]?.[r]>o[p][r]||o[p].__hasChildren){const e=`<span class="mdi icon ${l.__collapsed?"mdi-folder":"mdi-folder-open"}"></span>`;return l.__collapsed?`<span class="hidden">.</span>${g}${m} <span class="slick-group-toggle collapsed" level="${u}"></span>${e} ${h} ${t}`:`<span class="hidden">.</span>${g}${m} <span class="slick-group-toggle expanded" level="${u}"></span>${e} ${h} ${t}`}return`<span class="hidden">.</span>${g}${m} <span class="slick-group-toggle" level="${u}"></span>${h} ${t}`});getFileIcon(e){let i="";return e.includes(".pdf")?i='<span class="mdi icon mdi-file-pdf-outline"></span>':e.includes(".txt")?i='<span class="mdi icon mdi-file-document-outline"></span>':e.includes(".xls")?i='<span class="mdi icon mdi-file-excel-outline"></span>':e.includes(".mp3")&&(i='<span class="mdi icon mdi-file-music-outline"></span>'),i}addNewFile(){const e=this.aureliaGrid.dataView.getLength()+50,i=[...this.datasetHierarchical],t=(0,f.lNf)(i,(e=>"pop"===e.file),"files");t&&Array.isArray(t.files)&&(t.files.push({id:e,file:`pop-${e}.mp3`,dateModified:new Date,size:e+3}),this.lastInsertedPopSongId=e,this.isRemoveLastInsertedPopSongDisabled=!1,this.datasetHierarchical=i,window.setTimeout((()=>{const e=this.aureliaGrid.dataView.getRowById(t.id);this.aureliaGrid.slickGrid.scrollRowIntoView(e+3)}),10))}deleteFile(){const e=[...this.datasetHierarchical],i=(0,f.lNf)(this.datasetHierarchical,(e=>"pop"===e.file),"files"),t=(0,f.lNf)(this.datasetHierarchical,(e=>e.id===this.lastInsertedPopSongId),"files");if(i&&t){const a=i.files.findIndex((e=>e.id===t.id));a>=0&&(i.files.splice(a,1),this.lastInsertedPopSongId=void 0,this.isRemoveLastInsertedPopSongDisabled=!0,this.datasetHierarchical=e)}}clearFilters(){this.aureliaGrid.filterService.clearFilters()}collapseAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!0)}expandAll(){this.aureliaGrid.treeDataService.toggleTreeDataCollapse(!1)}logHierarchicalStructure(){console.log("exploded array",this.aureliaGrid.treeDataService.datasetHierarchical)}logFlatStructure(){console.log("flat array",this.aureliaGrid.treeDataService.dataset)}mockDataset(){return[{id:24,file:"bucket-list.txt",dateModified:"2012-03-05T12:44:00.123Z",size:.5},{id:18,file:"something.txt",dateModified:"2015-03-03T03:50:00.123Z",size:90},{id:21,file:"documents",files:[{id:2,file:"txt",files:[{id:3,file:"todo.txt",description:"things to do someday maybe",dateModified:"2015-05-12T14:50:00.123Z",size:.7}]},{id:4,file:"pdf",files:[{id:22,file:"map2.pdf",dateModified:"2015-07-21T08:22:00.123Z",size:2.9},{id:5,file:"map.pdf",dateModified:"2015-05-21T10:22:00.123Z",size:3.1},{id:6,file:"internet-bill.pdf",dateModified:"2015-05-12T14:50:00.123Z",size:1.3},{id:23,file:"phone-bill.pdf",dateModified:"2015-05-01T07:50:00.123Z",size:1.5}]},{id:9,file:"misc",files:[{id:10,file:"warranties.txt",dateModified:"2015-02-26T16:50:00.123Z",size:.4}]},{id:7,file:"xls",files:[{id:8,file:"compilation.xls",dateModified:"2014-10-02T14:50:00.123Z",size:2.3}]},{id:55,file:"unclassified.csv",dateModified:"2015-04-08T03:44:12.333Z",size:.25},{id:56,file:"unresolved.csv",dateModified:"2015-04-03T03:21:12.000Z",size:.79},{id:57,file:"zebra.dll",dateModified:"2016-12-08T13:22:12.432",size:1.22}]},{id:11,file:"music",files:[{id:12,file:"mp3",files:[{id:16,file:"rock",files:[{id:17,file:"soft.mp3",dateModified:"2015-05-13T13:50:00Z",size:98}]},{id:14,file:"pop",files:[{id:15,file:"theme.mp3",description:"Movie Theme Song",dateModified:"2015-03-01T17:05:00Z",size:47},{id:25,file:"song.mp3",description:"it is a song...",dateModified:"2016-10-04T06:33:44Z",size:6.3}]},{id:33,file:"other",files:[]}]}]},{id:26,file:"recipes",description:"Cake Recipes",dateModified:"2012-03-05T12:44:00.123Z",files:[{id:29,file:"cheesecake",description:"strawberry cheesecake",dateModified:"2012-04-04T13:52:00.123Z",size:.2},{id:30,file:"chocolate-cake",description:"tasty sweet chocolate cake",dateModified:"2012-05-05T09:22:00.123Z",size:.2},{id:31,file:"coffee-cake",description:"chocolate coffee cake",dateModified:"2012-01-01T08:08:48.123Z",size:.2}]}]}},i})()}}]);