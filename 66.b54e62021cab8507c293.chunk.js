"use strict";(self.webpackChunkau_slickgrid_demo=self.webpackChunkau_slickgrid_demo||[]).push([[66],{6911:(t,e,s)=>{s.d(e,{L:()=>o,y:()=>l});var i=s(5100);function o(t,e,s){let o;s={modalType:"edit",validationFailedMsg:"Some of the fields have failed validation",validationMsgPrefix:null,show:null,hide:null,position:null,destroy:null,formValues:{},editors:{},...s};const n=()=>{},a=t=>{const s=e[t],o=(0,i.A3q)(s),n=s?.clientWidth??0,a=s?.clientHeight??0;return{top:o?.top??0,left:o?.left??0,bottom:(o?.top??0)+a,right:(o?.left??0)+n,width:n,height:a,visible:!0}};function r(r){const l=this;let d=[];l.getEditors=()=>d,l.destroy=()=>{let t=d.pop();for(;t;)t?.destroy(),t=d.pop();let o=e.pop();for(;o;)(0,i.i3Z)(o),o?.remove(),o=e.pop();s?.destroy?.(),d=[],e=null},l.focus=()=>{(o||d[0]).focus()},l.isValueChanged=()=>{let t=0;for(;t<d.length;){if(d[t].isValueChanged())return!0;t++}return!1},l.serializeValue=()=>{const t=[];let e=0;for(;e<d.length;)t[e]=d[e].serializeValue(),e++;return t},l.applyValue=(t,e)=>{let s=0;for(;s<d.length;)d[s].applyValue(t,e?.[s]),s++},l.loadValue=t=>{let e=0;for(;e<d.length;)d[e].loadValue(t),e++},l.validate=t=>{let i;o=null;const n=[];let a=0;for(;a<d.length;){const r=d[a].args?.column;if(void 0!==r?.id){const l=document.querySelector(".slick-editor-modal");let h=l?.querySelector(`.item-details-validation.editor-${r.id}`),c=l?.querySelector(`.item-details-label.editor-${r.id}`),u=l?.querySelector(`[data-editorid=${r.id}]`);const p=s?.validationMsgPrefix??"";t&&!u?.contains(t)||(i=d[a].validate(),i.valid?h&&(h.textContent="",u?.classList.remove("invalid"),c?.classList.remove("invalid")):(o=d[a],n.push({index:a,editor:d[a],container:e[a],msg:i.msg}),h&&(h.textContent=`${p}${i.msg}`,c?.classList.add("invalid"),u?.classList.add("invalid")))),h=null,c=null,u=null}a++}return t=null,n.length?{valid:!1,msg:s.validationFailedMsg,errors:n}:{valid:!0,msg:""}},l.hide=()=>{let t=0;for(;t<d.length;)d[t]?.hide?.(),t++;s?.hide?.()},l.show=()=>{let t=0;for(;t<d.length;)d[t]?.show?.(),t++;s?.show?.()},l.position=t=>{s?.position?.(t)},function(){let i={},o=0;for(;o<t.length;){if(t[o].editorClass){const l=t[o];i={...r},i.container=e[o],i.column=l,i.position=a(o),i.commitChanges=n,i.cancelChanges=n,i.compositeEditorOptions=s,i.formValues={};const h=new l.editorClass(i);s.editors[l.id]=h,d.push(h)}o++}setTimeout((()=>{Array.isArray(d)&&d.length>0&&"function"==typeof d[0].focus&&d[0].focus()}),0)}()}return r.prototype=this,r}var n=s(4039),a=s(3580);const r=t=>console.log(t.message);class l{get eventHandler(){return this._eventHandler}get dataView(){return this.grid?.getData()}get dataViewLength(){return this.dataView.getLength()}get formValues(){return this._formValues}get editors(){return this._editors}set editors(t){this._editors=t}get gridOptions(){return this.grid?.getOptions()}constructor(){this._columnDefinitions=[],this._lastActiveRowNumber=-1,this._formValues=null,this.gridService=null,this._eventHandler=new i.JD8,this._bindEventService=new n.P}init(t,e){if(this.grid=t,this.gridService=e.get("GridService"),this.translaterService=e.get("TranslaterService"),!this.gridService)throw new Error("[Slickgrid-Universal] it seems that the GridService is not being loaded properly, make sure the Container Service is properly implemented.");if(this.gridOptions.enableTranslate&&(!this.translaterService||!this.translaterService.translate))throw new Error('[Slickgrid-Universal] requires a Translate Service to be installed and configured when the grid option "enableTranslate" is enabled.');this._locales=this.gridOptions?.locales??i.YMJ.locales}dispose(){this._eventHandler.unsubscribeAll(),this._bindEventService.unbindAll(),this._formValues=null,this.disposeComponent()}disposeComponent(){this._modalBodyTopValidationElm?.remove(),this._modalSaveButtonElm?.remove(),"function"==typeof this._modalElm?.remove&&(this._modalElm.remove(),document.body.classList.remove("slick-modal-open")),this._editorContainers=[]}changeFormInputValue(t,e,s=!1,i=!0){const o=this.getColumnByObjectOrId(t),n="string"==typeof t?t:o?.id??"",r=this._editors?.[n];let l=e;if(!r&&!s)throw new Error(`Composite Editor with column id "${n}" not found.`);if("function"==typeof r?.setValue&&Array.isArray(this._editorContainers)){r.setValue(e,!0,i);const t=this._editorContainers.find((t=>t.dataset.editorid===n)),s=this.gridOptions?.compositeEditorOptions?.excludeDisabledFieldFormValues??!1;!r.disabled||r.disabled&&!s?t?.classList?.add("modified"):(l="",t?.classList?.remove("modified")),!r.disabled||""===l&&null===l&&void 0===l&&0===l||(l="")}const d=o?.field??"";if(o&&d?.includes(".")){const t=o.editor?.complexObjectPath??d??"";(0,a.setDeepValue)(this._formValues??{},t,e)}else this._formValues={...this._formValues,[n]:l}}changeFormValue(t,e){const s=this.getColumnByObjectOrId(t),i="string"==typeof t?t:s?.id??"",o=s?.field??t;if(o?.includes(".")){const t=s?.editor?.complexObjectPath??o??"";(0,a.setDeepValue)(this._formValues,t,e)}else this._formValues={...this._formValues,[i]:e};this._formValues=(0,a.deepMerge)({},this._itemDataContext,this._formValues)}changeFormEditorOption(t,e,s){const i=this._editors?.[t];if(!i?.changeEditorOption)throw new Error(`Editor with column id "${t}" not found OR the Editor does not support "changeEditorOption" (current only available with AutoComplete, Date, MultipleSelect & SingleSelect Editors).`);i.changeEditorOption(e,s)}disableFormInput(t,e=!0){const s=this._editors?.[t];s?.disable&&Array.isArray(this._editorContainers)&&s.disable(e)}openDetails(t){const e=t.onError??r,s={backdrop:"static",showCloseButtonOutside:!0,shouldClearRowSelectionAfterMassAction:!0,viewColumnLayout:"auto",modalType:"edit"};try{if(!this.grid||this.grid.getEditorLock().isActive()&&!this.grid.getEditorLock().commitCurrentEdit())return null;this._formValues=null,this._options={...s,...this.gridOptions.compositeEditorOptions,...t,labels:{...this.gridOptions.compositeEditorOptions?.labels,...t?.labels}},this._options.backdrop=void 0!==t.backdrop?t.backdrop:"static";const n=this._options.viewColumnLayout||1,r=this.grid.getActiveCell(),l=r?.cell??0,d=r?.row??0,h=this.grid.getUID()||"";let c=t.headerTitle||"";"function"==typeof this._options.onBeforeOpen&&this._options.onBeforeOpen(),this.hasRowSelectionEnabled()&&"auto-mass"===this._options.modalType&&this.grid.getSelectedRows&&((this.grid.getSelectedRows()||[]).length>0?(this._options.modalType="mass-selection",t?.headerTitleMassSelection&&(c=t?.headerTitleMassSelection)):(this._options.modalType="mass-update",t?.headerTitleMassUpdate&&(c=t?.headerTitleMassUpdate)));const u=this._options.modalType||"edit";if(!this.gridOptions.editable)return e({type:"error",code:"EDITABLE_GRID_REQUIRED",message:"Your grid must be editable in order to use the Composite Editor Modal."}),null;if(!this.gridOptions.enableCellNavigation)return e({type:"error",code:"ENABLE_CELL_NAVIGATION_REQUIRED",message:'Composite Editor requires the flag "enableCellNavigation" to be set to True in your Grid Options.'}),null;if(!(this.gridOptions.enableAddRow||"clone"!==u&&"create"!==u))return e({type:"error",code:"ENABLE_ADD_ROW_REQUIRED",message:'Composite Editor requires the flag "enableAddRow" to be set to True in your Grid Options when cloning/creating a new item.'}),null;if(!(r||"clone"!==u&&"edit"!==u))return e({type:"warning",code:"NO_RECORD_FOUND",message:"No records selected for edit or clone operation."}),null;{const t="mass-update"===u||"mass-selection"===u,s=t?{}:this.grid.getDataItem(d);this._originalDataContext=(0,a.extend)(!0,{},s),this._columnDefinitions=this.grid.getColumns();const r=this.hasRowSelectionEnabled()?this.grid.getSelectedRows():[],p=this.dataView?.getItemCount()??0;this._lastActiveRowNumber=d;const m=this.dataView.getAllSelectedIds(),f="create"===u?this.dataViewLength:d;if(!this.focusOnFirstColumnCellWithEditor(this._columnDefinitions,s,l,f,t))return null;if("edit"===u&&!s)return e({type:"warning",code:"ROW_NOT_EDITABLE",message:"Current row is not editable."}),null;if("mass-selection"===u&&r.length<1)return e({type:"warning",code:"ROW_SELECTION_REQUIRED",message:"You must select some rows before trying to apply new value(s)."}),null;let g=[];g=t?this._columnDefinitions.filter((t=>t.editorClass&&!0===t.editor?.massUpdate)):this._columnDefinitions.filter((t=>t.editorClass)),g.some((t=>void 0!==t.editor?.compositeEditorFormOrder))&&g.sort(((t,e)=>{const s=t?.editor?.compositeEditorFormOrder??1/0,o=e?.editor?.compositeEditorFormOrder??1/0;return(0,i.JXN)(s,o,i.Lo1.asc)}));const C=c.replace(/\{\{(.*?)\}\}/g,((t,e)=>(0,i.njg)(s,e))),b="auto"===n?this.autoCalculateLayoutColumnCount(g.length):n;this._modalElm=(0,i.fhB)("div",{className:`slick-editor-modal ${h}`});const v=(0,i.fhB)("div",{className:"slick-editor-modal-content"});if(this.gridOptions?.darkMode&&v.classList.add("slick-dark-mode"),!isNaN(n)&&+n>1||"auto"===n&&b>1){const t=2===b?"split-view":"triple-split-view";v.classList.add(t)}const y=(0,i.fhB)("div",{className:"slick-editor-modal-title"});this.grid.applyHtmlCode(y,C);const E=(0,i.fhB)("button",{type:"button",ariaLabel:"Close",textContent:"×",className:"close",dataset:{action:"close"}});this._options.showCloseButtonOutside&&(y?.classList?.add("outside"),E?.classList?.add("outside"));const _=(0,i.fhB)("div",{ariaLabel:"Close",className:"slick-editor-modal-header"});_.appendChild(y),_.appendChild(E);const w=(0,i.fhB)("div",{className:"slick-editor-modal-body"});this._modalBodyTopValidationElm=(0,i.fhB)("div",{className:"validation-summary",style:{display:"none"}},w);const S=(0,i.fhB)("div",{className:"slick-editor-modal-footer"}),R=(0,i.fhB)("button",{type:"button",ariaLabel:this.getLabelText("cancelButton","TEXT_CANCEL","Cancel"),className:"btn btn-cancel btn-default btn-sm",textContent:this.getLabelText("cancelButton","TEXT_CANCEL","Cancel"),dataset:{action:"cancel"}});let T="",O="";switch(u){case"clone":O=this.getLabelText("cloneButton","TEXT_CLONE","Clone");break;case"mass-update":const t=this.getLabelText("massUpdateStatus","TEXT_ALL_X_RECORDS_SELECTED","All {{x}} records selected");T=this.parseText(t,{x:p}),O=this.getLabelText("massUpdateButton","TEXT_APPLY_MASS_UPDATE","Mass Update");break;case"mass-selection":const e=this.getLabelText("massSelectionStatus","TEXT_X_OF_Y_MASS_SELECTED","{{x}} of {{y}} selected");T=this.parseText(e,{x:m.length,y:p}),O=this.getLabelText("massSelectionButton","TEXT_APPLY_TO_SELECTION","Update Selection");break;default:O=this.getLabelText("saveButton","TEXT_SAVE","Save")}const k=(0,i.fhB)("div",{className:"footer-status-text",textContent:T});this._modalSaveButtonElm=(0,i.fhB)("button",{type:"button",className:"btn btn-save btn-primary btn-sm",ariaLabel:O,textContent:O,dataset:{action:"create"===u||"edit"===u?"save":u,ariaLabel:O}});const x=(0,i.fhB)("div",{className:"footer-buttons"});"mass-update"!==u&&"mass-selection"!==u||S.appendChild(k),x.appendChild(R),x.appendChild(this._modalSaveButtonElm),S.appendChild(x),v.appendChild(_),v.appendChild(w),v.appendChild(S),this._modalElm.appendChild(v);for(const t of g)if(t.editorClass){const e=(0,i.fhB)("div",{className:`item-details-container editor-${t.id}`});1===b?e.classList.add("slick-col-medium-12"):e.classList.add("slick-col-medium-6","slick-col-xlarge-"+12/b);const s=(0,i.fhB)("div",{className:`item-details-label editor-${t.id}`});this.grid.applyHtmlCode(s,this.getColumnLabel(t)||"n/a");const o=(0,i.fhB)("div",{className:"item-details-editor-container slick-cell",dataset:{editorid:`${t.id}`}}),n=(0,i.fhB)("div",{className:`item-details-validation editor-${t.id}`});if(this._options?.showResetButtonOnEachEditor){const e=this.createEditorResetButtonElement(`${t.id}`);this._bindEventService.bind(e,"click",this.handleResetInputValue.bind(this)),s.appendChild(e)}e.appendChild(s),e.appendChild(o),e.appendChild(n),w.appendChild(e)}if(this._options?.showFormResetButton){const t=this.createFormResetButtonElement();this._bindEventService.bind(t,"click",this.handleResetFormClicked.bind(this)),w.appendChild(t)}document.body.appendChild(this._modalElm),document.body.classList.add("slick-modal-open"),this._bindEventService.bind(document.body,"click",this.handleBodyClicked.bind(this)),"function"==typeof this._options.onRendered&&this._options.onRendered(this._modalElm),this._editors={},this._editorContainers=g.map((t=>w.querySelector(`[data-editorid=${t.id}]`)))||[],this._compositeOptions={destroy:this.disposeComponent.bind(this),modalType:u,validationMsgPrefix:"* ",formValues:{},editors:this._editors};const I=new o(g,this._editorContainers,this._compositeOptions);this.grid.editActiveCell(I),this._bindEventService.bind(E,"click",this.cancelEditing.bind(this)),this._bindEventService.bind(R,"click",this.cancelEditing.bind(this)),this._bindEventService.bind(this._modalSaveButtonElm,"click",this.handleSaveClicked.bind(this)),this._bindEventService.bind(this._modalElm,"keydown",this.handleKeyDown.bind(this)),this._bindEventService.bind(this._modalElm,"focusout",this.validateCurrentEditor.bind(this)),this._bindEventService.bind(this._modalElm,"blur",this.validateCurrentEditor.bind(this)),this._eventHandler.subscribe(this.grid.onCompositeEditorChange,this.handleOnCompositeEditorChange.bind(this)),this._eventHandler.subscribe(this.grid.onAddNewRow,((t,e)=>{this._originalDataContext=this.insertNewItemInDataView(e.item)}))}return this}catch(t){this.dispose();const s="string"==typeof t?t:t?.message??t?.body?.message??"";return e({type:"error",code:"string"==typeof t?t:t?.status??t?.body?.status??s,message:s}),null}}async cancelEditing(){let t=!0;this.formValues&&Object.keys(this.formValues).length>0&&"function"==typeof this._options.onClose&&(t=await this._options.onClose()),t&&(this.grid.getEditController()?.cancelCurrentEdit(),"edit"!==this._options?.modalType&&"clone"!==this._options?.modalType||this.resetCurrentRowDataContext(),this.grid.setActiveRow(this._lastActiveRowNumber),this.dispose())}showValidationSummaryText(t,e=""){t&&""!==e?(this._modalBodyTopValidationElm.textContent=e,this._modalBodyTopValidationElm.style.display="block",this._modalBodyTopValidationElm.scrollIntoView?.(),this._modalSaveButtonElm.disabled=!1,this._modalSaveButtonElm.classList.remove("saving")):(this._modalBodyTopValidationElm.style.display="none",this._modalBodyTopValidationElm.textContent=e)}applySaveMassUpdateChanges(t,e,s=!0){const i=s?this.dataView.getItems():(0,a.extend)(!0,[],this.dataView.getItems());return Object.keys(t).forEach((e=>{e in t&&i.forEach((s=>{!(e in t)||void 0!==this._options?.validateMassUpdateChange&&!1===this._options.validateMassUpdateChange(e,s,t)||(s[e]=t[e])}))})),s&&(this.dataView.setItems(i,this.gridOptions.datasetIdPropertyName),this.grid.invalidate()),i}applySaveMassSelectionChanges(t,e,s=!0){const i=(e?.dataContextIds??[]).map((t=>this.dataView.getItemById(t))),o=s?i:(0,a.extend)(!0,[],i);return Object.keys(t).forEach((e=>{e in t&&o.forEach((s=>{!(e in t)||void 0!==this._options?.validateMassUpdateChange&&!1===this._options.validateMassUpdateChange(e,s,t)||(s[e]=t[e])}))})),s&&this.gridService?.updateItems(o),o}autoCalculateLayoutColumnCount(t){return t>=15?3:t>=8?2:1}createEditorResetButtonElement(t){const e=(0,i.fhB)("button",{type:"button",name:t,ariaLabel:"Reset",title:this._options?.labels?.resetFormButton??"Reset Form Input",className:"btn btn-xs btn-editor-reset"});if(this._options?.resetEditorButtonCssClass){const t=(0,a.classNameToList)(this._options?.resetEditorButtonCssClass);for(const s of t)e.classList.add(s)}return e}createFormResetButtonElement(){const t=(0,i.fhB)("div",{className:"reset-container"}),e=(0,i.fhB)("button",{type:"button",className:"btn btn-sm reset-form"},t);return(0,i.fhB)("span",{className:this._options?.resetFormButtonIconCssClass??""},e),e.appendChild(document.createTextNode(" Reset Form")),t}executeOnError(t){(this._options?.onError??r)(t)}async executeOnSave(t,e,s,i){try{if(this.showValidationSummaryText(!1,""),this.validateCompositeEditors().valid){if(this._modalSaveButtonElm.classList.add("saving"),this._modalSaveButtonElm.disabled=!0,"function"==typeof this._options?.onSave){const s="mass-update"===this._options.modalType||"mass-selection"===this._options.modalType;let o;s&&this._options?.shouldPreviewMassChangeDataset&&(o=t(this.formValues,this.getCurrentRowSelections(),!1));const n=s?o:i;await(this._options?.onSave(this.formValues,this.getCurrentRowSelections(),n))&&(t(this.formValues,this.getCurrentRowSelections()),e())}else t(this.formValues,this.getCurrentRowSelections()),e();"function"==typeof s&&s(),this.dispose()}}catch(t){const e="string"==typeof t?t:t?.message??t?.body?.message??"";this.showValidationSummaryText(!0,e)}}focusOnFirstColumnCellWithEditor(t,e,s,i,o){const n=o&&!this.gridOptions.enableAddRow&&i>=this.dataViewLength?this.dataViewLength-1:i;let a=s;const r=t[s].editorClass;let l=this.grid.getCellNode(n,s);if(!r||!l||!this.getActiveCellEditor(n,s)){if(a=this.findNextAvailableEditorColumnIndex(t,e,i,o),-1===a)return this.executeOnError({type:"error",code:"NO_EDITOR_FOUND",message:"We could not find any Editor in your Column Definition"}),!1;this.grid.setActiveCell(n,a,!1),o&&this.grid.setActiveRow(this.dataViewLength,a,!0)}return l=this.grid.getCellNode(n,a),!!l}findNextAvailableEditorColumnIndex(t,e,s,i){let o=-1;for(let n=0;n<t.length;n++){const a=t[n];if(a.editorClass&&(!i||i&&a.editor?.massUpdate)){const t=this.grid.onBeforeEditCell.notify({row:s,cell:n,item:e,column:a,grid:this.grid,target:"composite",compositeEditorOptions:this._compositeOptions}).getReturnValue();if(this.grid.setActiveCell(s,n,!1),!1!==t){o=n;break}}}return o}getColumnByObjectOrId(t){let e;return"object"==typeof t?e=t:"string"==typeof t&&(e=this._columnDefinitions.find((e=>e.id===t))),e}getActiveCellEditor(t,e){return this.grid.setActiveCell(t,e,!1),this.grid.getCellEditor()}getColumnLabel(t){const e=this.gridOptions.columnGroupSeparator||" - ";let s=t.nameCompositeEditor||t.name||"",i=t.columnGroup||"";if(this.gridOptions.enableTranslate&&this.translaterService){const e=t.nameCompositeEditorKey||t.nameKey;e&&(s=this.translaterService.translate(e)),t.columnGroupKey&&this.translaterService?.translate&&(i=this.translaterService.translate(t.columnGroupKey))}const o=i?`${i}${e}${s}`:s;return(0,a.getHtmlStringOutput)(o,"innerHTML")}getLabelText(t,e,s){const i={...this.gridOptions.compositeEditorOptions?.labels,...this._options?.labels};if(this.gridOptions?.enableTranslate&&this.translaterService?.translate&&i.hasOwnProperty(`${t}Key`)){const e=i[`${t}Key`];return this.translaterService.translate(e||"")}return i?.[t]??this._locales?.[e]??s}getCurrentRowSelections(){const t=this.dataView.getAllSelectedIds();return{gridRowIndexes:this.dataView.mapIdsToRows(t),dataContextIds:t}}handleBodyClicked(t){t.target?.classList?.contains("slick-editor-modal")&&"static"!==this._options?.backdrop&&this.dispose()}handleKeyDown(t){"Escape"===t.code?(this.cancelEditing(),t.stopPropagation(),t.preventDefault()):"Tab"===t.code&&this.validateCurrentEditor()}handleResetInputValue(t){const e=t.target.name,s=this._editors?.[e];"function"==typeof s?.reset&&s.reset(),delete this._formValues?.[e]}async handleMassSaving(t,e){if(this.formValues&&0!==Object.keys(this.formValues).length){const s="mass-update"===t?"applySaveMassUpdateChanges":"applySaveMassSelectionChanges";this.executeOnSave(this[s].bind(this),e.bind(this))}else this.executeOnError({type:"warning",code:"NO_CHANGES_DETECTED",message:"Sorry we could not detect any changes."})}handleOnCompositeEditorChange(t,e){const s=e.column?.id??"";this._formValues={...this._formValues,...e.formValues};const i=this._editors?.[s],o=i?.isValueTouched?.()??i?.isValueChanged?.()??!1;this._itemDataContext=i?.dataContext??{};const n=this._modalElm.querySelector(`[data-editorid=${s}]`);n?.classList&&(o?n.classList.add("modified"):n.classList.remove("modified")),this.validateCompositeEditors()}hasRowSelectionEnabled(){const t=this.grid.getSelectionModel();return!(!this.gridOptions.enableRowSelection&&!this.gridOptions.enableCheckboxSelector||!t)}handleResetFormClicked(){for(const t of Object.keys(this._editors)){const e=this._editors[t];e?.reset&&e.reset()}this._formValues=(0,a.emptyObject)(this._formValues)}async handleSaveClicked(){const t=this._options?.modalType;switch(t){case"mass-update":this.handleMassSaving(t,(()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveCell(0,0,!1),this._options.shouldClearRowSelectionAfterMassAction&&this.grid.setSelectedRows([])}));break;case"mass-selection":this.handleMassSaving(t,(()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveRow(this._lastActiveRowNumber),this._options.shouldClearRowSelectionAfterMassAction&&this.grid.setSelectedRows([])}));break;case"clone":const e={...this._originalDataContext,...this.formValues},s=()=>{this.grid.getEditController()?.cancelCurrentEdit(),this.grid.setActiveCell(0,0,!1)};this.executeOnSave(this.insertNewItemInDataView.bind(this,e),s,this.resetCurrentRowDataContext.bind(this),e);break;default:let i=this.grid.getEditController()?.commitCurrentEdit();if(i&&"function"==typeof this._options?.onSave){const e="create"===t?this._originalDataContext:this.grid.getDataItem(this._lastActiveRowNumber);i=await(this._options?.onSave(this.formValues,this.getCurrentRowSelections(),e))}i&&this.dispose()}}insertNewItemInDataView(t){const e=this.dataView?.getItemCount()||0,s=this._options.insertNewId??e+1;return t[this.gridOptions.datasetIdPropertyName||"id"]=s,this.dataView.getItemById(s)?this.executeOnError({type:"error",code:"ITEM_ALREADY_EXIST",message:`The item object which you are trying to add already exist with the same Id:: ${s}`}):this.gridService?.addItem(t,this._options.insertOptions),t}parseText(t,e){return t.replace(/\{\{(.*?)\}\}/g,((t,s)=>void 0!==e[s]?e[s]:t))}resetCurrentRowDataContext(){const t=this.gridOptions.datasetIdPropertyName||"id";this.grid.getData().updateItem(this._originalDataContext[t],this._originalDataContext)}validateCompositeEditors(t){let e={valid:!0,msg:""};const s=this.grid.getCellEditor();return s&&(e=s.validate(t)),e}validateCurrentEditor(){const t=this.grid.getCellEditor();t?.validate&&t.validate()}}},9740:(t,e,s)=>{s.d(e,{Pq:()=>o,xl:()=>u});var i=s(1934);function o(t,e){return JSON.stringify(void 0!==t?t:{},e)}class n{constructor(){this.cache=new Map,this.delete=t=>this.cache.delete(t),this.has=t=>this.cache.has(t),this.set=(t,e)=>this.cache.set(t,e),this.get=t=>this.cache.get(t),this.clear=()=>this.cache.clear()}}const a=i.DI.createInterface((t=>t.singleton(n)));class r{constructor(){this.baseUrl="",this.defaults={},this.interceptors=[],this.dispatcher=null,this.c=(0,i.hd)(i.p7)}withBaseUrl(t){return this.baseUrl=t,this}withDefaults(t){return this.defaults=t,this}withInterceptor(t){return this.interceptors.push(t),this}useStandardConfiguration(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()}rejectErrorResponses(){return this.withInterceptor({response:l})}withRetry(t){const e=this.c.invoke(O,[t]);return this.withInterceptor(e)}withDispatcher(t){return this.dispatcher=t,this}}function l(t){if(!t.ok)throw t;return t}const d=(t,...e)=>new Error(`AUR${String(t).padStart(4,"0")}:${e.map(String)}`),h=/^([a-z][a-z0-9+\-.]*:)?\/\//i,c=i.DI.createInterface("fetch",(t=>{if("function"!=typeof fetch)throw d(5e3);return t.instance(fetch)})),u=i.DI.createInterface("IHttpClient",(t=>t.aliasTo(p)));class p{constructor(){this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.t=[],this.i=null,this.h=(0,i.hd)((0,i.P9)(r)),this.u=(0,i.hd)(c)}get interceptors(){return this.t.slice(0)}configure(t){let e;if("object"==typeof t)e={defaults:t};else{if("function"!=typeof t)throw d(5002,typeof t);{e=this.h(),e.baseUrl=this.baseUrl,e.defaults={...this.defaults},e.interceptors=this.t,e.dispatcher=this.i;const s=t(e);if(null!=s){if("object"!=typeof s)throw d(5001,typeof s);e=s}}}const s=e.defaults;if(s?.headers instanceof Headers)throw d(5003);const i=e.interceptors;if(i?.length>0){if(i.filter((t=>t instanceof O)).length>1)throw d(5004);const t=i.findIndex((t=>t instanceof O));if(t>=0&&t!==i.length-1)throw d(5005)}return this.baseUrl=e.baseUrl,this.defaults=s,this.t=e.interceptors??[],this.i=e.dispatcher,this.isConfigured=!0,this}fetch(t,e){this.C();let s=this.buildRequest(t,e);return this.processRequest(s,this.t).then((t=>{let e;if(t instanceof Response)e=Promise.resolve(t);else{if(!(t instanceof Request))throw d(5006,t);s=t,e=this.u.call(void 0,s)}return this.processResponse(e,this.t,s)})).then((t=>t instanceof Request?this.fetch(t):t)).then((t=>(this.R(),t)),(t=>{throw this.R(),t}))}buildRequest(t,e){const s=this.defaults??{};let i,o,n;const a=function(t){const e={},s=t??{};for(const t of Object.keys(s))e[t]="function"==typeof s[t]?s[t]():s[t];return e}(s.headers);if(t instanceof Request)i=t,n=new Headers(i.headers).get("Content-Type");else{e||(e={}),o=e.body;const a=void 0!==o?{body:o}:null,r={...s,headers:{},...e,...a};n=new Headers(r.headers).get("Content-Type"),i=new Request(m(this.baseUrl,t),r)}return n||(new Headers(a).has("content-type")?i.headers.set("Content-Type",new Headers(a).get("content-type")):void 0!==o&&function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(o)&&i.headers.set("Content-Type","application/json")),function(t,e){const s=e??{};for(const e of Object.keys(s))t.has(e)||t.set(e,s[e])}(i.headers,a),o instanceof Blob&&o.type&&i.headers.set("Content-Type",o.type),i}get(t,e){return this.fetch(t,e)}post(t,e,s){return this.I(t,e,s,"POST")}put(t,e,s){return this.I(t,e,s,"PUT")}patch(t,e,s){return this.I(t,e,s,"PATCH")}delete(t,e,s){return this.I(t,e,s,"DELETE")}dispose(){this.t.forEach((t=>t.dispose?.())),this.t.length=0,this.i=null}C(){this.isRequesting=!!++this.activeRequestCount,this.isRequesting&&null!=this.i&&C(this.i,b.started)}R(){this.isRequesting=!! --this.activeRequestCount,this.isRequesting||null==this.i||C(this.i,b.drained)}processRequest(t,e){return this.B(t,e,"request","requestError",Request,this)}processResponse(t,e,s){return this.B(t,e,"response","responseError",Response,s,this)}B(t,e,s,i,o,...n){return(e??[]).reduce(((t,e)=>{const a=e[s],r=e[i];return t.then(a?t=>t instanceof o?a.call(e,t,...n):t:f,r?t=>r.call(e,t,...n):g)}),Promise.resolve(t))}I(t,e,s,i){return s||(s={}),s.method=i,null!=e&&(s.body=e),this.fetch(t,s)}}function m(t,e){return h.test(e)?e:(t??"")+e}function f(t){return t}function g(t){throw t}function C(t,e){const s=new t.ownerDocument.defaultView.CustomEvent(e,{bubbles:!0,cancelable:!0});setTimeout((()=>{t.dispatchEvent(s)}),1)}const b=Object.freeze({started:"aurelia-fetch-client-request-started",drained:"aurelia-fetch-client-requests-drained"}),v=i.DI.createInterface((t=>t.singleton(E))),y=Object.freeze({Set:"au:fetch:cache:set",Get:"au:fetch:cache:get",Clear:"au:fetch:cache:clear",Reset:"au:fetch:cache:reset",Dispose:"au:fetch:cache:dispose",CacheHit:"au:fetch:cache:hit",CacheMiss:"au:fetch:cache:miss",CacheStale:"au:fetch:cache:stale",CacheStaleRefreshed:"au:fetch:cache:stale:refreshed",CacheExpired:"au:fetch:cache:expired",CacheBackgroundRefreshed:"au:fetch:cache:background:refreshed",CacheBackgroundRefreshing:"au:fetch:cache:background:refreshing",CacheBackgroundStopped:"au:fetch:cache:background:stopped"});class E{constructor(){this.storage=(0,i.hd)(a),this.p=(0,i.hd)(i.r_),this.ea=(0,i.hd)(i.xe),this.q=(0,i.hd)(u),this.H=[],this.O=-1,this.j=[],this.T=new Map}subscribe(t,e){const s=this.ea.subscribe(t,e);return this.H.push(s),s}subscribeOnce(t,e){const s=this.ea.subscribeOnce(t,e);return this.H.push(s),s}setStaleTimer(t,e,s){const i=this.p.setTimeout((async()=>{this.delete(t),await this.q.get(s);const e=this.getItem(t);this.ea.publish(y.CacheStaleRefreshed,{key:t,value:e}),this.N(i)}),e);this.j.push(i)}startBackgroundRefresh(t){!t||this.O>-1||(this.O=this.p.setInterval((()=>{this.ea.publish(y.CacheBackgroundRefreshing),this.T.forEach(((t,e)=>{this.delete(e),this.q.get(t).then((()=>{const t=this.getItem(e);this.ea.publish(y.CacheBackgroundRefreshed,{key:e,value:t})}))}))}),t))}stopBackgroundRefresh(){this.p.clearInterval(this.O),this.O=-1,this.ea.publish(y.CacheBackgroundStopped)}set(t,e,s,i){const o={data:e,...s};this.setItem(t,o,i)}get(t){return this.getItem(t)?.data}setItem(t,e,s){e.lastCached=Date.now(),this.storage.set(t,e),this.T.set(t,s),this.ea.publish(y.Set,{key:t,value:e})}getItem(t){if(!this.storage.has(t))return void this.ea.publish(y.CacheMiss,{key:t});const e=this.storage.get(t);if(!e?.staleTime||!e?.lastCached)return this.ea.publish(y.CacheHit,{key:t,value:e}),e;const s=Date.now();if(s>e.lastCached+(e.staleTime??0))this.ea.publish(y.CacheStale,{key:t,value:e});else{if(!(s>e.lastCached+(e.cacheTime??0)))return this.ea.publish(y.CacheHit,{key:t,value:e}),e;this.ea.publish(y.CacheExpired,{key:t,value:e})}}delete(t){this.storage.delete(t),this.ea.publish(y.Clear,{key:t})}clear(){this.storage.clear(),this.T.clear(),this.ea.publish(y.Reset),this.stopBackgroundRefresh(),this.j.forEach((t=>{this.p.clearTimeout(t)})),this.j.length=0}dispose(){this.clear(),this.H.forEach((t=>t.dispose())),this.ea.publish(y.Dispose)}N(t){this.p.clearTimeout(t);const e=this.j.indexOf(t);e>-1&&this.j.splice(e,1)}}const _={cacheTime:3e5,staleTime:0,refreshStaleImmediate:!1,refreshInterval:0};class w{constructor(t){this.P=(0,i.hd)(v),this.cf={..._,...t??{}}}request(t){if(this.P.startBackgroundRefresh(this.cf.refreshInterval),"GET"!==t.method)return t;const e=this.P.get(this.key(t));return this.mark(e)??t}response(t,e){if(!e)return t;if(t.headers.has(w.cacheHeader))return t;const s=this.key(e);return this.P.setItem(s,{data:t,...this.cf},e),this.cf?.refreshStaleImmediate&&this.cf.staleTime>0&&this.P.setStaleTimer(s,this.cf.staleTime,e),t}dispose(){this.P.stopBackgroundRefresh()}key(t){return`${w.prefix}${t.url}`}mark(t){return t?.headers.set(w.cacheHeader,"hit"),t}}w.prefix="au:interceptor:",w.cacheHeader="x-au-fetch-cache";class S{constructor(){this.cache=(0,i.hd)(i.r_).globalThis.indexedDB,this.getStore=()=>this.database.transaction(S.cacheName,"readwrite").objectStore(S.cacheName),this.delete=t=>{this.getStore().delete(t)},this.has=t=>this.getStore().count(t).result>0,this.set=(t,e)=>this.getStore().put(e,t),this.get=t=>this.getStore().get(t).result,this.clear=()=>{const t=this.getStore();t.getAllKeys().result.forEach((e=>{t.delete(e)}))},this.database=this.cache.open(S.cacheName).result}}S.cacheName="au-cache";const R=Object.freeze({fixed:0,incremental:1,exponential:2,random:3}),T={maxRetries:3,interval:1e3,strategy:R.fixed};class O{constructor(t){if(this.p=(0,i.hd)(i.r_),this.retryConfig={...T,...t??{}},this.retryConfig.strategy===R.exponential&&this.retryConfig.interval<=1e3)throw d(5007,this.retryConfig.interval)}request(t){return t.retryConfig||(t.retryConfig={...this.retryConfig},t.retryConfig.counter=0),t.retryConfig.requestClone=t.clone(),t}response(t,e){return delete e.retryConfig,t}responseError(t,e,s){const{retryConfig:i}=e,{requestClone:o}=i;return Promise.resolve().then((()=>{if(i.counter<i.maxRetries){const n=null==i.doRetry||i.doRetry(t,e);return Promise.resolve(n).then((n=>{if(n){i.counter++;const t=function(t){const{interval:e,strategy:s,minRandomInterval:i,maxRandomInterval:o,counter:n}=t;if("function"==typeof s)return t.strategy(n);switch(s){case R.fixed:return k[R.fixed](e);case R.incremental:return k[R.incremental](n,e);case R.exponential:return k[R.exponential](n,e);case R.random:return k[R.random](n,e,i,o);default:throw d(5008,s)}}(i);return new Promise((e=>this.p.setTimeout(e,isNaN(t)?0:t))).then((()=>{const t=o.clone();return"function"==typeof i.beforeRetry?i.beforeRetry(t,s):t})).then((t=>{const e={...t,retryConfig:i};return s.fetch(e)}))}throw delete e.retryConfig,t}))}throw delete e.retryConfig,t}))}}const k=[t=>t,(t,e)=>e*t,(t,e)=>1===t?e:e**t/1e3,(t,e,s=0,i=6e4)=>Math.random()*(i-s)+s]}}]);