Search.setIndex({envversion:46,filenames:["file_format","getting_started","implementing_stage","index","modules","upsg","upsg.export","upsg.fetch","upsg.model","upsg.transform","upsg.wrap","user_guide"],objects:{"":{upsg:[5,0,0,"-"]},"upsg.export":{csv:[6,0,0,"-"],np:[6,0,0,"-"],plot:[6,0,0,"-"]},"upsg.export.csv":{CSVWrite:[6,3,1,""]},"upsg.export.csv.CSVWrite":{input_keys:[6,1,1,""],output_keys:[6,1,1,""],run:[6,2,1,""]},"upsg.export.np":{NumpyWrite:[6,3,1,""],NumpyWriteError:[6,5,1,""]},"upsg.export.np.NumpyWrite":{Result:[6,1,1,""],input_keys:[6,1,1,""],output_keys:[6,1,1,""],result:[6,1,1,""],run:[6,2,1,""]},"upsg.export.plot":{Plot:[6,3,1,""]},"upsg.export.plot.Plot":{input_keys:[6,1,1,""],output_keys:[6,1,1,""],run:[6,2,1,""]},"upsg.fetch":{csv:[7,0,0,"-"],np:[7,0,0,"-"],sql:[7,0,0,"-"]},"upsg.fetch.csv":{CSVRead:[7,3,1,""]},"upsg.fetch.csv.CSVRead":{input_keys:[7,1,1,""],output_keys:[7,1,1,""],run:[7,2,1,""]},"upsg.fetch.np":{NumpyRead:[7,3,1,""]},"upsg.fetch.np.NumpyRead":{input_keys:[7,1,1,""],output_keys:[7,1,1,""],run:[7,2,1,""]},"upsg.fetch.sql":{SQLRead:[7,3,1,""]},"upsg.fetch.sql.SQLRead":{input_keys:[7,1,1,""],output_keys:[7,1,1,""],run:[7,2,1,""]},"upsg.model":{cross_validation:[8,0,0,"-"],grid_search:[8,0,0,"-"],multiclassify:[8,0,0,"-"],multimetric:[8,0,0,"-"]},"upsg.model.cross_validation":{CrossValidationScore:[8,3,1,""]},"upsg.model.cross_validation.CrossValidationScore":{input_keys:[8,1,1,""],output_keys:[8,1,1,""],pipeline:[8,1,1,""]},"upsg.model.grid_search":{GridSearch:[8,3,1,""]},"upsg.model.grid_search.GridSearch":{input_keys:[8,1,1,""],output_keys:[8,1,1,""],pipeline:[8,1,1,""]},"upsg.model.multiclassify":{Multiclassify:[8,3,1,""]},"upsg.model.multiclassify.Multiclassify":{input_keys:[8,1,1,""],output_keys:[8,1,1,""],pipeline:[8,1,1,""]},"upsg.model.multimetric":{Multimetric:[8,3,1,""],NumericMetricSpec:[8,3,1,""],NumericMetricSpec_:[8,1,1,""],VisualMetricSpec:[8,3,1,""],VisualMetricSpec_:[8,1,1,""]},"upsg.model.multimetric.Multimetric":{input_keys:[8,1,1,""],output_keys:[8,1,1,""],pipeline:[8,1,1,""]},"upsg.model.multimetric.NumericMetricSpec":{metric:[8,1,1,""],output_key:[8,1,1,""],title:[8,1,1,""]},"upsg.model.multimetric.VisualMetricSpec":{graph_title:[8,1,1,""],graph_x_label:[8,1,1,""],graph_y_label:[8,1,1,""],metric:[8,1,1,""],output_key_x:[8,1,1,""],output_key_y:[8,1,1,""]},"upsg.pipeline":{Connection:[5,3,1,""],Edge:[5,3,1,""],Node:[5,3,1,""],Pipeline:[5,3,1,""],PipelineException:[5,5,1,""],RunMode:[5,3,1,""]},"upsg.pipeline.Connection":{"__gt__":[5,2,1,""],connect_to:[5,2,1,""],edge:[5,1,1,""],key:[5,1,1,""],node:[5,1,1,""],other:[5,1,1,""],outgoing:[5,1,1,""]},"upsg.pipeline.Edge":{conn_from:[5,1,1,""],conn_to:[5,1,1,""],uid:[5,1,1,""]},"upsg.pipeline.Node":{"__call__":[5,2,1,""],"__getitem__":[5,2,1,""],"__gt__":[5,2,1,""],connect_to:[5,2,1,""],get_inputs:[5,2,1,""],get_outputs:[5,2,1,""],get_stage:[5,2,1,""],input_keys:[5,1,1,""],output_keys:[5,1,1,""],uid:[5,1,1,""]},"upsg.pipeline.Pipeline":{RUN_METHODS:[5,1,1,""],add:[5,2,1,""],is_equal_by_str:[5,2,1,""],run:[5,2,1,""],run_debug:[5,2,1,""],run_luigi:[5,2,1,""],run_luigi_quiet:[5,2,1,""],visualize:[5,2,1,""]},"upsg.pipeline.RunMode":{DBG:[5,1,1,""],LUIGI:[5,1,1,""],LUIGI_QUIET:[5,1,1,""],from_str:[5,1,1,""]},"upsg.stage":{MetaStage:[5,3,1,""],RunnableStage:[5,3,1,""]},"upsg.stage.MetaStage":{pipeline:[5,1,1,""]},"upsg.stage.RunnableStage":{run:[5,2,1,""]},"upsg.toaster":{DataToaster:[5,3,1,""],ToasterError:[5,5,1,""]},"upsg.toaster.DataToaster":{FINISHED:[5,1,1,""],FetchedConn:[5,3,1,""],PREPROC:[5,1,1,""],SPLIT:[5,1,1,""],UNINITIALIZED:[5,1,1,""],classify_and_report:[5,2,1,""],from_csv:[5,2,1,""],from_sql:[5,2,1,""],input_keys:[5,1,1,""],output_keys:[5,1,1,""],pipeline:[5,1,1,""],run:[5,2,1,""],split_by_query:[5,2,1,""],split_random:[5,2,1,""],states:[5,1,1,""],transform_select_cols:[5,2,1,""],transform_with_sklearn:[5,2,1,""]},"upsg.toaster.DataToaster.FetchedConn":{"__getnewargs__":[5,2,1,""],"__getstate__":[5,2,1,""],"__repr__":[5,2,1,""],conn:[5,1,1,""],key:[5,1,1,""]},"upsg.transform":{apply_to_selected_cols:[9,0,0,"-"],fill_na:[9,0,0,"-"],identity:[9,0,0,"-"],label_encode:[9,0,0,"-"],lambda_stage:[9,0,0,"-"],merge:[9,0,0,"-"],rename_cols:[9,0,0,"-"],split:[9,0,0,"-"],sql:[9,0,0,"-"],timify:[9,0,0,"-"]},"upsg.transform.apply_to_selected_cols":{ApplyToSelectedCols:[9,3,1,""]},"upsg.transform.apply_to_selected_cols.ApplyToSelectedCols":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],pipeline:[9,1,1,""]},"upsg.transform.fill_na":{FillNA:[9,3,1,""]},"upsg.transform.fill_na.FillNA":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.identity":{Identity:[9,3,1,""]},"upsg.transform.identity.Identity":{get_correspondence:[9,2,1,""],input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.label_encode":{LabelEncode:[9,3,1,""]},"upsg.transform.label_encode.LabelEncode":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.lambda_stage":{LambdaStage:[9,3,1,""]},"upsg.transform.lambda_stage.LambdaStage":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.merge":{Merge:[9,3,1,""]},"upsg.transform.merge.Merge":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.rename_cols":{RenameCols:[9,3,1,""]},"upsg.transform.rename_cols.RenameCols":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.split":{KFold:[9,3,1,""],Query:[9,3,1,""],QueryError:[9,5,1,""],SplitByInds:[9,3,1,""],SplitColumns:[9,3,1,""],SplitTrainTest:[9,3,1,""],SplitY:[9,3,1,""]},"upsg.transform.split.KFold":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.split.Query":{dump_ast:[9,2,1,""],input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.split.SplitByInds":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.split.SplitColumns":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.split.SplitTrainTest":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.split.SplitY":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.sql":{RunSQL:[9,3,1,""]},"upsg.transform.sql.RunSQL":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.transform.timify":{Timify:[9,3,1,""]},"upsg.transform.timify.Timify":{input_keys:[9,1,1,""],output_keys:[9,1,1,""],run:[9,2,1,""]},"upsg.uobject":{SQLTableInfo:[5,3,1,""],SQLTableInfo_:[5,1,1,""],UObject:[5,3,1,""],UObjectException:[5,5,1,""],UObjectPhase:[5,3,1,""]},"upsg.uobject.SQLTableInfo":{conn:[5,1,1,""],conn_params:[5,1,1,""],db_url:[5,1,1,""],table:[5,1,1,""]},"upsg.uobject.UObject":{cleanup:[5,2,1,""],from_csv:[5,2,1,""],from_dataframe:[5,2,1,""],from_dict:[5,2,1,""],from_external_file:[5,2,1,""],from_np:[5,2,1,""],from_sql:[5,2,1,""],get_image:[5,2,1,""],get_phase:[5,2,1,""],is_finalized:[5,2,1,""],to_csv:[5,2,1,""],to_dataframe:[5,2,1,""],to_dict:[5,2,1,""],to_external_file:[5,2,1,""],to_np:[5,2,1,""],to_sql:[5,2,1,""],write_to_read_phase:[5,2,1,""]},"upsg.uobject.UObjectPhase":{All:[5,1,1,""],Read:[5,1,1,""],Write:[5,1,1,""]},"upsg.utils":{datetime64_to_datetime:[5,4,1,""],dict_to_np_sa:[5,4,1,""],get_resource_path:[5,4,1,""],html_escape:[5,4,1,""],import_object_by_name:[5,4,1,""],is_sa:[5,4,1,""],np_dtype_is_homogeneous:[5,4,1,""],np_nd_to_sa:[5,4,1,""],np_process_row:[5,4,1,""],np_process_row_elmt:[5,4,1,""],np_sa_to_dict:[5,4,1,""],np_sa_to_nd:[5,4,1,""],np_to_sql:[5,4,1,""],np_type:[5,4,1,""],obj_to_str:[5,4,1,""],random_table_name:[5,4,1,""],sql_to_np:[5,4,1,""],utf_to_ascii:[5,4,1,""]},"upsg.wrap":{wrap_sklearn:[10,0,0,"-"]},"upsg.wrap.wrap_sklearn":{WrapSKLearnException:[10,5,1,""],unpickle_estimator:[10,4,1,""],unpickle_metric:[10,4,1,""],wrap:[10,4,1,""],wrap_and_make_instance:[10,4,1,""]},upsg:{"export":[6,0,0,"-"],fetch:[7,0,0,"-"],model:[8,0,0,"-"],pipeline:[5,0,0,"-"],stage:[5,0,0,"-"],toaster:[5,0,0,"-"],transform:[9,0,0,"-"],uobject:[5,0,0,"-"],utils:[5,0,0,"-"],wrap:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class","4":"py:function","5":"py:exception"},terms:{"0x10ecda410":[],"0x10ecda488":[],"0x10ecda500":[],"0x10fd76050":5,"0x10fd760c8":5,"0x10fd76140":5,"1x1":8,"__call__":5,"__entry_nod":2,"__exit_nod":2,"__getitem__":5,"__getnewargs__":5,"__getstate__":5,"__gt__":5,"__init__":2,"__pipelin":2,"__repr__":5,"__stage":5,"__str__":5,"_in":9,"_out":9,"_upsg_":5,"_upsg_empty_dict":0,"boolean":[5,9],"case":[5,11],"class":[2,5,6,7,8,9,10,11],"default":[5,8,9,11],"export":[],"final":[5,8],"float":5,"function":[5,9,10,11],"import":[1,2,5,10,11],"int":[5,8,9],"long":11,"new":9,"return":[2,5,9,10,11],"true":[5,7,8,9],"try":[8,11],abov:[5,11],access:5,accord:9,accur:5,across:1,actual:[2,5],acycl:11,add:[1,2,5,11],addit:[0,2,6,11],after:[2,5,11],alia:[5,8],all:[2,5,9,10,11],allow:[2,9,11],alreadi:[5,11],also:[5,9,10,11],alter:[2,9],altern:[5,11],alwai:[10,11],among:[5,8],amount:2,analog:9,ani:[0,5,9,11],anoth:[5,11],ansi:[5,11],anticip:11,api:[0,5,7,9,11],appear:[0,2,9],append:9,appli:9,apply_to_selected_col:[],applytoselectedcol:9,arbitrari:[9,11],arbitrarili:10,arg:[5,6,9,10],argument:[2,5,7,8,9,10,11],around:11,arrai:[1,2,5,6,7,9,11],array_0:2,array_1:2,array_2:2,ascii:5,assign:[5,9,10,11],associ:[5,8],assum:[2,11],ast:9,attempt:8,attr:[],attribut:[0,5,11],auc:[8,10],automat:[2,5,8],avail:[5,6,8],averag:8,avers:5,avoid:5,axi:[6,8],back:11,backag:10,base:[5,6,7,8,9,10],baseestim:[8,10],baseestimat:10,baseprint:[],bash:11,been:[2,5,8,11],befor:[5,11],behavior:[9,11],below:11,best:8,between:[5,11],binop:9,binop_expr:9,block:11,boilerpl:11,bool:[5,9],both:11,build:[1,2,5,11],built:11,bunch:11,calc_sum:2,calcul:2,call:[0,2,5,9,10,11],can:[0,2,5,8,9,10,11],cannot:[2,5],care:[1,11],cast:5,cat:11,categori:9,charact:5,check:1,choic:5,choos:[2,5],chosen:[5,8],circumst:5,classif:11,classifi:[1,8,11],classify_and_report:[5,11],cleanup:[5,11],clf_and_params_dict:[5,8],clf_node:5,clf_stage:8,cluster:11,code:[1,11],col:5,col_nam:9,collect:[2,5,11],collid:5,color:[5,11],colum:9,column:[0,1,5,9,11],com:1,come:2,common:11,commun:5,compil:8,complement:[5,9],complement_ind:9,complic:11,comput:2,conceptu:[5,11],config:5,configur:[5,8],conform:[0,5,7,9],conn:5,conn_from:5,conn_param:[0,5,7,9],conn_to:5,connect:7,connect_to:5,consequ:[2,5],consist:[5,9],constant:11,construct:[2,8,11],constructor:10,contain:[5,9],content:[],context:11,contigu:5,contrast:8,contriv:5,conveni:[5,11],convers:5,convert:5,cookbook:5,coord:6,copi:5,core:[5,7,9,11],correct:[2,9,11],correctli:11,correspond:[2,5,8,9,10],could:[2,11],creat:[0,5,9,11],create_t:0,cross:8,cross_valid:[],crossvalidationscor:8,csv:[],csvread:[2,7,11],csvwrite:[1,2,6,11],current:[1,5,10],curv:8,cycl:11,data:[],databas:[0,5,7,9],datafram:[5,9,11],dataset:1,datatime64:5,datatoast:[5,11],datatyp:5,date:[9,11],datetim:[5,9],datetime64:[0,5,9],datetime64_to_datetim:5,db_url:[0,5,7,9],dbapi:5,dbg:[5,11],deal:11,debug:[],def:2,default_valu:9,defin:[2,9],delimit:[5,7],deliv:2,depend:[2,10,11],design:[1,11],detail:11,determin:[0,5,11],dev:[5,7,9,11],dict:[2,5,6,7,8,9],dict_to_np_sa:5,dictionari:[0,2,5,7,8,9],did:[9,11],differ:[1,5,9,11],digit:1,digits_data:1,digits_target:1,dimension:5,direct:[5,11],directli:[5,10],directori:5,discuss:11,disk:5,displai:5,do_custom_join:9,doc:[5,7,9],doe:[5,9,11],don:[9,11],drop:5,dssg:1,dt_col:0,dtype:[5,7],dump:9,dump_ast:9,each:[0,2,5,8,11],edg:[5,11],effect:5,either:[2,5,8,9,10,11],element:[2,5,9],elmtwise_prod:2,elmtwise_sum:2,els:[2,9],elsewher:[2,9],embed:2,employe:9,employee_id:9,empti:0,encapsul:5,encod:[0,2,5,9],end:2,end_dt:9,engin:[5,7,9],ensur:11,entir:2,entri:[0,2,5,8,11],entry_nod:2,entry_stag:2,enumer:5,environ:1,environment:[],equal:[5,9],equival:[5,10,11],error:5,escap:5,especi:11,estim:[5,8,10,11],etc:[0,9],even:2,event:5,everi:[0,5],everyth:[2,5,9],exactli:9,exampl:[],exce:5,except:[5,6,9,10],exclud:5,execut:[5,9],exist:11,exit:2,exit_nod:2,exit_stag:2,expect:[2,9,11],explicit:2,explicitli:11,expos:11,expr:9,express:11,extern:[0,5],extract:9,extrem:11,factor_1:11,factor_2:11,failur:5,fals:[5,9],featur:11,fed:8,feedback:11,fetch:[],fetchedconn:5,few:11,field:5,file:[0,5,6,8,11],file_nam:[5,6,8],filenam:[0,5,6,7],fill:[9,11],fill_na:[],fill_node_na:11,filled_data:11,fillna:[9,11],find:[5,8],finish:5,first:[0,5,9,11],first_fifti:9,fit:10,fit_param:10,fit_transform:10,five:[],flatten:2,flavor:0,flexibl:11,fmt:5,fmt_arg_foot:[],fmt_arg_head:[],fmt_doc_foot:[],fmt_doc_head:[],fmt_node_foot:[],fmt_node_head:[],fmt_row_1:[],fmt_row_2:[],fold:[8,9],follow:[0,1,5,9,11],footer_print:[],former:2,found:8,fpr:10,framework:[5,11],from:[1,2,5,7,8,9,10,11],from_:[2,5,11],from_csv:[5,11],from_datafram:5,from_dict:5,from_external_fil:5,from_np:[2,5],from_sql:5,from_str:5,fulfil:11,full:[2,5,11],fulli:[5,8,10],fun:10,func:9,further:[9,11],gamma:1,gener:[2,5,7,8,9,10,11],genfromtxt:[5,7],get_correspond:9,get_file_nam:[],get_imag:5,get_input:5,get_map:[],get_output:5,get_param:10,get_phas:5,get_resource_path:5,get_stag:5,git:1,github:1,give:[8,11],given:[5,8,9],good:[1,11],graph:[5,8,11],graph_out:5,graph_titl:8,graph_x_label:8,graph_y_label:8,graphprint:[],graphviz:[1,5,11],grid:8,grid_search:[],gridsearch:8,group:0,guid:[],had:0,hadoop:11,handl:9,handle_charref:[],handle_data:[],handle_endtag:[],handle_entityref:[],handle_starttag:[],happen:5,have:[0,2,5,9,10,11],hdf5:[0,1,5],hdf5_imag:5,header:5,header_print:[],help:11,here:[2,11],heterogen:5,higher:5,highest:8,highlight:2,homogen:5,hour:9,how:[0,1],howev:[9,11],html:[5,7,9,11],html_escap:5,html_map:5,htmlparser:[],http:[5,7,9],human:11,ident:[],iff:5,implement:[],import_by_nam:5,import_object_by_nam:5,imput:[10,11],impute_stag:10,in_b_1:11,in_b_2:11,in_kei:9,in_nod:5,in_to_out:9,includ:11,incom:5,incomplete_data:11,incorpor:11,ind:9,index:[3,9],individu:5,inform:[2,5],init:9,initi:[2,9,11],inner:2,inner_pipelin:2,input0:[1,2,9],input0_out:2,input1:[1,2,9],input1_out:2,input2:9,input:[1,2,5,6,8,9,10,11],input_arg:[],input_kei:[2,5,6,7,8,9,11],input_left:9,input_right:9,insert:5,insid:[0,11],instanc:[5,10],instead:5,instruct:9,int64:0,intend:[9,11],interact:11,interchang:1,interfac:[],intermediari:5,intern:[0,5],interpret:[0,2],intervent:2,invalid:5,invok:[5,11],involv:[5,11],is_equal_by_str:5,is_fin:5,is_sa:5,iso:9,iso_8601_date_or_datetime_str:9,job:[5,11],join:9,just:5,kei:[0,2,5,6,7,8,9,10,11],keyword:[2,5,7,8,9,10],kfold:[8,9],kfold_kwarg:8,know:9,kwarg:[2,5,6,7,9,10],label:[5,6,8,11],label_encod:[],labelencod:9,lambda:[2,9],lambda_stag:[],lambdastag:[],langaug:9,languag:[1,11],larg:11,larger:[2,5],last:11,latter:2,learn:1,least:[5,8,9,11],left:9,left_on:9,length:[5,9],less:5,let:11,level:5,librari:[1,5,7,9,11],like:[2,5,8,9,11],limit:11,line:11,linear:[5,11],link:5,list:[2,5,6,8,9,11],liter:9,live_onli:5,load:1,load_digit:1,local:5,locat:[0,8],log:5,logging_conf_fil:5,longest:5,look:[2,9],loop:11,luigi:[5,11],luigi_quiet:5,machin:1,mai:[5,11],make:[5,6,8,9,11],manag:5,mandatori:5,manipul:11,manual:11,map:[1,9],map_fil:[],mappars:[],mask:9,match:9,matplotlib:6,max_col:[],mean:11,meant:0,median:10,member:5,memori:[5,11],mere:[5,11],merg:[],method:[0,2,5,7,9,10,11],methodolog:1,metric:[5,8,10,11],might:11,minim:11,minut:11,missing_valu:10,mode:[5,11],model:[],modul:[],more:[5,9,11],most:[1,5,11],mostli:9,multiclassifi:[],multimetr:[],multipl:[2,5],multipli:2,must:[2,5,8,9,11],my_func:9,n_arrai:9,n_fold:[8,9],n_output:9,name:[0,2,5,6,7,8,9,10,11],namedtupl:5,nan:[9,11],ndarrai:[5,6,7],necessarili:2,need:[1,2,9,11],nice:5,node:[2,5,11],node_a:11,node_b:11,node_c:11,node_clf:1,node_csv:1,node_data:1,node_fill_na:11,node_read:11,node_read_csv:11,node_split:1,node_target:1,node_writ:11,node_write_csv:11,none:[5,7,8,9],nonstructur:5,notat:11,note:[2,5,11],notic:2,now:1,np_dtype_is_homogen:5,np_nd_to_sa:5,np_process_row:5,np_process_row_elmt:5,np_sa_to_dict:5,np_sa_to_nd:5,np_to_sql:5,np_type:5,nth:5,number:[5,8,9,11],numericmetricspec:8,numericmetricspec_:8,numpi:[1,2,5,6,7,9,11],numpyread:[1,7],numpywrit:6,numpywriteerror:6,obj_to_str:5,object:10,offer:[5,7],old:9,omit:[2,11],onc:[5,11],onli:[2,5,9,11],oper:[2,5,9],order:[2,5,9,11],ordereddict:5,org:[5,7,9],organ:11,otherwis:5,our:[2,5,9,11],out:[1,11],out_a:11,out_c:11,out_fil:[],out_kei:9,out_nod:5,outer:2,outgo:5,output0:9,output1:9,output2:9,output:[6,7,10],output_arg:[],output_ind:9,output_kei:[2,5,6,7,8,9,11],output_key_i:8,output_key_x:8,outputs_request:[2,5,6,7,9],over:8,own:[2,5,11],page:3,panda:[1,5,9,11],parallel:2,param1:8,param2:8,param:[8,10],paramet:[0,5,6,7,8,9,10,11],params_dict:8,params_in:10,params_out:[8,10],paramt:8,partial:2,particip:0,particular:0,pass:[2,5,6,7,8,9,10,11],path:5,pattern:9,pdb:5,pdf:[0,5],pep:[5,7,9],per:8,perform:[2,5,8,11],perman:5,permiss:5,pertain:5,phase:[2,5,11],pick:11,pickl:[5,10],pip:1,pipe:11,pipelin:[],pipeline_generated_object:5,pipeline_object:5,pipelineexcept:5,plain:5,plot:[],plot_fil:6,plotlib:1,png:0,png_file:[],popul:2,posit:10,possibl:2,postgresql:5,potenti:5,pre:11,precis:[8,10],precision_recall_curv:[8,10],pred_log_proba:10,pred_proba:[8,10,11],predicit:8,predict:[8,10],predict_log_proba:10,predict_proba:10,prefix:5,prepar:5,preproc:5,preprocess:[9,10,11],present:[2,5,10],previou:[2,11],primari:11,primarili:1,primary_expr:9,princip:[0,11],print:[5,11],printer:[],priori:9,probabl:[5,8],problem:1,process:[5,11],prod:2,prod_nod:2,prod_stag:2,produc:9,product:2,product_in:2,program:[0,5,11],progress:[5,11],properti:2,provid:[1,2,5,7,8,9,10,11],provied:5,purpos:[5,9],put:[2,9],pypi:5,pyplot:6,pytabl:[0,1],qualifi:[5,8,10],queri:[5,9],queryerror:9,quot:9,random:[5,8],random_st:1,random_table_nam:5,rather:[1,2,5,8,11],read:[0,2,5,7,11],read_in:11,read_input0_from_csv:2,read_input1_from_csv:2,readabl:[5,11],reader:11,real:5,realli:5,recal:[8,10],recarrai:5,recov:5,refer:[5,7,9],referenc:0,regard:5,regardless:5,rel:5,rel_0_9:[5,7,9],relat:5,releas:11,releg:5,renam:9,rename_col:[],rename_dict:9,renamecol:9,render:5,replac:[5,11],report:[5,8,9,11],report_fil:8,report_file_nam:[5,8,11],report_path:5,repres:[0,5,7,9],represent:[0,5],request:[2,5],resembl:11,resid:5,resourc:5,respect:[2,10],rest:[0,2,5,9],result:[1,2,5,6,9,10,11],right:9,right_on:9,roc:8,roc_auc_scor:10,roc_curv:[8,10],roc_stag:10,row:[0,5,9],run:[6,7],run_debug:[5,11],run_luigi:[5,11],run_luigi_quiet:5,run_method:5,run_mod:5,runmod:5,runsql:9,sai:[2,5,9],salari:9,same:[2,5,9,10,11],sample_weight:10,sarah:9,save:6,savetxt:5,scalabl:11,scale:[],schedul:[2,11],schema:5,scikit:1,scipi:[5,7,9],score:[8,10],score_kei:8,seamlessli:11,search:[3,8],second:[0,9,11],section:2,see:[2,11],select:[2,5,9,11],self:[2,5],sent:2,separ:2,sequenc:5,serial:[5,11],set:[5,8,9,11],set_param:10,setup:11,sever:11,share:[1,9,11],should:[0,1,2,5,7,8,9,11],side:5,signifi:[5,8],signific:2,silent:[5,11],similar:9,simpl:11,simplifi:5,sinc:[9,11],singl:[0,2,5],single_step:5,six:11,size:8,sk_cl:10,sklearn:10,small:[5,9],social:1,some:[2,5,7,8,9,11],somebodi:2,somewher:2,specif:[0,5,7,8,9],specifi:[5,9,11],split:[],split_by_queri:[5,11],split_random:5,splitbyind:9,splitcolumn:9,spliti:9,splittraintest:[1,9],sql:[],sql_1:2,sql_to_np:5,sqlalchemi:[0,1,5,7,9],sqlread:7,sqltableinfo:5,sqltableinfo_:5,stage:[],stage_a:11,stage_b:11,stage_c:11,stage_cl:9,stage_clf:1,stage_csv:1,stage_data:1,stage_fill_na:11,stage_print:[],stage_read:11,stage_read_csv:11,stage_split_data:1,stage_target:1,stage_writ:11,stage_write_csv:11,standard:1,standardscal:11,start_dt:9,state:5,statu:5,status_nod:5,still:11,storag:0,storage_method:0,store:[0,2,8],str:[5,6,7,8,9,10],str_cleanup:[],strategi:10,string:[0,5,8,9,11],structur:[2,5,9,11],sub:5,subclass:[2,8,10,11],subgraph:5,sublass:2,submodul:[],subpackag:[],suitabl:11,sum:2,sum_and_mult:2,sum_in:2,sum_nod:2,sum_stag:2,sumandmult:2,suppli:9,support:[10,11],suppos:[0,11],sure:9,svc:[1,5],svm:[1,5],synonym:5,syntax:[5,11],system:11,tabl:[],table_nam:[5,7],tag:[],take:[1,2,5,9,11],target:[1,5,10],task:11,tbl:5,tbl_name:[0,5],team:1,term_print:[],termin:[5,11],test0:[1,9],test0_0:9,test0_1:9,test1:9,test1_0:9,test1_1:9,test2:9,test2_0:9,test2_1:9,test:[1,5,8,9,11],test_siz:1,test_toast:11,than:[1,2,5,8,9,11],thei:[2,5,9,11],them:[2,5,8,9,11],thi:[0,1,2,5,6,7,8,9,11],thing:11,third:9,those:[5,9],though:2,thousand:2,threshold:10,through:[5,8,11],time:9,timifi:[],titl:[6,8],to_:[2,5,11],to_csv:5,to_datafram:5,to_dict:5,to_external_fil:5,to_np:[2,5],to_postgr:5,to_return:2,to_split:9,to_sql:[2,5],toaster:[],toastererror:5,togeth:[],tool:11,tpr:10,train0:[1,9],train0_0:9,train0_1:9,train1:[1,9],train1_0:9,train1_1:9,train2:9,train2_0:9,train2_1:9,train:[1,9,11],train_test_split:9,transform:[],transform_select_col:[5,11],transform_with_sklearn:[5,11],transformermixin:10,transpar:2,treat:5,truncat:[5,11],tupl:[2,5,9,11],two:[2,5,9,11],type:[0,5,9,11],typelength:5,u_object:[],uid:5,unicod:5,uniniti:5,uniqu:[2,5],unit:5,univers:[],unix:11,unless:[5,11],unlik:5,unop:9,unpickl:10,unpickle_estim:10,unpickle_metr:10,unspecifi:[5,9],uo_prod:2,uo_sum:2,uobject:[],uobjectexcept:5,uobjectphas:[2,5],upload:5,upsg_debug_output_mod:5,upsg_inf:0,upsg_luigi:5,upsg_run_mod:[5,11],url:[0,5,7,9],user:[],uspg:11,usual:11,utf_to_ascii:5,util:[],val:5,valid:8,valu:[0,5,8,9,10,11],variabl:[2,9],variou:11,vector:[1,5],vener:11,version:11,view:5,virtual:5,visual:[],visualmetricspec:8,visualmetricspec_:8,vizual:5,wai:[1,11],want:2,were:2,what:[5,9,11],whatev:11,when:[2,5,11],where:[5,8,9,11],whether:[2,5],which:[0,2,5,6,7,8,9,10,11],wiki:5,wise:2,without:[2,9,11],work:[1,2,5,11],workflow:11,would:[2,5,9,11],wrap:[],wrap_and_make_inst:[1,10,11],wrap_sklearn:[],wrappedimput:10,wrappedroc:10,wrapper:11,wrapsklearnexcept:10,write:[0,1,2,5,6,8,11],write_out:11,write_prod_to_csv:2,write_sum_to_csv:2,write_to_read_phas:5,writer:11,written:[5,11],www:[5,7,9],x_new:10,x_test:[1,5,8,10,11],x_train:[1,5,8,10,11],xlabel:6,y_col:5,y_pred:[1,8,10,11],y_test:[8,10,11],y_train:[1,8,10,11],y_true:8,yellow:2,yet:5,ylabel:6,you:[1,2,9,11],your:11,zero:11},titles:["The .upsg Format","Getting Started","Implementing a Stage","Welcome to UPSG&#8217;s documentation!","upsg","upsg package","upsg.export package","upsg.fetch package","upsg.model package","upsg.transform package","upsg.wrap package","User Guide"],titleterms:{"export":[6,11],apply_to_selected_col:9,connect:11,content:[5,6,7,8,9,10],cross_valid:8,csv:[6,7],data:11,debug:11,document:3,environment:11,exampl:1,fetch:[7,11],fill_na:9,format:0,get:1,grid_search:8,guid:11,ident:9,implement:2,indic:3,instal:1,interfac:11,introduct:1,label_encod:9,lambda_stag:9,lambdastag:11,merg:9,metastag:2,model:[8,11],modul:[5,6,7,8,9,10,11],multiclassifi:8,multimetr:8,next:1,object:11,option:1,other:1,output:11,packag:[1,5,6,7,8,9,10],pipelin:[5,11],plot:6,python:1,rename_col:9,requir:1,run:11,runnablestag:2,sklearn:11,split:9,sql:[7,9],stage:[2,5,11],start:1,step:1,submodul:[5,6,7,8,9,10],subpackag:5,tabl:3,timifi:9,toaster:[5,11],togeth:11,transform:[9,11],univers:11,uobject:5,upsg:[0,3,4,5,6,7,8,9,10],user:11,util:[5,11],variabl:11,visual:11,welcom:3,wrap:[10,11],wrap_sklearn:10}})