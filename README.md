# scriptable 급식 정보 위젯 (ios)
![image](https://user-images.githubusercontent.com/41958835/158167464-f07890ed-ba9f-4169-80c1-e2c179009521.jpeg)
![image](https://user-images.githubusercontent.com/41958835/158172538-87facfbe-9127-486c-a2f0-a279ad8c1de6.png)
## scriptable 설치 및 스크립트 설치방법

이 위젯은 scriptable 앱을 다운받아야만 사용가능합니다.

[AppStore 링크](https://apps.apple.com/kr/app/scriptable/id1405459188)

앱설치 후 다음 스크립트를 다운받고 scriptable앱으로 열고 add to my script 를 눌러주세요.



[스크립트 다운로드](https://drive.google.com/file/d/1rt_DrWN0UJGHX3eB7ONuPQ3xOW2z6h_A)

```
//학교 코드 입력 (깃허브 readme파일 참조)
schul_code="7010115"
//[조식,중식,석식] 표시 옵션 (아래 예시는 조식 중식을 표시하고 석식을 안표시하는 경우)
let meal = [ true , true , false ]
```

그다음 코드 맨 윗줄에만 주목해주세요. 자기의 학교코드를 먼저 알아내야합니다.

[학교코드 조회](https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN17020190531110010104913&infSeq=1)

학교이름에 자기 학교이름을 넣고 검색하여 표준학교코드를 복사하여 코드 맨윗줄의 숫자 넣어져있는칸의 숫자를 대치해주세요.

![IMG_4528](https://user-images.githubusercontent.com/41958835/158175146-1833f923-ef28-43f4-9742-cab96d5f0746.jpeg)

예를들어 본인학교의 표준학교코드는 701... 입니다.
그다음 코드에 있는 조식/중식/석식의 표시여부를 원하는 것에 따라 true or false 를 입력해주세요.
이제 홈화면으로 오셔서 홈화면에 위젯을 추가하고 위젯설정에 들어가 script를 우리의 'scriptable_급식'을 선택하면 완성이됩니다.
![image](https://user-images.githubusercontent.com/41958835/158168330-160ae130-816e-4ad4-8a4f-8eb28477e5e5.jpeg)


