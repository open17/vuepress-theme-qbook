# Markdown Enhancement

## Video Embed

@tab

<[youtube]

```html
<IVideo w="590" h="351" youtube="5Kqyhu_eIcw" />
<!-- w width h height -->
```

<br/>

<IVideo w="590" h="351" youtube="5Kqyhu_eIcw" />

<()

<[bilibili]

```html
<IVideo w="560" h="351" bv="BV1CV4y1b72n" />
<!-- w 宽 h 高 -->
```
<br/>



<()



@@tab




## Highlighter
@tab

<[Introduction]

Highlighter (supported when the code block has no language tag in the code block)
- `<h-lighter color="COLOR">WORD</h-lighter>`
- WORD is replaced by the text to be highlighted
- The `color` attribute is optional, COLOR is the highlight color, and if `color` is not filled in, the default is yellow
- `COLOR` supports CSS color keywords/RGB/hexadecimal colors

<()

<[Example]

```md

This is a <h-lighter>highlight</h-lighter> example, you can <h-lighter color="pink">switch</h-lighter><h-lighter color="rgb(33, 168, 252,0.6)">highlight</h-lighter>'s <h-lighter color="#dafbe1">color</h-lighter>

```

This is a <h-lighter>highlight</h-lighter> example, you can <h-lighter color="pink">switch</h-lighter><h-lighter color="rgb(33, 168, 252,0.6)">highlight</h-lighter>'s <h-lighter color="#dafbe1">color</h-lighter>

```
Support when the code block has no language tag <h-lighter>using</h-lighter>
```

<()


@@tab




## Tabs
@tab



<[python]

```py
import sys
import heapq
import random
from math import ceil,floor,fmod,gcd,sqrt,inf
from bisect import bisect_left
from collections import defaultdict,Counter,deque,OrderedDict
from functools import lru_cache,cmp_to_key

#sys.setrecursionlimit(100000)

# 输入1
def ii():
    return int(sys.stdin.readline().strip())

# 输入2
def iin():
    return map(int,sys.stdin.readline().split())

def inn():
    return sys.stdin.readline().strip()
```


<()

<[c++]


```cpp
#include<bits/stdc++.h>
using namespace std;
// #define int long long
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define For(w, a, n) for(int w=(a);w<(n);++w)
#define _For(a,b,c) for(int a=(b);a>(c);a--)
#define all(x) (x).begin(),x.end()
#define inf 0x3f3f3f3f
#define endl '\n'
//对拍
#define fo1 freopen("data.in","r",stdin);freopen("res.out","w",stdout);
#define fo2 freopen("data.in","r",stdin);freopen("ans.out","w",stdout);
//输出数组
#define printA(a,b,c) cout<<'\n'<<"debug start"<<'\n';for(int i=a;i<=b;i++){cout<<c[i]<<' ';}cout<<'\n'<<"debug over"<<'\n'<<'\n';
typedef long long ll
typedef pair<int, int> pii;
int read();
void write(int);

const int N=5e5+5;
const int MOD=1e9+7;


void hhhh(){
}

signed main() {
    // hhhh();
    int T=read();
    while(T--){
        hhhh();
    }
    return 0;
}

inline int read() {
    int x = 0, f = 1;
    char ch = getchar();
    while (ch < '0' || ch > '9') {
        if (ch == '-')
            f = -1;
        ch = getchar();
    }
    while (ch >= '0' && ch <= '9') {
        x = x * 10 + ch - '0';
        ch = getchar();
    }
    return x * f;
}
inline void write(int x)
{
    if (x < 0) { putchar('-'); x = -x; }
    if (x > 9) write(x / 10);
    putchar(x % 10 + '0');
}
```

<()

@@tab





## Image Enhancement

@tab

<[Introduction]

Image enhancement supports zooming, rotating, and other functions when clicking on the image. Please use static resources/external links for the URL, see [Exception Troubleshooting](./guide.html#problems) for details.
```md
!![alt](url)
```
<()

<[Example]

```md
!![img](https://avatars.githubusercontent.com/u/125687556?s=48&v=4)
```
!![img](https://avatars.githubusercontent.com/u/125687556?s=48&v=4)

<()


@@tab

