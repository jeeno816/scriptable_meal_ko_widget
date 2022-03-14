//학교 코드 입력 (깃허브 readme파일 참조)
schul_code="7010115"
//[조식,중식,석식] 표시 옵션 (아래 예시는 조식 중식이 있고 석식을 안표시하는 경우)
let meal = [ true , true , false ]




//밑에부터는 코드
let url = "https://open.neis.go.kr/hub/mealServiceDietInfo?&Type=json&pIndex=1&pSize=1&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE="+schul_code+"&MLSV_YMD="
let today = new Date()
let tommorow = new Date()
let aftertommorow = new Date()
let twoaftertommorow = new Date()
tommorow.setDate(today.getDate()+1)
aftertommorow.setDate(today.getDate()+2)
twoaftertommorow.setDate(today.getDate()+3)
let dataform=new DateFormatter()
dataform.dateFormat='yyyyMMdd'
let req= new Request(url+dataform.string(today))
let json_today = await req.loadJSON()
req=new Request(url+dataform.string(tommorow))
let json_tommorow = await req.loadJSON()
req=new Request(url+dataform.string(aftertommorow))
let json_aftertommorow = await req.loadJSON()
req=new Request(url+dataform.string(twoaftertommorow))
let json_twoaftertommorow = await req.loadJSON()
var array = new Array(12)
if(!json_today.hasOwnProperty('RESULT')){
	for ( var j = 0 ;j<json_today['mealServiceDietInfo'][0]['head'][0]['list_total_count'];j++){
		var i=(json_today['mealServiceDietInfo'][1]['row'][j]['MMEAL_SC_CODE'])-1
		array[i]=json_today['mealServiceDietInfo'][1]['row'][j]['DDISH_NM'].replace(/[\.|0-9]/g, "").replace(/<br\/>/g,'\n')
	}
}
if(!json_tommorow.hasOwnProperty('RESULT')){
	for ( var j = 0 ;j<json_tommorow['mealServiceDietInfo'][0]['head'][0]['list_total_count'];j++){
		var i=Number(json_tommorow['mealServiceDietInfo'][1]['row'][j]['MMEAL_SC_CODE'])+2
		array[i]=json_tommorow['mealServiceDietInfo'][1]['row'][j]['DDISH_NM'].replace(/[\.|0-9]/g, "").replace(/<br\/>/g,'\n')
	}
}
if(!json_aftertommorow.hasOwnProperty('RESULT')){
	for ( var j = 0 ;j<json_aftertommorow['mealServiceDietInfo'][0]['head'][0]['list_total_count'];j++){
		var i=Number(json_aftertommorow['mealServiceDietInfo'][1]['row'][j]['MMEAL_SC_CODE'])+5
		array[i]=json_aftertommorow['mealServiceDietInfo'][1]['row'][j]['DDISH_NM'].replace(/[\.|0-9]/g, "").replace(/<br\/>/g,'\n')
	}
}
if(!json_twoaftertommorow.hasOwnProperty('RESULT')){
	for ( var j = 0 ;j<json_twoaftertommorow['mealServiceDietInfo'][0]['head'][0]['list_total_count'];j++){
		var i=Number(json_twoaftertommorow['mealServiceDietInfo'][1]['row'][j]['MMEAL_SC_CODE'])+8
		array[i]=json_twoaftertommorow['mealServiceDietInfo'][1]['row'][j]['DDISH_NM'].replace(/[\.|0-9]/g, "").replace(/<br\/>/g,'\n')
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
for (var i=0;i<12;i++){
	if(array[i]==null){
		array[i]='없음'
	}
}
var text=['오늘조식\n','오늘중식\n','오늘석식\n','D-1 조식\n','D-1 중식\n','D-1 석식\n','D-2 조식\n','D-2 중식\n','D-2 석식\n','D-3 조식\n','D-3 중식\n','D-3 석식\n']
while(!meal[init%3]){
	init++
}
let text1=stack.addText(text[init]+String(array[init]))
text1.leftAlignText()
text1.font=new Font('DX영화자막 M',12)
text1.textColor=new Color('#524A4E')
init=init+1
while(!meal[init%3]){
	init++
}
stack.addSpacer()
let text2=stack.addText(text[init]+String(array[init]))
text2.leftAlignText()
text2.font=new Font('DX영화자막 M',12)
text2.textColor=new Color('#524A4E')
stack.addSpacer()
init=init+1
while(!meal[init%3]){
	init++
}
let text3=stack.addText(text[init]+String(array[init]))
text3.leftAlignText()
text3.font=new Font('DX영화자막 M',12)
text3.textColor=new Color('#524A4E')


if(!config.runsInWidget){
	widget.presentMedium()
}

Script.setWidget(widget)
Script.complete()
