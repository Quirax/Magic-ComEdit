import * as Blockly from 'blockly';
import * as En from 'blockly/msg/en';

Object.assign(Blockly.Msg, En);

Blockly.Msg["ADD_COMMENT"] = "주석 추가";
Blockly.Msg["CANNOT_DELETE_VARIABLE_PROCEDURE"] = "'%2' 함수 정의의 일부이기 때문에 '%1' 변수를 삭제할 수 없습니다";
Blockly.Msg["CHANGE_VALUE_TITLE"] = "값 바꾸기:";
Blockly.Msg["CLEAN_UP"] = "블록 정리";
Blockly.Msg["COLLAPSED_WARNINGS_WARNING"] = "축소된 블록 중에 경고가 있습니다.";
Blockly.Msg["COLLAPSE_ALL"] = "블록 축소";
Blockly.Msg["COLLAPSE_BLOCK"] = "블록 축소";

Blockly.Msg["CONTROLS_FLOW_STATEMENTS_HELPURL"] = "https://ko.wikipedia.org/wiki/%EC%A0%9C%EC%96%B4_%ED%9D%90%EB%A6%84";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK"] = "현재 반복 실행 블록을 빠져나갑니다.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE"] = "나머지 반복 부분을 더 이상 실행하지 않고, 다음 반복을 수행합니다.";
Blockly.Msg["CONTROLS_FLOW_STATEMENTS_WARNING"] = "경고: 이 블록은 반복 실행 블록 안에서만 사용됩니다.";

Blockly.Msg["CONTROLS_FOREACH_HELPURL"] = "https://ko.wikipedia.org/wiki/For_%EB%A3%A8%ED%94%84#.EC.9E.84.EC.9D.98.EC.9D.98_.EC.A7.91.ED.95.A9";
Blockly.Msg["CONTROLS_FOREACH_TOOLTIP"] = "리스트 안에 들어있는 각 항목들을, 순서대로 변수 '%1' 에 한 번씩 저장시키고, 그 때 마다 명령을 실행합니다.";

Blockly.Msg["CONTROLS_FOR_HELPURL"] = "https://ko.wikipedia.org/wiki/For_%EB%A3%A8%ED%94%84";
Blockly.Msg["CONTROLS_FOR_TOOLTIP"] = "변수 \"%1\"은 지정된 간격으로 시작 수에서 끝 수까지 바뀌며, 그 때마다 지정된 블록을 반복 수행합니다.";

Blockly.Msg["CONTROLS_IF_ELSEIF_TOOLTIP"] = "\"if\" 블록에 조건 검사를 추가합니다.";
Blockly.Msg["CONTROLS_IF_ELSE_TOOLTIP"] = "\"if\" 블록의 마지막에, 모든 검사 결과가 거짓인 경우 실행할 부분을 추가합니다.";
Blockly.Msg["CONTROLS_IF_HELPURL"] = "https://ko.wikipedia.org/wiki/%EC%A1%B0%EA%B1%B4%EB%AC%B8";
Blockly.Msg["CONTROLS_IF_IF_TOOLTIP"] = "섹션을 추가, 제거하거나 순서를 변경하여 이 if 블록을 재구성합니다.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_1"] = "조건식의 계산 결과가 참이면, 명령을 실행합니다.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_2"] = "조건식의 계산 결과가 참이면, 첫 번째 블록의 명령을 실행하고, 그렇지 않으면 두 번째 블록의 명령을 실행합니다.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_3"] = "첫 번째 조건식의 계산 결과가 참이면, 첫 번째 블록의 명령을 실행하고, 두 번째 조건식의 계산 결과가 참이면, 두 번째 블록의 명령을 실행합니다.";
Blockly.Msg["CONTROLS_IF_TOOLTIP_4"] = "첫 번째 조건식의 계산 결과가 참이면, 첫 번째 블록의 명령을 실행하고, 두 번째 조건식의 계산 결과가 참이면, 두 번째 블록의 명령을 실행하고, ... , 어떤 조건식의 계산 결과도 참이 아니면, 마지막 블록의 명령을 실행합니다.";

Blockly.Msg["CONTROLS_REPEAT_HELPURL"] = "https://ko.wikipedia.org/wiki/For_루프";
Blockly.Msg["CONTROLS_REPEAT_TOOLTIP"] = "지정된 횟수만큼 명령들을 반복실행합니다.";

Blockly.Msg["CONTROLS_WHILEUNTIL_HELPURL"] = "https://ko.wikipedia.org/wiki/While_%EB%A3%A8%ED%94%84";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL"] = "값이 거짓일 때 아래 블록들의 명령을 반복합니다.";
Blockly.Msg["CONTROLS_WHILEUNTIL_TOOLTIP_WHILE"] = "값이 참일 때 아래 블록들의 명령을 반복합니다.";

Blockly.Msg["DELETE_ALL_BLOCKS"] = "모든 블록 %1개를 삭제하겠습니까?";
Blockly.Msg["DELETE_BLOCK"] = "블록 삭제";
Blockly.Msg["DELETE_VARIABLE"] = "'%1' 변수를 삭제합니다";
Blockly.Msg["DELETE_VARIABLE_CONFIRMATION"] = "'%2' 변수에서 %1을(를) 삭제하시겠습니까?";
Blockly.Msg["DELETE_X_BLOCKS"] = "블록 %1개 삭제";
Blockly.Msg["DISABLE_BLOCK"] = "블록 비활성화";
Blockly.Msg["DUPLICATE_BLOCK"] = "복제";
Blockly.Msg["DUPLICATE_COMMENT"] = "주석 복제하기";
Blockly.Msg["ENABLE_BLOCK"] = "블록 활성화";
Blockly.Msg["EXPAND_ALL"] = "블록 확장";
Blockly.Msg["EXPAND_BLOCK"] = "블록 확장";
Blockly.Msg["EXTERNAL_INPUTS"] = "외부 입력";
Blockly.Msg["HELP"] = "도움말";
Blockly.Msg["INLINE_INPUTS"] = "내부 입력";
Blockly.Msg["IOS_CANCEL"] = "취소";
Blockly.Msg["IOS_ERROR"] = "오류";
Blockly.Msg["IOS_OK"] = "확인";

Blockly.Msg["IOS_PROCEDURES_ADD_INPUT"] = "+ 입력 추가";
Blockly.Msg["IOS_PROCEDURES_ALLOW_STATEMENTS"] = "Allow statements";  // untranslated
Blockly.Msg["IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR"] = "이 기능은 중복된 입력이 있습니다.";
Blockly.Msg["IOS_PROCEDURES_INPUTS"] = "입력";

Blockly.Msg["IOS_VARIABLES_ADD_BUTTON"] = "추가";
Blockly.Msg["IOS_VARIABLES_ADD_VARIABLE"] = "+ 변수 추가";
Blockly.Msg["IOS_VARIABLES_DELETE_BUTTON"] = "삭제";
Blockly.Msg["IOS_VARIABLES_EMPTY_NAME_ERROR"] = "비어있는 변수 이름을 사용할 수 없습니다.";
Blockly.Msg["IOS_VARIABLES_RENAME_BUTTON"] = "이름 바꾸기";
Blockly.Msg["IOS_VARIABLES_VARIABLE_NAME"] = "변수 이름";

Blockly.Msg["LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
Blockly.Msg["LISTS_CREATE_EMPTY_TOOLTIP"] = "어떠한 항목도 없는, 길이가 0인 리스트을 반환합니다.";

Blockly.Msg["LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "섹션을 추가, 제거하거나 순서를 변경하여 이 리스트 블록을 재구성합니다.";
Blockly.Msg["LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg["LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "항목을 리스트에 추가합니다.";
Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"] = "원하는 수의 항목들로 리스트을 생성합니다.";

Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FIRST"] = "첫 번째 항목을 찾아 반환합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_FROM"] = "리스트에서 특정 위치의 항목을 반환합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_LAST"] = "마지막 항목을 찾아 반환합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_RANDOM"] = "리스트의 항목들 중, 랜덤으로 선택해 반환합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST"] = "첫 번째 항목을 찾아내 돌려주고, 그 항목을 리스트에서 삭제합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM"] = "리스트의 특정 위치에 있는 항목을 제거하고 반환합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST"] = "마지막 항목을 찾아내 돌려주고, 그 항목을 리스트에서 삭제합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM"] = "리스트에서 임의 위치의 항목을 찾아내 삭제하고 반환합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST"] = "리스트에서 첫 번째 항목을 삭제합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM"] = "리스트에서 특정 위치의 항목을 삭제합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST"] = "리스트에서 마지막 항목을 찾아 삭제합니다.";
Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM"] = "리스트에서 랜덤하게 항목을 삭제합니다.";

Blockly.Msg["LISTS_GET_SUBLIST_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
Blockly.Msg["LISTS_GET_SUBLIST_TOOLTIP"] = "리스트의 특정 부분에 대한 복사본을 만듭니다.";

Blockly.Msg["LISTS_INDEX_FROM_END_TOOLTIP"] = "%1가 마지막으로 나타난 위치입니다.";
Blockly.Msg["LISTS_INDEX_FROM_START_TOOLTIP"] = "%1가 처음으로 나타난 위치입니다.";
Blockly.Msg["LISTS_INDEX_OF_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
Blockly.Msg["LISTS_INDEX_OF_TOOLTIP"] = "리스트에서 항목이 처음 또는 마지막으로 나타나는 위치를 반환합니다. 항목이 없으면 %1을 반환합니다.";

Blockly.Msg["LISTS_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#is-empty";
Blockly.Msg["LISTS_ISEMPTY_TOOLTIP"] = "리스트가 비었을 때 참을 반환합니다.";

Blockly.Msg["LISTS_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#length-of";
Blockly.Msg["LISTS_LENGTH_TOOLTIP"] = "리스트의 길이를 반환합니다.";

Blockly.Msg["LISTS_REPEAT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg["LISTS_REPEAT_TOOLTIP"] = "지정된 값을, 지정된 개수 만큼 넣어, 리스트을 생성합니다.";

Blockly.Msg["LISTS_SET_INDEX_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#in-list--set";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST"] = "항목을 리스트의 처음 위치에 삽입합니다.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_FROM"] = "리스트의 특정 위치에 항목을 삽입합니다.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_LAST"] = "리스트의 마지막에 항목을 추가합니다.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM"] = "리스트에서 임의 위치에 항목을 삽입합니다.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FIRST"] = "첫 번째 위치의 항목으로 설정합니다.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_FROM"] = "리스트의 특정 위치에 있는 항목으로 설정합니다.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_LAST"] = "마지막 항목으로 설정합니다.";
Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_SET_RANDOM"] = "리스트에서 임의 위치의 항목을 설정합니다.";

Blockly.Msg["LISTS_SORT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
Blockly.Msg["LISTS_SORT_TOOLTIP"] = "리스트의 사본을 정렬합니다.";

Blockly.Msg["LISTS_SPLIT_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_JOIN"] = "리스트의 각 항목을 지정된 구분자로 연결하여 하나의 텍스트로 만듭니다.";
Blockly.Msg["LISTS_SPLIT_TOOLTIP_SPLIT"] = "텍스트에서 지정된 구분자를 기준으로 각각의 항목으로 분할한 리스트를 만듭니다.";

Blockly.Msg["LOGIC_BOOLEAN_HELPURL"] = "https://ko.wikipedia.org/wiki/%EC%A7%84%EB%A6%BF%EA%B0%92";
Blockly.Msg["LOGIC_BOOLEAN_TOOLTIP"] = "참(true) 혹은 거짓(false) 값을 지정합니다.";

Blockly.Msg["LOGIC_COMPARE_HELPURL"] = "https://ko.wikipedia.org/wiki/부등식";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_EQ"] = "두 값이 같으면, 참(true) 값을 반환합니다.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GT"] = "첫 번째 값이 두 번째 값보다 크면, 참(true) 값을 반환합니다.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_GTE"] = "첫 번째 값이 두 번째 값보다 크거나 같으면, 참(true) 값을 반환합니다.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LT"] = "첫 번째 값이 두 번째 값보다 작으면, 참(true) 값을 반환합니다.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_LTE"] = "첫 번째 값이 두 번째 값보다 작거나 같으면, 참(true) 값을 반환합니다.";
Blockly.Msg["LOGIC_COMPARE_TOOLTIP_NEQ"] = "두 값이 서로 다르면, 참(true) 값을 반환합니다.";

Blockly.Msg["LOGIC_NEGATE_HELPURL"] = "https://ko.wikipedia.org/wiki/%EB%B6%80%EC%A0%95";
Blockly.Msg["LOGIC_NEGATE_TOOLTIP"] = "입력값이 거짓이라면 참을 반환합니다. 참이라면 거짓을 반환합니다.";

Blockly.Msg["LOGIC_NULL_HELPURL"] = "https://en.wikipedia.org/wiki/Nullable_type";
Blockly.Msg["LOGIC_NULL_TOOLTIP"] = "빈 값을 반환합니다.";

Blockly.Msg["LOGIC_OPERATION_HELPURL"] = "https://ko.wikipedia.org/wiki/%EB%B6%88_%EB%85%BC%EB%A6%AC";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_AND"] = "두 값이 모두 참(true) 값이면, 참 값을 반환합니다.";
Blockly.Msg["LOGIC_OPERATION_TOOLTIP_OR"] = "적어도 하나의 값이 참일 경우 참을 반환합니다.";

Blockly.Msg["LOGIC_TERNARY_HELPURL"] = "https://ko.wikipedia.org/wiki/물음표";
Blockly.Msg["LOGIC_TERNARY_TOOLTIP"] = "'test'의 조건을 검사합니다. 조건이 참이면 'if true'에 지정된 값을 반환합니다. 거짓이면 'if false'에 지정된 값을 반환합니다.";

Blockly.Msg["MATH_ARITHMETIC_HELPURL"] = "https://ko.wikipedia.org/wiki/산술";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_ADD"] = "두 수의 합을 반환합니다.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_DIVIDE"] = "두 수의 나눈 결과를 반환합니다.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MINUS"] = "두 수간의 차이를 반환합니다.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_MULTIPLY"] = "두 수의 곱을 반환합니다.";
Blockly.Msg["MATH_ARITHMETIC_TOOLTIP_POWER"] = "첫 번째 수를 두 번째 수 만큼, 거듭제곱 한 결과값을 반환합니다.";

Blockly.Msg["MATH_CHANGE_HELPURL"] = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
Blockly.Msg["MATH_CHANGE_TOOLTIP"] = "변수 '%1' 에 저장되어있는 값에, 지정된 수를 더해, 변수에 다시 저장합니다.";

Blockly.Msg["MATH_CONSTANT_HELPURL"] = "https://ko.wikipedia.org/wiki/수학_상수";
Blockly.Msg["MATH_CONSTANT_TOOLTIP"] = "일반적인 상수 값들 중 하나를 반환합니다. : π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), or ∞ (infinity).";

Blockly.Msg["MATH_CONSTRAIN_HELPURL"] = "https://ko.wikipedia.org/wiki/클램핑_(그래픽)";
Blockly.Msg["MATH_CONSTRAIN_TOOLTIP"] = "어떤 수를, 특정 범위의 값이 되도록 강제로 조정합니다.";

Blockly.Msg["MATH_IS_TOOLTIP"] = "어떤 수가 짝수, 홀수, 소수, 정수, 양수, 음수, 나누어 떨어지는 수인지 확인하고 그 결과를 반환합니다.";

Blockly.Msg["MATH_MODULO_HELPURL"] = "https://en.wikipedia.org/wiki/Modulo_operation";
Blockly.Msg["MATH_MODULO_TOOLTIP"] = "첫 번째 수를 두 번째 수로 나눈 나머지 값을 반환합니다.";

Blockly.Msg["MATH_NUMBER_HELPURL"] = "https://ko.wikipedia.org/wiki/수_(수학)";

Blockly.Msg["MATH_ONLIST_HELPURL"] = "";
Blockly.Msg["MATH_ONLIST_TOOLTIP_AVERAGE"] = "리스트에 들어있는 값들의 산술 평균(arithmetic mean)을 반환합니다.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MAX"] = "리스트에 들어있는 값들 중 가장 큰 값(max)을 반환합니다.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MEDIAN"] = "리스트에 들어있는 값들 중 중간값(median)을 반환합니다.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MIN"] = "리스트에 들어있는 값들 중 가장 작은 값(min)을 반환합니다.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_MODE"] = "리스트에 들어있는 값들 중 가장 여러 번 들어있는 항목들(최빈값, modes)의 리스트를 반환합니다.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_RANDOM"] = "리스트에서 임의의 항목을 반환합니다.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_STD_DEV"] = "리스트에 들어있는 값들의 표준 편차(standard deviation)를 반환합니다.";
Blockly.Msg["MATH_ONLIST_TOOLTIP_SUM"] = "리스트에 들어있는 값들의 총합(sum)을 반환합니다.";

Blockly.Msg["MATH_RANDOM_INT_HELPURL"] = "https://en.wikipedia.org/wiki/Random_number_generation";
Blockly.Msg["MATH_RANDOM_INT_TOOLTIP"] = "두 주어진 숫자 사이의 임의 정수값을 반환합니다.";

Blockly.Msg["MATH_ROUND_HELPURL"] = "https://ko.wikipedia.org/wiki/반올림";
Blockly.Msg["MATH_ROUND_TOOLTIP"] = "어떤 수를 반올림(round)/올림(round up)/버림(round down)한 결과를 정수값으로 반환합니다.";

Blockly.Msg["MATH_SINGLE_HELPURL"] = "https://ko.wikipedia.org/wiki/제곱근";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ABS"] = "지정된 수의 절대값(absolute)을 정수로 반환합니다.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_EXP"] = "e의 거듭제곱 값을 반환합니다.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LN"] = "지정된 수의 자연로그(natural logarithm, log e) 값을 반환합니다.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_LOG10"] = "지정된 수의 상용로그(logarithm, log 10) 값을 반환합니다.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_NEG"] = "지정된 수의 부호를 반대로 한 값을 반환합니다.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_POW10"] = "10의 거듭제곱 값을 반환합니다.";
Blockly.Msg["MATH_SINGLE_TOOLTIP_ROOT"] = "지정된 수의 제곱근을 반환합니다.";

Blockly.Msg["MATH_TRIG_HELPURL"] = "https://ko.wikipedia.org/wiki/삼각함수";
Blockly.Msg["MATH_TRIG_TOOLTIP_ACOS"] = "지정된 수에 대한 역코사인(arc-cosine, acos) 각도를 반환합니다.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ASIN"] = "지정된 수에 대한 역사인(arc-sine, asin) 각도를 반환합니다.";
Blockly.Msg["MATH_TRIG_TOOLTIP_ATAN"] = "지정된 수에 대한 역탄젠트(arc-tangent, atan) 각도를 반환합니다.";
Blockly.Msg["MATH_TRIG_TOOLTIP_COS"] = "지정된 각도에 대한 코사인(cosine, cos) 값을 반환합니다.";
Blockly.Msg["MATH_TRIG_TOOLTIP_SIN"] = "지정된 각도에 대한 사인(sine, sin) 값을 반환합니다.";
Blockly.Msg["MATH_TRIG_TOOLTIP_TAN"] = "지정된 각도에 대한 탄젠트(tangent, tan) 값을 반환합니다.";

Blockly.Msg["NEW_COLOUR_VARIABLE"] = "색 변수 만들기...";
Blockly.Msg["NEW_NUMBER_VARIABLE"] = "숫자 변수 만들기....";
Blockly.Msg["NEW_STRING_VARIABLE"] = "문자열 변수 만들기...";
Blockly.Msg["NEW_VARIABLE"] = "변수 만들기...";
Blockly.Msg["NEW_VARIABLE_TITLE"] = "새 변수 이름:";
Blockly.Msg["NEW_VARIABLE_TYPE_TITLE"] = "새 변수 유형:";

Blockly.Msg["PROCEDURES_CALLNORETURN_HELPURL"] = "https://ko.wikipedia.org/wiki/함수_(프로그래밍)";
Blockly.Msg["PROCEDURES_CALLNORETURN_TOOLTIP"] = "미리 정의해 둔 '%1' 함수를 실행합니다.";
Blockly.Msg["PROCEDURES_CALLRETURN_HELPURL"] = "https://ko.wikipedia.org/wiki/함수_(프로그래밍)";
Blockly.Msg["PROCEDURES_CALLRETURN_TOOLTIP"] = "미리 정의해 둔 '%1' 함수를 실행하고, 함수를 실행한 결과 값을 반환합니다.";

Blockly.Msg["PROCEDURES_DEFNORETURN_HELPURL"] = "https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98_%28%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%29";
Blockly.Msg["PROCEDURES_DEFNORETURN_TOOLTIP"] = "실행 후, 결과 값을 돌려주지 않는 함수를 만듭니다.";

Blockly.Msg["PROCEDURES_DEFRETURN_HELPURL"] = "https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98_%28%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%29";
Blockly.Msg["PROCEDURES_DEFRETURN_TOOLTIP"] = "실행 후, 결과 값을 돌려주는 함수를 만듭니다.";
Blockly.Msg["PROCEDURES_DEF_DUPLICATE_WARNING"] = "경고: 이 함수에는 같은 이름을 사용하는 매개 변수들이 있습니다.";
Blockly.Msg["PROCEDURES_HIGHLIGHT_DEF"] = "함수 정의 찾기";

Blockly.Msg["PROCEDURES_IFRETURN_HELPURL"] = "http://c2.com/cgi/wiki?GuardClause";
Blockly.Msg["PROCEDURES_IFRETURN_TOOLTIP"] = "if에 지정된 조건식이 참이라면, return으로 지정한 값을 반환합니다.";
Blockly.Msg["PROCEDURES_IFRETURN_WARNING"] = "경고: 이 블록은, 함수 정의 블록 안에서만 사용할 수 있습니다.";

Blockly.Msg["PROCEDURES_MUTATORARG_TOOLTIP"] = "함수에 값을 더합니다.";
Blockly.Msg["PROCEDURES_MUTATORCONTAINER_TOOLTIP"] = "이 함수를 추가, 삭제, 혹은 재정렬합니다.";

Blockly.Msg["REDO"] = "다시 실행";
Blockly.Msg["REMOVE_COMMENT"] = "주석 제거";
Blockly.Msg["RENAME_VARIABLE"] = "변수 이름 바꾸기:";
Blockly.Msg["RENAME_VARIABLE_TITLE"] = "'%1' 변수 이름을 바꾸기:";

Blockly.Msg["TEXT_APPEND_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg["TEXT_APPEND_TOOLTIP"] = "'%1' 변수의 끝에 일부 텍스트를 덧붙입니다.";

Blockly.Msg["TEXT_CHANGECASE_HELPURL"] = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
Blockly.Msg["TEXT_CHANGECASE_TOOLTIP"] = "영문 대소문자 형태를 변경해 반환합니다.";

Blockly.Msg["TEXT_CHARAT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-text";
Blockly.Msg["TEXT_CHARAT_TOOLTIP"] = "지정된 위치의 문자를 반환합니다.";

Blockly.Msg["TEXT_CREATE_JOIN_ITEM_TOOLTIP"] = "텍스트에 항목을 추가합니다.";
Blockly.Msg["TEXT_CREATE_JOIN_TOOLTIP"] = "섹션을 추가, 제거하거나 순서를 변경하여 이 텍스트 블록을 재구성합니다.";

Blockly.Msg["TEXT_GET_SUBSTRING_HELPURL"] = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
Blockly.Msg["TEXT_GET_SUBSTRING_TOOLTIP"] = "텍스트 중 일부분을 반환합니다.";

Blockly.Msg["TEXT_INDEXOF_HELPURL"] = "https://github.com/google/blockly/wiki/Text#finding-text";
Blockly.Msg["TEXT_INDEXOF_TOOLTIP"] = "첫 번째 텍스트에서 두 번째 텍스트가 처음 또는 마지막으로 나타나는 위치를 반환합니다. 없으면 0을 반환합니다.";

Blockly.Msg["TEXT_ISEMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
Blockly.Msg["TEXT_ISEMPTY_TOOLTIP"] = "입력된 텍스트가 빈 텍스트(\"\")이면 참(true) 값을 반환합니다.";

Blockly.Msg["TEXT_JOIN_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-creation";
Blockly.Msg["TEXT_JOIN_TOOLTIP"] = "여러 개의 항목들을 이어붙인 새로운 텍스트를 만듭니다.";

Blockly.Msg["TEXT_LENGTH_HELPURL"] = "https://github.com/google/blockly/wiki/Text#text-modification";
Blockly.Msg["TEXT_LENGTH_TOOLTIP"] = "입력된 텍스트의 (공백을 포함한) 문자 개수를 반환합니다.";

Blockly.Msg["TEXT_PRINT_HELPURL"] = "https://github.com/google/blockly/wiki/Text#printing-text";
Blockly.Msg["TEXT_PRINT_TOOLTIP"] = "원하는 텍스트, 수, 값 등을 채팅창에 출력합니다.";

Blockly.Msg["TEXT_TEXT_HELPURL"] = "https://ko.wikipedia.org/wiki/문자열";
Blockly.Msg["TEXT_TEXT_TOOLTIP"] = "문자나 단어, 텍스트 등 사용할 텍스트 요소입니다.";

Blockly.Msg["TEXT_TRIM_HELPURL"] = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
Blockly.Msg["TEXT_TRIM_TOOLTIP"] = "텍스트의 왼쪽/오른쪽/양쪽에서 공백 문자를 제거해 반환합니다.";

Blockly.Msg["TODAY"] = "오늘";
Blockly.Msg["UNDO"] = "실행 취소";
Blockly.Msg["UNNAMED_KEY"] = "이름이 없는 키";

Blockly.Msg["VARIABLES_GET_HELPURL"] = "https://ko.wikipedia.org/wiki/%EB%B3%80%EC%88%98_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99)";
Blockly.Msg["VARIABLES_GET_TOOLTIP"] = "변수에 저장 되어있는 값을 반환합니다.";

Blockly.Msg["VARIABLES_SET_HELPURL"] = "https://ko.wikipedia.org/wiki/%EB%B3%80%EC%88%98_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99)";
Blockly.Msg["VARIABLES_SET_TOOLTIP"] = "변수의 값을 입력한 값으로 변경해 줍니다.";

Blockly.Msg["VARIABLE_ALREADY_EXISTS"] = "'%1' 변수는 이미 존재합니다.";
Blockly.Msg["VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE"] = "'%1' 변수는 다른 유형에 대해 이미 존재합니다: '%2'.";

Blockly.Msg["WORKSPACE_ARIA_LABEL"] = "Blockly Workspace";  // untranslated
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "말해 보세요...";