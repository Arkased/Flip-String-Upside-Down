# -*- coding: utf-8 -*-
"""
Created on Tue Feb 26 18:06:00 2019
Takes a text file and flips it upside down

@author: kevin
"""
import codecs
inp = """a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z
A
B
C
D
E
F
G
H
I
J
K
L
M
N
O
P
Q
R
S
T
U
V
W
X
Y
Z
0
1
2
3
4
5
6
7
8
9
,
.
?
!
,
'
`
(
)
[
]
{
}
<
>
&"""

out = """ɐ
q
ɔ
p
ǝ
ɟ
ƃ
ɥ
ᴉ
ɾ
ʞ
l
ɯ
u
o
d
b
ɹ
s
ʇ
n
ʌ
ʍ
x
ʎ
z
∀
B
Ɔ
D
Ǝ
Ⅎ
פ
H
I
ſ
K
˥
W
N
O
Ԁ
Q
R
S
┴
∩
Λ
M
X
⅄
Z
0
Ɩ
ᄅ
Ɛ
ㄣ
ϛ
9
ㄥ
8
6
'
˙
¿
¡
,
,
,
)
(
]
[
}
{
>
<
&"""
inp = inp.split('\n')
out = out.split('\n')
flip = {inp[i]:out[i] for i in range(len(inp))}

def open_file(file = 'test_input.txt'):
    file = open(file, 'r', errors = 'ignore', encoding = 'utf-8')
    text = file.read()
    file.close()
    return text

def flip_text(text):
    flipped_text = ''
    for char in text:
        if char in flip:
            flipped_text = flip[char] + flipped_text
        else:
            flipped_text = char + flipped_text
    return flipped_text

def save_text(text, filename = 'test_output.txt'):
    file = codecs.open(filename, 'w', 'utf-8')
    file.write(text)
    file.close()