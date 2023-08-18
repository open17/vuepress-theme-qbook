# Markdown增强
## 图片增强
### 介绍
点击图片支持放大缩小旋转功能
### 语法
```md
!![alt](url)
```
### 示例
```md
!![img](https://github.githubassets.com/images/modules/dashboard/onboarding/gh-desktop.png)
```
!![img](https://github.githubassets.com/images/modules/dashboard/onboarding/gh-desktop.png)
## 荧光笔
### 使用
- `<h-lighter color="COLOR">WORD</h-lighter>`
- WORD替换为要高亮的文字
- `color`属性可选,COLOR为高亮颜色,不填`color`默认为黄色
- `COLOR`支持css颜色关键词/RGB/16进制颜色
### 示例
`这是一个<h-lighter>高亮</h-lighter>示例,你可以<h-lighter color="pink">切换</h-lighter><h-lighter color="rgb(33, 168, 252,0.6)">高亮</h-lighter>的<h-lighter color="#dafbe1">颜色</h-lighter>`   

这是一个<h-lighter>高亮</h-lighter>示例,你可以<h-lighter color="pink">切换</h-lighter><h-lighter color="rgb(33, 168, 252,0.6)">高亮</h-lighter>的<h-lighter color="#dafbe1">颜色</h-lighter>

## 选项卡
<el-card class="box-card">
<el-tabs >
<el-tab-pane label="c++">

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
typedef long long ll;
typedef unsigned long long ull;
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


</el-tab-pane>


<el-tab-pane label="python">

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


</el-tab-pane>
</el-tabs>
</el-card>