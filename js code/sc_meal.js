let url = "https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010115&MLSV_YMD="
let today = new Date()
let tommorow = new Date()
tommorow.setDate(today.getDate()+1)
let dataform=new DateFormatter()
dataform.dateFormat='yyyyMMdd'
let req= new Request(url+dataform.string(today))
let json_today = await req.loadJSON()
req=new Request(url+dataform.string(tommorow))
let json_tommorow = await req.loadJSON()
var array = new Array(6)
if(!json_today.hasOwnProperty('RESULT')){
	for ( var j = 0 ;j<json_today['mealServiceDietInfo'][0]['head'][0]['list_total_count'];j++){
		var i=(json_today['mealServiceDietInfo'][1]['row'][j]['MMEAL_SC_CODE'])-1
		array[i]=json_today['mealServiceDietInfo'][1]['row'][j]['DDISH_NM'].replace(/[\.|0-9]/g, "").replace(/<br\/>/g,'\n')
		//console.log(i)
	}
}
if(!json_tommorow.hasOwnProperty('RESULT')){
	for ( var j = 0 ;j<json_tommorow['mealServiceDietInfo'][0]['head'][0]['list_total_count'];j++){
		var i=Number(json_tommorow['mealServiceDietInfo'][1]['row'][j]['MMEAL_SC_CODE'])+2
		array[i]=json_tommorow['mealServiceDietInfo'][1]['row'][j]['DDISH_NM'].replace(/[\.|0-9]/g, "").replace(/<br\/>/g,'\n')
		//console.log(json_tommorow['mealServiceDietInfo'][1]['row'])
	}
}
let widget =new ListWidget()
widget.backgroundColor = new Color("#FDEFF4")

let stack=widget.addStack()
stack.layoutHorizontally()
stack.topAlignContent()

if (today.getHours()<8){
	var init=0
}
else if (today.getHours()<13){
	var init=1
}
else if (today.getHours()<19){
	var init=2
}
else{
	var init=3
}
for (var i=0;i<6;i++){
	if(array[i]==null){
		array[i]='없음'
	}
}
var text=['조식\n','중식\n','석식\n','조식\n','중식\n','석식\n']
let text1=stack.addText(text[init]+String(array[init]))
text1.leftAlignText()
text1.font=new Font('DX영화자막 M',12)
text1.textColor=new Color('#524A4E')
init=init+1
stack.addSpacer()
let text2=stack.addText(text[init]+String(array[init]))
text2.leftAlignText()
text2.font=new Font('DX영화자막 M',12)
text2.textColor=new Color('#524A4E')
stack.addSpacer()
init=init+1
let text3=stack.addText(text[init]+String(array[init]))
text3.leftAlignText()
text3.font=new Font('DX영화자막 M',12)
text3.textColor=new Color('#524A4E')


if(!config.runsInWidget){
	widget.presentLarge()
}

Script.setWidget(widget)
Script.complete()
