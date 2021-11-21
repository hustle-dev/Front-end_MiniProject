# Front-end-Mini-Project

## https://gallerya.netlify.app

## 🏁 프로젝트 시작

8월 30일부터 9월 3일 까지 약 1주일 동안 그동안 배운 HTML과 CSS, Sass, Webpack등을 활용하여서 각 조만의 미니프로젝트를 진행하였다.

사실 발표 자료를 금요일 12시까지 올려야 하고 발표를 4시에 진행하였기 때문에 금요일은 발표 준비를 하는 시간이었고, 그 전 목요일의 경우 HTML&CSS 기술면접을 준비해야했기 때문에 주어진 시간은 거의 3일밖에 되진 않았던 것 같다.

그래서 8월 27일에 수업이 일찍 끝나고 어떤 주제로 프로젝트를 진행할지 고민하였는데 최종적으로 정한 목표는 배운 걸 사용하되, 멋있고 화려하게 구현하자고 생각하여 **자유롭게 사진을 올리는 웹페이지를 만들자**(html과 sass, js만 사용하였기 때문에 실제로 올릴 순 없고 정적인 페이지이다) 라고 결정을 내렸다.

## 🎇 미니 프로젝트 소개

### 페이지 첫 화면 및 웹 페이지 보러가기

<p align="center">  
  <img src="https://user-images.githubusercontent.com/53992007/142768379-960eff8f-8b81-4fe2-bca4-aa63b5749560.gif">
</p>


페이지를 처음 들어가게 되면 다음과 같은 화면을 볼 수 있다. 첫 화면 뿐만 아니라 최대한 움직이고 화려한 요소들을 넣기 위해서 애니메이션 효과들을 많이 사용하였다. 또한 반응형으로 만들어서 width가 768 사이즈 아래로 내려가게 되면 UI가 바뀌게 된다.

> 페이지의 모든 요소를 보고 싶다면 아래의 페이지로..
> [Free Gallery](https://gallerya.netlify.app/)

## 📌 프로젝트 과정에서 담당한 부분

### 인트로 영상


<p align="center">  
  <img src="https://user-images.githubusercontent.com/53992007/142768585-278a2602-0233-48a1-8587-b50cb2a4f657.gif">
</p>


> 이 UI는 야놀자 UI를 참고하였는데 이 웹 페이지가 사진 갤러리임을 말하고 싶어 pixabay에서 제공하는 무료 동영상 중 사진과 관련된 동영상을 가져왔다.

처음 개발할 때에는 화면에서 보는 것과 같이 정사각형이 아닌 비율이 다른 비율이었는데 css로 비율을 조정해보다가 안되어서 결국엔 프로젝트 팀원인 강희님이 동영상 비율을 편집하여 1:1 비율로 만들어 정사각형 모양으로 만들 수 있었다.

### 인기사진

<p align="center">  
  <img src="https://user-images.githubusercontent.com/53992007/142768681-dbfa2b43-db0d-4e91-8589-cc8cd737d1e6.gif">
</p>


> 이 UI는 모달창을 이용하여 만들었는데 wai-aria의 best practice를 참고하였다. 페이지가 반응형이기 때문에 width를 768아래로 줄여서 보면 새로운 배치를 볼 수 있다.

### 사진 취향의 animation

<p align="center">  
  <img src="https://user-images.githubusercontent.com/53992007/142768737-44086acf-e0f3-4ca6-a8b1-e3323be44c6f.gif">
</p>


> 인기사진 부분에서 `나의 사진 취향 알아보러 가기 버튼`을 누르면 위 페이지로 이동할 수 있다. 페이지에서 유저가 사진을 클릭하였을 시, 자신이 어떤 사진을 클릭하였는 지 알기 쉽게 하기 위해 hover 속성과 애니메이션을 주었다.

## ☠️ 진행 과정 중 생긴 난제

내가 맡은 부분은 위 뿐만 아니라 lighthouse 점수개선 또한 있었는데, 이 부분에서 어려움을 겪다가 결국 답을 찾아 해결하게 되었다.

### Lighthouse

페이지가 어느정도 완성되고 난 후, [Google Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ko)를 이용하여 페이지 점수를 측정해보았다.

#### 최적화 전

![](https://images.velog.io/images/hustle-dev/post/c33687f9-2af7-46b2-9db3-752e6229d38a/image.png)

> 왼쪽은 데스크탑 버전이고 오른쪽은 모바일 버전이다. 각각 94점과 88점이다.

위 사진에서 볼 수 있듯이, 만든 페이지의 취약 부분은 CLS부분이었다. 어떤 부분이 CLS점수를 악화시키고 있는지 확인해 보았는데 아래와 같이 이미지에 고정적인 크기를 주지 않아서였다.

![](https://images.velog.io/images/hustle-dev/post/985ba745-c77a-479e-b3b0-c20cdd41a31f/image.png)

처음에 궁금했던게, **이미지에 고정적인 크기를 주게되면 반응형인 웹페이지에서 어떻게 반응형으로 이미지의 크기를 조절할 수 있을 까?** 였는데 html의 img태그에 width, height 속성으로 이미지의 크기를 주게되면 나중에 css가 입혀지면서 반응형 크기에 맞게 속성을 줄 수 있다고 알게되었다.

따라서 아래와 같이 이미지마다 속성을 주어 문제를 해결 할 수 있을 것이라 생각했지만..

![](https://images.velog.io/images/hustle-dev/post/6ef53b15-c0b9-41b6-8935-4ad578f7d132/image.png)

여전히 CLS의 점수는 다음과 같았다.

![](https://images.velog.io/images/hustle-dev/post/d035b591-4322-4c33-a21b-6f380174d258/image.png)

그래서 다시한번 진단결과로 돌아가 문제를 찾던중 body요소가 큰 비중을 차지하고 있는 것을 발견하게 되었다.

![](https://images.velog.io/images/hustle-dev/post/7c3f338e-e684-4714-b6d6-c2dbd26cf51a/image.png)

이 부분과 관련하여 정확한 진단을 하기 위해 개발자 도구의 performance 탭에 들어가 확인을 하였는데

![](https://images.velog.io/images/hustle-dev/post/cf097953-5517-44fa-ba4d-22da09b503e5/image.png)

처음 스타일링이 되지 않은 페이지가 렌더링 된후, 스타일링이 된 페이지가 다시 한번 렌더링이 되어 **총 2번의 렌더링이 발생하고있었다!**

그 이유를 생각해보니 아래 그림과 같이 **webpack의 html plugin을 사용하면서 처음에 스타일링이 되지않은 html이 만들어져서 렌더링 된후, 웹팩에서 스타일까지 번들링된 html이 재 렌더링** 된다는 사실을 발견하였다

![](https://images.velog.io/images/hustle-dev/post/f18e42c2-519c-47ee-af60-0b804938ad16/image.png)

이 부분을 **처음에 webpack을 적용한 정적인 파일들을 만들고, 그 이후에 프로젝트를 실행시키는 방법**으로 문제를 해결하였다.

#### 최적화 후

![](https://images.velog.io/images/hustle-dev/post/52bd042f-08d1-42dd-94f5-fe877db972b7/image.png)

> 최적화 전보다 훨씬 점수가 좋아졌다. seo의 경우 meta태그를 추가하여 개선시켰고, accessibility의 경우 라이트하우스에서 명도대비에 문제가 있다고 하여 그 부분을 개선시켰다.

## 💡 배운점 & 느낀점

### 협업

![](https://images.velog.io/images/hustle-dev/post/5611ca4f-aba1-4d0f-8b1f-108b18c11fe7/image.png)

> 레포지토리 주소: https://github.com/hustle-dev/Front-end_MiniProject

**git flow**를 활용하는 것은 이번이 처음이었는데 얼마나 이것이 협업하는데 편하고 좋은 것인지 알게되었다. 처음에 main과 develop브런치를 만들어 팀원들은 개발 시에 feature 브런치를 만들어 그곳에 작업을 하고 다시 자신의 develop브런치에 머지를 하였다. 그 후에 풀리퀘를 보내 머지를 하였는데 이런 머지하는 과정에서 발생하는 conflict를 해결하고, 다른 팀원이 만든 코드를 받으면서 어떤식으로 협업하는 지 잘 알게 되었다.

### 성능 고려 시각

Lighthouse를 이용해서 점수를 측정하고 어느 부분이 부족한 지 파악하여 이 부분을 개선해 나가면서 성능적인 부분을 고려할 수 있는 시각을 많이 갖추게 되었던 것 같다. 또한 개선 과정에서 performance탭을 거의 처음으로 사용해보았는데 좀 더 이 부분에 대해서 공부해 보고 싶다는 생각이 들었다.
