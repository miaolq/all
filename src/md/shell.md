1. 单双引号，反斜杠
2. $PATH
whitch
whereis
> <
>>
|
grep
tail

mkdir -p aa/bb  可以深层建立目录

# 表示注释
!
"" 禁止一些解释
'' 内部所有字符串当成普通字符串
Bash中的字符串通过' 和 "分隔符来定义，但是它们的含义并不相同。以'定义的字符串为原义字符串，其中的变量不会被转义，而 "定义的字符串会将变量值进行替换
https://www.gnu.org/software/bash/manual/html_node/Quoting.html

#!interpreter [optional-arg]

foo=bar
echo "$foo"
