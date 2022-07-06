# react-6p5wxh

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-6p5wxh)

[] myDataSlice : column 선택 시 대량 데이터 속도 개선 필요
[] 속도 이슈 개선 : afterSelection -> afterSelectionEnd
[] 열의 데이터 수 다를 때 nan 처리.
[]nan 만 선택했을 때 high chart error발생함

[] 열 내 데이터 갯수가 다를 경우, 0으로 입력되는 문제

[] 함수화 정리좀 하자

Data container (quick chart)
[] 열 header
. [] 함수화 정리좀 하자

Data container (quick chart)
[] 열 header
[] graph에 열 header 입력
[x] 행 선택 시 오류(too much recursion)
행 전체 선택 시 선택 range가 (-1 ~ n)으로 선택됨. --> -1인 경우 0으로 선택 range 변경 (7/3)
[x] multi selection 적용 (7/3)
[x] correlation 분석 시 열 헤더 반영(7/3)
[] 열선택 후 개별셀 선택 못하게 할 것 --> 의미없는 선택임.
[] 열 선택 후 개별셀 선택 시 개별셀 선택으로 변경할 것
[] 동일 열 선택 시 동작 취소
[] 개별 셀 선택 후 열 선택 시 열 선택으로 변경할 것
[] Box plot 추가
[] data 의 group 간 중심값/sigma 차이가 있는지 검토
[] T 검정, Anova 검정
[] commonality analysis

Graph analysis
[] 상관관계가 있는 데이터가 어떤 것이 있는지 검토

통계 라이브러리

- correlation : Pearson correlation coefficient (https://en.wikipedia.org/wiki/Pearson_correlation_coefficient)
  https://www.npmjs.com/package/calculate-correlation

7/3

- multi selection에 대한 quick chart (histogram, series, correlation) 기능 추가
- 다중 correlation 시 열 이름 출력
